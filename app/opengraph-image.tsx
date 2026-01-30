import { ImageResponse } from 'next/og';

export const alt = 'Whyem Barber – Premium Barbershop Wien 1180';
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = 'image/png';

export default async function Image() {
  return new ImageResponse(
    <div
      style={{
        fontSize: 128,
        background: '#0a0a0a',
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        color: '#ebebeb',
      }}
    >
      <div
        style={{ display: 'flex', alignItems: 'center', marginBottom: '40px' }}
      >
        <div style={{ fontSize: 180, fontWeight: 700 }}>W</div>
      </div>
      <div style={{ fontSize: 48, fontWeight: 300, letterSpacing: '0.1em' }}>
        WHYEM BARBER
      </div>
      <div
        style={{
          fontSize: 28,
          color: '#737373',
          marginTop: '20px',
          letterSpacing: '0.05em',
        }}
      >
        Wien 1180 • Weimarer Straße 13
      </div>
    </div>,
    {
      ...size,
    },
  );
}
