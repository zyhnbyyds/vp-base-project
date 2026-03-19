/**
 * useTheme - Composable for theme management
 */

import { computed, ref } from 'vue'
import { useStorage } from '@vueuse/core'

export type ThemeMode = 'light' | 'dark' | 'auto'

export function useTheme() {
  const themeMode = useStorage<ThemeMode>('theme-mode', 'auto')
  const isDark = ref(false)

  // Check system preference on mount
  const initTheme = () => {
    if (themeMode.value === 'auto') {
      isDark.value = window.matchMedia('(prefers-color-scheme: dark)').matches
    } else {
      isDark.value = themeMode.value === 'dark'
    }
    applyTheme()
  }

  const applyTheme = () => {
    const html = document.documentElement
    if (isDark.value) {
      html.classList.add('dark')
    } else {
      html.classList.remove('dark')
    }
  }

  const toggleTheme = () => {
    isDark.value = !isDark.value
    if (isDark.value) {
      themeMode.value = 'dark'
    } else {
      themeMode.value = 'light'
    }
    applyTheme()
  }

  const setTheme = (mode: ThemeMode) => {
    themeMode.value = mode
    if (mode === 'auto') {
      isDark.value = window.matchMedia('(prefers-color-scheme: dark)').matches
    } else {
      isDark.value = mode === 'dark'
    }
    applyTheme()
  }

  return {
    themeMode,
    isDark: computed(() => isDark.value),
    toggleTheme,
    setTheme,
    initTheme,
  }
}
