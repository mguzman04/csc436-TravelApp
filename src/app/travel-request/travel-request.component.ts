import { Component, OnInit } from '@angular/core';

export class Travel{
  public origin: string;
  public destination: string;
  public departureDate: Date;
  public arrivalDate: Date;
  public numTravelers: number;
  public total: number;
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
    'ATL',
    'CTL',
    'DEN',
    'DFW',
    'JFK',
    'LAS',
    'LAX',
    'MDW',
    'ORD',
    'SEA',
    'SFO'
  ];

  onSubmit(form): void {
    this.model.total = 150*this.model.numTravelers;
  }

}
