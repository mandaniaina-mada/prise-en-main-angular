import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  isAuth = false;
  appareils = [
    {
      name: "television",
      status: "allumer"
    },
    {
      name: "Machine à laver",
      status: "allumer"
    },
    {
      name: "frigo",
      status: "eteint"
    }
  ]

  constructor() {
    setTimeout(
      () => {
        this.isAuth = true;

      }, 3000)
  }
  onAllumer = () => {
    console.log("Allumer")
  }



}
