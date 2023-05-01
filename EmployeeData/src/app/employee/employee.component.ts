import { Component,Input} from '@angular/core';

@Component({
  selector: 'employeeTable-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent {


// using @input method directly
  // @Input() heading:any;
  // @Input() tdata:any;



// using Getter Setter Method


public get heading() : any {
  return this._heading
}
@Input()
public set heading(value : any) {
  this. _heading = value;
}


private _tdata:any;

public get tdata() : any {
  return this._tdata
}

@Input()
public set tdata(value : any) {
  this._tdata = value;
}

private _heading:any;
filterBy: any;

}
