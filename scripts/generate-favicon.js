// Script untuk generate favicon dari favicon-source.png
// Jalankan: node scripts/generate-favicon.js
const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const SRC = path.join(__dirname, '../public/favicon-source.png');
const OUT = path.join(__dirname, '../public');

async function generate() {
  console.log('🎨 Generating favicons from favicon-source.png...\n');

  // favicon-32x32.png
  await sharp(SRC).resize(32, 32).png().toFile(path.join(OUT, 'favicon-32x32.png'));
  console.log('✅ favicon-32x32.png');

  // favicon-16x16.png
  await sharp(SRC).resize(16, 16).png().toFile(path.join(OUT, 'favicon-16x16.png'));
  console.log('✅ favicon-16x16.png');

  // apple-touch-icon.png (180x180)
  await sharp(SRC).resize(180, 180).png().toFile(path.join(OUT, 'apple-touch-icon.png'));
  console.log('✅ apple-touch-icon.png');

  // favicon-192x192.png (for PWA manifest)
  await sharp(SRC).resize(192, 192).png().toFile(path.join(OUT, 'favicon-192x192.png'));
  console.log('✅ favicon-192x192.png');

  // favicon-512x512.png (for PWA manifest)
  await sharp(SRC).resize(512, 512).png().toFile(path.join(OUT, 'favicon-512x512.png'));
  console.log('✅ favicon-512x512.png');

  // favicon.ico — dibuat dari 32x32 buffer sebagai ICO sederhana
  // Sharp tidak support .ico langsung, jadi kita buat manual binary ICO dari 2 ukuran
  const buf16 = await sharp(SRC).resize(16, 16).png().toBuffer();
  const buf32 = await sharp(SRC).resize(32, 32).png().toBuffer();

  const icoBuffer = createIco([
    { size: 16, buffer: buf16 },
    { size: 32, buffer: buf32 },
  ]);

  fs.writeFileSync(path.join(OUT, 'favicon.ico'), icoBuffer);
  console.log('✅ favicon.ico');

  console.log('\n🎉 Semua favicon berhasil dibuat di /public!');
}

/**
 * Membuat binary ICO file dari array { size, buffer (PNG) }
 * Format ICO: https://en.wikipedia.org/wiki/ICO_(file_format)
 */
function createIco(images) {
  const numImages = images.length;
  const headerSize = 6;                    // ICONDIR header
  const entrySize = 16 * numImages;        // ICONDIRENTRY per image
  const dataOffset = headerSize + entrySize;

  // Hitung total size
  const totalSize = dataOffset + images.reduce((sum, img) => sum + img.buffer.length, 0);
  const buf = Buffer.alloc(totalSize);

  // ICONDIR header
  buf.writeUInt16LE(0, 0);          // Reserved
  buf.writeUInt16LE(1, 2);          // Type: 1 = ICO
  buf.writeUInt16LE(numImages, 4);  // Number of images

  let offset = dataOffset;
  images.forEach((img, i) => {
    const entryOffset = headerSize + i * 16;
    const s = img.size >= 256 ? 0 : img.size;

    // ICONDIRENTRY
    buf.writeUInt8(s, entryOffset);              // Width
    buf.writeUInt8(s, entryOffset + 1);          // Height
    buf.writeUInt8(0, entryOffset + 2);          // Color count (0 = PNG)
    buf.writeUInt8(0, entryOffset + 3);          // Reserved
    buf.writeUInt16LE(1, entryOffset + 4);       // Color planes
    buf.writeUInt16LE(32, entryOffset + 6);      // Bits per pixel
    buf.writeUInt32LE(img.buffer.length, entryOffset + 8);  // Size of image data
    buf.writeUInt32LE(offset, entryOffset + 12); // Offset of image data

    img.buffer.copy(buf, offset);
    offset += img.buffer.length;
  });

  return buf;
}

generate().catch(err => {
  console.error('❌ Error:', err.message);
  process.exit(1);
});
