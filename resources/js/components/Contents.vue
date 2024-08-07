<template>
<v-card style="border-radius:0px">
    <v-parallax src="images/parallax.jpg" height="900">
        <v-card class="seethrough" id="summary">
            <v-card-title class="black white--text font-weight-bold">
                <v-icon x-large class="blue--text mx-2">mdi-book-open-page-variant</v-icon>
                SUMMARY
            </v-card-title>
            <v-card-text>
                <br>    
                <h1>IT Specialist</h1>
                <p class="ma-4">{{summary}}</p>
            </v-card-text>
        </v-card>
    </v-parallax>

    <v-parallax src="images/parallax.jpeg" height="1000">
        <v-card class="seethrough">
            <v-card-title class="black white--text font-weight-bold">
                <v-icon x-large class="blue--text mx-2">mdi-school</v-icon>
                EDUCATION
            </v-card-title>
            <v-card-text id="education">

                <v-row>
                    <v-col cols="12" lg="6" sm="12">

                        <v-carousel height="180" class="mb-n10" hide-delimiters v-if="this.$vuetify.breakpoint.name == 'lg' || this.$vuetify.breakpoint.name =='xl' ? false : true">
                            <template v-slot:prev="{ on, attrs }">
                                <v-icon v-bind="attrs" x-large @click="mShowOverlay(-1)" v-on="on">mdi-chevron-left</v-icon>

                            </template>
                            <template v-slot:next="{ on, attrs }">
                                <v-icon v-bind="attrs" x-large @click="mShowOverlay(1)" v-on="on">mdi-chevron-right</v-icon>
                            </template>
                            <v-carousel-item v-for="(item, i) in Education" :key="i" @mouseover="mOpenOverlay(item,i)">

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

                        <v-col v-else :cols="overlaytext.year == item.year ? 12 : 11" v-for="(item, i) in Education" :key="i" @mouseover="mOpenOverlay(item)">
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
                        
                         <v-carousel class="white" hide-arrows cycle interval="3000" hide-delimiters height="400" :class="this.$vuetify.breakpoint.name == 'lg' || this.$vuetify.breakpoint.name =='xl' ? 'mt-10' : ''">
                            <v-carousel-item v-for="(img,i) in gradpic" :key="i" :src="'images/'+img" transition="fade-transition" reverse-transition="fade-transition" contain COVER>
                            </v-carousel-item>

                            <v-overlay v-model="overlay" absolute color="#14143C">
                                <transition name="fade" mode="out-in">
                                    <div :key="overlaytext.year">
                                        <span>{{overlaytext.year}}</span>
                                        <br>
                                        <span>{{overlaytext.school}}</span>
                                        <br>
                                        {{overlaytext.address}}
                                        <br><br>
                                        <span>{{overlaytext.course}}</span>
                                        <br>
                                        <span class="yellow--text">
                                            <v-icon v-show="overlaytext.award != ''" class="yellow--text">mdi-medal</v-icon>
                                            {{overlaytext.award}}
                                        </span>
                                    </div>
                                </transition>
                            </v-overlay>
                        </v-carousel>
                        </v-img>

                    </v-col>
                </v-row>

            </v-card-text>
        </v-card>
    </v-parallax>

    <v-parallax src="images/parallax4.png" height="1000">

        <v-card class="seethrough" id="experience">
            <v-card-title class="black white--text font-weight-bold">
                <v-icon x-large class="blue--text mx-2">mdi-briefcase-search</v-icon>
                EXPERIENCE
            </v-card-title>
            <v-card-text>
                <v-row>
                    <v-col cols="12" class="mb-n10">
                        <v-carousel height="180" hide-delimiters>
                            <template v-slot:prev="{ on, attrs }">
                                <v-icon v-bind="attrs" x-large @click="mShowOverlay(-2)" v-on="on">mdi-chevron-left</v-icon>

                            </template>
                            <template v-slot:next="{ on, attrs }">
                                <v-icon v-bind="attrs" x-large @click="mShowOverlay(2)" v-on="on">mdi-chevron-right</v-icon>
                            </template>
                            <v-carousel-item v-for="(item, i) in Experience" :key="i" @mouseover="mOpenOverlay(item,i,'exp')">

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

                        <v-img src="images/parallax2.jpg" height="400" :class="this.$vuetify.breakpoint.name == 'lg' || this.$vuetify.breakpoint.name =='xl' ? 'mt-10' : ''">

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
            </v-card-text>
        </v-card>

    </v-parallax>

    <v-parallax src="images/parallax2.jpg" height="1400">
        <v-card class="seethrough" id="portfolios">
            <v-card-title class="black white--text font-weight-bold">
                <v-icon x-large class="blue--text mx-2">mdi-folder-pound</v-icon>
                PORTFOLIOS
            </v-card-title>
            <v-card-text class="justify-center align-center mx-auto">
                <v-row>
                    <v-col cols="12" sm="12" md="6" lg="4" xl="3" v-for="(item, i) in Portfolios" :key="i">
                        <v-hover>
                            <template v-slot:default="{ hover }">
                                <v-card class="black pa-1 ma-2 elevation-0">
                                    <v-carousel class="white" show-arrows-on-hover cycle interval="3000" hide-delimiters height="240px">
                                        <v-carousel-item v-for="(img,i) in item.img" :key="i" :src="'images/portfolio/'+img" transition="fade-transition" reverse-transition="fade-transition">
                                        </v-carousel-item>

                                    </v-carousel>
                                    <span class="white--text d-flex justify-center">{{item.title}}</span>

                                    <v-fade-transition>
                                        <v-overlay v-if="hover" absolute color="#14143C">

                                            <v-btn class="blue" @click="mOpenCarousel(item.img,item.title)">
                                                <v-icon class="mr-2">mdi-expand-all</v-icon>
                                                Expand
                                            </v-btn>

                                        </v-overlay>
                                    </v-fade-transition>

                                </v-card>
                            </template>
                        </v-hover>
                    </v-col>

                </v-row>
            </v-card-text>
        </v-card>
    </v-parallax>

    <v-parallax src="images/parallax3.jpg" height="900">
        <div>
            <v-row class="my-5">

                <v-col cols="12" lg="7">
                    <v-card class="seethrough mt-5" id="tskill">
                        <v-card-title class="black white--text font-weight-bold">
                            <v-icon x-large class="blue--text mx-2">mdi-cogs</v-icon>
                            TECHNICAL SKILLS
                        </v-card-title>
                        <v-card-text>

                            <v-list dense class="seethrough">

                                <v-list-group v-for="item in technicalskills" :key="item.title" no-action :prepend-icon="item.icon">
                                    <template v-slot:activator>
                                        <v-list-item-content>
                                            <v-list-item-title>{{item.title}}</v-list-item-title>
                                        </v-list-item-content>
                                    </template>

                                    <v-list-item v-for="(subitem,i) in item.items" :key="i">

                                        <v-list-item-content>
                                            <v-list-item-title>{{subitem}}</v-list-item-title>
                                        </v-list-item-content>
                                    </v-list-item>
                                </v-list-group>
                            </v-list>

                        </v-card-text>
                    </v-card>
                </v-col>

                <v-col cols="12" lg="5">
                    <v-card class="seethrough mt-5" id="skill">
                        <v-card-title class="black white--text font-weight-bold">
                            <v-icon x-large class="blue--text mx-2">mdi-puzzle</v-icon>
                            SKILLS
                        </v-card-title>
                        <v-card-text>

                            <v-list dense class="seethrough" tile flat>
                                <v-list-item v-for="(item,i) in skills" :key="i">
                                    <v-list-item-icon>
                                        <v-icon>{{item.icon}}</v-icon>
                                    </v-list-item-icon>
                                    <v-list-item-content>
                                        <v-list-item-title>
                                            {{item.text}}
                                        </v-list-item-title>

                                    </v-list-item-content>
                                </v-list-item>

                            </v-list>

                        </v-card-text>
                    </v-card>
                </v-col>

            </v-row>
        </div>
    </v-parallax>

    <v-dialog v-model="carousel" width="80%">
        <v-card class="grey darken-3">
            <v-card-title class="white--text black">

                {{carouselitem.title}}
                <v-spacer />
                <v-icon class="white--text" @click="carousel=!carousel">mdi-close</v-icon>

            </v-card-title>
            <v-carousel show-arrows-on-hover>
                <v-carousel-item v-for="(img,i) in carouselitem.img" :key="i" :src="'images/portfolio/'+img" contain cover></v-carousel-item>
            </v-carousel>
        </v-card>
    </v-dialog>

    <v-footer color="grey darken-4" dark>
        <v-card>
            <v-row class="mt-2 text-center grey--text">
                <v-col cols="12" md="4" sm="12" class="text-left">
                    <h2 class="white--text">ABOUT</h2>

                    {{summary}}

                </v-col>
                <v-col cols="12" md="4" sm="12" class="text-left">
                    <h2 id="reference" class="white--text">REFERENCES</h2>
                    <v-row>
                        <v-col cols="6" xl="4" lg="6" md="6" sm="4" v-for="(item,i) in reference" :key="i">
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
                        <v-btn v-for="icon in icons" :key="icon.icon" class="mx-4" icon :href="icon.link" target="_blank">
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
                    <img src="images/laravel.png" height="30" width="30" />
                    <img src="images/vue.png" height="30" width="30" />
                </v-col>
                <v-col cols="1" lg="4" sm="1"></v-col>
            </v-row>
        </v-card>
    </v-footer>

</v-card>
</template>

<script>
export default {
    data: () => ({
        summary:"A Technology Enthusiast with 1+ year of experience in web development and system support. Proficient in creating responsive user interfaces, writing and testing of codes, troubleshootings, database structure planning, and implementing new features based on client's request. Proven track record of improving system performance and enhancing user satisfaction.",
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
                title: 'Others',
                icon: 'mdi-robot-confused',
                items: ['Graphic Arts', 'Video Editing', 'Fire Safety']
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
                info: ['I take clients call to fix and make a program', 'I managed to propose a System Kaizen named "Access Manager"', 'As a team, we developed the Balcony Handrail Management System']
            },
            {
                company: 'INTERN - CVSU-CCAT - ElStudio',
                logo: 'CVSU.png',
                address: "EM's Barrio, Tejeros Convention, Rosario, Cavite",
                year: 'March 2 - May 28, 2023',
                role: 'Web Developer',
                info: ['I use pure HTML, CSS, Javascript and PHP to create a website', 'Developed the ElStudio I.D. System']
            }
        ],
        Portfolios: [{
                img: ['BHMLogin.PNG', 'BHMDashboard.PNG', 'BHMChecking.png'],
                title: 'Balcony Handrail Product Management System',
                info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vulputate hendrerit nisi, id dictum massa viverra eget. Integer venenatis iaculis velit ut pellentesque. Aenean iaculis sed eros id sodales. Vivamus egestas fermentum odio sit amet maximus. Ut lacinia enim imperdiet ante placerat, vitae ultrices elit porttitor. Donec maximus finibus nisl et facilisis. Nulla accumsan dictum ex, sed elementum nulla malesuada vitae. Cras tempor nisi a mi tempor euismod. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Pellentesque sed posuere turpis. Sed vel auctor mauris, et tempus lacus. Duis vehicula ex purus, quis sagittis dolor finibus tincidunt.'
            },
            {
                img: ['AMTable.PNG', 'AMTable2.PNG', 'AMDialog.png'],
                title: 'Access Manager',
                info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vulputate hendrerit nisi, id dictum massa viverra eget. Integer venenatis iaculis velit ut pellentesque. Aenean iaculis sed eros id sodales. Vivamus egestas fermentum odio sit amet maximus. Ut lacinia enim imperdiet ante placerat, vitae ultrices elit porttitor. Donec maximus finibus nisl et facilisis. Nulla accumsan dictum ex, sed elementum nulla malesuada vitae. Cras tempor nisi a mi tempor euismod. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Pellentesque sed posuere turpis. Sed vel auctor mauris, et tempus lacus. Duis vehicula ex purus, quis sagittis dolor finibus tincidunt.'
            },
            {
                img: ['ElsHome.png', 'ElsScan.png', 'ElsQR.png'],
                title: 'ElStudio I.D. System',
                info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vulputate hendrerit nisi, id dictum massa viverra eget. Integer venenatis iaculis velit ut pellentesque. Aenean iaculis sed eros id sodales. Vivamus egestas fermentum odio sit amet maximus. Ut lacinia enim imperdiet ante placerat, vitae ultrices elit porttitor. Donec maximus finibus nisl et facilisis. Nulla accumsan dictum ex, sed elementum nulla malesuada vitae. Cras tempor nisi a mi tempor euismod. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Pellentesque sed posuere turpis. Sed vel auctor mauris, et tempus lacus. Duis vehicula ex purus, quis sagittis dolor finibus tincidunt.'
            },
            {
                img: ['PetAdopt.png', 'PetHome.png'],
                title: 'WCMS: Pet Adopt Website',
                info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vulputate hendrerit nisi, id dictum massa viverra eget. Integer venenatis iaculis velit ut pellentesque. Aenean iaculis sed eros id sodales. Vivamus egestas fermentum odio sit amet maximus. Ut lacinia enim imperdiet ante placerat, vitae ultrices elit porttitor. Donec maximus finibus nisl et facilisis. Nulla accumsan dictum ex, sed elementum nulla malesuada vitae. Cras tempor nisi a mi tempor euismod. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Pellentesque sed posuere turpis. Sed vel auctor mauris, et tempus lacus. Duis vehicula ex purus, quis sagittis dolor finibus tincidunt.'
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
    },
    methods: {
        mOpenCarousel(item, title) {
            this.carouselitem.img = item
            this.carouselitem.title = title
            console.log(this.carouselitem);
            this.carousel = true
            console.log(this.$vuetify.breakpoint.name);
        },
        mOpenOverlay(item, count, con) {
            if (con == 'exp') {
                this.overlaycount2 = count
                this.overlaytext2 = item
            } else {
                this.overlaycount = count
                this.overlaytext = item
            }

        },
        mShowOverlay(item) {

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
    }
}
</script>

<style scoped>
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

