import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoaderssService {

  constructor(private _httpClient : HttpClient) { 

  }

  getPost(): Observable<any>{
    return this._httpClient.get("https://jsonplaceholder.typicode.com/todos/2")
  }
}
