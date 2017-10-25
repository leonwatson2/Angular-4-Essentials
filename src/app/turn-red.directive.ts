import { Directive, ElementRef, Input, OnChanges } from '@angular/core'

@Directive({
    selector:'[turnRed]'    //attribute Directive
})
//Set of instructions for the dom
export class TurnRedDirective implements OnChanges{
    @Input('turnRed') isOn:boolean;
    constructor(private el:ElementRef){
      
    }
    ngOnChanges(){
        if(this.isOn){
            this.el.nativeElement.style.color = "red"
        }else{
            this.el.nativeElement.style.color = ""            
        }
    }
}