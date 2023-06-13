import { rest } from "msw";
import { apiUrl } from "../hooks/useUser/useUser";
import { userToken } from "./userMocks/userMocks";
import { singleTeamMock, teamMock } from "./teamsMocks/teamsMocks";

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

  rest.post(`${apiUrl}/teams/add`, (_req, res, ctx) => {
    return res(ctx.status(201), ctx.json({ newTeam: singleTeamMock }));
  }),
];

export const errorHandlers = [
  rest.post(`${apiUrl}/user/login`, (_req, res, ctx) => {
    return res(ctx.status(401));
  }),

  rest.delete(`${apiUrl}/teams/delete/:id`, (_req, res, ctx) => {
    return res(ctx.status(404), ctx.json({ message: "Can't delete Team" }));
  }),

  rest.delete(`${apiUrl}/teams/add`, (_req, res, ctx) => {
    return res(ctx.status(404), ctx.json({ message: "Can't add Team" }));
  }),
];
