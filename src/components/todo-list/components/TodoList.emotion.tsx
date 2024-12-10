import styled from '@emotion/styled';

export const TodoListContainer = styled.ul`
  list-style: none;
  padding: 0;
`;

export const EmptyTodoList = styled.p`
  font-size: 20px;
  color: ${({ theme: { colors } }) => colors.textSecondary};
  text-align: center;
`;
