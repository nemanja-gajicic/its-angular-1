export interface Ingredient {
    strIngredient: string,
    strDescription: string,
    strABV: string,
    strType: string
}

export interface Ingredients {
    ingredients : Ingredient[]
}

export interface IngredientAndMeasure {
    name: string
    measure: string
}