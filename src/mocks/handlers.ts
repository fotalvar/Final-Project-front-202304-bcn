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

  rest.delete(`${apiUrl}/teams/delete/:id`, (_req, res, ctx) => {
    return res(ctx.status(200), ctx.json({ message: "Team deleted" }));
  }),
];

export const errorHandlers = [
  rest.post(`${apiUrl}/user/login`, (_req, res, ctx) => {
    return res(ctx.status(401));
  }),

  rest.delete(`${apiUrl}/teams/delete/:id`, (_req, res, ctx) => {
    return res(ctx.status(404));
  }),
];
