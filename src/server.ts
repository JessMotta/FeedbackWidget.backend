import express from 'express'
import cors from 'cors'
import { routes } from './routes'

const app = express()
const PORT = 3333

app.listen(PORT, ()=>{
    console.log("HTTP server running! On port " + PORT)
})
app.use(cors())
app.use(express.json({limit: '5gb'}))
app.use(routes)




