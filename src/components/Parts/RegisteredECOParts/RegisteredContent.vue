<template>
    <b-container fluid>
        <b-row>
            <b-col cols="7">
                <b-card>
                     <b-form-group
                        id="filter_by"
                        label-cols-sm="2"
                        label="Filter:"
                        label-align="left"
                        horizontal>
                        <b-row>
                            <b-col cols="4">
                                <multiselect  
                                    v-model="deviceValue"
                                    :options="deviceOptions" 
                                    :searchable="true"
                                    :show-labels="false"
                                    placeholder="Device" 
                                    label="name" 
                                    track-by="id"></multiselect>
                            </b-col>
                            <b-col cols="4">
                                <multiselect  
                                    v-model="modelValue"
                                    :options="modelOptions" 
                                    :searchable="true"
                                    :show-labels="false"
                                    placeholder="Model" 
                                    label="name" 
                                    track-by="id"></multiselect>
                            </b-col>
                            <b-col cols="4">
                                <multiselect  
                                    v-model="unitValue" 
                                    :options="unitOptions"
                                    :searchable="true"
                                    :show-labels="false"
                                    placeholder="Unit" 
                                    label="name" 
                                    track-by="id" 
                                    ></multiselect>
                            </b-col>
                        </b-row>
                    </b-form-group>
                    <b-form-group
                        id="filter_by"
                        label-cols-sm="2"
                        label="Filter By:"
                        label-align="left"
                        horizontal>
                        <b-row>
                            <b-col cols="4">
                                <multiselect  
                                    v-model="filterByValue" 
                                    :options="filterByOptions"
                                    :searchable="true"
                                    :show-labels="false"
                                    :multiple="false" 
                                    :taggable="true" 
                                    placeholder="Unit" 
                                    label="name" 
                                    track-by="id"></multiselect>
                            </b-col>
                            <b-col cols="8">
                                 <b-input class="inputs col-sm-6" ></b-input>
                            </b-col>
                        </b-row>
                    </b-form-group>
                </b-card>
            </b-col>
            <b-col cols="5">
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
                                            variant="primary" 
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
                                aria-controls="my-registered_table_id"
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
import Multiselect from 'vue-multiselect'
export default {
    name: "RegisteredContent",
    components: {
         EditContentModal, 
         UpdateModal,
         Multiselect
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
            deviceValue: [],
            deviceOptions: [
                {id: '1', name: 'Device 1'},
                {id: '2', name: 'Device 2'},
                {id: '3', name: 'Device 3'},
                {id: '4', name: 'Device 4'},
                {id: '5', name: 'Device 5'},
                {id: '6', name: 'Device 6'},
                {id: '7', name: 'Device 7'},
                {id: '8', name: 'Device 8'},
                {id: '9', name: 'Device 9'},
                {id: '10', name: 'Device 10'},
            ],
            modelValue: [],
            modelOptions: [
                {id: '1', name: 'Model 1'},
                {id: '2', name: 'Model 2'},
                {id: '3', name: 'Model 3'}
            ],
            unitValue: [],
            unitOptions: [
                {id: '1', name: 'Unit 1'},
                {id: '2', name: 'Unit 2'},
                {id: '3', name: 'Unit 3'}
            ],
            filterByValue: [],
            filterByOptions: [
                {id: '1', name: 'ECO Number'},
                {id: '2', name: 'Supplier'}
            ]
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
    .select2_model {
        position: absolute;
        margin-top: -4%;
        left: 30%;
    }
    .select2_unit {
        position: absolute;
        margin-top: -4%;
        left: 60%;
    }

    .inputs_style{
        position: absolute;
        margin-top: -4%;
        left: 32%;
        width: 203px;
        height: 29px;
        border-color: #b1b3b4;
        text-align: center;
    }

    .inputs{
        border-color: #e3e3e3;
        width: 185px;
        height: 41px;
    }
</style>