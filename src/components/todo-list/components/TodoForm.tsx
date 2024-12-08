import React, { useState, useCallback } from 'react';

import { TodoInput } from '@components/todo-list/components/TodoForm.emotion';
import { MAX_TODO_TEXT_LENGTH } from '@components/todo-list/utils/validation';

interface TodoFormProps {
  handleAddTodo: (text: string) => string | null;
  totalTodos: number;
}

export default function TodoForm({ handleAddTodo, totalTodos }: TodoFormProps) {
  const [input, setInput] = useState('');

  const handleSubmit = useCallback(
    (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();

      const errorMessage = handleAddTodo(input.trim());
      if (errorMessage) {
        alert(errorMessage);
        return;
      }

      setInput('');
    },
    [handleAddTodo, input, totalTodos]
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
        maxLength={MAX_TODO_TEXT_LENGTH}
        value={input}
        onChange={e => setInput(e.target.value)}
      />
      <button type="submit" style={{ display: 'none' }}>
        추가
      </button>
    </form>
  );
}
