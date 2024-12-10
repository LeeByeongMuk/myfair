import React from 'react';

import TodoItem from '@components/todo-list/components/TodoItem';
import {
  EmptyTodoList,
  TodoListContainer,
} from '@components/todo-list/components/TodoList.emotion';
import { Todo } from '@components/todo-list/types/types';

interface TodoListProps {
  todos: Todo[];
  handleToggleTodo: (id: number) => void;
  handleDeleteTodo: (id: number) => void;
}

export default function TodoList({
  todos,
  handleToggleTodo,
  handleDeleteTodo,
}: TodoListProps) {
  return (
    <TodoListContainer>
      {todos.length === 0 ? (
        <EmptyTodoList>할 일이 없습니다.</EmptyTodoList>
      ) : (
        todos.map(todo => (
          <TodoItem
            key={todo.id}
            todo={todo}
            handleToggleTodo={handleToggleTodo}
            handleDeleteTodo={handleDeleteTodo}
          />
        ))
      )}
    </TodoListContainer>
  );
}
