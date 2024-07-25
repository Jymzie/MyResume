<template>
    <v-container>
        <v-card class="seethrough" id="top">
            <v-card-title class="black white--text font-weight-bold">
                <v-icon x-large class="blue--text mx-2">mdi-information-outline</v-icon>
                SUMMARY
            </v-card-title>
            <v-card-text >
                <p class="ma-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vulputate hendrerit nisi, id dictum massa viverra eget. Integer venenatis iaculis velit ut pellentesque. Aenean iaculis sed eros id sodales. Vivamus egestas fermentum odio sit amet maximus. Ut lacinia enim imperdiet ante placerat, vitae ultrices elit porttitor. Donec maximus finibus nisl et facilisis. Nulla accumsan dictum ex, sed elementum nulla malesuada vitae. Cras tempor nisi a mi tempor euismod. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Pellentesque sed posuere turpis. Sed vel auctor mauris, et tempus lacus. Duis vehicula ex purus, quis sagittis dolor finibus tincidunt.</p>
            </v-card-text>
        </v-card>
        
        <v-row class="my-5">
            <v-col cols="6">
                <v-card class="seethrough">
                    <v-card-title class="black white--text font-weight-bold">
                        <v-icon x-large class="blue--text mx-2">mdi-school</v-icon>
                        EDUCATION
                    </v-card-title>
                    <v-card-text >

                        <v-hover v-for="(item, i) in Education" :key="i">
                            <template v-slot:default="{ hover }">
                                <v-card class="mt-3">
                                    <v-card-text class="text-center">
                                        <v-row>
                                            <v-col cols="2">
                                                    <v-img src="images/profile.jpg" width="75" class="rounded-circle elevation-10 mx-1"></v-img>
                                            </v-col>
                                            <v-col cols="10">
                                                <h2>{{item.school}}</h2>
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
                                                <span>{{item.year}}</span>
                                                <br>
                                                {{item.course}}
                                                <br>
                                                <span v-if="item.award != ''" class="yellow--text"><v-icon class="yellow--text">mdi-medal</v-icon>
                                                {{item.award}}
                                                </span>
                                            </v-overlay>
                                        </v-expand-x-transition>

                                </v-card>
                            </template>
                        </v-hover>
                    </v-card-text>
                </v-card>
            </v-col>

            <v-col cols="6">
                <transition class="test2">
                    <v-card class="seethrough">
                        <v-card-title class="black white--text font-weight-bold">
                            <v-icon x-large class="blue--text mx-2">mdi-certificate</v-icon>
                            REFERENCES
                        </v-card-title>
                        <v-card-text >
                            <v-row>
                                <v-col>
                                    Ms. Jane Doe
                                    <v-card-subtitle>Teacher</v-card-subtitle>
                                    096214124
                                </v-col>
                                <v-col>
                                    Ms. Jane Doe
                                    <v-card-subtitle>Teacher</v-card-subtitle>
                                    096214124
                                </v-col>
                            </v-row>
                        </v-card-text>
                    </v-card>
                </transition>
               
            </v-col>
        </v-row>
    </v-container>
    
</template>

<script>
export default {
    data(){
        return{
            Education:[{school:'CAVITE STATE UNIVERSITY - CCAT', address:'Tejeros Convention, Cavite', year:'2018-2023', course:'Bachelor of Science in Information Technology (BSIT)', award:'CUM LAUDE'},
                {school:'SAINT AUGUSTINE - SENIOR HIGH', address:'Tanza, Cavite', year:'2016-2018', course:'Senior High School - STEM Strand', award:''},
                {school:'SAINT AUGUSTINE SCHOOL', address:'Tanza, Cavite', year:'2012-2016', course:'Junior High School', award:'BEST IN DEPORTMENT'},
            ]
        }
    }
}
</script>