import { Component } from '@angular/core'

//Component Decorator needed to tell angular that you're creating a component
@Component({
    selector:"dog-details",// is the css selector that identifies the component in a template
    template:`
            <div>
                <h3>{{name}}</h3>
            </div>
            `//template for the view or the HTML used for the component view
})
export class DogDetailsComponent{
    name:String
    constructor(){
        this.name = "Max"
    }
}