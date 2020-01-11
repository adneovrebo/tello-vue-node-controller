<template>
  <div class="mb-5">
    <h1 align="center">Route planner</h1>
    <v-row no-gutters>
      <v-col cols="12" md="4" offset-md="2">
        <div class="mr-5 ml-5">
          <h3>Controls</h3>
          <v-card dark>
            <v-list flat color="blue">
              <v-subheader>CLICK TO PICK COMMANDS </v-subheader>
              <v-list-item-group color="primary">
                <v-list-item v-for="command in commands" :key="command" @click="addToRoute(command)">
                  <v-list-item-content>
                    <v-list-item-title v-text="command"></v-list-item-title>
                  </v-list-item-content>
                </v-list-item>
              </v-list-item-group>
            </v-list>
            
            <v-list flat color="red" dense>
              <v-subheader>Your route</v-subheader>
              <v-list-item-group color="primary">
                <v-list-item v-for="(command, index) in route" :key="index" @click="removeFromRoute(index)">
                  <v-list-item-content>
                    <v-list-item-title v-text="`${index + 1}. ${command}`"></v-list-item-title>
                  </v-list-item-content>
                </v-list-item>
              </v-list-item-group>
            </v-list>

            <v-btn color="green" @click="sendRoute">Start route</v-btn>
          </v-card>
        </div>
      </v-col>
      <v-col cols="12" md="4">
        <TelloState class="ml-5 mr-5" />
      </v-col>
    </v-row>
  </div>
</template>

<script>
import TelloState from "../components/TelloState";
import socket from "../plugins/socket";

export default {
  name: "routePlanner",
  components: {
    TelloState,
  },
  data: () =>{
      return {
          commands:  [
      "takeoff",
      "command",
      "land",
      "streamon",
      "streamoff",
      "emergency"
    ],
    route:[]
      }
  },
  methods:{
      addToRoute(command){
          this.route.push(command)
      },
      removeFromRoute(index){
          this.route.splice(index,1)
      },
      sendRoute(){
          socket.emit('runRoute', this.route)
      }
  }
};
</script>

<style>
</style>