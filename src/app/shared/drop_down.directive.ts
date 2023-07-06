import { Directive, HostBinding, HostListener } from "@angular/core";

@Directive({
    selector:'[dropdowndirective]'
})

export class drop_down{
   
    @HostBinding('class.open') isopen=false;
    @HostListener('click') toggleopen(){
    this.isopen=!this.isopen;
    }
}