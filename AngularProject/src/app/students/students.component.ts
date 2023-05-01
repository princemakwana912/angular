import { Component,Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent {

  @Input() heading: any;
  @Input() info: any;
  @Output() show = new EventEmitter<number>();

  onShow(index: number){
    this.show.emit(index);
  }

  constructor() { }
getData(eevent:any):any{
  console.log(eevent);
  
}

  
}
