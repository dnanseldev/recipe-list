import { Injectable, EventEmitter } from '@angular/core';
import { Recipe } from './recipe.model';

@Injectable()
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe('Tomato Pie', 'This is a tomato pie', './assets/imgs/tomato-pie.jpg'),
    new Recipe('Green salad', 'A delicious green salad', './assets/imgs/green-salad.jpg'),
    new Recipe('Honey cake', 'A marvelous sweet cake', './assets/imgs/honey-cake.jpg'),
  ];


  addRecipe(recipe: Recipe): void {
    this.recipes.push(recipe);
  }

  getRecipes(): Recipe[] {
    return this.recipes.slice();
  }
}