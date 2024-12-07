import styled from '@emotion/styled';
import React from 'react';

import { Filter } from '../types/types';

interface TodoMenuProps {
  options: Filter[];
  currentFilter: Filter;
  handleChangeFilter: (filter: Filter) => void;
}

const Container = styled.div`
  display: flex;
  justify-content: center;
`;

const Button = styled.button<{ active: boolean }>`
  width: 108px;
  height: 40px;
  border-radius: 12px;
  background-color: ${({ active }) => (active ? '#EBF4FF' : '#FFFFFF')};
  color: ${({ active }) => (active ? '#2182F3' : '#454545')};
  text-align: center;
  font-family:
    'Pretendard Variable',
    Pretendard,
    -apple-system,
    BlinkMacSystemFont,
    system-ui,
    Roboto,
    'Helvetica Neue',
    'Segoe UI',
    'Apple SD Gothic Neo',
    'Noto Sans KR',
    'Malgun Gothic',
    'Apple Color Emoji',
    'Segoe UI Emoji',
    'Segoe UI Symbol',
    sans-serif;
  font-size: 16px;
  font-weight: 600;
  line-height: 40px;
  cursor: pointer;

  &:hover {
    background-color: #ebf4ff;
    color: #2182f3;
  }
`;

export default function TodoMenu({
  options,
  currentFilter,
  handleChangeFilter,
}: TodoMenuProps) {
  return (
    <Container>
      {options.map(option => (
        <Button
          key={option}
          active={currentFilter === option}
          onClick={() => handleChangeFilter(option)}
        >
          {option.toUpperCase()}
        </Button>
      ))}
    </Container>
  );
}
