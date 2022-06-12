import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';



@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit {
  // viewDiv:any=true
 
  @Input() message:any; 
  @Input() viewDiv:any



  constructor() { }

  ngOnInit(): void {
      console.log(this.viewDiv)

  }
}
