export interface User {
  email: string;
  password: string;
}

export interface UserResponse extends User {
  token: string;
}

export interface Register {
  email: string;
  password: string;
}

export interface RegisterResponse extends Register{
  id: Number;
  token: string;
}
