<template>
    <b-container fluid>
        <b-row class="mb-4">
            <b-col cols="12">
                <b-media>
                <template #aside>
                    <b-img 
                        :src="require('../assets/icon_images/exchange.svg')" 
                        width="44" 
                        height="37" 
                        alt="placeholder">
                    </b-img>
                </template>
                    <h5 class="mb-0">Unit Revision</h5>
                        <small class="text-secondary">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, illum.
                        </small>
                </b-media>
            </b-col>
        </b-row>
        <b-row>
            <b-col cols="12">
                <b-row>
                    <b-col cols="3">
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
                    <b-col cols="3">
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
                            </b-row>
                <b-row class="mt-3">
                    <b-col cols="12">
                        <b-card>
                            <b-card-body>
                                <b-container fluid>
                                    <b-row>
                                        <b-col cols="7">
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
                                                                            :options="deviceOptions" 
                                                                            :searchable="true"
                                                                            :show-labels="false"
                                                                            placeholder="Device" 
                                                                            label="name" 
                                                                            track-by="id"></multiselect>
                                                                    </b-col>
                                                                    <b-col cols="3">
                                                                        <multiselect  
                                                                            v-model="modelValue"
                                                                            name="searchTemplateModel"
                                                                            :options="modelOptions" 
                                                                            :searchable="true"
                                                                            :show-labels="false"
                                                                            placeholder="Model" 
                                                                            label="name" 
                                                                            track-by="id"></multiselect>
                                                                    </b-col>
                                                                    <b-col cols="3">
                                                                        <multiselect  
                                                                            v-model="unitValue" 
                                                                            name="searchTemplateUnit"
                                                                            :options="unitOptions"
                                                                            :searchable="true"
                                                                            :show-labels="false"
                                                                            placeholder="Unit Name/Number" 
                                                                            label="name" 
                                                                            track-by="id"></multiselect>
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
                                        <b-col cols="5">
                                            <b-button
                                                v-b-modal.modal_add_rev_up
                                                variant="danger" 
                                                class="float-right pb-2">
                                                    <font-awesome-icon 
                                                        icon="edit" /> Add Revision Up
                                            </b-button>
                                        </b-col>
                                    </b-row>
                                    <b-row class="mt-3">
                                        <b-col cols="5">
                                            <b-table-simple
                                                class="text-nowrap"
                                                id="tbl_unit_rev_up"
                                                responsive
                                                bordered 
                                                small>
                                                <b-thead class="thead-light custom_thead">
                                                    <b-tr>
                                                        <b-th class="th_align " rowspan="2" style="height: 100px;">Unit Name</b-th>
                                                        <b-th class="th_align" rowspan="2" >Unit Number</b-th>
                                                    </b-tr>
                                                    <b-tr>
                                                        <b-th class="th_align" >Start Serial Number</b-th>
                                                        <b-th class="th_align" >Date Applied</b-th>
                                                        <b-th class="th_align" >CARF Number</b-th>
                                                        <b-th class="th_align" >Current Revision</b-th>
                                                        <b-th class="th_align" >Current NCR Number Per Revision</b-th>
                                                    </b-tr>
                                                </b-thead>
                                                <!-- <b-tbody  
                                                    v-for="(draft, index) in item_list"
                                                    :key="index">
                                                    <b-tr>
                                                        <b-td class="td_align" :rowspan="draft.data.length+1">{{draft.unit_name}}</b-td>
                                                        <b-td class="td_align" :rowspan="draft.data.length+1">{{draft.unit_number}}</b-td>
                                                    </b-tr>
                                                    <b-tr 
                                                    v-for="item in draft.data"
                                                    :key="item.id">
                                                        <b-td class="td_align" style="height:44px">{{item.serial_number}}</b-td>
                                                        <b-td class="td_align">{{item.date_applied}}</b-td>
                                                        <b-td class="td_align">{{item.carf_number}}</b-td>
                                                        <b-td class="td_align">{{item.rev_up}}</b-td>
                                                        <b-td class="td_align">{{item.current_ncr_no}}</b-td>
                                                    </b-tr>
                                                </b-tbody> -->
                                            </b-table-simple>
                                        </b-col>
                                        <b-col cols="7">
                                            <b-table-simple 
                                                class="text-nowrap"
                                                id="tbl_unit_rev"
                                                responsive
                                                bordered 
                                                small
                                                :per-page="perPage"
                                                :current-page="currentPage">
                                                <b-thead class="thead-light custom_thead">
                                                    <b-tr>
                                                        <b-th class="th_align" rowspan="3" >Action</b-th>
                                                        <b-th class="th_align" rowspan="3">Pending Revision Up</b-th>
                                                        <b-th class="th_align" rowspan="3">Next NCR Number</b-th>
                                                        <b-th class="th_align" rowspan="3">Target Application (Month & Year)</b-th>
                                                        <b-th class="th_align" rowspan="3">ECO Number</b-th>
                                                        <b-th class="th_align" colspan="8">ECO Parts</b-th>
                                                        <b-th class="th_align" colspan="8">ECO Process</b-th>
                                                        <b-th class="th_align" colspan="5">Simultaneous Application</b-th>
                                                    </b-tr>
                                                    <b-tr>
                                                        <b-th class="th_align" colspan="4">Before</b-th>
                                                        <b-th class="th_align" colspan="4">After</b-th>
                                                        <b-th class="th_align" colspan="4">Before</b-th>
                                                        <b-th class="th_align" colspan="4">After</b-th>
                                                        <b-th class="th_align" rowspan="2">ECO Number.</b-th>
                                                        <b-th class="th_align" rowspan="2">Drawing Number.</b-th>
                                                        <b-th class="th_align" rowspan="2">Revision Number</b-th>
                                                        <b-th class="th_align" rowspan="2">Part Number</b-th>
                                                        <b-th class="th_align" rowspan="2">Revision Number</b-th>
                                                    </b-tr>
                                                    <b-tr>
                                                        <b-th class="th_align" style="width:150px;">Part Number</b-th>
                                                        <b-th class="th_align" style="width:100px;">Revision Number</b-th>
                                                        <b-th class="th_align" style="width:100px;">Quantity</b-th>
                                                        <b-th class="th_align" style="width:200px;">Details</b-th>
                                                        <b-th class="th_align" style="width:150px;">Part Number</b-th>
                                                        <b-th class="th_align" style="width:100px;">Rev Number</b-th>
                                                        <b-th class="th_align" style="width:100px;">Quantity</b-th>
                                                        <b-th class="th_align" style="width:200px;">Details</b-th>
                                                        <b-th class="th_align" style="width:150px;">Drawing Number</b-th>
                                                        <b-th class="th_align" style="width:100px;">Revision Number</b-th>
                                                        <b-th class="th_align" style="width:100px;">Quantity</b-th>
                                                        <b-th class="th_align" style="width:200px;">Details</b-th>
                                                        <b-th class="th_align" style="width:150px;">Drawing Number</b-th>
                                                        <b-th class="th_align" style="width:100px;">Revision Number</b-th>
                                                        <b-th class="th_align" style="width:100px;">Quantity</b-th>
                                                        <b-th class="th_align" style="width:200px;">Details</b-th>
                                                    </b-tr>
                                                </b-thead>
                                                <b-tbody>
                                                    <b-tr
                                                        v-for="item in unit_rev_list.slice((this.currentPage-1) * this.perPage, (this.currentPage) * this.perPage)"
                                                        :key="item.id">
                                                        <b-td class="td_align">
                                                            <b-link 
                                                                v-b-modal.modal_add_rev_up
                                                                class="link_style">
                                                                Edit
                                                            </b-link>
                                                            <label class="ml-1 mr-1 text-secondary">|</label>
                                                            <b-link 
                                                                class="link_style"
                                                                v-b-modal.modal_unit_rev_update
                                                                @click="updateUnitRev(item.id)">
                                                                Update
                                                            </b-link>
                                                            <label class="ml-1 mr-1 text-secondary">|</label>
                                                            <b-link 
                                                                v-b-modal.modal-delete-id
                                                                class="link_style"
                                                                @click="deleteUnitRev(item.id)">
                                                                Delete
                                                            </b-link>
                                                        </b-td>
                                                        <b-td class="td_align" >{{item.details_table2.pending_revision_up}}</b-td>     
                                                        <b-td class="td_align">{{item.details_table2.next_ncr_number}}</b-td> 
                                                        <b-td class="td_align">{{item.details_table2.target_application}}</b-td> 
                                                        <b-td class="td_align">{{item.details_table2.eco_number}}</b-td> 
                                                        <b-td class="td_align">{{item.before_parts_unit_revisions.part_number}}</b-td>
                                                        <b-td class="td_align">{{item.before_parts_unit_revisions.part_number_new_revision}}</b-td>
                                                        <b-td class="td_align">{{item.before_parts_unit_revisions.before_quantity}}</b-td>
                                                        <b-td class="td_align">{{item.before_parts_unit_revisions.revision_details}}</b-td>
                                                        <b-td class="td_align">{{item.after_parts_unit_revisions.part_number}}</b-td>
                                                        <b-td class="td_align">{{item.after_parts_unit_revisions.part_number_new_revision}}</b-td>
                                                        <b-td class="td_align">{{item.after_parts_unit_revisions.before_quantity}}</b-td>
                                                        <b-td class="td_align">{{item.after_parts_unit_revisions.revision_details}}</b-td>
                                                        <b-td class="td_align">{{item.before_parent_drawing_no}}</b-td>
                                                        <b-td class="td_align">{{item.before_revision}}</b-td>
                                                        <b-td class="td_align">{{item.before_quantity}}</b-td>
                                                        <b-td class="td_align">{{item.before_details}}</b-td>
                                                        <b-td class="td_align">{{item.after_parent_drawing_no}}</b-td>
                                                        <b-td class="td_align">{{item.after_revision}}</b-td>
                                                        <b-td class="td_align">{{item.after_quantity}}</b-td>
                                                        <b-td class="td_align">{{item.after_details}}</b-td>
                                                        <b-td class="td_align">{{item.simultaneous_eco_number}}</b-td>
                                                        <b-td class="td_align">{{item.parent_drawing_number}}</b-td>
                                                        <b-td class="td_align">{{item.drawing_number_revision}}</b-td>
                                                        <b-td class="td_align">{{item.part_number}}</b-td>
                                                        <b-td class="td_align">{{item.part_number_new_revision}}</b-td>
                                                    </b-tr>
                                                </b-tbody>
                                            </b-table-simple>
                                            <b-pagination
                                                class="alpha__table__pagination"
                                                :total-rows="totalRows" 
                                                v-model="currentPage"
                                                :per-page="perPage"
                                                align="right"
                                                pills
                                                aria-controls="tbl_unit_rev"></b-pagination>
                                        </b-col>
                                    </b-row>
                                    <UnitRevUpdateModal :get_data="this.id"/>
                                    <AddRevisionUpModal />
                                    <DeleteModal :functionToCall="this.removeUnitRev"/>
                                </b-container>
                                <!-- <UnitRevContent /> -->
                            </b-card-body>
                        </b-card>
                    </b-col>
                </b-row>
            </b-col>
        </b-row>
    </b-container>
</template>

<script>
// import UnitRevContent from "../components/UnitRevision/UnitRevContent";
import UnitRevUpdateModal from "../components/UnitRevision/UnitRevUpdateModal";
import AddRevisionUpModal from "../components/UnitRevision/AddRevisionUpModal";
import DeleteModal from "../components/DeleteModal";
export default {
    name: "UnitRev",
    components:{
        //   UnitRevContent,
        UnitRevUpdateModal,
        AddRevisionUpModal,
        DeleteModal
    },
    data() {
        return {
            total_application: null,
            percentage_application: null,
            total_applied: null,
            percentage_applied: null,
            value: 45,
            max: 100,
            perPage: 10,
            currentPage: 1,
            deviceValue: [],
            deviceOptions: [],
            modelValue: [],
            modelOptions: [],
            unitValue: [],
            unitOptions: [],
            item_list: [
                // {
                //     unit_name: "sample unit", 
                //     unit_number: "unit002", 
                //     data:
                //     [
                //         {
                //             serial_number: "KS12452", 
                //             date_applied: "2021-03-30", 
                //             carf_number: "1111", 
                //             rev_up: "01", 
                //             current_ncr_no: "02"
                //         },
                //         {
                //             serial_number: "KS12453", 
                //             date_applied: "2021-04-01", 
                //             carf_number: "2222", 
                //             rev_up: "02", 
                //             current_ncr_no: "03"
                //         },
                //     ]
                // },
            ],
            unit_rev_list:[
                // {id: "1", rev_up:"02", next_ncr_no: "08", target_application: "2021-04-05", eco_number: "eco01", 
                // before_part_number:"KD0123", before_part_number_new_revision:"01", before_parts_quantity: "45", before_revision_details:"sample", 
                // after_part_number:"KD011", after_part_number_new_revision:"02", after_parts_quantity: "50", after_revision_details:"sample only",
                // before_parent_drawing_no:"KD0123", before_revision:"01", before_quantity: "45", before_details:"sample",
                // after_parent_drawing_no:"KD0123", after_revision:"01", after_quantity: "45", after_details:"sample",
                // simultaneous_eco_number: "123456", parent_drawing_number:"KD0000", drawing_number_revision: "01", part_number: "KD0101", part_number_new_revision:"02"},
                // {id: "2", rev_up:"02", next_ncr_no: "08", target_application: "2021-04-06", eco_number: "eco02", 
                // before_part_number:"KD0123", before_part_number_new_revision:"01", before_parts_quantity: "45", before_revision_details:"sample", 
                // after_part_number:"KD011", after_part_number_new_revision:"02", after_parts_quantity: "50", after_revision_details:"sample only",
                // before_parent_drawing_no:"KD0123", before_revision:"01", before_quantity: "45", before_details:"sample",
                // after_parent_drawing_no:"KD0123", after_revision:"01", after_quantity: "45", after_details:"sample",
                // simultaneous_eco_number: "123456", parent_drawing_number:"KD0000", drawing_number_revision: "01", part_number: "KD0101", part_number_new_revision:"02"},
            ],
            id: {},
            deleteID: null,
            status: "",
        }
    },
    computed: {
        totalRows(){
            // return this.unit_rev_list.length
            return 1
        }
    },
    mounted() {
        this.load_percentage();
        this.loadUnitRev();
    },
    methods:
    {
        loadUnitRev: function(status_application = "for_application")
        {
            this.status = status_application
            
            this.$store.dispatch("loadUnitRev", this.status)
                .then((response) =>
                {
                    // this.items=this.getAllApplied;
                    let data = response.data;
                    console.log(data)
                    this.unit_rev_list = data;
                    this.item_list = data;
                    // this.filtered_items = data;
                 
                    // if(!this.items)
                    //     this.totalRows = 1;
                    // else
                    //     this.totalRows = this.items.length;
                })
        },
        load_percentage: function()
        {
            this.$store
                .dispatch("load_percentage_unit_rev")
                .then((response) =>
                {
                    let data = response.data.data;
                    
                    this.total_application = data.application_count;
                    this.percentage_application = data.application_percentage;
                    this.total_applied = data.applied_count;
                    this.percentage_applied = data.applied_percentage;
                })
        },
        removeUnitRev: function()
        {
            this.$store
                .dispatch("removeUnitRev", this.deleteID)
                .then((response) => {
                    let status = response.data.status;
                    
                    if (status == "Success") {
                        this.$bvModal.hide("modal-delete-id");
                        this.toast(status, response.data.message);
                        // this.loadSimultaneousApplied();
                    } else if (status == "Warning") {
                        this.toast(status, "Please review your inputs.");
                    } else if (status == "Error") {
                        this.toast(status, response.data.message);
                    }
                })
                .catch((error) => {
                    console.log(error);
                });
        },
        deleteUnitRev: function(id)
        {
            console.log(id)
            this.deleteID = id
        },
        updateUnitRev: function(id)
        {
            this.id = {};
            this.id = this.unit_rev_list[id-1];
        },
        toast: function (status, message){
            this.$toast(message, {
                type:status.toLowerCase().trim(),
                position: "bottom-right",
            });
        }
    }
};
</script>

<style scoped>
    .th_align{
        vertical-align:middle;
        text-align:center!important;
        padding-left:10px;
        padding-right:10px;
        padding-top: 10px;
    }

    .td_align{
        text-align:center!important;
        vertical-align:middle;
        padding-top: 10px;
    }

    .link_style{
        /* color: red !important; */
        font-size:0.9em;
    }
</style>