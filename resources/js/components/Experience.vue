<template>
<div>
   

        <v-row>
            <v-col cols="12" class="text-center ">
                <v-icon x-large class="blue--text mx-2 pb-5 textshadow">mdi-briefcase-variant</v-icon>
                <span class="font-weight-bold Pacifico titlesize textshadow">Experience</span>
                <br>
                <v-col cols="0" lg="12">
                </v-col>

            </v-col>
            <v-col :cols="$vuetify.breakpoint.width > 911 ? 5:12" style="margin:auto" class="text-center justify-center align-center d-flex gap-0">

                <!-- <v-icon x-large class="blue--text mx-2 pb-5"></v-icon>
                <span class="font-weight-bold Pacifico titlesize"></span> -->
                <v-timeline dense>
                    <v-timeline-item v-for="(item, i) in Experience" :key="i">
                        <template v-slot:icon>
                            <v-avatar>
                                <img :src="'images/'+item.logo">
                            </v-avatar>
                        </template>

                        <v-card :color="overlaytext.year == item.year ? '#142432' : ''">
                            <v-card-title class="font-weight-bold blue--text">
                                {{item.year}}
                            </v-card-title>
                            <v-card-text :class="overlaytext.year == item.year ? ' white--text' : ''">
                                <span class="font-weight-bold" style="font-size:120%">
                                    {{item.company}}</span>
                                <br>
                                {{item.address}}
                            </v-card-text>
                            <v-card-actions>
                                <v-spacer />
                                <v-btn x-small style="font-size:10px" @click="mHoverSelect(item,i)" :class="overlaytext.year != item.year? 'blue white--text':'grey'">
                                    <!-- {{overlaytext.year != item.year ? 'details' : ''}} -->
                                    <v-icon v-show="overlaytext.year != item.year">mdi-dots-horizontal</v-icon>

                                    <v-avatar v-show="overlaytext.year == item.year">
                                        <v-img src="images/fastforward.gif"></v-img>
                                    </v-avatar>
                                </v-btn>
                            </v-card-actions>

                        </v-card>

                    </v-timeline-item>
                </v-timeline>

            </v-col>
            <v-col :cols="$vuetify.breakpoint.width > 911 ? 7:12">
                <v-scroll-x-reverse-transition v-if="!overlaydialog || $vuetify.breakpoint.width < 912">
                    <v-card class="seethrough mt-5">
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
                                            <img :src="'images/skill/'+subitem+'.webp'" height="70" width="70">
                                            <p>{{subitem}}</p>
                                        </v-col>
                                    </v-row>

                                </v-list-group>
                            </v-list>

                        </v-card-text>
                    </v-card>
                </v-scroll-x-reverse-transition>
                <v-scroll-x-reverse-transition mode="out-in" v-else>
                    <v-img src="images/exp.webp" v-show="$vuetify.breakpoint.width > 911" height="600" class="customradius my-5 mr-5">
                        <v-col cols="12" class="text-right">
                            <v-icon right style="z-index:10" x-large class="text-right white--text closehover" @click="CloseDialog">mdi-close</v-icon>
                        </v-col>

                        <v-overlay :v-model="true" absolute color="#14143C" class="px-2">
                            <v-fade-transition mode="out-in">
                                <div :key="overlaytext.role">

                                    <span class="text-h5"><b>Position:</b> <i class="Playfair">{{overlaytext.role}}</i></span>
                                    <br><br>
                                    <ul>
                                        <li v-for="(info,i) in overlaytext.info" :key="i" v-html="info"></li>
                                    </ul>

                                </div>
                            </v-fade-transition>
                        </v-overlay>
                    </v-img>
                </v-scroll-x-reverse-transition>
            </v-col>
        </v-row>

    <v-dialog v-model="exptip" fullscreen>

        <v-img src="images/exp.webp" height="600" class="customradius my-5 mr-5">
            <v-col cols="12" class="text-right">
                <v-icon right style="z-index:10" x-large class="text-right white--text closehover" @click="CloseDialog">mdi-close</v-icon>
            </v-col>

            <v-overlay :v-model="true" absolute color="#14143C" class="px-2">
                <v-fade-transition mode="out-in">
                    <div :key="overlaytext.role">

                        <span class="text-h5"><b>Position:</b> <i class="Playfair">{{overlaytext.role}}</i></span>
                        <br><br>
                        <ul>
                            <li v-for="(info,i) in overlaytext.info" :key="i" v-html="info"></li>
                        </ul>

                    </div>
                </v-fade-transition>
            </v-overlay>
        </v-img>
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
        overlaydialog: false,
        overlaycount: 0,
        overlaytext: '',
        exptip: false,
        toportfolio:'sa',
        Experience: [{
                company: 'H.R.D. SINGAPORE PTE LTD',
                logo: 'HRD.webp',
                address: 'Block 3, Cavite Economic Zone III, Gen. Trias, Cavite',
                year: 'Nov 6, 2023 - PRESENT',
                startdate: 'Nov 6, 2023',
                role: 'Programmer / IT Support',
                color: 'purple',
                info: ["Diagnose and troubleshoots company's website/systems.",
                    "Developed a system/function that enhanced the production's work efficiency.",
                    "Contributed a Kaizen named <b style='color:#BBDEFB'><a href='BarChart' target='_blank'>Access Manager</a></b> to systemize user's access permission to Barchart Maker and Shukka System.",
                    "Developed a website system named <b style='color:#BBDEFB'><a href='Plan' target='_blank'>Balcony Handrail Management System</a></b> for Paperless and Real-Time Process Monitoring.",
                    "Developed a website system named <b style='color:#BBDEFB'><a href='View' target='_blank'>Nail Pitch System</a></b> to track the HTI i-Cube production data."
                ]
            },
            {
                company: 'INTERN - CVSU-CCAT - ElStudio',
                logo: 'CVSU.webp',
                address: "EM's Barrio, Tejeros Convention, Gen. Trias, Cavite",
                year: 'March 2 - May 28, 2023',
                startdate: 'March 2, 2023',
                role: 'Web Developer',
                color: 'green',
                info: ['Applied the basic front end languages for website development (HTML, CSS, Javascript and PHP).',
                    "Developed the <b style='color:#BBDEFB'>ElStudio I.D. System</b> that creates and scan QR codes for Biometric purposes."
                ]
            },

        ],
        technicalskills: [{
                title: 'Languages',
                icon: 'mdi-xml',
                items: ['HTML', 'CSS', 'Javascript', 'PHP', 'Java', 'C']
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
    }),
    methods: {
        handleClick(event) {
      console.log('Clicked!');},
        CloseDialog() {
                this.exptip = false
            this.overlaydialog = false
            this.overlaytext = ''
            this.SoundEffect('close')
            console.log(this.toportfolio);
        },
        mHoverSelect(item, count) {
            if (this.$vuetify.breakpoint.width < 911)
                this.exptip = true
            this.SoundEffect('slide')
            this.overlaycount = count
            this.overlaytext = item
            this.overlaydialog = true
        },
        mSlideCarousel(item) {
            this.SoundEffect('slide')
            if (item == 2) {
                this.overlaycount++
                if (this.overlaycount == 2)
                    this.overlaycount = 0
                this.overlaytext = this.Experience[this.overlaycount]

            } else {
                this.overlaycount--
                if (this.overlaycount == -1)
                    this.overlaycount = 1
                this.overlaytext = this.Experience[this.overlaycount]

            }

        },
    },
    watch:{
        toportfolio(val){
            
            console.log(val)
        }
    }
}
</script>

<style>
.custom-outline {
    border-color: #ff4081 !important;
}

.timeline {
    margin-top: 20px;
    position: relative;

}

.timeline:before {
    position: absolute;
    content: '';
    width: 4px;
    height: calc(100% + 50px);
    background: rgb(138, 145, 150);
    background: -moz-linear-gradient(left, rgba(138, 145, 150, 1) 0%, rgba(122, 130, 136, 1) 60%, rgba(98, 105, 109, 1) 100%);
    background: -webkit-linear-gradient(left, rgba(138, 145, 150, 1) 0%, rgba(122, 130, 136, 1) 60%, rgba(98, 105, 109, 1) 100%);
    background: linear-gradient(to right, rgba(138, 145, 150, 1) 0%, rgba(122, 130, 136, 1) 60%, rgba(98, 105, 109, 1) 100%);
    filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#8a9196', endColorstr='#62696d', GradientType=1);
    left: 14px;
    top: 5px;
    border-radius: 4px;
}

.timeline-month {
    position: relative;
    padding: 4px 15px 4px 35px;
    background-color: #444950;
    display: inline-block;
    width: auto;
    border-radius: 40px;
    border: 1px solid #17191B;
    border-right-color: black;
    margin-bottom: 30px;
}

.timeline-month span {
    position: absolute;
    top: -1px;
    left: calc(100% - 10px);
    z-index: -1;
    white-space: nowrap;
    display: inline-block;
    background-color: #111;
    padding: 4px 10px 4px 20px;
    border-top-right-radius: 40px;
    border-bottom-right-radius: 40px;
    border: 1px solid black;
    box-sizing: border-box;
}

.timeline-month:before {
    position: absolute;
    content: '';
    width: 20px;
    height: 20px;
    background: rgb(138, 145, 150);
    background: -moz-linear-gradient(top, rgba(138, 145, 150, 1) 0%, rgba(122, 130, 136, 1) 60%, rgba(112, 120, 125, 1) 100%);
    background: -webkit-linear-gradient(top, rgba(138, 145, 150, 1) 0%, rgba(122, 130, 136, 1) 60%, rgba(112, 120, 125, 1) 100%);
    background: linear-gradient(to bottom, rgba(138, 145, 150, 1) 0%, rgba(122, 130, 136, 1) 60%, rgba(112, 120, 125, 1) 100%);
    filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#8a9196', endColorstr='#70787d', GradientType=0);
    border-radius: 100%;
    border: 1px solid #17191B;
    left: 5px;
}

.timeline-section {
    padding-left: 35px;
    display: block;
    position: relative;
    margin-bottom: 30px;
}

.timeline-date {
    margin-bottom: 15px;
    padding: 2px 15px;
    background: linear-gradient(#74cae3, #5bc0de 60%, #4ab9db);
    position: relative;
    display: inline-block;
    border-radius: 20px;
    border: 1px solid #17191B;
    color: #fff;
    text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.3);
}

.timeline-section:before {
    content: '';
    position: absolute;
    width: 30px;
    height: 1px;
    background-color: #444950;
    top: 12px;
    left: 20px;
}

.timeline-section:after {
    content: '';
    position: absolute;
    width: 10px;
    height: 10px;
    background: linear-gradient(to bottom, rgba(138, 145, 150, 1) 0%, rgba(122, 130, 136, 1) 60%, rgba(112, 120, 125, 1) 100%);
    top: 7px;
    left: 11px;
    border: 1px solid #17191B;
    border-radius: 100%;
}

.timeline-section .col-sm-4 {
    margin-bottom: 15px;
}

.timeline-box {
    position: relative;

    background-color: #444950;
    border-radius: 15px;
    border-top-left-radius: 0px;
    border-bottom-right-radius: 0px;
    border: 1px solid #17191B;
    transition: all 0.3s ease;
    overflow: hidden;
}

.box-icon {
    position: absolute;
    right: 5px;
    top: 0px;
}

.box-title {
    padding: 5px 15px;
    border-bottom: 1px solid #17191B;
}

.box-title i {
    margin-right: 5px;
}

.box-content {
    padding: 5px 15px;
    background-color: #17191B;
}

.box-content strong {
    color: #666;
    font-style: italic;
    margin-right: 5px;
}

.box-item {
    margin-bottom: 5px;
}

.box-footer {
    padding: 5px 15px;
    border-top: 1px solid #17191B;
    background-color: #444950;
    text-align: right;
    font-style: italic;
}

.v-input--switch:not(.v-input--switch--flat):not(.v-input--switch--inset) .v-input--switch__thumb {
    color: purple
}

.theme--light.v-input--switch .v-input--switch__track {
    color: purple
}
b a{
    text-decoration: none;
    color: #BBDEFB !important;
    cursor: pointer;
    
}
</style>
