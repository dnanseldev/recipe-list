import { Component } from '@angular/core';
import { Ingredient } from '../../shared/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrl: './shopping-list.component.css',
})
export class ShoppingListComponent {

  ingredients: Ingredient[] = [
    new Ingredient('Tomatoes', 3.2),
    new Ingredient('Flour', 1.5),
    new Ingredient('Vegetables', 2),
    new Ingredient('Honey', 0.9),
  ];
}
