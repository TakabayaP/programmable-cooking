"use client";
import type {
  RecipeData,
  RecipeDataWithStringIngredients,
} from "@/app/lib/definition";
import {
  faCaretLeft,
  faCaretRight,
  faClock,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import type { MDXRemoteSerializeResult } from "next-mdx-remote";
import React, { useState } from "react";
import { MDXContent } from "./mdx-content";
import { parseIngredients } from "../lib/util";

interface RecipeViewProps {
  markdown: MDXRemoteSerializeResult;
  data: RecipeDataWithStringIngredients;
}

export function RecipeView({ markdown, data }: RecipeViewProps) {
  const [servings, setServings] = useState<number>(1);
  const recipeData: RecipeData = {
    ...data,
    ingredients: parseIngredients(data.ingredients),
  };
  return (
    <div>
      <div className="md:grid md:grid-cols-2 md:gap-8 mb-8">
        <img
          src="/fried_rice.jpg"
          width={3024}
          height={4032}
          alt="Screenshots of the dashboard project showing desktop version"
          className="mb-8 md:mb-0"
        />
        <div className="grid grid-cols-1 gap-4">
          <div>
            <h1 className="text-4xl font-bold mb-4 border-b-2">{data.title}</h1>
            <p>{data.comment}</p>
          </div>
          <div>
            <FontAwesomeIcon icon={faClock} className="inline w-4  mr-2" />
            調理時間: 20分
          </div>
        </div>
      </div>
      <h2 className="text-2xl font-bold mb-4 border-b-2">材料</h2>
      <button
        className="btn btn-ghost"
        onClick={() => {
          if (servings - 1 > 0) setServings(servings - 1);
        }}
        type="button"
      >
        <FontAwesomeIcon icon={faCaretLeft} />
      </button>
      {servings}
      <button
        className="btn btn-ghost"
        onClick={() => setServings(servings + 1)}
        type="button"
      >
        <FontAwesomeIcon icon={faCaretRight} />
      </button>
      人前
      <ul>
        {recipeData.ingredients.map((ingredient) => (
          <li key={ingredient.ingredient.name}>
            <ul>
              {ingredient.ingredient.quantities.map((v) => (
                <li key={v.unit.name}>
                  {ingredient.ingredient.name}:{" "}
                  {v.unit.toString(
                    (ingredient.quantity * servings * v.quantity).toString(),
                  )}
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
      <h2 className="text-2xl font-bold mb-4 border-b-2">作り方</h2>
      <MDXContent source={markdown} data={{ servings: servings }} />
    </div>
  );
}
