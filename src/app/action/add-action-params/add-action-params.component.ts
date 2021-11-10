import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Location } from '@angular/common';
import { ActionParamsService } from 'src/app/services/action-params.service';

interface IDataTypeOption {
  id: number;
  value: string
}
const dataTypeOtions: IDataTypeOption[] = [
  {
    id: 1,
    value: "string"
  },
  {
    id: 2,
    value: "number"
  }, {
    id: 3,
    value: "boolean"
  },
]

@Component({
  selector: 'app-add-action-params',
  templateUrl: './add-action-params.component.html',
  styleUrls: ['./add-action-params.component.css']
})
export class AddActionParamsComponent implements OnInit {
  dataTypeOtions: IDataTypeOption[] =  dataTypeOtions

  actionParamsForm = new FormGroup({
    key: new FormControl(''),
    dataType: new FormControl(''),
  });

  constructor(
    private _location: Location,
    private _ActionParamsService : ActionParamsService
  ) { }

  ngOnInit(): void {
  }
  goBack() {
    this._location.back()
  }

  handleForm() {
    console.log(this.actionParamsForm.value)
    this._ActionParamsService.add(this.actionParamsForm.value).subscribe(
      {
        next: (data)=>{
          console.log(data)
        }
      }
    )
  }


}
