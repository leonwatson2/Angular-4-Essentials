import { Component } from '@angular/core';

//generated using ng generate component dog-list
//others
//ng g c dog-list
//ng g c dog-list --spec
//more commands options found at https://github.com/angular/angular-cli/wiki/generate-component
@Component({
  selector: 'app-dog-list',
  templateUrl: './dog-list.component.html',
  styleUrls: ['./dog-list.component.css']
})
export class DogListComponent {
  
  michelle = "Michelle"
  mikey = "Mikey"
  //from app component 
  changeMichelle(name:string){
    this.michelle = name
  }
  
  changeMikey(name:string){
    this.mikey = name
  }
  constructor() { }

  

}
