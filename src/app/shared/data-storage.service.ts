import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Recipe } from "../recipes/recipe.model";
import { RecipesService } from "./recipes.service";
import { map, tap } from "rxjs/operators";
import { AuthService } from "../auth/auth.service";

@Injectable({
    providedIn: 'root'
})

export class DataStorageService {

    constructor(private http: HttpClient, private recipesService: RecipesService, private authService: AuthService) { }

    url: string = 'https://foodapp-e10c4-default-rtdb.firebaseio.com/';

    storeRecipes() {
        const recipes = this.recipesService.getRecipes();
        return this.http.put(this.url + 'recipes.json', recipes).subscribe(response => {
            console.log(response);
        });
    };

    fetchRecipes() {

        return this.http.get<Recipe[]>(this.url + 'recipes.json').pipe(
            map(
                recipes => {
                    return recipes.map(recipe => {
                        return { ...recipe, ingredients: recipe.ingredients ? recipe.ingredients : [] };
                    })
                }
            ), tap(
                recipes => {
                    this.recipesService.setRecipes(recipes)
                }
            )
        )
    }
}