import { Component } from '@angular/core';
import { FormGroup,FormControl,FormArray } from '@angular/forms';
import { ActivatedRoute, Params } from '@angular/router';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent {
  id!: number;
  editmode=false;
 recipeform!: FormGroup;
  constructor(private route:ActivatedRoute,private recipeservice: RecipeService){
     this.route.params.subscribe(
      (params: Params)=>{
        this.id= +params['id'];
        this.editmode=params['id']!=null;
        this.initform();
        // console.log(this.editmode);
      }
     );
  }
    
  onSubmit(){
    console.log(this.recipeform);
  }
 
   private initform(){
    let recipename ='';
    let recipeimgpath='';
    let recipedesc='';

    let ingredientarray= new FormArray([]);
    
    if(this.editmode){
      const recipe=this.recipeservice.getrecipe(this.id);
      recipename=recipe.name;
      recipeimgpath=recipe.imagePath;
      recipedesc=recipe.description;
      if(recipe['ingredient']){
        for(let ingredientt of recipe.ingredient){
           let fg = new FormGroup({
            'name': new FormControl(ingredientt.name),
            'amount': new FormControl(ingredientt.amount)
          })
          // ingredientarray.push(fg);
          // console.log(ingredientt);
        }
      }
    }
     this.recipeform=new FormGroup({
       'name': new FormControl(recipename),
       'imagepath':new FormControl(recipeimgpath),
       'Description':new FormControl(recipedesc)
      //  'ingredient'
      });
   }
}
