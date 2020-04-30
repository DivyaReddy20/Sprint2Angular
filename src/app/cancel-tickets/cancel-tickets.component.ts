import { Component, OnInit } from '@angular/core';
import { FlightService, addBookingDetails } from '../flight.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cancel-tickets',
  templateUrl: './cancel-tickets.component.html',
  styleUrls: ['./cancel-tickets.component.css']
})
export class CancelTicketsComponent implements OnInit {
result:string;
bookingId:number;
user: addBookingDetails = new addBookingDetails(0,0,"",0);
addBookingDetail:addBookingDetails[];
  constructor(private service:FlightService ,private router:Router) { }

  ngOnInit(): void {

  }

  delete(user:addBookingDetails): void {
    this.service.getUser(user.bookingId)
      .subscribe( data => {
        alert(" cancelled ur booking successfully.");
      })
  }
 
}
