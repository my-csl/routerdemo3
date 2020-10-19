import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { UserComponent } from './user.component';
import { AddrssComponent } from './addrss/addrss.component';


@NgModule({
  declarations: [UserComponent, AddrssComponent],
  imports: [
    CommonModule,
    UserRoutingModule
  ]
})
export class UserModule { }
