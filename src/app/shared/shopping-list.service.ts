import { Injectable } from '@angular/core';
import { Ingredient } from './ingredient.model';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class ShoppingListService {
  // use this to emit an event to the new array of ingredients
  ingredientsChanged = new Subject<Ingredient[]>();
  startedEditing = new Subject<number>();


  private ingredients: Ingredient[] = [
    new Ingredient('Apples', 5),
    new Ingredient('Tomatoes', 5),
    new Ingredient('Lettuce', 5),
  ];

  constructor() { }

  getIngredients() {
    // creates a copy of ingredients arr
    return this.ingredients.slice();
  }

  getIngredient(index: number) {
    return this.ingredients[index];
  }

  addIngredient(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
    this.onIngredientsChanged();
  }

  addIngredients(ingredients: Ingredient[]) {
    this.ingredients.push(...ingredients);
    this.onIngredientsChanged();
  }

  updateIngredient(index: number, newIngredient: Ingredient) {
    this.ingredients[index] = newIngredient;
    this.onIngredientsChanged();
  }

  deleteIngredient(index:number) {
    this.ingredients.splice(index, 1);
    this.onIngredientsChanged();
  }

  onIngredientsChanged() {
    this.ingredientsChanged.next(this.ingredients.slice())
  }
}
