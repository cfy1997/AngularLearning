import { Recipe } from './recipe.model';
import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe(
      'A Test Recipe',
      'This is simply a test',
      'https://www.seriouseats.com/2019/07/20190618-grilled-turkish-chicken-wings-vicky-wasik-13.jpg',
      [new Ingredient('Meat', 1), new Ingredient('French Frice', 20)],
    ),
    new Recipe(
      'Another Test Recipe',
      'This is simply a test',
      'https://www.seriouseats.com/2019/07/20190618-grilled-turkish-chicken-wings-vicky-wasik-13.jpg',
      [new Ingredient('Buns', 2), new Ingredient('Meat', 1)],
    ),
  ];

  constructor(private shoppingListService: ShoppingListService) {}

  getRecipes() {
    return this.recipes.slice();
  }

  addIngredientsToSl(ingredients: Ingredient[]) {
    this.shoppingListService.addIngredients(ingredients);
  }
}
