import 'reflect-metadata';
import { NextApiRequest, NextApiResponse } from 'next';
import { ApolloServer } from 'apollo-server-micro';
import { buildSchema } from 'type-graphql';
import Cors from 'cors';
import { connectDB } from '@/lib/server/connectDB';
import { DestinationResolver } from '@/lib/server/resolvers/destination.resolver';

// Setup cors
const cors = Cors({
  methods: ['GET', 'HEAD', 'POST', 'PUT', 'DELETE', 'PATCH', 'OPTIONS'],
  credentials: true,
  origin: ['https://studio.apollographql.com', 'http://localhost:3000'],
});

// Middleware to run the cors configuration
function runMiddleware(req: NextApiRequest, res: NextApiResponse, fn: any) {
  return new Promise((resolve, reject) => {
    fn(req, res, (result: any) => {
      if (result instanceof Error) {
        return reject(result);
      }

      return resolve(result);
    });
  });
}

const schema = await buildSchema({
  resolvers: [DestinationResolver],
});

const server = new ApolloServer({
  schema,
});

export const config = {
  api: {
    bodyParser: false,
  },
};

const startServer = server.start();

connectDB()
  .then(() => console.log('Database connected'))
  .catch(console.error); // Connect to the database

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    await runMiddleware(req, res, cors);
    await startServer;
    await server.createHandler({ path: '/api/graphql' })(req, res);
  } catch (error) {
    console.error(error);
    if (error instanceof Error) {
      return res.status(500).json({ error: error.message });
    }
  }
}
