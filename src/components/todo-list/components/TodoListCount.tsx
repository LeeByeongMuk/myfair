import styled from "@emotion/styled";
import React from "react";

interface FooterProps {
  totalCount: number;
}

const Container = styled.div`
  margin-top: 32px;
  padding: 16px 0 16px 16px;
  font-size: 20px;
  font-weight: 400;
  line-height: 28px;
`;

export default function TodoListCount({totalCount}: FooterProps) {
  return (
    <Container>
      <p>총 {totalCount}개</p>
    </Container>
  );
};