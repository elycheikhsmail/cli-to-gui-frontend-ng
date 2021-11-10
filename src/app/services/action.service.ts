import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { baseUrl } from './base-url';
import { Observable, throwError ,of} from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { IAction } from "./interfaces";

@Injectable({
  providedIn: 'root'
})
export class ActionService {
  url = "api/v1/action"

  constructor(
    private _http: HttpClient
  ) { }

  getList(){
    return this._http.get<IAction[]>(`${baseUrl}/${this.url}`)
  }
  add(action:IAction){
    return this._http.post<IAction>(`${baseUrl}/${this.url}`,{...action })
  }
}
