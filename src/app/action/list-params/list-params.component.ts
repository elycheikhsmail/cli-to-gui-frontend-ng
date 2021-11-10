import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ActionParamsService } from 'src/app/services/action-params.service';
import { IActionParamsShow } from 'src/app/services/interfaces';
import {renderString} from "nunjucks";

@Component({
  selector: 'app-list-params',
  templateUrl: './list-params.component.html',
  styleUrls: ['./list-params.component.css']
})
export class ListParamsComponent implements OnInit {
  actionParamsArray: IActionParamsShow[] = []

  constructor(
    private _ActivatedRoute: ActivatedRoute,
    private _Router: Router,
    private _ActionParamsService: ActionParamsService
  ) { }

  ngOnInit(): void {
    this.getActionParamsList()
    this.useNunjucks()
  }
  getActionParamsList() {
    this._ActionParamsService.getList().subscribe(

      {
        next: (data) => this.actionParamsArray = data
      }
    )
  }
  goToDetails() {
    const id = Number(this._ActivatedRoute.snapshot.paramMap.get('id'));
    console.log({ id })
    this._Router.navigate(["action", "1", "params"])
  }
  goToAdd() {
    this._Router.navigate(["add"])
  }
  goToHome() {
    this._Router.navigate([""])
  }
  goToAddActionParams() {
    this._Router.navigate(["action","1","params","add"])
  }

  useNunjucks(){
    const text = renderString('Hello from nunjucks {{ username }}', { username: 'ely cheikh' });
    console.log({text})
  }


}
