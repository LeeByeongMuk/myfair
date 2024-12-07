import React from 'react';

import {
  CheckboxStyled,
  CheckboxWrapper,
  HiddenCheckbox,
} from '@components/todo-list/components/CheckBox.emotion';

import CheckIcon from '@images/Check.svg';

interface Props {
  id: string;
  isChecked: boolean;
  handleToggle: () => void;
}

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
      <CheckboxStyled checked={isChecked}>
        {isChecked && <CheckIcon />}
      </CheckboxStyled>
    </CheckboxWrapper>
  );
}
