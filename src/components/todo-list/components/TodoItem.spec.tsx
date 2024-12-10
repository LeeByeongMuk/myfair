import '@testing-library/jest-dom';

import { render, screen, fireEvent } from '@testing-library/react';
import React from 'react';

import { CheckBoxProps } from '@components/common/CheckBox';
import { DeleteButtonProps } from '@components/common/DeleteButton';
import TodoItem from '@components/todo-list/components/TodoItem';

import { wrapper } from '@tests/testUtils';

jest.mock('@components/common/CheckBox', () => ({
  __esModule: true,
  default: jest.fn(({ id, isChecked, handleToggle }: CheckBoxProps) => (
    <input
      type="checkbox"
      checked={isChecked}
      onChange={handleToggle}
      aria-checked={isChecked}
      aria-label="Toggle Todo"
      data-testid={`checkbox-${id}`}
    />
  )),
}));

jest.mock('@components/common/DeleteButton', () => ({
  __esModule: true,
  default: jest.fn(({ handleDelete }: DeleteButtonProps) => (
    <button
      onClick={handleDelete}
      aria-label="Delete Todo"
      data-testid="delete-button"
    >
      Delete
    </button>
  )),
}));

describe('TodoItem 컴포넌트', () => {
  const mockHandleToggleTodo = jest.fn();
  const mockHandleDeleteTodo = jest.fn();

  const mockTodo = {
    id: 1,
    text: '할 일 1',
    completed: false,
  };

  beforeEach(() => {
    render(
      <TodoItem
        todo={mockTodo}
        handleToggleTodo={mockHandleToggleTodo}
        handleDeleteTodo={mockHandleDeleteTodo}
      />,
      { wrapper }
    );
    jest.clearAllMocks();
  });

  test('TodoItem 이 올바르게 렌더링된다.', () => {
    expect(screen.getByText(mockTodo.text)).toBeInTheDocument();
    expect(screen.getByTestId(`checkbox-${mockTodo.id}`)).toBeInTheDocument();
    expect(screen.getByTestId('delete-button')).toBeInTheDocument();
  });

  test('체크박스 클릭 시 handleToggleTodo 가 호출된다.', () => {
    const checkbox = screen.getByTestId(`checkbox-${mockTodo.id}`);
    fireEvent.click(checkbox);

    expect(mockHandleToggleTodo).toHaveBeenCalledWith(mockTodo.id);
  });

  test('삭제 버튼 클릭 시 handleDeleteTodo 가 호출된다.', () => {
    const deleteButton = screen.getByTestId('delete-button');
    fireEvent.click(deleteButton);

    expect(mockHandleDeleteTodo).toHaveBeenCalledWith(mockTodo.id);
  });
});
