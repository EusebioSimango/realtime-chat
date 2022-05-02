import express from 'express'
import http from 'http'
import { Server } from 'socket.io'

const app = express()
const server = http.createServer(app)
const port = 3000
const sockets = new Server(server, { /* OPITIONS */ })

app.use(express.static('public'))

const messages = []

sockets.on('connection', socket => {
	console.log(`Socket connectado ${socket.id}`)

	socket.emit('previousMessages', messages)

	socket.on('sendMessage', data => {
		console.log(data)
		messages.push(data)

		socket.broadcast.emit('receivedMessage', data)
	})
})



server.listen(port, () => {
	console.log(`> Server listening on port:  ${port}`)
}) 