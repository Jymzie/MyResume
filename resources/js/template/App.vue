<template>
<v-app id="inspire">
    <v-navigation-drawer app v-model="drawer" touchless
        mobile-breakpoint="0"
        :mini-variant="mini"
        :src="mini==false ? 'images/nav1.jpg' : ''"
        :color="mini == true ? 'grey darken-4' : ''" width="220">
        <v-system-bar />
       <v-list v-if="mini == true">
          <v-list-item class="px-2">
            <v-list-item-avatar>
              <v-img src="images/profile.jpg"></v-img>
            </v-list-item-avatar>
          </v-list-item>

          <v-list-item link @click="mini=!mini">
                <v-icon class="white--text">mdi-magnify-plus</v-icon>
          </v-list-item>
        </v-list>
        
        <v-list v-else><v-spacer/>
            <v-col class="text-right mb-n4">
                     <v-icon @click="mini=!mini">mdi-magnify-minus</v-icon>
             </v-col>           

            <v-img src="images/profile.jpg" width="150" class="rounded-circle elevation-10 mx-8 mt-2"></v-img>
            <v-tooltip right>
                <template v-slot:activator="{on, attr}">
                    <v-list-item link v-on="on" v-bind="attr">
                        <v-list-item-content>
                            <v-list-item-title class="graytext font-weight-bold text-center">Jimwell C. Punzalan</v-list-item-title>
                            <v-list-item-subtitle class="graytext text-center">See More...

                                <v-icon>mdi-menu-right</v-icon>

                            </v-list-item-subtitle>
                        </v-list-item-content>

                    </v-list-item>
                </template>
                
                <h5 v-for="(item,i) in detail" :key="i" :class="item.icon == '' ? 'blue--text font-italic text-center':'white--text'">
                    <v-icon v-if="item.icon != ''" class="blue--text mr-2">{{item.icon}}</v-icon>
                    {{item.text}}
                </h5>

            </v-tooltip>
        </v-list>

        <v-divider/>
        <v-list shaped dense class="grey--text align-center">
            <v-list-item v-for="(item, i) in items" :key="i" :to="item.to">
                <v-list-item-icon>
                    <v-icon class="white--text">{{item.icon}}</v-icon>
                </v-list-item-icon>
                <v-list-item-content>
                    <v-list-item-title class="white--text">{{item.text}}</v-list-item-title>
                </v-list-item-content>
            </v-list-item>
        </v-list>
    </v-navigation-drawer>

    <v-speed-dial v-model="fab" top elevation-10 right direction="bottom" transition="slide-y-transition">
        <template v-slot:activator>
            <v-btn v-model="fab" color="blue darken-2" dark fab>
                <v-icon v-if="fab">
                    mdi-package-variant
                </v-icon>
                <v-icon v-else>
                    mdi-package-variant-closed
                </v-icon>
            </v-btn>
        </template>
        <v-tooltip left v-for="(item,i) in speeddials" :key="i">
            <template v-slot:activator="{on, attr}">
                <v-btn v-on="on" v-bind="attr" fab dark @click="item.text == 'Download Resume' ? mDownload() : email=!email" small :color="item.color">
                    <v-icon>{{item.icon}}</v-icon>
                </v-btn>
            </template>
            <span>{{item.text}}</span>
        </v-tooltip>

    </v-speed-dial>

    <v-main>
        <router-view/>
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
        fab: false,
        email: false,
        message: {},
        file: 'Resume - Punzalan, Jimwell C.pdf',
        drawer: true,
        mini:true,
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
                text: 'PORTFOLIOS',
                icon: 'mdi-folder',
                to: {
                    name: 'Contents',
                    hash: '#portfolios'
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
                text: 'SKILLS',
                icon: 'mdi-puzzle',
                to: {
                    name: 'Contents',
                    hash: '#skill'
                }
            },
            {
                text: 'TECHNICAL SKILLS',
                icon: 'mdi-cogs',
                to: {
                    name: 'Contents',
                    hash: '#tskill'
                }
            },
            {
                text: 'REFERENCES',
                icon: 'mdi-card-account-phone',
                to: {
                    name: 'Contents',
                    hash: '#reference'
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
                text: '(+63) 961-122-9773'
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
                text: 'Send e-mail',
                icon: 'mdi-email',
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
    },
    methods: {
        mDownload() {
            // axios.get(`api/Download/create?path=${this.file}`, {
            //         responseType: 'blob'
            //     })
            //     .then(res => {
            //         const url = window.URL.createObjectURL(new Blob([res.data]))
            //         const link = document.createElement("a");
            //         link.href = url
            //         link.setAttribute("download", this.file)
            //         document.body.appendChild(link)
            //         link.click();
            //         link.remove();
            //         this.$toast.success('Download Successfully!', 'OK', this.notificationSystem.options.success)
            //     })
             window.open('https://drive.google.com/uc?export=download&id=1ECbvv66sDgqQ0B-gz3mIRok_4d0BFNJq', '_blank');
        },
        mSend() {
            console.log(this.message)
            axios.post('api/Download',this.message)
            .then(res => {
                this.email = false
                this.$toast.success('E-mail Sent!', 'OK', this.notificationSystem.options.success)
            }).catch(({response}) => {
                this.$toast.error(response.data, 'Error', this.notificationSystem.options.error)
            })
            
        }
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
    }
}
</script>

<style scoped>
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
