import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  
  public message: string;
  public clicked=0;

  ngOnInit(){
    // this.log();
  }

  log(){
    if (this.message !== undefined){
      this.message = undefined;
    } else {
      this.message = "Hello World!";
    }
    this.clicked = this.clicked + 1; 
  }
}

