import {Component, OnInit} from "@angular/core";
import {RouteParams} from '@angular/router';
import {Flight} from './flight';
import {LoginComponent} from './app/components/login/login.component';
import {FlightService} from '../../flight,service';
import { AuthService } from '../../auth.service';
import {Bookings} from './bookings';
import {Checkout} from './app/components/book/checkout.component';


@Component({
 selector: 'my-tickets',
 templateUrl: './app/components/mytickets/mytickets.component.html'
})


export class MyticketsComponent implements OnInit {
    public flight : Flight[];
    public selectedFlight : Flight;
    public booking : Bookings;
    public username : string;
    public passengers : number;
    public price : number;
    errorMessage : string;
    public checkout : Checkout;

    constructor(private flightService : FlightService, private router : Router) {
    
}

    CheckoutInfo() {
        this.flightService.Checkout(booking);
    }
     
} 