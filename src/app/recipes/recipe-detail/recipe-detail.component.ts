import { Component } from '@angular/core';
import { recipes } from '../recipes.model';
import { RecipeService } from '../recipe.service';
import { ActivatedRoute, Params,Router } from '@angular/router';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent {
  recipee!: recipes;
  id: number | undefined;

  constructor(private recipeservice:RecipeService,private route:ActivatedRoute,private routter:Router){
     this.route.params.subscribe(
      (params: Params)=>{
        this.id= +params['id'];
        this.recipee=this.recipeservice.getrecipe(this.id);
      }
     );
  }
  
  oneditrecipe(){
       
    this.routter.navigate(['edit'],{relativeTo: this.route});
    // this.routter.navigate(['../',this.id,'edit'],{relativeTo: this.route});
  }
  onaddtoshoppinglist(){
   this.recipeservice.addingredienttoshoppinglist(this.recipee.ingredient);
  }
}
