<template>
  <section class="mx-auto flex min-h-screen max-w-6xl items-center px-6 py-16 md:px-12">
    <div class="grid w-full gap-10 md:grid-cols-[1.2fr_1fr] md:items-center">
      <div class="space-y-6">
        <p
          class="inline-flex rounded-full border border-cyan-400/40 bg-cyan-400/10 px-3 py-1 text-xs tracking-widest text-cyan-200 uppercase"
        >
          Vue 3 + Vite+
        </p>
        <div class="flex flex-wrap gap-2">
          <TechBadge label="Vue Router" />
          <TechBadge label="UnoCSS" />
          <TechBadge label="unplugin" />
        </div>
        <h1 class="text-4xl leading-tight font-black tracking-tight text-white md:text-6xl">
          Modern Frontend Starter
        </h1>
        <p class="max-w-xl text-base leading-7 text-slate-300 md:text-lg">
          This project now uses Vue Router, UnoCSS, and unplugin automation. Start building screens
          in <code class="rounded bg-slate-800 px-1.5 py-1 text-sm">src/pages</code> and reusable
          components in
          <code class="rounded bg-slate-800 px-1.5 py-1 text-sm">src/components</code>.
        </p>
        <div class="flex flex-wrap gap-3">
          <a
            href="https://router.vuejs.org/"
            target="_blank"
            rel="noreferrer"
            class="rounded-md border border-slate-700 bg-slate-900 px-4 py-2 text-sm text-slate-100 transition hover:border-cyan-400 hover:text-cyan-200"
          >
            Vue Router Docs
          </a>
          <a
            href="https://unocss.dev/"
            target="_blank"
            rel="noreferrer"
            class="rounded-md border border-slate-700 bg-slate-900 px-4 py-2 text-sm text-slate-100 transition hover:border-cyan-400 hover:text-cyan-200"
          >
            UnoCSS Docs
          </a>
        </div>
      </div>

      <div
        class="rounded-2xl border border-slate-800 bg-gradient-to-br from-slate-900 via-slate-900 to-cyan-950/40 p-6 shadow-2xl shadow-cyan-900/20"
      >
        <h2 class="mb-4 text-lg font-semibold text-white">Stack Ready</h2>
        <ul class="space-y-2 text-sm text-slate-300">
          <li class="flex items-center gap-2">
            <span class="h-2 w-2 rounded-full bg-cyan-300"></span>
            Vue 3 + TypeScript
          </li>
          <li class="flex items-center gap-2">
            <span class="h-2 w-2 rounded-full bg-cyan-300"></span>
            Vue Router 4/5 API
          </li>
          <li class="flex items-center gap-2">
            <span class="h-2 w-2 rounded-full bg-cyan-300"></span>
            UnoCSS utility engine
          </li>
          <li class="flex items-center gap-2">
            <span class="h-2 w-2 rounded-full bg-cyan-300"></span>
            unplugin auto-import/components
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>
