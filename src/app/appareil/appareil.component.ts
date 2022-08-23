import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-appareil',
  templateUrl: './appareil.component.html',
  styleUrls: ['./appareil.component.scss']
})
export class AppareilComponent implements OnInit {
  @Input() appareilName: string | undefined
  @Input() status: string | undefined


  constructor() { }

  ngOnInit(): void {
  }
  getStatus() {
    return this.status
  }
  getColor() {
    if (this.status === 'allumer') {
      return "green"
    }
    else { return "red" }
  }

}
