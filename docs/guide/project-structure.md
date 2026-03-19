# 项目结构

本指南详细说明了 Vite+ 项目的目录结构和各个文件的作用。

## 顶级目录结构

```
vite-plus-init/
├── docs/                   # VitePress 文档目录
├── public/                 # 静态资源目录
├── src/                    # 项目源代码目录
├── node_modules/           # 依赖包（自动生成）
├── dist/                   # 构建输出目录（自动生成）
├── index.html              # HTML 入口文件
├── vite.config.ts          # Vite 配置文件
├── tsconfig.json           # TypeScript 根配置
├── tsconfig.app.json       # TypeScript 应用配置
├── tsconfig.node.json      # TypeScript Node 配置
├── uno.config.ts           # UnoCSS 配置
├── package.json            # 项目配置和依赖
└── pnpm-lock.yaml          # 依赖锁定文件
```

## src/ 目录详解

### 核心文件

| 文件        | 说明                           |
| ----------- | ------------------------------ |
| `main.ts`   | 应用入口，挂载根组件到 DOM     |
| `App.vue`   | 根组件，定义应用布局和路由出口 |
| `style.css` | 全局样式文件                   |

### 子目录结构

```
src/
├── main.ts                 # 应用入口
├── App.vue                 # 根组件
├── style.css               # 全局样式
├── assets/                 # 资源文件
│   └── ...                # 图片、字体等
├── components/             # Vue 组件目录
│   ├── layout/            # 布局组件
│   │   ├── Header.vue     # 头部导航
│   │   ├── Footer.vue     # 底部
│   │   ├── Sidebar.vue    # 侧边栏
│   │   └── ...
│   ├── cards/             # 卡片组件
│   │   ├── StatCard.vue   # 统计卡片
│   │   ├── GradientCard.vue # 渐变卡片
│   │   └── ...
│   └── ...                # 其他组件
├── pages/                  # 页面组件
│   ├── HomePage.vue       # 首页
│   ├── NotFound.vue       # 404 页面
│   └── ...                # 其他页面
├── router/                 # 路由配置
│   └── index.ts           # 路由定义
├── utils/                  # 工具函数库
│   ├── index.ts           # 导出所有工具
│   ├── string.ts          # 字符串处理
│   ├── number.ts          # 数字处理
│   ├── array.ts           # 数组处理
│   ├── object.ts          # 对象处理
│   ├── validation.ts      # 数据验证
│   ├── storage.ts         # 本地存储
│   ├── time.ts            # 时间处理
│   └── ...                # 其他工具
├── hooks/                  # 自定义 Hook
│   ├── useTheme.ts        # 主题 Hook
│   └── ...                # 其他 Hook
└── types/                  # TypeScript 类型定义
    ├── auto-imports.d.ts   # 自动导入类型声明
    ├── components.d.ts     # 组件自动注册声明
    └── env.d.ts           # 环境变量和 Vite 类型声明
```

## 关键文件说明

### index.html

HTML 入口文件，定义了应用的基本容器：

```html
<!DOCTYPE html>
<html lang="zh-CN">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Vite+ 项目</title>
  </head>
  <body>
    <div id="app"></div>
    <script type="module" src="/src/main.ts"></script>
  </body>
</html>
```

### src/main.ts

应用启动文件，初始化 Vue 应用、路由、插件等：

```typescript
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(router)
app.mount('#app')
```

### src/App.vue

根组件，定义应用的整体布局：

```vue
<script setup lang="ts">
import Header from '@/components/layout/Header.vue'
import Footer from '@/components/layout/Footer.vue'
</script>

<template>
  <div class="min-h-screen flex flex-col">
    <Header />
    <main class="flex-1">
      <RouterView />
    </main>
    <Footer />
  </div>
</template>
```

### src/router/index.ts

路由配置文件，定义应用的导航结构：

```typescript
import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '@/pages/HomePage.vue'

const routes = [
  {
    path: '/',
    component: HomePage,
  },
  {
    path: '/:pathMatch(.*)*',
    component: () => import('@/pages/NotFound.vue'),
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
```

### package.json

项目配置和依赖定义：

```json
{
  "name": "vite-plus-init",
  "version": "1.0.0",
  "type": "module",
  "scripts": {
    "dev": "vp dev",
    "build": "vite-tsc -b && vp build",
    "preview": "vp preview"
  },
  "dependencies": {
    "vue": "^3.3.0",
    "vue-router": "^4.2.0",
    "ant-design-vue": "^4.2.0",
    "@vueuse/core": "^10.0.0"
  },
  "devDependencies": {
    "typescript": "^5.0.0",
    "vite": "^5.0.0",
    "vue-tsc": "^1.8.0"
  }
}
```

### vite.config.ts

Vite 构建工具配置：

```typescript
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': '/src',
    },
  },
})
```

### uno.config.ts

UnoCSS 原子化样式框架配置：

```typescript
import { defineConfig, presetAttributify, presetIcons, presetUno } from 'unocss'

export default defineConfig({
  presets: [presetUno(), presetAttributify(), presetIcons({ scale: 1.2 })],
})
```

### tsconfig.json

TypeScript 根配置，定义了基本的编译选项和路径别名：

```json
{
  "compilerOptions": {
    "target": "ES2020",
    "useDefineForClassFields": true,
    "lib": ["ES2020", "DOM", "DOM.Iterable"],
    "skipLibCheck": true
  },
  "include": ["src"],
  "references": [{ "path": "./tsconfig.app.json" }, { "path": "./tsconfig.node.json" }]
}
```

## 文件命名约定

| 文件类型 | 命名规范            | 示例                            |
| -------- | ------------------- | ------------------------------- |
| Vue 组件 | PascalCase          | `UserCard.vue`, `HeaderNav.vue` |
| 工具函数 | camelCase           | `formatDate.ts`, `isEmail.ts`   |
| 类型定义 | PascalCase          | `User.ts`, `ApiResponse.ts`     |
| 常量     | UPPER_SNAKE_CASE    | `API_BASE_URL`, `MAX_RETRIES`   |
| Hook     | camelCase, 前缀 use | `useTheme.ts`, `useFetch.ts`    |

## 导入路径

项目配置了 `@` 别名指向 `src` 目录，推荐使用别名导入以获得更好的代码可读性和重构体验：

```typescript
// ✅ 推荐
import { formatDate } from '@/utils'
import Header from '@/components/layout/Header.vue'

// ❌ 不推荐
import { formatDate } from '../../../utils'
import Header from '../../../components/layout/Header.vue'
```

## 最佳实践

1. **组件组织**：按功能或页面将组件分组存放在子目录中
2. **工具复用**：常用的逻辑应该提取为 Hook 或工具函数
3. **类型安全**：为所有函数参数和返回值添加类型注解
4. **样式隔离**：使用 UnoCSS 的响应式和暗色模式前缀避免样式冲突
5. **文件大小**：单个文件超过 300 行时考虑进行拆分
