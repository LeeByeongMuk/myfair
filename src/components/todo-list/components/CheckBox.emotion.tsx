import styled from '@emotion/styled';

export const CheckboxWrapper = styled.div`
  position: relative;
  width: 32px;
  height: 32px;
`;

export const HiddenCheckbox = styled.input`
  position: absolute;
  opacity: 0;
  width: 100%;
  height: 100%;
  margin: 0;
  cursor: pointer;
`;

export const CheckboxStyled = styled.div<{ checked: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  border: 1px solid
    ${({ checked, theme: { colors } }) =>
      checked ? colors.primary200 : colors.border};
  border-radius: 50%;
  background-color: ${({ checked, theme: { colors } }) =>
    checked ? colors.primary100 : colors.white};
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
    fill: ${({ theme: { colors } }) => colors.primary200};
  }
`;
