<template>
    <b-row class="mt-3">
        <b-col cols="12">
            <b-card class="pl-2 pr-2">
                <b-card-body>
                    <b-col cols="12">
                        <b-table outlined hover responsive
                        class="alpha__table text-nowrap"
                            id="ec_action_items_table_id"
                            :items="ec_action_items"
                            :fields="ec_action_items_table_fields"
                            :per-page="perPage"
                            :current-page="currentPage">
                            <template #cell(action)="data">
                                <b-button 
                                    variant="danger" 
                                    size="sm"
                                    v-b-modal.ec_action_items_modal_id        
                                    @click="update_modal(data.index)">
                                    
                                        <font-awesome-icon icon="edit" />
                                </b-button>
                                <b-button class = "ml-2"
                                    variant="danger" 
                                    size="sm"
                                    v-b-modal.process_modal_id
                                    :id="'btn_actions_'+data.item.id">
                                        <font-awesome-icon icon="trash" />
                                </b-button>
                            </template>
                        </b-table>
                    </b-col>
                </b-card-body>
            </b-card>
        </b-col>
        <ECActionViewModal :get_data="this.click_value"/>
    </b-row>
</template>

<script>
import ECActionViewModal from '../../components/ECActionItems/ECActionItemsViewModal';
export default {
   name: "ECActionItemsContent",
   components: {
        ECActionViewModal
    },
    
    data()
    {
        return {
            currentPage: 1,
            perPage: 10,
            click_value: ({}),
            ec_action_items_table_fields:
            [
               {key: "action"},
               {key: "eco_number", sortable: true},
               {key: "meeting", label: "FTEC-FDTP Meeting Date", sortable: true},
               {key: "device", sortable: true}, 
               {key: "date_updates", label:"Date Updated/Send to FTEC", sortable: true},
               {key: "fdtp_pe_pic", label:"FDTP PE In-Charge", sortable: true}, 
               {key: "ec_minutes", label:"EC Minutes Item No.", sortable: true}, 
               {key: "eco_action_item", label:"ECO Action Item", sortable: true}, 
               {key: "ftec_target_response_date", label:"FTEC Target Response Date", sortable: true}, 
               {key: "ftec_pe_answer", label:"FTEC PE's Answer", sortable: true}, 
               {key: "ftec_pe_pic", label:"FTEC PE In-Charge", sortable: true}, 
               {key: "response_date", label:"Response Date", sortable: true}, 
               {key: "status", sortable: true}, 
               {key: "remarks", sortable: true}, 
            ],
            ec_action_items: 
            [
                {eco_number: "KD02165-Y144", meeting:"01", device: "1", date_updates: "20", fdtp_pe_pic:"sample", ec_minutes:"sample", eco_action_item:"sample", ftec_target_response_date:"sample", ftec_pe_answer:"sample", ftec_pe_pic:"sample", response_date:"sample", status:"sample", remarks:"sample"},
                {eco_number: "KD02165-Y144", meeting:"01", device: "1", date_updates: "20", fdtp_pe_pic:"sample", ec_minutes:"sample", eco_action_item:"sample", ftec_target_response_date:"sample", ftec_pe_answer:"sample", ftec_pe_pic:"sample", response_date:"sample", status:"sample", remarks:"sample"},
                {eco_number: "KD02165-Y144", meeting:"01", device: "1", date_updates: "20", fdtp_pe_pic:"sample", ec_minutes:"sample", eco_action_item:"sample", ftec_target_response_date:"sample", ftec_pe_answer:"sample", ftec_pe_pic:"sample", response_date:"sample", status:"sample", remarks:"sample"}
            ]
        }
    },
    computed:{
        rows(){
            return this.ec_action_items_table_fields.length
        }
    },
    methods:
    {
        update_modal : function(index)
        {
            this.click_value= ({});
            this.click_value = this.ec_action_items[index];     
            console.log(this.click_value);
        }
    }
   
}
</script>

<style scoped>

</style>