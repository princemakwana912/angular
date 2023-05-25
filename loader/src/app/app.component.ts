import { Component,OnInit } from '@angular/core';
import { LoaderssService } from './loaderss.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'loader';
  result : any;
  constructor(private _ls : LoaderssService){

  }

  ngOnInit(): void {
    this._ls.getPost().subscribe(res => {
      this.result = res;
      console.log(this.result);
      
    })
  }

}
