import { Component } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrl: './recipe-list.component.css',
})
export class RecipeListComponent {

  recipes: Recipe[] = [
    new Recipe('A test Recipe', 'This is a simply a test', 'https://images.app.goo.gl/kpjXsBCHavy1MWxAA'),
    new Recipe('A test Recipe', 'This is a simply a test', 'https://images.app.goo.gl/kpjXsBCHavy1MWxAA'),
    new Recipe('A test Recipe', 'This is a simply a test', 'https://images.app.goo.gl/kpjXsBCHavy1MWxAA'),
  ];
}
