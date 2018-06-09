import { Component, OnInit } from '@angular/core';
import {EmployeeService} from '../employee/employee.service';
import {HttpClient} from '@angular/common/http';
@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.css']
})
export class ShowComponent implements OnInit {
  public employees=[];
  constructor(private employeeService:EmployeeService) { }

  ngOnInit() {
    this.employeeService.getEmployees()
    .subscribe(data => this.employees=data);
  }
  onDelete(id) {
    alert(`${id} deletion on the way !`);
  }
  
  onEdit(id) {
    alert(`${id} updation on the way !`);
  }

}
