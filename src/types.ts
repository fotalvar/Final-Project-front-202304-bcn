export interface UserCredentials {
  username: string;
  password: string;
}

export interface UserTokenStructure {
  name: string;
  id: string;
  token: string;
}
export interface DecodedTokenStructure {
  id: string;
  name: string;
}

export interface TeamsState {
  id: string;
}

export interface UserToken {
  token: string;
}

export interface UserDataStructure extends UserTokenStructure {
  isLogged: boolean;
}

export interface UserName {
  username: string;
}

export interface DecodedUserDataStructure {
  id: string;
  name: string;
}

export interface UiStateStructure {
  isLoading?: boolean;
  isError?: boolean;
  errorMessage?: string;
  isVisible?: boolean;
}
