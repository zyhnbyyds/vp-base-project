/**
 * Number Utilities
 */

/**
 * Format number with commas
 */
export function formatNumber(num: number, decimals = 0): string {
  return new Intl.NumberFormat('en-US', {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  }).format(num)
}

/**
 * Format number as percentage
 */
export function toPercentage(num: number, decimals = 2): string {
  return `${(num * 100).toFixed(decimals)}%`
}

/**
 * Clamp number between min and max
 */
export function clamp(num: number, min: number, max: number): number {
  return Math.max(min, Math.min(max, num))
}

/**
 * Check if number is between range
 */
export function isBetween(num: number, min: number, max: number): boolean {
  return num >= min && num <= max
}

/**
 * Round number to specific decimals
 */
export function round(num: number, decimals = 0): number {
  return Math.round(num * Math.pow(10, decimals)) / Math.pow(10, decimals)
}
