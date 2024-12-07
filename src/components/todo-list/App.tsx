import styled from '@emotion/styled';
import React from 'react';

import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';
import TodoListCount from './components/TodoListCount';
import TodoMenu from './components/TodoMenu';
import useTodos from './hooks/useTodo';

const Container = styled.section`
  width: 100%;
  max-width: 727px;
  min-width: 320px;
  margin: 0 auto;
`;

const TodoListContainer = styled.div`
  box-sizing: border-box;
  width: 100%;
  height: auto;
  padding: 32px;
  margin-top: 32px;
  border-radius: 24px;
  background: ${({ theme: { colors } }) => colors.white};
  box-shadow: 0 0 6px 0 ${({ theme: { colors } }) => colors.textPrimary};
`;

const TodoListTitle = styled.h2`
  font-size: 56px;
  font-weight: bold;
  line-height: 72px;
  text-align: center;
`;

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
    <Container>
      <TodoListTitle>To Do List</TodoListTitle>
      <TodoInput addTodo={handleAddTodo} />
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
    </Container>
  );
}
