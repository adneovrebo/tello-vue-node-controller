<template>
  <v-app dark id="inspire">
    <v-container>
      <v-app-bar dark color="primary" app>
        <v-toolbar-title>
          Tello Vue Controller
          <v-icon>mdi-quadcopter</v-icon>
        </v-toolbar-title>
        <v-spacer></v-spacer>
        <v-btn icon>
          <router-link to="/" class="white--text">
            <v-icon>mdi-home</v-icon>
          </router-link>
        </v-btn>
      </v-app-bar>
    </v-container>

    <v-content>
      <router-view></router-view>
    </v-content>

    <v-footer color="primary lighten-1" padless>
      <v-row justify="center" no-gutters>
        <v-col class="primary lighten-2 py-4 text-center white--text" cols="12">
          {{ new Date().getFullYear() }} —
          <strong>Ådne Øvrebø — adneovrebo</strong>
        </v-col>
      </v-row>
    </v-footer>
  </v-app>
</template>

<script>
import socket from "./plugins/socket";

export default {
  name: "App",
  data: () => {
    return {
      telloState: null
    };
  },
  mounted() {
    socket.on("telloState", data => {
      this.$store.commit("setTelloState", {
        data: data.state ? data.state : null
      });
    });
  }
};
</script>
