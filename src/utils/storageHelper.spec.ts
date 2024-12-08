import {
  counterHelper,
  createMockLocalStorage,
  localStorageHelper,
} from '@utils/storageHelper';

const mockConsoleError = () => {
  return jest.spyOn(console, 'error').mockImplementation(() => {});
};

beforeEach(() => {
  const mockLocalStorage = createMockLocalStorage();

  Object.defineProperty(global, 'localStorage', {
    value: mockLocalStorage,
    writable: true,
  });
  jest.clearAllMocks();
  localStorage.clear();
});

afterEach(() => {
  jest.restoreAllMocks();
});

describe('localStorageHelper 검증', () => {
  test('저장된 값을 반환한다.', () => {
    localStorage.setItem('testKey', JSON.stringify('testValue'));
    const result = localStorageHelper.get<string>('testKey', 'defaultValue');
    expect(result).toBe('testValue');
  });

  test('저장된 값이 없으면 기본값을 반환한다.', () => {
    const result = localStorageHelper.get<string>(
      'nonExistingKey',
      'defaultValue'
    );
    expect(result).toBe('defaultValue');
  });

  test('JSON 파싱 중 에러가 발생하면 기본값을 반환한다.', () => {
    localStorage.setItem('testKey', 'invalidJson');
    const result = localStorageHelper.get<string>('testKey', 'defaultValue');
    expect(result).toBe('defaultValue');
  });

  test('값을 저장한다.', () => {
    localStorageHelper.set<string>('testKey', 'testValue');
    expect(localStorage.setItem).toHaveBeenCalledWith(
      'testKey',
      JSON.stringify('testValue')
    );
    expect(localStorage.getItem('testKey')).toBe(JSON.stringify('testValue'));
  });

  test('저장 중 에러가 발생하면 콘솔 에러를 출력한다.', () => {
    jest.spyOn(localStorage, 'setItem').mockImplementation(() => {
      throw new Error('Storage error');
    });
    const consoleErrorSpy = mockConsoleError();
    localStorageHelper.set<string>('testKey', 'testValue');
    expect(consoleErrorSpy).toHaveBeenCalledWith(
      'Error setting key "testKey" in localStorage',
      expect.any(Error)
    );
    consoleErrorSpy.mockRestore();
  });
});

describe('counterHelper 검증', () => {
  test('저장된 카운터 값을 반환한다.', () => {
    localStorage.setItem('counterKey', JSON.stringify(5));
    const result = counterHelper.getCounter('counterKey', 0);
    expect(result).toBe(5);
  });

  test('저장된 값이 없으면 기본값을 반환한다.', () => {
    const result = counterHelper.getCounter('nonExistingCounterKey', 10);
    expect(result).toBe(10);
  });

  test('카운터 값을 증가시킨다.', () => {
    localStorage.setItem('counterKey', JSON.stringify(5));
    const newCounter = counterHelper.incrementCounter('counterKey');
    expect(newCounter).toBe(6);
    expect(localStorage.setItem).toHaveBeenCalledWith(
      'counterKey',
      JSON.stringify(6)
    );
    expect(localStorage.getItem('counterKey')).toBe(JSON.stringify(6));
  });

  test('값이 없으면 기본값에서 1 증가시킨다.', () => {
    const newCounter = counterHelper.incrementCounter('newCounterKey');
    expect(newCounter).toBe(1);
    expect(localStorage.setItem).toHaveBeenCalledWith(
      'newCounterKey',
      JSON.stringify(1)
    );
    expect(localStorage.getItem('newCounterKey')).toBe(JSON.stringify(1));
  });

  test('저장 중 에러가 발생하면 콘솔 에러를 출력한다.', () => {
    jest.spyOn(localStorage, 'setItem').mockImplementation(() => {
      throw new Error('Storage error');
    });
    const consoleErrorSpy = mockConsoleError();
    counterHelper.incrementCounter('testCounterKey');
    expect(consoleErrorSpy).toHaveBeenCalledWith(
      'Error setting key "testCounterKey" in localStorage',
      expect.any(Error)
    );
    consoleErrorSpy.mockRestore();
  });
});
