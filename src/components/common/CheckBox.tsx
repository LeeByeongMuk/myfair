import React from 'react';

import {
  CheckboxStyled,
  CheckboxWrapper,
  HiddenCheckbox,
} from '@components/common/CheckBox.emotion';

import CheckIcon from '@images/Check.svg';

export interface CheckBoxProps {
  id: string;
  isChecked: boolean;
  handleToggle: () => void;
}

export default function CheckBox({
  id,
  isChecked,
  handleToggle,
}: CheckBoxProps) {
  return (
    <CheckboxWrapper>
      <HiddenCheckbox
        type="checkbox"
        id={id}
        checked={isChecked}
        onChange={handleToggle}
        aria-checked={isChecked}
        aria-label="Toggle Todo"
        data-testid={`checkbox-${id}`}
      />
      <CheckboxStyled checked={isChecked}>
        {isChecked && <CheckIcon data-testid="check-icon" />}
      </CheckboxStyled>
    </CheckboxWrapper>
  );
}
