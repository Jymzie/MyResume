<template>
  <v-container>
    <v-row class="my-5">
        <v-col cols="6">
            <v-card class="seethrough" id="top">
                <v-card-title class="black white--text font-weight-bold">
                    <v-icon x-large class="blue--text mx-2">mdi-briefcase-search</v-icon>
                    EXPERIENCE
                </v-card-title>
                <v-card-text >

                  <v-hover v-for="(item, i) in Experience" :key="i">
                        <template v-slot:default="{ hover }">
                            <v-card class="mt-3">
                                <v-card-text class="text-center">
                                    <v-row>
                                        <v-col cols="2">
                                          <v-img src="images/profile.jpg" width="75" class="rounded-circle elevation-10 mx-1"></v-img>
                                        </v-col>
                                        <v-col cols="10">
                                            <h2>{{item.company}}</h2>
                                            <v-card-subtitle class="mb-n8 mt-n3">{{item.year}}</v-card-subtitle>
                                            <v-card-subtitle>{{item.address}}</v-card-subtitle>
                                        </v-col>
                                    </v-row>
                                </v-card-text>

                                    <v-expand-x-transition>
                                        <v-overlay
                                            v-if="hover"
                                            absolute
                                            opacity="1"
                                            color="#14143C"
                                        >
                                          <h4 class="blue--text">{{item.role}}</h4>
                                          <v-list dense tile flat>
                                            <v-list-item v-for="(info,i) in item.info" :key="i"
                                              class="my-n4">
                                              {{info}}
                                            </v-list-item>
                                          </v-list>
                                            
                                            <br>
                                            
                                            
                                        </v-overlay>
                                    </v-expand-x-transition>

                            </v-card>
                        </template>
                    </v-hover>

                </v-card-text>
            </v-card>

            <v-row>
              <v-col cols="7">
                <v-card class="seethrough mt-5" id="testing">
                  <v-card-title class="black white--text font-weight-bold">
                      <v-icon x-large class="blue--text mx-2">mdi-cogs</v-icon>
                      TECHNICAL SKILLS
                  </v-card-title>
                  <v-card-text >

                    <v-list dense class="seethrough">

                      <v-list-group
                          v-for="item in technicalskills"
                          :key="item.title"
                          no-action
                          :prepend-icon="item.icon"
                        >
                          <template v-slot:activator>
                            <v-list-item-content>
                              <v-list-item-title>{{item.title}}</v-list-item-title>
                            </v-list-item-content>
                          </template>

                          <v-list-item
                            v-for="(subitem,i) in item.items"
                            :key="i"
                          >
                            
                            <v-list-item-content>
                            <v-list-item-title>{{subitem}}</v-list-item-title>
                            </v-list-item-content>
                            <v-list-item-icon>
                              <v-img src="images/profile.jpg" width="30"></v-img>
                            </v-list-item-icon>
                          </v-list-item>
                        </v-list-group>
                    </v-list>
                    
                  </v-card-text>
                </v-card>
              </v-col>

              <v-col cols="5">
                <v-card class="seethrough mt-5">
                  <v-card-title class="black white--text font-weight-bold">
                      <v-icon x-large class="blue--text mx-2">mdi-puzzle</v-icon>
                      SKILLS
                  </v-card-title>
                  <v-card-text >

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

        </v-col>

        <v-col cols="6">
            <transition class="test2">
                <v-card class="seethrough">
                    <v-card-title class="black white--text font-weight-bold">
                        <v-icon x-large class="blue--text mx-2">mdi-folder-pound</v-icon>
                        PORTFOLIOS
                    </v-card-title>
                    <v-card-text class="justify-center align-center mx-auto">
                      <v-hover v-for="(item, i) in Portfolios" :key="i">
                        <template v-slot:default="{ hover }">
                          <v-card class="black pa-1 ma-2 elevation-0">
                            <v-carousel show-arrows-on-hover cycle hide-delimiters height="40vh">
                              <v-carousel-item v-for="(img,i) in item.img" :key="i"
                                :src="'images/portfolio/'+img"
                                cover
                              ></v-carousel-item>

                            </v-carousel>
                              <span class="white--text d-flex justify-center">{{item.title}}</span>
                              <v-fade-transition>
                                <v-overlay
                                    v-if="hover"
                                    absolute
                                    color="#14143C"
                                >
          
                                    <v-btn class="blue" @click="mOpenCarousel(item.img)">
                                      <v-icon class="mr-2">mdi-expand-all</v-icon>
                                      Expand
                                    </v-btn>
                                    
                                </v-overlay>
                            </v-fade-transition>
                         
                          </v-card> 
                        </template>
                      </v-hover>
                    </v-card-text>
                </v-card>
            </transition>
            
        </v-col>
    </v-row>
    
    <v-dialog v-model="carousel" width="60%">
      <v-card> 
        <v-carousel show-arrows-on-hover height="100%" width="100%">
         <v-carousel-item v-for="(img,i) in carouselitem" :key="i"
            :src="'images/portfolio/'+img"
            cover
          ></v-carousel-item>
        </v-carousel>
      </v-card>
    </v-dialog>

  </v-container>
</template>

<script>
export default {
  data: () => ({
  carousel:false,
  carouselitem:[],
      technicalskills:[{title:'Languages', icon:'mdi-xml', items:['HTML', 'CSS', 'Javascript', 'PHP', 'Java', 'C++']},
        {title:'Frameworks', icon:'mdi-electron-framework', items:['Laravel', 'Vue', 'React']},
        {title:'Databases', icon:'mdi-database', items:['MsSQL', 'MySQL', 'MongoDB']},
        {title:'Others', icon:'mdi-robot-confused', items:['Graphic Arts', 'Video Editing', 'Fire Safety']}
      ],
      skills:[{text:'Adaptability', icon:'mdi-head-cog'},
        {text:'Communication', icon:'mdi-chat'},
        {text:'Creativity', icon:'mdi-palette'},
        {text:'Time Management', icon:'mdi-clock'},
        {text:'Problem Solving', icon:'mdi-lightbulb'}
      ],
      Experience:[{company:'H.R.D. SINGAPORE PTE LTD', address:'Block 3, Cavite Economic Zone III, Gen. Trias, Cavite', year:'Nov 6, 2023 - PRESENT',role:'Programmer / IT Support' , info:['I take clients call to fix and make a program','I managed to propose a System Kaizen named "Access Manager"', 'As a team, we developed the Balcony Handrail Management System']},
        {company:'INTERN - CVSU-CCAT - ElStudio', address:"EM's Barrio, Tejeros Convention, Gen. Trias, Cavite", year:'March 2 - May 28, 2023',role:'Web Developer' , info:['I use pure HTML, CSS, Javascript and PHP to create a website', 'Developed the ElStudio I.D. System']}],
      Portfolios:[{img:['BHMLogin.PNG','BHMDashboard.PNG', 'BHMChecking.png'], title:'Balcony Handrail Product Management System',info:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vulputate hendrerit nisi, id dictum massa viverra eget. Integer venenatis iaculis velit ut pellentesque. Aenean iaculis sed eros id sodales. Vivamus egestas fermentum odio sit amet maximus. Ut lacinia enim imperdiet ante placerat, vitae ultrices elit porttitor. Donec maximus finibus nisl et facilisis. Nulla accumsan dictum ex, sed elementum nulla malesuada vitae. Cras tempor nisi a mi tempor euismod. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Pellentesque sed posuere turpis. Sed vel auctor mauris, et tempus lacus. Duis vehicula ex purus, quis sagittis dolor finibus tincidunt.'},
        {img:['BHMDashboard.PNG','BHMLogin.PNG', 'BHMChecking.png'], title:'ElStudio I.D. System',info:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vulputate hendrerit nisi, id dictum massa viverra eget. Integer venenatis iaculis velit ut pellentesque. Aenean iaculis sed eros id sodales. Vivamus egestas fermentum odio sit amet maximus. Ut lacinia enim imperdiet ante placerat, vitae ultrices elit porttitor. Donec maximus finibus nisl et facilisis. Nulla accumsan dictum ex, sed elementum nulla malesuada vitae. Cras tempor nisi a mi tempor euismod. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Pellentesque sed posuere turpis. Sed vel auctor mauris, et tempus lacus. Duis vehicula ex purus, quis sagittis dolor finibus tincidunt.'},
        {img:['BHMDashboard.PNG','BHMLogin.PNG', 'BHMChecking.png'], title:'WCMS: Pet Adopt Website',info:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vulputate hendrerit nisi, id dictum massa viverra eget. Integer venenatis iaculis velit ut pellentesque. Aenean iaculis sed eros id sodales. Vivamus egestas fermentum odio sit amet maximus. Ut lacinia enim imperdiet ante placerat, vitae ultrices elit porttitor. Donec maximus finibus nisl et facilisis. Nulla accumsan dictum ex, sed elementum nulla malesuada vitae. Cras tempor nisi a mi tempor euismod. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Pellentesque sed posuere turpis. Sed vel auctor mauris, et tempus lacus. Duis vehicula ex purus, quis sagittis dolor finibus tincidunt.'}
      ],
      admins: [
        ['Management', 'mdi-account-multiple-outline'],
        ['Settings', 'mdi-arrow'],
      ]
  }),
  methods:{
    mOpenCarousel(item){
      this.carouselitem = item
      this.carousel = true
    }
  }
}
</script>