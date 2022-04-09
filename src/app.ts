import express, {Express, RequestHandler} from "express";

export const currentUserRouter: RequestHandler = (req, res) => {
  res.send({
    name: 'John Doe'
  })
}

export const createServer = () => {
  const app: Express = express();
  
  app.use('/api/currentUser', currentUserRouter)

  return app
}
