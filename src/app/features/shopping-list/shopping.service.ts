import { Injectable } from "@angular/core";
import { Ingredient } from "../../shared/ingredient.model";

@Injectable()
export class ShoppingService {

  ingredients: Ingredient[] = [
    new Ingredient('Tomatoes', 3.2),
    new Ingredient('Flour', 1.5),
    new Ingredient('Vegetables', 2),
    new Ingredient('Honey', 0.9),
  ];


  getIngredients(): Ingredient[] {

    return this.ingredients.slice();
  }

  addIngredient(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
  }

}