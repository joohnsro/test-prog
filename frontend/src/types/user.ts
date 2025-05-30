export type UserDTO = {
    name: string;
    email: string;
    password: string;
}

export type AuthorizeUserDTO = {
    email: string;
    password: string;
}

export type User = {
    id: string;
    name: string;
    email: string;
}

export type UserProfile = {
  id: string;
  name: string;
  email: string;
}

export type LoginFormData = {
  email: string;
  password: string;
}

export type CadastroFormData = {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
}