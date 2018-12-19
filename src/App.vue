<template>
  <v-app top=fixed-navbar>
    <v-toolbar app :height="'100px'">
      <v-toolbar-sideicon width="30%">
        <img class="nav-logo" :src="require('@/assets/logo.jpg')"/>
      </v-toolbar-sideicon>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-sm-and-down nav-text">
        <v-btn class="nav-text" flat>Link One</v-btn>
        <v-btn class="nav-text" flat>Link Two</v-btn>
        <v-btn class="nav-text" flat>Link Three</v-btn>
      </v-toolbar-items>
    </v-toolbar>

    <div class="main">
      <v-jumbotron
        :gradient="gradient"
        dark
        height="600px"
        :src="require('@/assets/truck.jpg')" >
        <v-container fill-height>
          <v-layout align-center>
            <v-flex text-xs-center>
              <h3 class="jumbo-title">
                <span> J's </span>
                <span class="font-weight-light">Junk Removal Service</span>
              </h3>
            </v-flex>
          </v-layout>
        </v-container>
      </v-jumbotron>
    </div>

    <!--
      <v-toolbar-title class="nav-title headline">
      </v-toolbar-title>
      -->



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
  .main {
      margin-top: 100px;
      background-color: black;
      min-height: 3000px;
  }
  .jumbo-title {
      font-size: 5em;
  }
  .nav-logo {
      max-width: 15%;
  }
  img {
      max-width: 100%;
      height: auto;
  }
</style>
