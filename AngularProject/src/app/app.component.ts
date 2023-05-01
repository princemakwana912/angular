import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  name="";
  age="";
  user(data: any){
    console.warn(data);
    this.name=data.name;
    this.age=data.age;
    
  }
  title = 'AngularTable';
  

  header = 
    {
      id:'ID',
      name: 'NAME',
      age: 'AGE',
      email: 'EMAIL',
      action: 'ACTION'
    }
  
  datas = [
    {
      id:'1',
      name: 'Prince',
      age: 21,
      email: 'abc@gmail.com'
    },
    {
      id:'2',
      name: 'Abc',
      age: 23,
      email: 'abc@gmail.com'
    },
    {
      id:'3',
      name: 'Xyz',
      age: 25,
      email: 'abc@gmail.com'
    }
  ];


  onShow(index:number){
    console.log(this.datas.splice(index,1));
  }
}
