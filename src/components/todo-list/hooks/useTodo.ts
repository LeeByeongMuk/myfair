import { useCallback, useMemo } from 'react';

import { SearchContext } from '@components/todo-list/services/SearchContext';
import {
  AllSearchStrategy,
  DoneSearchStrategy,
  TodoSearchStrategy,
} from '@components/todo-list/services/SearchStrategy';
import { Filter, Todo } from '@components/todo-list/types/types';
import {
  validateMaxTodosCount,
  validateTodoTextLength,
} from '@components/todo-list/utils/validation';

import { useLocalStorage } from '@hooks/useLocalStorage';

import { counterHelper } from '@utils/storageHelper';

const TODOS_KEY = 'todos';
const FILTER_KEY = 'filter';
const TODOS_UNIQUE_COUNTER_KEY = 'todosUniqueCounter';

const filterToStrategyMap = {
  all: new AllSearchStrategy(),
  todo: new TodoSearchStrategy(),
  done: new DoneSearchStrategy(),
};

export default function useTodos() {
  const [todos, setTodos] = useLocalStorage<Todo[]>(TODOS_KEY, []);
  const [filter, setFilter] = useLocalStorage<Filter>(FILTER_KEY, 'all');

  const totalTodos = todos.length;

  const searchContext = useMemo(
    () => new SearchContext(filterToStrategyMap[filter]),
    [filter]
  );

  /**
   * @description 필터링된 할 일 목록
   */
  const filteredTodos = searchContext.executeStrategy(todos, filter);

  /**
   * @description 할 일 추가
   * @param {string} text - 할 일 내용
   */
  const handleAddTodo = useCallback(
    (text: string) => {
      const validators = [
        () => validateTodoTextLength(text),
        () => validateMaxTodosCount(totalTodos),
      ];

      for (const validate of validators) {
        const error = validate();
        if (error) return error;
      }

      const id = counterHelper.incrementCounter(TODOS_UNIQUE_COUNTER_KEY);
      const newTodo: Todo = { id, text, completed: false };
      setTodos(prev => [...prev, newTodo]);

      return null;
    },
    [setTodos, totalTodos]
  );

  /**
   * @description 할 일 토글
   * @param {number} id - 할 일 ID
   */
  const handleToggleTodo = useCallback(
    (id: number) => {
      setTodos(prev =>
        prev.map(todo =>
          todo.id === id ? { ...todo, completed: !todo.completed } : todo
        )
      );
    },
    [setTodos]
  );

  /**
   * @description 할 일 삭제
   * @param {number} id - 할 일 ID
   */
  const handleDeleteTodo = useCallback(
    (id: number) => {
      setTodos(prev => prev.filter(todo => todo.id !== id));
    },
    [setTodos]
  );

  /**
   * @description 필터 변경
   * @param {Filter} newFilter - 변경할 필터
   */
  const handleChangeFilter = useCallback(
    (newFilter: Filter) => {
      setFilter(newFilter);
      const strategy =
        filterToStrategyMap[newFilter] || filterToStrategyMap.all;
      searchContext.setStrategy(strategy);
    },
    [searchContext, setFilter]
  );

  return {
    filter,
    filteredTodos,
    handleAddTodo,
    handleChangeFilter,
    handleDeleteTodo,
    handleToggleTodo,
    totalTodos,
    totalFilteredTodos: filteredTodos.length,
  };
}
