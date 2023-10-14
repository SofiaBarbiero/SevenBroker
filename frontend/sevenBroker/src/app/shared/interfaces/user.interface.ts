export interface User {
  email: string;
  password: string;
}

export interface UserResponse extends User {
  refresh_token: null | string;
  revoked: number;
  access_token: string;
  expires_in: number;
  activation_Date: string;
}
