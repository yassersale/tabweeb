export enum Role {
  Admin = 'Admin',
  User = 'User',
  Guest = 'Guest',
}

export enum Status {
  Active = 'Active',
  Inactive = 'Inactive',
}

export interface User {
  id: number;
  name: string;
  email: string;
  role: Role;
  status: Status;
}
