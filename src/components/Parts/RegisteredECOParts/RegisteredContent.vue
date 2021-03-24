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
                      icon="search"></b-icon>
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
                            <b-table outlined hover fixed 
                                id="registered_table_id" 
                                :items="registered_eco_parts_list" 
                                :fields="this.fields"
                                :per-page="perPage"
                                :current-page="currentPage">
                                    <template #cell(actions)="data">
                                        <b-button 
                                            variant="danger" 
                                            size="sm"
                                            v-b-modal.update_modal_id
                                            :id="'btn_actions_'+data.item.id">
                                                <font-awesome-icon icon="edit" />
                                        </b-button>
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
         <UpdateModal />
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
                    {device:"BRU", model:"X200", unit_number:"KS01023420", unit_name:"Feed", part_number:"KD02160-Y120", revision_no:"01", eco_no:"02189939", class:"P", parts_supplier:"SPPI"},
                    {device:"Mariner", model:"GPII", unit_number:"KS01023421", unit_name:"Feed", part_number:"KD02160-Y130", revision_no:"02", eco_no:"02189940", class:"P", parts_supplier:"OB KOGYO"},
                    {device:"PPR", model:"X200", unit_number:"KS01023422", unit_name:"Feed", part_number:"KD02160-Y140", revision_no:"03", eco_no:"02189941", class:"M", parts_supplier:"CHORAKAWA"},
                    {device:"BRU", model:"GPII", unit_number:"KS01023423", unit_name:"Feed", part_number:"KD02160-Y150", revision_no:"03", eco_no:"02189942", class:"M", parts_supplier:"SPPI"},
                    {device:"Mariner", model:"X200", unit_number:"KS01023424", unit_name:"Feed", part_number:"KD02160-Y160", revision_no:"02", eco_no:"02189943", class:"P", parts_supplier:"SPPI"},
                    {device:"PPR", model:"GPII", unit_number:"KS01023425", unit_name:"Feed", part_number:"KD02160-Y170", revision_no:"01", eco_no:"02189944", class:"M", parts_supplier:"OB KOGYO"},
                    {device:"BRU", model:"X200", unit_number:"KS01023426", unit_name:"Feed", part_number:"KD02160-Y180", revision_no:"01", eco_no:"02189945", class:"P", parts_supplier:"OB KOGYO"},
                    {device:"BRU", model:"GPII", unit_number:"KS01023427", unit_name:"Feed", part_number:"KD02160-Y190", revision_no:"01", eco_no:"02189946", class:"M", parts_supplier:"CHORAKAWA"},
                    {device:"Mariner", model:"X100", unit_number:"KS01023428", unit_name:"Feed", part_number:"KD02160-Y200", revision_no:"02", eco_no:"02189947", class:"P", parts_supplier:"CHORAKAWA"},
                    {device:"Mariner", model:"X100", unit_number:"KS01023429", unit_name:"Feed", part_number:"KD02160-Y210", revision_no:"02", eco_no:"02189948", class:"P", parts_supplier:"OB KOGYO"},
                    {device:"PPR", model:"X100", unit_number:"KS01023430", unit_name:"Feed", part_number:"KD02160-Y220", revision_no:"03", eco_no:"02189949", class:"M", parts_supplier:"OB KOGYO"},  
                    {device:"PPR", model:"X100", unit_number:"KS01023431", unit_name:"Feed", part_number:"KD02160-Y230", revision_no:"03", eco_no:"02189950", class:"M", parts_supplier:"OB KOGYO"},
                ],
        }
    },
    computed:{
        rows() {
            return this.registered_eco_parts_list.length
        }
    },
    methods:{
         
    }   
}
</script>

<style scoped>
</style>