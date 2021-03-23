<template>
    <b-container fluid>
        <b-table outlined hover responsive
            id="process_monitoring_table_id"
            :items="process_table_list"
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
    data(){
        return{ 
            perPage: 10,
            currentPage: 1,
            process_table_list:
            [
                {eco_number: "123456", device_name: "device1", model_name: "model1", units: {unit_number: "unit1", unit_name: "name1"}, 
                    parent_drawing_number: "KD0123456", drawing_number_revision: "01", part_number: "KD02160-Y120", part_number_revision: "01",
                    revision_mark: "1", target_application:"2021-03-19", actual_application:"2021-03-22", carf_number: "012345", serial_number: "12345", 
                    manhour_before:"10", manhour_after: "5", manhour_difference: "5", remarks: ""},
                {eco_number: "234567", device_name: "device2", model_name: "model2", units: {unit_number: "unit2", unit_name: "name2"}, 
                    parent_drawing_number: "KD0104567", drawing_number_revision: "02", part_number: "KD02160-Y125", part_number_revision: "02",
                    revision_mark: "10", target_application:"2021-03-25", actual_application:"", carf_number: "", serial_number: "", 
                    manhour_before:"", manhour_after: "", manhour_difference: "", remarks: ""}
            ],
            process_table_fields:
            [
               {key: "action"},
               {key: "eco_number", sortable: true},
               {key: "device_name", sortable: true},
               {key: "model_name", sortable: true}, 
               {key: "units", label:"Unit No/Unit Name", sortable: true},
               {key: "parent_drawing_number", sortable: true}, 
               {key: "drawing_number_revision", sortable: true}, 
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
    }
}
</script>

<style >
   .page-item.active .page-link
    {
    background-color: #A30B1A;
    border-color: #A30B1A;
    }
</style>