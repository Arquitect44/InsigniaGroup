import { ImageResponse } from 'next/og';

export const size = {
  width: 180,
  height: 180,
};

export const contentType = 'image/png';

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#1a1a1a',
        }}
      >
        {/* Outer border */}
        <div
          style={{
            width: '85%',
            height: '85%',
            border: '4px solid #d4a574',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          {/* IG monogram */}
          <div
            style={{
              display: 'flex',
              fontSize: '80px',
              fontWeight: 'bold',
              color: '#d4a574',
              letterSpacing: '-4px',
            }}
          >
            IG
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
