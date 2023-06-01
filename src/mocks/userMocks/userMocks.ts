import { UserToken, UserTokenStructure } from "../../types";
import { UserTokenData } from "../../types";

export const initialUserStateMock: UserTokenData = {
  name: "",
  id: "",
  token: "",
  isLogged: false,
};

export const UserStateMock: UserTokenData = {
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

export const userToken: UserToken = {
  token:
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2NDcwZGQ2ODNlNWIyM2UwZmVhNjRiMDgiLCJuYW1lIjoiZmVkZSIsImlhdCI6MTY4NTUxNjU3NSwiZXhwIjoxNjg1Njg5Mzc1fQ.tA0bazQJhRuPZUM3W_20lvh8hDbaPf6La35QuTeAZsw",
};
