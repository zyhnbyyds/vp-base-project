<script setup lang="ts">
interface Props {
  title?: string
  subtitle?: string
}

withDefaults(defineProps<Props>(), {
  title: 'Oops!',
  subtitle: 'Something went wrong',
})
</script>

<template>
  <div class="flex items-center justify-center min-h-60">
    <div class="text-center">
      <a-result status="500" :title="title" :sub-title="subtitle">
        <template #extra>
          <router-link to="/">
            <a-button type="primary">Back to Home</a-button>
          </router-link>
        </template>
      </a-result>
    </div>
  </div>
</template>
