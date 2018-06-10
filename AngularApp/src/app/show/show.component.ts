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
    if(confirm("Are you sure ?")) {
      this.employeeService.deleteEmployee(id).subscribe((res)=>{
        if(!res) {
          alert("Successfully Deleted !");
        } else {
          alert("Failed !");
        } 
      });
    }
  }
  
  onEdit(id) {
    alert(`${id} updation on the way !`);
  }

}
