import { Router } from 'express'
const Route = Router()
import ClassesController from './controllers/classesController'
import ConnectionController from './controllers/connectionController'

const ClassesControllers=new ClassesController()
const ConnectionControllers=new ConnectionController()

Route.post('/classes', ClassesControllers.create)
Route.get('/classes', ClassesControllers.index)

Route.post('/connections', ConnectionControllers.create)
Route.get('/connections', ConnectionControllers.index)


export default Route