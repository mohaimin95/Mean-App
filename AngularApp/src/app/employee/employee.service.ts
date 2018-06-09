import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {EmployeeInterface} from './employee.interface';
import {Observable} from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  constructor(private http:HttpClient) { }

  getEmployees() {
    return this.http.get<EmployeeInterface[]>('http://localhost:3000/employees');
  }
}
