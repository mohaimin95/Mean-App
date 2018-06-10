import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {EmployeeService} from '../employee/employee.service';
import {EmployeeModel} from '../employee/employee.model'
import {NgForm} from '@angular/forms';
@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css'],
  providers:[EmployeeService]
})
export class AddComponent implements OnInit {

  constructor(private employeeService:EmployeeService) { }
  ngOnInit() {
  }
  postEmployee(emp:NgForm) {
   this.employeeService.postEmployee(emp.value).subscribe((res:EmployeeModel)=>{
     alert('Done !');
   }); 
  }
}
