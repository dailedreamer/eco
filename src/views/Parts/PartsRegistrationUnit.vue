<template>
  <b-container fluid>
    <b-row>
      <b-col cols="12">
        <vessel>
          <!-- <vessel-header></vessel-header> -->
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
                method="post"
              >
                <b-col lg="12">
                  <b-row>
                    <b-col lg="3" class="md-2">
                      <!-- <b-form-file 
                        id="file" 
                        accept=".csv" 
                        v-on:change="FileUpload()">
                      </b-form-file> -->
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
                    </b-col>
                  </b-row>
                </b-col>
              </b-form>
              <br>
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
                <template #cell(No)="data">
                  {{data.index + 1}}
                </template>
                <template #cell(device)="data"> 
                    <multiselect  
                      v-model="data.item.device"
                      placeholder="Select Device Name" 
                      label="text" 
                      track-by="id" 
                      :options="device_options"
                      :show-labels="false"
                      :allow-empty="false"
                      @input="loadModel(data.item.device.id, data.index) ,changeDevice(data.index)"  
                      ></multiselect>
                </template>
                <template #cell(model)="data"> 
                    <multiselect  
                      v-model="data.item.model"
                      placeholder="Select Model Name" 
                      label="text" 
                      track-by="id" 
                      :options="data.item.model_options"
                      :show-labels="false"
                      :allow-empty="false"
                      @input="loadUnit(data.item.model.id, data.index)"
                      
                    ></multiselect>
                </template>
                <template #cell(unit_name)="data"> 
                    <multiselect  
                      v-model="data.item.unit"
                      placeholder="Select Unit Name/Number" 
                      label="text" 
                      track-by="id" 
                      :options="data.item.unit_options"
                      :show-labels="false"
                    ></multiselect>
                </template>
                <template #table-busy>
                  <div class="text-center text-default my-2">
                    <b-spinner class="align-middle"></b-spinner>
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
                  id="button-submit"
                  type="submit"
                  title="Click to Update"
                  variant="danger"
                  @click="updateSelected()">
                  <font-awesome-icon 
                    icon="save" 
                    size="sm" 
                    class="icon"/> 
                    Update Selected
                </b-button>
              </div>
            </div>
          </vessel-body>
        </vessel>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
// import axios from "axios";
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
        {key: "part_number_new_revision", sortable: true, class: 'text-center'},
        {key: "device", sortable: true, class: 'text-center'},
        {key: "model", sortable: true, class: 'text-center'},
        {key: "unit_name", sortable: true, label: 'Unit Name/Unit Number', class: 'text-center'},
      ],
      device_options: [],
      items: 
      [
        {id: 1, eco_number: '111111111', part_number: 'KD021-132540', part_number_new_revision: '02', unit_options:[], model_options:[], device:[], model:[], unit:[]},
        {id: 2, eco_number: '222222222', part_number: 'KD021-132541', part_number_new_revision: '04', unit_options:[], model_options:[], device:[], model:[], unit:[]},
        {id: 3, eco_number: '333333333', part_number: 'KD021-132542', part_number_new_revision: '06', unit_options:[], model_options:[], device:[], model:[], unit:[]},
      ],
      isBusy: false,
    }
  },
  mounted()
  {
    this.loadDevice();
  },
  computed: {
    ...mapGetters(["getPartsRegistrationUnits"]),
    ...mapGetters(["getDevice"]),
    ...mapGetters(["getModel"]),
    ...mapGetters(["getUnit"]),
    totalRows(){
      return this.items.length
    }, 
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
        document.getElementById("button-upload").disabled = true;
        formData.append("file_name", excelFile.files[0]);

        this.$store
        .dispatch("uploadPartsRegistrationUnit", [formData, token])
        .then((response)=>{
          let status = response.data.status;
          // console.log(status)
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
          location.reload();
        });
      }
    },

    loadUnitsPe: function () 
    {
      this.$store.dispatch("loadUnitsPe")
        //  this.$store.dispatch("loadparts").then((result) => {
        //  this.toast(result.status, result.message);
        // });
    },
    

    // submitFile()
    // {
    //   let formData = new FormData();
    //   formData.append('file', this.file);

    //   axios.post('/parts-registration-units',
    //     formData,
    //     {
    //       headers: 
    //       {
    //         'Content-Type': 'multipart/form-data'
    //       }
    //     }
    //   ).then(function(){
    //     console.log('success');
    //   })
    //   .catch(function() {
    //     console.log('fail');
    //   });
    // },
    // FileUpload(){
    //   this.file = this.$refs.file.files[0];
    // },
    loadDevice: function()
    {
      console.log(this.items);
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
        this.items[index].unit=[];
    },
    updateSelected: function(){
      alert('Successfully Updated!')
    },
    toast: function (status, message){
            this.$toast(message, {
                type:status.toLowerCase().trim(),
                position: "bottom-right",
            });
        }
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