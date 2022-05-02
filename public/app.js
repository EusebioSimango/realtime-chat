var socket = io('http://localhost:3000')

const renderMessage = message => {
	console.log(message)
	const p = document.createElement('p')
	p.innerHTML = `<b>${message.author}</b>: <span>${message.message}</span>`
	return document.querySelector('#messages').appendChild(p)
}

socket.on('receivedMessage', message => {
	renderMessage(message)
})

socket.on('previousMessages', messages => {
	for (message of messages) {
		renderMessage(message)
	}
})

const form = document.querySelector('#chat')
form.addEventListener('submit', e => {
	e.preventDefault()

	let author = document.querySelector('#name').value
	let message = document.querySelector('#message').value
  const messages = document.querySelector('#messages')

	var messageObject = {
		author: author,
		message: message,
	}
	renderMessage(messageObject)
	socket.emit('sendMessage', messageObject)
})
