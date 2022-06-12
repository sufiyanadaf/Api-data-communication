import { Component, OnInit } from '@angular/core';
import { SharedService } from '../shared/shared.service';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent implements OnInit {
  Array:any=[];
  myArray:any=[];
  isShown:any;
  visible:any;

  constructor(private api : SharedService) { }
  r_message:any;
  divmsg:any

  ngOnInit(): void {
    this.recieveInformation();
  }
  recieveInformation(){
    this.api.sendInformation().subscribe((Response:any)=>{
      this.Array = Response.data
      console.log(this.Array)
    })
    
  }
  showDiv(){
      this.divmsg =true;
      // console.log(this.divmsg)
  }
  hideDiv(){
    this.divmsg = false;
    // console.log(this.divmsg)
  }
  
}




































    
  
 

