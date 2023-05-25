import { Component, OnInit } from '@angular/core';
import { LoaderserService } from '../loaderser.service';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss']
})
export class LoaderComponent implements OnInit {
loader: boolean | undefined;

  constructor( private _ls : LoaderserService ){
    this._ls.loader.subscribe(res => {
      this.loader = res;
    })
  }

  ngOnInit(): void {
       
  }
}
