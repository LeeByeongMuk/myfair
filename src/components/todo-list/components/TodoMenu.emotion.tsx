import styled from '@emotion/styled';

export const TodoMenuContainer = styled.div`
  display: flex;
  justify-content: center;
`;

export const Button = styled.button<{ active: boolean }>`
  width: 108px;
  height: 40px;
  border-radius: 12px;
  background-color: ${({ active, theme: { colors } }) =>
    active ? colors.primary100 : colors.white};
  color: ${({ active, theme: { colors } }) =>
    active ? colors.primary200 : colors.textTertiary};
  text-align: center;
  font-size: 16px;
  font-weight: 600;
  line-height: 40px;
  cursor: pointer;

  &:hover {
    background-color: ${({ theme: { colors } }) => colors.primary100};
    color: ${({ theme: { colors } }) => colors.primary200};
  }
`;
