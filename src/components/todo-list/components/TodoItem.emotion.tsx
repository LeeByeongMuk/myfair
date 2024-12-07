import styled from '@emotion/styled';

export const TodoItemContainer = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 32px 16px;
`;

export const TextLabel = styled.label<{ completed: boolean }>`
  overflow: hidden;
  width: calc(100% - 88px);
  font-size: 20px;
  font-weight: normal;
  line-height: 28px;
  text-align: left;
  text-overflow: ellipsis;
  white-space: nowrap;
  cursor: pointer;
  color: ${({ completed, theme: { colors } }) =>
    completed ? colors.textMuted : colors.textPrimary};

  &:hover {
    text-decoration: underline;
  }
`;
