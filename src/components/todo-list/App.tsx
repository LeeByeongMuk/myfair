import React from 'react';

import {
  TodoListAppContainer,
  TodoListContainer,
  TodoListTitle,
} from '@components/todo-list/App.emotion';
import TodoForm from '@components/todo-list/components/TodoForm';
import TodoList from '@components/todo-list/components/TodoList';
import TodoListCount from '@components/todo-list/components/TodoListCount';
import TodoMenu from '@components/todo-list/components/TodoMenu';
import useTodos from '@components/todo-list/hooks/useTodo';

export default function TodoListApp() {
  const {
    filter,
    filteredTodos,
    handleAddTodo,
    handleChangeFilter,
    handleDeleteTodo,
    handleToggleTodo,
    totalCount,
  } = useTodos();

  return (
    <TodoListAppContainer>
      <TodoListTitle>To Do List</TodoListTitle>
      <TodoForm addTodo={handleAddTodo} />
      <TodoListContainer>
        <TodoMenu
          options={['all', 'todo', 'done']} // TODO: fix this
          currentFilter={filter}
          handleChangeFilter={handleChangeFilter}
        />
        <TodoListCount totalCount={totalCount} />
        <TodoList
          todos={filteredTodos}
          handleToggleTodo={handleToggleTodo}
          handleDeleteTodo={handleDeleteTodo}
        />
      </TodoListContainer>
    </TodoListAppContainer>
  );
}
