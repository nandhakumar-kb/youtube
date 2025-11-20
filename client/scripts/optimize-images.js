import sharp from 'sharp'
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const publicDir = path.join(__dirname, '../public')

const images = [
  { input: 'intro.jpg', output: 'intro.webp' },
  { input: 'logo.png', output: 'logo.webp' }
]

async function optimizeImages() {
  try {
    console.log('🖼️  Optimizing images to WebP format...\n')

    for (const { input, output } of images) {
      const inputPath = path.join(publicDir, input)
      const outputPath = path.join(publicDir, output)

      if (!fs.existsSync(inputPath)) {
        console.log(`⚠️  Skipping ${input} (not found)`)
        continue
      }

      const stats = fs.statSync(inputPath)
      const originalSize = (stats.size / 1024).toFixed(2)

      await sharp(inputPath)
        .webp({ quality: 80 })
        .toFile(outputPath)

      const newStats = fs.statSync(outputPath)
      const newSize = (newStats.size / 1024).toFixed(2)
      const savings = ((1 - newStats.size / stats.size) * 100).toFixed(1)

      console.log(`✅ ${input} → ${output}`)
      console.log(`   ${originalSize}KB → ${newSize}KB (${savings}% smaller)\n`)
    }

    console.log('✨ Image optimization complete!')
  } catch (error) {
    console.error('❌ Error optimizing images:', error.message)
    process.exit(1)
  }
}

optimizeImages()
