export interface signupModel {
  email: string;
  name: string;
  password: string;
}

export interface AuthResData {
  user_id?: string;
  email: string;
  name?: string;
  is_staff?: boolean;
  token?: string;
}

export interface loginModel {
  email: string;
  password: string;
}

// export enum Role {
//   User = 'User',
//   Admin = 'Admin',
// }

export class User {
  constructor(
    public id: string,
    public email: string,
    public name: string,
    public is_staff: boolean,
    public token: string
  ) {}
}
