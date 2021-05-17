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
                      required
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
                      required
                      autocomplete="off"/>
                  </b-form-group>
                  <b-form-group
                    class = "mt-1"
                    id="input-group-batch-number"
                    label="Revision:"
                    label-class="alpha__form__label"
                    label-for="txt_drawing_number_current_revision">
                    <b-form-input
                      id="txt_drawing_number_current_revision"
                      name="txt_drawing_number_current_revision"
                      v-model="form.txt_drawing_number_current_revision.value"
                      :state="form.txt_drawing_number_current_revision.state"
                      type="text"
                      placeholder="Enter Revision"
                      required
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
                      required
                      autocomplete="off"/>
                  </b-form-group>
                  <b-form-group
                    class = "mt-1"
                    id="input-group-part-number-revision"
                    label="Revision:"
                    label-class="alpha__form__label"
                    label-for="txt_part_number_current_revision">
                    <b-form-input
                      id="txt_part_number_current_revision"
                      name="txt_part_number_current_revision"
                      v-model="form.txt_part_number_current_revision.value"
                      :state="form.txt_part_number_current_revision.state"
                      type="text"
                      placeholder="Enter Revision"
                      required
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
                    type="submit" 
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
                          required
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
                        <label>Device: </label>     
                        <label id="lbl_device">{{items.device_name}}</label>
                      </b-col>
                      <b-col cols="3" class="mt-2">
                        <label id="lbl_model">{{items.name}}</label>
                        <label>Model: </label>
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
                  <template #cell(no)="data">
                    {{data.index + 1}}
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
            value: 0,
            state: null,
            validation:"",
          },
          slc_model: {
            value: 0,
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
          txt_drawing_number_current_revision: {
            value: "",
            state: null,
            validation:"",
          },
          txt_part_number: {
            value: "",
            state: null,
            validation:"",
          },
          txt_part_number_current_revision: {
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
          {key: "no", sortable: true, class: 'text-center'},
          {key: "batch_number", sortable: true, class: 'text-center'},
          {key: "parent_drawing_number", label: "Parent Number", sortable: true, class: 'text-center'},
          {key: "drawing_number_current_revision", label: "Revision", sortable: true, class: 'text-center'},
          {key: "part_number", sortable: true, class: 'text-center'},
          {key: "part_number_current_revision", label: "Revision", sortable: true, class: 'text-center'},
          {key: "class", sortable: true, class: 'text-center'},
          {key: "die_details", sortable: true, class: 'text-center'},
        ],
        items: 
        [
          // {id: 1, batch_number: '123456', parent_drawing_number: 'KD111-123456', drawing_number_current_revision: '01', part_number: 'KD001-111111', part_number_current_revision: '01', class: 'A', die_details: 'sample' },
          // {id: 2, batch_number: '234567', parent_drawing_number: 'KD222-123456', drawing_number_current_revision: '04', part_number: 'KD001-121212', part_number_current_revision: '05', class: 'B', die_details: 'sample' },
          // {id: 3, batch_number: '234568', parent_drawing_number: 'KD333-123456', drawing_number_current_revision: '01', part_number: 'KD001-232323', part_number_current_revision: '02', class: 'C', die_details: 'sample' },
          // {id: 4, batch_number: '234569', parent_drawing_number: 'KD444-123456', drawing_number_current_revision: '02', part_number: 'KD001-343434', part_number_current_revision: '03', class: 'D', die_details: 'sample' },
          // {id: 5, batch_number: '234570', parent_drawing_number: 'KD555-123456', drawing_number_current_revision: '05', part_number: 'KD001-454545', part_number_current_revision: '06', class: 'E', die_details: 'sample' },
        ]
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
        uploadFile: function()
        {
          var formData = new FormData();
          var excelFile = document.querySelector("#input-file");
          let fileType = excelFile.files[0].name.split('.')[1];
          var token = "7MegNJKG3LgpU5rMxzGCKgyCm1nicLI7SnI1Q1HzWcviSTi6tyBfh79ereFrgOfr";
        
          if((fileType !== 'csv') && (fileType !== 'xlsx')){
            document.getElementById("input-file").value = "";
            this.toast("Warning", "Please Upload a CSV or XLSX file type only.");
          }
          else{
            formData.append("file_name", excelFile.files[0]);

            this.$store
            .dispatch("uploadPartsRegistrationParts", [formData, token])
            .then((response)=>{
              this.items = response.data.result.inserted;
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
                document.getElementById("input-file").value = "";
                console.log(error);
              })
              .finally(() => {
              });
          }
        },
        loadDevice: function()
        {
          
          this.$store.dispatch("loadDevice").then((response) => {
              // let data = response.data.data;
              // this.deviceOptions = data;   
              // console.log(this.deviceOptions); 
              // console.log(response);
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
          // console.log(device_id);
          this.modelOptions = [];     
          this.$store.dispatch("loadModelPerDevice", device_id).then((response) => {
              // let data = response.data;
              // this.modelOptions = data;
              // console.log(data);
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
            // this.form.slc_device.value = []; 
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
            txt_drawing_number_current_revision: {
              value: "",
              state: null,
              validation:"",
            },
            txt_part_number: {
              value: "",
              state: null,
              validation:"",
            },
            txt_part_number_current_revision: {
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