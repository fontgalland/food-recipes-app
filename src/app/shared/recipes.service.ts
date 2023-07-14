import { EventEmitter, Injectable } from '@angular/core';
import { Recipe } from '../recipes/recipe.model';
import { Ingredient } from './ingredient.model';
import { ShoppingListService } from './shopping-list.service';

@Injectable({
  providedIn: 'root'
})

export class RecipesService {
  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe('A Chicken Salad', 
    'A pretty salad with chicken for protein', 
    'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=880&q=80', 
    [ new Ingredient('Lettuce', 3), new Ingredient('Chicken', 1), new Ingredient('Boiled Eggs', 2),]
    ),
    new Recipe('A big fat burger', 
    'A not so healthy but very juice burger', 
    'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=999&q=80', 
    [ new Ingredient('Meat', 2), new Ingredient('Buns', 2), new Ingredient('Sauce', 1),]),
    new Recipe('A nice pumpking soup', 
    'A soup, for that cold days at home', 
    'https://images.unsplash.com/photo-1547592166-23ac45744acd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1171&q=80', 
    [ new Ingredient('Pumpking', 1) ])
  ];
  constructor(private shoppingListService: ShoppingListService) { };

  getRecipes() {
    return this.recipes.slice();
  }

  getRecipe(id: number) {
    return this.recipes[id];
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.shoppingListService.addIngredients(ingredients);
  }
}
