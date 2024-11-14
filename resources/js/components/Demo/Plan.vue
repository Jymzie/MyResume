<template>
<v-container fluid fixed>
    <v-btn style="margin-left: 15px;" absolute right fab small color="black" @click="$router.push('monitoring')">
        <v-icon color="white">mdi-close</v-icon>
    </v-btn>
    <h2>ACCESSORIES AND MATERIAL PREPARATION</h2>
    <!-- <h2 class="mb-4" v-if="$store.state.details.Process == 1">ACCESSORIES AND MATERIAL PREPARATION</h2> -->
    <!-- <h2 class="mb-4" v-else-if="$store.state.details.Process == 2">GLASS CHECKING AND FRAMING</h2>
    <h2 class="mb-4" v-else-if="$store.state.details.Process== 3">CUTTING</h2>

    <h2 class="mb-4" v-else-if="$store.state.details.Process== 4">BORING / HOLING</h2>
    <h2 class="mb-4" v-else-if="$store.state.details.Process== 5">MARKING AND MANUAL BORING</h2>
    <h2 class="mb-4" v-else-if="$store.state.details.Process== 6">UNIT ASSEMBLY & GLASS FITTING</h2>
    <h2 class="mb-4" v-else-if="$store.state.details.Process== 7">UNIT PACKING</h2>
    <h2 class="mb-4" v-else-if="$store.state.details.Process== 8">GLASS CLEANING AND PACKING</h2> -->


    <v-card style="border: 1px solid black; ">
        <v-card-text>
            <v-row>
                <v-col cols="4">
                    <v-row>
                        <v-col cols="5">
                            <h4 style="font-size: 1.2vw;" col>HOUSE CODE</h4>
                            <v-text-field dense outlined readonly v-model="MonitoringData[$store.state.planpage].NameCD"></v-text-field>
                        </v-col>
                        <v-col cols="7">
                            <h4 style="font-size: 1.2vw;" col>CUSTOMER CODE</h4>
                            <v-text-field dense outlined readonly v-model="MonitoringData[$store.state.planpage].CDNo"></v-text-field>
                        </v-col>
                    </v-row>
                </v-col>
                <v-col cols="8">
                    <v-row>
                        <v-col cols="5">
                            <h4 style="font-size: 1.2vw;" col>HINBAN</h4>
                            <v-text-field dense outlined readonly v-model="MonitoringData[$store.state.planpage].Hinban"></v-text-field>
                        </v-col>
                        <v-col cols="3">
                            <h4 style="font-size: 1.2vw;" col>REQUEST</h4>
                            <v-text-field dense outlined readonly v-model="MonitoringData[$store.state.planpage].DSTN"></v-text-field>
                        </v-col>
                        <v-col cols="4">
                            <v-card color="#CC0000" style="transform:translatey(-40%);border-radius: 15px 15px 15px 15px; border: solid black; z-index:2;">
                                <v-card-subtitle style="font-size: 1.4vw;" class="white--text mt-n2 ">STATUS</v-card-subtitle>
                                <v-card-text class="white--text text-center mt-2">
                                    <span style="font-size: 3vw;">{{ StatusCount }}/{{TableData.length}}</span>
                                </v-card-text>
                            </v-card>
                        </v-col>
                    </v-row>
                </v-col>

            </v-row>
            <hr class="mt-n10 mb-2">
            <v-card class="grey lighten-1">
                <!-- <v-card-text v-if="$store.state.details.Process == 1"> -->
                    <AccessoriesVue :AccessoriesTableData="TableData" :mOpenConfirmation="mOpenConfirmation" :mCheckFlg="mCheckFlg" :mRemark="mRemark" :ForConfirmationData="ForConfirmationData"/>
                <!-- </v-card-text> -->
                <!-- <v-card-text v-else-if="$store.state.details.Process == 5">
                    <MarkingAndManualBoringVue :MarkingTableData="TableData" :mOpenConfirmation="mOpenConfirmation" :mCheckFlg="mCheckFlg" :mRemark="mRemark" :ForConfirmationData="ForConfirmationData" :TypeTotal="TypeTotal" :TypeDone="TypeDone" :CurrentType="CurrentType" :mPrev="mPrev" :mNext="mNext" :type="Selectiontype"/>
                </v-card-text>
                <v-card-text v-else-if="$store.state.details.Process == 6">
                    <UnitAssembly :UnitAssemblyTableData="TableData" :mOpenConfirmation="mOpenConfirmation" :mCheckFlg="mCheckFlg" :mRemark="mRemark" />
                </v-card-text>
                <v-card-text v-else-if="$store.state.details.Process == 2">
                    <GlassCheckingAndFramingVue :GlasscheckingAndFramingTableData="TableData" :mOpenConfirmation="mOpenConfirmation" :mCheckFlg="mCheckFlg" :mRemark="mRemark" />
                </v-card-text>

                <v-card-text v-else-if="$store.state.details.Process == 3">
                    <CuttingVue :CuttingTableData="TableData" :mOpenConfirmation="mOpenConfirmation" :mCheckFlg="mCheckFlg" :mRemark="mRemark" :TypeTotal="TypeTotal" :TypeDone="TypeDone" :CurrentType="CurrentType" :mPrev="mPrev" :mNext="mNext" :type="Selectiontype"/>
                </v-card-text>

                <v-card-text v-else-if="$store.state.details.Process == 7">
                    <UnitPackingVue :UnitPackingTableData="TableData" :mOpenConfirmation="mOpenConfirmation" :mCheckFlg="mCheckFlg" :mRemark="mRemark" />
                </v-card-text>

                <v-card-text v-else-if="$store.state.details.Process == 4">
                    <BoringHolingVue :BoringHolingTableData="TableData" :mOpenConfirmation="mOpenConfirmation" :mCheckFlg="mCheckFlg" :mRemark="mRemark" />
                </v-card-text>

                <v-card-text v-else-if="$store.state.details.Process == 8">
                    <GlassCleaningandPackingVue :GlassCleaningandPackingTableData="TableData" :mOpenConfirmation="mOpenConfirmation" :mCheckFlg="mCheckFlg" :mRemark="mRemark" />
                </v-card-text> -->
            </v-card>

        </v-card-text>

    </v-card>

    <v-dialog v-model="ListDialog" persistent width="40%">
        <v-card>
            <v-card-title>Plan List
                <v-spacer />
                <v-btn fab x-small color="black" @click="ListDialog = !ListDialog">
                    <v-icon color="white">mdi-close</v-icon>
                </v-btn>
            </v-card-title>
            <v-card-text>
                <v-simple-table fixed-header height="400">
                    <tbody>
                        <tr v-for="(item,i) in MonitoringData" :key="i">
                            <td class="TableBorders" style="text-align: right">{{item.Seq}}</td>
                            <td class="TableBorders" style="text-align: left">{{item.NameCD}}</td>
                            <td class="TableBorders">{{item.Hinban}}</td>
                            <td class="TableBorders">

                                <v-tooltip right>
                                    <template v-slot:activator="{ on, attrs }">
                                        <v-btn x-small v-on="on" v-bind="attrs" color="#FA6800" class="py-5" @click="mSpecificPlan(item)">
                                            <v-icon color="#FFFFFF">mdi-play</v-icon>
                                        </v-btn>
                                    </template>
                                    <span class="spancolor">Select Plan</span>
                                </v-tooltip>

                            </td>
                        </tr>
                    </tbody>
                </v-simple-table>
            </v-card-text>

        </v-card>
    </v-dialog>

    <v-container :fluid="true">

        <v-row class="mt-1" style="margin:auto; padding:auto;" align="center" justify="center">
            <v-col cols="2">
                <v-row>

                    <v-col cols="6">
                        <v-btn class="ml" width="100%" min-width="100%" color="#647687" @click="mpageprev" :disabled="page == 0">
                            <v-icon class="white--text">mdi-flip-h mdi-play</v-icon>
                        </v-btn>
                    </v-col>
                    <v-col cols="6"></v-col>
                </v-row>

            </v-col>

            <v-col cols="7">
                <v-row>
                    <v-col cols="4">
                        <v-btn width="100%" min-width="100%" class="paginationfont" :disabled="page == 0">{{page == 0 ? '' : MonitoringData[page-1].NameCD+': '+MonitoringData[page-1].Hinban}}</v-btn>
                    </v-col>
                    <v-col cols="4">
                        <v-btn width="100%" min-width="100%" class="paginationfont">{{MonitoringData[page].NameCD}}: {{MonitoringData[page].Hinban}}</v-btn>
                    </v-col>
                    <v-col cols="4">
                        <v-btn width="100%" min-width="100%" class="paginationfont" :disabled="page+1 == maxpagelist">{{page+1 == maxpagelist ? '' : MonitoringData[page+1].NameCD+': '+MonitoringData[page+1].Hinban}}</v-btn>
                    </v-col>
                </v-row>

            </v-col>

            <v-col cols="2">
                <v-row>
                    <v-col cols="6">
                        <v-btn width="100%" min-width="100%" color="#647687" @click="ListDialog = !ListDialog">
                            <v-icon class="white--text">mdi-dots-horizontal</v-icon>
                        </v-btn>
                    </v-col>
                    <v-col cols="6">
                        <v-btn width="100%" min-width="100%" color="#647687" @click="mpagenext" :disabled="page+1 == maxpagelist">
                            <v-icon class="white--text">mdi-play</v-icon>
                        </v-btn>
                    </v-col>

                </v-row>

            </v-col>

        </v-row>

    </v-container>
    <v-dialog v-model="ConfirmationDialog" persistent width="30%">
        <v-card>
            <v-card-title>
                <h4>For Confirmation Log</h4>
                <v-spacer />

                <v-btn fab x-small color="black" @click="ConfirmationDialog = mCloseConfirmation()">
                    <v-icon color="white">mdi-close</v-icon>
                </v-btn>

            </v-card-title>
            <v-card-text>
                <textarea v-model="Remark.Remark" style="background-color:#D5E8D4; width:100%; height:100px; resize:none;border-radius:5px;font-size:20px;padding:10px;"></textarea>

            </v-card-text>
            <v-card-actions class="mt-n5 mr-2">
                <v-spacer />
                <v-btn color="#647687" style="align:right" class="white--text" @click="mRemark">SAVE</v-btn>
            </v-card-actions>

        </v-card>
    </v-dialog>

</v-container>
</template>

<script>
import AccessoriesVue from './Accessories.vue'
// import UnitAssembly from './UnitAssembly.vue'
// import UnitPackingVue from './UnitPacking.vue'
// import GlassCheckingAndFramingVue from './GlassCheckingAndFraming.vue'
// import BoringHolingVue from './BoringHoling.vue'
// import MarkingAndManualBoringVue from './MarkingAndManualBoring.vue'
// import CuttingVue from './Cutting.vue'
// import GlassCleaningandPackingVue from './GlassCleaningandPacking.vue'

export default {
    components: {
        AccessoriesVue,
        // UnitAssembly,
        // UnitPackingVue,
        // GlassCheckingAndFramingVue,
        // BoringHolingVue,
        // MarkingAndManualBoringVue,
        // CuttingVue,
        // GlassCleaningandPackingVue
    },
    // name: 'Plan',
    data() {
        return {
            Header: ['STATUS', 'QTY', 'UNIT', 'ITEM NAME', ''],
            AccessoriesTableData: [],
            TableData: [],
            Remark: {},
            ConfirmationDialog: false,
            ListDialog: false,
            StatusCount: 0,
            details: this.$store.state.details,
            Date: this.$store.state.Date,
            type: '',
            page:this.$store.state.planpage,
            userinfo: this.$store.state.userinfo,
            Selectiontype:[
                {Name:'TOPRAIL', Value: 2},
                {Name:'BOTTOMBAR', Value: 3},
                {Name:'PANEL STOPPER', Value: 4}
            ],
            CurrentType:0,
            MonitoringData: this.$store.state.planlist,
            ForConfirmationData:[],
            maxpagelist: 0
        }
    },
  
    methods: {
        mpagenext(){
            this.page++
             this.mJumpPlan()
        },
        mpageprev(){
            this.page--
            this.mJumpPlan()
        },
        mSpecificPlan(item){
            this.page = item.Seq-1
            this.mJumpPlan()
            this.ListDialog = false
        },
        mJumpPlan(){
            this.$store.commit('setPlanPage', this.page)
            this.mSetList()
        },
        mSetPlan() {
            // if (this.$store.state.details.Process == 1)
                this.type = 'accessories'
            // else if (this.$store.state.details.Process == 2)
            //     this.type = 'glasscheckingandframing'
            // else if (this.$store.state.details.Process == 3)
            //     this.type = 'cutting'
            // else if (this.$store.state.details.Process == 5)
            //     this.type = 'marking'
            // else if (this.$store.state.details.Process == 7)
            //     this.type = 'unitpacking'
            // else if (this.$store.state.details.Process == 4)
            //     this.type = 'boringholing'
            // else if (this.$store.state.details.Process == 6)
            //     this.type = 'unitassembly'
            // else if (this.$store.state.details.Process == 8)
            //     this.type = 'glasscleaningandpacking'
            this.mSetList()

        },
        mSetList() {

                axios.get(`${this.$url}/api/${this.type}?Hinban=${this.MonitoringData[this.$store.state.planpage].Hinban}&&NameCD=${this.MonitoringData[this.$store.state.planpage].NameCD}&&Week=${this.Date.Week}&&Year=${this.Date.Year}`)
                .then(res => {
                    this.TableData = res.data
                    this.mStatusCount()
                }).catch(({
                    response
                }) => {
                    this.$store.dispatch('setStatusCode', response.status)
                    this.$router.push('/error/' + response.status)
                }).finally(() => {

                }) 

        },
        mOpenConfirmation(item) {
            this.ConfirmationDialog = true
            console.log(item,'ito');
            this.Remark = item

        },
        mCloseConfirmation(){
            this.Remark.Remark = ''
            this.ConfirmationDialog = false
        },

        mCheckFlg(item) {
            console.log(this.page);
            if (this.CheckFlgMethod != 'remarks') {
                item.NameCD = this.MonitoringData[this.page].NameCD
                item.Hinban = this.MonitoringData[this.page].Hinban
                item.Week = this.$store.state.Date.Week
                item.Year = this.$store.state.Date.Year
                item.EmployeeNo = this.userinfo.EmployeeNo
            }
            axios.patch(`${this.$url}/api/${this.type}/${this.CheckFlgMethod}`, this.CheckFlgMethod == 'remarks' ? this.Remark : item)
                .then(res => {
                }).catch(({
                    response
                }) => {
                    this.$store.dispatch('setStatusCode', response.status)
                    this.$router.push('/error/' + response.status)
                })
            this.mSetList()
            
        },
        mRemark() {
            this.CheckFlgMethod = 'remarks'
            this.Remark.NameCD = this.MonitoringData[this.page].NameCD
            this.Remark.Hinban = this.MonitoringData[this.page].Hinban
            this.Remark.Week = this.$store.state.Date.Week
            this.Remark.Year = this.$store.state.Date.Year
            this.Remark.EmployeeNo = this.userinfo.EmployeeNo
            this.mCheckFlg()
            this.getForConfirmation()
            this.Remark = {}
            this.CheckFlgMethod = 'checkflg'
            this.ConfirmationDialog = false
        },

        mStatusCount() {
            this.StatusCount = 0
            for (let x = 0; x < this.TableData.length; x++) {
                if (this.TableData[x].CheckedFlg == 1)
                    this.StatusCount++
            }
            return this.StatusCount
        },
         mPrev() {
            if (this.CurrentType != 0) {
                this.CurrentType--
            }
        },
        mNext() {
            if (this.CurrentType != 2) {
                this.CurrentType++
            }
        },
        getForConfirmation() {
            this.page = 1;
            axios.get(`api/forconfirmation`)
                .then((res) => {
                    this.ForConfirmationData = res.data;
                    console.log(this.ForConfirmationData);
                })
                .catch(({
                    response
                }) => {
                    this.$router.push("/error/" + response.status);
                }).finally(() => {
                    this.maxpagelist = this.MonitoringData.length
                })      
        },
    },
     computed:{
        TypeTotal(){
            return this.TableData.filter(rec=> rec.Type.includes(this.Selectiontype[this.CurrentType].Name)).length
        
        },
        TypeDone(){
            return this.TableData.filter(rec=> rec.Type.includes(this.Selectiontype[this.CurrentType].Name) && rec.CheckedFlg == 1).length
        }
    }
}
</script>

<style>
.TableDesign {
    border: 1px solid black !important;
    border-collapse: collapse;
    text-align: center;
    /* font-size: 1.8vw !important; */
    font-size: 20px !important;
    height: 100% !important;
    font-weight: bold;
    white-space: nowrap;
}

.TableDesign .actionButtons {
    visibility: hidden;
}

tr:hover .TableDesign .actionButtons {
    visibility: visible;
}

tr:hover {
    background: #ffd4ac !important;
}

.BlackBorder {
    border: 1px solid black;
}

.full-screen-div {
    width: 80vw;
    height: 80vh;
    margin: 10vh auto;
}

.v-tooltip__content {
    opacity: 1 !important;
}
.paginationfont{
    font-weight: bold;
    font-size: 1.1vw !important;
    pointer-events: none
}
</style>
