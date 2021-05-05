<template>
    <b-container fluid>
        <b-table outlined hover responsive
            id="process_monitoring_table_id"
            :items="this.fields"
            :fields="process_table_fields"
            :per-page="perPage"
            :current-page="currentPage">
            <template #cell(action)="data">
                <b-button 
                    variant="danger" 
                    size="sm"
                    v-b-modal.process_modal_id
                    :id="'btn_actions_'+data.item.id">
                        <font-awesome-icon icon="edit" />
                </b-button>
            </template>
            <template #cell(units)="data">
                {{ data.value.unit_number }}/{{ data.value.unit_name }}
            </template>
        </b-table>
        <b-pagination class="alpha__table__pagination"
            v-model="currentPage"
            :total-rows="rows"
            :per-page="perPage"
            align="right"
            pills></b-pagination>
            <ProcessMonitoringUpdateModal />
    </b-container>
</template>

<script>
import ProcessMonitoringUpdateModal from '../ProcessMonitoring/ProcessMonitoringUpdateModal';
export default {
    name: 'ProcessContent',
    components: {
        ProcessMonitoringUpdateModal
    },
   props: {
        fields:Array,
    },
    data(){
        return{ 
            perPage: 10,
            currentPage: 1,
            process_table_list:[],
            process_table_fields:
            [
               {key: "action"},
               {key: "eco_number", sortable: true},
               {key: "device_name", sortable: true},
               {key: "model_name", sortable: true}, 
               {key: "units", label:"Unit No/Unit Name", sortable: true},
               {key: "parent_drawing_number", sortable: true}, 
               {key: "part_number", sortable: true}, 
               {key: "part_number_revision", sortable: true}, 
               {key: "revision_mark", sortable: true}, 
               {key: "target_application", sortable: true}, 
               {key: "actual_application", sortable: true}, 
               {key: "carf_number", sortable: true}, 
               {key: "serial_number", sortable: true}, 
               {key: "manhour_before", sortable: true}, 
               {key: "manhour_after", sortable: true}, 
               {key: "manhour_difference", sortable: true}, 
               {key: "remarks", sortable: true}, 
            ],
        }
    },
    computed:{
        
        rows(){
            return this.process_table_list.length
        }
    },
    methods:{
        // loadForApplication()
        // {
        //     this.process_table_list = 
        // }
    }
}
</script>

<style scoped>
</style>