<template>
  <v-app top=fixed-navbar>
    <v-toolbar  app :height="'100px'">
      <v-toolbar-sideicon class="nav-icon">
        <img class="nav-logo" :src="require('@/assets/logo.jpg')"/>
      </v-toolbar-sideicon>
      <v-spacer></v-spacer>
      <v-toolbar-sideicon class="nav-icon-right">
        <img class="nav-logo-right" :src="require('@/assets/association.png')"/>
      </v-toolbar-sideicon>
<!--
      <v-menu v-if="isMobile">
		 <font-awesome-icon icon="caret-down" size="2x" slot="activator"></font-awesome-icon/>
         <v-list>
           <v-btn class="nav-text" flat v-scroll-to="{ el: '#about', offset: -100 }" >What We Do</v-btn>
           <v-btn class="nav-text" flat v-scroll-to="{ el: '#previous-work', offset: -100 }">Previous Work</v-btn>
         </v-list>
      </v-menu>
      <v-toolbar-items v-else>
        <v-btn class="nav-text" flat v-scroll-to="{ el: '#about', offset: -100 }" > What we Do </v-btn>
        <v-btn class="nav-text" flat v-scroll-to="{ el: '#previous-work', offset: -100 }">Previous Work</v-btn>
      </v-toolbar-items>
-->
    </v-toolbar>

    <div class="main">
      <div class="jumbo-container">
		<v-img :src="require('@/assets/trailer.jpg')">
	    </v-img>
	  </div>
      <div id="about">
        <v-layout> 
          <v-card color="primary" class="content-card">
            <v-flex sm12 offset-sm1>
              <v-card-title primary-title class="headline">
                  <div>What We Do</div>
               </v-card-title>
             </v-flex>
               <v-layout row wrap class="icon-container">
                 <v-flex class="icon-flex" xs4>
                   <font-awesome-icon icon="truck-monster" :size="iconSize"></font-awesome-icon/>
					<div class="icon-tag">
					Clean Outs
					</div>
                 </v-flex>
                 <v-flex class="icon-flex" xs4>
                   <font-awesome-icon icon="recycle" :size="iconSize"></font-awesome-icon/>
					<div class="icon-tag">
						Recycling
					</div>
                 </v-flex>
                 <v-flex class="icon-flex" xs4>
                   <font-awesome-icon icon="trash" :size="iconSize"></font-awesome-icon/>
					<div class="icon-tag">
						Disposal
					</div>
                 </v-flex>
                 <v-flex class="about-flex" xs8>
We are a full service Junk Removal Company operating out of Danvers MA. We provide a simple yet valuable solution to homeowners, renters, businesses, landlords, real estate agents, and anyone else who may be in need of unwanted item removal services in the Boston/Northshore area.<br>
<br>
 It’s as easy as this… <b>Call or text with your junk removal needs. Then we will provide a no obligation FREE evaluation of your items. If you like the price, we will get the job done efficiently and safely.</b> We can usually offer same day or next day service. We are fully insured, professional, and reliable. Our main goal is to make your experience stress free and to cater to the specific needs of you, the client. Afterall, we know how busy life can get! Let us do the dirty work, WE WORK FOR YOU! 
				 	
                 </v-flex>
                 <v-flex class="list-flex" xs4>
               	   <v-layout row wrap>
					 <v-flex class="list-flex-header" xs12>
					   <h3>Junk Removal of all kinds! <br> We recycle and donate as much as possible! </h3>
					 </v-flex>
					 <v-flex class="list-flex" xs12>
					   <ul>
					     <li>  Household Junk Removal </li>
					     <li>  Trash Removal</li>
					     <li>  Appliance Removal</li>
					     <li>  Furniture Removal</li>
					     <li>  Construction Debris Removal</li>
					     <li>  Yard Waste Removal</li>
						 <li>  Dumpster Enclosure Clean outs </li>
						 <li>  Recycling Services </li>
						 <li>  On Call Pick ups </li>
						 <li>  Scheduled Pick ups </li>
						 <li>  Single Item Removal </li>
					   </ul>
					 </v-flex>
					 <v-flex class="list-flex-header" xs12>
					   <h3> Don’t see it here? Just Ask!!!  </h3>
					 </v-flex>
                   </v-layout>
                 </v-flex>
               </v-layout row wrap>
          </v-card>
        </v-layout>
      </div>
      <div id="previous-work" >
        <v-layout>
          <v-card class="content-card" color="secondary">
            <v-flex sm12>
              <v-card-title primary-title class="headline alt">
                <div style="width: 100%; text-align:center;">
					<a href="tel:+9789399068" class="callable-link"> <span v-if="!isMobile">Call Now:</span> 978-939-9068</a>
				</div>
               </v-card-title>
             </v-flex>
             <v-flex sm12 color="#000000" class="carousel-container">
               <carousel :per-page="isMobile ? 1 : 2" :mouse-drag="false">
                 <slide v-for="index in [1,2,3,4,5,6,7,8,9,10,11,12,13,14]">
                   <v-img :height="'400px'" :src="require(`@/assets/image${index}.jpeg`)"></v-img>
                 </slide>
               </carousel>
             </v-flex>
          </v-card>
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
  computed: {
    isMobile() {
        return screen.width <= 760;
    },
	iconSize() {
		return this.isMobile ? '5x' : '8x';
	},
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
  img {
      max-width: 100%;
      height: auto;
  }
  .jumbo-container {
	  margin-bottom: 10%;
      margin-right: 0px;
      margin-left: 0px;
      max-width: 1500px;
  }
  .v-card__title.headline.alt {
      font-size: 7em !important;
      color: #000000;
      font-weight: 400;
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
  .icon-container {
      background-color: #1AB20C;
      color: #000000;
      padding: 1%;
      padding-bottom: 5%;
      text-align: center;
  }
  .icon-flex {
	  margin-top: 2%;
  }
  .content-card {
      width: 100%;
  }
  .v-card {
      border-radius: 0px !important;
  }
  .carousel-container {
      background-color: #000000 !important;
      padding: 3%;
  }
  .nav-icon {
      width: 10%;
  }
  .nav-icon-right {
      width: 8%;
  }
  @media screen and (max-width: 480px) {
      .nav-icon {
          width: 30%;
      }
      .nav-icon-right {
          width: 24%;
      }
      .nav-logo {
          width: 100%;
      }
	  .jumbo-title {
		  font-size: 2em;
  	  }
      .v-card__title.headline {
          font-size: 3.5em !important;
		  margin-bottom: -16px;
       }
	  .v-card__title.headline.alt {
          font-size: 3.5em !important;
		  margin-bottom: -16px;
	  }
  	   .icon-tag {
  	       font-size: 1.5em !important;
  	   }
       .about-flex {
           font-size: .75em !important;
       }
       .list-flex {
         font-size: .75em !important;
       }
  }
  .icon-tag {
	  width: 100%;
	  text-align: center;
	  margin-top: 1%;
	  font-size: 2em;
	  font-weight: 600;
  }
  .about-flex {
	  padding-left: 5%;
	  padding-right: 5%;
	  font-size: 1.5em;
	  padding-top: 2%;
	  text-align: justify;
  }
  .list-flex-header {
    margin-top: 5%;
    margin-bottom: 5%;
  }
  .list-flex {
    font-size: 1.1em;
  }
  .callable-link:hover {
	color: #fff;
  }
</style>
