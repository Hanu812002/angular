import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';
import { Component, ElementRef, OnDestroy, ViewChild } from '@angular/core';
import { ingredients } from 'src/app/shared/ingredients.model';
import { ShoppingListService } from '../shopping-list.service';


@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnDestroy {
   @ViewChild('f') slform!:NgForm;
  subscription: Subscription | undefined;
  editmode=false;
  editeditemIndex!: number;
  editeditem: ingredients | undefined;
  // @ViewChild('nameInput')
  // name!: ElementRef;
  
  // @ViewChild('amountInput')
  // amount!:ElementRef; 
  
  constructor(private shoppingservice:ShoppingListService){
         this.subscription=this.shoppingservice.startedediting.subscribe(
           (i: number)=>{
            this.editeditemIndex=i;
                 this.editmode=true;
               this.editeditem=this.shoppingservice.getingredient(i);
               this.slform?.setValue({
                name: this.editeditem.name,
                amount: this.editeditem.amount
               })
           }
         );
  }
  onclear(){
    this.slform.reset();
    this.editmode=false;
  }
  onadditem(form: NgForm){
  // const name=this.name.nativeElement.value;
  // const amount=this.amount.nativeElement.value;
  const value=form.value;
  console.log(value.name);
  const newingredient=new ingredients(value.name,value.amount);
  if(this.editmode){
    this.shoppingservice.updateingredient(this.editeditemIndex,newingredient);
  }
 else  
  this.shoppingservice.addingredients(newingredient);

  this.editmode=false;
  form.reset();
}

ondelete(){
  this.shoppingservice.deleteingredients(this.editeditemIndex);
  this.onclear();
}
  ngOnDestroy(){
    this.subscription?.unsubscribe();
  }
}


