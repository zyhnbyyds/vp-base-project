/**
 * App Constants
 */

// App Meta
export const APP_NAME = 'Vite+ Template'
export const APP_VERSION = '1.0.0'
export const APP_DESCRIPTION =
  'A professional, open-source Vite+ template with Ant Design Vue, VueUse, and modern best practices'
export const APP_AUTHOR = 'Your Name'
export const APP_AUTHOR_URL = 'https://github.com'

// API Config
export const API_BASE_URL = import.meta.env.VITE_API_URL || 'https://api.example.com'
export const API_TIMEOUT = 30000

// Local Storage Keys
export const STORAGE_KEYS = {
  THEME: 'theme-mode',
  USER_PREFERENCES: 'user-preferences',
  AUTH_TOKEN: 'auth-token',
  USER_DATA: 'user-data',
} as const

// Routes
export const ROUTES = {
  HOME: '/',
  ABOUT: '/about',
  DOCS: '/docs',
  NOT_FOUND: '/404',
} as const

// Breakpoints (should match UnoCSS and Ant Design)
export const BREAKPOINTS = {
  XS: 0,
  SM: 640,
  MD: 768,
  LG: 1024,
  XL: 1280,
  XXL: 1536,
} as const

// Common Status
export const STATUS = {
  SUCCESS: 'success',
  ERROR: 'error',
  WARNING: 'warning',
  INFO: 'info',
  LOADING: 'loading',
} as const

// HTTP Status Codes
export const HTTP_STATUS = {
  OK: 200,
  CREATED: 201,
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  FORBIDDEN: 403,
  NOT_FOUND: 404,
  INTERNAL_SERVER_ERROR: 500,
  SERVICE_UNAVAILABLE: 503,
} as const
