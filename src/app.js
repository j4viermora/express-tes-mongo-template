import express from 'express'
import helmet from 'helmet'
import cors from 'cors'
import colors from 'colors'
import paths from './paths.js'
import 'dotenv/config'

import { dbConnection } from './config/index.js'

//routes
import entry from './modules/module-example/modules.routes.js'

const app = express()
const PORT = process.env.PORT || 8080

//middlewares

app.use(cors())
app.use(helmet())
app.use(express.json())

// routes
app.use(paths.entry, entry)

//db connection
dbConnection()

app.listen(PORT, () => {
    console.log(
        'Server is running on port: ' + colors.green(`http://localhost:${PORT}`)
    )
})
