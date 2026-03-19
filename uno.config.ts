import { defineConfig, presetWind4, presetAttributify, presetTypography, presetIcons } from 'unocss'

export default defineConfig({
  presets: [
    presetWind4({
      preflights: { reset: true },
    }),
    presetAttributify(),
    presetTypography(),
    presetIcons({
      scale: 1.2,
      warn: true,
    }),
  ],
})
