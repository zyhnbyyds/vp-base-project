<script setup lang="ts">
const year = new Date().getFullYear()
</script>

<template>
  <footer
    class="bg-slate-50 dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 mt-12"
  >
    <div class="max-w-7xl mx-auto px-4 md:px-6 py-8">
      <!-- Content -->
      <div class="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
        <!-- Brand -->
        <div>
          <h3 class="font-bold text-lg mb-4">Vite+</h3>
          <p class="text-sm text-slate-600 dark:text-slate-400">
            A professional, open-source template for building modern web applications
          </p>
        </div>

        <!-- Links -->
        <div>
          <h4 class="font-semibold mb-4 text-sm">Resources</h4>
          <ul class="space-y-2 text-sm">
            <li>
              <a
                href="#"
                class="text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
              >
                Documentation
              </a>
            </li>
            <li>
              <a
                href="#"
                class="text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
              >
                GitHub
              </a>
            </li>
            <li>
              <a
                href="#"
                class="text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
              >
                Issues
              </a>
            </li>
          </ul>
        </div>

        <!-- Community -->
        <div>
          <h4 class="font-semibold mb-4 text-sm">Community</h4>
          <ul class="space-y-2 text-sm">
            <li>
              <a
                href="#"
                class="text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
              >
                Discussions
              </a>
            </li>
            <li>
              <a
                href="#"
                class="text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
              >
                Contributing
              </a>
            </li>
            <li>
              <a
                href="#"
                class="text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
              >
                Code of Conduct
              </a>
            </li>
          </ul>
        </div>

        <!-- Social -->
        <div>
          <h4 class="font-semibold mb-4 text-sm">Social</h4>
          <div class="flex gap-3">
            <a
              href="#"
              class="text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition"
            >
              <i class="icon-[mdi--github]" />
            </a>
            <a
              href="#"
              class="text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition"
            >
              <i class="icon-[mdi--twitter]" />
            </a>
          </div>
        </div>
      </div>

      <!-- Divider -->
      <div class="border-t dark:border-slate-700" />

      <!-- Bottom -->
      <div
        class="flex flex-col md:flex-row justify-between items-center pt-6 text-sm text-slate-600 dark:text-slate-400"
      >
        <p>&copy; {{ year }} Vite+ Template. All rights reserved.</p>
        <div class="flex gap-6 mt-4 md:mt-0">
          <a href="#" class="hover:text-slate-900 dark:hover:text-white transition">Privacy</a>
          <a href="#" class="hover:text-slate-900 dark:hover:text-white transition">Terms</a>
        </div>
      </div>
    </div>
  </footer>
</template>
