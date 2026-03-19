# 🚀 Vite+ Professional Template

A comprehensive, open-source [Vite+](https://github.com/vite-pwa/vite-plus) template for modern Vue 3 applications with TypeScript, Ant Design Vue, VueUse, and best practices built-in.

![License](https://img.shields.io/badge/license-MIT-green)
![Vue Version](https://img.shields.io/badge/vue-3.5+-green)
![Vite+ Version](https://img.shields.io/badge/vite+-0.1+-blue)
![TypeScript](https://img.shields.io/badge/typescript-5.9+-blue)

## ✨ Features

- **🎨 Beautiful UI Components** - Ant Design Vue components pre-configured
- **⚡ Lightning Fast** - Vite+ with optimized build pipeline
- **📱 Fully Responsive** - Mobile, tablet, and desktop support
- **🌙 Dark Mode** - Built-in theme switching with composables
- **🎯 Type Safe** - Full TypeScript support with strict settings
- **📦 Production Ready** - Best practices and optimizations included
- **🧩 Auto Import** - Components and utilities auto-imported on demand
- **🎪 Innovative Animations** - Gradient cards, floating elements, and smooth transitions
- **💼 Comprehensive Utils** - String, number, validator, and storage helpers
- **🪝 VueUse Integration** - Powerful composable utilities pre-configured
- **✅ Pre-configured Tools** - Linting, formatting, and testing ready

## 📂 Project Structure

```
src/
├── components/          # Vue components
│   ├── common/         # Reusable basic components
│   ├── ui/             # Innovative UI components
│   └── layout/         # Layout components
├── composables/        # Vue composables (VueUse)
├── pages/              # Page components (routes)
├── router/             # Vue Router configuration
├── services/           # API services
├── utils/              # Utility functions
├── constants/          # Application constants
├── styles/             # Global styles
├── types/              # TypeScript type definitions
├── App.vue             # Root component
└── main.ts             # Application entry point
```

## 🎯 Components

### Common Components

- `Card.vue` - Reusable card component with hover effects
- `ErrorState.vue` - Error page template
- `EmptyState.vue` - Empty state template
- `LoadingState.vue` - Loading skeleton
- `WelcomeState.vue` - Welcome/success state

### Layout Components

- `Header.vue` - Responsive navigation header with theme toggle
- `Footer.vue` - Footer with social links and information

### UI Components

- `StatCard.vue` - Statistics card with trends
- `GradientCard.vue` - Animated gradient cards
- `FloatingCard.vue` - Floating 3D card with perspective
- `FloatingActionButton.vue` - FAB component

## 🛠️ Utilities

### String Utilities

```typescript
capitalize(str) - Capitalize first letter
camelToKebab(str) - Convert camelCase to kebab-case
kebabToCamel(str) - Convert kebab-case to camelCase
truncate(str, length) - Truncate with ellipsis
removeWhitespace(str) - Remove all whitespace
isEmpty(str) - Check if string is empty
```

### Number Utilities

```typescript
formatNumber(num) - Format with commas
toPercentage(num) - Convert to percentage
clamp(num, min, max) - Clamp value in range
round(num, decimals) - Round to decimals
```

### Validator Utilities

```typescript
isEmail(email) - Validate email
isUrl(url) - Validate URL
isPhoneNumber(phone) - Validate phone
isNumber/isString/isArray/isObject - Type checks
```

### Storage Utilities

```typescript
getLocalItem(key) - Get from localStorage
setLocalItem(key, value) - Set in localStorage
getSessionItem(key) - Get from sessionStorage
// Plus session variants
```

### Time Utilities

```typescript
formatDate(date, format) - Format date
getTimeAgo(date) - Get "time ago" text
getRemainingTime(endDate) - Get countdown
isToday(date) / isYesterday(date)
```

## 🎪 Composables

### useTheme

```typescript
const { isDark, toggleTheme, setTheme, initTheme } = useTheme()
```

### useResponsive

```typescript
const { isMobile, isTablet, isDesktop, isLargeDesktop } = useResponsive()
```

### useAsync

```typescript
const { loading, error, data, execute } = useAsync(asyncFunction)
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- pnpm (recommended)

### Installation

```bash
# Clone the repository
git clone https://github.com/yourusername/vite-plus-template.git

# Navigate to directory
cd vite-plus-template

# Install dependencies
vp install

# Start development server
vp dev
```

### Build

```bash
# Build for production
vp build

# Preview production build
vp preview
```

## 📋 Available Commands

```bash
# Development
vp dev          # Start dev server
vp check        # Run checks (format, lint, TypeScript)
vp lint         # Lint code
vp fmt          # Format code

# Building
vp build        # Build for production
vp pack         # Build libraries

# Dependencies
vp install      # Install dependencies
vp add <pkg>    # Add package
vp remove <pkg> # Remove package
vp update       # Update packages

# Testing
vp test         # Run tests
```

## 🎨 Customization

### Theme Configuration

Edit theme colors in your components using Ant Design Vue's theme API or update global styles in `src/styles/`.

### Responsive Breakpoints

Defined in `src/constants/index.ts`:

```typescript
BREAKPOINTS = {
  XS: 0,
  SM: 640,
  MD: 768,
  LG: 1024,
  XL: 1280,
  XXL: 1536,
}
```

### API Configuration

Update API base URL in `src/constants/index.ts`:

```typescript
API_BASE_URL = import.meta.env.VITE_API_URL || 'https://api.example.com'
```

## 📦 Included Packages

- **vue** - Progressive JavaScript framework
- **ant-design-vue** - Enterprise UI components
- **@vueuse/core** - Composition utilities
- **axios** - HTTP client
- **dayjs** - Lightweight date library
- **clsx** - Utility for constructing className
- **typescript** - TypeScript language
- **unocss** - Instant on-demand Atomic CSS

## 🎌 File Structure Best Practices

### Adding a New Page

1. Create file in `src/pages/NewPage.vue`
2. Add route in `src/router/index.ts`
3. Components are auto-imported

### Adding a New Component

1. Create file in `src/components/`
2. Use `<script setup lang="ts">` syntax
3. Component is auto-imported when used

### Adding a New Utility

1. Create file in `src/utils/`
2. Export function
3. Available via `@/utils`

### Adding a New Composable

1. Create file in `src/composables/`
2. Export composable function
3. Auto-imported in `vite.config.ts`

## 📖 Documentation

- [Vue 3 Documentation](https://vuejs.org/)
- [Ant Design Vue](https://www.antdv.com/)
- [VueUse](https://vueuse.org/)
- [Vite+ Documentation](https://github.com/vite-pwa/vite-plus)
- [UnoCSS](https://unocss.dev/)

## 🤝 Contributing

Contributions are welcome! Please read our contribution guidelines before submitting PRs.

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🙏 Acknowledgments

- Built with [Vite+](https://github.com/vite-pwa/vite-plus)
- UI components from [Ant Design Vue](https://www.antdv.com/)
- Composables from [VueUse](https://vueuse.org/)

## 💬 Support

For support, open an issue or visit our [discussions](https://github.com/yourusername/vite-plus-template/discussions)

---

**Made with ❤️ for the Vue community**
