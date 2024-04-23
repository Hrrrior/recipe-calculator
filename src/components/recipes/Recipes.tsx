import { useEffect, useState } from "react";
import { getRecipes } from "../../api/recipes";
import { Recipe } from "../../api/types/recipte";
import RecipeDisplay from "../recipe/RecipeDisplay";

const Recipes = () => {
  const [recipes, setRecipes] = useState<Recipe[]>([]);

  useEffect(() => {
    if (!recipes.length) {
      getRecipes().then(setRecipes);
    }
  }, []);

  return (
    <div>
      {recipes.map((recipe) => (
        <RecipeDisplay recipe={recipe} key={`recipe-${recipe.title}`}/>
      ))}
    </div>
  );
};

export default Recipes;
