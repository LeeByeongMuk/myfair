import React, {useState, useCallback} from "react";
import styled from "@emotion/styled";

interface TodoInputProps {
  addTodo: (text: string) => void;
}

const Input = styled.input`
  width: 100%;
  height: 92px;
  margin-top: 64px;
  padding: 0 32px;
  border-radius: 24px;
  color: #000000;
  font-family: Pretendard, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  font-size: 20px;
  line-height: 28px;
  text-align: left;
  text-underline-position: from-font;
  text-decoration-skip-ink: none;
  background: #E5E5E5;

  &:focus {
    outline: none;
    border-color: #005bb5;
  }
  
  &::placeholder {
    color: #B9B9B9;
  }
`;

export default function TodoInput({addTodo}: TodoInputProps) {
  const [input, setInput] = useState("");

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent<HTMLInputElement>) => {
      if (e.key === "Enter" && input.trim()) {
        addTodo(input.trim());
        setInput("");
      }
    },
    [addTodo, input]
  );

  return (
    <Input
      type="text"
      placeholder="할 일을 입력하세요"
      value={input}
      onChange={e => setInput(e.target.value)}
      onKeyDown={handleKeyDown}
    />
  );
};