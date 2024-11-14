<template>
  <v-card>
    <v-card-title>Shukka User List
      <v-spacer/>
      <v-tooltip left>
        <template v-slot:activator="{ on, attrs }">
          <v-btn v-on="on" v-bind="attrs" @click="AddDialog = !AddDialog" class="green white--text"><v-icon>mdi-account-plus</v-icon></v-btn>
        </template>
        <span>Add Account</span>
      </v-tooltip>
    </v-card-title>
    
    <v-card-text class="mb-n12">
      <v-row>
        <v-col cols="4">
          <v-text-field dense outlined v-model="search" label="Search Employee"></v-text-field>
        </v-col>
        <v-col cols="4">
          <v-text-field dense outlined v-model="searchrq" label="Search Request Name"></v-text-field>
        </v-col>
        <v-col cols="4">

        </v-col>
      </v-row>
      
    </v-card-text>
    <v-card-text>
      <v-row>
        <v-col cols="6">
          <v-simple-table fixed-header height="500">
            <thead>
              <tr>
                <th class="HeaderDesign" v-for="(header,i) in ShukkaHeader" :key="i">
                  {{header}}
                </th>  
              </tr>
            </thead>
            <tbody >
              <tr v-for="(item,i) in SearchData" :key="i" :style="item.EmployeeID == SelectedEmployee ? 'background-color: #ffd4ac;':''">
                <td class="TableDesign">{{item.EmployeeID}}</td>
                <td class="TableDesign" @click="mAccessList(item.EmployeeID)">{{item.EmployeeName}}</td>
                <td class="TableDesign">
                  <v-tooltip right>
                    <template v-slot:activator="{ on, attrs }">
                      <v-btn fab x-small class="green white--text" v-on="on" v-bind="attrs" @click="mOpenDialog(item.EmployeeID)"><v-icon>mdi-table-plus</v-icon></v-btn>  
                    </template>
                    <span>Add Access</span>
                  </v-tooltip>
                </td>
            
              </tr>
              
            </tbody>
          </v-simple-table>
        </v-col>
        <v-col cols="6">
          <v-simple-table fixed-header height="500">
            <thead>
              <tr>
                <th class="HeaderDesign" v-for="(header,i) in AccessHeader" :key="i">
                  {{header}}
                </th>  
              </tr>
            </thead>
            <tbody >
              <tr v-for="(item,i) in SearchAccess" :key="i">
                
                <td class="TableDesign">{{item.req_cd}}</td>
                <td class="TableDesign">{{item.req_name}}</td>
                <td class="TableDesign">
                  <v-tooltip right>
                    <template v-slot:activator="{ on, attrs }">
                        <v-btn 
                            fab 
                            x-small
                            v-on="on" 
                            v-bind="attrs"
                            color='yellow'
                            @click="mEditAccess(item.req_cd)"
                        >
                            <v-icon color="#FFFFFF">mdi-table-edit</v-icon>
                        </v-btn>
                    </template>
                    <span class="spancolor">Edit Access</span>
                </v-tooltip>
                </td>
                
              </tr>
              
            </tbody>
            <h1 v-show="AccessList[0] == null" style="text-align:center" class="my-14">
               No Access Yet
              </h1>
          </v-simple-table>
        </v-col>
      </v-row>
        
    </v-card-text>

     <v-dialog v-model="AddDialog" width="30%" persistent>
      <v-card>
        <v-card-title class="blue white--text mb-4">Create Account
          <v-spacer/>
          <v-btn fab x-small color="black" @click="mCloseDialog">
                  <v-icon color="white">mdi-close</v-icon>
          </v-btn>
        </v-card-title>
        <v-card-text>
          <v-text-field dense outlined label="Employee ID (Press enter to verify)" @keyup.enter="mIsIDExisting(AddValue.EmployeeID)" v-model="AddValue.EmployeeID"></v-text-field>
          <v-text-field dense outlined label="Password" v-model="AddValue.Password" v-show="isExisting"></v-text-field>
        </v-card-text>
        <v-card-actions>
          <v-spacer/>
          <v-btn :disabled="isDisabled" @click="mInsertAcc">Add</v-btn>
        </v-card-actions>
          
      </v-card>
    </v-dialog>
   
    <v-dialog v-model="ChartDialog" width="30%" persistent>
      <v-card>
        <v-card-title class="blue white--text mb-4">{{isEdit ? 'Edit' : 'Add'}} ReqKind Access
          <v-spacer/>
          <v-btn fab x-small color="black" @click="mCloseDialog">
                  <v-icon color="white">mdi-close</v-icon>
              </v-btn>
        </v-card-title>
        <v-card-text>
          <v-row>
            <v-col cols="8">
              <v-select 
                dense outlined
                readonly
                v-model="AddValue.EmployeeID" 
                label="Employee" 
                :items="GCIData"
                item-text="EmployeeName" 
                item-value="EmployeeID">
              </v-select>
            </v-col>
            <v-col cols="4"> 
              <v-combobox
                v-model="AddValue.EmployeeID"
                readonly
                item-text="EmployeeID"
                item-value="EmployeeID"
                label="ID"
                dense outlined
                :return-object="false"
                :items="GCIData">
              </v-combobox>
            </v-col>
          </v-row>
          
         
          <v-combobox
            v-model="ReqKind"
            :multiple = "!isEdit"
            item-text="req_name"
            item-value="req_name"
            label="Request Kind"
            dense outlined
            :return-object="false"
            :items="cSection">
          </v-combobox>

        </v-card-text>
        <v-card-actions>
          <v-spacer/>
          <v-btn :disabled="isDisabled2" @click="mInsertShukka">{{isEdit ? 'Edit' : 'Add'}}</v-btn>
        </v-card-actions>
          
      </v-card>
    </v-dialog>
    
    <v-dialog v-model="isLoading" persistent width="25%" content-class="elevation-0">
     
        <img src="/CAM/loading.gif">

    </v-dialog>
    
  </v-card>
</template>

<script>

export default {
 
  data(){
    return{
      ShukkaHeader:['Employee ID','Employee Name','Actions'],
      AccessHeader:['Request Code','Request Name','Actions'],
      ShukkaTable:{},
      GCIData:{},
      search:'',
      searchrq:'',
      isExisting:false,
      RequestKindData:{},
      AddDialog: false,
      SelectedEmployee: '',
      ChartDialog: false,
      AccessList:'',
      ReqKind:'',
      isEdit:false,
      isLoading: false,
      AddValue:{EmployeeID:'',RequestKindID:'', Password: ''},
    }

  },
  created(){
    this.mGetShukka()
    this.mGetEmployee()
    this.mGetSection()
  },
  watch:{
    ReqKind(val){
      if(this.isEdit)
        this.AddValue.RequestKindID = this.RequestKindData.filter(rec => val==rec.req_name)
        .map(req => {return req.req_cd})
      else
        this.AddValue.RequestKindID = this.RequestKindData.filter(rec => val.includes(rec.req_name))
        .map(req => {return req.req_cd})
    }
  },
  computed:{
    
    cSection(){
      if(this.AddValue.EmployeeID){
        this.AddValue.RequestKindID = ''
        let data = this.ShukkaTable.filter(rec=> this.AddValue.EmployeeID.includes(rec.EmployeeID) )
        .map(req =>{return req.RequestCode})
        return this.RequestKindData.filter(rec => !data.includes(rec.req_cd))
      }
      else
        return this.RequestKindData     
    },
    SearchData(){
      this.searchrq = ''
       this.SelectedEmployee = ''
       this.AccessList = ''
      if(this.search)
        return this.GCIData.filter(rec => rec.EmployeeID.includes(this.search) || rec.EmployeeName.toLowerCase().includes(this.search.toLowerCase()))
      else
        return this.GCIData
     
    },
    SearchAccess(){
      if(this.searchrq && this.AccessList != '')
        return this.AccessList.filter(rec => rec.req_name.toLowerCase().includes(this.searchrq.toLowerCase()))
      else
        return this.AccessList
    },
    isDisabled(){
        return this.AddValue.EmployeeID == ''|| this.AddValue.Password == ''
    },
    isDisabled2(){
        return this.AddValue.EmployeeID == ''|| this.AddValue.RequestKindID == '' 
    },
  },
  methods:{
    mOpenDialog(item){
      this.ChartDialog = true
      this.AddValue.EmployeeID = item
    },
    mAccessList(item){
        this.SelectedEmployee = item
        let data = this.ShukkaTable.filter(rec=> item.includes(rec.EmployeeID) )
        .map(req =>{return req.RequestCode})
        this.AccessList = this.RequestKindData.filter(rec => data.includes(rec.req_cd))
    
    },
    mEditAccess(item){
      this.isEdit = true
      this.ChartDialog = true
      this.AddValue.EmployeeID = this.SelectedEmployee
      this.AddValue.ReplaceKind = item
    },
    mCloseDialog(){
      this.AddDialog = false
      this.isExisting = false
      this.ChartDialog = false
      this.ReqKind = ''
      this.isEdit = false
       this.AddValue = {EmployeeID:'',RequestKindID:'', Password: ''}
    },
    mGetShukka(){
      this.isLoading = true
      axios.get(`${this.$url}/api/reqkind`)
      .then(res =>{
        this.ShukkaTable = res.data
      }).catch(({response}) => {
                this.$store.dispatch('setStatusCode', response.status)
                this.$router.push('/error/' + response.status)
            }).finally(() => {
              this.isLoading = false
            })
    },
    mGetEmployee(){
      axios.get(`${this.$url}/api/empsys`)
      .then(res =>{
        this.GCIData = res.data
      }).catch(({response}) => {
                this.$store.dispatch('setStatusCode', response.status)
                this.$router.push('/error/' + response.status)
            })
    },
    mGetSection(){
      axios.get(`${this.$url}/api/reqmuster`)
      .then(res =>{
        this.RequestKindData = res.data
      }).catch(({response}) => {
                this.$store.dispatch('setStatusCode', response.status)
                this.$router.push('/error/' + response.status)
            })
    },
   
    mInsertShukka(){
      
      if(this.isEdit){
        axios.patch(`${this.$url}/api/reqkind/edit`,this.AddValue)
        .then(res =>{
          alert(res.data)
          this.AccessList = ''
          this.SelectedEmployee = ''
        }).catch(({response}) => {
                  this.$store.dispatch('setStatusCode', response.status)
                  this.$router.push('/error/' + response.status)
              })
      }
      else{
        axios.post(`${this.$url}/api/reqkind`,this.AddValue)
        .then(res =>{
          alert(res.data)
        }).catch(({response}) => {
                  this.$store.dispatch('setStatusCode', response.status)
                  this.$router.push('/error/' + response.status)
              })
      }
      this.mGetShukka()
      this.mCloseDialog()
      

    },
     mIsIDExisting(item){
      if(this.AddValue.EmployeeID != ''){
        axios.get(`${this.$url}/api/empsys/${item}`)
      .then(res =>{
        console.log(res);
        if(res.data != 0){
          alert('Account Exist')
          this.isExisting = false
        }
        else{
          alert('Account Available')
          this.isExisting = true
        }
          
      }).catch(({response}) => {
                this.$store.dispatch('setStatusCode', response.status)
                this.$router.push('/error/' + response.status)
            })
      }
      
    },
    mInsertAcc(){
      axios.post(`${this.$url}/api/empsys`,this.AddValue)
      .then(res =>{
        alert('Success!')
      }).catch(({response}) => {
                this.$store.dispatch('setStatusCode', response.status)
                this.$router.push('/error/' + response.status)
            })

    }
    
  }
}

</script>

<style>
</style>