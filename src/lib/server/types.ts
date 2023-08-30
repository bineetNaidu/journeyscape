import type { NextApiRequest, NextApiResponse } from 'next';

export type MyCtx = { req: NextApiRequest; res: NextApiResponse };
