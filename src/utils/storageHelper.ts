export const localStorageHelper = {
  get<T>(key: string, defaultValue: T): T {
    try {
      const storedValue = localStorage.getItem(key);
      return storedValue ? JSON.parse(storedValue) : defaultValue;
    } catch (error) {
      console.error(`Error getting key "${key}" from localStorage`, error);
      return defaultValue;
    }
  },

  set<T>(key: string, value: T) {
    try {
      localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      console.error(`Error setting key "${key}" in localStorage`, error);
    }
  },
};

export const counterHelper = {
  getCounter(key: string, defaultValue: number = 0): number {
    return localStorageHelper.get<number>(key, defaultValue);
  },

  incrementCounter(key: string): number {
    const currentCounter = this.getCounter(key);
    const newCounter = currentCounter + 1;
    localStorageHelper.set(key, newCounter);
    return newCounter;
  },
};

export const createMockLocalStorage = () => {
  let store: Record<string, string> = {};

  return {
    getItem: jest.fn((key: string) => store[key] || null),
    setItem: jest.fn((key: string, value: string) => {
      store[key] = value;
    }),
    removeItem: jest.fn((key: string) => {
      delete store[key];
    }),
    clear: jest.fn(() => {
      store = {};
    }),
  };
};
