import { useCallback, useMemo } from 'react';

import { useLocalStorage } from '../../../hooks/useLocalStorage';
import { SearchContext } from '../services/SearchContext';
import {
  AllSearchStrategy,
  TodoSearchStrategy,
  DoneSearchStrategy,
} from '../services/SearchStrategy';
import { Todo, Filter } from '../types/types';

const TODOS_KEY = 'todos';
const FILTER_KEY = 'filter';

const filterToStrategyMap = {
  all: new AllSearchStrategy(),
  todo: new TodoSearchStrategy(),
  done: new DoneSearchStrategy(),
};

export default function useTodos() {
  const [todos, setTodos] = useLocalStorage<Todo[]>(TODOS_KEY, []);
  const [filter, setFilter] = useLocalStorage<Filter>(FILTER_KEY, 'all');

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
  const handleAddTodo = useCallback((text: string) => {
    const newTodo: Todo = { id: Date.now(), text, completed: false };
    setTodos(prev => [...prev, newTodo]);
  }, []);

  /**
   * @description 할 일 토글
   * @param {number} id - 할 일 ID
   */
  const handleToggleTodo = useCallback((id: number) => {
    setTodos(prev =>
      prev.map(todo =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  }, []);

  /**
   * @description 할 일 삭제
   * @param {number} id - 할 일 ID
   */
  const handleDeleteTodo = useCallback((id: number) => {
    setTodos(prev => prev.filter(todo => todo.id !== id));
  }, []);

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
    [searchContext]
  );

  return {
    filter,
    filteredTodos,
    handleAddTodo,
    handleChangeFilter,
    handleDeleteTodo,
    handleToggleTodo,
    totalCount: filteredTodos.length,
  };
}
