import { useMemo, useState } from "react";
import { IngredientStep } from "../../../api/types/recipte";
import classes from "./RecipeStep.module.less";

interface Props {
  step: IngredientStep;
}

const RecipeStepIngredient: React.FC<Props> = ({ step }) => {
  const { title, baseIngredient, otherIngredients } = step;
  const { baseAmount } = baseIngredient;

  const [dynamicValue, setDynamicValue] = useState(baseIngredient.baseAmount);

  const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value && !isNaN(Number(e.target.value))) {
      setDynamicValue(Number(e.target.value));
    }
  };

  const dynamicIngredients = useMemo(() => {
    const modifier = (dynamicValue )/ baseAmount

    return otherIngredients.map((i, index) => <div key={`${step.no}-${index}`}>{i.title}&nbsp;{(i.baseAmount * modifier).toFixed(1)}&nbsp;{i.unit}</div>)
  },[dynamicValue])

  return (
    <div className={classes.stepContainer}>
      <div className={classes.stepTitle}>{title}</div>
      <label htmlFor="dynamicValue">
        {}&nbsp;
        <input
          name="dynamicValue"
          type="number"
          min={0}
          value={dynamicValue}
          onChange={onInputChange}
          className={classes.dynamicValueInput}
        />
        &nbsp;{baseIngredient.unit}
      </label>
      {dynamicIngredients}
    </div>
  );
};

export default RecipeStepIngredient;
