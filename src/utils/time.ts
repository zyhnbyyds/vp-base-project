/**
 * Time & Date Utilities
 */

import dayjs from 'dayjs'

/**
 * Format date to specific format
 */
export function formatDate(date: string | Date | number, format = 'YYYY-MM-DD'): string {
  return dayjs(date).format(format)
}

/**
 * Get time ago (e.g. "2 hours ago")
 */
export function getTimeAgo(date: string | Date | number): string {
  const now = dayjs()
  const target = dayjs(date)
  const diffSeconds = now.diff(target, 'second')

  if (diffSeconds < 60) return 'just now'
  if (diffSeconds < 3600) return `${Math.floor(diffSeconds / 60)} minutes ago`
  if (diffSeconds < 86400) return `${Math.floor(diffSeconds / 3600)} hours ago`
  if (diffSeconds < 604800) return `${Math.floor(diffSeconds / 86400)} days ago`
  if (diffSeconds < 2592000) return `${Math.floor(diffSeconds / 604800)} weeks ago`

  return target.format('YYYY-MM-DD')
}

/**
 * Get remaining time until date
 */
export function getRemainingTime(endDate: string | Date | number): {
  days: number
  hours: number
  minutes: number
  seconds: number
} {
  const now = dayjs()
  const target = dayjs(endDate)
  const diff = target.diff(now)

  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / 1000 / 60) % 60),
    seconds: Math.floor((diff / 1000) % 60),
  }
}

/**
 * Check if date is today
 */
export function isToday(date: string | Date | number): boolean {
  return dayjs(date).isSame(dayjs(), 'day')
}

/**
 * Check if date is yesterday
 */
export function isYesterday(date: string | Date | number): boolean {
  return dayjs(date).isSame(dayjs().subtract(1, 'day'), 'day')
}
