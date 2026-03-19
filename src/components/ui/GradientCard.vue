<script setup lang="ts">
interface Props {
  title: string
  description?: string
  gradient?: 'blue' | 'purple' | 'green' | 'red' | 'orange'
  icon?: string
  clickable?: boolean
  hoverScale?: boolean
}

withDefaults(defineProps<Props>(), {
  gradient: 'blue',
  clickable: false,
  hoverScale: true,
})

defineEmits<{
  click: []
}>()

const gradients = {
  blue: 'from-blue-500 to-cyan-500',
  purple: 'from-purple-500 to-pink-500',
  green: 'from-green-500 to-emerald-500',
  red: 'from-red-500 to-orange-500',
  orange: 'from-orange-500 to-yellow-500',
}
</script>

<template>
  <div
    :class="[
      `bg-gradient-to-br ${gradients[gradient]}`,
      'rounded-2xl p-6 text-white cursor-pointer',
      'transition-all duration-300',
      hoverScale && 'hover:scale-105',
      'shadow-lg hover:shadow-2xl',
      clickable && 'cursor-pointer',
    ]"
    @click="$emit('click')"
  >
    <div class="flex items-start justify-between mb-4">
      <div class="flex-1">
        <h3 class="text-2xl font-bold mb-2">{{ title }}</h3>
        <p v-if="description" class="text-sm opacity-90">{{ description }}</p>
      </div>
      <div v-if="icon" class="text-4xl opacity-20 ml-4">
        <i :class="`icon-[mdi--${icon}]`" />
      </div>
    </div>
    <div
      class="mt-6 pt-4 border-t border-white border-opacity-20 flex items-center gap-2 text-sm font-semibold"
    >
      Learn More
      <i class="icon-[mdi--arrow-right]" />
    </div>
  </div>
</template>
