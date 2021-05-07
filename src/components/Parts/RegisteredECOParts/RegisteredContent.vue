<template>
    <b-container fluid>
        <b-row>
            <b-col cols="8">
                <SearchTemplate field_set='2'>
                  <b-button 
                    class="pb-1 mt-sm-1"
                    variant="danger"
                    block
                    type="submit"
                    id="button-submit">
                    <b-icon 
                      icon="search"
                      ></b-icon>
                      &nbsp;Go!
                  </b-button>
                </SearchTemplate>
            </b-col>
            <b-col cols="4">
                <b-button 
                    size="sm" 
                    variant="danger" 
                    class="float-right" 
                    v-b-modal.edit_content_modal_id>
                        <font-awesome-icon icon="edit" /> Edit Content
                </b-button>
            </b-col>   
        </b-row>
        <b-row class="mt-3">
            <b-col cols="12">
                <b-card>
                    <b-row>
                        <b-col cols="9">
                            <h4 class="mb-1 text-left">
                                {{title}}
                            </h4>
                            <p class="mb-3 text-left text-muted">Status: {{status}}</p>
                        </b-col>
                        <b-col cols="3">
                            <h3 class="text-muted text-right">{{percentage}}</h3> 
                        </b-col>
                    </b-row>
                    <b-row>
                        <b-col cols="12">
                            <b-table 
                                class="alpha__table text-nowrap"
                                responsive 
                                hover
                                bordered 
                                head-variant="light"
                                id="registered_table_id" 
                                :items="registered_eco_parts_list" 
                                :fields="this.fields"
                                :per-page="perPage"
                                :current-page="currentPage">
                                <template #cell(actions)="data">
                                    <b-link
                                        v-b-modal.update_modal_id
                                        @click="updateRegisteredEcoParts(data.index)">
                                        Edit
                                    </b-link>
                                </template>
                            </b-table>  
                            <b-pagination
                                v-model="currentPage"
                                :total-rows="rows"
                                :per-page="perPage"
                                align="right"
                                pills></b-pagination>
                        </b-col>
                    </b-row>
                </b-card>
            </b-col>
        </b-row>
         <EditContentModal />
         <UpdateModal 
            :get_data="this.id"/>
    </b-container>
</template>

<script>
import EditContentModal from '../RegisteredECOParts/EditContentModal';
import UpdateModal from '../RegisteredECOParts/UpdateModal';
export default {
    name: "RegisteredContent",
    components: {
         EditContentModal, 
         UpdateModal,
    },
    props: {
        title:String,
        status:String,
        percentage:String,
        fields:Array,
        },
    data(){
        return{
            perPage: 10,
            currentPage: 1,
            registered_eco_parts_list: 
            [
                {device_name:"BRU", model_name:"X200", unit_number:"KS01023420", unit_name:"Feed", part_number:"KD02160-Y120", new_revision:"01", eco_number:"02189939", class:"P", parts_supplier:"SPPI"},
                {device_name:"Mariner", model_name:"GPII", unit_number:"KS01023421", unit_name:"Feed", part_number:"KD02160-Y130", new_revision:"02", eco_number:"02189940", class:"P", parts_supplier:"OB KOGYO"},
                {device_name:"PPR", model_name:"X200", unit_number:"KS01023422", unit_name:"Feed", part_number:"KD02160-Y140", new_revision:"03", eco_number:"02189941", class:"M", parts_supplier:"CHORAKAWA"},
                {device_name:"BRU", model_name:"GPII", unit_number:"KS01023423", unit_name:"Feed", part_number:"KD02160-Y150", new_revision:"03", eco_number:"02189942", class:"M", parts_supplier:"SPPI"},
                {device_name:"Mariner", model_name:"X200", unit_number:"KS01023424", unit_name:"Feed", part_number:"KD02160-Y160", new_revision:"02", eco_number:"02189943", class:"P", parts_supplier:"SPPI"},
                {device_name:"PPR", model_name:"GPII", unit_number:"KS01023425", unit_name:"Feed", part_number:"KD02160-Y170", new_revision:"01", eco_number:"02189944", class:"M", parts_supplier:"OB KOGYO"},
                {device_name:"BRU", model_name:"X200", unit_number:"KS01023426", unit_name:"Feed", part_number:"KD02160-Y180", new_revision:"01", eco_number:"02189945", class:"P", parts_supplier:"OB KOGYO"},
                {device_name:"BRU", model_name:"GPII", unit_number:"KS01023427", unit_name:"Feed", part_number:"KD02160-Y190", new_revision:"01", eco_number:"02189946", class:"M", parts_supplier:"CHORAKAWA"},
                {device_name:"Mariner", model_name:"X100", unit_number:"KS01023428", unit_name:"Feed", part_number:"KD02160-Y200", new_revision:"02", eco_number:"02189947", class:"P", parts_supplier:"CHORAKAWA"},
                {device_name:"Mariner", model_name:"X100", unit_number:"KS01023429", unit_name:"Feed", part_number:"KD02160-Y210", new_revision:"02", eco_number:"02189948", class:"P", parts_supplier:"OB KOGYO"},
                {device_name:"PPR", model_name:"X100", unit_number:"KS01023430", unit_name:"Feed", part_number:"KD02160-Y220", new_revision:"03", eco_number:"02189949", class:"M", parts_supplier:"OB KOGYO"},  
                {device_name:"PPR", model_name:"X100", unit_number:"KS01023431", unit_name:"Feed", part_number:"KD02160-Y230", new_revision:"03", eco_number:"02189950", class:"M", parts_supplier:"OB KOGYO"},
            ],
            id: {},
        }
    },
    computed:{
        rows() {
            return this.registered_eco_parts_list.length
        }
    },
    methods:{
        updateRegisteredEcoParts: function(id){
            this.id = {};
            this.id = this.registered_eco_parts_list[id];
        }
    }   
}
</script>

<style scoped>
</style>