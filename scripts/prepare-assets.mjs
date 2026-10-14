import sharp from 'sharp';
import { mkdir, copyFile, readdir, writeFile } from 'node:fs/promises';
const output = 'public/assets/bunilla';
await mkdir(output, { recursive: true });
await mkdir('src/fonts', { recursive: true });
const jobs = [
  ['cups.png', 'cups.webp', 1122],
  ['poster.jpeg', 'poster.webp', 1080], ['logo.png', 'logo.webp', 540],
];
for (const [source, target, width] of jobs) {
  await sharp(`assets/originals/${source}`).resize({ width }).webp({ quality: 85 }).toFile(`${output}/${target}`);
}
// Preserve all original lettering and decorative rules; only remove outer blank margin.
await sharp('assets/originals/logo.png').extract({ left: 228, top: 451, width: 624, height: 166 }).webp({ quality: 95 }).toFile(`${output}/wordmark.webp`);
await sharp('assets/originals/cups.png').extract({ left: 0, top: 340, width: 345, height: 480 }).resize({ width: 690 }).webp({ quality: 88 }).toFile(`${output}/bakes.webp`);
// Exclude the unverified prices printed in the promotional image's left menu board.
await sharp('assets/originals/interior.png').extract({ left: 350, top: 0, width: 772, height: 1402 }).webp({ quality: 85 }).toFile(`${output}/interior.webp`);
await sharp('assets/originals/interior.png').extract({ left: 400, top: 210, width: 720, height: 585 }).resize({ width: 1000 }).webp({ quality: 85 }).toFile(`${output}/interior-detail.webp`);
await sharp('assets/originals/logo.png').resize(64,64).png().toFile('src/app/icon.png');
await sharp('assets/originals/logo.png').resize(180,180).png().toFile('src/app/apple-icon.png');
const card = Buffer.from(`<svg width="1200" height="630" xmlns="http://www.w3.org/2000/svg"><rect width="1200" height="630" fill="#3c0a13"/><rect x="32" y="32" width="1136" height="566" fill="none" stroke="#A24C4E"/><text x="600" y="102" text-anchor="middle" fill="#F8F2E6" font-family="sans-serif" font-size="17" letter-spacing="5">I-8, ISLAMABAD · COMING SOON</text><text x="600" y="465" text-anchor="middle" fill="#F8F2E6" font-family="serif" font-size="43" font-style="italic">Good things are brewing.</text><text x="600" y="525" text-anchor="middle" fill="#F8F2E6" font-family="sans-serif" font-size="16" letter-spacing="3">COFFEE · FRESH BAKES · WOOD-FIRE PIZZA</text><text x="600" y="574" text-anchor="middle" fill="#F8F2E6" font-family="sans-serif" font-size="12">Concept website · Proposed redesign</text></svg>`);
const cardLogo = await sharp('assets/originals/logo.png').extract({ left: 228, top: 451, width: 624, height: 166 }).resize(820).png().toBuffer();
await sharp(card).composite([{ input: cardLogo, left: 190, top: 190 }]).png().toFile('src/app/opengraph-image.png');
const pixel = await sharp('assets/originals/logo.png').extract({ left: 0, top: 0, width: 1, height: 1 }).raw().toBuffer();
console.log('Original logo background:', '#' + [...pixel.subarray(0,3)].map(n => n.toString(16).padStart(2,'0')).join(''));
for (const [pkg, variant, target] of [
  ['cormorant-garamond','normal','cormorant-normal.woff2'],
  ['cormorant-garamond','italic','cormorant-italic.woff2'],
  ['raleway','normal','raleway-normal.woff2'],
]) {
  const folder = `node_modules/@fontsource-variable/${pkg}/files`;
  const files = await readdir(folder);
  const source = files.find(name => name === `${pkg}-latin-wght-${variant}.woff2`);
  if (!source) throw new Error(`Missing font ${pkg} ${variant}`);
  await copyFile(`${folder}/${source}`, `src/fonts/${target}`);
  await copyFile(`node_modules/@fontsource-variable/${pkg}/LICENSE`, `src/fonts/${pkg}-LICENSE.txt`);
}
await writeFile('docs/asset-build.json', JSON.stringify({ generatedFrom: 'assets/originals', optimizer: 'sharp WebP quality 85–95', logoBackground: '#' + [...pixel.subarray(0,3)].map(n => n.toString(16).padStart(2,'0')).join(''), generatedAt: '2026-10-14' }, null, 2));
console.log('Optimized assets and local fonts ready.');
