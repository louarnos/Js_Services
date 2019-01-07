<template>
  <v-app top=fixed-navbar>
    <v-toolbar  app :height="'100px'">
      <v-toolbar-sideicon width="30%">
        <img class="nav-logo" :src="require('@/assets/logo.jpg')"/>
      </v-toolbar-sideicon>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-sm-and-down nav-text">
        <v-btn class="nav-text" flat v-scroll-to="{ el: '#about', offset: -100 }" >About</v-btn>
        <v-btn class="nav-text" flat>Previous Work</v-btn>
        <v-btn class="nav-text" flat>Testimonials</v-btn>
        <v-btn class="nav-text" flat>Contact</v-btn>
      </v-toolbar-items>
    </v-toolbar>

    <div class="main">
      <v-jumbotron
        :gradient="'gradient'"
        dark
        height="600px"
        :src="require('@/assets/design_center.jpg')">
        <v-container fill-height class="jumbo-container">
          <v-layout align-center>
            <v-flex sm8 offset-sm2 text-xs-center>
              <v-card class="jumbo-card">
                <h3 class="jumbo-title">
                  <span> J's </span>
                  <span class="font-weight-light">Junk Removal Service</span>
                </h3>
              </v-card>
            </v-flex>
          </v-layout>
        </v-container>
      </v-jumbotron>
      <div id="about">
        <v-layout>
          <v-card color="primary" :width="'100%'">
            <v-flex sm8 offset-sm1>
              <v-card-title primary-title class="headline">
                  <div>About</div>
               </v-card-title>
             </v-flex>
               <v-layout row wrap class="icon-container">
                 <v-flex xs4>
                   <font-awesome-icon icon="recycle" size="8x"></font-awesome-icon/>
                   <v-card-text>
            Lo     rem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi.
                   </v-card-text>
                 </v-flex>
                 <v-flex xs4>
                   <font-awesome-icon icon="truck-monster" size="8x"></font-awesome-icon/>
                   <v-card-text>
            Lo     rem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi.
                   </v-card-text>
                 </v-flex>
                 <v-flex xs4>
                   <font-awesome-icon icon="trash" size="8x"></font-awesome-icon/>
                   <v-card-text>
            Lo     rem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi.
                   </v-card-text>
                 </v-flex>
               </v-layout row wrap>
          </v-card>
        </v-layout>
      </div>
      <div id="previous-work">
        <v-layout id="previous-work">
          <v-flex sm8 offset-sm2>
            <v-card color="secondary">
              <v-card-title primary-title>
                <div>
                  <div class="headline"><b>Previous Work</b></div>
                </div>
               </v-card-title>
               <carousel :per-page="2" :mouse-drag="false">
                 <slide v-for="index in [1,2,3,4,5,6,7,8,9,10,11,12,13,14]">
                     <v-img :height="'400px'" :src="require(`@/assets/image${index}.jpeg`)"></v-img>
                 </slide>
               </carousel>
            </v-card>
          </v-flex>
        </v-layout>
      </div>
    </div>

  </v-app>
</template>

<script>
import { Carousel, Slide } from 'vue-carousel';

export default {
  name: 'App',
  components: {
    Carousel,
    Slide
  },
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
      //min-height: 3000px;
  }
  .v-card.jumbo-card {
      padding: 2%;
      opacity: 0.8;
  }
  .v-card.jumbo-card > .jumbo-title {
      opacity: 1;
  }
  .jumbo-title {
      font-size: 5em;
  }
  .jumbo-title > span {
      color: #1AB20C;
  }
  .nav-logo {
      max-width: 15%;
  }
  img {
      max-width: 100%;
      height: auto;
  }
  .jumbo-container.container.fill-height {
      margin-right: 0px;
      margin-left: 0px;
      max-width: 1500px;
  }
  .v-card__title.headline {
      font-size: 7em !important;
      color: #1AB20C;
      font-weight: 400;
  }
  .about-text {
      font-size: 1.5em;
      color: #1AB20C;
  }
  #about, #previous-workk {
      margin-bottom: 5%;
      padding-top: 100px;
  }
  .icon-container {
      background-color: #1AB20C;
      color: #000000;
      padding: 1%;
      border-radius: 5px;
      text-align: center;
  }
</style>
