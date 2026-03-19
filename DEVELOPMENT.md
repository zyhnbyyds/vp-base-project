# 👨‍💻 Development Guide

This guide will help you understand the project structure and how to develop with this template.

## 🏗️ Architecture Overview

### Layered Architecture

```
Pages (Routing)
    ↓
Components (UI)
    ↓
Composables (Logic)
    ↓
Utils / Services (Helpers)
    ↓
Constants (Config)
```

## 🗂️ Directory Breakdown

### `src/pages/`

Page components that correspond to routes. These are top-level components that compose smaller components.

```typescript
// src/pages/HomePage.vue
<script setup lang="ts">
import { useResponsive } from '@/composables'
import StatCard from '@/components/ui/StatCard.vue'

const { isMobile } = useResponsive()
</script>
```

### `src/components/`

#### `common/` - Basic Building Blocks

Reusable components without much styling. Use these as foundations.

```typescript
// ErrorState, EmptyState, LoadingState, Card
```

#### `ui/` - Decorated Components

Components with styling, animations, and UX enhancements.

```typescript
// StatCard, GradientCard, FloatingCard, FloatingActionButton
```

#### `layout/` - App Layout

Page structure components used in App.vue.

```typescript
// Header, Footer, Sidebar
```

### `src/composables/`

Vue composition functions for logic reuse.

```typescript
// useTheme - Theme management
// useResponsive - Responsive utilities
// useAsync - Async operation handling
```

### `src/utils/`

Pure utility functions (no Vue dependencies).

```typescript
// String utilities - capitalize, truncate, etc.
// Number utilities - formatNumber, clamp, etc.
// Validators - isEmail, isUrl, etc.
// Storage - localStorage/sessionStorage helpers
// Time - date formatting and calculations
// Request - API helpers like buildUrl, retry, etc.
```

### `src/services/`

API service layer with axios instance.

```typescript
// src/services/api.ts
// Preconfigured axios with interceptors
```

### `src/constants/`

Application-wide constants.

```typescript
// APP configuration
// API endpoints and timeout
// Storage keys
// HTTP status codes
// Breakpoints
```

### `src/router/`

Vue Router configuration and route definitions.

### `src/types/`

TypeScript type definitions and generated types.

## 🎯 Development Workflow

### Creating a New Page

1. **Create the page component**

```typescript
// src/pages/ProductsPage.vue
<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { useAsync } from '@/composables'
import { api } from '@/services'
import ProductCard from '@/components/common/Card.vue'

const { data: products, loading, execute } = useAsync(
  () => api.get('/products')
)

onMounted(() => {
  execute()
})
</script>

<template>
  <div class="space-y-6">
    <h1 class="text-4xl font-bold">Products</h1>
    <a-spin v-if="loading" />
    <div v-else class="grid gap-4 md:grid-cols-3">
      <ProductCard
        v-for="product in products"
        :key="product.id"
        :product="product"
      />
    </div>
  </div>
</template>

<style scoped>
/* Component styles */
</style>
```

2. **Add the route**

```typescript
// src/router/index.ts
const routes = [
  // ...existing routes
  {
    path: '/products',
    name: 'products',
    component: () => import('../pages/ProductsPage.vue'),
  },
]
```

3. The component is automatically imported and available in your app!

### Creating a New Component

1. **Create component file**

```typescript
// src/components/common/ProductCard.vue
<script setup lang="ts">
interface Props {
  product: {
    id: number
    name: string
    price: number
    image: string
  }
}

defineProps<Props>()
defineEmits<{
  buy: []
}>()
</script>

<template>
  <div class="rounded-lg border p-4 hover:shadow-lg transition">
    <img :src="product.image" :alt="product.name" class="w-full h-40 object-cover rounded" />
    <h3 class="mt-2 font-semibold">{{ product.name }}</h3>
    <p class="text-slate-600">${{ product.price }}</p>
    <button
      class="mt-4 w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
      @click="$emit('buy')"
    >
      Buy
    </button>
  </div>
</template>
```

2. **Use in your page** - Auto-imported!

```typescript
// In ProductsPage.vue
<ProductCard :product="product" @buy="handleBuy" />
```

### Creating a New Composable

```typescript
// src/composables/usePagination.ts
import { ref, computed } from 'vue'

export function usePagination<T>(items: T[], perPage = 10) {
  const currentPage = ref(1)

  const totalPages = computed(() => Math.ceil(items.length / perPage))

  const paginatedItems = computed(() => {
    const start = (currentPage.value - 1) * perPage
    return items.slice(start, start + perPage)
  })

  const goToPage = (page: number) => {
    currentPage.value = Math.max(1, Math.min(page, totalPages.value))
  }

  return {
    currentPage,
    totalPages,
    paginatedItems,
    goToPage,
  }
}
```

### Creating a New Utility

```typescript
// src/utils/array.ts
export function flatten<T>(arr: T[][]): T[] {
  return arr.reduce((acc, val) => acc.concat(val), [])
}

export function chunk<T>(arr: T[], size: number): T[][] {
  return Array.from({ length: Math.ceil(arr.length / size) }, (_, i) =>
    arr.slice(i * size, i * size + size),
  )
}

export function unique<T>(arr: T[]): T[] {
  return [...new Set(arr)]
}
```

## 📐 Design Patterns

### Composition Over Inheritance

Use composables to share logic between components:

```typescript
const { isDark, toggleTheme } = useTheme()
const { isMobile, isDesktop } = useResponsive()
```

### Reactive State Management

Use `ref` and `computed` for reactive data:

```typescript
const count = ref(0)
const doubled = computed(() => count.value * 2)
```

### Type Safety

Always use TypeScript for better developer experience:

```typescript
interface User {
  id: number
  name: string
  email: string
}

const users = ref<User[]>([])
```

### Error Handling

Use the `useAsync` composable for consistent error handling:

```typescript
const { data, loading, error, execute } = useAsync(() => api.get('/data'))
```

## 🎨 Styling Guidelines

### Use UnoCSS Utilities

```vue
<div class="flex items-center justify-between p-4 rounded-lg border">
  <!-- Use UnoCSS utilities instead of CSS -->
</div>
```

### Dark Mode Support

```vue
<div class="bg-white dark:bg-slate-900 text-slate-900 dark:text-white">
  <!-- Automatically responds to theme -->
</div>
```

### Custom Colors

```css
/* src/styles/index.css */
:root {
  --color-primary: #667eea;
}
```

## 🔄 State Management

For simple state, use `ref`/`computed`. For complex state, consider creating a composable:

```typescript
// src/composables/useUserStore.ts
import { ref, computed } from 'vue'
import { useStorage } from '@vueuse/core'

export function useUserStore() {
  const user = useStorage('user', null)
  const isAuthenticated = computed(() => user.value !== null)

  const login = async (email: string, password: string) => {
    // Login logic
    user.value = { email }
  }

  const logout = () => {
    user.value = null
  }

  return {
    user: readonly(user),
    isAuthenticated,
    login,
    logout,
  }
}
```

## 🧪 Testing

Components should be testable. Keep logic in composables and utils:

```typescript
// src/utils/calculator.ts - Easy to test
export function add(a: number, b: number): number {
  return a + b
}

// src/composables/useCalculator.ts
export function useCalculator() {
  const result = ref(0)

  const calculate = (a: number, b: number) => {
    result.value = add(a, b)
  }

  return { result: readonly(result), calculate }
}
```

## 🚀 Performance Tips

1. **Use `<script setup lang="ts">`** - More performant syntax
2. **Lazy load routes** - Use dynamic imports for pages
3. **Use `readonly()`** - Indicate immutable refs
4. **Memoize expensive computations** - Use `computed`
5. **Use `@vueuse/core`** - Optimized utilities

## 🐛 Debugging

### Browser DevTools

- Vue DevTools extension
- Ant Design Vue Inspector

### Console Logging

```typescript
console.log('value:', myValue)
console.table(arrayOfObjects)
```

### TypeScript Errors

Run `vp check` to catch errors early:

```bash
vp check        # Check everything
vp check --fix  # Auto-fix issues
```

## 📚 Common Patterns

### Loading States

```typescript
const { loading, data, execute } = useAsync(() => api.get('/data'))

// In template
<LoadingState v-if="loading" />
<div v-else>{{ data }}</div>
```

### Error Handling

```typescript
const { error, execute } = useAsync(() => api.get('/data'))

if (error.value) {
  console.error(error.value.message)
}
```

### Responsive Components

```typescript
const { isMobile, isDesktop } = useResponsive()

<div :class="isMobile ? 'flex-col' : 'flex-row'">
  <!-- Responsive layout -->
</div>
```

### Dark Mode

```typescript
const { isDark, toggleTheme } = useTheme()

<button @click="toggleTheme">
  {{ isDark ? 'Light' : 'Dark' }}
</button>
```

## 🎯 Next Steps

1. Read the [README](./README_TEMPLATE.md)
2. Explore the [Ant Design Vue documentation](https://www.antdv.com/)
3. Check out [VueUse](https://vueuse.org/) for more composables
4. Study existing components and pages

Happy coding! 🎉
