<script setup lang="ts">
import { computed } from 'vue'

interface Props {
  icon?: string
  title: string
  value: string | number
  color?: 'blue' | 'purple' | 'green' | 'red' | 'orange'
  trend?: 'up' | 'down' | 'neutral'
  trendValue?: number
}

const props = withDefaults(defineProps<Props>(), {
  color: 'blue',
  trend: 'neutral',
})

const colorClasses = computed(() => {
  const colors = {
    blue: 'from-blue-500 to-cyan-500',
    purple: 'from-purple-500 to-pink-500',
    green: 'from-green-500 to-emerald-500',
    red: 'from-red-500 to-orange-500',
    orange: 'from-orange-500 to-yellow-500',
  }
  return colors[props.color]
})

const trendIcon = computed(() => {
  if (props.trend === 'up') return 'arrow-up'
  if (props.trend === 'down') return 'arrow-down'
  return 'minus'
})

const trendClass = computed(() => {
  if (props.trend === 'up') return 'text-green-500'
  if (props.trend === 'down') return 'text-red-500'
  return 'text-slate-500'
})
</script>

<template>
  <div
    class="rounded-lg bg-white dark:bg-slate-800 p-6 shadow-sm hover:shadow-md transition-shadow"
  >
    <div class="flex items-start justify-between">
      <div>
        <p class="text-sm text-slate-600 dark:text-slate-400 mb-2">{{ title }}</p>
        <h3 class="text-3xl font-bold text-slate-900 dark:text-white">{{ value }}</h3>
        <div
          v-if="trendValue !== undefined"
          :class="trendClass"
          class="text-sm mt-2 flex items-center gap-1"
        >
          <i :class="`icon-[mdi--${trendIcon}]`" />
          {{ trendValue }}%
        </div>
      </div>
      <div
        v-if="icon"
        :class="`bg-gradient-to-br ${colorClasses}`"
        class="rounded-lg p-3 text-white"
      >
        <i :class="`icon-[mdi--${icon}]`" class="text-2xl" />
      </div>
    </div>
  </div>
</template>
