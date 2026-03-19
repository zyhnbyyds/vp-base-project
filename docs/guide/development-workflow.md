# 开发工作流

本指南介绍在 Vite+ 项目中的推荐开发工作流和最佳实践。

## 日常开发工作流

### 1. 启动项目

```bash
# 安装依赖
vp install

# 启动开发服务器
vp dev
```

开发服务器启动后，您可以访问 `http://localhost:5173` 查看应用。

### 2. 开发和编码

在 `src` 目录中创建或修改文件。由于配置了文件监听，您的更改会自动热更新（HMR）。

### 3. 代码质量检查

在提交前运行质量检查：

```bash
# 运行所有检查（格式、Lint、类型检查）
vp check

# 单独运行格式检查
vp fmt

# 单独运行 Lint 检查
vp lint

# 单独运行 TypeScript 检查
vue-tsc --noEmit
```

### 4. 构建和部署

```bash
# 构建生产版本
vp build

# 本地预览生产构建
vp preview
```

## 创建新组件

### 步骤 1：创建组件文件

在 `src/components` 或其子目录下创建 `.vue` 文件：

```vue
<!-- src/components/MyComponent.vue -->
<script setup lang="ts">
interface Props {
  title?: string
  count?: number
}

const props = withDefaults(defineProps<Props>(), {
  title: 'Default Title',
  count: 0,
})

const emit = defineEmits<{
  update: [value: number]
}>()

const handleClick = () => {
  emit('update', props.count + 1)
}
</script>

<template>
  <div class="p-4 bg-white dark:bg-slate-800 rounded-lg">
    <h3 class="text-lg font-semibold">{{ title }}</h3>
    <p class="text-gray-600 dark:text-gray-300">Count: {{ count }}</p>
    <button
      @click="handleClick"
      class="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
    >
      Increment
    </button>
  </div>
</template>

<style scoped>
/* 组件特定样式 */
</style>
```

### 步骤 2：使用组件

由于配置了 `auto-import`，组件会自动注册，可以直接使用：

```vue
<!-- src/pages/HomePage.vue -->
<template>
  <div>
    <MyComponent title="Custom Title" :count="10" @update="handleUpdate" />
  </div>
</template>

<script setup lang="ts">
const handleUpdate = (value: number) => {
  console.log('Count updated to:', value)
}
</script>
```

## 创建新的工具函数

### 步骤 1：编写工具函数

在 `src/utils` 目录下创建新文件：

```typescript
// src/utils/myUtil.ts

/**
 * 验证手机号码格式
 * @param phone - 手机号码
 * @returns 是否为有效的手机号码
 */
export function isPhone(phone: string): boolean {
  return /^1[3-9]\d{9}$/.test(phone)
}

/**
 * 格式化金额
 * @param amount - 金额数字
 * @param currency - 货币符号，默认为 ¥
 * @returns 格式化后的金额字符串
 */
export function formatCurrency(amount: number, currency = '¥'): string {
  return `${currency}${amount.toLocaleString('zh-CN')}`
}
```

### 步骤 2：导出函数

在 `src/utils/index.ts` 中导出新函数：

```typescript
// src/utils/index.ts
export * from './string'
export * from './array'
export * from './number'
export * from './myUtil' // 新增
```

### 步骤 3：使用工具函数

在任何文件中导入并使用：

```typescript
import { isPhone, formatCurrency } from '@/utils'

const phoneValid = isPhone('13800138000')
const formatted = formatCurrency(1000)
```

## 创建自定义 Hook

### 步骤 1：编写 Hook

在 `src/hooks` 目录下创建新文件：

```typescript
// src/hooks/useCounter.ts
import { ref, computed } from 'vue'

export function useCounter(initialValue = 0) {
  const count = ref(initialValue)

  const doubled = computed(() => count.value * 2)

  const increment = () => {
    count.value++
  }

  const decrement = () => {
    count.value--
  }

  const reset = () => {
    count.value = initialValue
  }

  return {
    count,
    doubled,
    increment,
    decrement,
    reset,
  }
}
```

### 步骤 2：使用 Hook

在组件中使用自定义 Hook：

```vue
<script setup lang="ts">
import { useCounter } from '@/hooks'

const { count, doubled, increment, decrement, reset } = useCounter(10)
</script>

<template>
  <div>
    <p>Count: {{ count }}</p>
    <p>Doubled: {{ doubled }}</p>
    <button @click="increment">+</button>
    <button @click="decrement">-</button>
    <button @click="reset">Reset</button>
  </div>
</template>
```

## 样式指南

### 使用 UnoCSS

项目使用 UnoCSS 原子化样式框架。推荐优先使用原子类而不是写 CSS：

```vue
<template>
  <!-- ✅ 推荐 -->
  <div class="flex items-center justify-center gap-4 p-4 bg-white dark:bg-slate-800 rounded-lg">
    <span class="text-lg font-bold text-blue-600 dark:text-blue-400">Hello</span>
  </div>

  <!-- ❌ 避免 -->
  <div class="custom-container">
    <span class="custom-text">Hello</span>
  </div>
</template>

<style scoped>
.custom-container {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  padding: 1rem;
  background-color: white;
  border-radius: 0.5rem;
}
</style>
```

### 响应式布局

使用 UnoCSS 的响应式前缀：

```vue
<template>
  <!-- 移动端一列，平板两列，桌面三列 -->
  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
    <div v-for="item in items" :key="item.id">{{ item.name }}</div>
  </div>

  <!-- 隐藏视图 -->
  <div class="hidden lg:block">Only visible on large screens</div>

  <!-- 显示视图 -->
  <div class="lg:hidden">Only visible on small and medium screens</div>
</template>
```

### 暗色模式

使用 `dark:` 前缀为暗色模式添加样式：

```vue
<template>
  <div class="bg-white dark:bg-slate-900 text-black dark:text-white">
    <p class="text-gray-600 dark:text-gray-300">Default text color</p>
  </div>
</template>
```

## 配置管理

### 环境变量

使用环境变量管理敏感信息。创建 `.env` 文件：

```env
VITE_API_URL=http://localhost:3000
VITE_API_KEY=your_api_key_here
```

在代码中使用：

```typescript
const apiUrl = import.meta.env.VITE_API_URL
```

### 运行时配置

对于需要动态配置的内容，创建配置模块：

```typescript
// src/config/api.ts
export const apiConfig = {
  baseURL: import.meta.env.VITE_API_URL || 'http://localhost:3000',
  timeout: 30000,
  retryCount: 3,
}
```

## 代码审查检查清单

提交代码前，请检查以下项目：

- [ ] 代码通过 `vp check` 检查
- [ ] 没有 TypeScript 类型错误
- [ ] 变量和函数有明确的类型注解
- [ ] 注释清晰，解释复杂逻辑
- [ ] 遵循项目的命名约定
- [ ] 避免长函数或复杂的嵌套结构
- [ ] 组件文件不超过 300 行
- [ ] 使用 `@/` 别名导入而不是相对路径
- [ ] 考虑可复用性，提取公共逻辑
- [ ] 测试新增或修改的功能

## 调试技巧

### 使用浏览器开发工具

```vue
<script setup lang="ts">
import { ref, watch } from 'vue'

const count = ref(0)

// 监听并记录变化
watch(count, (newVal, oldVal) => {
  console.log(`Count changed from ${oldVal} to ${newVal}`)
})
</script>
```

### 调试日志

使用 `console` 方法进行调试：

```typescript
console.log('Variable:', variable) // 一般日志
console.info('Information:', info) // 信息日志
console.warn('Warning:', warning) // 警告日志
console.error('Error:', error) // 错误日志
```

### 使用 Vue DevTools

安装 Vue DevTools 浏览器扩展以获得更强大的调试能力。

## 性能优化

### 代码分割

使用动态导入实现路由级别的代码分割：

```typescript
const routes = [
  {
    path: '/home',
    component: () => import('@/pages/HomePage.vue'),
  },
  {
    path: '/about',
    component: () => import('@/pages/AboutPage.vue'),
  },
]
```

### 图片优化

使用相对较小的图片文件并考虑使用 WebP 格式：

```vue
<template>
  <img src="/images/photo.webp" alt="Description" class="w-full h-auto" />
</template>
```

## 常见问题

**Q: 修改后页面没有更新？**

A: 尝试手动刷新浏览器或重启开发服务器。

**Q: 如何在组件间共享状态？**

A: 使用 Pinia（或其他状态管理库）或 Composition API 的 `provide/inject`。

**Q: TypeScript 类型检查报错？**

A: 运行 `vp check` 查看详细错误信息，或查看 `tsconfig.app.json` 配置。
