<template>
<v-app id="inspire">
    <v-scroll-x-transition>
        <v-navigation-drawer v-if="this.$route.path == '/' && $vuetify.breakpoint.width > 430  && !intro" app v-model="drawer" touchless mobile-breakpoint="0" :mini-variant="mini" class="navcolor" width="220">

            <v-list v-if="mini == true">
                <v-list-item class="px-2">
                    <v-list-item-avatar>
                        <v-img src="images/profile.webp"></v-img>
                    </v-list-item-avatar>
                </v-list-item>

                <v-list-item link @click="mini=!mini" v-show="$vuetify.breakpoint.width >= 931">
                    <v-icon class="white--text iconhover" @mouseenter="SoundEffect('slide')">mdi-magnify-plus</v-icon>
                </v-list-item>
            </v-list>

            <v-list v-else>
                <v-spacer />
                <v-col class="text-right mb-n4">
                    <v-icon class="iconhover" @click="mini=!mini" @mouseenter="SoundEffect('slide')">mdi-magnify-minus</v-icon>
                </v-col>

                <v-img src="images/profile.webp" width="150" class="rounded-circle elevation-10 mx-8 mt-2"></v-img>
                <v-tooltip right>
                    <template v-slot:activator="{on, attr}">
                        <v-list-item link v-on="on" v-bind="attr">
                            <v-list-item-content>
                                <v-list-item-title class="white--text font-weight-bold text-center">Jimwell C. Punzalan</v-list-item-title>
                                <v-list-item-subtitle class="white--text text-center">IT Specialist </v-list-item-subtitle>
                            </v-list-item-content>

                        </v-list-item>
                    </template>

                    <h5 v-for="(item,i) in detail" :key="i" :class="item.icon == '' ? 'blue--text font-italic text-center':'white--text'">
                        <v-icon v-if="item.icon != ''" class="blue--text mr-2">{{item.icon}}</v-icon>
                        {{item.text}}
                    </h5>

                </v-tooltip>
            </v-list>

            <v-divider />
            <v-list-item :ripple="false" v-for="(item, i) in items" :key="i" :to="item.to" @click="SoundEffect('select')">
                <v-list-item-icon>
                    <v-icon :class="currentview.includes(item.text) ? 'light-blue--text iconhover':'white--text iconhover'" @mouseenter="SoundEffect('slide')">{{item.icon}}</v-icon>
                </v-list-item-icon>
                <v-list-item-content>
                    <v-list-item-title class="white--text">{{item.text}}</v-list-item-title>
                </v-list-item-content>
            </v-list-item>

        </v-navigation-drawer>
    </v-scroll-x-transition>
    <v-scale-transition>
        <v-speed-dial v-if="this.$route.path == '/' && !intro" v-model="fab" top elevation-10 right direction="bottom" transition="slide-y-transition">
            <template v-slot:activator>
                <v-btn v-model="fab" color="titlecolor" @click="SoundEffect('select')" dark fab>
                    <v-icon v-if="fab" @mouseenter="SoundEffect('slide')" class="iconhover">
                        mdi-package-variant
                    </v-icon>
                    <v-icon v-else @mouseenter="SoundEffect('slide')" class="iconhover">
                        mdi-package-variant-closed
                    </v-icon>
                </v-btn>
            </template>
            <v-tooltip left v-for="(item,i) in items" :key="i">
                <template v-slot:activator="{on, attr}">
                    <v-btn v-on="on" v-bind="attr" fab dark :to="item.to" small v-show="$vuetify.breakpoint.width <= 430">
                        <v-icon :class="currentview.includes(item.text) ? 'light-blue--text iconhover':'white--text iconhover'">{{item.icon}}</v-icon>
                    </v-btn>
                </template>
                <span>{{item.text}}</span>
            </v-tooltip>
            <v-tooltip left v-for="(item,i) in speeddials" :key="i">
                <template v-slot:activator="{on, attr}">
                    <!-- <v-btn v-on="on" v-bind="attr" fab dark @click="item.text == 'Download Resume' ? mDownload() : email=!email" small :color="item.color"> -->
                    <v-btn v-on="on" v-bind="attr" fab dark @click="item.text == 'Download Resume' ? mDownload() : mOpenDocs()" small :color="item.color">
                        <v-icon class="iconhover">{{item.icon}}</v-icon>
                    </v-btn>
                </template>
                <span>{{item.text}}</span>
            </v-tooltip>

        </v-speed-dial>
    </v-scale-transition>
    <v-main class="momentum">
        <router-view width="device-width" :SoundEffect="SoundEffect" :notificationSystem="notificationSystem" :detail="detail" :message="message" :intro="intro" @currentanchor="UpdateAnchor" @triggerintro="intro = false" />
    </v-main>

    <v-dialog v-model="email" width="50%" persistent>
        <v-card>
            <v-card-title class="black white--text font-weight-bold">
                <v-icon x-large class="mx-2 blue--text">mdi-email</v-icon>
                Send Email
                <v-spacer />
                <v-icon x-large class="red--text" @click="email=!email">mdi-close-circle</v-icon>
            </v-card-title>
            <v-card-text>
                <v-row class="mt-2">
                    <v-col>
                        <v-text-field outlined dense placeholder="Name" v-model="message.name"></v-text-field>
                    </v-col>
                    <v-col>
                        <v-text-field outlined dense placeholder="Email" v-model="message.email"></v-text-field>
                    </v-col>
                </v-row>
                <v-row class="mt-n7">
                    <v-col cols="5">
                        <v-text-field outlined dense placeholder="Title" v-model="message.title"></v-text-field>
                        <v-spacer />
                        <v-card-actions class="justify-center">
                            <v-btn :disabled='Filled' @click="mSend" class="text-center blue white--text">
                                SEND
                                <v-icon>mdi-send</v-icon>
                            </v-btn>
                        </v-card-actions>

                    </v-col>
                    <v-col cols="7">
                        <v-textarea outlined dense placeholder="Content..." v-model="message.content"></v-textarea>
                    </v-col>
                </v-row>

            </v-card-text>
        </v-card>
    </v-dialog>
</v-app>
</template>

<script>
export default {
    data: () => ({
        currentview: [],
        fab: false,
        email: false,
        message: {
            title: 'HEllo'
        },
        file: 'Resume - Punzalan, Jimwell C.jpg',
        drawer: true,
        mini: true,
        intro: true,
        items: [{
                text: 'SUMMARY',
                icon: 'mdi-book-open-page-variant',
                to: {
                    name: 'Contents',
                    hash: '#summary'
                }
            },
            {
                text: 'EDUCATION',
                icon: 'mdi-school',
                to: {
                    name: 'Contents',
                    hash: '#education'
                }
            },
            {
                text: 'EXPERIENCE',
                icon: 'mdi-briefcase-variant',
                to: {
                    name: 'Contents',
                    hash: '#experience'
                }
            },
            {
                text: 'PORTFOLIO',
                icon: 'mdi-folder',
                to: {
                    name: 'Contents',
                    hash: '#portfolio'
                }
            },

            {
                text: 'REFERENCES',
                icon: 'mdi-card-account-phone',
                to: {
                    name: 'Contents',
                    hash: '#references'
                }
            }
        ],
        detail: [{
                icon: 'mdi-home',
                text: '245 Purok 1, Tejero, Gen.Trias, Cavite'
            },
            {
                icon: 'mdi-email',
                text: 'punzalanjimwell@gmail.com'
            },
            {
                icon: 'mdi-phone',
                text: '(+63) 976-453-8964'
            },
            {
                icon: '',
                text: `"Time matters: can be wasted, but can't regain"`
            }
        ],
        speeddials: [{
                text: 'Download Resume',
                icon: 'mdi-download',
                color: 'green'
            },
            {
                text: 'Documents',
                icon: 'mdi-file-document-multiple-outline',
                color: 'indigo'
            }
        ],
        notificationSystem: {
            options: {
                show: {
                    theme: "dark",
                    icon: "icon-person",
                    position: "topCenter",
                    progressBarColor: "rgb(0, 255, 184)",
                    buttons: [
                        [
                            "<button>Ok</button>",
                            function (instance, toast) {
                                alert("Hello world!");
                            },
                            true
                        ],
                        [
                            "<button>Close</button>",
                            function (instance, toast) {
                                instance.hide({
                                        transitionOut: "fadeOutUp",
                                        onClosing: function (instance, toast, closedBy) {
                                            console.info("closedBy: " + closedBy);
                                        }
                                    },
                                    toast,
                                    "buttonName"
                                );
                            }
                        ]
                    ],
                    onOpening: function (instance, toast) {
                        console.info("callback abriu!");
                    },
                    onClosing: function (instance, toast, closedBy) {
                        console.info("closedBy: " + closedBy);
                    }
                },
                ballon: {
                    balloon: true,
                    position: "bottomCenter"
                },
                info: {
                    position: "bottomLeft"
                },
                success: {
                    position: "bottomRight"
                },
                warning: {
                    position: "topLeft"
                },
                error: {
                    position: "topRight"
                },
                question: {
                    timeout: 20000,
                    close: false,
                    overlay: true,
                    toastOnce: true,
                    id: "question",
                    zindex: 999,
                    position: "center",
                    buttons: [
                        [
                            "<button><b>YES</b></button>",
                            function (instance, toast) {
                                instance.hide({
                                    transitionOut: "fadeOut"
                                }, toast, "button");
                            },
                            true
                        ],
                        [
                            "<button>NO</button>",
                            function (instance, toast) {
                                instance.hide({
                                    transitionOut: "fadeOut"
                                }, toast, "button");
                            }
                        ]
                    ],
                    onClosing: function (instance, toast, closedBy) {
                        console.info("Closing | closedBy: " + closedBy);
                    },
                    onClosed: function (instance, toast, closedBy) {
                        console.info("Closed | closedBy: " + closedBy);
                    }
                }
            }
        }
    }),
    created() {
        this.drawer = true
        this.detectOrientation()

    },
    // mounted() {
    //     this.detectOrientation()
    //     window.addEventListener('resize', this.detectOrientation);
    // },
    // beforeUnmount() {
    //     window.removeEventListener('resize', this.detectOrientation);
    // },
    methods: {
        UpdateAnchor(data) {
            if (data[0].isIntersecting)
                this.currentview.push(data[0].target.id.toUpperCase())
            else {
                let index = this.currentview.indexOf(data[0].target.id.toUpperCase())
                if (index != -1)
                    this.currentview.splice(index, 1)
            }
        },
        detectOrientation() {
            // if (/Android|Mac|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
            //     this.isMobile = true
            // } else {
            //     this.isMobile = false
            // }'
        },
        SoundEffect(track) {
            let sound = new Audio(`soundeffect/${track}.mp3`)
            sound.play()
        },
        // mDownload() {
        //     this.SoundEffect('select')
        //     axios.get(`api/Download/create?path=${this.file}`, {
        //             responseType: 'blob'
        //         })
        //         .then(res => {
        //             const url = window.URL.createObjectURL(new Blob([res.data]))
        //             const link = document.createElement("a");
        //             link.href = url
        //             link.setAttribute("download", this.file)
        //             document.body.appendChild(link)
        //             link.click();
        //             link.remove();
        //             this.$toast.success('Download Successfully!', 'OK', this.notificationSystem.options.success)

        //         })
        //         .finally(res =>{
        //             this.SoundEffect('success')
        //         })
        // },
        mDownload() {
            this.SoundEffect('select')
            window.open('https://drive.google.com/uc?export=download&id=1ECbvv66sDgqQ0B-gz3mIRok_4d0BFNJq', '_blank');

            setTimeout(() => {
                this.$toast.success('Download Successfully!', 'OK', this.$store.state.notificationSystem.options.success)
                this.SoundEffect('success')
            }, 500)
        },
        mOpenDocs() {
            this.SoundEffect('select')
            window.open('https://drive.google.com/drive/folders/1YqL7a7piEq4LjH0-X6ifiwhuKQFNiu0f?usp=drive_link', '_blank');
        },
        mSend() {
            console.log(this.message)
            axios.post('api/Download', this.message)
                .then(res => {
                    this.email = false
                    this.$toast.success('E-mail Sent!', 'OK', this.notificationSystem.options.success)
                }).catch(({
                    response
                }) => {
                    this.$toast.error(response.data, 'Error', this.notificationSystem.options.error)
                })

        },

    },
    computed: {
        Filled() {
            if ((this.message.name == null || this.message.name == '') ||
                (this.message.email == null || this.message.email == '') ||
                (this.message.title == null || this.message.title == '') ||
                (this.message.content == null || this.message.content == ''))
                return true
            else
                return false
        }
    },
    watch: {
        mini(val) {
            if (val == false)
                this.SoundEffect('select')
            else
                this.SoundEffect('close')
        }
    }
}
</script>

<style scoped>
.navcolor {
    background: linear-gradient(253deg, rgba(124, 143, 161, 1) 0%, rgba(79, 94, 110, 1) 18%, rgba(20, 36, 50, 1) 71%, blue 86%, rgba(20, 36, 50, 1) 100%);
}

.graytext {
    color: gray !important;
}

.whitetext {
    color: white !important;
}

.v-speed-dial {
    position: fixed;
}

.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.5s;
}

.fade-enter-from,
.fade-leave-to {
    opacity: 0;
}
</style>
