<template>
  <v-app>
    <v-toolbar app color="primary">
      <v-toolbar-title class="headline nav-text">
        <span> J's </span>
        <span class="font-weight-light">Junk Removal Service</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn
        flat
        href="https://github.com/vuetifyjs/vuetify/releases/latest"
        target="_blank"
      >
        <span class="mr-2">Latest Release</span>
      </v-btn>
    </v-toolbar>
    <div style="min-height:1500px" color="primary">
        <img :src="require('@/assets/logo.jpg')"></img>
    </div>
  </v-app>
</template>

<script>

export default {
  name: 'App',
  components: {},
  data () {
    return {
      //
    }
  }
}
</script>
<style>
  .nav-text {
      color: #64DD17;
  }
</style>
