import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ActionService } from 'src/app/services/action.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-action-add',
  templateUrl: './action-add.component.html',
  styleUrls: ['./action-add.component.css']
})
export class ActionAddComponent implements OnInit {
  actionForm = new FormGroup({
    name: new FormControl(''),
    desc : new FormControl(''),
  });

  constructor(
    private _actionService :ActionService,
    private _location: Location
  ) { }

  ngOnInit(): void {
  }

  handleForm(){
    console.log(this.actionForm.value)
    this._actionService.add(this.actionForm.value).subscribe(
      data => console.log(data),
      e => console.log(e)
    )
  }
  goBack(){
    this._location.back()
  }

}
