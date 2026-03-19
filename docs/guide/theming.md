# 主题和响应式

本指南介绍如何使用项目的主题系统和响应式设计。

## 主题系统

### 亮色/暗色主题

项目支持自动的亮色/暗色主题切换，用户偏好设置会自动保存到本地存储。

#### 使用主题 Hook

使用 `@vueuse/core` 中的 `useDark` Hook 来管理主题状态：

```typescript
import { useDark } from '@vueuse/core'

export function useTheme() {
  const isDark = useDark()

  const toggleTheme = () => {
    isDark.value = !isDark.value
  }

  return {
    isDark,
    toggleTheme,
  }
}
```

#### 在组件中使用

```vue
<script setup lang="ts">
import { useDark } from '@vueuse/core'

const isDark = useDark()

const toggleTheme = () => {
  isDark.value = !isDark.value
}
</script>

<template>
  <button
    @click="toggleTheme"
    class="px-4 py-2 rounded font-semibold transition-colors"
    :class="isDark ? 'bg-slate-700 text-white' : 'bg-slate-200 text-black'"
  >
    {{ isDark ? '🌙 暗色模式' : '☀️ 亮色模式' }}
  </button>
</template>
```

### 主题感知的颜色

使用 UnoCSS 的 `dark:` 前缀为暗色模式定义不同的颜色：

```vue
<template>
  <div class="bg-white dark:bg-slate-900 text-black dark:text-white">
    <!-- 内容 -->
  </div>
</template>
```

#### 常见颜色映射

| 元素     | 亮色               | 暗色                    |
| -------- | ------------------ | ----------------------- |
| 背景     | `bg-white`         | `dark:bg-slate-900`     |
| 主文本   | `text-black`       | `dark:text-white`       |
| 副文本   | `text-gray-600`    | `dark:text-gray-300`    |
| 边框     | `border-slate-200` | `dark:border-slate-800` |
| 卡片背景 | `bg-gray-50`       | `dark:bg-slate-800`     |

## 响应式设计

### 断点系统

UnoCSS 提供标准的响应式断点：

| 前缀   | 尺寸    | 说明           |
| ------ | ------- | -------------- |
| 无前缀 | 0px+    | 移动端（默认） |
| `sm:`  | 640px+  | 小屏幕         |
| `md:`  | 768px+  | 平板           |
| `lg:`  | 1024px+ | 台式机         |
| `xl:`  | 1280px+ | 大屏幕         |
| `2xl:` | 1536px+ | 超大屏幕       |

### 响应式布局示例

#### 网格布局

```vue
<template>
  <!-- 移动端一列，平板两列，桌面三列 -->
  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
    <div v-for="item in items" :key="item.id">{{ item.name }}</div>
  </div>
</template>
```

#### 弹性布局

```vue
<template>
  <!-- 移动端竖排，桌面端横排 -->
  <div class="flex flex-col lg:flex-row gap-4">
    <div class="flex-1">Left</div>
    <div class="flex-1">Right</div>
  </div>
</template>
```

#### 条件显示

```vue
<template>
  <!-- 仅在小屏幕显示 -->
  <div class="lg:hidden">Mobile Navigation</div>

  <!-- 仅在大屏幕显示 -->
  <div class="hidden lg:block">Desktop Navigation</div>
</template>
```

### 响应式文本

```vue
<template>
  <div class="text-sm md:text-base lg:text-lg font-normal md:font-semibold">Responsive Text</div>
</template>
```

### 响应式间距

```vue
<template>
  <div class="p-2 md:p-4 lg:p-8 m-1 md:m-2 lg:m-4">Responsive Padding and Margin</div>
</template>
```

## 深色模式特定样式

### 边框颜色优化

```vue
<template>
  <!-- 亮色模式使用淡色边框，暗色模式使用深色边框 -->
  <div class="border border-slate-200 dark:border-slate-800">Content</div>
</template>
```

### 文本对比度

暗色模式下的文本应使用较浅的颜色以保持可读性：

```vue
<template>
  <!-- 亮色 600，暗色 300 提供平衡 -->
  <p class="text-gray-600 dark:text-gray-300">Secondary text</p>

  <!-- 亮色 700，暗色 100 用于强调 -->
  <p class="text-gray-700 dark:text-gray-100">Important text</p>
</template>
```

### 阴影效果

```vue
<template>
  <!-- 暗色模式使用较浅的阴影 -->
  <div class="shadow-md dark:shadow-sm dark:shadow-white/10">Card with theme-aware shadow</div>
</template>
```

## UnoCSS 工具类参考

### 尺寸

```vue
<!-- 宽度 -->
<div class="w-1/4 md:w-1/3 lg:w-1/2">Half width</div>

<!-- 高度 -->
<div class="h-10 md:h-20 lg:h-40">Height</div>

<!-- 最大/最小宽度 -->
<div class="max-w-xl min-w-sm">Constrained width</div>
```

### 布局

```vue
<!-- Flexbox -->
<div class="flex items-center justify-between gap-4">Content</div>

<!-- Grid -->
<div class="grid grid-cols-2 md:grid-cols-4 gap-2">Content</div>

<!-- 定位 -->
<div class="relative">
  <div class="absolute top-0 right-0">Corner</div>
</div>
```

### 背景和边框

```vue
<!-- 背景 -->
<div class="bg-blue-500 dark:bg-blue-400">Background</div>

<!-- 边框 -->
<div class="border-2 border-slate-300 dark:border-slate-600 rounded-lg">
  Bordered element
</div>
```

### 文本样式

```vue
<!-- 字体大小 -->
<p class="text-xs sm:text-sm md:text-base lg:text-lg">Text</p>

<!-- 字体权重 -->
<p class="font-light md:font-normal lg:font-bold">Text</p>

<!-- 文本颜色 -->
<p class="text-black dark:text-white">Text color</p>
```

### 动画和过渡

```vue
<!-- 过渡 -->
<div class="transition-colors duration-300 hover:bg-blue-600">
  Hover me
</div>

<!-- 变换 -->
<div class="transform hover:scale-110 transition-transform">
  Scale on hover
</div>
```

## 创建主题变体

### 创建可复用的样式类

```typescript
// src/utils/theme.ts

export const themeClasses = {
  // 卡片样式
  card: 'bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg shadow-sm',

  // 按钮样式
  button: 'px-4 py-2 rounded font-semibold transition-colors',
  buttonPrimary: 'bg-blue-600 text-white hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600',
  buttonSecondary: 'bg-gray-200 text-black hover:bg-gray-300 dark:bg-slate-700 dark:text-white',

  // 文本样式
  text: {
    primary: 'text-black dark:text-white',
    secondary: 'text-gray-600 dark:text-gray-300',
    muted: 'text-gray-400 dark:text-gray-500',
  },

  // 输入框样式
  input:
    'px-3 py-2 border border-slate-300 dark:border-slate-600 rounded-md bg-white dark:bg-slate-800 text-black dark:text-white',
}
```

在组件中使用：

```vue
<script setup lang="ts">
import { themeClasses } from '@/utils/theme'
</script>

<template>
  <div :class="themeClasses.card">
    <p :class="themeClasses.text.primary">Card content</p>
    <input :class="themeClasses.input" type="text" />
  </div>
</template>
```

## 最佳实践

1. **优先使用原子类**：直接使用 UnoCSS 工具类而不是编写 CSS
2. **保持暗色模式对称**：每个亮色样式都应有对应的暗色样式
3. **测试响应式**：在浏览器中调整窗口大小测试所有断点
4. **无障碍设计**：确保颜色对比度符合 WCAG 标准
5. **使用语义颜色**：使用 `primary`、`secondary` 等概念而不是具体色值
