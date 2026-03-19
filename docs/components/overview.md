# 组件文档

本文档介绍项目中所有可用的可复用组件。所有组件已配置自动注册，可直接在模板中使用。

## 布局组件

### Header

头部导航组件，包含品牌信息和主题切换功能。

**位置**: `src/components/layout/Header.vue`

**属性**:

- 无

**事件**:

- `theme-change`: 主题切换事件

**用法**:

```vue
<template>
  <Header />
</template>
```

**特性**:

- 响应式设计，支持移动端和桌面端
- 内置主题切换按钮
- 支持暗色模式
- 自动保存主题偏好设置

### Footer

底部页脚组件，展示项目信息、链接和社交媒体。

**位置**: `src/components/layout/Footer.vue`

**属性**:

- 无

**用法**:

```vue
<template>
  <Footer />
</template>
```

**特性**:

- 多列布局，展示不同类别的链接
- 社交媒体链接
- 版权信息
- 响应式设计，适配各种屏幕
- 暗色模式支持

## 卡片组件

### StatCard

统计卡片组件，用于展示关键指标。

**位置**: `src/components/cards/StatCard.vue`

**属性**:

```typescript
interface Props {
  title?: string // 卡片标题
  value?: string | number // 统计数值
  unit?: string // 单位
  icon?: string // 图标类名
  trend?: 'up' | 'down' // 趋势方向
  trendPercent?: number // 趋势百分比
  color?: 'blue' | 'green' | 'red' | 'yellow'
}
```

**用法**:

```vue
<template>
  <StatCard
    title="Total Users"
    value="12,345"
    unit="users"
    icon="i-mdi-users"
    trend="up"
    trend-percent="12.5"
    color="blue"
  />
</template>
```

**特性**:

- 渐变背景
- 可选的趋势指示器
- 支持自定义颜色方案
- 响应式设计

### GradientCard

具有渐变背景的卡片组件。

**位置**: `src/components/cards/GradientCard.vue`

**属性**:

```typescript
interface Props {
  title?: string // 标题
  description?: string // 描述
  fromColor?: string // 渐变起始颜色
  toColor?: string // 渐变结束颜色
  icon?: string // 图标类名
}
```

**用法**:

```vue
<template>
  <GradientCard
    title="Premium Feature"
    description="Get access to exclusive features"
    from-color="from-blue-500"
    to-color="to-purple-600"
    icon="i-mdi-star"
  />
</template>
```

**特性**:

- 自定义渐变颜色
- 点击效果
- 阴影效果
- 悬停动画

### FloatingCard

浮动卡片组件，具有浮动效果。

**位置**: `src/components/cards/FloatingCard.vue`

**属性**:

```typescript
interface Props {
  title?: string // 标题
  content?: string // 内容
  icon?: string // 图标类名
  delay?: number // 动画延迟（毫秒）
}
```

**用法**:

```vue
<template>
  <FloatingCard
    title="Feature"
    content="Description of feature"
    icon="i-mdi-lightbulb"
    delay="100"
  />
</template>
```

**特性**:

- 持续浮动动画
- 可配置的动画延迟
- 响应式设计

## 其他组件

### TechBadge

技术徽章组件，用于展示项目使用的技术栈。

**位置**: `src/components/TechBadge.vue`

**属性**:

```typescript
interface Props {
  name: string // 技术名称
  color?: string // 颜色类名
  icon?: string // 图标类名
  version?: string // 版本号
}
```

**用法**:

```vue
<template>
  <TechBadge name="Vue 3" color="emerald" icon="i-mdi-vuejs" version="3.3.0" />
</template>
```

**特性**:

- 显示技术名称和版本
- 可自定义颜色
- 可选图标
- 响应式设计

## 创建自定义组件

### 最佳实践

1. **使用 `<script setup>` 语法**

```vue
<script setup lang="ts">
import { computed } from 'vue'

interface Props {
  modelValue?: string
}

const props = withDefaults(defineProps<Props>(), {
  modelValue: '',
})

const emit = defineEmits<{
  'update:modelValue': [value: string]
}>()

const value = computed({
  get: () => props.modelValue,
  set: (newValue) => emit('update:modelValue', newValue),
})
</script>
```

2. **添加完整的类型定义**

```typescript
// 始终为 props 和 emits 提供类型
interface Props {
  title: string
  disabled?: boolean
  color?: 'primary' | 'secondary' | 'danger'
}

interface Emits {
  (e: 'click'): void
  (e: 'change', value: string): void
}
```

3. **使用原子类进行样式**

```vue
<template>
  <div class="p-4 bg-white dark:bg-slate-800 rounded-lg shadow-md">
    <h2 class="text-lg font-semibold text-black dark:text-white">
      {{ title }}
    </h2>
  </div>
</template>
```

4. **支持暗色模式**

始终使用 `dark:` 前缀为暗色模式提供样式。

5. **使用插槽增加灵活性**

```vue
<template>
  <div class="card">
    <div class="card-header">
      <slot name="header">Default Header</slot>
    </div>
    <div class="card-body">
      <slot>Default Content</slot>
    </div>
    <div class="card-footer">
      <slot name="footer">Default Footer</slot>
    </div>
  </div>
</template>
```

### 组件文件结构建议

```
components/
├── layout/          # 布局组件
│   ├── Header.vue
│   ├── Footer.vue
│   └── Sidebar.vue
├── cards/           # 卡片组件
│   ├── StatCard.vue
│   ├── GradientCard.vue
│   └── FloatingCard.vue
├── buttons/         # 按钮组件
│   ├── Button.vue
│   └── IconButton.vue
├── forms/           # 表单组件
│   ├── Input.vue
│   ├── Select.vue
│   └── Checkbox.vue
└── common/          # 通用组件
    ├── Loading.vue
    ├── Modal.vue
    └── Toast.vue
```

## 高级组件模式

### 组件通信

**Props Down, Events Up**:

```vue
<!-- 父组件 -->
<template>
  <MyComponent :value="count" @update="count = $event" />
</template>

<!-- 子组件 -->
<script setup lang="ts">
defineProps<{ value: number }>()
defineEmits<{ update: [value: number] }>()
</script>
```

**使用 v-model**:

```vue
<!-- 父组件 -->
<template>
  <MyComponent v-model="count" />
</template>

<!-- 子组件 -->
<script setup lang="ts">
const props = defineProps<{ modelValue: number }>()
const emit = defineEmits<{ 'update:modelValue': [value: number] }>()
</script>
```

### 条件渲染

```vue
<template>
  <!-- 简单条件 -->
  <div v-if="isLoading">Loading...</div>
  <div v-else-if="isError">Error occurred</div>
  <div v-else>Content</div>

  <!-- 使用 show 进行 CSS 显示隐藏 -->
  <div v-show="isVisible">Visible content</div>
</template>
```

### 列表渲染

```vue
<template>
  <div class="list">
    <div v-for="(item, index) in items" :key="item.id" class="list-item" @click="selectItem(index)">
      {{ item.name }}
    </div>
  </div>
</template>
```

## 组件性能优化

### 使用 Computed 和 Memoization

```typescript
import { computed } from 'vue'

const filteredList = computed(() => {
  return items.value.filter((item) => item.active)
})
```

### 避免不必要的重新渲染

```vue
<!-- 使用 key 确保正确更新 -->
<div v-for="item in items" :key="item.id">{{ item }}</div>

<!-- 使用 v-memo 缓存渲染结果 -->
<div v-memo="[user.id]">{{ user.name }}</div>
```

## 测试组件

### 单位测试示例

```typescript
import { mount } from '@vue/test-utils'
import MyComponent from '@/components/MyComponent.vue'

describe('MyComponent', () => {
  it('renders properly', () => {
    const wrapper = mount(MyComponent, {
      props: {
        title: 'Test Title',
      },
    })
    expect(wrapper.text()).toContain('Test Title')
  })

  it('emits event', async () => {
    const wrapper = mount(MyComponent)
    await wrapper.find('button').trigger('click')
    expect(wrapper.emitted('click')).toHaveLength(1)
  })
})
```
