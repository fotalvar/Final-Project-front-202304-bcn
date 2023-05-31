export interface UserCredentials {
  username: string;
  password: string;
}

export interface UserTokenStructure {
  name: string;
  id: string;
  token: string;
}

export interface UserTokenData extends UserTokenStructure {
  isLogged: boolean;
}
