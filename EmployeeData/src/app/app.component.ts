import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'EmployeeData';

  header = 
    {
      id:'ID',
      name: 'NAME',
      email: 'EMAIL',
      date: 'DATE',
      action: 'ACTION'
    }
  
  datas = [
    {
      id:'1',
      name: 'Prince',
      email: 'abc@gmail.com',
      date: new Date()
    },
    {
      id:'2',
      name: 'Bye',
      email: 'xyz@gmail.com',
      date: new Date()
    },
    {
      id:'3',
      name: 'Praveen',
      email: 'xyasdsaz@gmail.com',
      date: new Date()
    },
    {
      id:'4',
      name: 'Tatsat',
      email: 'xadsadyz@gmail.com',
      date: new Date()
    },
    {
      id:'5',
      name: 'Jaydeep',
      email: 'xyrwrez@gmail.com',
      date: new Date()
    },
    {
      id:'6',
      name: 'Raj',
      email: 'xyfefwefez@gmail.com',
      date: new Date()
    },
    {
      id:'7',
      name: 'holal',
      email: 'xyrrqerwez@gmail.com',
      date: new Date()
    },
    {
      id:'8',
      name: 'werwer',
      email: 'xyfssdsdfz@gmail.com',
      date: new Date()
    },
    {
      id:'9',
      name: 'server',
      email: 'xykyutuz@gmail.com',
      date: new Date()
    },
    {
      id:'10',
      name: 'Hello',
      email: 'pqr@gmail.com',
      date: new Date()
    }
  ];


}
