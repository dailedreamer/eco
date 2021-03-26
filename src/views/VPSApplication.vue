<template>
  <b-container fluid> 
     <b-row class="mb-4">
      <b-col cols="12">
        <b-media>
          <template #aside>
            <b-img 
                :src="require('../assets/icon_images/completed-task.svg')" 
                width="44" 
                height="37" 
                alt="placeholder">
            </b-img>
          </template>
            <h5 class="mb-0">VPS Application</h5>
            <small class="text-secondary">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, illum.
            </small>
        </b-media>
     </b-col>
    </b-row>
    <b-row>
      <b-col cols="12">
                <b-row>
                   <b-col xl="3" lg="6">
                            <b-card 
                            class="custom_card_filter">
                                    <b-row class="mt-0">
                                        <b-col cols="8">
                                           <b-media>
                                            <template #aside>
                                                <b-img class='mt-2'
                                                    :src="require('../assets/icon_images/SpecificIcons/delivery.svg')" 
                                                    width="44" 
                                                    height="37" 
                                                    alt="placeholder">
                                                </b-img>
                                            </template>
                                                <p class="mb-0">Received</p>
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
                                                    :src="require('../assets/icon_images/SpecificIcons/cancel.svg')" 
                                                    width="44" 
                                                    height="37" 
                                                    alt="placeholder">
                                                </b-img>
                                            </template>
                                                <p class="mb-0">Not Received</p>
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
                        <b-col xl="3" lg="6">
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
                        <b-col xl="3" lg="6">
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
                    </b-row>
                    <b-row class="mt-3">
                        <b-col cols="12">
                            <b-card class="pl-2 pr-2">
                                <b-card-body>
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
                                        <template #cell(No)="">
                                            <!-- {{data.index+1}} -->
                                        </template>
                                        <template #cell(action)="data">
                                            <b-button 
                                                variant="danger" 
                                                size="sm"
                                                v-b-modal.vps_modal_id
                                                @click="update_modal(data.index)">
                                                <font-awesome-icon icon="edit" />
                                            </b-button>
                                            <b-button class = "ml-2"
                                                variant="danger" 
                                                size="sm">
                                                <font-awesome-icon icon="trash" />
                                            </b-button>
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
                                    <!-- <VpsApplicationUpdateModal /> -->
                                    <VpsUpdateModal :get_data="this.click_value"/>
                                </b-card-body>
                            </b-card>
                        </b-col>
                    </b-row>
      </b-col>
    </b-row>
  
  </b-container>
</template>

<script>
// import { mapGetters } from "vuex";
import VpsUpdateModal from '../components/VpsApplication/VpsUpdateModal';
// import VpsApplicationUpdateModal from '../../VpsApplication/VpsApplicationUpdateModal';
export default {
  name: "VpsData",
  components: {
        // VpsApplicationUpdateModal
        VpsUpdateModal
    },
  data() {
      return {
        value: 45,
        max: 100,
        currentPage: 1,
        perPage: 10,
        fields: [
        {key: "no", sortable: true,},
        {key: "action", sortable: true,},
        {key: "eco_number", sortable: true,},
        {key: "device", sortable: true,},
        {key: "model", sortable: true,},
        {key: "unit_name", sortable: true,},
        {key: "unit_number", sortable: true,},
        {key: "part_number", sortable: true,},
        {key: "revision",sortable: true,},
        {key: "target_sending_date",sortable: true,},
        {key: "date_received", sortable: true,},
        {key: "target_application", sortable: true,},
        {key: "date_applied", sortable: true,},         
      ],
       items: 
      [
        {id: 1,eco_number: '123456877',part_number: 'KD021-13254', revision: '04',device:'BRU',model:'FR50', unit_name:'RJ Cassette', unit_number: 'RJ Cassette'},
        {id: 2,eco_number: '123456877',part_number: 'KD021-13254', revision: '04',device:'BRU',model:'FR50', unit_name:'RJ Cassette', unit_number: 'RJ Cassette'},
        {id: 1,eco_number: '123456877',part_number: 'KD021-13254', revision: '04',device:'BRU',model:'FR50', unit_name:'RJ Cassette', unit_number: 'RJ Cassette'},
      ],
      //loading
        isBusy: false,
        click_value: ({}),
    }
  },
    methods:
    {
        update_modal : function(index)
        {
           
            this.click_value= ({});
            this.click_value = this.items[index];     
            // console.log(this.click_value);
        }

    },
    mounted() {
    //   this.update_modal();
      
    }
};
</script>

<style scoped>

</style>