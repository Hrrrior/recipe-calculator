import { Recipe } from "./types/recipte";

export const getRecipes = async (): Promise<Recipe[]> => {
  const response = await fetch("./recipes/jerky_pork.json");

  return response.json() as Promise<Recipe[]>;
};
