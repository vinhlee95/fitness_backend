import express, {Express, RequestHandler} from "express";

export const currentUserRouter: RequestHandler = (req, res) => {
  res.status(200).json({
    name: 'Current user'
  })
}

const superUserRouter: RequestHandler = (req, res) => {
  res.status(200).json({
    name: 'Super user'
  })
}

const healthCheckHandler: RequestHandler = (req, res) => {
  res.status(200).json({ok: true})
}

export const createServer = () => {
  const app: Express = express();
  
  app.use('/api/currentUser', currentUserRouter)
  app.use('/api/superUser', superUserRouter)
  app.use('/_health', healthCheckHandler)

  app.use('/api', (req, res) => res.status(200).send('Hello World!'))

  return app
}
