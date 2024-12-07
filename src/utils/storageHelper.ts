export const LocalStorageHelper = {
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
