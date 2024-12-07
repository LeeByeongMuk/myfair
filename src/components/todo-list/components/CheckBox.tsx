import styled from '@emotion/styled';
import React from 'react';

import CheckIcon from '../../../../public/images/Check.svg';

interface Props {
  id: string;
  isChecked: boolean;
  handleToggle: () => void;
}

const CheckboxWrapper = styled.div`
  position: relative;
  width: 32px;
  height: 32px;
`;

const HiddenCheckbox = styled.input`
  position: absolute;
  opacity: 0;
  width: 100%;
  height: 100%;
  margin: 0;
  cursor: pointer;
`;

const StyledCheckbox = styled.div<{ checked: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  border: 1px solid ${({ checked }) => (checked ? '#2182F3' : '#EAEAEA')};
  border-radius: 50%;
  background-color: ${({ checked }) => (checked ? '#EBF4FF' : '#FFFFFF')};
  cursor: pointer;
  transition:
    background-color 0.2s,
    border-color 0.2s;

  svg {
    width: 20px;
    height: 20px;
  }

  svg path {
    transform: scale(0.83);
    fill: #2182f3;
  }
`;

export default function CheckBox({ id, isChecked, handleToggle }: Props) {
  return (
    <CheckboxWrapper>
      <HiddenCheckbox
        type="checkbox"
        id={id}
        checked={isChecked}
        onChange={handleToggle}
        aria-checked={isChecked}
        aria-label="Toggle Todo"
      />
      <StyledCheckbox checked={isChecked}>
        {isChecked && <CheckIcon />}
      </StyledCheckbox>
    </CheckboxWrapper>
  );
}
