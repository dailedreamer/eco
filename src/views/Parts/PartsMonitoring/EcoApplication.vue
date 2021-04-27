<template>
    <b-container fluid>
        <b-media class="pb-2 pt-1">
            <template #aside>
            <b-img 
                :src="require('../../../assets/icon_images/settings.svg')" 
                width="47" 
                height="45" 
                alt="placeholder">
            </b-img>
            </template>
            <h5 class="mb-0 text-left">Eco Parts</h5>
            <p class="mb-3 text-left text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum, dicta!</p>
        </b-media>
        <b-row class="mb-3">
            <b-col cols="3">
                <b-card class="custom_card_filter">
                    <b-row class="mt-0">
                        <b-col cols="4">
                            <b-media>
                                <template #aside>
                                    <b-img class='mt-2'
                                        :src="require('../../../assets/icon_images/SpecificIcons/like.svg')" 
                                        width="44" 
                                        height="37" 
                                        alt="placeholder">
                                    </b-img>
                                </template>
                                <h5 class="mb-2 text-muted text-left">Applied</h5>
                                <p class="mb-0  text-left custom_p_percentage text-muted text-left"><strong>36%</strong></p>
                            </b-media>
                        </b-col>
                        <b-col cols="8">
                            <p class="mb-0  text-right custom_p_count text-muted">40</p>
                        </b-col>
                    </b-row>
                    <b-row class="mt-0">
                        <b-col cols="12">
                            <b-progress class='mt-3' variant="danger" :value="36" :max="100" animated show-progress></b-progress>
                        </b-col>
                    </b-row>
                </b-card>
            </b-col>
            <b-col cols="3">
                <b-card class="custom_card_filter">
                    <b-row class="mt-0">
                        <b-col cols="8">
                            <b-media>
                                <template #aside>
                                    <b-img class='mt-2'
                                        :src="require('../../../assets/icon_images/SpecificIcons/folder.svg')" 
                                        width="44" 
                                        height="37" 
                                        alt="placeholder">
                                    </b-img>
                                </template>
                                <h5 class="mb-2 text-muted text-left">For Application</h5>
                                <p class="mb-0  text-left custom_p_percentage text-muted text-left"><strong>64%</strong></p>
                            </b-media>
                        </b-col>
                        <b-col cols="4">
                            <p class="mb-0  text-right custom_p_count text-muted">150</p>
                        </b-col>
                    </b-row>
                    <b-row class="mt-0">
                        <b-col cols="12">
                            <b-progress class='mt-3' variant="danger" :value="64" :max="100" animated show-progress></b-progress>
                        </b-col>
                    </b-row>
                </b-card>
            </b-col>
        </b-row>
        <b-row>
           <Body :title="title"/>
        </b-row>
    </b-container>
</template>

<script>
import Body from "../../../components/Parts/PartsMonitoring/Body.vue";
export default {
    name: "EcoApplication",
    components:{
        Body
    },
    data(){
        return{
            title: "",
        }
    },
    mounted(){
        this.showEcoPartsTable();
    },
    methods:{
        showEcoPartsTable: function(){
            this.title = "ECOPARTS"
        },
    }
    
}
</script>

<style scoped>
    p {
      font-size: 12px;
    }
    .custom_p_percentage {
        font-size: 1.5rem;
    }
    .custom_p_count {
        font-size: 2.1rem;
    }
</style>