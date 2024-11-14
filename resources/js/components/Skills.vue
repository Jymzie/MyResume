<template>
<div>
    <v-row class="my-5">

        <v-col cols="12" lg="6" :sm="isMobile ? 6 : 12">
            <v-card class="seethrough mt-5" id="skill">
                <v-card-title class="titlecolor white--text font-weight-bold">
                    <v-icon x-large class="blue--text mx-2 Pacifico">mdi-cogs</v-icon>
                    <h2 class="Playfair">SKILLS</h2>
                </v-card-title>
                <v-card-text>

                    <v-list class="seethrough">

                        <v-list-group @click="SoundEffect('slide')" v-for="item in technicalskills" :key="item.title" no-action :prepend-icon="item.icon">
                            <template v-slot:activator>
                                <v-list-item-content>
                                    <v-list-item-title>{{item.title}}</v-list-item-title>
                                </v-list-item-content>
                            </template>

                            <v-row class="d-flex justify-center">
                                <v-col cols="6" xl="2" lg="3" md="4" sm="6" v-for="(subitem,i) in item.items" :key="i" class="text-center">
                                    <img :src="'images/skill/'+subitem+'.png'" height="70" width="70">
                                    <p>{{subitem}}</p>
                                </v-col>
                            </v-row>

                        </v-list-group>
                    </v-list>

                </v-card-text>
            </v-card>
        </v-col>

        <v-col cols="12" lg="6" :sm="isMobile ? 6 : 12" class="justify-center align-center d-flex font-bold">
            <div>
                <h1 class="Playfair"><b class="blue--text Pacifico">Exploration</b> is</h1>
                <h1 class="Playfair"><b class="green--text Pacifico">Curiosity</b> put into</h1>
                <h1 class="red--text Pacifico">Action</h1>
                <br>
            </div>

        </v-col>

    </v-row>
</div>
</template>

<script>
export default {
    props:{
    isMobile:{
            type:Boolean
        },
        SoundEffect: {
            type: Function
        },
    },
    data: () => ({
        technicalskills: [{
                title: 'Languages',
                icon: 'mdi-xml',
                items: ['HTML', 'CSS', 'Javascript', 'PHP', 'Java', 'C++']
            },
            {
                title: 'Frameworks',
                icon: 'mdi-electron-framework',
                items: ['Laravel', 'Vue', 'React', 'Wordpress']
            },
            {
                title: 'Databases',
                icon: 'mdi-database',
                items: ['MsSQL', 'MySQL', 'MongoDB']
            },
            {
                title: 'Web Hosting',
                icon: 'mdi-server',
                items: ['Git', 'Bluehost', 'cPanel', 'InfinityFree']
            },
            {
                title: 'Soft Skills',
                icon: 'mdi-puzzle',
                items: ['Adaptability', 'Communication', 'Creativity', 'Time Management', 'Problem Solving']
            },
            {
                title: 'Others',
                icon: 'mdi-robot-confused',
                items: ['Photoshop', 'SAI', 'PowerDirector', 'Fire Fighter']
            }
        ],
    })
}
</script>

<style>

</style>
