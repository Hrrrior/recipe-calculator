import { Recipe } from "../../api/types/recipte";
import RecipeStep from "./recipe-step/RecipeStep";
import classes from './Recipe.module.less'

interface Props {
  recipe: Recipe;
}

const RecipeDisplay: React.FC<Props> = ({recipe}) => {
const {title, steps} = recipe;


  return (
    <div className={classes.stepsContainer}>
      <div className={classes.recipeTitle}>{title}</div>
      {steps.map((step) => <RecipeStep step={step} key={`recipe-step-${title}-${step.no}`}/>)}
    </div>
  );
};

export default RecipeDisplay;
