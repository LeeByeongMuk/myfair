import {
  AllSearchStrategy,
  DoneSearchStrategy,
  TodoSearchStrategy,
} from '@components/todo-list/services/SearchStrategy';
import { Todo } from '@components/todo-list/types/types';

const todos: Todo[] = [
  { id: 1, text: '할 일 1', completed: false },
  { id: 2, text: '할 일 2', completed: true },
];

const completedTodos: Todo[] = todos.filter(todo => todo.completed);
const incompleteTodos: Todo[] = todos.filter(todo => !todo.completed);

describe('SearchStrategy 인터페이스 검증', () => {
  describe('AllSearchStrategy', () => {
    const strategy = new AllSearchStrategy();

    test('모든 할 일을 반환한다.', () => {
      expect(strategy.execute(todos)).toEqual(todos);
    });
  });

  describe('TodoSearchStrategy', () => {
    const strategy = new TodoSearchStrategy();

    test('완료되지 않은 할 일만 반환한다.', () => {
      expect(strategy.execute(todos)).toEqual(incompleteTodos);
    });

    test('완료되지 않은 할 일이 없으면 빈 배열을 반환한다.', () => {
      const allCompletedTodos: Todo[] = [
        { id: 1, text: '할 일 1', completed: true },
        { id: 2, text: '할 일 2', completed: true },
      ];
      expect(strategy.execute(allCompletedTodos)).toEqual([]);
    });
  });

  describe('DoneSearchStrategy', () => {
    const strategy = new DoneSearchStrategy();

    test('완료된 할 일만 반환한다.', () => {
      expect(strategy.execute(todos)).toEqual(completedTodos);
    });

    test('완료된 할 일이 없으면 빈 배열을 반환한다.', () => {
      const allIncompleteTodos: Todo[] = [
        { id: 1, text: '할 일 1', completed: false },
        { id: 2, text: '할 일 2', completed: false },
      ];
      expect(strategy.execute(allIncompleteTodos)).toEqual([]);
    });
  });
});
