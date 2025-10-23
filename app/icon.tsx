import { ImageResponse } from 'next/og';

export const size = {
  width: 32,
  height: 32,
};

export const contentType = 'image/png';

export default function Icon() {
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
            width: '90%',
            height: '90%',
            border: '2px solid #d4a574',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          {/* IG monogram */}
          <div
            style={{
              display: 'flex',
              fontSize: '18px',
              fontWeight: 'bold',
              color: '#d4a574',
              letterSpacing: '-1px',
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
