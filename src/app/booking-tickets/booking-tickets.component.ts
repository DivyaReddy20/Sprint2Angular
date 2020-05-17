import { Component, OnInit } from '@angular/core';
import { FlightService, addBookingDetails } from '../flight.service';

@Component({
  selector: 'app-booking-tickets',
  templateUrl: './booking-tickets.component.html',
  styleUrls: ['./booking-tickets.component.css']
})
export class BookingTicketsComponent implements OnInit {
  user: addBookingDetails = new addBookingDetails(0, 0, " ", 0);
  
  booking: any;
  check:boolean = false;
  check1:boolean = true;
  
  constructor(private service: FlightService) { }

  ngOnInit(): void {

  }
  bookNow(): void {

   
    this.service.addBookings(this.user)
      .subscribe((data) => this.booking = data);
	  
		this.check = true;
		this.check1 = false;
    
    alert(" booking successfully done.");
  }
}
