
import { Component, OnInit } from '@angular/core';
import { ActionService } from 'src/app/services/action.service';
import { IAction } from 'src/app/services/interfaces';




@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  actions: IAction[] = []

  constructor(
    private _actionservice : ActionService
  ) { }

  ngOnInit(): void {
   // this.actions = this._actionservice.getActions()
   this._actionservice.getList().subscribe(
     data => this.actions = data
   )
  }



}
