export const MAX_TODO_TEXT_LENGTH = 20;

export function validateTodoTextLength(text: string): string | null {
  if (text.trim().length > MAX_TODO_TEXT_LENGTH) {
    return `할 일은 ${MAX_TODO_TEXT_LENGTH}글자를 넘을 수 없습니다.`;
  }
  return null;
}

export const MAX_TODOS_COUNT = 10;

export function validateMaxTodosCount(
  currentCount: number
): string | null {
  if (currentCount >= MAX_TODOS_COUNT) {
    return `할 일은 ${MAX_TODOS_COUNT}개를 초과할 수 없습니다.`;
  }
  return null;
}
