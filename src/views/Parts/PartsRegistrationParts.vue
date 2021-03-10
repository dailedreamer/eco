<template>
  <b-container fluid style="text-align:left">
    <b-row>
      <b-col cols="12">
          <b-row class="p-3">
            <b-col cols="3">
              <b-form
               id="form-parts-registration"
               @submit.prevent="submitForm"
               method="post"
              >
              <h4>SINGLE ITEM REGISTRATION</h4>
                <hr />
                <div class="red-line"></div>
                  <b-label>Device Name</b-label>
                  <Select2 class="alpha-input" 
                  placeholder="Please Select Device" 
                  v-model="deviceValue" 
                  :options="deviceOptions" 
                  :settings="{ settingOption: value, settingOption: value }" 
                  @change="myChangeEvent($event)" 
                  @select="mySelectEvent($event)" 
                  required/>
                  <!-- <h4>Value: {{ myValue }}</h4> -->

                  <b-label>Model Name</b-label>
                  <Select2 class="alpha-input" 
                  placeholder="Please Select Model" 
                  v-model="modelValue" 
                  :options="modelOptions"
                  :settings="{ settingOption: value, settingOption: value }" 
                  @change="myChangeEvent($event)" @select="mySelectEvent($event)"
                  required/>

                  <b-form-group
                  id="input-group-batch-number"
                  label="Batch Number"
                  label-class="alpha__form__label"
                  label-for="input-batch-number"
                >
                  <b-form-input
                    class="alpha-input"
                    id="input-batch-number"
                    name="batch-number"
                    type="text"
                    placeholder="Enter Batch Number"
                    required
                /></b-form-group>

                 <b-form-group
                  id="input-group-batch-number"
                  label="Parent Number"
                  label-class="alpha__form__label"
                  label-for="input-parent-number"
                >
                  <b-form-input
                    class="alpha-input"
                    id="input-parent-number"
                    name="parent-number"
                    type="text"
                    placeholder="Enter Parent Number"
                    required
                /></b-form-group>

                 <b-form-group
                  id="input-group-batch-number"
                  label="Revision"
                  label-class="alpha__form__label"
                  label-for="input-revision"
                >
                  <b-form-input
                    class="alpha-input"
                    id="input-parent-number"
                    name="input-revision"
                    type="text"
                    placeholder="Enter Revision"
                    required
                /></b-form-group>

                <b-form-group
                  id="input-group-part-number"
                  label="Part Number"
                  label-class="alpha__form__label"
                  label-for="input-part-number"
                >
                  <b-form-input
                    class="alpha-input"
                    id="input-part-number"
                    name="input-part-number"
                    type="text"
                    placeholder="Enter Part Number"
                    required
                /></b-form-group>

                    <b-form-group
                    id="input-group-part-number-revision"
                    label="Revision"
                    label-class="alpha__form__label"
                    label-for="input-part-number-revision"
                  >
                  <b-form-input
                    class="alpha-input"
                    id="input-part-number-revision"
                    name="input-part-number-revision"
                    type="text"
                    placeholder="Enter Revision"
                    required
                /></b-form-group>

                <b-form-group
                  id="input-group-class"
                  label="Class"
                  label-class="alpha__form__label"
                  label-for="input-class"
                >
                  <b-form-input
                    class="alpha-input"
                    id="input-class"
                    name="input-class"
                    type="text"
                    placeholder="Enter class"
                    required
                /></b-form-group>

                 <b-form-group
                  id="input-group-die-details"
                  label="Die Details"
                  label-class="alpha__form__label"
                  label-for="input-die-details"
                >
                  <b-form-input
                    class="alpha-input"
                    id="input-die-details"
                    name="input-die-details"
                    type="text"
                    placeholder="Enter Die Details"
                    required
                /></b-form-group>
              <div>
                <center>
                    <AButton
                      id="button-submit"
                      type="submit"
                      title="Click to add budget"
                      variant="primary"
                    >
                      <font-awesome-icon icon="save" size="sm" class="icon" /> SAVE VALUES
                    </AButton>
                </center>
              </div>
              </b-form>
            </b-col>
            <b-col cols="9">
              <b-col class="m-3 div_upload_data"><br>
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
                  class="pl-4 pr-4"
                  id="form-upload"
                  @submit.prevent="uploadFile"
                  method="post"
                 >
                  <b-col lg="12">
                     <b-row>
                        <b-col lg="3" class="md-2">
                                <input
                                class="alpha-input"
                                id="input-file"
                                name="file"
                                type="file"
                                accept=".csv"
                                required
                              />
                        </b-col>
                        <b-col lg="3" class="2">
                          <AButton
                              id="button-upload"
                              type="submit"
                              title="Click to Upload"
                              variant="success"
                            >
                            <font-awesome-icon icon="upload" size="sm" class="icon" /> Upload
                          </AButton>
                        </b-col>
                        <b-col lg="3" class="md-2">
                          <label>Device: </label>      <label id="lbl_device"></label>
                        </b-col>
                        <b-col lg="3" class="md-2">    <label id="lbl_model"></label>
                          <label>Model: </label>
                        </b-col>
                     </b-row>
                  </b-col>
                  </b-form>
               <br>
                 <b-col cols="12">
                    <b-table class="alpha__table text-nowrap"
                         hover
                        bordered
                        responsive
                        :fields="fields">
                    </b-table>
                     <!-- <b-pagination
                      align="right"
                      class="alpha__table__pagination"
                      pills
                      v-model="currentPage"
                      :total-rows="rows"
                      :per-page="perPage"
                    ></b-pagination> -->
                 </b-col>
                
              </b-col>
            </b-col>

        </b-row>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import Select2 from 'v-select2-component';
export default {
  components: {Select2},
  name: "partsRegistration",
   data() {
      return {
        deviceValue: '',
        deviceOptions: ['Device 1', 'Device 2', 'Device 3'],// 
        modelValue: '',
        modelOptions: ['Model 1', 'Model 2', 'Model 3'],// or [{id: key, textor [{id: key, text: value}, {id: key, text: value}]
        form: {
          model_id: {
            value: 0,
            state: null,
            validation:"",
          },
          batch_number: {
            value: "",
            state: null,
            validation:"",
          },
          parent_drawing_number: {
            value: "",
            state: null,
            validation:"",
          },
          drawing_number_current_revision: {
            value: "",
            state: null,
            validation:"",
          },
          part_number: {
            value: "",
            state: null,
            validation:"",
          },
          part_number_current_revision: {
            value: "",
            state: null,
            validation:"",
          },
          class: {
            value: "",
            state: null,
            validation:"",
          },
          die_details: {
            value: "",
            state: null,
            validation:"",
          },
        },
        // currentPage: 1,
        // perPage: 10,
        fields: [
        {
          key: "no",
          sortable: true,
        },
        {
          key: "batch_number",
          sortable: true,
        },
        {
          key: "parent_drawing_number",
          sortable: true,
        },
        {
          key: "drawing_number_current_revision",
          sortable: true,
        },
        {
          key: "part_number",
          sortable: true,
        },
          {
          key: "part_number_current_revision",
          sortable: true,
        },
        {
          key: "class",
          sortable: true,
        },
         {
          key: "die_details",
          sortable: true,
        },
      ],
      device_options:[],
      model_options:[],
      }
    },
    methods: {
      uploadFile: function()
      {
          document.getElementById("button-upload").disabled = true;
          let formData = new FormData(document.getElementById("form-upload")); 
          
          this.$store.dispatch("uploadExcel",formData)
          .then((response) => {
              console.log(response)
          });
      },
      myChangeEvent: function(val){
            console.log(val);
        },
        mySelectEvent: function({id, text}){
            console.log({id, text})
        }
    },
};
</script>

<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>
<style lang="scss">
@import "../../template/assets/sass/imports/general";

.b-col
{
  text-align: left;
}

.div_upload_data {
  border : 1px solid black;
  border-radius: 10px;
  box-shadow: 0px 0px 5px 0px #5f4646;
  padding: 10px 10px 20px 10px;
  height: 900px;
  font-size: 13px;
}

.page-item.active .page-link
{
  background-color: #A30B1A;
  border-color: #A30B1A;
}

hr {
  border-bottom: 3px solid #e84656;
  margin-top: 0;
  margin-bottom: 2rem;
  width: 60%;
}
</style>