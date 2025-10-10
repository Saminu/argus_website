import sharp from 'sharp'
import { writeFileSync } from 'fs'
import { join } from 'path'

const inputPath = join(process.cwd(), 'public/images/argus-logo-updated.png')
const outputDir = join(process.cwd(), 'public')

const sizes = [
  { size: 16, name: 'favicon-16x16.png' },
  { size: 32, name: 'favicon-32x32.png' },
  { size: 180, name: 'apple-touch-icon.png' },
  { size: 192, name: 'android-chrome-192x192.png' },
  { size: 512, name: 'android-chrome-512x512.png' }
]

async function generateFavicons() {
  try {
    console.log('Generating favicon files from ARGUS logo...')
    
    // Generate PNG favicons
    for (const { size, name } of sizes) {
      await sharp(inputPath)
        .resize(size, size, { 
          fit: 'contain',
          background: { r: 11, g: 12, b: 14, alpha: 1 } // Carbon black background
        })
        .png()
        .toFile(join(outputDir, name))
      
      console.log(`✓ Generated ${name} (${size}x${size})`)
    }
    
    // Generate ICO file (16x16)
    await sharp(inputPath)
      .resize(16, 16, { 
        fit: 'contain',
        background: { r: 11, g: 12, b: 14, alpha: 1 }
      })
      .png()
      .toFile(join(outputDir, 'favicon.ico'))
    
    console.log('✓ Generated favicon.ico (16x16)')
    
    console.log('\n🎉 All favicon files generated successfully!')
    console.log('\nGenerated files:')
    console.log('- favicon.ico (16x16)')
    console.log('- favicon-16x16.png')
    console.log('- favicon-32x32.png')
    console.log('- apple-touch-icon.png (180x180)')
    console.log('- android-chrome-192x192.png')
    console.log('- android-chrome-512x512.png')
    
  } catch (error) {
    console.error('Error generating favicons:', error)
    process.exit(1)
  }
}

generateFavicons()
