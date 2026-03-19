<script setup lang="ts">
import { computed } from 'vue'
import { theme as antdTheme } from 'ant-design-vue'
import { useTheme } from '@/composables'

const { isDark } = useTheme()

const antdThemeConfig = computed(() => ({
  algorithm: isDark.value ? antdTheme.darkAlgorithm : antdTheme.defaultAlgorithm,
  token: {
    borderRadius: 10,
  },
}))
</script>

<template>
  <a-config-provider :theme="antdThemeConfig">
    <a-app>
      <div
        class="flex flex-col min-h-screen bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-100"
      >
        <Header />
        <main class="flex-1 max-w-7xl w-full mx-auto">
          <RouterView />
        </main>
        <Footer />
      </div>
    </a-app>
  </a-config-provider>
</template>
