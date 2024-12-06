import React from "react";
import styled from "@emotion/styled";

interface FooterProps {
  totalCount: number;
}

const Container = styled.div`
  margin-top: 32px;
  padding: 16px 0 16px 16px;
  font-family: "Pretendard Variable", Pretendard, -apple-system,
  BlinkMacSystemFont, system-ui, Roboto, "Helvetica Neue", "Segoe UI",
  "Apple SD Gothic Neo", "Noto Sans KR", "Malgun Gothic", "Apple Color Emoji",
  "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
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