const Discord = require("discord.js");
const client = new Discord.Client();
const token = ""; // Enter Your Token Here
// ============================================

// ============================================
client.on ("ready", () => {
    
    console.log('The Bot Is Ready!');
    console.log(`Logged In As ${client.user.username}#${client.user.discriminator}`);
    client.user.setPresence({
      status: 'idle',
      activity: {
          name: 'Calendar | @help',
          type: 'WATCHING',
      }
  })
  }); 

// ============================================

client.on('message', (receivedMessage) => {
	if(receivedMessage.author == client.user) {
		return
	} else if (receivedMessage.content.startsWith("@")) {
		processCommand(receivedMessage)
	}
})

function processCommand(receivedMessage) {
	let msgWithoutAt = receivedMessage.content.substr(1)
	let array = msgWithoutAt.split(" ")
	let keyword = array[0]
	let argument = array[1]

	if(keyword == "help") {
		helpCommand(receivedMessage, argument)
	} else if  (keyword == "date") {
		dateCommand(receivedMessage, argument)
	}
}

function helpCommand(receivedMessage, argument) {
	if(argument == "date") {
		receivedMessage.channel.send("")
	} else {
		receivedMessage.channel.send("Type `@date` for the date")
	}
}


function dateCommand(receivedMessage, argument) {
  let date = new Date()
	if(argument == "day") {
		receivedMessage.channel.send(date.getDate())
	} else if(argument == "month") {
		receivedMessage.channel.send(date.getMonth() + 1)
	} else if(argument == "year") {
		receivedMessage.channel.send(date.getFullYear())
	} else {
		receivedMessage.channel.send(date.toString())
	}
}

client.login(token)
