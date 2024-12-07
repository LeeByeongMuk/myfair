import styled from '@emotion/styled';
import React from 'react';

import { Todo } from '../types/types';

import CheckBox from './CheckBox';
import DeleteButton from './DeleteButton';

interface Props {
  todo: Todo;
  handleToggleTodo: (id: number) => void;
  handleDeleteTodo: (id: number) => void;
}

const Container = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 32px 16px;
`;

const TextLabel = styled.label<{ completed: boolean }>`
  overflow: hidden;
  width: calc(100% - 88px);
  font-size: 20px;
  font-weight: normal;
  line-height: 28px;
  text-align: left;
  text-overflow: ellipsis;
  white-space: nowrap;
  cursor: pointer;
  color: ${({ completed, theme: { colors } }) =>
    completed ? colors.textMuted : colors.textPrimary};

  &:hover {
    text-decoration: underline;
  }
`;

export default function TodoItem({
  todo,
  handleToggleTodo,
  handleDeleteTodo,
}: Props) {
  return (
    <Container>
      <CheckBox
        id={todo.id.toString()}
        isChecked={todo.completed}
        handleToggle={() => handleToggleTodo(todo.id)}
      />

      <TextLabel htmlFor={todo.id.toString()} completed={todo.completed}>
        {todo.text}
      </TextLabel>

      <DeleteButton handleDelete={() => handleDeleteTodo(todo.id)} />
    </Container>
  );
}
