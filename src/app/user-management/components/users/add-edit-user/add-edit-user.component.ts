import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { Router } from '@angular/router';
import { UserService } from '../../../services/user.service';
import { Role, Status, User } from '../../../dto/user.model';

@Component({
  selector: 'app-add-edit-user',
  templateUrl: './add-edit-user.component.html',
  styleUrl:'./add-edit-user.component.css'
})
export class AddEditUserComponent implements OnInit {
  userForm!: FormGroup;
  roles = Object.values(Role);
  statuses = Object.values(Status);

  constructor(private fb: FormBuilder, private userService: UserService, private router: Router) {}

  ngOnInit(): void {
    this.userForm = this.fb.group({
      id: [null],
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      role: [Role.User, Validators.required],
      status: [Status.Active, Validators.required],
    });
  }


  onSubmit(): void {
    if (this.userForm.valid) {
      const user: User = this.userForm.value;

      if (user.id) {
        this.userService.updateUser(user);
      } else {
        user.id = Date.now();
        this.userService.addUser(user);

        this.router.navigateByUrl('/users')
      }
    }
  }
}
