/**
 * Request Utilities - API Helper Functions
 */

/**
 * Build query string from object
 */
export function buildQueryString(params: Record<string, unknown>): string {
  return new URLSearchParams(
    Object.entries(params)
      .filter(([, value]) => value !== undefined && value !== null)
      .map(([key, value]) => [key, String(value)]),
  ).toString()
}

/**
 * Build URL with query params
 */
export function buildUrl(baseUrl: string, params?: Record<string, unknown>): string {
  if (!params || Object.keys(params).length === 0) return baseUrl

  const queryString = buildQueryString(params)
  const separator = baseUrl.includes('?') ? '&' : '?'

  return `${baseUrl}${separator}${queryString}`
}

/**
 * Convert snake_case keys to camelCase (for API responses)
 */
export function snakeToCamelCase(obj: Record<string, unknown>): Record<string, unknown> {
  const result: Record<string, unknown> = {}

  for (const [key, value] of Object.entries(obj)) {
    const camelKey = key.replace(/_([a-z])/g, (g) => g[1].toUpperCase())
    result[camelKey] = value
  }

  return result
}

/**
 * Convert camelCase keys to snake_case (for API requests)
 */
export function camelToSnakeCase(obj: Record<string, unknown>): Record<string, unknown> {
  const result: Record<string, unknown> = {}

  for (const [key, value] of Object.entries(obj)) {
    const snakeKey = key.replace(/([a-z0-9]|(?=[A-Z]))([A-Z])/g, '$1_$2').toLowerCase()
    result[snakeKey] = value
  }

  return result
}

/**
 * Simple retry logic for async functions
 */
export async function retry<T>(fn: () => Promise<T>, maxAttempts = 3, delay = 1000): Promise<T> {
  let lastError: Error | undefined

  for (let attempt = 1; attempt <= maxAttempts; attempt++) {
    try {
      return await fn()
    } catch (error) {
      lastError = error instanceof Error ? error : new Error(String(error))
      if (attempt < maxAttempts) {
        await new Promise((resolve) => setTimeout(resolve, delay * attempt))
      }
    }
  }

  throw lastError || new Error('Retry failed')
}
