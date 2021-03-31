<template>
  <b-container fluid>
     <b-row class="mb-4">
      <b-col cols="12">
        <b-media>
          <template #aside>
            <b-img 
                :src="require('../assets/icon_images/sync.svg')" 
                width="44" 
                height="37" 
                alt="placeholder">
            </b-img>
          </template>
            <h5 class="mb-0">ECO Action Items</h5>
            <small class="text-secondary">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, illum.
            </small>
        </b-media>
     </b-col>
    </b-row>
    <b-row>
      <b-col cols="12">
            <b-card class="pl-2 pr-2">
                <b-card-body>
                               <b-row>
                   <b-col xl="3" lg="6">
                            <b-card 
                            class="custom_card_filter">
                                    <b-row class="mt-0">
                                        <b-col cols="8">
                                           <b-media>
                                            <template #aside>
                                                <b-img class='mt-2'
                                                    :src="require('../assets/icon_images/SpecificIcons/open.svg')" 
                                                    width="54" 
                                                    height="47" 
                                                    alt="placeholder">
                                                </b-img>
                                            </template>
                                                <p class="mb-0">Open</p>
                                                <h4 class="text-secondary mt-1">
                                                    36%
                                                </h4>
                                            </b-media>
                                        </b-col>
                                        <b-col cols="4">
                                                <h1 class="text-muted ml-5">40</h1> 
                                        </b-col>
                                    </b-row>
                                    <b-row class="mt-0">
                                        <b-col cols="12">
                                           <b-progress class='mt-3' variant="success" :value="value" :max="max" show-progress animated></b-progress>
                                        </b-col>
                                    </b-row>
                            </b-card>
                        </b-col>
                        <b-col xl="3" lg="6">
                            <b-card 
                            class="custom_card_filter">
                                    <b-row class="mt-0">
                                        <b-col cols="8">
                                           <b-media>
                                            <template #aside>
                                                <b-img class='mt-2'
                                                    :src="require('../assets/icon_images/SpecificIcons/closed.svg')" 
                                                    width="54" 
                                                    height="47" 
                                                    alt="placeholder">
                                                </b-img>
                                            </template>
                                                <p class="mb-0">Close</p>
                                                <h4 class="text-secondary mt-1">
                                                    36%
                                                </h4>
                                            </b-media>
                                        </b-col>
                                        <b-col cols="4">
                                                <h1 class="text-muted ml-5">40</h1> 
                                        </b-col>
                                    </b-row>
                                    <b-row class="mt-0">
                                        <b-col cols="12">
                                           <b-progress class='mt-3' variant="danger" :value="value" :max="max" show-progress animated></b-progress>
                                        </b-col>
                                    </b-row>
                            </b-card>
                        </b-col>
                        <b-col cols="6">
                            <SearchTemplate field_set='2'>
                                <b-button 
                                variant="danger"
                                block
                                type="submit"
                                id="button-submit"
                                >
                            <b-icon icon="search"></b-icon>
                                &nbsp;Go!
                                </b-button>
                            </SearchTemplate>
                        </b-col>
                    </b-row>
                    <ECActionItemsContent/>
                </b-card-body>
            </b-card>
      </b-col>
    </b-row>
  
  </b-container>
</template>

<script>
import ECActionItemsContent from "../components/ECActionItems/ECActionItemsContent";
export default {
  name: "ECActionItems",
  components: {
      ECActionItemsContent
  },
  data() {
      return {
        value: 45,
        max: 100
    }
  },
    methods:
    {

    }
};
</script>

<style scoped>

</style>