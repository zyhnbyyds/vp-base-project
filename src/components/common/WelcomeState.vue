<script setup lang="ts">
interface Props {
  icon?: string
  title?: string
  description?: string
  actionLabel?: string
  actionLink?: string
}

withDefaults(defineProps<Props>(), {
  title: 'Welcome',
  description: 'Get started with our application',
})

defineEmits<{
  action: []
}>()
</script>

<template>
  <div class="flex items-center justify-center min-h-screen">
    <div class="text-center max-w-md">
      <a-result status="success" :title="title" :sub-title="description">
        <template v-if="actionLabel" #extra>
          <router-link v-if="actionLink" :to="actionLink">
            <a-button type="primary">{{ actionLabel }}</a-button>
          </router-link>
          <a-button v-else type="primary" @click="$emit('action')">{{ actionLabel }}</a-button>
        </template>
      </a-result>
    </div>
  </div>
</template>
