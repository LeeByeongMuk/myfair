import React from 'react';

import { DeleteButtonStyled } from '@components/common/DeleteButton.emotion';

import CloseIcon from '@images/Close.svg';

export interface DeleteButtonProps {
  handleDelete: () => void;
}

export default function DeleteButton({ handleDelete }: DeleteButtonProps) {
  return (
    <DeleteButtonStyled
      onClick={handleDelete}
      aria-label="Delete"
      data-testid="delete-button"
    >
      <CloseIcon data-testid="close-icon" />
    </DeleteButtonStyled>
  );
}
