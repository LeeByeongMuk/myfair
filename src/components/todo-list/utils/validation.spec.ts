import {
  validateTodoTextLength,
  validateMaxTodosCount,
  MAX_TODO_TEXT_LENGTH,
  MIN_TODO_TEXT_LENGTH,
  MAX_TODOS_COUNT,
} from '@components/todo-list/utils/validation';

describe('todo-list 유효성 검사', () => {
  describe('validateTodoTextLength 유효성 검사 ', () => {
    test('할 일이 입력 되지 않으면 에러 메세지를 반환한다..', () => {
      expect(validateTodoTextLength('')).toBe(
        `할 일은 최소 ${MIN_TODO_TEXT_LENGTH}글자 이상이어야 합니다.`
      );
      expect(validateTodoTextLength(' ')).toBe(
        `할 일은 최소 ${MIN_TODO_TEXT_LENGTH}글자 이상이어야 합니다.`
      );
    });

    test(`할 일이 ${MAX_TODO_TEXT_LENGTH}글자를 초과하면 에러 메시지를 반환한다.`, () => {
      const longText = 'a'.repeat(MAX_TODO_TEXT_LENGTH + 1);
      expect(validateTodoTextLength(longText)).toBe(
        `할 일은 ${MAX_TODO_TEXT_LENGTH}글자를 넘을 수 없습니다.`
      );
    });

    test('할 일이 유효한 길이일 경우 null 을 반환한다.', () => {
      const validText = 'a'.repeat(MIN_TODO_TEXT_LENGTH);
      const validTextMax = 'a'.repeat(MAX_TODO_TEXT_LENGTH);
      expect(validateTodoTextLength(validText)).toBeNull();
      expect(validateTodoTextLength(validTextMax)).toBeNull();
    });
  });

  describe('validateMaxTodosCount 유효성 검사', () => {
    test(`할 일 개수가 ${MAX_TODOS_COUNT}개 이상이면 에러 메시지를 반환한다.`, () => {
      expect(validateMaxTodosCount(MAX_TODOS_COUNT)).toBe(
        `할 일은 ${MAX_TODOS_COUNT}개를 초과할 수 없습니다.`
      );
      expect(validateMaxTodosCount(MAX_TODOS_COUNT + 1)).toBe(
        `할 일은 ${MAX_TODOS_COUNT}개를 초과할 수 없습니다.`
      );
    });

    test('할 일 개수가 제한을 초과하지 않으면 null 을 반환한다.', () => {
      expect(validateMaxTodosCount(MAX_TODOS_COUNT - 1)).toBeNull();
      expect(validateMaxTodosCount(0)).toBeNull();
    });
  });
});
