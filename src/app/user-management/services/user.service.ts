import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { User, Role, Status } from '../dto/user.model';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private usersSubject = new BehaviorSubject<User[]>([
    { id: 1, name: 'Helmi', email: 'helmi@tabweeb.com', role: Role.Admin, status: Status.Active },
    { id: 2, name: 'Tabweeb', email: 'support@tabweeb.com', role: Role.User, status: Status.Inactive },
  ]);

  getUsers(): Observable<User[]> {
    return this.usersSubject.asObservable();
  }

  addUser(user: User): void {
    const currentUsers = this.usersSubject.value;
    this.usersSubject.next([...currentUsers, user]);
  }

  updateUser(updatedUser: User): void {
    const currentUsers = this.usersSubject.value.map(user =>
      user.id === updatedUser.id ? updatedUser : user
    );
    this.usersSubject.next(currentUsers);
  }

  deleteUser(id: number): void {
    const updatedUsers = this.usersSubject.value.filter(user => user.id !== id);
    this.usersSubject.next(updatedUsers);
  }

  filterUsers(role?: Role, status?: Status): Observable<User[]> {
    return this.getUsers().pipe(
      map(users =>
        users.filter(user =>
          (!role || user.role === role) && (!status || user.status === status)
        )
      )
    );
  }
}
