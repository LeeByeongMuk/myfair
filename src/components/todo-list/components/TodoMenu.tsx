import React from 'react';

import {
  Button,
  TodoMenuContainer,
} from '@components/todo-list/components/TodoMenu.emotion';
import { Filter } from '@components/todo-list/types/types';

interface TodoMenuProps {
  options: Filter[];
  currentFilter: Filter;
  handleChangeFilter: (filter: Filter) => void;
}

export default function TodoMenu({
  options,
  currentFilter,
  handleChangeFilter,
}: TodoMenuProps) {
  return (
    <TodoMenuContainer>
      {options.map(option => (
        <Button
          key={option}
          active={currentFilter === option}
          onClick={() => handleChangeFilter(option)}
        >
          {option.toUpperCase()}
        </Button>
      ))}
    </TodoMenuContainer>
  );
}
