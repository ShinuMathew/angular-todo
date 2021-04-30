import { Component } from '@angular/core';

@Component({
  selector: 'app-root', // Used as the tag in html
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  
}



/*
// Learning
export class AppComponent {
  name:string = 'Shinu Mathew';

  constructor() {
    console.log('123')
    // Constructor runs and overrides the value'
    // The value initially will be Shinu Mathew and after 5 sec change to Sneha Wilson
    setTimeout(() => {
      this.changeName('Sneha Wilson')
    }, 5000);
  }

  changeName(name:string):void {
    this.name = name
  }
}*/
