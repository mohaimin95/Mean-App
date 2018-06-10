import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import {EmployeeInterface} from './employee.interface';
import {EmployeeModel} from './employee.model'

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  _url='http://localhost:3000/employees/';
 public selectedEmployee:EmployeeModel;
  employeees:EmployeeModel[];
  constructor(private http:HttpClient) { }

  getEmployees() {
    return this.http.get<EmployeeInterface[]>(this._url);
  }
  emp:Object=[];
  addEmployee=(emp) => {
    this.emp={
      name:emp.name,
      position:emp.position,
      office:emp.office,
      salary:emp.salary,
    }
    return this.http.post(this._url,this.emp);
  };
  
  postEmployee=(emp:EmployeeModel) => {
    return this.http.post(this._url,emp);
  };

  deleteEmployee=(eid) => {
    return this.http.delete(this._url+eid,{
      responseType:'text'
    });
  }

  getPositions() {
    return this.http.get(this._url+'get/positions');
  }
  onEdit(eid) {
    return this.http.get(this._url+eid);
  }
}
