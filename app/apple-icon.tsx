import { readFileSync } from 'fs';
import { join } from 'path';

export const size = {
  width: 180,
  height: 180,
};
export const contentType = 'image/png';

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
