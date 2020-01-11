<template>
  <div>
      <h3>Live data</h3>
      <v-simple-table dark dense>
        <thead>
          <th class="text-left">Name</th>
          <th class="text-left">Value</th>
        </thead>
        <tbody v-for="(el, index, i) in $store.state.telloState" :key="index">
          <tr>
            <td>{{Object.keys($store.state.telloState)[i]}}</td>
            <td>{{el}}</td>
          </tr>
        </tbody>
      </v-simple-table>
  </div>
</template>

<script>
export default {
  name: "TelloState"
};
</script>

<style>
</style>