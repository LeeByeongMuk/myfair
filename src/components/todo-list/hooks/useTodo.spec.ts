import { renderHook, act } from '@testing-library/react';

import useTodos from '@components/todo-list/hooks/useTodo';
import { MAX_TODO_TEXT_LENGTH } from '@components/todo-list/utils/validation';

jest.mock('@components/todo-list/utils/validation', () => ({
  MAX_TODO_TEXT_LENGTH: 20,
  validateTodoTextLength: jest.fn((text: string) => {
    return text.length > 20 ? `할 일은 20글자를 넘을 수 없습니다.` : null;
  }),
  validateMaxTodosCount: jest.fn((currentCount: number) => {
    return currentCount >= 10 ? `할 일은 10개를 초과할 수 없습니다.` : null;
  }),
}));

describe('useTodos 훅 테스트', () => {
  beforeEach(() => {
    jest.clearAllMocks();
    localStorage.clear();
  });

  test('초기 상태를 반환한다.', () => {
    const { result } = renderHook(() => useTodos());

    expect(result.current.filter).toBe('all');
    expect(result.current.filteredTodos).toEqual([]);
    expect(result.current.totalTodos).toBe(0);
    expect(result.current.totalFilteredTodos).toBe(0);
  });

  test('todo-list 을 추가한다.', () => {
    const { result } = renderHook(() => useTodos());

    act(() => {
      const error = result.current.handleAddTodo('new todo-list');
      expect(error).toBeNull();
    });

    expect(result.current.totalTodos).toBe(1);
    expect(result.current.filteredTodos).toEqual([
      { id: expect.any(Number), text: 'new todo-list', completed: false },
    ]);
  });

  test('todo-list 추가 시 유효성 검사를 실패하면 에러를 메세지를 반환한다.', () => {
    const { result } = renderHook(() => useTodos());

    act(() => {
      const error = result.current.handleAddTodo(
        'todo-list'.repeat(MAX_TODO_TEXT_LENGTH)
      );
      expect(error).toBe(
        `할 일은 ${MAX_TODO_TEXT_LENGTH}글자를 넘을 수 없습니다.`
      );
    });

    expect(result.current.totalTodos).toBe(0);
    expect(result.current.filteredTodos).toEqual([]);
  });

  test('todo-list-item 의 completed 상태를 토글한다.', () => {
    const { result } = renderHook(() => useTodos());

    act(() => {
      result.current.handleAddTodo('new todo-list');
    });
    const todo = result.current.filteredTodos[0];
    expect(todo).toBeDefined();

    act(() => {
      result.current.handleToggleTodo(todo.id);
    });
    expect(result.current.filteredTodos[0].completed).toBe(true);

    act(() => {
      result.current.handleToggleTodo(todo.id);
    });
    expect(result.current.filteredTodos[0].completed).toBe(false);
  });

  test('todo-list-item 를 삭제한다.', () => {
    const { result } = renderHook(() => useTodos());

    act(() => {
      result.current.handleAddTodo('new todo-list');
    });

    const todo = result.current.filteredTodos[0];
    expect(todo).toBeDefined();

    act(() => {
      result.current.handleDeleteTodo(todo.id);
    });
    expect(result.current.totalTodos).toBe(0);
    expect(result.current.filteredTodos).toEqual([]);
  });

  test('tabMenu 필터를 변경한다.', () => {
    const { result } = renderHook(() => useTodos());

    act(() => {
      result.current.handleAddTodo('new todo-list 1');
      result.current.handleAddTodo('new todo-list 2');
    });

    const todos = result.current.filteredTodos;
    expect(todos).toHaveLength(2);

    act(() => {
      result.current.handleToggleTodo(todos[0].id);
      result.current.handleChangeFilter('done');
    });
    expect(result.current.filteredTodos).toEqual([
      { ...todos[0], completed: true },
    ]);

    act(() => {
      result.current.handleChangeFilter('todo');
    });
    expect(result.current.filteredTodos).toEqual([todos[1]]);
  });
});
