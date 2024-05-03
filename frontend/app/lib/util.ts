"use client";
import { Ingredients, type IngredientAndQuantity } from "./definition";

export function parseIngredients(ingredients: string[]): IngredientAndQuantity[]{
  return ingredients.map((ingredient) => {
    const s = ingredient.split(",");
    return {
      ingredient: Ingredients[s[0]],
      quantity: Number.parseFloat(s[1]),
    }
  });
}
