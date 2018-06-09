import {Routes} from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ShowComponent } from './show/show.component';
import { AddComponent } from './add/add.component';

export const appRoutes:Routes = [
    {path:'',component:HomeComponent},
    {path:'show',component:ShowComponent},
    {path:'add',component:AddComponent},
];