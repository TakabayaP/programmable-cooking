'use client';
import { Recipe } from "@/app/lib/definition";
import { RecipeCard } from "@/app/ui/recipe-card";

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
    <div>
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
          <RecipeCard recipe={{ ...recipe, title: "焼豚チャーハン", description: "特殊なチャーハンのレシピです。具材には特別なスパイスを使用し、独特の風味を出しています。炒める際には高温で素早く調理し、ご飯がパラパラになるように仕上げます。" }} />
        </li>
        <li>
          <RecipeCard recipe={recipe} />
        </li>
      </ul>
    </div>
  );
}
