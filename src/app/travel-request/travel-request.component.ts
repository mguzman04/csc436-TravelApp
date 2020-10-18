import { Component, OnInit } from '@angular/core';

export class Travel{
  public Origin: string;
  public Destination: string;
  public TravelDate: Date;
  public NumTravelers: number;
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

}
