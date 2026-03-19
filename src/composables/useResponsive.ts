/**
 * useResponsive - Composable for responsive design
 */

import { computed } from 'vue'
import { useMediaQuery } from '@vueuse/core'

export function useResponsive() {
  // Mobile: < 768px
  const isMobile = useMediaQuery('(max-width: 767px)')

  // Tablet: 768px - 1023px
  const isTablet = useMediaQuery('(min-width: 768px) and (max-width: 1023px)')

  // Desktop: >= 1024px
  const isDesktop = useMediaQuery('(min-width: 1024px)')

  // Large Desktop: >= 1536px
  const isLargeDesktop = useMediaQuery('(min-width: 1536px)')

  // Small screens
  const isSmallScreen = useMediaQuery('(max-width: 640px)')

  // Landscape
  const isLandscape = useMediaQuery('(orientation: landscape)')

  // Portrait
  const isPortrait = useMediaQuery('(orientation: portrait)')

  return {
    isMobile: computed(() => isMobile.value),
    isTablet: computed(() => isTablet.value),
    isDesktop: computed(() => isDesktop.value),
    isLargeDesktop: computed(() => isLargeDesktop.value),
    isSmallScreen: computed(() => isSmallScreen.value),
    isLandscape: computed(() => isLandscape.value),
    isPortrait: computed(() => isPortrait.value),
  }
}
