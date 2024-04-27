'use client';
import { useState } from 'react'
import { useTheme } from 'next-themes'

export default function Home() {
  const { setTheme } = useTheme()
  const [themeName, setThemeName] = useState('');
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="m-4">
        <input
          value={themeName}
          onChange={(e) => { setThemeName(e.target.value) }}
          className='input'
        />
        <button className='btn' onClick={() => {
          setTheme(themeName)
        }}>
          Change
        </button>
      </div>
    </main>
  );
}
