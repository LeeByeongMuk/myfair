import React from 'react';

import { DeleteButtonStyled } from '@components/todo-list/components/DeleteButton.emotion';

import CloseIcon from '@images/Close.svg';

interface Props {
  handleDelete: () => void;
}

export default function DeleteButton({ handleDelete }: Props) {
  return (
    <DeleteButtonStyled onClick={handleDelete} aria-label="Delete Todo">
      <CloseIcon />
    </DeleteButtonStyled>
  );
}
