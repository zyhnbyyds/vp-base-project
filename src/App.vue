<script setup lang="ts">
import { onMounted } from 'vue'
import { useTheme } from '@/composables'

const { initTheme } = useTheme()

onMounted(() => {
  initTheme()
})
</script>

<template>
  <div
    class="flex flex-col min-h-screen bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-100"
  >
    <Header />
    <main class="flex-1 max-w-7xl w-full mx-auto">
      <RouterView />
    </main>
    <Footer />
  </div>
</template>
