import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddEditUserComponent } from './components/users/add-edit-user/add-edit-user.component';
import { UsersComponent } from './components/users/users.component';


const routes: Routes = [
  {
    path: '',
    children: [
      { path: '', component: UsersComponent, pathMatch: 'full' },
      { path: 'add', component: AddEditUserComponent },
      { path: 'edit/:id', component: AddEditUserComponent },
    ]
  },


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserManagementRoutingModule {}
