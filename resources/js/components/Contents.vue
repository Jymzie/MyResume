<template>
<v-card style="border-radius:0px" id="summary">

    <v-parallax id="summary" src="images/background.webp" :height="$vuetify.breakpoint.height > 933 ? 1400:($vuetify.breakpoint.height < 600? 600:940)">
        <v-fab-transition>
            <v-img v-show="!intro" src="images/photoprofile.webp" class=" justify-center align-center" contain height="900" eager>
                <v-lazy v-intersect.quiet="onIntersect" id="summary" v-model="isActive.summary" :options="{
          threshold: .5
        }" min-height="200" transition="scale-transition">
                    <SummaryVue :summary="summary" :icons="icons" :SoundEffect="SoundEffect" />
                </v-lazy>
            </v-img>
        </v-fab-transition>
    </v-parallax>

    <div class="titlecolor">

        <v-parallax id="education" style="padding: 100px 3vw 30px 3vw" src="images/parallax1.webp" :height="$vuetify.breakpoint.height > 933 ? 1500:1000">
            <v-lazy v-intersect.quiet="onIntersect" id="education" v-model="isActive.education" :options="{
          threshold: .5
        }" :min-height="$vuetify.breakpoint.height < 1366 ? 300:100" transition="scale-transition">

                <EducationVue :SoundEffect="SoundEffect"/>
            </v-lazy>
        </v-parallax>
    </div>

    <v-parallax id="experience" src="images/background.webp" :height="$vuetify.breakpoint.mobile && ($vuetify.breakpoint.height >= 667 || ($vuetify.breakpoint.height >= 540 && $vuetify.breakpoint.width >= 720)) ? 1600:1400">
        <v-lazy v-intersect.quiet="onIntersect" id="experience" v-model="isActive.experience" :options="{
          threshold: .5
        }" min-height="700" transition="scale-transition">
            <ExperienceVue :SoundEffect="SoundEffect"/>
        </v-lazy>
    </v-parallax>
    <div class="titlecolor">
        <v-parallax id="portfolio" src="images/collage.webp" :height="$vuetify.breakpoint.width <= 666 ? 1800:1200">
            <v-lazy v-intersect.quiet="onIntersect" id="portfolio" v-model="isActive.portfolio" :options="{
          threshold: .5
        }" min-height="700" transition="scale-transition">
                <PortfolioVue :SoundEffect="SoundEffect"/>
            </v-lazy>
        </v-parallax>
    </div>

    <!-- <v-parallax src="images/parallax3.jpg" height="1200">
        <SkillsVue :SoundEffect="SoundEffect"/>
    </v-parallax> -->
    <v-dialog v-model="intro" content-class="elevation-0" persistent>
        <div class="d-flex text-center">

            <v-col cols="0" lg="3" md="2" sm="0" v-show="$vuetify.breakpoint.name == 'xl' || $vuetify.breakpoint.name == 'lg' || $vuetify.breakpoint.name == 'md'"></v-col>
            <v-col cols="12" lg="6" md="8" sm="12" class="white--text">
                <v-row>
                    <v-col cols="12" lg="4" sm="4" :class="$vuetify.breakpoint.name == 'xs' ? 'text-center' : 'text-right'">
                        <img src="images/profile.webp" class="rounded-circle" width="140">
                    </v-col>
                    <v-col cols="12" lg="8" sm="8" :class="$vuetify.breakpoint.name == 'xs' ? 'text-center' : 'text-left'">
                        <h1 class="Playfair">Hey there!</h1>
                        <h1 class="Playfair">I'm <b class="Pacifico">Jimwell C. Punzalan</b>,</h1>
                        <h1 class="Playfair">A Versatile <b class="blue--text Pacifico">IT Specialist</b></h1>
                    </v-col>
                </v-row>
                <v-row>
                    <v-col cols="12" lg="7" sm="7">
                        <v-btn dark v-for="icon in icons" :key="icon.icon" class="mx-4" @click="SoundEffect('select')" icon :href="icon.link" target="_blank">
                            <v-icon large class="blue--text text-left iconhover" @mouseenter="SoundEffect('slide')" size="24px">
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

    <v-footer class="footcolor" dark>
        <div class="mb-2">
            <v-row class="mt-2 text-center grey--text">
                <v-col cols="12" md="4" sm="12" class="text-left">
                    <h2 class="white--text">ABOUT</h2>

                    {{summary}}

                </v-col>
                <v-col cols="12" md="4" :sm="$vuetify.breakpoint.width >= 739 && $vuetify.breakpoint.width <= 1280 ? 6:12" class="text-left">
                    <h2 v-intersect.quiet="onIntersect" id="references" class="white--text">REFERENCES</h2>
                    <v-row>
                        <v-col :cols="$vuetify.breakpoint.width <= 375 ? 12:6" xl="4" lg="6" md="12" :sm="$vuetify.breakpoint.width >= 667? 6: 12" v-for="(item,i) in reference" :key="i">

                            <v-list-item dense>
                                <v-list-item-content>
                                    <v-list-item-title>{{item.name}}</v-list-item-title>
                                    <v-list-item-subtitle>{{item.role}}</v-list-item-subtitle>
                                    <v-list-item-subtitle>{{item.contact}}</v-list-item-subtitle>
                                </v-list-item-content>
                            </v-list-item>

                        </v-col>
                    </v-row>
                </v-col>
                <v-col cols="12" md="4" :sm="$vuetify.breakpoint.width >= 740 && $vuetify.breakpoint.width <= 1280 ? 6:12" class="text-left" id="foot">
                    <h2 class="white--text">INFORMATION</h2>

                    <v-list-item dense v-for="(item,i) in detail" :key="i" v-show="item.icon != ''">
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

                    <br>
                    <v-col class="text-right">
                        <v-btn v-for="icon in icons" :key="icon.icon" class="mx-4" @click="SoundEffect('select')" icon :href="icon.link" target="_blank">
                            <v-icon x-large class="blue--text iconhover" @mouseenter="SoundEffect('slide')" size="24px">
                                {{ icon.icon }}
                            </v-icon>
                        </v-btn>
                    </v-col>

                </v-col>
            </v-row>
        </div>
    </v-footer>

</v-card>
</template>

<script>
import EducationVue from './Education.vue'
import ExperienceVue from './Experience.vue'
import PortfolioVue from './Portfolio.vue'
import SkillsVue from './Skills.vue'
import SummaryVue from './Summary.vue'

export default {
    components: {
        SummaryVue,
        EducationVue,
        ExperienceVue,
        PortfolioVue,
        SkillsVue
    },
    props: { //from App.vue
        SoundEffect: {
            type: Function
        },
        notificationSystem: {
            type: Object
        },
        detail: {
            type: Array
        },
        intro:{
            type: Boolean
        }
    },
    data: () => ({
        isActive: {
            summary: true,
            education: false,
            experience: false,
            portfolio: false
        },
        introtime: false,
        summary: "A Technology Enthusiast with 1+ year of experience in web development and system support. Proficient in creating responsive user interfaces, writing and testing of codes, troubleshootings, database structure planning, and implementing new features based on client's request. Proven track record of improving system performance and enhancing user satisfaction.",
        // icons: [{
        //         icon: 'mdi-facebook',
        //         link: 'https://www.google.com/'
        //     },
        //     {
        //         icon: 'mdi-linkedin',
        //         link: 'https://www.google.com/'
        //     },
        //     {
        //         icon: 'mdi-github',
        //         link: 'https://www.google.com/'
        //     },
        // ],
        icons: [{
                icon: 'mdi-facebook',
                link: 'https://www.facebook.com/jimwell.cruz.9'
            },
            {
                icon: 'mdi-linkedin',
                link: 'https://www.linkedin.com/in/jimwell-punzalan-80513830b/'
            },
            {
                icon: 'mdi-github',
                link: 'https://github.com/Jymzie'
            },
        ],

        reference: [{
                name: 'Aries M. Gelera',
                role: 'Director, Research and Extension',
                contact: '+63-935-163-2872',
                gmail: 'aries.gelera@cvsu.edu.ph'
            },
            {
                name: 'Karlo Jose E. Nabablit',
                role: 'Lecturer',
                contact: '+63-917-573-6767',
                gmail: 'karlojose.nabablit@cvsu.edu.ph'
            }
        ],
    }),
    mounted() {

        if (this.intro) {
            this.$router.replace('/').catch(err => {
                if (err.name === 'NavigationDuplicated') {

                } else {
                    throw err
                }
            })
        }
    },
    methods: {
        mOpenCover() {
            this.introtime = true
            this.SoundEffect('select')
            setTimeout(() => {
                this.$emit("triggerintro")
                this.$toast.show('Welcome!', 'Jymz:', this.notificationSystem.options.ballon)
                // const link = document.createElement("a");
                // link.href = "http://10.169.142.112/Resume/"
                // link.click();
                // link.remove();
                setTimeout(() => {
                    this.SoundEffect('success')
                }, 300)
            }, 800)

        },
        onIntersect(entries, observer, item) {
            this.isActive[entries[0].target.id] = item
            this.$emit("currentanchor", entries)
        },

    },

}
</script>

<style>
.iconcolor {
    color: linear-gradient(219deg, rgba(124, 143, 161, 1) 0%, rgba(79, 94, 110, 1) 18%, rgba(20, 36, 50, 1) 48%);
}

.boxcolor {
    background: linear-gradient(103deg, rgba(20, 36, 50, 1) 10%, rgba(76, 94, 110, 1) 74%, rgba(124, 143, 161, 1) 94%);

}

.footcolor {
    background: linear-gradient(180deg, rgba(124, 143, 161, 1) 0%, rgba(79, 94, 110, 1) 18%, rgba(20, 36, 50, 1) 48%);
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

.v-parallax_image {
    filter: brightness(10%);
}

#foot {
    background-image: url(/images/cat.gif);
    background-position: right;

}
</style>
