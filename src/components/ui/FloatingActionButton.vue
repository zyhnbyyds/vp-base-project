<script setup lang="ts">
import { ref } from 'vue'

const action = ref<(() => void) | null>(null)
const visible = ref(false)

const show = (callback: () => void) => {
  action.value = callback
  visible.value = true
}

const hide = () => {
  visible.value = false
}

const execute = () => {
  action.value?.()
  hide()
}

defineExpose({
  show,
  hide,
})
</script>

<template>
  <a-button
    v-if="visible"
    class="fixed bottom-8 right-8 rounded-full shadow-lg hover:shadow-xl"
    type="primary"
    shape="circle"
    size="large"
    icon="plus"
    @click="execute"
  />
</template>

<style scoped>
:deep(.ant-btn) {
  @apply animate-bounce;
}
</style>
