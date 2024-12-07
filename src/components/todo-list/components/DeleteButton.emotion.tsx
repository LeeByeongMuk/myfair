import styled from '@emotion/styled';

export const DeleteButtonStyled = styled.button`
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
