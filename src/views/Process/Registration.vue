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
                         <template #cell(No)="data">
                            {{data.index+1}}
                        </template>
                      <template #cell(device)="data"> 
                          <multiselect  
                            v-model="data.item.device"
                            placeholder="Select device" 
                            label="device_name" 
                            track-by="id" 
                            :options="device_options"
                            :show-labels="false"
                            @input="loadModel(data.item.device.id, data.index) ,changeDevice(data.index)"  
                                             
                            ></multiselect>
                      </template>
                      <template #cell(model)="data"> 
                          <multiselect  
                            v-model="data.item.model"
                            placeholder="Select model" 
                            label="name" 
                            track-by="id" 
                            :options="data.item.model_options"
                            :show-labels="false"
                            @input="loadUnit(data.item.model.id, data.index)"
                            
                          ></multiselect>
                      </template>
                      <template #cell(unit_name)="data"> 
                          <multiselect  
                            v-model="data.item.unit"
                            placeholder="Select Unit" 
                            label="unit_name" 
                            track-by="id" 
                            :options="data.item.unit_options"
                            :show-labels="false"
                          ></multiselect>
                      </template>
                      <template #cell(unit_no)="data">  
                       {{data.item.unit.unit_number}}
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
                 <div class = "mt-4">
                    <AButton class = "float-right mr-3"
                      id="button-submit"
                      type="submit"
                      title="Update Selected"
                      variant="primary"
                    >
                    <font-awesome-icon icon="save" size="sm" class="icon" /> Update Selected
                    </AButton>
              </div>
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
        {
          key: "unit_no",
          sortable: true,
        },         
      ],
      device_options: [],
      // model_options: [],
      // unit_options: [],
      items: 
      [
        {id: 1,eco_number: '123456877',unit_options:[], model_options:[],part_number: 'KD021-13254', revision: '04',device:[],model:[], unit:[]},
        {id: 2,eco_number: '123456877',unit_options:[], model_options:[],part_number: 'KD021-13254', revision: '04',device:[],model:[], unit:[]},
        {id: 1,eco_number: '123456877',unit_options:[], model_options:[],part_number: 'KD021-13254', revision: '04',device:[],model:[], unit:[]},
 
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
        this.device_options = data;      

      });  
    },
    loadModel: function(device_id, index)
    {
      this.items[index].model_options = [];     
      this.$store.dispatch("loadModelPerDevice", device_id).then((response) => {
        let data = response.data;
          this.items[index].model=[];
          this.items[index].model_options = data;
          console.log(data);
        });  
        
    },
    loadUnit: function(model_id, index)
    {
          this.unit_options = [];
          this.$store.dispatch("loadUnitPerModel", model_id).then((response) => {
            let data = response.data;
            this.items[index].unit=[];
            this.items[index].unit_options = data;
          });  
    },
    changeDevice: function(index)
    {
        this.items[index].model=[];
        this.items[index].unit=[];
    },
  },
  computed: {
    ...mapGetters(["getDevice"]),
    ...mapGetters(["getModel"]),
    ...mapGetters(["getUnit"])
  },
   mounted() {
     this.loadDevice();
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