"use client";
import { Units } from "./units";

export type Recipe = {
  id: number;
  title: string;
  description: string;
  image: Image;
  createdAt: string;
  updatedAt: string;
};

export type Image = {
  src: string;
  alt: string;
};

export type IngredientAndQuantity = {
  ingredient: Ingredient;
  quantity: number;
};

export type RecipeData = {
  id: string;
  title: string;
  comment: string;
  ingredients: IngredientAndQuantity[];
};

export type RecipeDataWithStringIngredients = Omit<
  RecipeData,
  "ingredients"
> & {
  ingredients: string[];
};

export type UnitAndQuantity = {
  unit: Unit;
  quantity: number;
};

export type Ingredient = {
  name: string;
  quantities: UnitAndQuantity[];
};

export interface Unit {
  name: string;
  toString(quantity: string): string;
}

export const Ingredients: { [key: string]: Ingredient } = {
  onion: {
    name: "玉ねぎ",
    quantities: [
      { unit: Units.ko, quantity: 1 },
      { unit: Units.g, quantity: 200 },
    ],
  },
  carrot: {
    name: "にんじん",
    quantities: [{ unit: Units.hon, quantity: 1 }],
  },
  rice: {
    name: "ご飯",
    quantities: [{ unit: Units.go, quantity: 1 }],
  },
  egg: {
    name: "卵",
    quantities: [{ unit: Units.ko, quantity: 1 }],
  },
  chickenThigh: {
    name: "鶏もも肉",
    quantities: [
      { unit: Units.mai, quantity: 1 },
      { unit: Units.g, quantity: 250 },
    ],
  },
  salt: {
    name: "塩",
    quantities: [{ unit: Units.teaspoon, quantity: 1 }],
  },
  soySauce: {
    name: "醤油",
    quantities: [{ unit: Units.teaspoon, quantity: 3 }],
  },
  pepper: {
    name: "こしょう",
    quantities: [{ unit: Units.teaspoon, quantity: 1 }],
  },
  saladOil: {
    name: "サラダ油",
    quantities: [{ unit: Units.teaspoon, quantity: 3 }],
  },
};
