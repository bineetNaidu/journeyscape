import { MiddlewareFn, UnauthorizedError } from 'type-graphql';
import { MyCtx } from '../types';
import { getAuth } from '@clerk/nextjs/server';

export const IsAuth: MiddlewareFn<MyCtx> = async ({ context }, next) => {
  const { userId } = getAuth(context.req);

  if (!userId) throw new UnauthorizedError();

  await next();
};
