import { ISearchStrategy } from '@components/todo-list/services/SearchStrategy';
import { Filter, Todo } from '@components/todo-list/types/types';

export class SearchContext {
  private strategy: ISearchStrategy;

  constructor(strategy: ISearchStrategy) {
    this.strategy = strategy;
  }

  setStrategy(strategy: ISearchStrategy) {
    this.strategy = strategy;
  }

  executeStrategy(todos: Todo[], filter: Filter): Todo[] {
    return this.strategy.execute(todos, filter);
  }
}
