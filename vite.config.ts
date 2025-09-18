import process from 'node:process';
import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import { defineConfig, loadEnv } from 'vite';
import tsconfigPaths from 'vite-tsconfig-paths';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');

  const chunkGroups: Record<string, string[]> = {
    react: ['react', 'react-dom'], // please remove this line in product mode or justify yourself
  };

  return {
    base: env.VITE_SUBPATH_PREFIX || '/',
    plugins: [react(), tailwindcss(), tsconfigPaths()],
    build: {
      target: 'esnext',
      sourcemap: false,
      chunkSizeWarningLimit: 500,
      rollupOptions: {
        output: {
          manualChunks(id) {
            const normalizedId = id.replace(/\\/g, '/');
            if (!normalizedId.includes('node_modules')) return;

            for (const [chunkName, deps] of Object.entries(chunkGroups)) {
              if (deps.some(dep => normalizedId.includes(`/node_modules/${dep}/`))) {
                return chunkName;
              }
            }

            return 'vendor';
          },
        },
      },
    },
  };
});
