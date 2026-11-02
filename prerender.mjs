import { build } from 'vite'
import { readFileSync, writeFileSync, existsSync, mkdirSync, readdirSync } from 'fs'
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

  // Find the built client JS bundle
  const assetsDir = resolve(root, 'dist/assets')
  const clientJsFiles = readdirSync(assetsDir).filter(f => f.startsWith('client-') && f.endsWith('.js'))
  if (clientJsFiles.length === 0) {
    throw new Error('No client JS bundle found in dist/assets')
  }
  const clientJsFile = clientJsFiles[0]
  const clientScriptTag = `<script type="module" src="./assets/${clientJsFile}"></script>`

  // Replace placeholder with actual client script tag
  const finalHtml = html.replace('<!-- CLIENT_SCRIPT_PLACEHOLDER -->', clientScriptTag)

  const distDir = resolve(root, 'dist')
  if (!existsSync(distDir)) {
    mkdirSync(distDir, { recursive: true })
  }

  writeFileSync(resolve(distDir, 'index.html'), finalHtml)
  console.log('✅ Pre-rendered HTML written to dist/index.html')
}

prerender().catch((err) => {
  console.error('❌ Pre-render failed:', err)
  process.exit(1)
})