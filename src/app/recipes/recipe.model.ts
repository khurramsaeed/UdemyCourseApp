import {Ingredient} from '../shared/ingredient.model';

export class Recipe {
  constructor(
    public name: string,
    public descr: string,
    public imageUrl: string,
    public ingredients: Ingredient[]) {}
}
