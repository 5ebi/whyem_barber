import { ImageResponse } from 'next/og';

// Image metadata
export const size = {
  width: 180,
  height: 180,
};
export const contentType = 'image/png';

// Apple Touch Icon component
export default function AppleIcon() {
  return new ImageResponse(
    <div
      style={{
        fontSize: 96,
        background: '#0a0a0a',
        width: '100%',
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: '#ebebeb',
        fontWeight: 700,
      }}
    >
      W
    </div>,
    {
      ...size,
    },
  );
}
