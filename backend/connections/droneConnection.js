const dgram = require('dgram');

const HOST = '192.168.10.1';

// Connecting to the drone for sending commands and recieving response
const PORT_COMMAND_RESPONSE = 8889;
const drone = dgram.createSocket('udp4');
drone.bind(PORT_COMMAND_RESPONSE);


//Connecting to the drone for getting the state
const PORT_TELLO_STATE = 8890;
const droneState = dgram.createSocket('udp4');
droneState.bind(PORT_TELLO_STATE);

// Exporting the connection points
module.exports =
{
    droneSocket: {
        connection: drone,
        port: PORT_COMMAND_RESPONSE,
        host: HOST
    },
    droneState: {
        connection: droneState,
        port: PORT_TELLO_STATE,
        host: HOST
    }
}