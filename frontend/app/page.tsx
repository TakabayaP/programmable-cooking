'use client';
import { RecipeCard } from '@/app/ui/recipe-card';
import { Recipe } from '@/app/lib/definition';

export default function Home() {
  const recipe: Recipe = {
    id: 0,
    title: '炒飯',
    description: '基本のチャーハンの作り方を丁寧に解説します',
    image: { src: "/600x400.png", alt: "炒飯の画像" },
    createdAt: '作成日時',
    updatedAt: '更新日時'
  };
  return (
    <main className="flex min-h-screen justify-center">
      <div className="flex flex-col items-center justify-between p-24 w-full lg:w-[1024px]">
        <h1 className="text-4xl text-left bg-primary w-full my-4">料理のレシピを動的に</h1>
        <h2 className="text-2xl text-left text-secondary w-full my-2">レシピ一覧</h2>
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <li>
            <RecipeCard recipe={recipe} />
          </li>
          <li>
            <RecipeCard recipe={recipe} />
          </li>
          <li>
            <RecipeCard recipe={recipe} />
          </li>
        </ul>
      </div>
    </main>
  );
}
