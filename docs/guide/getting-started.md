# 快速开始

欢迎来到 Vite+ 项目模板。本指南将帮助您快速上手开发。

## 环境要求

- Node.js >= 18.0
- pnpm >= 8.0（推荐）或 npm/yarn

## 安装依赖

使用 Vite+ 命令安装项目依赖：

```bash
vp install
```

## 启动开发服务器

```bash
vp dev
```

开发服务器将在 `http://localhost:5173` 启动。

## 项目结构

```
src/
├── main.ts                 # 应用入口
├── App.vue                 # 根组件
├── assets/                 # 静态资源
├── components/             # 可复用组件
│   ├── layout/            # 布局组件（Header、Footer）
│   ├── cards/             # 卡片组件
│   └── ...
├── pages/                  # 页面组件
├── router/                 # 路由配置
├── utils/                  # 工具函数
├── hooks/                  # 自定义 Hook
├── types/                  # TypeScript 类型定义
└── style.css              # 全局样式
```

## 主要特性

### 1. Vue 3 + TypeScript

项目使用最新的 Vue 3 和 TypeScript，提供完整的类型安全。

```typescript
// src/components/HelloWorld.vue
<script setup lang="ts">
import { ref } from 'vue'

const count = ref<number>(0)

const increment = (): void => {
  count.value++
}
</script>
```

### 2. Ant Design Vue

集成了 Ant Design Vue 4.x，提供企业级 UI 组件。

```vue
<template>
  <a-button type="primary" @click="handleClick"> 点击我 </a-button>
</template>
```

### 3. UnoCSS

使用原子化 CSS 框架，快速编写样式。

```vue
<template>
  <div class="flex items-center justify-center h-screen gap-4">
    <p class="text-lg font-bold text-blue-600 dark:text-blue-400">欢迎</p>
  </div>
</template>
```

### 4. 主题切换

项目支持亮色/暗色主题自动切换，用户偏好自动保存。

```typescript
// 使用 @vueuse/core 中的 useDark
import { useDark } from '@vueuse/core'

const isDark = useDark()
```

### 5. 响应式设计

使用 UnoCSS 的响应式前缀，轻松实现响应式布局。

```vue
<template>
  <!-- 移动端显示一列，平板显示两列，桌面显示三列 -->
  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
    <!-- 内容 -->
  </div>
</template>
```

## 开发命令

| 命令         | 说明                   |
| ------------ | ---------------------- |
| `vp install` | 安装依赖               |
| `vp dev`     | 启动开发服务器         |
| `vp build`   | 构建生产版本           |
| `vp preview` | 预览生产构建           |
| `vp check`   | 运行代码检查和类型检查 |
| `vp lint`    | 运行 linter            |
| `vp fmt`     | 格式化代码             |
| `vp test`    | 运行测试               |

## 添加新组件

新的 Vue 组件应该放在 `src/components` 目录下。由于配置了自动导入，组件会自动注册。

```vue
<!-- src/components/MyComponent.vue -->
<script setup lang="ts">
defineProps<{
  title?: string
}>()
</script>

<template>
  <div>{{ title }}</div>
</template>
```

在其他组件中无需导入即可直接使用：

```vue
<template>
  <MyComponent title="Hello" />
</template>
```

## 使用工具函数

项目提供了 30+ 实用工具函数，可从 `@/utils` 导入使用。

```typescript
import { formatDate, isEmail, generateId } from '@/utils'

// 格式化日期
const formatted = formatDate(new Date(), 'YYYY-MM-DD')

// 验证邮箱
const valid = isEmail('user@example.com')

// 生成唯一 ID
const id = generateId()
```

## 配置主页

主页由 `src/pages/HomePage.vue` 定义，您可以编辑此文件来自定义首页内容。

## 下一步

- 查看 [项目结构](/guide/project-structure) 了解更详细的文件组织
- 查看 [开发工作流](/guide/development-workflow) 学习最佳实践
- 查看 [组件文档](/components/overview) 了解可用的组件
- 参考 [工具函数 API](/api/utils) 查看所有可用工具

## 常见问题

**Q: 如何添加新的 npm 包？**

A: 使用 `vp add` 命令：

```bash
vp add axios
```

**Q: 如何自定义 UnoCSS 样式？**

A: 编辑 `uno.config.ts` 文件，参考 [UnoCSS 文档](https://unocss.dev/)。

**Q: 如何修改 Ant Design Vue 主题？**

A: 编辑 `vite.config.ts` 中的 Ant Design Vue 配置，参考 [Ant Design Vue 文档](https://www.antdv.com/)。
