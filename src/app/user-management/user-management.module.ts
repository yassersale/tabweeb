

import { NgModule } from '@angular/core';
import { UserManagementRoutingModule } from './user-management-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AddEditUserComponent } from './components/users/add-edit-user/add-edit-user.component';
import { UsersComponent } from './components/users/users.component';


@NgModule({
  declarations: [UsersComponent,AddEditUserComponent],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    UserManagementRoutingModule],
})
export class UserManagementModule {}
