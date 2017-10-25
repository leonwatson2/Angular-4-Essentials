import { Component, Input, Output, EventEmitter } from '@angular/core'

//import EventEmitter from angular core
@Component({
    selector:"dog-details",
    template:`
            <div>
                <h3>{{name}}</h3>
                <input type="text" (change)="handleChange($event)"/>
            </div>`
})
export class DogDetailsComponent{
    @Input() name:string 
    @Output() changeName = new EventEmitter<string>()
    constructor(){
        
    }

    handleChange(e){
        this.changeName.emit(e.target.value)
    }

}