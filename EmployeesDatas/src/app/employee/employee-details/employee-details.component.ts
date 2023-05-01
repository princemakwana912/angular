import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'employees-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})


export class EmployeeDetailsComponent implements OnInit {

  constructor(private activeRoute: ActivatedRoute) {
  }

  id: any
  ngOnInit(): void {
    // this.id = this.activeRoute.snapshot.paramMap.get('id');
    this.activeRoute.paramMap.subscribe(params => {
      this.id = [params.get("id")]
    })
    console.log("hello");
    
  }

}
