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
                <hr class="hr--property" />
                <div class="red-line"></div>
                <b-form-group
                  id="select_model"
                  label="Device Name:"
                  label-class="alpha__form__label"
                  label-for="input-model-name"
                >
                  <multiselect  
                    v-model="form.device_id.value"
                    placeholder="Select device" 
                    label="device_name" 
                    track-by="id" 
                    :options="deviceOptions"
                    :show-labels="false"      
                     @input="loadModel(form.device_id.value.id)"                                
                  ></multiselect>
                </b-form-group>
                <b-form-group
                  id="select_model"
                  label="Model Name:"
                  label-class="alpha__form__label"
                  label-for="input-model-name"
                >
                  <multiselect  
                    v-model="form.model_id.value"
                    placeholder="Select Model" 
                    label="name" 
                    track-by="id" 
                    :options="modelOptions"
                    :show-labels="false"                                            
                  ></multiselect>
                </b-form-group>

                  <b-form-group
                  class = "mt-1"
                  id="input-group-batch-number"
                  label="Batch Number:"
                  label-for="input-batch-number"
                  >
                  <b-form-input
                 
                  id="input-batch-number"
                  name="batch_number"
                  v-model="form.batch_number.value"
                  :state="form.batch_number.state"
                  type="text"
                  placeholder=" Enter Batch Number"
                  required
                /></b-form-group>

                 <b-form-group
                  class = "mt-1"
                  id="input-group-batch-number"
                  label="Parent Number:"
                  label-class="alpha__form__label"
                  label-for="input-parent-number"
                >
                  <b-form-input
            
                  id="input-parent-number"
                  name="parent_drawing_number"
                   v-model="form.parent_drawing_number.value"
                  :state="form.parent_drawing_number.state"
                  type="text"
                  placeholder=" Enter Parent Number"
                  required
                /></b-form-group>

                 <b-form-group
                  class = "mt-1"
                  id="input-group-batch-number"
                  label="Revision:"
                  label-class="alpha__form__label"
                  label-for="input-revision"
                >
                  <b-form-input
              
                  id="input-parent-number"
                  name="drawing_number_current_revision"
                  v-model="form.drawing_number_current_revision.value"
                  :state="form.drawing_number_current_revision.state"
                  type="text"
                  placeholder=" Enter Revision"
                  required
                /></b-form-group>

                <b-form-group
                  class = "mt-1"
                  id="input-group-part-number"
                  label="Part Number:"
                  label-class="alpha__form__label"
                  label-for="input-part-number"
                >
                  <b-form-input
          
                  id="input-part-number"
                  name="part_number"
                  v-model="form.part_number.value"
                  :state="form.part_number.state"
                  type="text"
                  placeholder=" Enter Part Number"
                  required
                /></b-form-group>

                  <b-form-group
                  class = "mt-1"
                  id="input-group-part-number-revision"
                  label="Revision:"
                  label-class="alpha__form__label"
                  label-for="input-part-number-revision"
                >
                  <b-form-input
                
                  id="input-part-number-revision"
                  name="part_number_current_revision"
                  v-model="form.part_number_current_revision.value"
                  :state="form.part_number_current_revision.state"
                  type="text"
                  placeholder=" Enter Revision"
                  required
                /></b-form-group>

                  <b-form-group
                   class = "mt-1"
                  id="input-group-class"
                  label="Class:"
                  label-class="alpha__form__label"
                  label-for="input-class"
                  >
                  <b-form-input
                
                  id="input-class"
                  name="class"
                  v-model="form.class.value"
                  :state="form.class.state"
                  type="text"
                  placeholder=" Enter class"
                  required
                /></b-form-group>

                  <b-form-group
                   class = "mt-1"
                  id="input-group-die-details"
                  label="Die Details:"
                  label-class="alpha__form__label"
                  label-for="input-die-details"
                  >
                  <b-form-input
             
                  id="input-die-details"
                  name="die_details"
                  v-model="form.die_details.value"
                  :state="form.die_details.state"
                  type="text"
                  placeholder=" Enter Die Details"
                  required
                /></b-form-group>
              <div>
                <center>
                    <AButton
                      class = "mt-3"
                      id="button-submit"
                      type="submit"
                      title="Click to add budget"
                      variant="primary"
                    >
                      <font-awesome-icon icon="save" size="sm" class="icon" /> SAVE VALUES
                    </AButton>

                    <AButton

                      class = "mt-3 ml-3"
                      id="button-submit"
                      type="submit"
                      title="Click to clear"
                      variant="outline-secondary"
                    >
                      <font-awesome-icon icon="save" size="sm" class="icon" /> CLEAR
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
                          <label>Device: </label>     
                          <label id="lbl_device"></label>
                        </b-col>
                        <b-col lg="3" class="md-2">    
                          <label id="lbl_model"></label>
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
        <!-- <b-row>
          <b-col cols="3">
            <b-card>
              <b-row class="mr-5 ml-5">
                <b-col cols="12">
                  <b-form
                    id="form-parts-registration"
                    @submit.prevent="submitForm"
                    method="post"
                    >
                    <h4>SINGLE ITEM REGISTRATION</h4>
                      <hr class="hr--property" />
                      <div class="red-line"></div>
                      <b-form-group
                        id="select_model"
                        label="Device Name"
                        label-for="input-model-name"
                      >
                        <multiselect  
                          v-model="form.device_id.value"
                          placeholder="Select device" 
                          label="device_name" 
                          track-by="id" 
                          :options="deviceOptions"
                          :show-labels="false"                                            
                        ></multiselect>
                      </b-form-group>
                      <b-form-group
                        id="select_model"
                        label="Model Name"
                        label-for="input-model-name"
                      >
                        <multiselect  
                          v-model="form.model_id.value"
                          placeholder="Select Model" 
                          label="model_name" 
                          track-by="id" 
                          :options="modelOptions"
                          :show-labels="false"                                            
                        ></multiselect>
                      </b-form-group>

                        <b-form-group
                        id="input-group-batch-number"
                        label="Batch Number"
                        label-for="input-batch-number"
                        >
                        <b-form-input
                        id="input-batch-number"
                        name="batch_number"
                        v-model="form.batch_number.value"
                        :state="form.batch_number.state"
                        type="text"
                        placeholder="Enter Batch Number"
                        required
                      /></b-form-group>

                      <b-form-group
                        id="input-group-batch-number"
                        label="Parent Number"
                        label-for="input-parent-number"
                      >
                        <b-form-input
                        class="alpha-input"
                        id="input-parent-number"
                        name="parent_drawing_number"
                        v-model="form.parent_drawing_number.value"
                        :state="form.parent_drawing_number.state"
                        type="text"
                        placeholder="Enter Parent Number"
                        required
                      /></b-form-group>

                      <b-form-group
                        id="input-group-batch-number"
                        label="Revision"
                        label-for="input-revision"
                      >
                        <b-form-input
                        class="alpha-input"
                        id="input-parent-number"
                        name="drawing_number_current_revision"
                        v-model="form.drawing_number_current_revision.value"
                        :state="form.drawing_number_current_revision.state"
                        type="text"
                        placeholder="Enter Revision"
                        required
                      /></b-form-group>

                      <b-form-group
                        id="input-group-part-number"
                        label="Part Number"
                        label-for="input-part-number"
                      >
                        <b-form-input
                        class="alpha-input"
                        id="input-part-number"
                        name="part_number"
                        v-model="form.part_number.value"
                        :state="form.part_number.state"
                        type="text"
                        placeholder="Enter Part Number"
                        required
                      /></b-form-group>

                        <b-form-group
                        id="input-group-part-number-revision"
                        label="Revision"
                        label-for="input-part-number-revision"
                      >
                        <b-form-input
                        class="alpha-input"
                        id="input-part-number-revision"
                        name="part_number_current_revision"
                        v-model="form.part_number_current_revision.value"
                        :state="form.part_number_current_revision.state"
                        type="text"
                        placeholder="Enter Revision"
                        required
                      /></b-form-group>

                        <b-form-group
                        id="input-group-class"
                        label="Class"
                        label-for="input-class"
                        >
                        <b-form-input
                        class="alpha-input"
                        id="input-class"
                        name="class"
                        v-model="form.class.value"
                        :state="form.class.state"
                        type="text"
                        placeholder="Enter class"
                        required
                      /></b-form-group>

                        <b-form-group
                        id="input-group-die-details"
                        label="Die Details"
                        label-for="input-die-details"
                        >
                        <b-form-input
                        class="alpha-input"
                        id="input-die-details"
                        name="die_details"
                        v-model="form.die_details.value"
                        :state="form.die_details.state"
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
              </b-row>
            </b-card>
          </b-col>
          <b-col cols="9">
            <b-card>bbb</b-card>
          </b-col>
        </b-row> -->
        
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
// import Select2 from 'v-select2-component';
export default {
  components: {},
  name: "partsRegistration",
   data() {
      return {
        deviceOptions: [],
        modelOptions: [],
       
        rows: '',
   
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
      }
    },
    mounted()
    {
      this.loadDevice();
    },
    methods: 
    {
        uploadFile: function()
        {
          document.getElementById("button-upload").disabled = true;
            let formData = new FormData(document.getElementById("form-upload")); 
            
            this.$store.dispatch("uploadExcel",formData)
            .then((response) => {
                console.log(response)
            });
        },
        myChangeEvent: function(val)
        {
          console.log(val);
        },
        mySelectEvent: function({id, text})
        {
          console.log({id, text})
        },
        submitForm: function()
        {
            var formData = new FormData(document.getElementById('form-parts-registration'));
            document.getElementById('button-submit').disabled.true;
            this.$store
            .dispatch("insertPartsRegistrationPe", formData)
            .then((response) => {
                console.log(JSON.stringify(this.form));
                console.log(response)
            });
        },
        loadDevice: function()
        {
          this.$store.dispatch("loadDevice").then((response) => {
              let data = response.data.data;
              this.deviceOptions = data;      
          });  
        },
        loadModel: function(device_id)
        {
          console.log(device_id);
          this.modelOptions = [];     
          this.$store.dispatch("loadModelPerDevice", device_id).then((response) => {
              let data = response.data;
              this.modelOptions = data;
              console.log(data);
            });  
            
        },
    },
};
</script>

<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>
<style lang="scss" scoped>
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

.hr--property {
  border-bottom: 3px solid #e84656;
  margin-top: 0;
  margin-bottom: 2rem;
  width: 60%;
}
</style>