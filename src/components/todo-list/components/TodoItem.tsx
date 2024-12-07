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
  border-bottom: 1px solid #eaeaea;
`;

const TextLabel = styled.label<{ completed: boolean }>`
  overflow: hidden;
  width: calc(100% - 88px);
  font-family:
    'Pretendard Variable',
    Pretendard,
    -apple-system,
    BlinkMacSystemFont,
    system-ui,
    Roboto,
    'Helvetica Neue',
    'Segoe UI',
    'Apple SD Gothic Neo',
    'Noto Sans KR',
    'Malgun Gothic',
    'Apple Color Emoji',
    'Segoe UI Emoji',
    'Segoe UI Symbol',
    sans-serif;
  font-size: 20px;
  font-weight: normal;
  line-height: 28px;
  text-align: left;
  text-overflow: ellipsis;
  white-space: nowrap;
  cursor: pointer;
  color: ${({ completed }) => (completed ? '#868686' : '#000')};
  
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
