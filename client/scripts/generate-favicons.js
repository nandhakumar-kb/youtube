import sharp from 'sharp'
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const inputFile = path.join(__dirname, '../public/logo.png')
const outputDir = path.join(__dirname, '../public')

const sizes = [
  { name: 'favicon-16x16.png', size: 16 },
  { name: 'favicon-32x32.png', size: 32 },
  { name: 'apple-touch-icon.png', size: 180 },
  { name: 'android-chrome-192x192.png', size: 192 },
  { name: 'android-chrome-512x512.png', size: 512 }
]

async function generateFavicons() {
  try {
    console.log('📸 Generating favicons from logo.png...\n')

    if (!fs.existsSync(inputFile)) {
      throw new Error(`Logo file not found: ${inputFile}`)
    }

    for (const { name, size } of sizes) {
      const outputPath = path.join(outputDir, name)
      await sharp(inputFile)
        .resize(size, size, {
          fit: 'contain',
          background: { r: 0, g: 0, b: 0, alpha: 0 }
        })
        .png()
        .toFile(outputPath)
      console.log(`✅ Created ${name} (${size}x${size})`)
    }

    // Generate favicon.ico (combining 16x16 and 32x32)
    console.log('\n📦 Creating favicon.ico...')
    const ico16 = await sharp(inputFile)
      .resize(16, 16, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
      .png()
      .toBuffer()
    
    const ico32 = await sharp(inputFile)
      .resize(32, 32, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
      .png()
      .toBuffer()

    // For simplicity, we'll use 32x32 as favicon.ico
    fs.writeFileSync(path.join(outputDir, 'favicon.ico'), ico32)
    console.log('✅ Created favicon.ico')

    console.log('\n✨ All favicons generated successfully!')
    console.log('📁 Location: public/')
  } catch (error) {
    console.error('❌ Error generating favicons:', error.message)
    process.exit(1)
  }
}

generateFavicons()
