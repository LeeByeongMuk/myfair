import {Filter, Todo} from "../types/types";

export interface ISearchStrategy {
  execute(todos: Todo[], filter: Filter): Todo[];
}

export class AllSearchStrategy implements ISearchStrategy {
  execute(todos: Todo[]): Todo[] {
    return todos;
  }
}

export class TodoSearchStrategy implements ISearchStrategy {
  execute(todos: Todo[]): Todo[] {
    return todos.filter(todo => !todo.completed);
  }
}

export class DoneSearchStrategy implements ISearchStrategy {
  execute(todos: Todo[]): Todo[] {
    return todos.filter(todo => todo.completed);
  }
}