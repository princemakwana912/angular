import { HttpEvent, HttpEventType, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { LoaderserService } from "./loaderfol/loaderser.service";
import { Observable, tap } from "rxjs";

@Injectable()

export class LoaderInterceptor implements HttpInterceptor{
    constructor(private _ls : LoaderserService){}
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return next.handle(req).pipe(
            tap(event => {
                this._ls.loader.next(true);
                if(event.type == HttpEventType.Response){
                    if (event.status == 200){
                        this._ls.loader.next(false);
                    }
                }
            })
        )
    }

}