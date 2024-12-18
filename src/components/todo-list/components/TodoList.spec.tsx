import '@testing-library/jest-dom';

import { render, screen } from '@testing-library/react';
import React from 'react';

import TodoList from '@components/todo-list/components/TodoList';
import { Todo } from '@components/todo-list/types/types';

import { wrapper } from '@tests/testUtils';

jest.mock('@components/common/CheckBox');
jest.mock('@components/common/DeleteButton');

describe('TodoList 컴포넌트', () => {
  const mockHandleToggleTodo = jest.fn();
  const mockHandleDeleteTodo = jest.fn();

  const mockTodos = [
    { id: 1, text: '할 일 1', completed: false },
    { id: 2, text: '할 일 2', completed: true },
  ];

  function renderTodoList(mockTodos = [] as Todo[]) {
    return render(
      <TodoList
        todos={mockTodos}
        handleToggleTodo={mockHandleToggleTodo}
        handleDeleteTodo={mockHandleDeleteTodo}
      />,
      { wrapper }
    );
  }

  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('todos 배열이 비어있을 때, "할 일이 없습니다." 메시지를 렌더링한다.', () => {
    renderTodoList([]);

    expect(screen.getByText('할 일이 없습니다.')).toBeInTheDocument();
  });

  test('todos 배열이 있을 때, 각 TodoItem 이 렌더링된다.', () => {
    renderTodoList(mockTodos);

    mockTodos.forEach(todo => {
      expect(screen.getByText(todo.text)).toBeInTheDocument();
    });
  });

  test('TodoItem 이 todos 배열의 길이만큼 렌더링된다.', () => {
    renderTodoList(mockTodos);

    const items = screen.getAllByRole('todo-list-item');
    expect(items).toHaveLength(mockTodos.length);
  });
});
