import '@testing-library/jest-dom';

import { render, screen, fireEvent } from '@testing-library/react';
import React from 'react';

import CheckBox from '@components/common/CheckBox';

import { wrapper } from '@tests/testUtils';

jest.mock('@images/Check.svg', () => ({
  __esModule: true,
  ReactComponent: () => <div>Mocked SVG</div>,
}));

describe('CheckBox 컴포넌트', () => {
  const mockHandleToggle = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('체크박스가 초기 Props 값에 따라 렌더링된다.', () => {
    render(
      <CheckBox id="1" isChecked={false} handleToggle={mockHandleToggle} />,
      { wrapper }
    );

    const hiddenCheckbox = screen.getByTestId('checkbox-1');
    expect(hiddenCheckbox).toBeInTheDocument();
    expect(hiddenCheckbox).not.toBeChecked();
    expect(screen.queryByTestId('check-icon')).toBeNull();
  });

  test('체크박스 클릭 시 handleToggle 이 호출된다.', () => {
    render(
      <CheckBox id="1" isChecked={false} handleToggle={mockHandleToggle} />,
      { wrapper }
    );

    const hiddenCheckbox = screen.getByTestId('checkbox-1');
    fireEvent.click(hiddenCheckbox);

    expect(mockHandleToggle).toHaveBeenCalledTimes(1);
  });

  test('접근성을 위한 ARIA 속성이 올바르게 설정된다.', () => {
    render(
      <CheckBox id="1" isChecked={true} handleToggle={mockHandleToggle} />,
      { wrapper }
    );

    const hiddenCheckbox = screen.getByTestId('checkbox-1');
    expect(hiddenCheckbox).toHaveAttribute('aria-checked', 'true');
    expect(hiddenCheckbox).toHaveAttribute('aria-label', 'Toggle Todo');
  });
});
