import express from "express"
import {createServer} from "http"
import { Server } from "socket.io"
import {YSocketIO} from "y-socket.io/dist/server"

const app = express()

const httpServer = createServer(app)

const io = new Server(httpServer, {
    cors: {
        origin: "*",
        methods: ["GET", "POST"]
    }
})

const ysocketIO = new  YSocketIO(io)
ysocketIO.initialize()

app.get('/', (req, res)=>{
    res.json({
        message: "OK",
        success: true
    })
})

app.get('/health', (req, res)=>{
    res.json({
        message: "OK",
        success: true
    })
})

httpServer.listen(3000, ()=>{
    console.log("Server is running on port 3000")
})