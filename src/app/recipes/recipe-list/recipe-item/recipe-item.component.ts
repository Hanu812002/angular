import { Component, EventEmitter, Input } from '@angular/core';
import { recipes } from '../../recipes.model';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent {
   @Input()
  recipe!: recipes;

  @Input()
  index:number | undefined;


  
}
