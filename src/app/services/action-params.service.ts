import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { baseUrl } from './base-url';
import { IActionParamsShow,IActionParams } from "./interfaces";


@Injectable({
  providedIn: 'root'
})
export class ActionParamsService {
  url = "api/v1/action-params"

  constructor(
    private _http: HttpClient
  ) { }

  getList(){
    return this._http.get<IActionParamsShow[]>(`${baseUrl}/${this.url}`)
  }

  add(actionParam:IActionParams){
    return this._http.post<IActionParams>(`${baseUrl}/${this.url}`,{...actionParam })
  }
}
