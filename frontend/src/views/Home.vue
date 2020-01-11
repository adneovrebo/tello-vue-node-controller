<template>
  <v-container fill-height>
    <v-layout row wrap align-center>
      <v-flex class="text-center">
        <div>
          <div class="mb-5 pb-5">
            <h3>
              Connection:
              <span
                :style="`color:${$store.state.telloState? 'green' : 'red'}`"
              >{{$store.state.telloState? 'Connected': 'Disconnected'}}</span>
            </h3>
          </div>

          <div class="mb-5 pb-5" v-if="$store.state.telloState">
            <b>Battery : <span :style="`color: ${$store.state.telloState.bat < 50 ? 'red':'green'}`">{{$store.state.telloState.bat}}%</span></b>
          </div>

          <v-btn to="controls" color="red" class="mr-2" dark>
            Controller
            <v-icon>mdi-remote</v-icon>
          </v-btn>
          <v-btn to="routerplanner" color="green" class="ml-2" dark>
            Routeplanner
            <v-icon>mdi-map</v-icon>
          </v-btn>
        </div>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  name: "home"
};
</script>
