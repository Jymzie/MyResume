<template>
<v-card style="border-radius:0px">
    <v-parallax src="images/parallax/1.jpg" height="900">
        <div>
            <v-row>
                <v-col cols="12" lg="7" sm="12" class="justify-center align-center d-flex font-bold">
                    <div>
                        <h1 class="Playfair">Hey there!</h1>
                        <h1 class="Playfair">I'm <b class="Pacifico">Jimwell C. Punzalan</b>,</h1>
                        <h1 class="Playfair">Devoted <b class="blue--text Pacifico">IT Specialist</b></h1>
                        <br>
                        <v-btn dark v-for="icon in icons" :key="icon.icon" class="mx-4" @click="SoundEffect('select')" icon :href="icon.link" target="_blank">
                            <v-icon large class="blue--text text-left" size="24px">
                                {{ icon.icon }}
                            </v-icon>
                        </v-btn>
                    </div>
                </v-col>
                <v-col cols="12" lg="4" sm="12">
                    <v-card class="seethrough" id="summary">
                        <v-card-title class="black white--text font-weight-bold">
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

    </v-parallax>

    <v-parallax src="images/parallax/2.jpg" height="1000">
        <div>

            <v-row>
                <v-col cols="12" class="text-center ">
                    <v-icon x-large class="blue--text mx-2 pb-5">mdi-school</v-icon>
                    <b class="Pacifico text-h3 font-weight-bold">Education</b>
                    <br>
                    <v-col cols="0" lg="12">
                    </v-col>

                </v-col>
                <v-col cols="12" lg="6" sm="12" id="education">

                    <v-carousel height="180" class="mb-n10" hide-delimiters v-if="$vuetify.breakpoint.name == 'lg' || $vuetify.breakpoint.name =='xl' ? false : true">
                        <template v-slot:prev="{ on, attrs }">
                            <v-icon v-bind="attrs" x-large @click="mSlideCarousel(-1)" v-on="on">mdi-chevron-left</v-icon>

                        </template>
                        <template v-slot:next="{ on, attrs }">
                            <v-icon v-bind="attrs" x-large @click="mSlideCarousel(1)" v-on="on">mdi-chevron-right</v-icon>
                        </template>
                        <v-carousel-item v-for="(item, i) in Education" :key="i" @mouseover="mHoverSelect(item,i)">

                            <v-list>
                                <v-card class="mt-3">
                                    <v-card-text class="text-center">
                                        <v-list-item>
                                            <v-list-item-avatar class="elevation-5" :width="80" :height="80">
                                                <v-img :src="'images/'+item.logo"></v-img>
                                            </v-list-item-avatar>
                                            <v-list-item-content>
                                                <v-list-item-title>{{item.school}}</v-list-item-title>
                                                <v-list-item-subtitle>{{item.year}}</v-list-item-subtitle>
                                                <v-list-item-subtitle>{{item.address}}</v-list-item-subtitle>
                                            </v-list-item-content>
                                        </v-list-item>
                                    </v-card-text>

                                </v-card>
                            </v-list>

                        </v-carousel-item>
                    </v-carousel>

                    <v-col v-else :cols="overlaytext.year == item.year ? 12 : 11" v-for="(item, i) in Education" :key="i" @mouseover="mHoverSelect(item)">
                        <v-list>
                            <v-card>
                                <v-card-text class="text-center">

                                    <v-list-item>
                                        <v-list-item-avatar class="elevation-5" :width="overlaytext.year == item.year ? 80 : 40" :height="overlaytext.year == item.year ? 80 : 40">
                                            <v-img :src="'images/'+item.logo"></v-img>
                                        </v-list-item-avatar>
                                        <v-list-item-content>
                                            <v-list-item-title>{{item.school}}</v-list-item-title>
                                            <v-list-item-subtitle>{{item.year}}</v-list-item-subtitle>
                                            <v-list-item-subtitle>{{item.address}}</v-list-item-subtitle>
                                        </v-list-item-content>
                                    </v-list-item>

                                </v-card-text>

                            </v-card>
                        </v-list>
                    </v-col>
                </v-col>
                <v-col cols="12" lg="6" sm="12">

                     <v-carousel class="white" hide-arrows cycle interval="3000" hide-delimiters height="500" :class="this.$vuetify.breakpoint.name == 'lg' || this.$vuetify.breakpoint.name =='xl' ? 'customradius' : 'customradius'">
                            <v-carousel-item v-for="(img,i) in gradpic" :key="i" :src="'images/'+img" transition="fade-transition" reverse-transition="fade-transition">
                            </v-carousel-item>

                        <v-overlay v-model="overlay" absolute color="#14143C">
                            <transition name="fade" mode="out-in">
                                <div :key="overlaytext.year" class="text-center">
                                    <span>S.Y. {{overlaytext.year}}</span>
                                    <br>
                                    <span>
                                        <v-icon class="blue--text">mdi-school</v-icon>
                                        {{overlaytext.school}}
                                    </span>
                                    <br>
                                    {{overlaytext.address}}
                                    <br><br>
                                    <span>{{overlaytext.course}}</span>
                                    <br>
                                    <span class="yellow--text">
                                        <v-icon v-show="overlaytext.award != ''" class="yellow--text">mdi-medal</v-icon>
                                        {{overlaytext.award}}
                                    </span>
                                    <span v-show="overlaytext.grade != null" class="mt-n4">- GWA: {{overlaytext.grade}}</span>
                                </div>
                            </transition>
                        </v-overlay>
                    </v-carousel>

                </v-col>
            </v-row>

        </div>
    </v-parallax>

    <v-parallax src="images/parallax/3.jpg" height="1000">

        <div>
            <v-col cols="12" class="text-center ">
                <v-icon x-large class="blue--text mx-2 pb-5">mdi-briefcase-variant</v-icon>
                <span class="text-h4 font-weight-bold Pacifico">Experience</span>
                <br>
                <v-col cols="0" lg="12">
                </v-col>

            </v-col>
            <v-row>
                <v-col cols="12" class="mb-n10" id="experience">
                    <v-carousel height="180" hide-delimiters>
                        <template v-slot:prev="{ on, attrs }">
                            <v-icon v-bind="attrs" x-large @click="mSlideCarousel(-2)" v-on="on">mdi-chevron-left</v-icon>

                        </template>
                        <template v-slot:next="{ on, attrs }">
                            <v-icon v-bind="attrs" x-large @click="mSlideCarousel(2)" v-on="on">mdi-chevron-right</v-icon>
                        </template>
                        <v-carousel-item v-for="(item, i) in Experience" :key="i" @mouseover="mHoverSelect(item,i,'exp')">

                            <v-list>
                                <v-card class="mt-3">
                                    <v-card-text class="text-center">
                                        <v-list-item>
                                            <v-list-item-avatar class="elevation-5" :width="80" :height="80">
                                                <v-img :src="'images/'+item.logo"></v-img>
                                            </v-list-item-avatar>
                                            <v-list-item-content>
                                                <v-list-item-title>{{item.company}}</v-list-item-title>
                                                <v-list-item-subtitle>{{item.year}}</v-list-item-subtitle>
                                                <v-list-item-subtitle>{{item.address}}</v-list-item-subtitle>
                                            </v-list-item-content>
                                        </v-list-item>
                                    </v-card-text>

                                </v-card>
                            </v-list>

                        </v-carousel-item>
                    </v-carousel>
                </v-col>
                <v-col cols="12">

                    <v-img src="images/parallax/2.jpg" height="400" :class="$vuetify.breakpoint.name == 'lg' || $vuetify.breakpoint.name =='xl' ? 'mt-10 customradius' : 'customradius'">

                        <v-overlay v-model="overlay" absolute color="#14143C">
                            <transition name="fade" mode="out-in">
                                <div :key="overlaytext2.role">

                                    <span class="text-h5">Role: {{overlaytext2.role}}</span>
                                    <br><br>
                                    <ul>
                                        <li v-for="(info,i) in overlaytext2.info" :key="i">{{info}}</li>
                                    </ul>

                                </div>
                            </transition>
                        </v-overlay>
                    </v-img>

                </v-col>
            </v-row>
        </div>

    </v-parallax>

    <v-parallax src="images/parallax/4.jpg" height="1400">
        <div id="portfolios">

            <v-row>
                <v-col cols="12" class="text-center ">
                    <v-icon x-large class="blue--text mx-2 pb-5">mdi-folder</v-icon>
                    <span class="text-h4 font-weight-bold Pacifico">Portfolio</span>
                    <br>
                    <v-col cols="0" lg="12">
                    </v-col>

                </v-col>
                <v-col cols="12" sm="12" md="6" lg="4" xl="3" v-for="(item, i) in Portfolios" :key="i">
                    <v-hover>
                        <template v-slot:default="{ hover }">
                            <v-card class="black pa-1 ma-2 elevation-0">
                                <v-carousel class="white" show-arrows-on-hover cycle interval="10000" hide-delimiters height="240px">
                                    <v-carousel-item v-for="(img,i) in item.img" :key="i" :src="'images/portfolio/'+img" transition="fade-transition" reverse-transition="fade-transition">
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

        </div>
    </v-parallax>

    <v-parallax src="images/parallax/5.jpg" height="1200">
        <div>
            <v-row class="my-5">

                <v-col cols="12" lg="6">
                    <v-card class="seethrough mt-5" id="skill">
                        <v-card-title class="black white--text font-weight-bold">
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

                <v-col cols="12" lg="6" class="justify-center align-center d-flex font-bold">
                    <div>
                        <h1 class="Playfair"><b class="blue--text Pacifico">Exploration</b> is</h1>
                        <h1 class="Playfair"><b class="green--text Pacifico">Curiosity</b> put into</h1>
                        <h1 class="red--text Pacifico">Action</h1>
                        <br>
                    </div>

                </v-col>

            </v-row>
        </div>
    </v-parallax>

    <v-dialog v-model="intro" content-class="elevation-0" persistent>
        <div class="d-flex text-center">

            <v-col cols="0" lg="3" md="2" sm="0" v-show="$vuetify.breakpoint.name == 'lg' || $vuetify.breakpoint.name == 'md'"></v-col>
            <v-col cols="12" lg="6" md="8" sm="12"  class="white--text" >
                <v-row>
                    <v-col cols="12" lg="4" sm="4" :class="$vuetify.breakpoint.name == 'xs' ? 'text-center' : 'text-right'">
                        <img src="images/profile.jpg" class="rounded-circle" width="140">
                    </v-col>
                    <v-col cols="12" lg="8" sm="8" :class="$vuetify.breakpoint.name == 'xs' ? 'text-center' : 'text-left'">
                        <h1 class="Playfair">Hey there!</h1>
                        <h1 class="Playfair">I'm <b class="Pacifico">Jimwell C. Punzalan</b>,</h1>
                        <h1 class="Playfair">Devoted <b class="blue--text Pacifico">IT Specialist</b></h1>
                    </v-col>
                </v-row>
                <v-row>
                    <v-col cols="12" lg="7" sm="7">
                        <v-btn dark v-for="icon in icons" :key="icon.icon" class="mx-4" @click="SoundEffect('select')" icon :href="icon.link" target="_blank">
                    <v-icon large class="blue--text text-left" size="24px">
                        {{ icon.icon }}
                    </v-icon>
                </v-btn>
                    </v-col>
                    <v-col cols="12" lg="5" sm="5" :class="$vuetify.breakpoint.name == 'xs' ? 'text-center' : 'text-left'">
                         <v-btn @click="mOpenCover" :disabled="introtime" class="rounded-pill blue white--text">Take Tour</v-btn>
                    </v-col>
                </v-row>
                
               
            </v-col>
            <v-col cols="0" lg="3" md="2" sm="0" v-show="$vuetify.breakpoint.name != 'sm'"></v-col>

        </div>
    </v-dialog>

    <v-dialog v-model="carousel" width="70%">
        <v-card class="grey darken-3">
            <v-card-title class="white--text black">

                {{carouselitem.title}}
                <v-spacer />
                <v-icon class="white--text" @click="carousel=!carousel">mdi-close</v-icon>

            </v-card-title>
            <v-carousel show-arrows-on-hover height="100%">
                <v-carousel-item v-for="(img,i) in carouselitem.img" :key="i" :src="'images/portfolio/'+img" contain></v-carousel-item>
            </v-carousel>
        </v-card>
    </v-dialog>

    <v-footer color="grey darken-4" dark>
        <div>
            <v-row class="mt-2 text-center grey--text">
                <v-col cols="12" md="4" sm="12" class="text-left">
                    <h2 class="white--text">ABOUT</h2>

                    {{summary}}

                </v-col>
                <v-col cols="12" md="4" sm="12" class="text-left">
                    <h2 id="reference" class="white--text">REFERENCES</h2>
                    <v-row>
                        <v-col cols="6" xl="4" lg="6" v-for="(item,i) in reference" :key="i">
                            <v-list dense color="grey darken-4">
                                <v-list-item>
                                    <v-list-item-content>
                                        <v-list-item-title>{{item.name}}</v-list-item-title>
                                        <v-list-item-subtitle>{{item.role}}</v-list-item-subtitle>
                                        <v-list-item-subtitle>{{item.contact}}</v-list-item-subtitle>
                                    </v-list-item-content>
                                </v-list-item>
                            </v-list>
                        </v-col>
                    </v-row>
                </v-col>
                <v-col cols="12" md="4" sm="12" class="text-left">
                    <h2 class="white--text">INFORMATION</h2>

                    <v-list dense flat color="grey darken-4">
                        <v-list-item v-for="(item,i) in detail" :key="i">
                            <v-list-item-icon>
                                <v-icon class="blue--text">
                                    {{item.icon}}
                                </v-icon>
                            </v-list-item-icon>
                            <v-list-item-content>
                                <v-list-item-title>
                                    {{item.text}}
                                </v-list-item-title>
                            </v-list-item-content>
                        </v-list-item>
                    </v-list>
                    <br>
                    <v-col class="text-right">
                        <v-btn v-for="icon in icons" :key="icon.icon" class="mx-4" @click="SoundEffect('select')" icon :href="icon.link" target="_blank">
                            <v-icon class="blue--text" size="24px">
                                {{ icon.icon }}
                            </v-icon>
                        </v-btn>
                    </v-col>

                </v-col>
            </v-row>
            <v-row class="mb-1 indigo darken-4 align-center">
                <v-col cols="2" lg="4" sm="2"></v-col>
                <v-col class="text-right">
                    © {{ new Date().getFullYear() }} - <strong>Powered by: </strong>
                </v-col>
                <v-col class="text-left">
                    <img src="images/skill/Laravel.png" height="30" width="30" />
                    <img src="images/skill/Vue.png" height="30" width="30" />
                </v-col>
                <v-col cols="1" lg="4" sm="1"></v-col>
            </v-row>
        </div>
    </v-footer>

</v-card>
</template>

<script>
export default {
    data: () => ({
        intro: true,
        introtime:false,
        summary: "A Technology Enthusiast with 1+ year of experience in web development and system support. Proficient in creating responsive user interfaces, writing and testing of codes, troubleshootings, database structure planning, and implementing new features based on client's request. Proven track record of improving system performance and enhancing user satisfaction.",
        overlaycount: 0,
        overlaycount2: 0,
        overlay: true,
        overlaytext: '',
        overlaytext2: '',
         gradpic:['gradpic.JPG','gradpic2.JPG'],
        icons: [{
                icon: 'mdi-facebook',
                link: 'https://www.facebook.com/jimwell.cruz.9'
            },
            {
                icon: 'mdi-linkedin',
                link: 'https://www.linkedin.com/in/jimwell-punzalan-80513830b/'
            },
            {
                icon: 'mdi-gmail',
                link: 'https://www.google.com/'
            },
        ],
        Education: [{
                school: 'CAVITE STATE UNIVERSITY - CCAT',
                logo: 'CVSU.png',
                address: "EM's Barrio, Tejeros Convention, Rosario, Cavite",
                year: '2018-2023',
                course: 'Bachelor of Science in Information Technology (BSIT)',
                award: 'CUM LAUDE'
            },
            {
                school: 'SAINT AUGUSTINE - SENIOR HIGH',
                logo: 'SAS.png',
                address: 'Daang Amaya 3, Tanza, Cavite',
                year: '2016-2018',
                course: 'Senior High School - STEM Strand',
                award: ''
            },
            {
                school: 'SAINT AUGUSTINE SCHOOL',
                logo: 'SAS.png',
                address: 'St. Cruz St., Poblacion 1, Tanza, Cavite',
                year: '2012-2016',
                course: 'Junior High School',
                award: 'BEST IN DEPORTMENT'
            },
        ],
        carousel: false,
        carouselitem: [],
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
                title: 'Others',
                icon: 'mdi-robot-confused',
                items: ['Photoshop', 'SAI', 'PowerDirector', 'Fire Fighter']
            }
        ],
        skills: [{
                text: 'Adaptability',
                icon: 'mdi-head-cog'
            },
            {
                text: 'Communication',
                icon: 'mdi-chat'
            },
            {
                text: 'Creativity',
                icon: 'mdi-palette'
            },
            {
                text: 'Time Management',
                icon: 'mdi-clock'
            },
            {
                text: 'Problem Solving',
                icon: 'mdi-lightbulb'
            }
        ],
        Experience: [{
                company: 'H.R.D. SINGAPORE PTE LTD',
                logo: 'HRD.png',
                address: 'Block 3, Cavite Economic Zone III, Gen. Trias, Cavite',
                year: 'Nov 6, 2023 - PRESENT',
                role: 'Programmer / IT Support',
                info: ["Diagnosed and troubleshoot company's website/systems", 'Contributed a Kaizen named "Access Manager" to simplyfy the function of specific systems', 'Developed the "Balcony Handrail Management System" for Factory Process Monitoring']
            },
            {
                company: 'INTERN - CVSU-CCAT - ElStudio',
                logo: 'CVSU.png',
                address: "EM's Barrio, Tejeros Convention, Gen. Trias, Cavite",
                year: 'March 2 - May 28, 2023',
                role: 'Web Developer',
                info: ['Used the fundamental ways of creating a website (HTML, CSS, Javascript and PHP)', 'Developed the ElStudio I.D. System for biometric purposes']
            }
        ],
        Portfolios: [{
                img: ['placeholder.png'],
                title: 'Balcony Handrail Product Management System',
                info: 'The system covers the management of balcony handrail products from receiving of data from HRD up to exporting of actual materials. It includes product allocation, process status, completeness and control of products quality and delivery.'
            },
            {
                img: ['placeholder.png'],
                title: 'Access Manager',
                info: "Access Manager is a Kaizen System that covers the BarchartMaker and HTIShukka System's account creation and access control."
            },
            {
                img: ['ElsHome.png', 'ElsScan.png', 'ElsQR.png'],
                title: 'ElStudio I.D. System',
                info: 'The system is built in with biometric function for monitoring of attendance and inventory'
            },
            {
                img: ['PetAdopt.png', 'PetInfo.png', 'PetHome.png'],
                title: 'WCMS: Pet Adopt Website',
                info: 'Pet Adopt is a website made by the students of Cavite State University - CCAT Campus that can help some animals especially the homeless one in finding their own home through people who can access the website with a single click'
            }
        ],
        detail: [{
                icon: 'mdi-home',
                text: '245 Purok 1, Tejero, Gen.Trias, Cavite, Philippines'
            },
            {
                icon: 'mdi-phone',
                text: '(+63) 961-122-9773'
            }
        ],
         reference: [{
                name: 'Aries M. Gelera',
                role: 'Director, Research and Extension',
                contact: '+63-935-163-2872',
                gmail:'aries.gelera@cvsu.edu.ph'
            },
            {
                name: 'Karlo Jose E. Nabablit',
                role: 'Lecturer',
                contact: '+63-917-573-6767',
                gmail:'karlojose.nabablit@cvsu.edu.ph'
            }
        ]
    }),
    created() {
        this.overlaytext = this.Education[0]
        this.overlaytext2 = this.Experience[0]
        this.screensize = screen.width
    },
    methods: {
        SoundEffect(track) {
            let sound = new Audio(`soundeffect/${track}.mp3`)
            sound.play()
        },
        mOpenCover(){
            this.introtime = true
            this.SoundEffect('select')
            setTimeout(() => {
                this.intro = false
                this.$toast.show('Welcome!', 'Jymz:', this.$store.state.notificationSystem.options.ballon)
                setTimeout(()=>{
                    this.SoundEffect('success')
                },300)
            },800)
            
        },
        mOpenCarousel(item, title) {
            this.SoundEffect('select')
            this.carouselitem.img = item
            this.carouselitem.title = title
            this.carousel = true
            console.log(this.$vuetify.breakpoint.name);
        },
        mHoverSelect(item, count, con) {

            if (con == 'exp') {
                this.overlaycount2 = count
                this.overlaytext2 = item
            } else {
                if (this.overlaytext != item && (this.$vuetify.breakpoint.name == 'lg'))
                    this.SoundEffect('slide')
                this.overlaycount = count
                this.overlaytext = item
            }

        },
        mSlideCarousel(item) {
            this.SoundEffect('slide')
            if (item == 1) {
                this.overlaycount++
                if (this.overlaycount == 3)
                    this.overlaycount = 0
                this.overlaytext = this.Education[this.overlaycount]

            } else if (item == -1) {
                this.overlaycount--
                if (this.overlaycount == -1)
                    this.overlaycount = 2
                this.overlaytext = this.Education[this.overlaycount]

            } else if (item == 2) {
                this.overlaycount2++
                if (this.overlaycount2 == 2)
                    this.overlaycount2 = 0
                this.overlaytext2 = this.Experience[this.overlaycount2]

            } else {
                this.overlaycount2--
                if (this.overlaycount2 == -1)
                    this.overlaycount2 = 1
                this.overlaytext2 = this.Experience[this.overlaycount2]

            }

        }
    },
    watch: {
        carousel(val) {
            if (val == false)
                this.SoundEffect('close')
        },
    }
}
</script>

<style scoped>
.Pacifico{
    font-family: Pacifico !important;
}
.Playfair{
    font-family: Playfair Display !important;
    font-style: italic;
}
.customradius {
    border-radius: 20px;
}

.v-col:hover {
    transition-timing-function: ease;
}

.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
    opacity: 0;
}
</style>
