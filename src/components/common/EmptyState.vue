<script setup lang="ts">
interface Props {
  title?: string
  description?: string
}

withDefaults(defineProps<Props>(), {
  title: 'No Data',
  description: 'There is nothing to show here',
})
</script>

<template>
  <div class="flex items-center justify-center min-h-60">
    <div class="text-center">
      <a-result status="404" :title="title" :sub-title="description" />
    </div>
  </div>
</template>
