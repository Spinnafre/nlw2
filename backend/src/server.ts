import express, { request, response } from 'express'
import cors from 'cors'
const app=express()
import Route from './routes'

app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.use(cors())

app.use(Route)


app.listen(4000,()=>{
    console.log(`Aplicação rodando em http://localhost:4000`)
})

