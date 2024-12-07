import styled from '@emotion/styled';
import React, { useState, useCallback } from 'react';

interface TodoInputProps {
  addTodo: (text: string) => void;
}

const Input = styled.input`
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

export default function TodoInput({ addTodo }: TodoInputProps) {
  const [input, setInput] = useState('');

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent<HTMLInputElement>) => {
      if (e.key === 'Enter' && input.trim()) {
        addTodo(input.trim());
        setInput('');
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
}
