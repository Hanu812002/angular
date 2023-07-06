import { ingredients } from "../shared/ingredients.model";

export class recipes{
    public name:string;
    public description: string ;
    public imagePath: string ;
    public ingredient: ingredients[];

    constructor(name:string,desc:string,img:string,ingredientt: ingredients[]){
        this.name=name;
        this.description=desc;
        this.imagePath=img;
        this.ingredient=ingredientt;
    }
    
}