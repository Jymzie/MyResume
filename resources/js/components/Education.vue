<template>
<v-row>
    <v-col cols="12" class="text-center ">
        <v-icon x-large class="blue--text mx-2 pb-5 textshadow">mdi-school</v-icon>
        <b class="white--text font-weight-bold Pacifico titlesize textshadow">Education</b>
    </v-col>
    <v-col :cols="$vuetify.breakpoint.width >= 739 ? 6 : 12">

        <v-carousel height="180" class="mb-n10" hide-delimiters v-if="$vuetify.breakpoint.width >= 739 ? false : true">
            <template v-slot:prev="{ on, attrs }">
                <v-icon v-bind="attrs" x-large @click="mSlideCarousel(-1)" v-on="on">mdi-chevron-left</v-icon>

            </template>
            <template v-slot:next="{ on, attrs }">
                <v-icon v-bind="attrs" x-large @click="mSlideCarousel(1)" v-on="on">mdi-chevron-right</v-icon>
            </template>
            <v-carousel-item v-for="(item, i) in Education" :key="i" @mouseover="mHoverSelect(item,i)">
                <v-card class="mt-6">
                    <v-card-text class="text-center">
                        <v-list-item>
                            <v-list-item-avatar class="elevation-5" :width="80" :height="80">
                                <v-img :src="'images/'+item.logo+'.webp'"></v-img>
                            </v-list-item-avatar>
                            <v-list-item-content>
                                <v-list-item-title>{{item.school}}</v-list-item-title>
                                <v-list-item-subtitle>{{item.year}}</v-list-item-subtitle>
                                <v-list-item-subtitle>{{item.address}}</v-list-item-subtitle>
                            </v-list-item-content>
                        </v-list-item>
                    </v-card-text>

                </v-card>

            </v-carousel-item>
        </v-carousel>

        <v-col v-else :cols="overlaytext.year == item.year ? 12 : 11" v-for="(item, i) in Education" :key="i" @mouseover="mHoverSelect(item,i)">
            <v-card class="mt-6">
                <v-card-text class="text-center">

                    <v-list-item>
                        <v-list-item-avatar class="elevation-5" :width="overlaytext.year == item.year ? 80 : 40" :height="overlaytext.year == item.year ? 80 : 40">
                            <v-img  :src="'images/'+item.logo+'.webp'"></v-img>
                        </v-list-item-avatar>
                        <v-list-item-content>
                            <v-list-item-title>{{item.school}}</v-list-item-title>
                            <v-list-item-subtitle>{{item.year}}</v-list-item-subtitle>
                            <v-list-item-subtitle>{{item.address}}</v-list-item-subtitle>
                        </v-list-item-content>
                    </v-list-item>

                </v-card-text>

            </v-card>
        </v-col>
    </v-col>
    <v-col :cols="$vuetify.breakpoint.width >= 739 ? 6 : 12">
        <v-carousel class="white" :show-arrows="false" cycle interval="9000" hide-delimiters height="500" :class="this.$vuetify.breakpoint.name == 'lg' || this.$vuetify.breakpoint.name =='xl' ? 'customradius' : 'customradius'">
            <v-carousel-item v-for="(img,i) in gradpic" :key="i"  :src="'images/'+img+'.webp'" lazy-src='images/placeholder.webp'>
                <template v-slot:placeholder>
        <v-row
          class="fill-height ma-0"
          align="center"
          justify="center"
        >
          <v-progress-circular
            indeterminate
            color="grey lighten-5"
          ></v-progress-circular>
        </v-row>
      </template>
            </v-carousel-item>

            <v-overlay :v-model="true" absolute color="#14143C">
                <v-fade-transition mode="out-in">
                    <div :key="overlaytext.year" class="text-center">
                        <span>S.Y. {{overlaytext.year}}</span>
                        <br>
                        <span class="font-weight-bold" style="font-size:120%">
                            <v-icon class="blue--text">mdi-school</v-icon>
                            {{overlaytext.school}}
                        </span>
                        <br>
                        {{overlaytext.address}}
                        <br><br>
                        <i class="Playfair" style="font-size:120%">{{overlaytext.course}}</i>
                        <br>
                        <span class="yellow--text font-weight-bold">
                            <v-icon v-show="overlaytext.award != ''" class="yellow--text">mdi-medal</v-icon>
                            {{overlaytext.award}}
                        </span>
                        <span v-show="overlaytext.grade != null" class="mt-n4">- GWA: {{overlaytext.grade}}</span>
                    </div>
                </v-fade-transition>
            </v-overlay>
        </v-carousel>
        <!-- <v-img src="images/parallax2.jpg" height="500" class="customradius">

                <v-overlay :v-model="true" absolute color="#14143C" class="px-2">
                    <v-fade-transition mode="out-in">
                        <div :key="overlaytext.year" class="text-center">
                            <span>S.Y. {{overlaytext.year}}</span>
                            <br>
                            <span class="font-weight-bold" style="font-size:120%">
                                <v-icon class="blue--text">mdi-school</v-icon>
                                {{overlaytext.school}}
                            </span>
                            <br>
                            {{overlaytext.address}}
                            <br><br>
                            <i class="Playfair" style="font-size:120%">{{overlaytext.course}}</i>
                            <br>
                            <span class="yellow--text font-weight-bold">
                                <v-icon v-show="overlaytext.award != ''" class="yellow--text">mdi-medal</v-icon>
                                {{overlaytext.award}}
                            </span>
                            <span v-show="overlaytext.grade != null" class="mt-n4">- GWA: {{overlaytext.grade}}</span>
                        </div>
                    </v-fade-transition>
                </v-overlay>
            </v-img> -->

    </v-col>
</v-row>
</template>

<script>
export default {
    props: {
        SoundEffect: {
            type: Function
        },
        
    },
    created() {
        this.overlaytext = this.Education[0]
    },
    mounted() {
        this.$watch('this.$vuetify.breakpoint', (newValue, oldValue) => {
            this.overlaytext = this.Education[0]
            this.overlaycount = 0
        }, {
            deep: true
        });
    },
    data: () => ({
        overlaycount: 0,
        overlaytext: '',
         gradpic:['gradpic','gradpic2'],
        Education: [{
                school: 'CAVITE STATE UNIVERSITY - CCAT',
                logo: 'CVSU',
                address: "EM's Barrio, Tejeros Convention, Rosario, Cavite",
                year: '2018-2023',
                course: 'Bachelor of Science in Information Technology (BSIT)',
                award: 'CUM LAUDE',
                grade: '1.45/5.00'
            },
            {
                school: 'SAINT AUGUSTINE - SENIOR HIGH',
                logo: 'SAS',
                address: 'Daang Amaya 3, Tanza, Cavite',
                year: '2016-2018',
                course: 'Senior High School - STEM Strand',
                award: ''
            },
            {
                school: 'SAINT AUGUSTINE SCHOOL',
                logo: 'SAS',
                address: 'St. Cruz St., Poblacion 1, Tanza, Cavite',
                year: '2012-2016',
                course: 'Junior High School',
                award: 'BEST IN DEPORTMENT'
            },
        ],
    }),
    methods: {
        mHoverSelect(item, count) {

            if (this.overlaytext != item && (this.$vuetify.breakpoint.name == 'lg'))
                this.SoundEffect('slide')
            this.overlaycount = count
            this.overlaytext = item

        },
        mSlideCarousel(item) {
            this.SoundEffect('slide')
            if (item == 1) {
                this.overlaycount++
                if (this.overlaycount == 3)
                    this.overlaycount = 0
                this.overlaytext = this.Education[this.overlaycount]

            } else {
                this.overlaycount--
                if (this.overlaycount == -1)
                    this.overlaycount = 2
                this.overlaytext = this.Education[this.overlaycount]

            }
        }
    }
}
</script>

<style>

</style>
