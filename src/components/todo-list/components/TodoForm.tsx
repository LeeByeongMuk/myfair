import React, { useState, useCallback } from 'react';

import { TodoInput } from '@components/todo-list/components/TodoForm.emotion';

interface TodoInputProps {
  addTodo: (text: string) => void;
}

export default function TodoForm({ addTodo }: TodoInputProps) {
  const [input, setInput] = useState('');

  const handleSubmit = useCallback(
    (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      if (input.trim()) {
        addTodo(input.trim());
        setInput('');
      }
    },
    [addTodo, input]
  );

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="todo-input" style={{ display: 'none' }}>
        할 일 입력
      </label>
      <TodoInput
        type="text"
        id="todo-input"
        placeholder="할 일을 입력하세요"
        value={input}
        onChange={e => setInput(e.target.value)}
      />
      <button type="submit" style={{ display: 'none' }}>
        추가
      </button>
    </form>
  );
}
