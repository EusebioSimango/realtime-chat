const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 3000

const app = express()
const server = require('http').createServer(app)
const io = require('socket.io')(server)


app.use(express.static(path.join(__dirname, 'public')))
app.set('views', path.join(__dirname, 'public'))
app.engine('html', require('ejs').renderFile)
app.set('view engine', 'html')

app.get('/', (request, response) => {

})

app.listen(PORT, () => console.log(`Server start on port: ${PORT}`))
