import { appTools, defineConfig } from '@modern-js/app-tools';
import { tailwindcssPlugin } from '@modern-js/plugin-tailwindcss';

export default defineConfig<'rspack'>({
  runtime: {
    router: true,
    // 使用状态管理相关 API
    state: true,
  },
  server: {
    ssr: true,
  },
  plugins: [appTools(), tailwindcssPlugin()],
});
