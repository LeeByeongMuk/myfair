import styled from '@emotion/styled';

export const TodoListAppContainer = styled.section`
  width: 100%;
  max-width: 727px;
  min-width: 320px;
  margin: 0 auto;
`;

export const TodoListContainer = styled.div`
  box-sizing: border-box;
  width: 100%;
  height: auto;
  padding: 32px;
  margin-top: 32px;
  border-radius: 24px;
  background: ${({ theme: { colors } }) => colors.white};
  box-shadow: 0 0 6px 0 ${({ theme: { colors } }) => colors.textPrimary};
`;

export const TodoListTitle = styled.h2`
  font-size: 56px;
  font-weight: bold;
  line-height: 72px;
  text-align: center;
`;
