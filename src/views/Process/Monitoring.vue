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
     
    }
  }
};
</script>

<style scoped>
</style>