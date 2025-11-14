import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import WindiCSS from 'vite-plugin-windicss'
import AutoImport from 'unplugin-auto-import/vite'
import Icons from 'unplugin-icons/vite'
import IconsResolver from 'unplugin-icons/resolver'

import path from 'path'

// https://vite.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    }
  },
  plugins: [
    vue(),
    WindiCSS(),
    AutoImport({
      resolvers: [
        // 自动导入 Element Plus 图标组件
        IconsResolver({
          prefix: 'Icon', // 图标组件前缀（默认 Icon，如 IconStar）
          enabledCollections: ['ep'], // 启用 Element Plus 图标集（ep = Element Plus）
        }),
      ],
      // 可选：指定自动导入的类型声明文件路径（避免 TS 报错）
      dts: path.resolve(__dirname, './src/auto-imports.d.ts'),
    }),
    // 图标插件配置
    Icons({
      autoInstall: true, // 自动安装用到的图标（无需手动导入）
      compiler: 'vue3', // 指定编译器为 Vue3
    }),
  ],
})