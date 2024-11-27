import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { Role, Status, User } from '../../dto/user.model';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls:['./users.component.css']

})
export class UsersComponent implements OnInit {
  roles = Object.values(Role);
  statuses = Object.values(Status);

  selectedRole?: Role;
  selectedStatus?: Status;

  filteredUsers!: Observable<User[]>;

  constructor(private userService: UserService, private router:Router) {}

  ngOnInit(): void {
    this.applyFilters();
  }



  applyFilters(): void {
    this.filteredUsers = this.userService.filterUsers(this.selectedRole, this.selectedStatus);
  }

  addNewUser(): void {
    this.router.navigate(['./add']);
  }


  editUser(user: User): void {
    this.router.navigate(['./add']);
    this.router.navigate(['/edit', user.id]);

  }

  deleteUser(id: number): void {
    this.userService.deleteUser(id);
  }
}
