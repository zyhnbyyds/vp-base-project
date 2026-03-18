import { defineConfig, presetWind4, presetAttributify, presetTypography } from 'unocss'

export default defineConfig({
  presets: [
    presetWind4({
      preflights: { reset: true },
    }),
    presetAttributify(),
    presetTypography(),
  ],
})
