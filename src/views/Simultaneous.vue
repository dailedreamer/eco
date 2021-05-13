<template>
    <b-container fluid>
        <b-row class="mb-4">
            <b-col cols="12">
                <b-media>
                    <template #aside>
                        <b-img 
                            :src="require('../assets/icon_images/sync.svg')" 
                            width="44" 
                            height="37" 
                            alt="placeholder">
                        </b-img>
                    </template>
                    <h5 class="mb-0">Simultaneous</h5>
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
                            class="custom_card_filter" @click="loadSimultaneousApplied('for_applied')">
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
                                                    {{percentage_applied}}%
                                                </h4>
                                            </b-media>
                                        </b-col>
                                        <b-col cols="4">
                                                <h1 class="text-muted ml-5">{{total_applied}}</h1> 
                                        </b-col>
                                    </b-row>
                                    <b-row class="mt-0">
                                        <b-col cols="12">
                                           <b-progress class='mt-3' variant="primary" :value="percentage_applied" :max="max" show-progress animated></b-progress>
                                        </b-col>
                                    </b-row>
                            </b-card>
                        </b-col>
                        <b-col xl="3" lg="6">
                            <b-card 
                            class="custom_card_filter" @click="loadSimultaneousApplied('for_application')">
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
                                                    {{percentage_application}}%
                                                </h4>
                                            </b-media>
                                        </b-col>
                                        <b-col cols="4">
                                                <h1 class="text-muted ml-5">{{total_application}}</h1> 
                                        </b-col>
                                    </b-row>
                                    <b-row class="mt-0">
                                        <b-col cols="12">
                                           <b-progress class='mt-3' variant="warning" :value="percentage_application" :max="max" show-progress animated></b-progress>
                                        </b-col>
                                    </b-row>
                            </b-card>
                        </b-col>
                        <b-col xl="3" lg="6">
                            <b-card 
                            class="custom_card_filter" @click="loadSimultaneousApplied('cancelled')">
                                    <b-row class="mt-0">
                                        <b-col cols="8">
                                           <b-media>
                                            <template #aside>
                                                <b-img class='mt-2'
                                                    :src="require('../assets/icon_images/SpecificIcons/pin.svg')" 
                                                    width="44" 
                                                    height="37" 
                                                    alt="placeholder">
                                                </b-img>
                                            </template>
                                                <p class="mb-0">Cancelled</p>
                                                <h4 class="mt-1">
                                                    {{percentage_cancelled}}%
                                                </h4>
                                            </b-media>
                                        </b-col>
                                        <b-col cols="4">
                                                <h1 class="text-muted ml-5">{{total_cancelled}}</h1> 
                                        </b-col>
                                    </b-row>
                                    <b-row class="mt-0">
                                        <b-col cols="12">
                                           <b-progress class='mt-3' variant="danger" :value="percentage_cancelled" :max="max" show-progress animated></b-progress>
                                        </b-col>
                                    </b-row>
                            </b-card>
                        </b-col>
                    </b-row>
                    <br/>
                    <b-card>
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
                                                                @input="loadModel(deviceValue.id), load_filtered_device(deviceValue)"
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
                                                                @input="loadUnit(modelValue.id), load_filtered_model()"
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
                                                                @input="load_filtered_unit()"
                                                                ></multiselect>
                                                        </b-col>
                                                        <!-- <b-col cols="3">
                                                            <b-button 
                                                                class="pb-1 mt-sm-1"
                                                                block
                                                                variant="danger"
                                                                type="submit"
                                                                id="button-submit">
                                                                <b-icon 
                                                                icon="search"></b-icon> Go!
                                                            </b-button>
                                                        </b-col> -->
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
                                            :key="item.simultaneous_details.id">
                                            
                                            <b-td class="td_align">{{item.id}}</b-td>
                                            <b-td class="td_align">
                                                <b-link 
                                                    v-b-modal.simultaneous_update_modal_id
                                                    @click="updateSimultaneous(item.no)">
                                                    Edit
                                                </b-link>
                                                <label class="ml-1 mr-1 text-secondary">|</label>
                                                <b-link 
                                                    v-b-modal.modal-delete-id
                                                    @click="deleteSimultaneous(item.simultaneous_details.id)">
                                                    Delete
                                                </b-link>
                                                <label class="ml-1 mr-1 text-secondary">|</label>
                                                <b-link >
                                                    Cancel
                                                </b-link>
                                            </b-td>
                                            <b-td class="td_align">{{item.simultaneous_details.device_name}}</b-td>
                                            <b-td class="td_align">{{item.simultaneous_details.model_name}}</b-td>
                                            <b-td class="td_align">{{item.simultaneous_details.unit_name}}</b-td>
                                            <b-td class="td_align">{{item.simultaneous_details.eco_number}}</b-td>
                                            <b-td class="td_align">{{item.simultaneous_details.target_application}}</b-td>
                                            <!-- ECO PARTS BEFORE -->
                                            <b-td nowrap style="width:100%;" align="center">
                                                <b-tr v-for="item_before in item.before_parts_details" :key="item_before.id">
                                                    {{item_before.part_number}}
                                                </b-tr>
                                            </b-td>
                                            <b-td nowrap style="width:100%;" align="center">
                                                <b-tr v-for="item_before in item.before_parts_details" :key="item_before.id">
                                                    {{item_before.part_number_new_revision}}
                                                </b-tr>
                                            </b-td>
                                            <b-td nowrap style="width:100%;" align="center">
                                                <b-tr v-for="item_before in item.before_parts_details" :key="item_before.id">
                                                    {{item_before.before_quantity}}
                                                </b-tr>
                                            </b-td>
                                            <b-td nowrap style="width:100%;" align="center">
                                                <b-tr v-for="item_before in item.before_parts_details" :key="item_before.id">
                                                    {{item_before.revision_details}}
                                                </b-tr>
                                            </b-td>
                                            <!-- ECO PARTS AFTER -->
                                            <b-td nowrap style="width:100%;" align="center">
                                                <b-tr v-for="item_after in item.after_parts_details" :key="item_after.id">
                                                    {{item_after.part_number}}
                                                </b-tr>
                                            </b-td>
                                            <b-td nowrap style="width:100%;" align="center">
                                                <b-tr v-for="item_after in item.after_parts_details" :key="item_after.id">
                                                    {{item_after.part_number_new_revision}}
                                                </b-tr>
                                            </b-td>
                                            <b-td nowrap style="width:100%;" align="center">
                                                <b-tr v-for="item_after in item.after_parts_details" :key="item_after.id">
                                                    {{item_after.before_quantity}}
                                                </b-tr>
                                            </b-td>
                                            <b-td nowrap style="width:100%;" align="center">
                                                <b-tr v-for="item_after in item.after_parts_details" :key="item_after.id">
                                                    {{item_after.revision_details}}
                                                </b-tr>
                                            </b-td>
                                            <!-- ECO PROCESS -->
                                            <b-td nowrap style="width:100%;" align="center">
                                                <b-tr v-for="item_process in item.process_details" :key="item_process.id">
                                                    {{item_process.parent_drawing_number}}
                                                </b-tr>
                                            </b-td>
                                            <b-td nowrap style="width:100%;" align="center">
                                                <b-tr v-for="item_process in item.process_details" :key="item_process.id">
                                                    {{item_process.drawing_number_revision}}
                                                </b-tr>
                                            </b-td>
                                            <b-td nowrap style="width:100%;" align="center">
                                                <b-tr v-for="item_process in item.process_details" :key="item_process.id">
                                                    {{item_process.quantity}}
                                                </b-tr>
                                            </b-td>
                                            <b-td nowrap style="width:100%;" align="center">
                                                <b-tr v-for="item_process in item.process_details" :key="item_process.id">
                                                    {{item_process.revision_mark}}
                                                </b-tr>
                                            </b-td>

                                            <b-td class="td_align">{{item.simultaneous_details.actual_application}}</b-td>
                                            <b-td class="td_align">{{item.simultaneous_details.carf_number}}</b-td>
                                            <b-td class="td_align">{{item.simultaneous_details.serial_number}}</b-td>
                                        </b-tr>
                                    </b-tbody>
                                </b-table-simple>
                                <b-pagination class="alpha__table__pagination"
                                        :total-rows="totalRows" 
                                        v-model="currentPage"
                                        :per-page="perPage"
                                        align="right"
                                        pills
                                        ></b-pagination>
                            </b-col>
                        </b-row>
                    </b-card>
                        <SimultaneousUpdateModal :get_data="this.id"/>
                        <WithSimultaneousModal />
                        <DeleteModal :functionToCall="this.removeSimultaneous"/>
                        
                    <!-- <b-row class="mt-3">
                        <b-col cols="12">
                            <b-card class="pl-2 pr-2">
                                <b-card-body>
                                    <SimultaneousContent :status="status"/>
                                </b-card-body>
                            </b-card>
                            
                        </b-col>
                    </b-row> -->
        </b-col>
    </b-row>
  
  </b-container>
</template>

<script>
import { mapGetters } from 'vuex';
// import SimultaneousContent from "../components/Simultaneous/SimultaneousContent";
import SimultaneousUpdateModal from '../components/Simultaneous/SimultaneousUpdateModal';
import WithSimultaneousModal from '../components/Simultaneous/WithSimultaneousModal';
import DeleteModal  from '../components/DeleteModal';
export default {
    name: "Simultaneous",
    components: {
        SimultaneousUpdateModal,
        WithSimultaneousModal,
        DeleteModal
        // SimultaneousContent
    },
    data() {
        return {
            number: 0,
            value: 45,
            max: 100,
            status: "",
            perPage: 5,
            currentPage: 1,
            deviceValue: [],
            deviceOptions: [],
            modelValue: [],
            modelOptions: [],
            unitValue: [],
            unitOptions: [],
            totalRows: null,
            total_application: null,
            percentage_application: null,
            total_applied: null,
            percentage_applied: null,
            total_cancelled: null,
            percentage_cancelled: null,
            items: [
                // { no: 1, device_name:"device1", model_name: "model1", unit_name: "unit_name1", unit_number: "unit_no1",
                // eco_number: "eco1", target_application: "2021-03-25", before_part_no:"KD0123", before_rev_no:"01",
                // before_qty: "45", before_details:"sample",  after_part_no:"", after_rev_no:"", after_qty: "", after_details:"",
                // drawing_number: "", drawing_number_rev: "", drawing_number_qty: "", drawing_number_details: "",
                // actual_application: "", carf: "", serial_number: ""},
                // { no: 2, device_name:"device2", model_name: "model2", unit_name: "unit_name2", unit_number: "unit_no2",
                // eco_number: "eco2", target_application: "2021-03-29", before_part_no:"KD0456", before_rev_no:"02",
                // before_qty: "100", before_details:"sample only",  after_part_no:"", after_rev_no:"", after_qty: "", after_details:"",
                // drawing_number: "", drawing_number_rev: "", drawing_number_qty: "", drawing_number_details: "",
                // actual_application: "", carf: "", serial_number: ""},
                //  { no: 3, device_name:"device2", model_name: "model2", unit_name: "unit_name2", unit_number: "unit_no2",
                // eco_number: "eco2", target_application: "2021-03-29", before_part_no:"KD0456", before_rev_no:"02",
                // before_qty: "100", before_details:"sample only",  after_part_no:"KD0456", after_rev_no:"02", after_qty: "100", after_details:"sample",
                // drawing_number: "KD0001", drawing_number_rev: "01", drawing_number_qty: "6", drawing_number_details: "sample",
                // actual_application: "03-24-2021", carf: "01111", serial_number: "12554541"},
            ],
            filtered_items: [],
            id: {},
            deleteID: null,
        }
    },
    computed:{
        ...mapGetters(["getAllApplied"]),
        // totalRows(){
        //     return this.items.length
        // },   
    },
     mounted() {
        this.loadDevice();
        this.loadSimultaneousApplied();
        this.load_percentage();
        // console.log(this.loadModel('3'));
    },
    methods: {
        removeSimultaneous()
        {
            this.$store
                .dispatch("removeSimultaneous", this.deleteID)
                .then((response) => {
                    let status = response.data.status;
                    
                    if (status == "Success") {
                        this.$bvModal.hide("modal-delete-id");
                        this.toast(status, response.data.message);
                        this.loadSimultaneousApplied();
                    } else if (status == "Warning") {
                        this.toast(status, "Please review your inputs.");
                    } else if (status == "Error") {
                        this.toast(status, response.data.message);
                    }
                    this.loaderSpinner = false;
                    
                })
                .catch((error) => {
                    console.log(error);
                });
        },
        deleteSimultaneous(id)
        {
            this.deleteID = id
        },
        loadSimultaneousApplied(status_application = "for_application")
        {
            this.status = status_application;

            this.$store.dispatch("loadSimultaneousApplied", this.status)
                .then((response) =>
                {
                    // this.items=this.getAllApplied;
                    let data = response.data;

                    this.items = data
                    this.filtered_items = data;
                 
                    if(!this.items)
                        this.totalRows = 1;
                    else
                        this.totalRows = this.items.length;

                })
        },
        load_percentage()
        {
            this.$store.dispatch("load_percentage")
                .then((response) =>
                {
                    let data = response.data.data;
                    this.total_application = data.application_count;
                    this.percentage_application = data.application_percentage;
                    this.total_applied = data.applied_count;
                    this.percentage_applied = data.applied_percentage;
                    this.total_cancelled = data.cancelled_count;
                    this.percentage_cancelled = data.cancelled_percentage;
                })
        },
        load_filtered_device(device)
        {
            let data = [];
            
            for (let i = 0; i < this.filtered_items.length; i++) 
            {
                if(this.filtered_items[i].simultaneous_details.device_name === device.device_name)
                    data.push(this.filtered_items[i])
            }

            this.items = data
        },
        load_filtered_model()
        {
            let data = [];

            for (let i = 0; i < this.filtered_items.length; i++) 
            {
                if(this.filtered_items[i].simultaneous_details.device_name === this.deviceValue.device_name && this.filtered_items[i].simultaneous_details.model_name === this.modelValue.name)
                    data.push(this.filtered_items[i])
            }

            this.items = data
        },
        load_filtered_unit()
        {
            let data = [];

            for (let i = 0; i < this.filtered_items.length; i++) 
            {
                console.log(this.filtered_items[i].simultaneous_details.unit_name);
                if(this.filtered_items[i].simultaneous_details.device_name === this.modelValue.name && this.filtered_items[i].simultaneous_details.model_name === this.modelValue.name && this.filtered_items[i].simultaneous_details.unit_name === this.unitValue.unit_name)
                    data.push(this.filtered_items[i])
            }

            this.items = data
        },
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
        toast: function (status, message){
            this.$toast(message, {
                type:status.toLowerCase().trim(),
                position: "bottom-right",
            });
        }
    
    },
};
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