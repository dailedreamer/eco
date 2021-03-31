<template>
    <b-container fluid>
        <b-row>
            <b-col cols="8">
                <b-card 
                    no-body 
                    class="p-3">
                    <b-card-text>
                        <b-row >
                            <b-col>
                                <b-form-group
                                    class="form_group_custom"
                                    id="filter"
                                    label-cols-sm="1"
                                    label="Filter:"
                                    label-align="left"
                                    label-size="sm"
                                    horizontal>
                                    <b-row>
                                        <b-col cols="3">
                                            <multiselect  
                                                v-model="deviceValue"
                                                name="searchTemplateDevice"
                                                :options="this.deviceOptions" 
                                                :searchable="true"
                                                :show-labels="false"
                                                placeholder="Device" 
                                                label="device_name" 
                                                track-by="id"
                                                @input="loadModel(deviceValue.id)"
                                                ></multiselect>
                                        </b-col>
                                        <b-col cols="3">
                                            <multiselect  
                                                v-model="modelValue"
                                                name="searchTemplateModel"
                                                :options="this.modelOptions" 
                                                :searchable="true"
                                                :show-labels="false"
                                                placeholder="Model" 
                                                label="name" 
                                                track-by="id"
                                                @input="loadUnit(modelValue.id)"
                                               ></multiselect>
                                        </b-col>
                                        <b-col cols="3">
                                            <multiselect  
                                                v-model="unitValue" 
                                                name="searchTemplateUnit"
                                                :options="unitOptions"
                                                :searchable="true"
                                                :show-labels="false"
                                                placeholder="Unit Name/Number" 
                                                label="unit_name" 
                                                track-by="id" 
                                                :max-height="50"
                                           
                                                ></multiselect>
                                        </b-col>
                                         <b-col cols="3">
                                            <b-button 
                                                class="pb-1 mt-sm-1"
                                                block
                                                variant="danger"
                                                type="submit"
                                                id="button-submit">
                                                <b-icon 
                                                icon="search"></b-icon> Go!
                                            </b-button>
                                        </b-col>
                                    </b-row>
                                </b-form-group>
                            </b-col>
                        </b-row>
                    </b-card-text>
                </b-card>
            </b-col>
            <b-col cols="4">
                <b-button
                    v-b-modal.modal_with_simultaneous
                    variant="danger" 
                    class="float-right pb2">
                        <font-awesome-icon 
                            icon="edit" /> With Simultaneous
                </b-button>
            </b-col>
        </b-row>
        <b-row class="mt-3">
            <b-col cols="12">
                 <b-table-simple 
                    id="tbl_simultaneous_id"
                    responsive 
                    bordered small 
                    :per-page="perPage"
                    :current-page="currentPage">
                    <b-thead 
                        class="thead-light custom_thead">
                        <b-tr>
                            <b-th class="th_align" nowrap rowspan="3">No</b-th>
                            <b-th class="th_align" nowrap rowspan="3" style="width:200px;">Action</b-th>
                            <b-th class="th_align" nowrap rowspan="3" style="width:100px;">Device</b-th>
                            <b-th class="th_align" nowrap rowspan="3" style="width:100px;">Model</b-th>
                            <b-th class="th_align" nowrap rowspan="3" style="width:100px;">Unit</b-th>
                            <b-th class="th_align" nowrap rowspan="3" style="width:150px;">ECO Number</b-th>
                            <b-th class="th_align" nowrap rowspan="3" style="width:150px;">Target Application</b-th>
                            <b-th class="th_align" nowrap colspan="8">ECO Parts</b-th>
                            <b-th class="th_align" nowrap colspan="4">ECO Process</b-th>
                            <b-th class="th_align" nowrap rowspan="3">Actual Application</b-th>
                            <b-th class="th_align" nowrap rowspan="3">CARF</b-th>
                            <b-th class="th_align" nowrap rowspan="3">Serial Number</b-th>
                        </b-tr>
                        <b-tr>
                            <b-th class="th_align" nowrap colspan="4">Before</b-th>
                            <b-th class="th_align" nowrap colspan="4">After</b-th>
                            <b-th class="th_align" nowrap rowspan="2">Drawing No.</b-th>
                            <b-th class="th_align" nowrap rowspan="2">Rev No.</b-th>
                            <b-th class="th_align" nowrap rowspan="2">Qty</b-th>
                            <b-th class="th_align" nowrap rowspan="2">Details</b-th>
                        </b-tr>
                        <b-tr>
                            <b-th class="th_align" nowrap style="width:100px;">Part No.</b-th>
                            <b-th class="th_align" nowrap style="width:50px;">Rev No.</b-th>
                            <b-th class="th_align" nowrap style="width:50px;">Qty</b-th>
                            <b-th class="th_align" nowrap style="width:150px;">Details</b-th>
                            <b-th class="th_align" nowrap style="width:100px;">Part No.</b-th>
                            <b-th class="th_align" nowrap style="width:50px;">Rev No.</b-th>
                            <b-th class="th_align" nowrap style="width:50px;">Qty</b-th>
                            <b-th class="th_align" nowrap style="width:150px;">Details</b-th>
                        </b-tr>
                    </b-thead>
                    <b-tbody>
                        <b-tr 
                            v-for="item in items.slice((this.currentPage-1) * this.perPage, (this.currentPage) * this.perPage)" 
                            :key="item.id">
                            <b-td class="td_align">{{item.no}}</b-td>
                            <b-td class="td_align">
                                <b-link 
                                    v-b-modal.simultaneous_update_modal_id
                                    @click="updateSimultaneous(item.no)">
                                    Edit
                                </b-link>
                                <label class="ml-1 mr-1 text-secondary">|</label>
                                <b-link >
                                    Delete
                                </b-link>
                                <label class="ml-1 mr-1 text-secondary">|</label>
                                <b-link >
                                    Cancel
                                </b-link>
                            </b-td>
                            <b-td class="td_align">{{item.device_name}}</b-td>
                            <b-td class="td_align">{{item.model_name}}</b-td>
                            <b-td class="td_align">{{item.unit_name}}</b-td>
                            <b-td class="td_align">{{item.eco_number}}</b-td>
                            <b-td class="td_align">{{item.target_application}}</b-td>
                            <b-td class="td_align">{{item.before_part_no}}</b-td>
                            <b-td class="td_align">{{item.before_rev_no}}</b-td>
                            <b-td class="td_align">{{item.before_qty}}</b-td>
                            <b-td class="td_align">{{item.before_details}}</b-td>
                            <b-td class="td_align">{{item.after_part_no}}</b-td>
                            <b-td class="td_align">{{item.after_rev_no}}</b-td>
                            <b-td class="td_align">{{item.after_qty}}</b-td>
                            <b-td class="td_align">{{item.after_details}}</b-td>
                            <b-td class="td_align">{{item.drawing_number}}</b-td>
                            <b-td class="td_align">{{item.drawing_number_rev}}</b-td>
                            <b-td class="td_align">{{item.drawing_number_qty}}</b-td>
                            <b-td class="td_align">{{item.drawing_number_details}}</b-td>
                            <b-td class="td_align">{{item.actual_application}}</b-td>
                            <b-td class="td_align">{{item.carf}}</b-td>
                            <b-td class="td_align">{{item.serial_number}}</b-td>
                        </b-tr>
                    </b-tbody>
                </b-table-simple>
                <b-pagination class="alpha__table__pagination"
                        :total-rows="totalRows" 
                        v-model="currentPage"
                        :per-page="perPage"
                        align="right"
                        pills
                        aria-controls="tbl_simultaneous_id"></b-pagination>
            </b-col>
        </b-row>
        <SimultaneousUpdateModal :get_data="this.id"/>
        <WithSimultaneousModal />
    </b-container>
</template>

<script>
import SimultaneousUpdateModal from '../../components/Simultaneous/SimultaneousUpdateModal';
import WithSimultaneousModal from '../../components/Simultaneous/WithSimultaneousModal';

export default {
    name: 'SimultaneousContent',
    components: {
        SimultaneousUpdateModal,
        WithSimultaneousModal
    },
    data(){
        return {
            perPage: 10,
            currentPage: 1,
            deviceValue: [],
            deviceOptions: [],
            modelValue: [],
            modelOptions: [],
            unitValue: [],
            unitOptions: [],
            items: [
                { no: 1, device_name:"device1", model_name: "model1", unit_name: "unit_name1", unit_number: "unit_no1",
                eco_number: "eco1", target_application: "2021-03-25", before_part_no:"KD0123", before_rev_no:"01",
                before_qty: "45", before_details:"sample",  after_part_no:"", after_rev_no:"", after_qty: "", after_details:"",
                drawing_number: "", drawing_number_rev: "", drawing_number_qty: "", drawing_number_details: "",
                actual_application: "", carf: "", serial_number: ""},
                { no: 2, device_name:"device2", model_name: "model2", unit_name: "unit_name2", unit_number: "unit_no2",
                eco_number: "eco2", target_application: "2021-03-29", before_part_no:"KD0456", before_rev_no:"02",
                before_qty: "100", before_details:"sample only",  after_part_no:"", after_rev_no:"", after_qty: "", after_details:"",
                drawing_number: "", drawing_number_rev: "", drawing_number_qty: "", drawing_number_details: "",
                actual_application: "", carf: "", serial_number: ""},
                 { no: 3, device_name:"device2", model_name: "model2", unit_name: "unit_name2", unit_number: "unit_no2",
                eco_number: "eco2", target_application: "2021-03-29", before_part_no:"KD0456", before_rev_no:"02",
                before_qty: "100", before_details:"sample only",  after_part_no:"KD0456", after_rev_no:"02", after_qty: "100", after_details:"sample",
                drawing_number: "KD0001", drawing_number_rev: "01", drawing_number_qty: "6", drawing_number_details: "sample",
                actual_application: "03-24-2021", carf: "01111", serial_number: "12554541"},
            ],
            id: {},
        }
    },
     computed:{
        totalRows(){
            return this.items.length
        },   
        
    },
    mounted() {
        this.loadDevice();
        // console.log(this.loadModel('3'));
    },
    methods:{
        updateSimultaneous: function(id)
        {
            this.id = {};
            this.id = this.items[id-1];
        },
        loadDevice: function()
        {
            this.$store.dispatch("loadDevice").then((response) => {
                let data = response.data.data;
                this.deviceOptions = data;     
                // console.log(this.deviceOptions); 
            });  
        },
        loadModel: function(device_id)
        {
            // console.log(device_id);
            this.modelOptions = [];     
            this.$store.dispatch("loadModelPerDevice", device_id).then((response) => {
                let data = response.data;
                console.log(response);
                this.modelOptions = data;
            });  
        },
        loadUnit: function(model_id)
        {
            this.unitOptions = [];
            this.$store.dispatch("loadUnitPerModel", model_id).then((response) => {
                let data = response.data;
                this.unitOptions = data;
                console.log(data);
            });  
        },

    }
}
</script>

<style scoped>
    .th_align{
        vertical-align:middle;
        text-align:center!important;
        padding-left:10px;
        padding-right:10px;
    }

    .th_align_style{
        text-align:center!important;
        padding-left:10px;
        padding-right:10px;
        border-bottom-color: white;
    }
    .td_align{
        text-align:center!important;
        vertical-align:middle;
    }
</style>