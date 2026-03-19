<script setup lang="ts">
interface Props {
  speed?: number
}

const props = withDefaults(defineProps<Props>(), {
  speed: 3,
})

const hoverRotate = ref(0)

const handleMouseMove = (e: MouseEvent) => {
  const rect = (e.currentTarget as HTMLElement).getBoundingClientRect()
  const y = e.clientY - rect.top

  const rotateX = (y / rect.height - 0.5) * 10

  hoverRotate.value = rotateX
}

const animationStyle = computed(() => ({
  animation: `float ${props.speed}s ease-in-out infinite`,
}))
</script>

<template>
  <div
    class="h-64 rounded-2xl overflow-hidden cursor-pointer perspective"
    :style="animationStyle"
    @mousemove="handleMouseMove"
  >
    <div
      class="w-full h-full bg-gradient-to-br from-purple-500 via-pink-500 to-red-500 transition-transform duration-300"
      :style="{
        transform: `perspective(1000px) rotateX(${hoverRotate}deg)`,
      }"
    >
      <div class="w-full h-full flex items-center justify-center">
        <slot />
      </div>
    </div>
  </div>
</template>

<style scoped>
@keyframes float {
  0%,
  100% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-10px);
  }
}

.perspective {
  perspective: 1000px;
}
</style>
