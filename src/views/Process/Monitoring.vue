<template>
  <b-container fluid>
    <b-row>
      <b-col cols="12">
        <vessel>
          <vessel-body>
            <b-row>
              <b-col cols="2">
                <b-card 
                @click="LoadContents('for_applied')"
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
                @click="LoadContents('for_application')"
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
                <SearchTemplate field_set='3'>
                  <b-button 
                    class="pb-1 mt-sm-1"
                    variant="danger"
                    block
                    type="submit"
                    id="button-submit">
                    <b-icon 
                      icon="search"></b-icon>
                      &nbsp;Go!
                  </b-button>
                </SearchTemplate>
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
import ProcessContent from '../../components/Process/ProcessMonitoring/ProcessContent';
export default {
  name: "Blank",
  components: {
    ProcessContent
  },
  data(){
    return{
     applied_count:'',
     applied_percentage: '',
     for_application_count: '',
     for_application_percentage: '',
    }
  },
  mounted(){
   this.loadPercentage();
  },
   methods:{
     loadPercentage()
     {
       this.$store.dispatch("loadPercentage").then((response) => {
              let data = response.data;
                     
              console.log(data);
              this.applied_count = data.applied_count;
              this.applied_percentage = data.applied_percentage;
              this.for_application_count = data.application_count;
              this.for_application_percentage = data.application_percentage;
          });  
     },
     LoadContents(content)
     {
       this.$store.dispatch("loadContents",content).then((response) => {
              let data = response.data;
              console.log(data);
          }); 
     },
  }
};
</script>

<style scoped>
</style>