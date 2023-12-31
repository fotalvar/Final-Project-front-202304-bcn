import {
  DecodedTokenStructure,
  UserCredentials,
  UserTokenStructure,
} from "../../types";
import { UserDataStructure } from "../../types";

export const initialUserStateMock: UserDataStructure = {
  name: "",
  id: "",
  token: "",
  isLogged: false,
};

export const UserStateMock: UserDataStructure = {
  name: "Fede",
  id: "1234",
  token: "abcdefghi",
  isLogged: true,
};

export const userDataTokenMock: UserTokenStructure = {
  id: "6470dd683e5b23e0fea64b08",
  name: "fede",
  token:
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2NDcwZGQ2ODNlNWIyM2UwZmVhNjRiMDgiLCJuYW1lIjoiZmVkZSIsImlhdCI6MTY4NTUxNjU3NSwiZXhwIjoxNjg1Njg5Mzc1fQ.tA0bazQJhRuPZUM3W_20lvh8hDbaPf6La35QuTeAZsw",
};

export const decodedTokenMock: DecodedTokenStructure = {
  id: "6470dd683e5b23e0fea64b08",
  name: "fede",
};

export const userToken =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2NDcwZGQ2ODNlNWIyM2UwZmVhNjRiMDgiLCJuYW1lIjoiZmVkZSIsImlhdCI6MTY4NTUxNjU3NSwiZXhwIjoxNjg1Njg5Mzc1fQ.tA0bazQJhRuPZUM3W_20lvh8hDbaPf6La35QuTeAZsw";

export const userCredentials: UserCredentials = {
  username: "fede",
  password: "fede",
};

export const userCredentialsFail: UserCredentials = {
  username: "Nosoyunusuario",
  password: "nosoyunacontraseña",
};
