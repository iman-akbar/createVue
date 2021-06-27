<template>
  <v-app>
    <v-toolbar>
      <v-img src="../assets/advotics-logo-optimize.jpg" max-height="32" max-width="129"></v-img>
      <p
        class="mt-9 ml-4"
        style="top: 34px;
            left: 171px;
            width: 61px;
            height: 15px;
            text-align: left;
            font: normal normal normal 11px/15px Open Sans;
            letter-spacing: 0px;
            color: #5B5B5B;
            opacity: 1;"
      >Powered By</p>
      <v-img src="../assets/advotics-logo-optimize.jpg" max-height="13" max-width="60" class="mt-5"></v-img>     
      <v-spacer></v-spacer>
    
    <v-col cols="auto">
        <v-row class="mt-0"><p style="top: 16px;
left: 1093px;
width: 68px;
height: 19px;
text-align: left;
font: normal normal 600 14px/19px Open Sans;
letter-spacing: 0px;
color: #727272;
opacity: 1;"> Username</p></v-row>
<v-row class="mt-0">
    <span class="top: 35px;
left: 1091px;
width: 72px;
height: 14px;
text-align: left;
font: normal normal 300 10px/14px Open Sans;
letter-spacing: 0px;
color: #727272;
opacity: 1;">Company Name</span>
</v-row>
    </v-col>
    <v-img class="ml-2" src="../assets/Profile.svg" max-height="32" max-width="32"></v-img>
     <v-btn dark icon v-bind="attrs" v-on="on">
    <v-img class="ml-2 mr-5" src="../assets/logout.png" max-height="15" max-width="15" @click="exit"></v-img>
     </v-btn>
            
    </v-toolbar>
    <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
    <v-navigation-drawer v-model="drawer" :width="72">
      <v-list>
        <v-list-item link>
          <!-- <v-list-item-icon> -->
          <v-btn icon @click="open()">
            <img
              href="/dashboard"
              src="../assets/Dashboard icon.svg"
              style="max-height: 32px; max-width: 32px; padding-left: 10px;"
            />
          </v-btn>
          <!-- </v-list-item-icon> -->
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <router-view />
  </v-app>
</template>

<script>
export default {
    name: 'NavigationDrawer',
    data: ()=>({
        drawer: false
    }),
    methods: {
      exit(){
         this.$router.push('/')
      },
        open(){
            this.$router.push('/Page')
        }
    },
};
</script>

<style>
</style>