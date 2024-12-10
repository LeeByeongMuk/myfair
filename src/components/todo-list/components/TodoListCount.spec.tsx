import '@testing-library/jest-dom';

import { render, screen } from '@testing-library/react';
import React from 'react';

import TodoListCount from '@components/todo-list/components/TodoListCount';

import { wrapper } from '@tests/testUtils';

describe('TodoListCount 컴포넌트', () => {
  test('totalCount 값이 0일 때 올바르게 렌더링된다.', () => {
    render(<TodoListCount totalCount={0} />, { wrapper });

    expect(screen.getByText(/총 0개/i)).toBeInTheDocument();
  });

  test('totalCount 값이 10일 때 올바르게 렌더링된다.', () => {
    render(<TodoListCount totalCount={10} />, { wrapper });

    expect(screen.getByText(/총 10개/i)).toBeInTheDocument();
  });
});
