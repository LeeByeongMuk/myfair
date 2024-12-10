import '@testing-library/jest-dom';

import { render, screen, fireEvent } from '@testing-library/react';
import React from 'react';

import { theme } from '@app/layout.emotion';

import TodoMenu from '@components/todo-list/components/TodoMenu';

import { wrapper } from '@tests/testUtils';

describe('TodoMenu 컴포넌트', () => {
  const mockHandleChangeFilter = jest.fn();

  beforeEach(() => {
    render(
      <TodoMenu
        options={['all', 'todo', 'done']}
        currentFilter="all"
        handleChangeFilter={mockHandleChangeFilter}
      />,
      {
        wrapper,
      }
    );
    jest.clearAllMocks();
  });

  test('필터 버튼들이 렌더링된다.', () => {
    expect(screen.getByText('ALL')).toBeInTheDocument();
    expect(screen.getByText('TODO')).toBeInTheDocument();
    expect(screen.getByText('DONE')).toBeInTheDocument();
  });

  test('활성화된 필터 버튼은 active 상태를 가진다.', () => {
    const activeButton = screen.getByText('TODO');

    expect(activeButton).toHaveStyle(`
      background-color: ${theme.colors.primary100};
      color: ${theme.colors.primary200};
    `);
  });

  test('버튼 클릭 시 handleChangeFilter 가 호출된다.', () => {
    const button = screen.getByText('TODO');
    fireEvent.click(button);
    expect(mockHandleChangeFilter).toHaveBeenCalledWith('todo');
  });
});
