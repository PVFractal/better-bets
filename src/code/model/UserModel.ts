export class UserModel {
  username: string;

  email: string;

  passwordHash: string;

  friends: UserModel[];

  constructor() {
    this.username = 'UNSET';
    this.email = 'UNSET';
    this.passwordHash = 'UNSET';
    this.friends = [];
  }
}