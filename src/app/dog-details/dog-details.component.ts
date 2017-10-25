import { Component, Input, Output, EventEmitter } from '@angular/core'

//import EventEmitter from angular core
@Component({
    selector:"dog-details",
    template:`
            <div>
                <h3>{{name}}</h3>
                <input type="text" [(ngModel)]="name"/>
            </div>`
})
export class DogDetailsComponent{
    @Input() name:string 
    @Output() nameChange = new EventEmitter<string>() //Output must be suffixed with Change
    constructor(){
        
    }

    handleChange(e){
        this.nameChange.emit(e.target.value)
    }

}