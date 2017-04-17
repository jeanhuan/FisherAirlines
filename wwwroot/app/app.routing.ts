import { ModuleWithProviders } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from './components/home/home.component';
import { BookComponent } from './components/book/book.component';
import { LoginComponent } from './components/login/login.component';
import { FlightListComponent } from './components/book/Flightoptionlist';
import { CheckoutComponent } from './components/book/checkout.component';

const appRoutes: Routes = [
    {
        path: "",
        component: HomeComponent
    },
    {
        path: "home",
        redirectTo: ""    },
    {
        path: "flight",
        component: BookComponent
    },
    {
        path: "flight",
        component: FlightListComponent
    },
    {
        path: "checkout",
        component: CheckoutComponent
    },
    
    {
        path: "login",
        component: LoginComponent
    }];
    
    export const AppRoutingProviders: any[] = [];
    export const AppRouting: ModuleWithProviders = RouterModule.forRoot(appRoutes);