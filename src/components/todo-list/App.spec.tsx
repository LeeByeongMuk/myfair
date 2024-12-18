import '@testing-library/jest-dom';

import { render, screen } from '@testing-library/react';
import React from 'react';

import TodoListApp from '@components/todo-list/App';

import { wrapper } from '@tests/testUtils';

jest.mock('@components/todo-list/hooks/useTodo', () => ({
  __esModule: true,
  default: jest.fn(() => ({
    filter: 'all',
    filteredTodos: [],
    handleAddTodo: jest.fn(),
    handleChangeFilter: jest.fn(),
    handleDeleteTodo: jest.fn(),
    handleToggleTodo: jest.fn(),
    totalTodos: 0,
    totalFilteredTodos: 0,
  })),
}));

describe('TodoListApp 컴포넌트', () => {
  beforeEach(() => {
    render(<TodoListApp />, { wrapper });
  });

  test('기본 렌더링을 확인한다.', () => {
    expect(screen.getByText(/To Do List/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/할 일 입력/i)).toBeInTheDocument();
    expect(
      screen.getByPlaceholderText(/할 일을 입력하세요/i)
    ).toBeInTheDocument();
    expect(screen.getByText(/총\s*0개/i)).toBeInTheDocument();
  });

  test('TodoMenu 필터 옵션이 렌더링된다.', () => {
    const menuOptions = ['all', 'todo', 'done'];
    menuOptions.forEach(option => {
      expect(screen.getByText(option.toUpperCase())).toBeInTheDocument();
    });
  });
});
