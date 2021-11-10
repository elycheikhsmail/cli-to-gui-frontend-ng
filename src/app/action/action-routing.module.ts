import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActionAddComponent } from './action-add/action-add.component';
import { AddActionParamsComponent } from './add-action-params/add-action-params.component';
import { ListParamsComponent } from './list-params/list-params.component';
import { ListComponent } from './list/list.component';

const routes: Routes = [
  {
    path:"",
    component:ListComponent
  },
  {
    path:"add",
    component:ActionAddComponent
  },
  {
    path:"action/:id/params",
    component:ListParamsComponent
  },
  {
    path:"action/:id/params/add",
    component:AddActionParamsComponent
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ActionRoutingModule { }
