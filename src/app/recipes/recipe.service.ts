import {Recipe} from './recipe.model';
import {EventEmitter} from '@angular/core';

export class RecipeService {

  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe('Apple pie', 'A delicious one', 'https://assets.epicurious.com/photos/583f2ecab80c02a24264c1c1/master/pass/apple-pie.jpg'),
    new Recipe('Banana pie', 'Not a delicious one', 'https://cdn2.tmbi.com/TOH/Images/Photos/37/300x300/exps26090_THAT2453289D12_14_5b_WEB.jpg')
  ];

  getRecipes() {
    // slice() returns a copy of array recipes
    // any changes made in sliced version will have no effect on recipe[]
    return this.recipes.slice();
  }
}
