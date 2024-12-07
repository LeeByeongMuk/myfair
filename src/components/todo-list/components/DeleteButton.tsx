import styled from '@emotion/styled';
import React from 'react';

import CloseIcon from '../../../../public/images/Close.svg';

interface Props {
  handleDelete: () => void;
}

const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 24px;
  height: 24px;
  border: none;
  background: none;
  cursor: pointer;

  svg path {
    fill: ${({ theme: { colors } }) => colors.textDisabled};
    transition: fill 0.2s;
  }
`;

export default function DeleteButton({ handleDelete }: Props) {
  return (
    <Button onClick={handleDelete} aria-label="Delete Todo">
      <CloseIcon />
    </Button>
  );
}
