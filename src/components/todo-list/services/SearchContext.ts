import {Todo, Filter} from "../types/types";

import {ISearchStrategy} from "./SearchStrategy";

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