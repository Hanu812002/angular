import { EventEmitter } from "@angular/core";
import { ingredients } from "../shared/ingredients.model";
import { Subject } from "rxjs";

export class ShoppingListService{
    // ingredientchanged=new EventEmitter<ingredients[]>();
    ingredientchanged=new Subject<ingredients[]>();
    startedediting=new Subject<number>();
    private ingredient:ingredients[]=[
        new ingredients("apple",500),
        new ingredients("banana",600)
      ];
    
      getingredients(){
        return this.ingredient.slice(); // slice is used to make copy of ingredient array
      }
      getingredient(index: number){
        return this.ingredient[index];
      }
      addingredients(ingredientt:ingredients){
        this.ingredient.push(ingredientt);
        this.ingredientchanged.next(this.ingredient.slice());
      }
      addingredientss(ingredient:ingredients[]){
        this.ingredient.push(...ingredient);
        this.ingredientchanged.next(this.ingredient.slice());

      }
      updateingredient(index:number,ingredientt:ingredients){
        this.ingredient[index]=ingredientt;
        this.ingredientchanged.next(this.ingredient.slice());
      }
      deleteingredients(index:number){
        this.ingredient.splice(index,1);
        this.ingredientchanged.next(this.ingredient.slice());
      }
}