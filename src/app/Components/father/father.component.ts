import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-father',
  templateUrl: './father.component.html',
  styleUrls: ['./father.component.css']
})
export class FatherComponent implements OnInit {

  selectedCar:any;

  constructor() { }

  ngOnInit(): void {
  }

  clicked(){
    console.log(this.selectedCar,typeof(this.selectedCar));
    
  }

}
