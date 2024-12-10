import { renderHook, act, waitFor } from '@testing-library/react';

import { localStorageHelper } from '@utils/storageHelper';

import { useLocalStorage } from './useLocalStorage';

jest.mock('@utils/storageHelper', () => ({
  localStorageHelper: {
    get: jest.fn(),
    set: jest.fn(),
  },
}));

describe('useLocalStorage 훅 테스트', () => {
  const mockGet = localStorageHelper.get as jest.Mock;
  const mockSet = localStorageHelper.set as jest.Mock;

  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('초기 로드시 localStorage 에 저장된 값이 없으면 initialValue 를 반환한다.', async () => {
    mockGet.mockReturnValue('initialValue');
    const { result } = renderHook(() =>
      useLocalStorage('testKey', 'initialValue')
    );
    const [value] = result.current;
    expect(value).toBe('initialValue');
    expect(mockSet).not.toHaveBeenCalled();
  });

  test('초기 로드시 localStorage 에 저장된 값이 있으면 저장된 값을 반환한다.', () => {
    mockGet.mockReturnValue('storedValue');
    const { result } = renderHook(() =>
      useLocalStorage<string>('testKey', 'initialValue')
    );
    const [value] = result.current;
    expect(value).toBe('storedValue');
    expect(mockSet).not.toHaveBeenCalledWith('testKey', 'initialValue');
  });

  test('state 를 업데이트하면 localStorage 에 저장된다.', async () => {
    mockGet.mockReturnValue('initialValue');
    const { result } = renderHook(() =>
      useLocalStorage('testKey', 'initialValue')
    );
    const [, setValue] = result.current;
    act(() => {
      setValue('newValue');
    });
    await waitFor(() => {
      expect(mockSet).toHaveBeenCalledWith('testKey', 'newValue');
    });
  });
});
