/**
 * Storage Utilities (LocalStorage & SessionStorage)
 */

/**
 * Get item from localStorage
 */
export function getLocalItem<T>(key: string, defaultValue?: T): T | null {
  try {
    const item = localStorage.getItem(key)
    if (!item) return defaultValue ?? null
    return JSON.parse(item) as T
  } catch {
    return defaultValue ?? null
  }
}

/**
 * Set item to localStorage
 */
export function setLocalItem<T>(key: string, value: T): void {
  try {
    localStorage.setItem(key, JSON.stringify(value))
  } catch {
    console.error(`Failed to set localStorage item: ${key}`)
  }
}

/**
 * Remove item from localStorage
 */
export function removeLocalItem(key: string): void {
  try {
    localStorage.removeItem(key)
  } catch {
    console.error(`Failed to remove localStorage item: ${key}`)
  }
}

/**
 * Clear all localStorage
 */
export function clearLocalStorage(): void {
  try {
    localStorage.clear()
  } catch {
    console.error('Failed to clear localStorage')
  }
}

/**
 * Get item from sessionStorage
 */
export function getSessionItem<T>(key: string, defaultValue?: T): T | null {
  try {
    const item = sessionStorage.getItem(key)
    if (!item) return defaultValue ?? null
    return JSON.parse(item) as T
  } catch {
    return defaultValue ?? null
  }
}

/**
 * Set item to sessionStorage
 */
export function setSessionItem<T>(key: string, value: T): void {
  try {
    sessionStorage.setItem(key, JSON.stringify(value))
  } catch {
    console.error(`Failed to set sessionStorage item: ${key}`)
  }
}

/**
 * Remove item from sessionStorage
 */
export function removeSessionItem(key: string): void {
  try {
    sessionStorage.removeItem(key)
  } catch {
    console.error(`Failed to remove sessionStorage item: ${key}`)
  }
}
