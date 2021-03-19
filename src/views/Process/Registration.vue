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
                <b-col lg="12">
                    <b-row>
                      <b-col lg="3" class="md-2">
                        <b-form-file id="file" accept=".csv"></b-form-file>
                      </b-col>
                      <b-col lg="2" class="md-2">
                        <AButton
                          id="button-submit"
                          type="submit"
                          title="Click to add budget"
                          variant="primary"
                        >
                        <font-awesome-icon icon="upload" size="sm" class="icon" /> Upload
                        </AButton>
                        </b-col>
                     </b-row>
                </b-col>
                 <br>
                  <b-col cols="12">
                    <b-table fixed class="alpha__table text-nowrap"
                        style="overflow-y:none"
                        responsive 
                        hover 
                        bordered 
                        head-variant="light"
                        :fields="fields"
                        :items="items"
                        :busy="isBusy" 
                        :per-page="perPage"
                        :current-page="currentPage">
                      <template #cell(device)="data"> 
                          <multiselect  
                            v-model="data.item.device"
                            placeholder="Select device" 
                            label="text" 
                            track-by="value" 
                            :options="device_options"
                            :show-labels="false"
                            
                            ></multiselect>
                      </template>
                      <template #cell(model)="data"> 
                          <multiselect  
                            v-model="data.item.model"
                            placeholder="Select model" 
                            label="text" 
                            track-by="value" 
                            :options="model_options"
                            :show-labels="false"
                            
                          ></multiselect>
                      </template>
                      <template #cell(unit_name)="data"> 
                          <multiselect  
                            v-model="data.item.unit"
                            placeholder="Select Unit" 
                            label="text" 
                            track-by="value" 
                            :options="unit_options"
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
                      align="right"
                      class="alpha__table__pagination"
                      pills
                      v-model="currentPage"
                   
                      :per-page="perPage"
                    ></b-pagination>
                 </b-col>
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
       currentPage: 1,
        perPage: 10,
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
          key: "revision",
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
      items: 
      [
        {id: 1,eco_number: '123456877', part_number: 'KD021-13254', revision: '04',device:''},
        {id: 2,eco_number: '123456877', part_number: 'KD021-13254', revision: '04',device:''},
        {id: 1,eco_number: '123456877', part_number: 'KD021-13254', revision: '04',device:''}
 
      ],
      //loading
        isBusy: false,
    }
  },
  methods:
  {
    loadDevice: function()
    {
      this.$store.dispatch("loadDevice").then((response) => {
        let data = response.data.data;
        Object.values(data).forEach(function(value){
            value['value'] = value.id;
            value['text'] = value.device_name;
        });
        this.device_options = data;
      });  
  
    },
    loadModel: function()
    {
      this.$store.dispatch("loadModel").then((response) => {
        let data = response.data;
       
          for(const [key, value] of Object.entries(data))
          {
            console.log(key);
            value['value'] = value.id;
            value['text'] = value.name;
          }
            this.model_options = data;
        });  
    },
    loadUnit: function()
    {
           this.$store.dispatch("loadUnit").then((response) => {
              console.log(response);
              let data = response.data;
                for(const [key, value] of Object.entries(data))
                {
                    console.log(key);
                    value['value'] = value.id;
                    value['text'] = value.model_name;
                }
              this.unit_options = data;
           });  
        },
  },
  computed: {
    ...mapGetters(["getDevice"]),
    ...mapGetters(["getModel"]),
    ...mapGetters(["getUnit"])
  },
   mounted() {
     this.loadDevice();
     this.loadModel();
     this.loadUnit();
      // console.log(this.model_options);
     
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