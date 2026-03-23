# Vite Plus Init

A production-ready Vue 3 starter powered by Vite+, with TypeScript, UnoCSS, Ant Design Vue, and VueUse.

## Features

- Vue 3 + TypeScript with strict type checking
- Ant Design Vue component system
- Unified dark mode (VueUse + Ant Design Vue algorithm switch)
- UnoCSS with icons preset
- Auto import for Vue, Vue Router, VueUse APIs
- Auto component registration (including Ant Design Vue resolver)
- GitHub Pages deployment workflows

## Tech Stack

- Framework: Vue 3
- Language: TypeScript
- Router: Vue Router 4
- UI Library: Ant Design Vue
- Styling: UnoCSS
- Utilities: VueUse, Axios, Day.js, clsx
- Toolchain: Vite+

## Quick Start

### 1) Install Dependencies

```bash
vp install
```

### 2) Run Development Server

```bash
vp dev
```

### 3) Run Quality Checks

```bash
vp check
```

### 4) Build Production

```bash
vp build
```

### 5) Preview Production Build

```bash
vp preview
```

## Project Structure

```text
.
├─ src/
│  ├─ main.ts
│  ├─ App.vue
│  ├─ components/
│  ├─ composables/
│  ├─ constants/
│  ├─ hooks/
│  ├─ pages/
│  ├─ router/
│  ├─ services/
│  ├─ styles/
│  ├─ types/
│  └─ utils/
├─ docs/
│  ├─ api/
│  ├─ components/
│  └─ guide/
├─ .github/workflows/
├─ vite.config.ts
├─ uno.config.ts
└─ package.json
```

## Theme System (VueUse + Ant Design Vue)

Theme state is managed in src/composables/useTheme.ts using VueUse global state.

- Supports light, dark, and auto mode
- Persists user preference in local storage
- Follows system preference in auto mode
- Updates HTML dark class automatically
- App.vue binds the same dark state to Ant Design Vue ConfigProvider algorithm

This guarantees custom UnoCSS dark styles and Ant Design Vue component themes switch together.

## GitHub Pages Deployment

Current workflow files:

- .github/workflows/deploy-pages.yml

Recommended setup:

1. In repository Settings > Pages, set Source to GitHub Actions.
2. Keep only the workflow you actually want to publish (app or docs) to avoid deployment conflicts.
3. Push to main and verify the selected workflow succeeds.

## Notes

- Vite config auto-detects GitHub Actions and sets base path from repository name.
- Auto-generated declaration files are under src/types/.
- Use Vite+ commands for app lifecycle tasks.
