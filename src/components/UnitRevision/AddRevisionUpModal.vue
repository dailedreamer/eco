<template>
    <b-container fluid>
        <b-modal  
            id="modal_add_rev_up"
            size="xl"
            hide-footer
            :no-close-on-backdrop="true" 
            centered
            scrollable>
            <template #modal-title="">
                <b-media>
                    <template #aside>
                        <b-img 
                            :src="require('../../assets/icon_images/edit_content.svg')" 
                            width="44" 
                            height="37" 
                            alt="placeholder">
                        </b-img>
                    </template>
                    <h5 class="mt-2">Unit Revision Up</h5>
                </b-media>
            </template>
            <b-row class="mt-3 ml-3 mr-3">
                <b-col cols="12">
                    <b-card bg-variant="light">
                        <b-form-group class="form_group_custom"
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
                                        label="name" 
                                        track-by="id"
                                        @input="loadModel()"></multiselect>
                                </b-col>
                                <b-col cols="3">
                                    <multiselect  
                                        v-model="modelValue"
                                        name="searchTemplateDevice"
                                        :options="modelOptions" 
                                        :searchable="true"
                                        :show-labels="false"
                                        placeholder="Model" 
                                        label="name" 
                                        track-by="id"
                                        @input="loadUnit()"></multiselect>
                                </b-col>
                                <b-col cols="3">
                                    <multiselect  
                                        v-model="unitValue"
                                        name="searchTemplateDevice"
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
                                        id="button-submit"
                                        @click="searchRevision()">
                                        <b-icon 
                                        icon="search"></b-icon> Go!
                                    </b-button>
                                </b-col>
                            </b-row>
                        </b-form-group>
                    </b-card>
                </b-col>
            </b-row>
            <b-row class="mt-3 ml-3 mr-3">
                <b-col cols="12">
                    <b-card bg-variant="light" class="add_unit_rev_card">
                        <b-row>
                            <b-col cols="6">
                                <b-form-group
                                    label="Revision Up:"
                                    label-for="txt_revision_up"
                                    label-cols-sm="4"
                                    label-align-sm="left"
                                    label-size="sm">
                                    <b-form-input 
                                        id="txt_revision_up" 
                                        name="txt_revision_up"
                                        placeholder="Enter Revision Up"></b-form-input>
                                </b-form-group>
                            </b-col>
                            <b-col cols="6">
                                <b-form-group
                                    label="Target Application:"
                                    label-for="slc_target_application"
                                    label-cols-sm="4"
                                    label-align-sm="left"
                                    label-size="sm">
                                    <b-form-datepicker 
                                        id="slc_target_application" 
                                        name="slc_target_application"
                                        placeholder="Choose a date" 
                                        class="unit_rev_datepicker"
                                        hide-header
                                        reset-button
                                        close-button
                                        :date-format-options="{ year: 'numeric', month: 'numeric', day: 'numeric' }"></b-form-datepicker>
                                </b-form-group>
                            </b-col>
                        </b-row>
                        <b-row class="mt-3">
                            <b-col cols="6">
                                <b-form-group
                                    label="ECO Number:"
                                    label-for="txt_eco_number"
                                    label-cols-sm="4"
                                    label-align-sm="left"
                                    label-size="sm">
                                    <b-form-input 
                                        id="txt_eco_number" 
                                        name="txt_eco_number"
                                        placeholder="Enter ECO Number"></b-form-input>
                                </b-form-group>
                            </b-col>
                            <b-col cols="6">
                                <b-form-group
                                    label="Next NCR Number:"
                                    label-for="txt_next_ncr_no"
                                    label-cols-sm="4"
                                    label-align-sm="left"
                                    label-size="sm">
                                    <b-form-input 
                                        id="txt_next_ncr_no" 
                                        name="txt_next_ncr_no"
                                        placeholder="Enter Next NCR Number"></b-form-input>
                            </b-form-group>
                        </b-col>
                        </b-row>
                    </b-card>
                </b-col>
            </b-row>
            <b-row class="ml-3 mt-4 mr-3">
                <b-col cols="12">
                    <b-row>
                        <label class="ml-3 font-weight-bold pt-0" for="">ECO Parts</label>
                    </b-row>
                    <b-row>
                        <b-col cols="6">
                            <b-card>
                                <b-row>
                                    <b-col cols="8">
                                       <label for="">Before</label> 
                                    </b-col>
                                    <b-col cols="4">
                                        <b-button
                                            v-b-modal.modal_eco_parts
                                            size="sm"
                                            variant="danger" 
                                            class="float-right">
                                                <font-awesome-icon 
                                                    icon="plus" />
                                        </b-button>
                                    </b-col> 
                                </b-row>
                                <b-row class="mt-2 mr-1 ml-1">
                                    <b-table 
                                        class="text-nowrap"
                                        head-variant="light"
                                        outlined 
                                        hover 
                                        responsive 
                                        :items="parts_before_list"
                                        :fields="parts_before_fields">
                                        <template #cell(action)="">
                                            <b-link class="link_style">
                                                Remove
                                            </b-link>
                                        </template>
                                        <template #cell(quantity)="">
                                            <b-form-input
                                                style="width:75px;"
                                                id="txt_quantity"
                                                size="sm"
                                                @keypress="isNumber($event)"></b-form-input>
                                        </template>
                                    </b-table>
                                </b-row>
                            </b-card>
                        </b-col>
                        <b-col cols="6">
                            <b-card>
                                <b-row>
                                    <b-col cols="8">
                                       <label for="">After</label> 
                                    </b-col>
                                    <b-col cols="4">
                                        <b-button
                                            v-b-modal.parts_after
                                            size="sm"
                                            variant="danger" 
                                            class="float-right">
                                                <font-awesome-icon 
                                                    icon="plus" />
                                        </b-button>
                                    </b-col> 
                                </b-row>
                                <b-row class="mt-2 mr-1 ml-1">
                                    <b-table 
                                        class="text-nowrap"
                                        head-variant="light"
                                        outlined 
                                        hover 
                                        responsive 
                                        :items="parts_after_list"
                                        :fields="parts_after_fields">
                                        <template #cell(action)="">
                                            <b-link class="link_style">
                                                Remove
                                            </b-link>
                                        </template>
                                        <template #cell(quantity)="">
                                            <b-form-input
                                                style="width:75px;"
                                                id="txt_quantity"
                                                size="sm"
                                                @keypress="isNumber($event)"></b-form-input>
                                        </template>
                                    </b-table>
                                </b-row>
                            </b-card>
                        </b-col>
                    </b-row>
                </b-col>
            </b-row>
             <b-row class="ml-3 mt-4 mr-3">
                <b-col cols="12">
                    <b-row>
                        <label class="ml-3 font-weight-bold pt-0" for="">ECO Process</label>
                    </b-row>
                    <b-row>
                        <b-col cols="6">
                            <b-card>
                                <b-row>
                                    <b-col cols="8">
                                       <label for="">Before</label> 
                                    </b-col>
                                    <b-col cols="4">
                                        <b-button
                                            v-b-modal.modal_eco_process
                                            size="sm"
                                            variant="danger" 
                                            class="float-right">
                                                <font-awesome-icon 
                                                    icon="plus" />
                                        </b-button>
                                    </b-col> 
                                </b-row>
                                <b-row class="mt-2 mr-1 ml-1">
                                    <b-table 
                                        class="text-nowrap"
                                        head-variant="light"
                                        outlined 
                                        hover 
                                        responsive 
                                        :items="process_before_list"
                                        :fields="process_before_fields">
                                        <template #cell(action)="">
                                            <b-link class="link_style">
                                                Remove
                                            </b-link>
                                        </template>
                                    </b-table>
                                </b-row>
                            </b-card>
                        </b-col>
                        <b-col cols="6">
                            <b-card>
                                <b-row>
                                    <b-col cols="8">
                                       <label for="">After</label> 
                                    </b-col>
                                    <b-col cols="4">
                                        <b-button
                                            v-b-modal.process_after
                                            size="sm"
                                            variant="danger" 
                                            class="float-right">
                                                <font-awesome-icon 
                                                    icon="plus" />
                                        </b-button>
                                    </b-col> 
                                </b-row>
                                <b-row class="mt-2 mr-1 ml-1">
                                    <b-table
                                        class="text-nowrap" 
                                        head-variant="light"
                                        outlined 
                                        hover 
                                        responsive 
                                        :items="process_after_list"
                                        :fields="process_after_fields">
                                        <template #cell(action)="">
                                            <b-link class="link_style">
                                                Remove
                                            </b-link>
                                        </template>
                                    </b-table>
                                </b-row>
                            </b-card>
                        </b-col>
                    </b-row>
                </b-col>
            </b-row>
             <b-row class="ml-3 mt-4 mr-3">
                <b-col cols="12">
                    <b-row>
                        <label class="ml-3 font-weight-bold pt-0" for="">Simultaneous Application</label>
                    </b-row>
                    <b-row>
                        <b-col cols="12">
                            <b-card>
                                <b-row>
                                    <b-col cols="12">
                                        <b-button
                                            v-b-modal.modal_simultaneous_application
                                            size="sm"
                                            variant="danger" 
                                            class="float-right">
                                                <font-awesome-icon 
                                                    icon="plus" />
                                        </b-button>
                                    </b-col> 
                                </b-row>
                                <b-row class="mt-2 mr-1 ml-1">
                                    <b-table 
                                        class="text-nowrap"
                                        head-variant="light"
                                        outlined 
                                        hover 
                                        responsive 
                                        :items="simultaneous_list"
                                        :fields="simultaneous_fields">
                                        <template #cell(action)="">
                                            <b-link class="link_style">
                                                Remove
                                            </b-link>
                                        </template>
                                    </b-table>
                                </b-row>
                            </b-card>
                        </b-col>
                    </b-row>
                </b-col>
            </b-row>
            <hr>
            <b-row class="mt-4">
                <b-col cols="12">
                    <b-button 
                        class="float-right mr-2"
                        size="md" 
                        variant="outline-secondary"
                        title="Click to clear inputs">
                        <font-awesome-icon icon="times-circle" /> Clear
                    </b-button>
                    <b-button 
                        class="float-right mr-2"
                        id="btn_update" 
                        size="md" 
                        variant="danger" 
                        type="submit"
                        title="Click to add revision up">
                        <font-awesome-icon icon="save" /> Add Revision Up
                    </b-button> 
                </b-col>
            </b-row>
        </b-modal>
        <EcoPartsModal :eco_parts_list="this.unit_revision_list" @clicked="transferredBefore"/>
        <EcoPartsModal :eco_parts_list="this.unit_revision_list" @clicked="transferredAfter" id="parts_after"/>
        <EcoProcessModal @clicked="transferredProcessBefore"/>
        <EcoProcessModal @clicked="transferredProcessAfter" id="process_after"/>
        <SimultaneousApplicationModal :simultaneous_application_list="this.simultaneous_app_list" @clicked="transferredSimultaneous" />
    </b-container>
</template>

<script>
import EcoPartsModal from "../UnitRevision/EcoPartsModal";
import EcoProcessModal from "../UnitRevision/EcoProcessModal";
import SimultaneousApplicationModal from "../UnitRevision/SimultaneousApplicationModal";
export default {
    name: 'AddRevisionUpModal',
    components:{
        EcoPartsModal,
        EcoProcessModal,
        SimultaneousApplicationModal
    },
    data(){
        return{
            status: true,
            deviceValue: [],
            deviceOptions: [],
            modelValue: [],
            modelOptions: [],
            unitValue: [],
            unitOptions: [],
            unit_revision_list: [],
            simultaneous_app_list: [],

            parts_before_fields:
            [
                {key: "action", class: 'text-center'},
                {key: "part_number", label: "Part No. Before", class: 'text-center'},
                {key: "part_number_revision", label: "Rev No.", class: 'text-center'},
                {key: "quantity", class: 'text-center'},
                {key: "details", class: 'text-center'}
            ],
            parts_before_list: [],
            parts_after_fields:
            [
                {key: "action", class: 'text-center'},
                {key: "part_number", label: "Part No. Before", class: 'text-center'},
                {key: "part_number_revision", label: "Rev No.", class: 'text-center'},
                {key: "quantity", class: 'text-center'},
                {key: "details", class: 'text-center'}
            ],
            parts_after_list: [],
            process_before_fields:
            [
                {key: "action", class: 'text-center'},
                {key: "drawing_number", label: "Drawing No. Before", class: 'text-center'},
                {key: "drawing_number_revision", label: "Rev No.", class: 'text-center'},
                {key: "quantity", class: 'text-center'},
                {key: "details", class: 'text-center'}
            ],
            process_before_list: 
            [
                // {drawing_number: "KD02165-Y145", drawing_number_revision:"05", quantity: "100", details:"sample"},
                // {drawing_number: "KD02165-Y148", drawing_number_revision:"05", quantity: "150", details:"sample1"},
                // {drawing_number: "KD02165-Y150", drawing_number_revision:"05", quantity: "200", details:"sample2"}
            ],
            process_after_fields:
            [
                {key: "action", class: 'text-center'},
                {key: "drawing_number", label: "Drawing No. After", class: 'text-center'},
                {key: "drawing_number_revision", label: "Rev No.", class: 'text-center'},
                {key: "quantity", class: 'text-center'},
                {key: "details", class: 'text-center'}
            ],
            process_after_list: 
            [
                // {drawing_number: "KD02165-Y145", drawing_number_revision:"05", quantity: "100", details:"sample"},
                // {drawing_number: "KD02165-Y148", drawing_number_revision:"05", quantity: "150", details:"sample1"},
                // {drawing_number: "KD02165-Y150", drawing_number_revision:"05", quantity: "200", details:"sample2"}
            ],
            simultaneous_fields:[
                {key: "action", class: 'text-center'},
                {key: "eco_number", class: 'text-center'},
            ],
            simultaneous_list:[],
            eco_process_before:[],
            eco_process_after:[],
        }
    },
    mounted(){
        this.loadDevice();
    },
    methods:{
        isNumber: function(evt) {
            evt = (evt) ? evt : window.event;
            var charCode = (evt.which) ? evt.which : evt.keyCode;
            if ((charCode > 31 && (charCode < 48 || charCode > 57))) {
                evt.preventDefault();;
            } else {
                return true;
            }
        },
        loadDevice: function () {
            this.deviceOptions=[];
            this.clearFilterBy();
            this.$store.dispatch("loadDevice")
                .then((response) => {
                this.modelOptions=[];
                this.unitOptions=[];
                let information = response.data.data;
                    Object.keys(information).forEach((key) => {
                        this.deviceOptions.push({
                            'id':information[key].id, 
                            'name':information[key].device_name
                        })
                    });
            });  
        },
        loadModel: function () {
            this.modelOptions=[];
            this.clearFilterBy();
            this.modelValue = [];
            this.unitOptions=[];
            this.unitValue = [];
                this.$store.dispatch("loadModelPerDevice", this.deviceValue.id)
                .then((response) => {
                    let information = response.data;
                        Object.keys(information).forEach((key) => {
                            this.modelOptions.push({
                                'id':information[key].id, 
                                'name':information[key].name
                            })
                        });
                });  
        },

        loadUnit: function () {
            this.unitOptions=[];
            this.clearFilterBy();
            this.unitValue = [];
                this.$store.dispatch("loadUnitPerModel", this.modelValue.id)
                .then((response) => {
                    let information = response.data;
                        Object.keys(information).forEach((key) => {
                            this.unitOptions.push({
                                'id':information[key].id, 
                                'name':information[key].unit_name + '/' + information[key].unit_number
                            })
                        });
                });  
        },
        clearFilter: function () {
            this.deviceValue = [];
            this.modelValue = [];
            this.unitValue = [];

            this.modelOptions=[];
            this.unitOptions=[];
        },
        clearFilterBy: function () {
            this.filterBySelectValue = [];
        },
        searchRevision: function ()
        {
            let unit_data = {
                device_id     : this.deviceValue.id,
                model_name_id : this.modelValue.id,
                unit_id       : this.unitValue.id
            };
            this.$store.dispatch("loadUnitRevision", unit_data)
                .then((response) => {
                    let data = response.data;
                    let status = response.status;
                    this.unit_revision_list = data; 
                    if (status == "Success") {
                        this.toast(status, response.message);
                    
                    } else if (status == "Warning") {
                    
                        this.toast(status, "Please review your inputs.");
                    } else if (status == "Error") {

                        this.toast(status, response.message);
                    }                 
                });

            this.$store.dispatch("loadSimultaneousApplication", unit_data)
                .then((response) => {
                    let data = response.data;
                    let status = response.status;
                    this.simultaneous_app_list = data; 

                    if (status == "Success") {
                        this.toast(status, response.message);
                    
                    } else if (status == "Warning") {
                    
                        this.toast(status, "Please review your inputs.");
                    } else if (status == "Error") {

                        this.toast(status, response.message);
                    }                 
                });
        },
      
        transferredAfter: function(value)
        {
            this.$bvModal.hide("parts_after");
            this.parts_after_list = value
        },
        transferredBefore: function(value)
        {
            this.$bvModal.hide("modal_eco_parts");
            this.parts_before_list = value
        },
        transferredSimultaneous: function(value)
        {
            this.$bvModal.hide("modal_simultaneous_application");
            this.simultaneous_list = value
        },
        transferredProcessAfter: function(value)
        {   
            this.$bvModal.hide("process_after");

            var array_value = 
                {drawing_number:value.txt_drawing_number.value,
                drawing_number_revision:value.txt_revision_number.value,  
                quantity:value.txt_quantity.value, 
                details:value.txt_details.value};

            this.eco_process_after.push(array_value);

            this.process_after_list = this.eco_process_after;
        },
        transferredProcessBefore: function(value)
        {
            this.$bvModal.hide("modal_eco_process");

            var array_value = 
                {drawing_number:value.txt_drawing_number.value,
                drawing_number_revision:value.txt_revision_number.value,  
                quantity:value.txt_quantity.value, 
                details:value.txt_details.value};

            this.eco_process_before.push(array_value);

            this.process_before_list = this.eco_process_before;
        },

        toast: function (status, message){
        this.$toast(message, {
              type:status.toLowerCase().trim(),
              position: "bottom-right",
        });
      }
    }
}
</script>

<style scoped>
    .unit_rev_datepicker{
        position:unset;
        top: unset;
        max-width: unset;
        overflow: unset;
        flex-wrap: unset;
        box-shadow: unset; 
    }

    .link_style{
        /* color: red !important; */
        font-size:0.9em;
    }
</style>