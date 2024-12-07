'use client';

import styled from '@emotion/styled';
import React from 'react';

import TodoListApp from '../todo-list/App';

const Container = styled.div``;

const TodoUserListPage = () => {
  return (
    <Container>
      <TodoListApp />
    </Container>
  );
};

export default TodoUserListPage;
