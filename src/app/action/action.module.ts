import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';


import { ActionRoutingModule } from './action-routing.module';
import { ListComponent } from './list/list.component';
import { ActionItemComponent } from './action-item/action-item.component';
import { ActionAddComponent } from './action-add/action-add.component';
import { ListParamsComponent } from './list-params/list-params.component';
import { AddActionParamsComponent } from './add-action-params/add-action-params.component';


@NgModule({
  declarations: [
    ListComponent,
    ActionItemComponent,
    ActionAddComponent,
    ListParamsComponent,
    AddActionParamsComponent
  ],
  imports: [
    CommonModule,
    ActionRoutingModule,
    ReactiveFormsModule
  ]
})
export class ActionModule { }
