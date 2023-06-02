import { rest } from "msw";
import { apiUrl } from "../hooks/user/useUser";
import { userToken } from "./userMocks/userMocks";

export const handlers = [
  rest.post(`${apiUrl}/user/login`, (_req, res, ctx) => {
    return res(ctx.status(200), ctx.json({ token: userToken }));
  }),
];

export const errorHandlers = [
  rest.post(`${apiUrl}/user/login`, (_req, res, ctx) => {
    return res(ctx.status(401));
  }),
];
