import { readFileSync } from 'fs';
import { join } from 'path';

// Image metadata
export const size = {
  width: 180,
  height: 180,
};
export const contentType = 'image/png';

// Apple Touch Icon component
export default function AppleIcon() {
  const iconPath = join(process.cwd(), 'public', 'logo_icon_180.png');
  const iconBuffer = readFileSync(iconPath);

  return new Response(iconBuffer, {
    headers: {
      'Content-Type': 'image/png',
      'Cache-Control': 'public, max-age=31536000, immutable',
    },
  });
}
