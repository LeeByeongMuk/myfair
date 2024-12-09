export const MAX_TODO_TEXT_LENGTH = 20;
export const MIN_TODO_TEXT_LENGTH = 1;

export function validateTodoTextLength(text: string): string | null {
  const trimmedText = text.trim();
  if (trimmedText.length < MIN_TODO_TEXT_LENGTH) {
    return `할 일은 최소 ${MIN_TODO_TEXT_LENGTH}글자 이상이어야 합니다.`;
  }
  if (trimmedText.length > MAX_TODO_TEXT_LENGTH) {
    return `할 일은 ${MAX_TODO_TEXT_LENGTH}글자를 넘을 수 없습니다.`;
  }
  return null;
}

export const MAX_TODOS_COUNT = 10;

export function validateMaxTodosCount(currentCount: number): string | null {
  if (currentCount >= MAX_TODOS_COUNT) {
    return `할 일은 ${MAX_TODOS_COUNT}개를 초과할 수 없습니다.`;
  }
  return null;
}
