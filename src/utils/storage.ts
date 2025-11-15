export const createSafeStorage = (): Storage => {
  if (typeof window === 'undefined') {
    return {
      getItem: (): string | null => null,
      setItem: () => {},
      removeItem: () => {},
      clear: () => {},
      key: (): string | null => null,
      length: 0,
    } as Storage
  }

  try {
    const test = 'test'
    localStorage.setItem(test, test)
    localStorage.removeItem(test)
    return localStorage
  } catch (error) {
    console.warn('LocalStorage is not available, using memory storage')
    return {
      getItem: (): string | null => null,
      setItem: () => {},
      removeItem: () => {},
      clear: () => {},
      key: (): string | null => null,
      length: 0,
    } as Storage
  }
}