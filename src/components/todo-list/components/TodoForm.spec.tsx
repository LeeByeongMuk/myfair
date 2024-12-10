import '@testing-library/jest-dom';

import { render, screen, fireEvent } from '@testing-library/react';
import React from 'react';

import TodoForm from '@components/todo-list/components/TodoForm';

import { wrapper } from '@tests/testUtils';

describe('TodoForm 컴포넌트', () => {
  const mockHandleAddTodo = jest.fn();

  beforeEach(() => {
    render(<TodoForm handleAddTodo={mockHandleAddTodo} totalTodos={0} />, {
      wrapper,
    });
    jest.clearAllMocks();
  });

  test('입력 필드와 히든 버튼이 렌더링된다.', () => {
    expect(
      screen.getByPlaceholderText('할 일을 입력하세요')
    ).toBeInTheDocument();
    expect(screen.getByRole('textbox')).toHaveAttribute('maxLength', '20');
    expect(screen.getByRole('button', { hidden: true })).toBeInTheDocument();
  });

  test('입력 필드에 값을 입력하면 상태가 업데이트된다.', () => {
    const input = screen.getByPlaceholderText('할 일을 입력하세요');
    fireEvent.change(input, { target: { value: '새 할 일' } });
    expect(input).toHaveValue('새 할 일');
  });

  test('폼 제출 시 handleAddTodo 가 호출되고, 입력 필드는 초기화된다.', () => {
    mockHandleAddTodo.mockReturnValue(null);

    const input = screen.getByPlaceholderText('할 일을 입력하세요');
    const form = screen.getByRole('form');

    fireEvent.change(input, { target: { value: '새 할 일' } });
    fireEvent.submit(form);

    expect(mockHandleAddTodo).toHaveBeenCalledWith('새 할 일');
    expect(input).toHaveValue('');
  });

  test('폼 제출 시 handleAddTodo 가 에러 메시지를 반환하면 alert 이 호출된다.', () => {
    const mockAlert = jest.spyOn(window, 'alert').mockImplementation(() => {});
    mockHandleAddTodo.mockReturnValue('에러 메시지');

    const input = screen.getByPlaceholderText('할 일을 입력하세요');
    const form = screen.getByRole('form');

    fireEvent.change(input, { target: { value: '잘못된 할 일' } });
    fireEvent.submit(form);

    expect(mockHandleAddTodo).toHaveBeenCalledWith('잘못된 할 일');
    expect(mockAlert).toHaveBeenCalledWith('에러 메시지');
    expect(input).toHaveValue('잘못된 할 일');

    mockAlert.mockRestore();
  });
});
