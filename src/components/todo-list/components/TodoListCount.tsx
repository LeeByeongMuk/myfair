import React from 'react';

import { TodoListCountContainer } from '@components/todo-list/components/TodoListCount.emotion';

interface TodoListCountProps {
  totalCount: number;
}

export default function TodoListCount({ totalCount }: TodoListCountProps) {
  return (
    <TodoListCountContainer>
      <p>총 {totalCount}개</p>
    </TodoListCountContainer>
  );
}
