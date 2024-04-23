import { Step } from "../../../api/types/recipte";
import RecipeStepIngredient from "./RecipeStepIngredient";
import RecipeStepCooking from "./RecipeStepCooking";
import RecipeStepSummary from "./RecipeStepSummary";

interface Props {
  step: Step;
}

const RecipeStep: React.FC<Props> = ({ step }) => {

  if (!step) {
    return null;
  }

  if (step.type === 'ingredients') {
    return <RecipeStepIngredient step={step} />
  }

  if (step.type === 'cooking') {
    return <RecipeStepCooking step={step} />
  }

  if (step.type === 'summary') {
    return <RecipeStepSummary step={step} />
  }

  return (
    null
  );
};

export default RecipeStep;
