import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {EmployeeModel} from '../employee/employee.model';
import {EmployeeService} from '../employee/employee.service';
@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.css']
})
export class CrudComponent implements OnInit {
  emp:Object=[];
  employees=[];
  positions:Object=[];
  employeeForm;
  _url="http://localhost:3000/employees/";
  _id="";
  name="";
  position="";
  office="";
  salary="";
  search;
  isUpdate:boolean=false;
  constructor(private http:HttpClient,private employeeService:EmployeeService) { }
  onSubmit=(e)=>{
    if(!this.isUpdate) {
    this.emp={
      name:e.name,
      position:e.position,
      office:e.office,
      salary:e.salary,
    };
    this.http.post(this._url,this.emp).subscribe((res)=>{
      if(res) {
        this.getEmployees();
        this.getPositions();
        this.onReset();
      } else {
        alert('Failed !');
      }
    });
  } else {
    this.emp={
      _id:e._id,
      name:e.name,
      position:e.position,
      office:e.office,
      salary:e.salary,
    };
    this.http.put(this._url+this._id,this.emp).subscribe((res)=>{
      if(res) {
        this.getEmployees();
        this.getPositions();
        this.onReset();
      } else {
        alert('Failed !');
      }
    });
  }
  }

  // getting employees

  getEmployees() {
   this.employeeService.getEmployees().subscribe(data=>this.employees=data); 
  }
  //getting designations 
getPositions(){
  this.employeeService.getPositions().subscribe(data=>this.positions=data);
}
  //deleting employee

  onDelete(eid) {
    this.employeeService.deleteEmployee(eid).subscribe((res)=>{
      this.getEmployees();
    });
    this.getEmployees();
    this.getPositions();
    this.onReset();
  }
  onEdit(eid) {
    this.employeeService.onEdit(eid).subscribe((edata:EmployeeModel)=>{
        console.log(edata);
        this._id=edata._id;
    this.name=edata.name;
    this.position=edata.position;
    this.salary=edata.salary;
    this.office=edata.office;
    this.isUpdate=true;
      });
    
  }
  ngOnInit() {
    this.getEmployees();
    this.getPositions();
  }
  onReset=()=>{
  this._id="";
  this.name="";
  this.position="";
  this.office="";
  this.salary="";
  this.isUpdate=false;
  }
}
