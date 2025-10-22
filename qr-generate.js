// qr-generate.js
// Usage: node qr-generate.js
// This script generates QR codes for each hint and the congratulations page.

const fs = require('fs');
const path = require('path');
const QRCode = require('qrcode');
const archiver = require('archiver');
const { hintHashMap } = require(path.join(__dirname, 'src', 'app', 'hint-hash-map.js'));
const huntConfig = require(path.join(__dirname, 'src', 'app', 'hunt-config.json'));
const hints = huntConfig.hints;

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
    width: 1200,
    margin: 2,
  });
}

(async () => {
  try {
    // Generate QR codes for each hint in hunt-config, mapped to the hash in hintHashMap
    for (const hint of hints) {
      const hashEntry = hintHashMap.find((h) => h.id === hint.id);
      if (!hashEntry) {
        console.warn(`No hash found for hint id ${hint.id}`);
        continue;
      }
      const url = `${BASE_URL}/${hashEntry.hash}`;
      await generateQR(url, `hint-${hint.id}.png`);
      console.log(`Generated QR for Hint ${hint.id}: ${url}`);
    }
    // Generate QR code for congratulations page
    const congratsUrl = `${BASE_URL}/congratulations`;
    await generateQR(congratsUrl, 'congratulations.png');
    console.log(`Generated QR for Congratulations: ${congratsUrl}`);

    // Create a zip file of all QR codes
    const zipPath = path.join(OUTPUT_DIR, 'pc-halloween-hunt-qr-codes.zip');
    const output = fs.createWriteStream(zipPath);
    const archive = archiver('zip', { zlib: { level: 9 } });
    archive.pipe(output);
    for (const file of fs.readdirSync(OUTPUT_DIR)) {
      if (file.endsWith('.png')) {
        archive.file(path.join(OUTPUT_DIR, file), { name: file });
      }
    }
    await archive.finalize();
    console.log(`Created zip file: ${zipPath}`);
  } catch (err) {
    console.error('QR code generation failed:', err);
    process.exit(1);
  }
})();
