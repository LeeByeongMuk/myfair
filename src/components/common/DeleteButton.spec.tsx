import '@testing-library/jest-dom';

import { render, screen, fireEvent } from '@testing-library/react';
import React from 'react';

import DeleteButton from '@components/common/DeleteButton';

import { wrapper } from '@tests/testUtils';

jest.mock('@images/Close.svg', () => ({
  __esModule: true,
  default: () => <svg data-testid="close-icon">Mocked SVG</svg>,
}));

describe('DeleteButton 컴포넌트', () => {
  const mockHandleDelete = jest.fn();

  beforeEach(() => {
    render(<DeleteButton handleDelete={mockHandleDelete} />, { wrapper });
    jest.clearAllMocks();
  });

  test('DeleteButton 이 올바르게 렌더링된다.', () => {
    const button = screen.getByTestId('delete-button');
    expect(button).toBeInTheDocument();
    expect(button).toHaveAttribute('aria-label', 'Delete');
    const icon = screen.getByTestId('close-icon');
    expect(icon).toBeInTheDocument();
  });

  test('클릭 시 handleDelete 가 호출된다.', () => {
    const button = screen.getByTestId('delete-button');
    fireEvent.click(button);
    expect(mockHandleDelete).toHaveBeenCalledTimes(1);
  });
});
