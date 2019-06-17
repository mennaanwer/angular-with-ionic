import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RecipeService } from '../recipe.service';
import { Recipe } from '../home.model';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.page.html',
  styleUrls: ['./recipe-detail.page.scss'],
})
export class RecipeDetailPage implements OnInit {
  loadRecipe: Recipe;
  constructor(private activatedRoute: ActivatedRoute, private recipeService: RecipeService) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(paramMap => {
      if (!paramMap.has('recipeId')) {
        return;
      }
      const recipeId = paramMap.get('recipeId');
      this.loadRecipe = this.recipeService.getRecipe(recipeId)
    });
  }

}
