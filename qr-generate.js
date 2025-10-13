// qr-generate.js
// Usage: node qr-generate.js
// This script generates QR codes for each hint and the congratulations page.

const fs = require('fs');
const path = require('path');
const QRCode = require('qrcode');
const { hintHashMap } = require(path.join(__dirname, 'src', 'app', 'hint-hash-map.js'));

const BASE_URL = 'https://www.raearnold.com/pc-kids-halloween-hunt-2025';
const OUTPUT_DIR = path.join(__dirname, 'public', 'qr-codes');

// Clean up existing QR codes before generating new ones
if (fs.existsSync(OUTPUT_DIR)) {
  for (const file of fs.readdirSync(OUTPUT_DIR)) {
    fs.unlinkSync(path.join(OUTPUT_DIR, file));
  }
} else {
  fs.mkdirSync(OUTPUT_DIR);
}

async function generateQR(url, filename) {
  await QRCode.toFile(path.join(OUTPUT_DIR, filename), url, {
    width: 400,
    margin: 2,
  });
}

(async () => {
  try {
    // Generate QR codes for each hint
    for (const { id, hash } of hintHashMap) {
      const url = `${BASE_URL}/${hash}`;
      await generateQR(url, `hint-${id}.png`); // Only use hint number in filename
      console.log(`Generated QR for Hint ${id}: ${url}`);
    }
    // Generate QR code for congratulations page
    const congratsUrl = `${BASE_URL}/congratulations`;
    await generateQR(congratsUrl, 'congratulations.png');
    console.log(`Generated QR for Congratulations: ${congratsUrl}`);
  } catch (err) {
    console.error('QR code generation failed:', err);
    process.exit(1);
  }
})();
