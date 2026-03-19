<script setup lang="ts">
import { onMounted, ref } from 'vue'
import StatCard from '@/components/ui/StatCard.vue'
import GradientCard from '@/components/ui/GradientCard.vue'

// Animation trigger on mount
const animateStats = ref(false)

onMounted(() => {
  setTimeout(() => {
    animateStats.value = true
  }, 300)
})

const stats = [
  {
    title: 'Projects Built',
    value: '1000+',
    icon: 'rocket',
    color: 'blue' as const,
    trend: 'up' as const,
    trendValue: 24,
  },
  {
    title: 'Developers',
    value: '500+',
    icon: 'account-multiple',
    color: 'purple' as const,
    trend: 'up' as const,
    trendValue: 12,
  },
  {
    title: 'Performance Score',
    value: '98',
    icon: 'lightning-bolt',
    color: 'green' as const,
    trend: 'up' as const,
    trendValue: 5,
  },
  {
    title: 'User Satisfaction',
    value: '4.9/5',
    icon: 'star',
    color: 'orange' as const,
    trend: 'up' as const,
    trendValue: 8,
  },
]

const features = [
  {
    title: 'Vue 3 + TypeScript',
    description: 'Experience the latest Vue 3 with full TypeScript support',
    icon: 'vuejs',
    gradient: 'green' as const,
  },
  {
    title: 'Ant Design Vue',
    description: 'Beautiful and professional UI components',
    icon: 'palette',
    gradient: 'blue' as const,
  },
  {
    title: 'VueUse Composables',
    description: 'Powerful composition utilities out of the box',
    icon: 'lightning-bolt',
    gradient: 'purple' as const,
  },
  {
    title: 'Responsive Design',
    description: 'Perfect on mobile, tablet, and desktop',
    icon: 'responsive',
    gradient: 'red' as const,
  },
  {
    title: 'Dark Mode',
    description: 'Built-in theme switching for better UX',
    icon: 'moon',
    gradient: 'orange' as const,
  },
  {
    title: 'Production Ready',
    description: 'Best practices and optimizations included',
    icon: 'shield-check',
    gradient: 'green' as const,
  },
]

const scrollToSection = (id: string) => {
  const element = document.getElementById(id)
  element?.scrollIntoView({ behavior: 'smooth' })
}
</script>

<template>
  <div class="w-full">
    <!-- Hero Section -->
    <section class="relative py-12 md:py-24 overflow-hidden">
      <!-- Background gradient -->
      <div class="absolute inset-0 -z-10">
        <div
          class="absolute top-0 left-1/4 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"
        />
        <div
          class="absolute top-0 right-1/4 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"
        />
        <div
          class="absolute -bottom-8 left-1/2 w-96 h-96 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"
        />
      </div>

      <div class="max-w-7xl mx-auto px-4 md:px-6">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
          <!-- Left Content -->
          <div class="space-y-6">
            <div class="inline-block">
              <span
                class="inline-flex rounded-full border border-purple-500/40 bg-purple-50 px-3 py-1 text-xs tracking-widest text-purple-700 uppercase dark:border-purple-400/40 dark:bg-purple-400/10 dark:text-purple-200"
              >
                ✨ Professional Template
              </span>
            </div>

            <h1 class="text-4xl md:text-6xl font-bold gradient-text leading-tight">
              Build Modern Web Apps
            </h1>

            <p class="text-lg text-slate-600 dark:text-slate-300 max-w-lg">
              A comprehensive, open-source Vite+ template with Ant Design Vue, VueUse, and best
              practices. Perfect for teams and individual developers.
            </p>

            <div class="flex flex-col sm:flex-row gap-4 pt-4">
              <a-button type="primary" size="large" @click="scrollToSection('features')">
                <template #icon>
                  <i class="icon-[mdi--arrow-right]" />
                </template>
                Explore Features
              </a-button>
              <a-button size="large">
                <template #icon>
                  <i class="icon-[mdi--github]" />
                </template>
                GitHub
              </a-button>
            </div>

            <div class="flex gap-6 pt-4 text-sm text-slate-600 dark:text-slate-400">
              <span>⚡ Lightning Fast</span>
              <span>📦 Production Ready</span>
              <span>🎨 Beautiful Design</span>
            </div>
          </div>

          <!-- Right - Floating Cards -->
          <div class="hidden md:block">
            <div class="relative h-96">
              <!-- Card 1 -->
              <div
                class="absolute top-0 right-0 w-48 h-32 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl shadow-lg p-4 text-white animate-float"
                style="animation-delay: 0s"
              >
                <div class="text-4xl font-bold">98</div>
                <div class="text-sm opacity-90 mt-2">Lighthouse Score</div>
              </div>

              <!-- Card 2 -->
              <div
                class="absolute top-24 left-0 w-48 h-32 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl shadow-lg p-4 text-white animate-float"
                style="animation-delay: 0.2s"
              >
                <div class="text-4xl font-bold">500+</div>
                <div class="text-sm opacity-90 mt-2">Active Developers</div>
              </div>

              <!-- Card 3 -->
              <div
                class="absolute bottom-0 right-12 w-48 h-32 bg-gradient-to-br from-green-500 to-emerald-500 rounded-2xl shadow-lg p-4 text-white animate-float"
                style="animation-delay: 0.4s"
              >
                <div class="text-4xl font-bold">4.9</div>
                <div class="text-sm opacity-90 mt-2">Average Rating</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Stats Section -->
    <section class="py-12 md:py-16">
      <div class="max-w-7xl mx-auto px-4 md:px-6">
        <div v-if="animateStats" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <StatCard
            v-for="stat in stats"
            :key="stat.title"
            :title="stat.title"
            :value="stat.value"
            :icon="stat.icon"
            :color="stat.color"
            :trend="stat.trend"
            :trend-value="stat.trendValue"
          />
        </div>
      </div>
    </section>

    <!-- Features Section -->
    <section id="features" class="py-12 md:py-24">
      <div class="max-w-7xl mx-auto px-4 md:px-6">
        <div class="text-center mb-12 md:mb-16">
          <h2 class="text-3xl md:text-5xl font-bold mb-4">Powerful Features</h2>
          <p class="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto text-lg">
            Everything you need to build exceptional web applications with modern best practices
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <GradientCard
            v-for="feature in features"
            :key="feature.title"
            :title="feature.title"
            :description="feature.description"
            :icon="feature.icon"
            :gradient="feature.gradient"
            clickable
          />
        </div>
      </div>
    </section>

    <!-- Innovation Section - New Wave Animation -->
    <section
      class="py-12 md:py-24 bg-gradient-to-r from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800"
    >
      <div class="max-w-7xl mx-auto px-4 md:px-6">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
          <!-- Innovation Showcase -->
          <div>
            <h2 class="text-3xl md:text-4xl font-bold mb-6">✨ Innovative Features</h2>
            <div class="space-y-4">
              <div class="flex gap-4 items-start">
                <div class="flex-shrink-0">
                  <div
                    class="flex items-center justify-center h-10 w-10 rounded-lg bg-blue-500 text-white"
                  >
                    <i class="icon-[mdi--check]" />
                  </div>
                </div>
                <div>
                  <h3 class="font-semibold text-lg">Auto Import & Components</h3>
                  <p class="text-slate-600 dark:text-slate-400">
                    Components and utilities auto-imported on demand
                  </p>
                </div>
              </div>

              <div class="flex gap-4 items-start">
                <div class="flex-shrink-0">
                  <div
                    class="flex items-center justify-center h-10 w-10 rounded-lg bg-purple-500 text-white"
                  >
                    <i class="icon-[mdi--check]" />
                  </div>
                </div>
                <div>
                  <h3 class="font-semibold text-lg">Smart Responsive</h3>
                  <p class="text-slate-600 dark:text-slate-400">
                    Advanced media query composition utilities built-in
                  </p>
                </div>
              </div>

              <div class="flex gap-4 items-start">
                <div class="flex-shrink-0">
                  <div
                    class="flex items-center justify-center h-10 w-10 rounded-lg bg-green-500 text-white"
                  >
                    <i class="icon-[mdi--check]" />
                  </div>
                </div>
                <div>
                  <h3 class="font-semibold text-lg">Comprehensive Utilities</h3>
                  <p class="text-slate-600 dark:text-slate-400">
                    String, number, validator, and storage helpers included
                  </p>
                </div>
              </div>

              <div class="flex gap-4 items-start">
                <div class="flex-shrink-0">
                  <div
                    class="flex items-center justify-center h-10 w-10 rounded-lg bg-orange-500 text-white"
                  >
                    <i class="icon-[mdi--check]" />
                  </div>
                </div>
                <div>
                  <h3 class="font-semibold text-lg">Type Safe</h3>
                  <p class="text-slate-600 dark:text-slate-400">
                    Full TypeScript support with strict settings
                  </p>
                </div>
              </div>
            </div>
          </div>

          <!-- Visual Element -->
          <div class="relative h-96 hidden md:block">
            <div
              class="absolute inset-0 bg-gradient-to-br from-blue-400 via-purple-400 to-pink-400 rounded-3xl opacity-20 blur-2xl"
            />
            <div
              class="absolute inset-8 bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-700 flex items-center justify-center"
            >
              <div class="text-center">
                <i class="icon-[mdi--rocket] text-6xl text-blue-500 mb-4 inline-block" />
                <p class="text-lg font-semibold">Ready to Launch 🚀</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="py-12 md:py-24">
      <div class="max-w-7xl mx-auto px-4 md:px-6">
        <div
          class="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-3xl p-8 md:p-16 text-white text-center"
        >
          <h2 class="text-3xl md:text-5xl font-bold mb-6">Ready to Build?</h2>
          <p class="text-lg opacity-90 mb-8 max-w-2xl mx-auto">
            Start using Vite+ template now and accelerate your development process with modern best
            practices
          </p>
          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <a-button type="primary" size="large" ghost>
              <template #icon>
                <i class="icon-[mdi--download]" />
              </template>
              Clone Template
            </a-button>
            <a-button size="large" ghost>
              <template #icon>
                <i class="icon-[mdi--book-open]" />
              </template>
              View Documentation
            </a-button>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
@keyframes float {
  0%,
  100% {
    transform: translateY(0px) rotate(0deg);
  }
  50% {
    transform: translateY(-20px) rotate(3deg);
  }
}

@keyframes blob {
  0%,
  100% {
    transform: translate(0, 0) scale(1);
  }
  33% {
    transform: translate(30px, -50px) scale(1.1);
  }
  66% {
    transform: translate(-20px, 20px) scale(0.9);
  }
}

.animate-float {
  animation: float 3s ease-in-out infinite;
}

.animate-blob {
  animation: blob 7s infinite;
}

.animation-delay-2000 {
  animation-delay: 2s;
}

.animation-delay-4000 {
  animation-delay: 4s;
}

.gradient-text {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

:deep(.ant-btn) {
  @apply !font-medium;
}
</style>
