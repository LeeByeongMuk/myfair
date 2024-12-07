import styled from '@emotion/styled';
import React from 'react';

import { Todo } from '../types/types';

import TodoItem from './TodoItem';

interface TodoListProps {
  todos: Todo[];
  handleToggleTodo: (id: number) => void;
  handleDeleteTodo: (id: number) => void;
}

const Container = styled.ul`
  list-style: none;
  padding: 0;
`;

export default function TodoList({
  todos,
  handleToggleTodo,
  handleDeleteTodo,
}: TodoListProps) {
  return (
    <Container>
      {todos.map(todo => (
        <TodoItem
          key={todo.id}
          todo={todo}
          handleToggleTodo={handleToggleTodo}
          handleDeleteTodo={handleDeleteTodo}
        />
      ))}
    </Container>
  );
}
