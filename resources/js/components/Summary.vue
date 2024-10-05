<template>
<div>
    
    <v-row>
        <v-col cols="12" lg="7" :sm="isMobile ? 6 : 12" class="justify-center align-center d-flex font-bold">
            <div>
                <h1 class="Playfair whiteshadow">Hey there!</h1>
                <h1 class="Playfair whiteshadow">I'm <b class="Pacifico">Jimwell C. Punzalan</b>,</h1>
                <h1 class="Playfair whiteshadow">Devoted <b class="blue--text Pacifico">IT Specialist</b></h1>
                <br>
                <v-btn dark v-for="icon in icons" :key="icon.icon" class="mx-4" @mouseenter="SoundEffect('slide')" @click="SoundEffect('select')" icon :href="icon.link" target="_blank">
                    <v-icon large class="blue--text text-left iconhover whiteshadow" size="24px">
                        {{ icon.icon }}
                    </v-icon>
                </v-btn>
            </div>
        </v-col>
        <v-col cols="12" lg="4" :sm="isMobile ? 6 : 12">
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
        isMobile: {
            type: Boolean
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

<style>

</style>
