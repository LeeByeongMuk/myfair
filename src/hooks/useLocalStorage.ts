import React, { useState, useEffect, useRef } from 'react';

import { localStorageHelper } from '@utils/storageHelper';

export function useLocalStorage<T>(
  key: string,
  initialValue: T
): [T, React.Dispatch<React.SetStateAction<T>>] {
  const [value, setValue] = useState<T>(initialValue);
  const isFirstRun = useRef(true);

  useEffect(() => {
    try {
      const value = localStorageHelper.get<T>(key, initialValue);
      setValue(value);
    } catch (error) {
      console.warn(`Error initializing localStorage key "${key}":`, error);
    }
  }, [key]);

  useEffect(() => {
    if (isFirstRun.current) {
      isFirstRun.current = false;
      return;
    }

    try {
      localStorageHelper.set(key, value);
    } catch (error) {
      console.warn(`Error setting localStorage key "${key}":`, error);
    }
  }, [key, value]);

  return [value, setValue];
}
