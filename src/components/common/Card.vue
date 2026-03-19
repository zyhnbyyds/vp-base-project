<script setup lang="ts">
interface Props {
  elevation?: number
  clickable?: boolean
  hover?: boolean
}

withDefaults(defineProps<Props>(), {
  elevation: 1,
  clickable: false,
  hover: true,
})
</script>

<template>
  <div
    class="rounded-lg bg-white p-4 transition-all duration-300"
    :class="[
      `shadow-${elevation}`,
      hover && 'hover:shadow-lg hover:(-translate-y-1)',
      clickable && 'cursor-pointer hover:(-translate-y-2)',
    ]"
  >
    <slot />
  </div>
</template>
