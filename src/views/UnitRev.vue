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
                            @click="loadUnitRev('for_application')"
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
                            @click="loadUnitRev('for_applied')"
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
                                        <!-- <b-col cols="5"> -->
                                            <!-- <b-table-simple
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
                                                <b-tbody  
                                                    v-for="(draft, index) in unit_rev_list"
                                                    :key="index">
                                                    <b-tr>
                                                        <b-td class="td_align" >{{draft.details_table1.unit_name}}</b-td>
                                                        <b-td class="td_align" >{{draft.details_table1.unit_number}}</b-td>
                                
                                                        <b-td class="td_align" style="height:44px">{{draft.details_table1.serial_number}}</b-td>
                                                        <b-td class="td_align">{{draft.details_table1.date_applied}}</b-td>
                                                        <b-td class="td_align">{{draft.details_table1.carf_number}}</b-td>
                                                        <b-td class="td_align">{{draft.details_table1.current_revision}}</b-td>
                                                        <b-td class="td_align">{{draft.details_table1.current_ncr_number}}</b-td>
                                                    </b-tr>
                                                </b-tbody>
                                            </b-table-simple> -->
                                        <!-- </b-col> -->
                                        <b-col cols="12">
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
                                                        <b-th class="th_align_table1" rowspan="3" >Unit Name</b-th>
                                                        <b-th class="th_align_table1" rowspan="3" >Unit Number</b-th>
                                                        <b-th class="th_align_table1" rowspan="3" >Start Serial Number</b-th>
                                                        <b-th class="th_align_table1" rowspan="3" >Date Applied</b-th>
                                                        <b-th class="th_align_table1" rowspan="3" >CARF Number</b-th>
                                                        <b-th class="th_align_table1" rowspan="3" >Current Revision</b-th>
                                                        <b-th class="th_align_table1" rowspan="3" >Current NCR Number Per Revision</b-th>

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
                                                        <b-td class="td_align">{{item.details_table1.unit_name}}</b-td>
                                                        <b-td class="td_align" >{{item.details_table1.unit_number}}</b-td>

                                                        <b-td class="td_align" >{{item.details_table1.serial_number}}</b-td>
                                                        <b-td class="td_align" >{{item.details_table1.date_applied}}</b-td>
                                                        <b-td class="td_align" >{{item.details_table1.carf_number}}</b-td>
                                                        <b-td class="td_align" >{{item.details_table1.current_revision}}</b-td>
                                                        <b-td class="td_align" >{{item.details_table1.current_ncr_number}}</b-td>
                                                        <b-td class="td_align">
                                                            <b-link 
                                                                @click="loadEditUnitRevisionUp(item.details_table1.id)"
                                                                v-b-modal.modal_edit_rev_up
                                                                class="link_style">
                                                                Edit
                                                            </b-link>
                                                            <label class="ml-1 mr-1 text-secondary">|</label>
                                                            <b-link 
                                                                class="link_style"
                                                                v-b-modal.modal_unit_rev_update
                                                                @click="loadUpdateUnitRevision(item.details_table1.id)">
                                                                Update
                                                            </b-link>
                                                            <label class="ml-1 mr-1 text-secondary">|</label>
                                                            <b-link 
                                                                v-b-modal.modal-delete-id
                                                                class="link_style"
                                                                @click="deleteUnitRev(item.details_table2.id)">
                                                                Delete
                                                            </b-link>
                                                        </b-td>
                                                        <b-td class="td_align" >{{item.details_table2.pending_revision_up}}</b-td>     
                                                        <b-td class="td_align">{{item.details_table2.next_ncr_number}}</b-td> 
                                                        <b-td class="td_align">{{item.details_table2.target_application}}</b-td> 
                                                        <b-td class="td_align">{{item.details_table2.eco_number}}</b-td> 
                                                        <!-- ECO PARTS BEFORE -->
                                                        <b-td nowrap style="width:100%;" align="center">
                                                            <b-tr v-for="item_before in item.before_parts_unit_revisions" :key="item_before.id">
                                                                {{item_before.part_number}}
                                                            </b-tr>
                                                        </b-td>
                                                        <b-td nowrap style="width:100%;" align="center">
                                                            <b-tr v-for="item_before in item.before_parts_unit_revisions" :key="item_before.id">
                                                                {{item_before.part_number_new_revision}}
                                                            </b-tr>
                                                        </b-td>
                                                        <b-td nowrap style="width:100%;" align="center">
                                                            <b-tr v-for="item_before in item.before_parts_unit_revisions" :key="item_before.id">
                                                                {{item_before.before_quantity}}
                                                            </b-tr>
                                                        </b-td>
                                                        <b-td nowrap style="width:100%;" align="center">
                                                            <b-tr v-for="item_before in item.before_parts_unit_revisions" :key="item_before.id">
                                                                {{item_before.revision_details}}
                                                            </b-tr>
                                                        </b-td>
                                                        <!-- ECO PARTS AFTER -->
                                                        <b-td nowrap style="width:100%;" align="center">
                                                            <b-tr v-for="item_after in item.after_parts_unit_revisions" :key="item_after.id">
                                                                {{item_after.part_number}}
                                                            </b-tr>
                                                        </b-td>
                                                        <b-td nowrap style="width:100%;" align="center">
                                                            <b-tr v-for="item_after in item.after_parts_unit_revisions" :key="item_after.id">
                                                                {{item_after.part_number_new_revision}}
                                                            </b-tr>
                                                        </b-td>
                                                        <b-td nowrap style="width:100%;" align="center">
                                                            <b-tr v-for="item_after in item.after_parts_unit_revisions" :key="item_after.id">
                                                                {{item_after.before_quantity}}
                                                            </b-tr>
                                                        </b-td>
                                                        <b-td nowrap style="width:100%;" align="center">
                                                            <b-tr v-for="item_after in item.after_parts_unit_revisions" :key="item_after.id">
                                                                {{item_after.revision_details}}
                                                            </b-tr>
                                                        </b-td>
                                                        <!-- ECO PROCESS BEFORE -->
                                                        <b-td class="td_align">

                                                        </b-td>
                                                        <b-td class="td_align">

                                                        </b-td>
                                                        <b-td class="td_align">

                                                        </b-td>
                                                        <b-td class="td_align">

                                                        </b-td>
                                                        <!-- ECO PROCESS AFTER -->
                                                        <b-td class="td_align">

                                                        </b-td>
                                                        <b-td class="td_align">

                                                        </b-td>
                                                        <b-td class="td_align">

                                                        </b-td>
                                                        <b-td class="td_align">

                                                        </b-td>
                                                        <!-- SIMULTANEOUS APPLICATION -->
                                                        <b-td class="td_align">

                                                        </b-td>
                                                        <b-td class="td_align">

                                                        </b-td>
                                                        <b-td class="td_align">

                                                        </b-td>
                                                        <b-td class="td_align">

                                                        </b-td>
                                                        <b-td class="td_align">

                                                        </b-td>
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
                                    <UnitRevUpdateModal 
                                        :update_revision_data="this.load_update_revision" 
                                        @clicked="load_data" />
                                    <AddRevisionUpModal  
                                        @clicked="load_data" 
                                        :edit_id="this.table_id"/>
                                    <EditRevisionUpModal :editId="this.table_id" />
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
import UnitRevUpdateModal from "../components/UnitRevision/UnitRevUpdateModal";
import AddRevisionUpModal from "../components/UnitRevision/AddRevisionUpModal";
import EditRevisionUpModal from "../components/UnitRevision/EditRevisionUpModal";
import DeleteModal from "../components/DeleteModal";
export default {
    name: "UnitRev",
    components:{
        UnitRevUpdateModal,
        AddRevisionUpModal,
        EditRevisionUpModal,
        DeleteModal
    },
    props:{
        loadEditUnitRevision: {
            type: Function,
        },
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
            item_list: [],
            unit_rev_list:[],
            load_edit_revision: {},
            load_update_revision:{},
            id: {},
            table_id: null,
            deleteID: null,
            status: '',
            totalRows: null,
        }
    },
    computed: {
    
    },
    mounted() {
        this.load_percentage();
        this.loadUnitRev();
    },
    methods:
    {
        load_data: function()
        {

            this.loadUnitRev();
        },
        loadUnitRev: function(status_application = "for_application")
        {
            this.status = status_application
            
            this.$store.dispatch("loadUnitRev", this.status)
                .then((response) =>
                {
                    let data = response.data;
                    this.unit_rev_list = data;
                    this.item_list = data;
                    this.filtered_items = data;
                    this.load_percentage();
                    if(!this.unit_rev_list)
                        this.totalRows = 1;
                    else
                        this.totalRows = this.unit_rev_list.length;
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
                        this.load_percentage();
                        this.loadUnitRev();
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
            this.deleteID = id
        },
        updateUnitRev: function(id)
        {
            this.id = {};
            this.id = this.unit_rev_list[id-1];
        },
        loadUpdateUnitRevision: function(id)
        {
            this.$store.dispatch("loadUpdateRevision", id)
                .then((response) =>
                {    
                    let data = response.data.data;
                    this.load_update_revision = data;
                })
        },
        toast: function (status, message){
            this.$toast(message, {
                type:status.toLowerCase().trim(),
                position: "bottom-right",
            });
        },
        loadEditUnitRevisionUp: function (id)
        {
            this.table_id = id;
            alert(id);
            // console.log(this.table_id);
            // this.$store.dispatch("loadEditRevision", id)
            //     .then((response) =>
            //     {    
            //         let data = response.data.data;
            //         this.load_edit_revision = data;
            //         // console.log(this.load_edit_revision);
            //     })
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
    #tbl_unit_rev .th_align_table1{
        vertical-align:middle;
        text-align:center!important;
        padding-left:10px;
        padding-right:10px;
        padding-top: 10px;
        background-color: rgb(233, 211, 179);
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