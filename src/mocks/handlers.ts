import { rest } from "msw";
import { apiUrl } from "../hooks/user/useUser";
import { userToken } from "./userMocks/userMocks";
import { teamMock } from "./teamsMocks/teamsMocks";

export const handlers = [
  rest.post(`${apiUrl}/user/login`, (_req, res, ctx) => {
    return res(ctx.status(200), ctx.json({ token: userToken }));
  }),

  rest.get(`${apiUrl}/teams`, (_req, res, ctx) => {
    return res(ctx.status(200), ctx.json({ teams: teamMock }));
  }),
];

export const errorHandlers = [
  rest.post(`${apiUrl}/user/login`, (_req, res, ctx) => {
    return res(ctx.status(401));
  }),
];
