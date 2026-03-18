<script setup lang="ts">
defineProps<{
  label: string
}>()
</script>

<template>
  <span
    class="inline-flex items-center rounded-full border border-cyan-500/30 bg-cyan-50 px-2.5 py-1 text-xs text-cyan-700 dark:border-cyan-400/30 dark:bg-cyan-400/10 dark:text-cyan-100"
  >
    {{ label }}
  </span>
</template>
