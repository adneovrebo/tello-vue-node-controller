<template>
  <div>
    <h1 align="center" class="mb-4">Controls</h1>

    <v-row no-gutters>
        <v-col
          cols="12"
          md="4"
          offset-md="2"
        >
        <div class="mr-5 ml-5">
          <h3>Controls</h3>
            <v-card dark>
                <v-btn color="green" @click="sendCommand('takeoff')">
                    Takeoff
                </v-btn>
                <v-btn color="red" @click="sendCommand('land')">
                    Land
                </v-btn>
            </v-card>
        </div>
        </v-col>
        <v-col
          cols="12"
          md="4"
        >
          <TelloState class="ml-5 mr-5" />
        </v-col>
      </v-row>
  </div>
</template>

<script>
import TelloState from "../components/TelloState";
import socket from '../plugins/socket';


export default {
  name: "controls",
  components: {
    TelloState
  },
  methods:{
      sendCommand(command){
          socket.emit('runCommand', command)
      }
  }
};
</script>

<style>
</style>