import { SearchContext } from '@components/todo-list/services/SearchContext';
import { ISearchStrategy } from '@components/todo-list/services/SearchStrategy';
import { Todo } from '@components/todo-list/types/types';

class MockStrategy implements ISearchStrategy {
  execute(todos: Todo[]): Todo[] {
    return todos.filter(todo => todo.completed);
  }
}

const todos: Todo[] = [
  { id: 1, text: '할 일 1', completed: false },
  { id: 2, text: '할 일 2', completed: true },
];

describe('SearchContext 검증', () => {
  test('설정된 전략을 실행하여 필터링된 결과를 반환한다.', () => {
    const context = new SearchContext(new MockStrategy());
    const result = context.executeStrategy(todos, 'done');
    expect(result).toEqual([{ id: 2, text: '할 일 2', completed: true }]);
  });

  test('전략을 변경한 후 새로운 전략이 실행된다.', () => {
    const mockStrategy = new MockStrategy();
    const newStrategy: ISearchStrategy = {
      execute: jest.fn(() => todos),
    };

    const context = new SearchContext(mockStrategy);
    context.setStrategy(newStrategy);

    const result = context.executeStrategy(todos, 'all');
    expect(newStrategy.execute).toHaveBeenCalledWith(todos, 'all');
    expect(result).toEqual(todos);
  });
});
