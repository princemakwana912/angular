import { Component } from '@angular/core';

@Component({
  selector: 'employees-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent {

  constructor() {

  }

  personDetail=[
    {
      id:1,
      name:"Prince",
      email:"abc123@gmail.com"
    },
    {
      id:2,
      name:"Praveen",
      email:"abc123@gmail.com"
    },
    {
      id:3,
      name:"Raj",
      email:"abc123@gmail.com"
    }
  ]
}
