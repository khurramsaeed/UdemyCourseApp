import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() recipeSelectedUp = new EventEmitter<Recipe>();
  recipes: Recipe[] = [
    new Recipe('Apple pie', 'A delicious one', 'https://assets.epicurious.com/photos/583f2ecab80c02a24264c1c1/master/pass/apple-pie.jpg'),
    new Recipe('Banana pie', 'Not a delicious one', 'https://cdn2.tmbi.com/TOH/Images/Photos/37/300x300/exps26090_THAT2453289D12_14_5b_WEB.jpg')
  ];
  constructor() { }

  ngOnInit() {
  }

  onRecipeSelectedUp(recipe: Recipe) {
    this.recipeSelectedUp.emit(recipe);
  }
}
