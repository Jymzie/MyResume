<template>
  <v-app id="inspire">
      <v-navigation-drawer
        v-model="drawer"
        app
        class="blue"
      >
         <v-list dense>
            <v-subheader class="white--text">LIST COMPONENTS:</v-subheader>
               <v-list-item
                  v-for="(item, i) in items"
                  :key="i"
                  :to="item.to"
               >
                  <v-list-item-icon>
                     <v-icon class="white--text">{{item.icon}}</v-icon>
                  </v-list-item-icon>
                  <v-list-item-content>
                     <v-list-item-title class="white--text">{{item.text}}</v-list-item-title>
                  </v-list-item-content>
               </v-list-item>
         </v-list>
      </v-navigation-drawer>

      <v-app-bar app class="blue">
         <v-app-bar-nav-icon @click="drawer = !drawer" class="white--text"></v-app-bar-nav-icon>
         <v-toolbar-title class="white--text">Access Manager<v-icon class="white--text">mdi-security</v-icon></v-toolbar-title>
      </v-app-bar>

      <v-main class="ma-2">
         <router-view></router-view>
      </v-main>
  </v-app>
</template>

<script>
   export default {
      data: () => ({
         drawer: null,
         items:[
            {text:'BarChart', icon:'mdi-poll', to:'BarChart'},
            {text:'HTI Shukka', icon:'mdi-ferry', to:'Shukka'},
         ]
      }),
   }
</script>