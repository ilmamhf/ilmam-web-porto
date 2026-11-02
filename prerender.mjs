import { build } from 'vite'
import { readFileSync, writeFileSync, existsSync, mkdirSync } from 'fs'
import { fileURLToPath } from 'url'
import { dirname, resolve, join } from 'path'

const __dirname = dirname(fileURLToPath(import.meta.url))
const root = resolve(__dirname)

async function prerender() {
  console.log('🔨 Building client bundle...')
  await build({
    configFile: resolve(root, 'vite.config.ts'),
    mode: 'production',
  })

  console.log('🔨 Building SSR bundle...')
  await build({
    configFile: resolve(root, 'vite.config.ts'),
    mode: 'production',
    build: {
      ssr: true,
      outDir: resolve(root, 'dist-ssr'),
      rollupOptions: {
        input: resolve(root, 'src/entry-server.tsx'),
        output: {
          format: 'esm',
          entryFileNames: 'entry-server.mjs',
        },
      },
    },
  })

  console.log('📄 Generating pre-rendered HTML...')
  const serverEntryPath = resolve(root, 'dist-ssr/entry-server.mjs')
  const fileUrl = `file://${serverEntryPath.replace(/\\/g, '/')}`
  const { html } = await import(fileUrl)

  const distDir = resolve(root, 'dist')
  if (!existsSync(distDir)) {
    mkdirSync(distDir, { recursive: true })
  }

  writeFileSync(resolve(distDir, 'index.html'), html)
  console.log('✅ Pre-rendered HTML written to dist/index.html')
}

prerender().catch((err) => {
  console.error('❌ Pre-render failed:', err)
  process.exit(1)
})