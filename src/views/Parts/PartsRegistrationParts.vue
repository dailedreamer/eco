<template>
  <b-container fluid style="text-align:left">
    <b-row>
      <b-col cols="12">
        <b-row class="p-3">
          <b-col cols="3">
            <b-form
              id="form-parts-registration"
              @submit.prevent="submitForm"
              method="post">
              <h4>SINGLE ITEM REGISTRATION</h4>
              <hr class="hr--property" />
              <div class="red-line"></div>
              <b-row class="ml-3 mr-3">
                <b-col>
                  <b-form-group
                    label-for="slc_device"
                    label="Device Name:"
                    label-class="alpha__form__label">
                    <multiselect  
                      id="slc_device" 
                      name="slc_device" 
                      v-model="form.slc_device.value"
                      placeholder="Select Device Name" 
                      label="device_name" 
                      track-by="id"
                      :options="deviceOptions" 
                      :show-labels="false"  
                      :searchable="true"
                      :allow-empty="false"
                      @input="loadModel(form.slc_device.value.id), clearFilter()">
                    </multiselect>
                  </b-form-group>
                  <b-form-group
                    label-for="slc_model"
                    label="Model Name:"
                    label-class="alpha__form__label">
                    <multiselect 
                      id="slc_model" 
                      name="slc_model" 
                      v-model="form.slc_model.value"
                      placeholder="Select Model Name" 
                      label="model_name" 
                      track-by="id" 
                      :options="modelOptions"
                      :show-labels="false" 
                      :searchable="true">
                    </multiselect>
                  </b-form-group>
                  <b-form-group
                    class = "mt-1"
                    id="input-group-batch-number"
                    label="Batch Number:"
                    label-for="txt_batch_number">
                    <b-form-input
                      id="txt_batch_number"
                      name="txt_batch_number"
                      v-model="form.txt_batch_number.value"
                      :state="form.txt_batch_number.state"
                      type="text"
                      placeholder="Enter Batch Number"
                      autocomplete="off"/>
                  </b-form-group>
                  <b-form-group
                    class = "mt-1"
                    id="input-group-batch-number"
                    label="Parent Number:"
                    label-class="alpha__form__label"
                    label-for="txt_parent_drawing_number">
                    <b-form-input
                      id="txt_parent_drawing_number"
                      name="txt_parent_drawing_number"
                      v-model="form.txt_parent_drawing_number.value"
                      :state="form.txt_parent_drawing_number.state"
                      type="text"
                      placeholder="Enter Parent Number"
                      autocomplete="off"/>
                  </b-form-group>
                  <b-form-group
                    class = "mt-1"
                    id="input-group-batch-number"
                    label="Parent Number Revision:"
                    label-class="alpha__form__label"
                    label-for="txt_drawing_number_new_revision">
                    <b-form-input
                      id="txt_drawing_number_new_revision"
                      name="txt_drawing_number_new_revision"
                      v-model="form.txt_drawing_number_new_revision.value"
                      :state="form.txt_drawing_number_new_revision.state"
                      type="text"
                      placeholder="Enter Parent Number Revision"
                      autocomplete="off"/>
                  </b-form-group>
                  <b-form-group
                    class = "mt-1"
                    id="input-group-part-number"
                    label="Part Number:"
                    label-class="alpha__form__label"
                    label-for="txt_part_number">
                    <b-form-input
                      id="txt_part_number"
                      name="txt_part_number"
                      v-model="form.txt_part_number.value"
                      :state="form.txt_part_number.state"
                      type="text"
                      placeholder="Enter Part Number"
                      autocomplete="off"/>
                  </b-form-group>
                  <b-form-group
                    class = "mt-1"
                    id="input-group-part-number-revision"
                    label="Part Number Revision:"
                    label-class="alpha__form__label"
                    label-for="txt_part_number_new_revision">
                    <b-form-input
                      id="txt_part_number_new_revision"
                      name="txt_part_number_new_revision"
                      v-model="form.txt_part_number_new_revision.value"
                      :state="form.txt_part_number_new_revision.state"
                      type="text"
                      placeholder="Enter Part Number Revision"
                      autocomplete="off"/>
                  </b-form-group>
                  <b-form-group
                    id="input-group-class"
                    label="Class:"
                    label-class="alpha__form__label"
                    label-for="slc_class">
                    <multiselect  
                      id="slc_class" 
                      name="slc_class" 
                      v-model="form.slc_class.value"
                      :state="form.slc_class.state"
                      placeholder="Select Class" 
                      label="name" 
                      track-by="name"
                      :options="classOptions" 
                      :show-labels="false" >
                    </multiselect>
                  </b-form-group>
                  <b-form-group
                    id="input-group-die-details"
                    label="Die Details:"
                    label-class="alpha__form__label"
                    label-for="slc_die_details">
                    <multiselect  
                      id="slc_die_details"
                      name="slc_die_details"
                      v-model="form.slc_die_details.value"
                      :state="form.slc_die_details.state"
                      placeholder="Select Die Details" 
                      label="name" 
                      track-by="name"
                      :options="diedetailsOptions" 
                      :show-labels="false" >
                    </multiselect>
                  </b-form-group>
                </b-col>
              </b-row>
              <b-row class="mr-3 mt-3">
                <b-col cols="12">
                  <b-button
                    class="float-right"
                    id="button-submit"
                    title="Click to Clear Inputs"
                    variant="outline-secondary"
                    @click="clearInputs()">
                    <font-awesome-icon 
                      icon="times-circle" 
                      size="sm" 
                      class="icon"/> CLEAR
                  </b-button>
                  <b-button
                    class="float-right  mr-2"
                    id="button-submit"
                    type="submit"
                    title="Click to Save values"
                    variant="danger">
                    <font-awesome-icon 
                      icon="save" 
                      size="sm" 
                      lass="icon"/> SAVE VALUES
                  </b-button>
                </b-col>
              </b-row>   
            </b-form>
          </b-col>
          <b-col cols="9">
            <b-card class="card_style">
              <b-row>
                  <b-col cols="5">
                  <h4>MULTIPLE ITEM REGISTRATION</h4>
                  <hr class="hr--property" />
                  <div class="red-line"></div>
                  </b-col>
              </b-row>
              <b-media class="pb-2 pt-1">
                <template #aside>
                  <b-img 
                      class="ml-3"
                      :src="require('../../assets/icon_images/excel.svg')" 
                      width="45" 
                      height="45" 
                      alt="placeholder">
                  </b-img>
                </template>
                <h5 class="mb-0 text-left">Upload Data</h5>
                <p class="mb-3 text-left text-muted">Upload Data Description</p>
              </b-media>
              <b-form
                id="form-upload"
                @submit.prevent="uploadFile"
                method="post">
                <b-col>
                  <b-row>
                    <b-col cols="3">
                      <input
                          class="alpha-input"
                          id="input-file"
                          name="file"
                          type="file"
                        />
                    </b-col>
                    <b-col cols="3">
                      <b-button
                        class="mt-1"
                        id="button-upload"
                        type="submit"
                        title="Click to Upload"
                        variant="danger">
                        <font-awesome-icon 
                          icon="upload" 
                          size="sm" 
                          class="icon"/>Upload
                      </b-button>
                      <b-button
                        class="mt-1 ml-2"
                        id="button-clear"
                        variant="outline-secondary"
                        title="Click to Clear Inputs"
                        @click="clearUpload()">
                        <font-awesome-icon 
                          icon="times-circle" 
                          size="sm" 
                          class="icon"/> 
                          Clear
                      </b-button>
                    </b-col>
                      <b-col cols="3" class="mt-2">
                        <label class="mr-3">Device: </label>
                        <label id="lbl_device"><b>{{device_name_value}}</b></label>
                      </b-col>
                      <b-col cols="3" class="mt-2">
                        <label class="mr-3">Model: </label>
                        <label id="lbl_model"><b>{{model_name_value}}</b></label>
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
                  :per-page="perPage"
                  :current-page="currentPage">
                  <template #cell(no)="data" v-if="currentPage == 1">
                      {{data.index+1}}
                  </template>
                  <template #cell(no)="data" v-else>
                      {{(data.index+1) + (currentPage * perPage) - perPage}}
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
            </b-card>
          </b-col>
        </b-row>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
export default {
  components: {},
  name: "partsRegistration",
   data() {
      return {
        currentPage: 1,
        perPage: 10,
        deviceOptions: [],
        modelOptions: [],
        classOptions: 
        [
          {name: 'MO'},
          {name: 'P'}
        ],
        diedetailsOptions: 
        [
          {name: 'New Die'},
          {name: '2nd Die'},
          {name: 'Transferred Die'}
        ],
        form: {
          slc_device: {
            value: "",
            state: null,
            validation:"",
          },
          slc_model: {
            value: "",
            state: null,
            validation:"",
          },
          txt_batch_number: {
            value: "",
            state: null,
            validation:"",
          },
          txt_parent_drawing_number: {
            value: "",
            state: null,
            validation:"",
          },
          txt_drawing_number_new_revision: {
            value: "",
            state: null,
            validation:"",
          },
          txt_part_number: {
            value: "",
            state: null,
            validation:"",
          },
          txt_part_number_new_revision: {
            value: "",
            state: null,
            validation:"",
          },
          slc_class: {
            value: "",
            state: null,
            validation:"",
          },
          slc_die_details: {
            value: "",
            state: null,
            validation:"",
          },
        },
        fields: 
        [
          {key: "no", class: 'text-center'},
          {key: "batch_number", sortable: true, class: 'text-center'},
          {key: "parent_drawing_number", label: "Parent Number", sortable: true, class: 'text-center'},
          {key: "drawing_number_new_revision", label: "Parent Number Revision", sortable: true, class: 'text-center'},
          {key: "part_number", sortable: true, class: 'text-center'},
          {key: "part_number_new_revision", label: "Part Number Revision", sortable: true, class: 'text-center'},
          {key: "class", sortable: true, class: 'text-center'},
          {key: "die_details", sortable: true, class: 'text-center'},
        ],
        items: [],
        upload_device_id : '',
        upload_model_id : '',
        device_name_value: '',
        model_name_value: ''
      }
    },
    mounted()
    {
      this.loadDevice();
      this.form.slc_model.value = []; 
      this.form.slc_device.value = []; 
    },
    computed:{
      totalRows: function(){
        return this.items.length
      }, 
    },
    methods: 
    {
    uploadFile: function(){
      if(document.getElementById("input-file").value == "")
      {
        this.toast("Warning", "Please select file to upload.");
      }
      else{
        var formData = new FormData();
        var excelFile = document.querySelector("#input-file");
        let fileType = excelFile.files[0].name.split('.')[1];
        var token = "6ppnQkNNbZW2BMKAGOLXVCDv2ZL76fLcXPyljmkzQkAMREJJldU8edCIfP7h88zx";
          
        if((fileType !== 'csv') && (fileType !== 'xlsx')){
          document.getElementById("input-file").value = "";
          this.toast("Warning", "Please Upload a CSV or XLSX file type only.");
        }
        else{
        formData.append("file_name", excelFile.files[0]);

        this.$store
        .dispatch("uploadPartsRegistrationParts", [formData, token])
        .then((response)=>{
          console.log(response);
          this.upload_device_id = response.data.result.inserted[0].device_id;
          this.upload_model_id = response.data.result.inserted[0].model_name_id;
          this.items = response.data.result.inserted;
          let status = response.data.status;
          if(status == "Success"){
            document.getElementById("input-file").value = "";
            this.toast(status, response.data.message);
            this.loadDeviceName();
            this.loadModelName();
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
      }
    },
    loadDeviceName: function(){
        this.$store
        .dispatch("loadSpecificDeviceName", this.upload_device_id)
        .then((response) => {
          this.device_name_value = response.data.device_name;
        });
    },
    loadModelName: function(){
        this.$store
        .dispatch("loadSpecificModelName", this.upload_model_id)
        .then((response) => {
          this.model_name_value = response.data.name;
        });
    },
    loadDevice: function()
    {
      this.$store.dispatch("loadDevice").then((response) => {
          let information = response.data.data;
          Object.keys(information).forEach((key) => {
              this.deviceOptions.push({
                'id':information[key].id, 
                'device_name':information[key].device_name
              })
          });  
      });  
    },
    loadModel: function(device_id)
    {
      this.modelOptions = [];     
      this.$store.dispatch("loadModelPerDevice", device_id).then((response) => {
          let information = response.data;
          Object.keys(information).forEach((key) => {
            this.modelOptions.push({
                'id':information[key].id, 
                'model_name':information[key].name
            })
        });
      });  
    },
    clearFilter: function(){
        this.form.slc_model.value = []; 
    },
    submitForm: function(){
      var formData = {
        "device_id"                       : this.form.slc_device.value.id,
        "model_name_id"                   : this.form.slc_model.value.id,
        "batch_number"                    : document.getElementById("txt_batch_number").value,
        "parent_drawing_number"           : document.getElementById("txt_parent_drawing_number").value,
        "drawing_number_new_revision"     : document.getElementById("txt_drawing_number_new_revision").value, 
        "part_number"                     : document.getElementById("txt_part_number").value,
        "part_number_new_revision"        : document.getElementById("txt_part_number_new_revision").value, 
        "class"                           : this.form.slc_class.value.name,
        "die_details"                     : this.form.slc_die_details.value.name,
        "emp_id"                          : 161822
      }
      document.getElementById("button-submit").disabled = true;
      this.$store
      .dispatch("savePartsRegistrationParts", formData)
      .then((response) =>{
        let status = response.data.status;
        if (status == "Success") {
        this.toast(status, response.data.message);
          this.clearInputs();
        this.getUnit;
        } else if (status == "Warning") {
            Object.keys(response.data.data).forEach((key) => {
            this.form[key]["state"] = false;
            this.form[key]["validation"] = response.data.data[key][0];
            });
            this.toast(status, "Please review your inputs.");
        } else if (status == "Error") {
            this.toast(status, response.data.message);
        }
      })
      .catch((error) => {
            let error_data = error.data;
            let status = error.data.status;
            console.log(error_data.error);
            for(const[key] of Object.entries(error_data.error))
            {
                this.toast(status,error_data.error[key][0]);
            };
            this.clearInputs();
        })
        .finally(() => {
            document.getElementById("button-submit").disabled = false;
        });
    },
    clearInputs: function(){
          this.form = {
            slc_device: {
              value: '',
              state: null,
              validation:"",
            },
            slc_model: {
              value: '',
              state: null,
              validation:"",
            },
            txt_batch_number: {
              value: "",
              state: null,
              validation:"",
            },
            txt_parent_drawing_number: {
              value: "",
              state: null,
              validation:"",
            },
            txt_drawing_number_new_revision: {
              value: "",
              state: null,
              validation:"",
            },
            txt_part_number: {
              value: "",
              state: null,
              validation:"",
            },
            txt_part_number_new_revision: {
              value: "",
              state: null,
              validation:"",
            },
            slc_class: {
              value: "",
              state: null,
              validation:"",
            },
            slc_die_details: {
              value: "",
              state: null,
              validation:"",
            },
        };
    },
    toast: function (status, message){
        this.$toast(message, {
            type:status.toLowerCase().trim(),
            position: "bottom-right",
        });
    },
    clearUpload: function(){
        document.getElementById("input-file").value = "";
    },
  }
}
</script>

<style lang="scss" scoped>

.card_style{
  height: 915px;
  border : 1px solid gray;
  border-radius: 10px;
  box-shadow: 0px 0px 5px 0px #5f4646;
   padding: 10px 10px 20px 10px;
   font-size: 15px;
}

.page-item.active .page-link
{
  background-color: #A30B1A;
  border-color: #A30B1A;
}

.hr--property {
  border-bottom: 3px solid #e84656;
  margin-top: 0;
  margin-bottom: 2rem;
  width: 60%;
}
</style>