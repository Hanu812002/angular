import { Component } from '@angular/core';
import { recipes } from './recipes.model';
import { RecipeService } from './recipe.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css'],
  providers:[RecipeService]
})
export class RecipesComponent {
  selectedrecipe!: recipes;

  constructor(private recipeservice:RecipeService){
    this.recipeservice.recipeselected.subscribe((recipe: recipes)=>{
      this.selectedrecipe=recipe;
    });
  }
}
