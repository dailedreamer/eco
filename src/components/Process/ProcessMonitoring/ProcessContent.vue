<template>
    <b-container fluid>
        <b-table outlined hover responsive
            id="process_monitoring_table_id"
            :items="this.fields"
            :fields="process_table_fields"
            :per-page="perPage"
            :current-page="currentPage"
            :filter="this.filter_data"
            >
            <!-- <template #cell(no)="data">
                {{data.index+1}}
            </template>   -->
            <template #cell(no)="data" v-if="currentPage == 1">
                {{data.index+1}}
            </template>
            <template #cell(no)="data" v-else>
                {{(data.index+1) + (currentPage*perPage) - 10}}
            </template>  
            <template #cell(action)="data">
                <b-button 
                    @click="loadSpecificDetails(data.item.id)"
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
            <ProcessMonitoringUpdateModal 
                :details="this.details" 
                :details_change="this.details_change" 
                :device_data="this.deviceValue" 
                :model="this.modelValue" 
                :unitName="this.unitValue"/>
            <!-- <ProcessMonitoringUpdateModal :details="this.details" :details_change="this.details_change" :id="this.id"/> -->

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
        device: Object,
        filter_data: String,
    },
    data(){
        return{ 
            perPage: 10,
            currentPage: 1,
            process_table_list:[],
            process_table_fields:
            [
                {key: "no"},
               {key: "action"},
               {key: "eco_number", sortable: true},
               {key: "device_name", sortable: true},
               {key: "model_name", sortable: true}, 
               {key: "unit_name", label:"Unit No/Unit Name", sortable: true},
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
            details:{},
            details_change:[],
            deviceValue: [],
            modelValue: [],
            unitValue: []
        }
    },
    computed:{
        
        rows(){
            return this.fields.length
        }
    },
    methods:{
        loadSpecificDetails(id)
        {
            // console.log(id);
            this.$store.dispatch("loadSpecificID",id).then((response) => {
                let data = response;
                this.details = data.data.details[0];
                this.details_change = data.data.part_numbers;

                // console.log(this.details);
                // console.log(this.details_change)

                // console.log(response)

                // this.id = id;
                // console.log(data);

                this.deviceValue =[];
                let obj_device = {};
                obj_device["name"] = this.details.device_name;
                obj_device["id"]   = this.details.device_id;
                this.deviceValue.push(obj_device);
              
                this.modelValue =[];
                let obj_model = {};
                obj_model["name"] = this.details.model_name;
                obj_model["id"]   = this.details.model_id;
                this.modelValue.push(obj_model);

                this.unitValue =[];
                let obj_unit = {};
                obj_unit["name"] = this.details.unit_name;
                obj_unit["id"]   = this.details.unit_id;
                this.unitValue.push(obj_unit);         
               
          });
        },   
    }
}
</script>

<style scoped>
</style>