import React from 'react';

import CheckBox from '@components/todo-list/components/CheckBox';
import DeleteButton from '@components/todo-list/components/DeleteButton';
import {
  TextLabel,
  TodoItemContainer,
} from '@components/todo-list/components/TodoItem.emotion';
import { Todo } from '@components/todo-list/types/types';

interface Props {
  todo: Todo;
  handleToggleTodo: (id: number) => void;
  handleDeleteTodo: (id: number) => void;
}

export default function TodoItem({
  todo,
  handleToggleTodo,
  handleDeleteTodo,
}: Props) {
  return (
    <TodoItemContainer role="todo-list-item">
      <CheckBox
        id={todo.id.toString()}
        isChecked={todo.completed}
        handleToggle={() => handleToggleTodo(todo.id)}
      />

      <TextLabel htmlFor={todo.id.toString()} completed={todo.completed}>
        {todo.text}
      </TextLabel>

      <DeleteButton handleDelete={() => handleDeleteTodo(todo.id)} />
    </TodoItemContainer>
  );
}
