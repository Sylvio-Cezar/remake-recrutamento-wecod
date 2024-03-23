import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserListRoutingModule } from './user-list-routing.module';
import { UserListComponent } from './user-list.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { UserDetailsComponent } from '../user-details/user-details.component';


@NgModule({
  declarations: [
    UserListComponent,
    UserDetailsComponent
  ],
  imports: [
    CommonModule,
    UserListRoutingModule,
    SharedModule
  ]
})
export class UserListModule { }
