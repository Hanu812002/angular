import { Component, OnDestroy } from '@angular/core';
import { ingredients } from '../shared/ingredients.model';
import { ShoppingListService } from './shopping-list.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnDestroy {
  ingredient:ingredients[]=[];
  private igchangesub: Subscription | undefined;

  constructor(private shoppingservice:ShoppingListService){
    this.ingredient=this.shoppingservice.getingredients();
     this.igchangesub=this.shoppingservice.ingredientchanged.subscribe(
      (ingredientt: ingredients[])=>{
        this.ingredient=ingredientt;
      }
    );
  }
  ngOnDestroy(): void {
      this.igchangesub?.unsubscribe();
  }

  oneditItem(i:number){
      this.shoppingservice.startedediting.next(i);
  }
}
