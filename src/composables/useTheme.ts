/**
 * useTheme - Composable for theme management
 */

import { computed } from 'vue'
import { createGlobalState, useColorMode, usePreferredDark } from '@vueuse/core'

export type ThemeMode = 'light' | 'dark' | 'auto'

const useThemeState = createGlobalState(() => {
  // Keep class-based dark mode in sync with persisted user preference.
  const themeMode = useColorMode<ThemeMode>({
    attribute: 'class',
    selector: 'html',
    storageKey: 'theme-mode',
    initialValue: 'auto',
    modes: {
      light: 'light',
      dark: 'dark',
      auto: '',
    },
  })
  const preferredDark = usePreferredDark()

  const isDark = computed(
    () => themeMode.value === 'dark' || (themeMode.value === 'auto' && preferredDark.value),
  )

  const toggleTheme = () => {
    themeMode.value = isDark.value ? 'light' : 'dark'
  }

  const setTheme = (mode: ThemeMode) => {
    themeMode.value = mode
  }

  const initTheme = () => {
    // useColorMode applies the class eagerly; keep this for API compatibility.
  }

  return {
    themeMode,
    isDark,
    toggleTheme,
    setTheme,
    initTheme,
  }
})

export function useTheme() {
  return useThemeState()
}
