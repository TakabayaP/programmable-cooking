'use client';
import { useState } from 'react'
import { useTheme } from 'next-themes'
import { RecipeCard } from '@/app/ui/recipe-card';

export default function Home() {
  const { setTheme } = useTheme()
  const [themeName, setThemeName] = useState('');
  return (
    <main className="flex min-h-screen justify-center">
      <div className="flex flex-col items-center justify-between p-24 w-full lg:w-[1024px]">
        <h1 className="text-4xl text-left bg-primary w-full my-4">料理のレシピを動的に</h1>
        <h2 className="text-2xl text-left text-secondary w-full my-2">レシピ一覧</h2>
        <ul className="grid grid-cols-1 gap-8">
          <li>
            <RecipeCard />
          </li>
          <li>
           <RecipeCard /> 
          </li>
          <li>
            <RecipeCard />
          </li>
        </ul>
      </div>
    </main>
  );
}
