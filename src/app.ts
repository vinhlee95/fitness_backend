import express, {Express, RequestHandler} from "express";

export const currentUserRouter: RequestHandler = (req, res) => {
  res.send({
    name: 'Current user'
  })
}

const superUserRouter: RequestHandler = (req, res) => {
  res.send({
    name: 'Super user'
  })
}

export const createServer = () => {
  const app: Express = express();
  
  app.use('/api', (req, res) => res.status(200).send('Hello World!'))
  app.use('/api/currentUser', currentUserRouter)
  app.use('/api/superUser', superUserRouter)

  return app
}
