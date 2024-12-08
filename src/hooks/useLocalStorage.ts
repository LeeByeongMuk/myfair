import React, { useEffect, useState } from 'react';

import { localStorageHelper } from '@utils/storageHelper';

export function useLocalStorage<T>(
  key: string,
  initialValue: T
): [T, React.Dispatch<React.SetStateAction<T>>] {
  const [value, setValue] = useState<T>(initialValue);

  useEffect(() => {
    localStorageHelper.set(key, initialValue);
  }, [key, initialValue]);

  return [value, setValue];
}
