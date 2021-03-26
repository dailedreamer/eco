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
                    <h5 class="mb-0">Simultaneous</h5>
                    <small class="text-secondary">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, illum.
                    </small>
                </b-media>
            </b-col>
        </b-row>
        <b-row>
            <b-col cols="12">
                <b-row>
                   <b-col cols="3">
                        <b-card 
                            class="custom_card_filter">
                                    <b-row class="mt-0">
                                        <b-col cols="8">
                                           <b-media>
                                            <template #aside>
                                                <b-img class='mt-2'
                                                    :src="require('../assets/icon_images/SpecificIcons/like.svg')" 
                                                    width="44" 
                                                    height="37" 
                                                    alt="placeholder">
                                                </b-img>
                                            </template>
                                                <p class="mb-0">Applied</p>
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
                                           <b-progress class='mt-3' variant="primary" :value="value" :max="max" show-progress animated></b-progress>
                                        </b-col>
                                    </b-row>
                            </b-card>
                        </b-col>
                        <b-col cols="3">
                            <b-card 
                            class="custom_card_filter">
                                    <b-row class="mt-0">
                                        <b-col cols="8">
                                           <b-media>
                                            <template #aside>
                                                <b-img class='mt-2'
                                                    :src="require('../assets/icon_images/SpecificIcons/folder.svg')" 
                                                    width="44" 
                                                    height="37" 
                                                    alt="placeholder">
                                                </b-img>
                                            </template>
                                                <p class="mb-0">For Application</p>
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
                                           <b-progress class='mt-3' variant="warning" :value="value" :max="max" show-progress animated></b-progress>
                                        </b-col>
                                    </b-row>
                            </b-card>
                        </b-col>
                        <b-col cols="3">
                            <b-card 
                            class="custom_card_filter">
                                    <b-row class="mt-0">
                                        <b-col cols="8">
                                           <b-media>
                                            <template #aside>
                                                <b-img class='mt-2'
                                                    :src="require('../assets/icon_images/SpecificIcons/pin.svg')" 
                                                    width="44" 
                                                    height="37" 
                                                    alt="placeholder">
                                                </b-img>
                                            </template>
                                                <p class="mb-0">Cancelled</p>
                                                <h4 class="mt-1">
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
                    </b-row>
                    <!-- <b-row>
                        <b-col cols="2">
                            <b-card class="custom_card_filter">
                                <label class="mt-0 mb-0">Applied</label>
                                <h2 class="text-muted float-right">
                                36%
                                </h2>
                                <br><br>
                                     <b-progress variant="danger" :value="value" :max="max" show-progress animated></b-progress>
                            </b-card>
                        </b-col>
                        <b-col cols="2">
                            <b-card class="custom_card_filter">
                                <label class="mt-0 mb-0">For Application</label>
                                <h2 class="text-muted float-right">
                                45%
                                </h2>
                                <br><br>
                                     <b-progress variant="danger" :value="value" :max="max" show-progress animated></b-progress>
                            </b-card>
                        </b-col>
                        <b-col cols="2">
                            <b-card class="custom_card_filter">
                                <label class="mt-0 mb-0">Cancelled</label>
                                <h2 class="text-muted float-right">
                                87%
                                </h2>
                                <br><br>
                                     <b-progress variant="danger" :value="value" :max="max" show-progress animated></b-progress>
                            </b-card>
                        </b-col>
                    </b-row> -->
                    <b-row class="mt-3">
                        <b-col cols="12">
                            <b-card class="pl-2 pr-2">
                                <b-card-body>
                                    <SimultaneousContent />
                                </b-card-body>
                            </b-card>
                            
                        </b-col>
                    </b-row>
        </b-col>
    </b-row>
  
  </b-container>
</template>

<script>
import SimultaneousContent from "../components/Simultaneous/SimultaneousContent";
export default {
  name: "Simultaneous",
  components: {
      SimultaneousContent
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