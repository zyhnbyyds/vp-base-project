# 响应式设计最佳实践

本指南详细介绍如何在 Vite+ 项目中实现响应式设计，以支持各种设备尺寸。

## 响应式设计基础

响应式设计是一种网页设计方法，使网页在不同的设备和屏幕尺寸上都能自动适应和显示最佳效果。

### 核心原则

1. **移动优先**：从移动端设计开始，逐步向桌面端扩展
2. **流动布局**：使用相对单位（百分比、rem等）而不是固定像素
3. **灵活图片**：图片应根据容器自动缩放
4. **断点设计**：在特定屏幕宽度处改变布局

## 使用 UnoCSS 断点

### 可用断点

```typescript
// UnoCSS 默认断点
const breakpoints = {
  xs: '0px', // 移动端（无前缀）
  sm: '640px', // 小屏幕
  md: '768px', // 平板
  lg: '1024px', // 桌面端
  xl: '1280px', // 大屏幕
  '2xl': '1536px', // 超大屏幕
}
```

### 断点用法

在类名前添加断点前缀，只在该断点及以上应用样式：

```vue
<template>
  <!-- 
    移动端：display: none
    平板及以上：display: block
    桌面端：display: grid
  -->
  <div class="hidden md:block lg:grid">Content</div>

  <!-- 文本大小从移动端的 sm 逐步增大 -->
  <h1 class="text-lg md:text-2xl lg:text-4xl">Responsive Heading</h1>

  <!-- 间距在不同断点不同 -->
  <div class="p-2 md:p-4 lg:p-8">Content</div>
</template>
```

## 常见响应式模式

### 1. 导航栏

```vue
<template>
  <nav class="flex items-center justify-between p-4 bg-white dark:bg-slate-900">
    <!-- Logo -->
    <div class="text-xl font-bold">Logo</div>

    <!-- 移动端菜单按钮 -->
    <button class="md:hidden">
      <i class="i-mdi-menu" />
    </button>

    <!-- 桌面端菜单 -->
    <div class="hidden md:flex gap-6">
      <a href="#" class="hover:text-blue-600">Home</a>
      <a href="#" class="hover:text-blue-600">About</a>
      <a href="#" class="hover:text-blue-600">Contact</a>
    </div>
  </nav>
</template>
```

### 2. 网格布局

```vue
<template>
  <!-- 
    移动: 1列
    平板: 2列
    桌面: 3列
    大屏: 4列
  -->
  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
    <div v-for="item in items" :key="item.id" class="bg-white rounded-lg p-4">
      {{ item.name }}
    </div>
  </div>
</template>
```

### 3. 弹性布局切换

```vue
<template>
  <!-- 
    移动端竖排，桌面端横排
  -->
  <div class="flex flex-col md:flex-row gap-4">
    <aside class="md:w-1/4">Sidebar</aside>
    <main class="flex-1">Main content</main>
  </div>
</template>
```

### 4. 图片响应式

```vue
<template>
  <!-- 方式 1：使用 object-fit -->
  <img src="/image.jpg" alt="Description" class="w-full h-64 md:h-96 object-cover" />

  <!-- 方式 2：使用 aspect-ratio -->
  <div class="aspect-video md:aspect-square">
    <img src="/image.jpg" alt="Description" class="w-full h-full object-cover" />
  </div>

  <!-- 方式 3：使用相对尺寸 -->
  <img src="/image.jpg" alt="Description" class="w-full max-w-2xl" />
</template>
```

### 5. 模态对话框

```vue
<template>
  <!-- 移动端全屏，桌面端居中 -->
  <div v-if="isOpen" class="fixed inset-0 bg-black/50 flex items-center justify-center p-4">
    <div class="bg-white w-full md:max-w-2xl rounded-lg p-4 md:p-8">
      <h2 class="text-xl md:text-2xl font-bold mb-4">Dialog Title</h2>
      <p class="text-sm md:text-base mb-6">Dialog content</p>
      <button @click="isOpen = false" class="px-4 py-2 bg-blue-600 text-white rounded">
        Close
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const isOpen = ref(false)
</script>
```

## 响应式文本

### 字体大小缩放

```vue
<template>
  <!-- 文本大小随屏幕调整 -->
  <h1 class="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold">Responsive Heading</h1>

  <p class="text-xs sm:text-sm md:text-base lg:text-lg">Responsive paragraph</p>
</template>
```

### 行高和间距

```vue
<template>
  <div class="leading-relaxed md:leading-normal">
    <p class="mb-2 md:mb-3 lg:mb-4">Responsive line height and spacing</p>
  </div>
</template>
```

## 隱藏和顯示元素

### 显示/隐藏

```vue
<template>
  <!-- 只在移动端显示 -->
  <div class="md:hidden">Mobile-only content</div>

  <!-- 只在桌面端显示 -->
  <div class="hidden md:block">Desktop-only content</div>

  <!-- 只在平板显示 -->
  <div class="hidden lg:hidden sm:block">Tablet-only content</div>
</template>
```

## 响应式组件示例

### 卡片组件

```vue
<script setup lang="ts">
interface Props {
  title: string
  description?: string
  image?: string
}

defineProps<Props>()
</script>

<template>
  <div
    class="bg-white dark:bg-slate-800 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow"
  >
    <!-- 图片 -->
    <img v-if="image" :src="image" alt="Card image" class="w-full h-40 md:h-48 object-cover" />

    <!-- 内容 -->
    <div class="p-3 md:p-4 lg:p-6">
      <h3 class="text-base md:text-lg lg:text-xl font-semibold mb-2">
        {{ title }}
      </h3>
      <p v-if="description" class="text-xs md:text-sm text-gray-600 dark:text-gray-300">
        {{ description }}
      </p>
    </div>
  </div>
</template>
```

### 按钮组件

```vue
<script setup lang="ts">
type Size = 'sm' | 'md' | 'lg'

interface Props {
  size?: Size
  fullWidth?: boolean
}

defineProps<Props>()

const sizeClasses: Record<Size, string> = {
  sm: 'px-2 py-1 text-xs md:text-sm',
  md: 'px-4 py-2 text-sm md:text-base',
  lg: 'px-6 py-3 text-base md:text-lg',
}

const buttonClass = computed(() => [
  'rounded font-semibold transition-colors',
  sizeClasses[size ?? 'md'],
  fullWidth && 'w-full',
])
</script>

<template>
  <button :class="buttonClass">
    <slot />
  </button>
</template>
```

## 测试响应式设计

### 使用浏览器开发工具

1. 打开浏览器开发者工具（F12）
2. 点击设备工具栏按钮
3. 选择不同的设备预设或自定义尺寸
4. 测试所有断点

### 常见测试尺寸

| 设备      | 宽度   | 测试点 |
| --------- | ------ | ------ |
| iPhone SE | 375px  | xs/sm  |
| iPad      | 768px  | md     |
| iPad Pro  | 1024px | lg     |
| MacBook   | 1440px | xl     |
| Desktop   | 1920px | 2xl    |

### 测试清单

- [ ] 在移动设备上测试（实际设备或模拟器）
- [ ] 在平板设备上测试
- [ ] 在桌面屏幕上测试
- [ ] 测试横屏模式
- [ ] 测试文本放大（浏览器缩放）
- [ ] 测试触摸交互
- [ ] 验证图片加载和缩放
- [ ] 检查滚动行为
- [ ] 测试深色模式

## 性能考虑

### 优化图片加载

```vue
<template>
  <!-- 使用 srcset 为不同屏幕提供不同图片 -->
  <img
    srcset="/image-sm.jpg 640w, /image-md.jpg 1280w, /image-lg.jpg 1920w"
    sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 33vw"
    src="/image-md.jpg"
    alt="Responsive image"
  />
</template>
```

### 懒加载

```vue
<template>
  <img loading="lazy" src="/image.jpg" alt="Lazy loaded image" class="w-full" />
</template>
```

## 常见陷阱

1. **忘记添加 viewport 元标签** - 确保 `index.html` 包含正确的 meta viewport
2. **固定宽度** - 避免使用固定像素宽度，使用百分比或相对单位
3. **忽视触摸交互** - 为触摸设备添加足够的点击目标（至少 44x44px）
4. **未测试实际设备** - 在真实设备上测试，不仅仅依赖浏览器模拟器

## 检查清单

- [ ] 所有组件在小屏幕上测试
- [ ] 所有组件在大屏幕上测试
- [ ] 图片自动缩放
- [ ] 文本可读性在所有尺寸上保证
- [ ] 按钮可在触摸屏上使用
- [ ] 导航在移动端可访问
- [ ] 间距和填充在所有尺寸上一致
- [ ] 深色模式在所有尺寸上工作正常
