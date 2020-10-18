import { Component, OnInit } from '@angular/core';

export class Travel{
  public origin: string;
  public destination: string;
  public travelDate: Date;
  public numTravelers: number;
}

@Component({
  selector: 'app-travel-request',
  templateUrl: './travel-request.component.html',
  styleUrls: ['./travel-request.component.css']
})
export class TravelRequestComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  model = new Travel();

  Airport: string[] = [
    'ORD',
    'MDW',
    'JKF',
    'LAX'
  ];

  onSubmit(form): void {
    console.log(this.model.numTravelers);
  }

}
