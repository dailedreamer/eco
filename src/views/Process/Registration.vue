<template>
  <b-container fluid>
    <b-row>
      <b-col cols="12">
        <vessel>
          <vessel-header>
           <div class="m-3 div_upload_data">
              <div class="media">
                 <div class="media-aside align-self-start">
                    <b-img 
                        :src="require('../../assets/icon_images/excel.svg')" 
                        width="44" 
                        height="37" 
                        alt="placeholder">
                    </b-img>
                  </div>
                  <div>
                    <h5 class="mb-0">Upload Data</h5>
                    <small class="text-secondary">Upload Data Description</small>
                  </div>
                </div><br>
                <b-form
                  id="form-upload"
                  @submit.prevent="uploadFile"
                  method="post"
                >
                  <b-col lg="12">
                      <b-row>
                        <b-col lg="3" class="md-2">
                          <!-- <b-form-file id="input-file" accept=".csv" @submit.prevent="uploadFile"></b-form-file> -->
                          <input
                            class="alpha-input"
                            id="input-file"
                            name="file"
                            type="file"
                            placeholder="Enter remarks"
                            required
                          />
                        </b-col>
                        <!-- <b-col lg="2" class="md-2">
                          <AButton
                           class="mr-2"
                            id="button-upload"
                            type="submit"
                            title="Click to add file"
                            variant="primary"
                          >
                          <font-awesome-icon icon="upload" size="sm" class="icon" /> Upload
                          </AButton>
                          
                          <AButton
                            id="button-cancel"
                            @click.native="cancelUpload()"
                            title="Click to add file"
                            variant="secondary"
                          >
                          Cancel
                          </AButton>
                          </b-col> -->
                           <b-col lg="2" class="md-2">
                          <b-button
                            class="mt-2"
                            id="button-upload"
                            type="submit"
                            title="Click to Registered Process"
                            variant="danger">
                            <font-awesome-icon 
                              icon="upload" 
                              size="sm" 
                              class="icon"/> 
                              Upload
                          </b-button>
                          <b-button
                            class="mt-2 ml-2"
                            id="button-clear"
                            @click="cancelUpload();"
                            variant="outline-secondary"
                            title="Click to Clear Inputs">
                            <font-awesome-icon 
                              icon="times-circle" 
                              size="sm" 
                              class="icon"/> 
                              Clear
                          </b-button>
                    </b-col> 
                      </b-row>
                </b-col>
              </b-form>      
                  
              <br>
              <b-form
                  id="form-update-process"
                  @submit.prevent="updateProcess"
                  method="post"
                >
                  <b-col cols="12">
                    <b-table class="alpha__table text-nowrap"
                        responsive 
                        hover 
                        bordered
                        head-variant="light"
                        :fields="fields"
                        :items="items"
                        :busy="isBusy" 
                        :per-page="perPage"
                        :current-page="currentPage">
                      <template #cell(no)="data" v-if="currentPage == 1">
                          {{data.index+1}}
                      </template>
                      <template #cell(no)="data" v-else>
                          {{(data.index+1) + (currentPage*perPage) - 10}}
                      </template>
                      <template #cell(device)="data" v-if="currentPage == 1"> 
                        <multiselect  
                          v-model="data.item.device"
                          placeholder="Select Device Name" 
                          id="device__id"
                          label="text" 
                          track-by="id" 
                          :options="device_options"
                          :show-labels="false"
                          :allow-empty="false"
                          @input="loadModel(data.item.device.id, data.index) ,changeDevice(data.index)"  
                          ></multiselect>
                      </template>
                      <template #cell(device)="data" v-else> 
                        <multiselect  
                          v-model="data.item.device"
                          placeholder="Select Device Name" 
                          id="device__id"
                          label="text" 
                          track-by="id" 
                          :options="device_options"
                          :show-labels="false"
                          :allow-empty="false"
                          @input="loadModel(data.item.device.id, (data.index) + (currentPage * perPage) - perPage) ,changeDevice((data.index) + (currentPage * perPage) - perPage)"  
                          ></multiselect>
                      </template>
                    <template #cell(model)="data" v-if="currentPage == 1"> 
                        <multiselect  
                          v-model="data.item.model"
                          placeholder="Select Model Name" 
                          label="name" 
                          track-by="id" 
                          :options="data.item.model_options"
                          :show-labels="false"
                          :allow-empty="false"
                          @input="loadUnit(data.item.model.id, data.index)"
                          
                        ></multiselect>
                    </template>
                    <template #cell(model)="data" v-else> 
                        <multiselect  
                          v-model="data.item.model"
                          placeholder="Select Model Name" 
                          label="name" 
                          track-by="id" 
                          :options="data.item.model_options"
                          :show-labels="false"
                          :allow-empty="false"
                          @input="loadUnit(data.item.model.id, (data.index) + (currentPage * perPage) - perPage)"
                          
                        ></multiselect>
                    </template>
                    <template #cell(unit_name)="data"> 
                        <multiselect  
                          v-model="data.item.unit"
                          placeholder="Select Unit Name/Number" 
                          label="unit_name" 
                          track-by="unit_id" 
                          :options="data.item.unit_options"
                          :show-labels="false"
                          :allow-empty="false"
                        ></multiselect>
                    </template>
                      <!-- <template #cell(unit_no)="data">  
                       {{data.item.unit.unit_no}}
                      </template> -->
                      
                      <template #table-busy>
                            <div class="text-center text-default my-2">
                            <b-spinner class="align-middle"></b-spinner>
                            </div>
                        </template>
                    </b-table>
                     <b-pagination
                      align="right"
                      class="alpha__table__pagination"
                      pills
                      v-model="currentPage"
                      :per-page="perPage"
                      :total-rows="totalRows"
                    ></b-pagination>
                 </b-col>
                 <div class = "mt-4">
                    <AButton class = "float-right mr-3"
                      id="button-update"
                      type="submit"
                      title="Update Selected"
                      variant="primary"
                    >
                    <font-awesome-icon icon="save" size="sm" class="icon" /> Update Selected
                    </AButton>
                </div>
              </b-form>
             </div>
          </vessel-header>
          <vessel-body>
          </vessel-body>
        </vessel>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import Multiselect from 'vue-multiselect';
import { mapGetters } from "vuex";

export default {
  components: {
    Multiselect
    },
  name: "ProcessManagement",
  data(){
    return {
      userDetails : JSON.parse(localStorage.getItem("auth_token")),
       currentPage: 1,
        perPage: 10,
        totalRows: null,
        fields: [
        {
          key: "no",
          sortable: true,
        },
        {
          key: "eco_number",
          sortable: true,
        },
        {
          key: "part_number",
          sortable: true,
        },
        {
          key: "part_number_revision",
          sortable: true,
        },
        {
          key: "device",
          sortable: true,
        },
        {
          key: "model",
          sortable: true,
        },
        {
          key: "unit_name",
          sortable: true,
        },        
      ],
      device_options: [],
      model_options: [],
      unit_options: [],
      data: [],
      items: 
      [
        // {id: 1,eco_number: '123456877',unit_options:[], model_options:[],part_number: 'KD021-13254', revision: '04',device:[],model:[], unit:[]},
        // {id: 2,eco_number: '123456877',unit_options:[], model_options:[],part_number: 'KD021-13254', revision: '04',device:[],model:[], unit:[]},
        // {id: 1,eco_number: '123456877',unit_options:[], model_options:[],part_number: 'KD021-13254', revision: '04',device:[],model:[], unit:[]},
      ],
      //loading
        isBusy: false,
        process_id: null,
        index: null
    }
  },
  methods:
  {
    cancelUpload: function()
    {
      document.getElementById("input-file").value = "";
    },
    loadDevice: function()
    {
      this.$store.dispatch("loadDevice")
      .then((response) => {
        let information = response.data.data;
          Object.keys(information).forEach((key) => {
              this.device_options.push({
                'id':information[key].id, 
                'text':information[key].device_name
              })
          });
      });  
    },
    loadModel: function(device_id, index)
    {
      this.items[index].model_options = [];  
      this.items[index].unit_options= [];    
          this.$store
            .dispatch("loadModelPerDevice",  device_id)
            .then((response) => {

              let information = response.data;
              
              Object.keys(information).forEach(key =>
              {

                let model = `${information[key]["name"]}`
                let model_id = `${information[key]["id"]}`
                let obj = {};

                obj["name"] = model;
                obj["id"] = model_id;
              
                this.items[index].model_options.push(obj);
              })
          });   
          //  var page = (this.currentPage-1)*this.perPage+index;
   
    },
    loadUnit: function(model_id, index)
    {  
      this.items[index].unit_options= [];  
      
      this.$store.dispatch("loadUnitPerModel", model_id)
      .then((response) => {

        let information = response.data;
    
        Object.keys(information).forEach(key =>
        {
          let unit = `${information[key]["unit_name"]}` + `/` +`${information[key]["unit_number"]}`
          let unit_id = `${information[key]["id"]}`
          let obj = {};

          obj["unit_name"] = unit;
          obj["id"] = unit_id;
          this.items[index].unit_options.push(obj);
        })
      });  
    },
  
    changeDevice: function(index)
    {
      this.data.push(this.items[index]);
    },
    updateProcess: function()
    {
      var data_value = [];

      for (let index = 0; index < this.data.length; index++) 
      {
        var main_id = this.data[index].id;
        var device_id = this.data[index].device.id;
        var unit_id = this.data[index].unit.id;
        var model_id = this.data[index].model.id;

        let obj = {};

          obj["id"] = main_id;
          obj["device_id"] = device_id;
          obj["model_id"] = model_id;
          obj["unit_id"] = unit_id;

          data_value.push(obj);
      }
     
      this.$store
        .dispatch("updateProcessRegistration", data_value)
        .then((response) => {
          let information = response.data.status;
          if(information == "Success")
          {
            this.toast(information, response.data.message);
            this.loadAllProcess();
          }
          else if(information == "Warning")
            this.toast(information, response.data.message);
          else  
            this.toast(information, response.data.message);
        })
        .catch((error) => {
          console.log(error)
        });
    },
    uploadFile: function()
    {
      var formData = new FormData();
      var excelFile = document.querySelector("#input-file");
      let fileType = excelFile.files[0].name.split('.')[1];
      // var token = this.userDetails.token 
      var token = "KnHj9Fw2JpEJdNKo3NbGo7VC0C8MEYOO5Rwvhi9D7TCoNUOJy5gINN3IyqSUTykS"

      if(fileType !== 'xlsx')
      {
        document.getElementById("input-file").value = "";
      }
      else
      {
        // document.getElementById("button-upload").disabled = true;
        formData.append("file_name", excelFile.files[0]);

        this.$store
          .dispatch("uploadFile", [formData, token])
          .then((response) => {
            let status = response.data.status;
            if(status == "Success")
            {
              document.getElementById("input-file").value = "";
              this.toast(status, response.data.message);
            }
            else if(status == "Warning")
              this.toast(status, response.data.message);
            else
              this.toast(status, response.data.message);
          })
          .catch((error) => {
            this.toast("error", "Something went wrong");
            console.log(error);
          })
          .finally(() => {
            this.loadAllProcess();
          });
      }
    },
    loadAllProcess: function()
    {
      this.$store
        .dispatch("loadAllProcess")
        .then(response =>
        {

        for (let index = 0; index < response.data.length; index++) {
          let obj = {};

          obj["id"] = response.data[index].id;
          obj["eco_number"] = response.data[index].eco_number;
          obj["part_number"] = response.data[index].part_number;
          obj["part_number_revision"] = response.data[index].part_number_revision;
          obj["model"] = [];
          obj["device"] = [];
          obj["model_options"] = [];
          obj["unit_options"] = [];

          this.items.push(obj);

        }

          this.toast(response.status, response.message);

          if(!this.getAllProcess.data)
            this.totalRows = 1;
          else
            this.totalRows = this.items.length;
        })
    },
    loadEmailMasterlist() {
            this.$store.dispatch("loadEmailMasterlist")
            .then((response) => {
                 this.email_masterlists = response.data;
                //  console.log(this.email_masterlists);
            })
        },
    toast: function (status, message){
            this.$toast(message, {
                type:status.toLowerCase().trim(),
                position: "bottom-right",
            });
        }
  },
  computed: {
    ...mapGetters(["getDevice"]),
    ...mapGetters(["getModel"]),
    ...mapGetters(["getUnit"]),
    ...mapGetters(["getAllProcess"])
  },
   mounted() {
     this.loadDevice();
     this.loadAllProcess();
    }
};
</script>

<style scoped>
.table-responsive {
  overflow-x: visible !important;
  overflow-y: visible !important;
}
h5
{
  text-align: left;
}

.page-item.active .page-link
{
  background-color: #A30B1A;
  border-color: #A30B1A;
}

hr 
{
  border-bottom: 3px solid #e84656;
  margin-top: 0;
  margin-bottom: 2rem;
  width: 60%;
}


</style>