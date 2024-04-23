export type Ingredient = {
  title: string[];
  baseAmount: number;
  unit: string;
};

export type Step = IngredientStep | CookingStep | SummaryStep;

export type IngredientStep = {
  no: number;
  type: "ingredients";
  title: string;
  baseIngredient: Ingredient;
  otherIngredients: Ingredient[];
};

export type CookingStep = {
  no: number;
  type: "cooking";
  title: string;
  content: string;
};

export type SummaryStep = {
  no: number;
  type: "summary";
  title: string;
  content: string;
};

export type Recipe = {
  title: string;
  steps: Step[];
};
