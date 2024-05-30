'use client';

const TEST = globalThis.process && process.env.NODE_ENV === 'development' ? 'development' : 'production';
console.log(TEST);

export default function Home() {
  return (
    <div>
      {TEST}
    </div>
  );
}
