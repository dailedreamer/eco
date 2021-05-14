<template>
  <b-container fluid>
    <b-row>
      <b-col cols="12">
        <vessel>
          <vessel-body>
            <b-row>
              <b-col cols="2">
                <b-card 
                @click="loadContents('for_applied')"
                  class="custom_card_filter">
                    <b-row class="mt-0">
                        <b-col cols="9">
                            <b-media>
                                <h5 class="mb-2 text-muted text-left">Applied</h5>
                                <p class="mb-0  text-left custom_p_percentage text-muted text-left"><strong>{{ applied_percentage }}%</strong></p>
                            </b-media>
                        </b-col>
                        <b-col cols="3">
                            <h5 class="mb-0  text-right custom_p_count text-muted">{{applied_count}}</h5>
                        </b-col>
                    </b-row>
                    <b-row class="mt-0">
                        <b-col cols="12">
                            <b-progress 
                              class='mt-3' 
                              variant="danger" 
                              :value="this.applied_percentage"
                              :max="100" 
                              animated 
                              show-progress></b-progress>
                        </b-col>
                    </b-row>
                </b-card>
              </b-col>
              <b-col cols="2">
                <b-card 
                @click="loadContents('for_application')"
                  class="custom_card_filter">
                    <b-row class="mt-0">
                        <b-col cols="9">
                            <b-media>
                                <h5 class="mb-2 text-muted text-left">For Application</h5>
                                <p class="mb-0  text-left custom_p_percentage text-muted text-left"><strong>{{for_application_percentage}}%</strong></p>
                            </b-media>
                        </b-col>
                        <b-col cols="3">
                            <h5 class="mb-0  text-right custom_p_count text-muted">{{for_application_count}}</h5>
                        </b-col>
                    </b-row>
                    <b-row class="mt-0">
                        <b-col cols="12">
                            <b-progress 
                              class='mt-3' 
                              variant="danger" 
                              :value="this.for_application_percentage" 
                              :max="100" 
                              animated 
                              show-progress></b-progress>
                        </b-col>
                    </b-row>
                </b-card>
              </b-col>
              <b-col cols="6">
                <b-card no-body class="p-3">
                  <b-card-text>
                    <b-row class="mb-2">
                      <b-col>
                        <b-form-group
                          class="form_group_custom"
                          id="filter_by"
                          label-cols-sm="2"
                          label="Filter:"
                          label-align="left"
                          label-size="sm"
                          horizontal>
                          <b-row>
                            <b-col cols="4">
                                <multiselect  
                                    v-model="deviceValue"
                                    name="searchTemplateDevice"
                                    :options="this.deviceOptions" 
                                    :searchable="true"
                                    :show-labels="false"
                                    placeholder="Device" 
                                    label="name" 
                                    track-by="id"
                                    @input="load_filtered_device(deviceValue), loadModel()"
                                   ></multiselect>
                            </b-col>
                            <b-col cols="4">
                                <multiselect  
                                    v-model="modelValue"
                                    name="searchTemplateModel"
                                    :options="modelOptions" 
                                    :searchable="true"
                                    :show-labels="false"
                                    placeholder="Model" 
                                    label="name" 
                                    track-by="id"
                                    @input="load_filtered_model(modelValue),loadUnit()"></multiselect>
                            </b-col>
                            <b-col cols="4">
                                <multiselect  
                                    v-model="unitValue" 
                                    name="searchTemplateUnit"
                                    :options="unitOptions"
                                    :searchable="true"
                                    :show-labels="false"
                                    placeholder="Unit Name/Number" 
                                    label="name" 
                                    track-by="id" 
                                    :max-height="50"
                                    @input="load_filtered_unit(unitValue)"
                                    ></multiselect>
                            </b-col>
                          </b-row>
                        </b-form-group>
                      </b-col>
                    </b-row>
                    <b-row>
                      <b-col>
                        <b-form-group
                            class="form_group_custom"
                            id="filter_by"
                            label-cols-sm="2"
                            label="Filter By:"
                            label-align="left"
                            label-size="sm"
                            horizontal>
                            <b-row>
                                <b-col cols="8">
                                        <b-input block 
                                        v-model="filterByValue" 
                                        class="filterby_input" 
                                        placeholder="ECO Number"
                                        ></b-input>
                                </b-col>
                            </b-row>
                        </b-form-group>
                      </b-col>
                    </b-row>
                  </b-card-text>
                </b-card>
              </b-col>
            </b-row>
            <b-row class="mt-4">
                <ProcessContent :fields="this.for_application_list" :filter_data="filterByValue"/>
            </b-row>
          </vessel-body>
        </vessel>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import ProcessContent from '../../components/Process/ProcessMonitoring/ProcessContent';
export default {
  name: "Blank",
  components: {
    ProcessContent,
  
  },
  data(){
    return{
     applied_count:'',
     applied_percentage: '',
     for_application_count: '',
     for_application_percentage: '',
     for_application_list: [],
     fields_for_filter: [],
     status: '',


     deviceValue: [],
     deviceOptions: [],

      modelValue: [],
      modelOptions: [],

      unitValue: [],
      unitOptions: [],
      filterByValue: '',
      filterBySelectValue: [],
      filterByOptions: []
    }
  },
  mounted(){
   this.loadPercentage();
   this.loadContents('for_applied');
   this.loadDevice();
  },
   methods:{
     loadPercentage()
     {
       this.$store.dispatch("loadPercentage").then((response) => {
              let data = response.data;
              // console.log(data);
              this.applied_count = data.applied_count;
              this.applied_percentage = data.applied_percentage;
              this.for_application_count = data.application_count;
              this.for_application_percentage = data.application_percentage;
          });  
     },
     loadContents(content)
     {
       this.status = content;
       this.$store.dispatch("loadContents",content).then((response) => {
              let data = response.data.data;
            
              this.for_application_list = data; 
              this.fields_for_filter = data;
              // console.log(this.for_application_list);
          }); 
     },
     loadDevice: function () {
            this.deviceOptions=[];
            this.clearFilterBy();
            this.$store.dispatch("loadDevice")
                .then((response) => {
                this.modelOptions=[];
                this.unitOptions=[];
                let information = response.data.data;
                    Object.keys(information).forEach((key) => {
                        this.deviceOptions.push({
                            'id':information[key].id, 
                            'name':information[key].device_name
                        })
                    });
            });  
        },

        loadModel: function () {
            this.modelOptions=[];
            this.clearFilterBy();
            this.modelValue = [];
            this.unitOptions=[];
            this.unitValue = [];
                this.$store.dispatch("loadModelPerDevice", this.deviceValue.id)
                .then((response) => {
                    let information = response.data;
                        Object.keys(information).forEach((key) => {
                            this.modelOptions.push({
                                'id':information[key].id, 
                                'name':information[key].name
                            })
                        });
                });  
        },

        loadUnit: function () {
            this.unitOptions=[];
            this.clearFilterBy();
            this.unitValue = [];
                this.$store.dispatch("loadUnitPerModel", this.modelValue.id)
                .then((response) => {
                    let information = response.data;
                        Object.keys(information).forEach((key) => {
                            this.unitOptions.push({
                                'id':information[key].id, 
                                'name':information[key].unit_name + '/' + information[key].unit_number
                            })
                        });
                });  
        },
        load_filtered_device: function(device)
        {
              let data = [];
              for(let i = 0; i <this.fields_for_filter.length;i++)
              {
                if(this.fields_for_filter[i].device_name === device.name)
                {
                   data.push(
                        this.fields_for_filter[i]
                    )
                }
              }
              this.for_application_list = data;
        },
        load_filtered_model: function(model)
        {
              let data = [];

              for(let i = 0; i < this.fields_for_filter.length;i++)
              {
                if(this.fields_for_filter[i].model_name === model.name && this.fields_for_filter[i].device_name === this.deviceValue.name)
                {
                   data.push(
                        this.fields_for_filter[i]
                    )
                }
              }

                 this.for_application_list = data;            
        },
        load_filtered_unit: function(unit)
        {
              let data = [];
              for(let i = 0; i <this.fields_for_filter.length;i++)
              {
                if(this.fields_for_filter[i].model_name === this.modelValue.name && this.fields_for_filter[i].device_name === this.deviceValue.name && this.fields_for_filter[i].unit_name === unit.name)
                {
                   data.push(
                      this.fields_for_filter[i]
                    )
                }
              }
                 this.for_application_list = data;
        },
        setFieldSet: function () {
            // console.log(this.field_set);
           if(this.field_set == "1")
           {
               this.filterByOptions.push(
                    {id: '1', name: 'ECO Number'},
                    {id: '2', name: 'Batch No'},
                    {id: '3', name: 'Supplier'}
               );
           }
           else if(this.field_set == "2")
           {
               this.filterByOptions.push(
                    {id: '1', name: 'ECO Number'},
                    {id: '3', name: 'Supplier'}
               );
           }
           else if(this.field_set == "3")
           {
               this.filterByOptions.push(
                    {id: '1', name: 'ECO Number'}
               );
           }
           else
           {
               this.filterByOptions=[];
           }
        },
        clearFilter: function () {
            this.deviceValue = [];
            this.modelValue = [];
            this.unitValue = [];

            this.modelOptions=[];
            this.unitOptions=[];
        },
        clearFilterBy: function () {
            this.filterBySelectValue = [];
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
  .form_group_custom{
        margin-bottom:0;
    }

    .filterby_input{
        border-color: #e3e3e3;
        height: 43px;
    }
</style>