const wait = require('waait');
const app = require('express')();
const http = require('http').Server(app);
const io = require('socket.io')(http);
const commandDelays = require('./delays');

// Import helpers
const parseTelloState = require('./connections/parseTelloState');

// Setting up the drone connections
const droneConnections = require('./connections/droneConnection');
const drone = droneConnections.droneSocket;
const droneState = droneConnections.droneState;

// Variables to keep track of:
let lastTelloState;
let lastTelloStateTime;

//Errorhandler for now just logging error
function handleError(err) {
    if (err) {
        console.log(err)
    }
}

// ------------ FOR TESTING PURPOSES ---------------- //
// drone.connection.send('command', 0, 'command'.length, drone.port, drone.host, handleError)
// drone.connection.send('battery?', 100, 'battery?'.length, drone.port, drone.host, handleError)
// drone.connection.send('takeoff', 5000, 'takeoff'.length, drone.port, drone.host, handleError)
// drone.connection.send('land', 5000, 'land'.length, drone.port, drone.host, handleError)


// Method to run a list of commands
async function go(commands) {
    for(let i = 0; i < commands.length; i++){
       const command = commands[i]
       const delay = commandDelays[command];
       console.log(`running command: ${command}, delay: ${delay}`);
       drone.connection.send(command, delay, command.length, drone.port, drone.host, handleError);
       await wait(delay);
       console.log(`DONE: ${command}`)
    }
}


// Setting up socket
http.listen(6767, () => {
    console.log('Socket io server up and running');
});

// -------- SOCKET EVENTS ----------- //
io.sockets.on('connection', (client) => {
    console.log('New client connected')
    io.emit('telloState', { state: lastTelloState, timeStamp: lastTelloStateTime })

    client.on(
        'runRoute', (route) => {
            go(route)
            console.log(route)
        }
    )
    
    client.on(
        'runCommand', (command) => {
            go([command])
        }
    )
})

// Drone socket events
drone.connection.on('message', message => {
    console.log(`🤖 : ${message}`);
});

droneState.connection.on(
    'message',
    message => {
        lastTelloState = parseTelloState(message.toString());
        lastTelloStateTime = Date.now();
        io.emit('telloState', { state: lastTelloState, timeStamp: lastTelloStateTime })
    }
);
