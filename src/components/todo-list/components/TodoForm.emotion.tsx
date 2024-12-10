import styled from '@emotion/styled';

export const TodoInput = styled.input`
  width: 100%;
  height: 92px;
  margin-top: 64px;
  padding: 0 32px;
  border-radius: 24px;
  color: ${({ theme: { colors } }) => colors.textPrimary};
  font-size: 20px;
  line-height: 28px;
  text-align: left;
  text-underline-position: from-font;
  text-decoration-skip-ink: none;
  background: ${({ theme: { colors } }) => colors.border};

  &:focus {
    outline: none;
  }

  &::placeholder {
    color: ${({ theme: { colors } }) => colors.textDisabled};
  }
`;
