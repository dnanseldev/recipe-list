import { Component } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrl: './recipe-list.component.css',
})
export class RecipeListComponent {

  recipes: Recipe[] = [
    new Recipe('Tomato Pie', 'This is a tomato pie', './assets/imgs/tomato-pie.jpg'),
    new Recipe('Green salad', 'A delicious green salad', './assets/imgs/green-salad.jpg'),
    new Recipe('Honey cake', 'A marvelous sweet cake', './assets/imgs/honey-cake.jpg'),
  ];
}
