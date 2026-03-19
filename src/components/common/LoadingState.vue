<script setup lang="ts">
interface Props {
  loading?: boolean
}

withDefaults(defineProps<Props>(), {
  loading: false,
})
</script>

<template>
  <div class="flex items-center justify-center min-h-60">
    <a-spin v-if="loading" size="large" />
    <slot v-else />
  </div>
</template>
