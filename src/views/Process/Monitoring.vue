<template>
  <b-container fluid>
    <b-row>
      <b-col cols="12">
        <vessel>
          <vessel-body>
            <b-row>
              <b-col cols="2">
                <b-card 
                  class="custom_card_filter">
                    <b-row class="mt-0">
                        <b-col cols="9">
                            <b-media>
                                <h5 class="mb-2 text-muted text-left">Applied</h5>
                                <p class="mb-0  text-left custom_p_percentage text-muted text-left"><strong>36%</strong></p>
                            </b-media>
                        </b-col>
                        <b-col cols="3">
                            <h5 class="mb-0  text-right custom_p_count text-muted">54</h5>
                        </b-col>
                    </b-row>
                    <b-row class="mt-0">
                        <b-col cols="12">
                            <b-progress 
                              class='mt-3' 
                              variant="danger" 
                              :value="36" 
                              :max="100" 
                              animated 
                              show-progress></b-progress>
                        </b-col>
                    </b-row>
                </b-card>
              </b-col>
              <b-col cols="2">
                <b-card 
                  class="custom_card_filter">
                    <b-row class="mt-0">
                        <b-col cols="9">
                            <b-media>
                                <h5 class="mb-2 text-muted text-left">For Application</h5>
                                <p class="mb-0  text-left custom_p_percentage text-muted text-left"><strong>64%</strong></p>
                            </b-media>
                        </b-col>
                        <b-col cols="3">
                            <h5 class="mb-0  text-right custom_p_count text-muted">96</h5>
                        </b-col>
                    </b-row>
                    <b-row class="mt-0">
                        <b-col cols="12">
                            <b-progress 
                              class='mt-3' 
                              variant="danger" 
                              :value="64" 
                              :max="100" 
                              animated 
                              show-progress></b-progress>
                        </b-col>
                    </b-row>
                </b-card>
              </b-col>
              <b-col cols="6">
                <b-card no-body class="pt-1 pl-3 pr-3" >
                  <b-row>
                    <b-col>
                     <b-form-group
                        class="pt-2"
                        id="filter_by"
                        label-cols-sm="2"
                        label="Filter:"
                        label-align="left"
                        horizontal>
                        <b-row>
                            <b-col cols="4">
                                <multiselect  
                                    v-model="deviceValue"
                                    :options="deviceOptions" 
                                    :searchable="true"
                                    :show-labels="false"
                                    placeholder="Device" 
                                    label="name" 
                                    track-by="id"></multiselect>
                            </b-col>
                            <b-col cols="4">
                                <multiselect  
                                    v-model="modelValue"
                                    :options="modelOptions" 
                                    :searchable="true"
                                    :show-labels="false"
                                    placeholder="Model" 
                                    label="name" 
                                    track-by="id"></multiselect>
                            </b-col>
                            <b-col cols="4">
                                <multiselect  
                                    v-model="unitValue" 
                                    :options="unitOptions"
                                    :searchable="true"
                                    :show-labels="false"
                                    placeholder="Unit Name/Unit No." 
                                    label="name" 
                                    track-by="id" 
                                    ></multiselect>
                            </b-col>
                        </b-row>
                    </b-form-group>
                    <b-form-group
                        id="filter_by"
                        label-cols-sm="2"
                        label="Filter By:"
                        label-align="left"
                        horizontal>
                        <b-row>
                            <b-col cols="4">
                                <multiselect  
                                    v-model="filterByValue" 
                                    :options="filterByOptions"
                                    :searchable="true"
                                    :show-labels="false"
                                    placeholder="ECO Number" 
                                    label="name" 
                                    track-by="id"></multiselect>
                            </b-col>
                        </b-row>
                    </b-form-group>
                    </b-col>
                  </b-row>
                </b-card>
              </b-col>
            </b-row>
            <b-row class="mt-4">
                <ProcessContent />
            </b-row>
          </vessel-body>
        </vessel>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import Multiselect from 'vue-multiselect'
import ProcessContent from '../../components/Process/ProcessMonitoring/ProcessContent';
export default {
  name: "Blank",
  components: {
    Multiselect, 
    ProcessContent
  },
  data(){
    return{
      deviceValue: [],
      deviceOptions: [
          {id: '1', name: 'Device 1'},
          {id: '2', name: 'Device 2'},
          {id: '3', name: 'Device 3'},
      ],
      modelValue: [],
      modelOptions: [
          {id: '1', name: 'Model 1'},
          {id: '2', name: 'Model 2'},
          {id: '3', name: 'Model 3'}
      ],
      unitValue: [],
      unitOptions: [
          {id: '1', name: 'Unit 1/name 1'},
          {id: '2', name: 'Unit 2/name 2'},
          {id: '3', name: 'Unit 3/name 3'}
      ],
      filterByValue: [],
      filterByOptions: [
          {id: '1', name: 'eco_001'},
          {id: '2', name: 'eco_002'},
          {id: '3', name: 'eco_003'},
          {id: '4', name: 'eco_004'},
          {id: '5', name: 'eco_005'},
      ]
    }
  }
};
</script>

<style scoped>
</style>