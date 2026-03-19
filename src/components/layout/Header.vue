<script setup lang="ts">
import { computed } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { useResponsive, useTheme } from '@/composables'

const router = useRouter()
const route = useRoute()
const { isDark, toggleTheme } = useTheme()
const { isMobile } = useResponsive()

const menuItems = [
  { key: 'home', label: 'Home', icon: 'home', path: '/' },
  { key: 'about', label: 'About', icon: 'info-circle', path: '/about' },
  { key: 'docs', label: 'Docs', icon: 'file-text', path: '/docs' },
]

const isActive = (path: string) => route.path === path

const navigate = (path: string) => {
  router.push(path)
}

const navClasses = computed(() => ({
  'bg-white dark:bg-slate-900': true,
  'border-b border-slate-200 dark:border-slate-800': true,
  'transition-shadow': true,
  'shadow-sm': true,
}))
</script>

<template>
  <header :class="navClasses">
    <div class="flex items-center justify-between px-4 h-16 md:px-6 max-w-7xl mx-auto">
      <!-- Logo -->
      <router-link to="/" class="flex items-center gap-2">
        <div
          class="w-8 h-8 rounded-lg bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center"
        >
          <span class="text-white font-bold text-sm">V+</span>
        </div>
        <span v-if="!isMobile" class="font-bold text-lg hidden sm:inline"> Vite+ </span>
      </router-link>

      <!-- Menu -->
      <nav class="hidden md:flex items-center gap-1">
        <a-button
          v-for="item in menuItems"
          :key="item.key"
          type="text"
          size="large"
          :class="{ 'text-blue-500': isActive(item.path) }"
          @click="navigate(item.path)"
        >
          {{ item.label }}
        </a-button>
      </nav>

      <!-- Actions -->
      <div class="flex items-center gap-2">
        <!-- Theme Toggle -->
        <a-button
          type="text"
          shape="circle"
          size="large"
          :icon="isDark ? 'sun' : 'moon'"
          @click="toggleTheme"
        />

        <!-- Mobile Menu -->
        <a-dropdown v-if="isMobile">
          <template #overlay>
            <a-menu>
              <a-menu-item v-for="item in menuItems" :key="item.key" @click="navigate(item.path)">
                {{ item.label }}
              </a-menu-item>
            </a-menu>
          </template>
          <a-button type="text" shape="circle" size="large" icon="menu" />
        </a-dropdown>
      </div>
    </div>
  </header>
</template>

<style scoped>
:deep(.ant-btn) {
  @apply !font-medium;
}
</style>
