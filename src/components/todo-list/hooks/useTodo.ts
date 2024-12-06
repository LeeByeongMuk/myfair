import {useState, useCallback} from "react";
import {Todo, Filter} from "../types/types";
import {SearchContext} from "../context/SearchContext";
import {
  AllSearchStrategy,
  TodoSearchStrategy,
  DoneSearchStrategy,
} from "../strategies/SearchStrategy";

const filterToStrategyMap = {
  all: new AllSearchStrategy(),
  todo: new TodoSearchStrategy(),
  done: new DoneSearchStrategy(),
};

export default function useTodos() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [filter, setFilter] = useState<Filter>("all");

  const searchContext: SearchContext = new SearchContext(new AllSearchStrategy());

  /**
   * @description 할 일 추가
   * @param {string} text - 할 일 내용
   */
  const handleAddTodo = useCallback((text: string) => {
    const newTodo: Todo = {id: Date.now(), text, completed: false};
    setTodos((prev) => [...prev, newTodo]);
  }, []);

  /**
   * @description 할 일 토글
   * @param {number} id - 할 일 ID
   */
  const handleToggleTodo = useCallback((id: number) => {
    setTodos((prev) =>
      prev.map((todo) => (todo.id === id ? {...todo, completed: !todo.completed} : todo))
    );
  }, []);

  /**
   * @description 할 일 삭제
   * @param {number} id - 할 일 ID
   */
  const handleDeleteTodo = useCallback((id: number) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  }, []);

  /**
   * @description 필터 변경
   * @param {Filter} newFilter - 변경할 필터
   */
  const handleChangeFilter = useCallback(
    (newFilter: Filter) => {
      setFilter(newFilter);
      const strategy = filterToStrategyMap[newFilter] || filterToStrategyMap.all;
      searchContext.setStrategy(strategy);
    },
    [searchContext]
  );

  /**
   * @description 필터링된 할 일 목록
   */
  const filteredTodos = searchContext.executeStrategy(todos, filter);

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
