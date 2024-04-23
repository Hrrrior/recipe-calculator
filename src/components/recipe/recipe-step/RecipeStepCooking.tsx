import { CookingStep } from "../../../api/types/recipte";
import classes from "./RecipeStep.module.less";

interface Props {
  step: CookingStep;
}

const RecipeStepCooking: React.FC<Props> = ({ step }) => {
  const { title, content } = step;
  
  return (
    <div className={classes.stepContainer}>
      <div className={classes.stepTitle}>{title}</div>
      <div>{content}</div>
    </div>
  );
};

export default RecipeStepCooking;
