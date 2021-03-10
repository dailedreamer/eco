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
                  <b-form-group
                  id="input-group-device-name"
                  label="Device Name"
                  label-class="alpha__form__label"
                  label-for="device-name"
                >
                  <b-form-select
                    id="select-device-name"
                    name="device_id"
                    v-model="form.device_id.value"
                    :options="device_options"
                    requried
                    class="alpha-input"
                  ></b-form-select>
                </b-form-group>

                  <b-form-group
                  id="input-group-model-name"
                  label="Model Name"
                  label-class="alpha__form__label"
                  label-for="model-name"
                >
                  <b-form-select
                    id="select-model-name"
                    name="model_id"
                    v-model="form.model_id.value"
                    :options="model_options"
                    requried
                    class="alpha-input"
                  ></b-form-select>
                </b-form-group>

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
               
                  <b-col lg="12">
                     <b-row>
                        <b-col lg="3" class="md-2">
                            <b-form-file id="file"  v-on:change="FileUpload()"></b-form-file>
                        </b-col>
                        <b-col lg="3" class="2">
                          <AButton
                              id="button-submit"
                              type="submit"
                              title="Click to add budget"
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
               <br>
                 <b-col cols="12">
                    <b-table class="alpha__table text-nowrap"
                         hover
                        bordered
                        responsive
                        :fields="fields">
                    </b-table>
                     <b-pagination
                      align="right"
                      class="alpha__table__pagination"
                      pills
                      v-model="currentPage"
                      :total-rows="rows"
                      :per-page="perPage"
                    ></b-pagination>
                 </b-col>
                
              </b-col>
            </b-col>

        </b-row>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import axios from "axios";
export default {
  name: "partsRegistration",
   data() {
      return {
        form: {
          device_id: {
            value: 0,
            state: null,
            validation:"",
          },
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
        currentPage: 1,
        perPage: 10,
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
    mounted(){
      this.loadTable();
    },
    // computed:{
    //   ...mapGetters([""]),
    // },
    methods: {
      //  loadTable: function () {
      //  this.$store.dispatch("loadparts").then((result) => {
      //  this.toast(result.status, result.message);
      // });
        submitFile()
      {
        let formData = new FormData();
        formData.append('file', this.file);

        axios.post('/parts-registration',
          formData,
          {
            headers: {
              'Content-Type': 'multipart/form-data'
            }
          }
        ).then(function(){
          console.log('success');
        })
        .catch(function() {
          console.log('fail');
        });
      },
      FileUpload(){
        this.file = this.$refs.file.files[0];
      }
   
    }
};
</script>

<style lang="scss">
@import "../../template/assets/sass/imports/general";

.b-col
{
  text-align: left;
}

.div_upload_data 
{
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

hr 
{
  border-bottom: 3px solid #e84656;
  margin-top: 0;
  margin-bottom: 2rem;
  width: 60%;
}
</style>