import Link from "next/link";
import {Recipe} from "@/app/lib/definition";

export function RecipeCard({recipe}: {recipe: Recipe}){
    return (
        <Link href={`/recipe/${recipe.id}`} className="card card-compact w-full bg-base-100 shadow-xl">
            <figure><img src={recipe.image.src} alt={recipe.image.alt} /></figure>
            <div className="card-body m-4">
                <h2 className="card-title">{recipe.title}</h2>
                <p>{recipe.description}</p>
            </div>
        </Link>
    );
}