<template>
<div>
    
    <v-row>
        <v-col :cols="($vuetify.breakpoint.mobile && $vuetify.breakpoint.width >= 720) || $vuetify.breakpoint.width > 911 ? 6 : 12" class="justify-center align-center d-flex font-bold">
            <div class="titlesize Playfair whiteshadow">
                <h1>Hey there!</h1>
                <h1>I'm <b class="Pacifico">Jimwell C. Punzalan</b>,</h1>
                <h1>A Versatile <b class="blue--text Pacifico">IT Specialist</b></h1>
                <br>
                <v-btn dark v-for="icon in icons" :key="icon.icon" class="mx-4" @mouseenter="SoundEffect('slide')" @click="SoundEffect('select')" icon :href="icon.link" target="_blank">
                    <v-icon large class="blue--text text-left iconhover" size="24px">
                        {{ icon.icon }}
                    </v-icon>
                </v-btn>
            </div>
        </v-col>
        <v-col :cols="($vuetify.breakpoint.mobile && $vuetify.breakpoint.width >= 720) || $vuetify.breakpoint.width > 911 ? 5 : 12">
            <v-card class="seethrough">
                <v-card-title class="titlecolor white--text font-weight-bold">
                    <v-icon x-large class="blue--text mx-2">mdi-book-open-page-variant</v-icon>
                    <h2 class="Playfair">SUMMARY</h2>
                </v-card-title>
                <v-card-text>
                    <p class="ma-4">{{summary}}</p>
                </v-card-text>
            </v-card>
        </v-col>
        <v-col cols="0" lg="1" sm="0"></v-col>

    </v-row>
</div>
</template>

<script>
export default {
    props: {
        summary: {
            type: String
        },
        icons: {
            type: Array
        },
        SoundEffect: {
            type: Function
        },
    }
}
</script>

<style scoped>
     .titlesize{
        font-size: 80%;
    }
</style>
   

