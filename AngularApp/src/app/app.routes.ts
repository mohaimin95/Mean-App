import {Routes} from '@angular/router';
import { AppComponent } from './app.component';
import { AddemployeeComponent } from './addemployee/addemployee.component';
import { HomeComponent } from './home/home.component';

export const appRoutes:Routes = [
    {
        path:"",
        component:HomeComponent,
    },
    {
        path:"add",
        component:AddemployeeComponent,
    },

];