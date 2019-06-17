import { Component } from '@angular/core';

import {Recipe} from './home.model';
import { RecipeService } from './recipe.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  
recipes: Recipe[];
  constructor(private recipeService: RecipeService) {}

  ngOnInit(){
    this.recipeService.getAllRecipes();
  }
}
