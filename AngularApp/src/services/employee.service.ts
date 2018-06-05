import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IEmployee } from '../app/employee';
import {Observable} from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private http:HttpClient) { }

 
  getEmployees() {
 return this.http.get<IEmployee[]>('http://localhost:3000/employees');
}
}