import { Router } from 'express'
import { checkSchema } from 'express-validator'
import { createSchema } from './schema-validator/create-schema.js'
import * as demo from './module.controllers.js'

const route = Router()

route.get('/', demo.sayHello)
route.get('/demo', [checkSchema(createSchema)], demo.demoCreate)
export default route
