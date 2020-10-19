import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {UserComponent} from './user.component';
import {AddrssComponent} from './addrss/addrss.component';

const routes: Routes = [
  {
    path: '',
    component: UserComponent
  },
  {
    path: 'address',
    component: AddrssComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
