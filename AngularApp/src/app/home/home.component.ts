import { Component, OnInit } from '@angular/core';
import {EmployeeService} from '../../services/employee.service';
import {HttpClient} from '@angular/common/http'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public employeees=[];
  constructor(private employees:EmployeeService) { }

  ngOnInit() {
    this.employees.getEmployees().subscribe(data => this.employeees=data);
  }
  editEmployee(v) {
    alert(`${v} edit function on the way`);
  }
  
  deleteEmployee(v) {
    alert(`${v} delete function on the way`);
  }


}
