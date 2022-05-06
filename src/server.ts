import express from 'express'
import cors from 'cors'
import { routes } from './routes'

const app = express()
const PORT_LOCAL = 3333

app.listen(process.env.PORT || PORT_LOCAL, ()=>{
    console.log("HTTP server running")
})
app.use(cors())
app.use(express.json({limit: '5gb'}))
app.use(routes)




