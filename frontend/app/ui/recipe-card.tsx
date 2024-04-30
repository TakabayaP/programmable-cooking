import type { Recipe } from "@/app/lib/definition";
import Link from "next/link";

export function RecipeCard({ recipe }: { recipe: Recipe }) {
  return (
    <Link
      href={`/recipies/${recipe.id}`}
      className="card card-compact w-full h-full shadow-xl"
    >
      <figure>
        <img src={recipe.image.src} alt={recipe.image.alt} />
      </figure>
      <div className="card-body m-4">
        <h2 className="card-title">{recipe.title}</h2>
        <p>{recipe.description}</p>
      </div>
    </Link>
  );
}
