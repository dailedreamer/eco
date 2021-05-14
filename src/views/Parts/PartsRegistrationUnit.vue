<template>
  <b-container fluid>
    <b-row>
      <b-col cols="12">
        <vessel>
          <vessel-body>
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
                method="post">
                <b-col lg="12">
                  <b-row>
                    <b-col lg="3" class="md-2">
                      <input
                          class="alpha-input"
                          id="input-file"
                          name="file"
                          type="file"
                          required
                        />
                    </b-col>
                    <b-col lg="2" class="md-2">
                      <b-button
                        class="mt-1"
                        id="button-upload"
                        type="submit"
                        title="Click to Registered Parts"
                        variant="danger">
                        <font-awesome-icon 
                          icon="upload" 
                          size="sm" 
                          class="icon"/> 
                          Upload
                      </b-button>
                      <b-button
                        class="mt-1 ml-2"
                        id="button-clear"
                        @click="clearInput();"
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
                id="form-update-units-pe"
                @submit.prevent="updateUnitsPe"
                method="post">
                <b-col cols="12">
                <b-table 
                  class="alpha__table text-nowrap"
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
                      {{(data.index+1) + (currentPage * perPage) - perPage}}
                  </template>
                  <template #cell(device)="data" v-if="currentPage == 1"> 
                      <multiselect  
                        v-model="data.item.device"
                        placeholder="Select Device Name" 
                        label="text" 
                        track-by="id" 
                        :options="device_options"
                        :show-labels="false"
                        :allow-empty="false"
                        @input="loadModel(data.item.device.id, (data.index)) ,changeDevice(data.index)"  
                        ></multiselect>
                  </template>
                  <template #cell(device)="data" v-else> 
                      <multiselect  
                        v-model="data.item.device"
                        placeholder="Select Device Name" 
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
                        id="slc_model_id"
                        v-model="data.item.model"
                        placeholder="Select Model Name" 
                        label="text" 
                        track-by="id" 
                        :options="data.item.model_options"
                        :show-labels="false"
                        :allow-empty="false"
                        @input="loadUnit(data.item.model.id, (data.index))"></multiselect>
                  </template>
                  <template #cell(model)="data" v-else> 
                      <multiselect  
                        v-model="data.item.model"
                        placeholder="Select Model Name" 
                        label="text" 
                        track-by="id" 
                        :options="data.item.model_options"
                        :show-labels="false"
                        :allow-empty="false"
                        @input="loadUnit(data.item.model.id, (data.index) + (currentPage * perPage) - perPage)"></multiselect>
                  </template>
                  <template #cell(unit_name)="data"> 
                      <multiselect  
                        v-model="data.item.unit_name"
                        placeholder="Select Unit Name/Number" 
                        label="text" 
                        track-by="id" 
                        :options="data.item.unit_options"
                        :show-labels="false"
                      ></multiselect>
                  </template>
                  <template #table-busy>
                    <div class="text-center text-default my-2">
                      <b-spinner v-if="isBusy" class="align-middle"></b-spinner>
                    </div>
                  </template>
                </b-table>
                <b-pagination 
                  class="alpha__table__pagination"
                  :total-rows="totalRows" 
                  v-model="currentPage"
                  :per-page="perPage"
                  align="right"
                  pills></b-pagination>
                </b-col>
                <div class = "mt-4">
                  <b-button
                    class = "float-right mr-3"
                    id="button-update"
                    type="submit"
                    title="Click to Update"
                    variant="danger">
                    <font-awesome-icon 
                      icon="save" 
                      size="sm" 
                      class="icon"/> 
                      Update Selected
                  </b-button>
                </div>
              </b-form>
            </div>
          </vessel-body>
        </vessel>
      </b-col>
    </b-row>
  </b-container> 
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "partsRegistrationUnits",
  data(){
    return{
      file: '',
      currentPage: 1,
      perPage: 10,
      fields:
      [
        {key: "No", sortable: true, class: 'text-center field_style',},
        {key: "eco_number", sortable: true, class: 'text-center',},
        {key: "part_number", sortable: true, class: 'text-center',},
        {key: "new_revision", sortable: true, class: 'text-center'},
        {key: "device", sortable: true, class: 'text-center'},
        {key: "model", sortable: true, class: 'text-center'},
        {key: "unit_name", sortable: true, label: 'Unit Name/Unit Number', class: 'text-center'},
      ],
      device_options: [],
      model_options: [],
      unit_options: [],
      data: [],
      items: [],
      isBusy: false,
      totalRows: null
    }
  },
  mounted()
  {
    this.loadDevice();
    this.loadUnitsPe();
  },
  computed: {
    ...mapGetters(["getPartsRegistrationUnits"]),
    ...mapGetters(["getDevice"]),
    ...mapGetters(["getModel"]),
    ...mapGetters(["getUnit"]),
    ...mapGetters(["getUnitsPeRegistration"]),
  },
  methods: 
  {
    uploadFile: function(){
      var formData = new FormData();
      var excelFile = document.querySelector("#input-file");
      let fileType = excelFile.files[0].name.split('.')[1];
      var token = "Zcz5Gagl6lz5ATQ71IWVGFwGZSMZQXcpDynsa7PKUETeq7xp1uPV8MNMd0MASOyk"

      if((fileType !== 'csv') && (fileType !== 'xlsx')){
        document.getElementById("input-file").value = "";
        this.toast("Warning", "Please Upload a CSV or XLSX file type only.");
      }
      else{
        formData.append("file_name", excelFile.files[0]);

        this.$store
        .dispatch("uploadPartsRegistrationUnit", [formData, token])
        .then((response)=>{
          let status = response.data.status;
          if(status == "Success")
          {
            this.items=[];
            this.loadUnitsPe();
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
          document.getElementById("input-file").value = "";
          console.log(error);
        })
        .finally(() => {
        });
      }
    },
    loadUnitsPe: function () 
    {
      document.getElementById("button-update").disabled = false;
      this.$store.dispatch("loadUnitsPe")
      .then((response) =>{
         for (let index = 0; index < response.data.length; index++) {
          let obj = {};
          obj["id"] = response.data[index].id;
          obj["eco_number"] = response.data[index].eco_number;
          obj["part_number"] = response.data[index].part_number;
          obj["new_revision"] = response.data[index].new_revision;
          obj["model"] = [];
          obj["unit_name"] = [];
          obj["model_options"] = [];
          obj["unit_options"] = [];
           this.items.push(obj);
        }
        this.toast(response.status, response.message);
        this.isBusy=false;
        if(!this.getUnitsPeRegistration.data)
          this.totalRows = 0;
        else
          this.totalRows = this.getUnitsPeRegistration.data.length;
      })
    },
    loadDevice: function()
    {
      // document.getElementById("slc_model_id").disabled = true;
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
      this.items[index].unit_options=[];
      this.$store.dispatch("loadModelPerDevice", device_id)
      .then((response) => {
          let information = response.data;
          Object.keys(information).forEach((key) => {
              this.items[index].model_options.push({
                'id':information[key].id, 
                'text':information[key].name
              })
          });
      });   
    },
    loadUnit: function(model_id, index)
    { 
      this.items[index].unit_options=[];
      this.$store.dispatch("loadUnitPerModel", model_id)
      .then((response) => {
        let information = response.data;
        Object.keys(information).forEach((key) => {
            this.items[index].unit_options.push({
                'id':information[key].id, 
                'text':information[key].unit_name  + '/' + information[key].unit_number
            })
        });
      });  
    },
    changeDevice: function(index)
    {
        this.items[index].model=[];
        this.items[index].unit_name=[];
        this.data.push(this.items[index]);
    },
    toast: function (status, message){
        this.$toast(message, {
            type:status.toLowerCase().trim(),
            position: "bottom-right",
        });
    },
    updateUnitsPe: function(){
      var data_value = [];
      let action = 1;
      let information = this.data;
      if(information.length == 0){
        this.toast("Warning", "Please Select Required Data")
      }
      else{
        Object.keys(information).forEach((key) => 
        {

            if(information[key].model.length != 0 && information[key].unit_name.length != 0)
            {
              var main_id   = information[key].id;
              var device_id = information[key].device.id;
              var model_id  = information[key].model.id;
              var unit_id   = information[key].unit_name.id;

              let obj = {};

              obj["id"] = main_id;
              obj["device_id"] = device_id;
              obj["model_id"] = model_id;
              obj["unit_id"] = unit_id;

              data_value.push(obj);
            }
            else{
              action = 0;
              return;
            }
          });
          if(action === 1)
          {
               this.$store    
              .dispatch("updateUnitsPe", data_value)
              .then((response) => {
                let status = response.data.status;
                if(status == "Success")
                {

                  this.items=[];
                  this.loadUnitsPe();
                  this.toast(status, response.data.message);
                }
                else if(status == "Warning")
                      this.toast(status, response.data.message);
                else  
                  this.toast(status, response.data.message);
              })
              .catch((error) => {
                console.log(error)
                  })
              .finally(() => {
              });
          }
          else
          {
            this.toast("Warning", "Please Select Required Data")
          }
         
       
        }
    },
    clearInput: function(){
        document.getElementById("input-file").value = "";
    },
  }
};
</script>

<style scoped>
  .b-col{
    text-align: left;
  }
  .page-item.active .page-link{
    background-color: #A30B1A;
    border-color: #A30B1A;
  }
  hr{
    border-bottom: 3px solid #e84656;
    margin-top: 0;
    margin-bottom: 2rem;
    width: 60%;
  }
  h5{
    text-align: left;
  }
  .field_style {
    vertical-align: unset;
    margin-top: 2px;
  }
  .table-responsive .dropdown-menu{
    position: relative !important;
  }
  .table-responsive{
    overflow: inherit;
  }


</style>