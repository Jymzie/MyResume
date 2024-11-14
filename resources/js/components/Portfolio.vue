<template>
<div>
    
    <v-row>
        <v-col cols="12" class="text-center ">
            <v-icon x-large class="blue--text mx-2 pb-5 textshadow">mdi-folder</v-icon>
            <span class="font-weight-bold Pacifico titlesize textshadow">Portfolio</span>
            <br>
            <v-col cols="0" lg="12">
            </v-col>

        </v-col>
        <v-col cols="12" :sm="$vuetify.breakpoint.width >= 667 ? 6 : 12" md="6" lg="4" xl="3" v-for="(item, i) in Portfolios" :key="i">
            <v-hover>
                <template v-slot:default="{ hover }">
                    <v-card class="boxcolor pa-1 ma-2 elevation-0">
                        <v-carousel class="white" show-arrows-on-hover cycle interval="9000" hide-delimiters height="240px">
                            <v-carousel-item v-for="(img,i) in item.img" :key="i" :src="'images/portfolio/'+img+'.webp'" >
                            </v-carousel-item>

                        </v-carousel>
                        <span class="white--text d-flex justify-center Playfair">{{item.title}}</span>

                        <v-fade-transition>
                            <v-overlay v-if="hover" absolute color="#14143C" opacity="0.70">
                                <div class="text-center">
                                    <p class="ma-1">{{item.info}}</p><br>
                                    <v-btn class="blue" @click="mOpenCarousel(item.img,item.title)">
                                        <v-icon class="mr-2">mdi-expand-all</v-icon>
                                        Expand
                                    </v-btn>
                                </div>
                            </v-overlay>
                        </v-fade-transition>

                    </v-card>
                </template>
            </v-hover>
        </v-col>

    </v-row>

    <v-dialog v-model="carousel" fullscreen>
        <v-card class="grey darken-3">
           
            <v-card-title class="white--text titlecolor">
                <v-row>
                    <v-col cols="10" :style="$vuetify.breakpoint.mobile? 'font-size:80%':''">
                        {{carouselitem.title}}
                    </v-col>
                    <v-col cols="2" class="text-right">
                         <v-icon x-large class="white--text closehover" @click="carousel=!carousel">mdi-close</v-icon>
                    </v-col>
                </v-row>
                
               
               

            </v-card-title>
                <v-carousel show-arrows-on-hover height="90vh">
                    <v-carousel-item v-for="(img,i) in carouselitem.img" :key="i" :src="'images/portfolio/'+img+'.webp'" contain></v-carousel-item>
                </v-carousel>
        
                
            
        </v-card>
    </v-dialog>
  
</div>

</template>

<script>
export default {
    props: {
        SoundEffect: {
            type: Function
        },
    },
    data: () => ({
        carousel: false,
        carouselitem: [],
        Portfolios: [{
                img: ['placeholder'],
                // img: ['NPSLogin', 'NPSmonitoring', 'NPSview', 'NPSdataflow'],
                title: 'Nail Pitching System',
                info: 'This system is made to keep track the proof that factory production comply the norms of nail pitching every panel made in HTI i-Cube.'
            },
            {
                img: ['placeholder'],
                // img: ['BHMLogin', 'BHMDashboard', 'BHMChecking', 'BMProcess'],
                title: 'BH Product Management System',
                info: 'The system covers the management of balcony handrail products from receiving of data from HRD up to exporting of actual materials. It includes product allocation, process status, completeness and control of products quality and delivery.'
            },
            {
                img: ['placeholder'],
                // img: ['AMTable', 'AMTable2', 'AMDialog', 'AMKaizen', 'AMBefore', 'AMAfter'],
                title: 'Access Manager',
                info: "Access Manager is a Kaizen System that covers the BarchartMaker and HTIShukka System's account creation and access control."
            },
            {
                img: ['ElsHome', 'ElsScan', 'ElsQR'],
                title: 'ElStudio I.D. System',
                info: 'The system is built in with biometric function for monitoring of attendance and inventory'
            },
            {
                img: ['PetAdopt', 'PetInfo', 'PetHome'],
                title: 'WCMS: Pet Adopt Website',
                info: 'Pet Adopt is a website made by the students of Cavite State University - CCAT Campus that can help some animals especially the homeless one in finding their own home through people who can access the website with a single click'
            }
        ],
    }),
    methods: {
        mOpenCarousel(item, title) {
            this.SoundEffect('select')
            this.carouselitem.img = item
            this.carouselitem.title = title
            this.carousel = true
        },
    },
    watch: {
        carousel(val) {
            if (val == false)
                this.SoundEffect('close')
        },
    }
}
</script>

<style>

</style>
