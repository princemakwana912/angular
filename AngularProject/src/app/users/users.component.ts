import { Component,OnInit,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  @Output() user:EventEmitter<any>=new EventEmitter();

  constructor(){

  };

  ngOnInit(): void {
  }
  
  sendData(){
    let items={name:'abc',age:21}
    this.user.emit(items); 
  }
} 
