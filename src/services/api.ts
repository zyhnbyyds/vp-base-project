/**
 * API Service - Axios instance and interceptors
 */

import axios from 'axios'
import { API_BASE_URL, API_TIMEOUT } from '@/constants'

const instance = axios.create({
  baseURL: API_BASE_URL,
  timeout: API_TIMEOUT,
  headers: {
    'Content-Type': 'application/json',
  },
})

// Request Interceptor
instance.interceptors.request.use(
  (config) => {
    // Add auth token if exists
    const token = localStorage.getItem('auth-token')
    if (token) {
      config.headers.Authorization = `Bearer ${token}`
    }
    return config
  },
  (error) => {
    return Promise.reject(error)
  },
)

// Response Interceptor
instance.interceptors.response.use(
  (response) => response.data,
  (error) => {
    // Handle common errors
    if (error.response?.status === 401) {
      // Handle unauthorized
      localStorage.removeItem('auth-token')
      window.location.href = '/'
    }
    return Promise.reject(error)
  },
)

export default instance
