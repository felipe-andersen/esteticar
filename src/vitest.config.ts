import { defineConfig } from 'vitest/config'
import react from '@vitejs/plugin-react'
import tsconfigPaths from 'vite-tsconfig-paths'
 
export default defineConfig({
    plugins: [tsconfigPaths(), react()],
    test: {
        globals: true, 
        // setupFiles: ['./vitest.setup.ts'],       
        environment: 'jsdom',
        include: ['**/*.{test,spec}.ts', '**/*.{test,spec}.tsx'],
    },
})