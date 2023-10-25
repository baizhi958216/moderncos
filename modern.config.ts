import { appTools, defineConfig } from '@modern-js/app-tools';

export default defineConfig<'rspack'>({
  runtime: {
    router: true,
    state: true,
  },
  server: {
    ssr: true,
  },
  plugins: [appTools()],
});
