import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule} from '@angular/router';
import { appRoutes } from './app.routes';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import { AddComponent } from './add/add.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ShowComponent } from './show/show.component';
import {EmployeeService} from '../app/employee/employee.service';
import {HttpClientModule} from '@angular/common/http';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AddComponent,
    ShowComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [EmployeeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
