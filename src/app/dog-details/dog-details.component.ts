import { Component, Input } from '@angular/core'

//Import input decorator
@Component({
    selector:"dog-details",// is the css selector that identifies the component in a template
    template:`
            <div>
                <h3>{{name}}</h3>
            </div>
            `//template for the view or the HTML used for the component view
})
export class DogDetailsComponent{
    @Input() name:string //use the Input decorator
    constructor(){
        
    }
}