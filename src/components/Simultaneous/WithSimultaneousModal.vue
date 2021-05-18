<template>
    <b-container fluid>
         <b-modal 
            id="modal_with_simultaneous" 
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
                    <h5 class="mt-2">Before ECO Parts</h5>
                </b-media>
            </template>
            <b-row class="mt-3 ml-3 mr-3">
                <b-col cols="12">
                    <b-card bg-variant="light">
                        <b-form
                            @submit.prevent="searchSimultaneous"
                            method="get">
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
                                            :options="modelOptions" 
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
                                            @input="loadUnitId(unitValue.id)"
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
                        </b-form>
                    </b-card>
                </b-col>
            </b-row>
            <b-row class="mt-3 ml-3 mr-3">
                <b-col cols="12">
                    <b-card bg-variant="light" class="simultaneous_card"> 
                        <b-row>
                        <b-col cols="6">
                            <b-form-group
                                label="Target Application:"
                                label-for="slc_target_application"
                                label-cols-sm="4"
                                label-align-sm="left"
                                label-size="sm">
                                <b-form-datepicker 
                                    required
                                    id="slc_target_application" 
                                    name="slc_target_application"
                                    placeholder="Choose a date" 
                                    class="with_simultaneous_datepicker"
                                    hide-header
                                    reset-button
                                    close-button
                                    :date-format-options="{ year: 'numeric', month: 'numeric', day: 'numeric' }"
                                    v-model="form.slc_target_application.value"
                                    :state="form.slc_target_application.state"></b-form-datepicker>
                            </b-form-group>
                        </b-col>
                        <b-col cols="6">
                            <b-form-group
                                label="ECO Number:"
                                label-for="txt_eco_number"
                                label-cols-sm="4"
                                label-align-sm="left"
                                label-size="sm">
                                <b-form-input 
                                    required
                                    id="txt_eco_number" 
                                    name="txt_eco_number"
                                    placeholder="Enter ECO Number"
                                    v-model="form.txt_eco_number.value"
                                    :state="form.txt_eco_number.state"></b-form-input>
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
                        <b-card >
                            <b-row>
                                <b-col cols="8">
                                     <label for="">Before</label>
                                </b-col>
                                <b-col cols="4">
                                    <b-button
                                        v-if="device_id == null || model_id == null || unit_id == null"
                                        disabled
                                        v-b-modal.modal_parts_simultaneous
                                        size="sm"
                                        variant="danger" 
                                        class="float-right">
                                            <font-awesome-icon 
                                                icon="plus" />
                                    </b-button>
                                    <b-button
                                        v-else
                                        v-b-modal.modal_parts_simultaneous
                                        size="sm"
                                        variant="danger" 
                                        class="float-right">
                                            <font-awesome-icon 
                                                icon="plus" />
                                    </b-button>
                                </b-col> 
                            </b-row>
                            <b-row class="mt-2">
                                <b-table 
                                    head-variant="light"
                                    outlined 
                                    hover 
                                    responsive 
                                    :items="parts_before_list"
                                    :fields="parts_before_fields">
                                    <template #cell(action)="data">
                                        <b-link
                                            @click="removeBefore(data.item)">
                                            Remove
                                        </b-link>
                                    </template>
                                    <template #cell(quantity)="data">
                                         <b-form-input
                                            required
                                            style="width:75px;"
                                            id="txt_quantity"
                                            v-model="data.item.quantity"
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
                                        v-if="device_id == null || model_id == null || unit_id == null"
                                        disabled
                                        v-b-modal.parts_after
                                        size="sm"
                                        variant="danger" 
                                        class="float-right">
                                            <font-awesome-icon 
                                                icon="plus" />
                                    </b-button>
                                    <b-button
                                        v-else
                                        v-b-modal.parts_after
                                        size="sm"
                                        variant="danger" 
                                        class="float-right">
                                            <font-awesome-icon 
                                                icon="plus" />
                                    </b-button>
                                </b-col> 
                            </b-row>
                            <b-row class="mt-2">
                                <b-table 
                                    head-variant="light"
                                    outlined 
                                    hover 
                                    responsive 
                                    :items="parts_after_list"
                                    :fields="parts_after_fields">
                                    <template #cell(action)="data">
                                        <b-link
                                            @click="removeAfter(data.item)">
                                            Remove
                                        </b-link>
                                    </template>
                                    <template #cell(quantity)="data">
                                         <b-form-input
                                            required
                                            style="width:75px;"
                                            id="txt_quantity"
                                            v-model="data.item.quantity"
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
                        <b-col cols="12">
                            <b-card>
                                <b-row>
                                    <b-col cols="12">
                                        <b-button
                                            v-if="device_id == null || model_id == null || unit_id == null"
                                            disabled
                                            v-b-modal.modal_process_simultaneous
                                            size="sm"
                                            variant="danger" 
                                            class="float-right">
                                                <font-awesome-icon 
                                                    icon="plus" />
                                        </b-button>
                                        <b-button
                                            v-else
                                            v-b-modal.modal_process_simultaneous
                                            size="sm"
                                            variant="danger" 
                                            class="float-right">
                                                <font-awesome-icon 
                                                    icon="plus" />
                                        </b-button>
                                    </b-col> 
                                </b-row>
                                <b-row class="mt-2">
                                    <b-table 
                                        head-variant="light"
                                        outlined 
                                        hover 
                                        responsive 
                                        :items="process_list"
                                        :fields="process_fields">
                                        <template #cell(action)="data">
                                            <b-link
                                                @click="removeProcess(data.item)">
                                                Remove
                                            </b-link>
                                        </template>
                                        <!-- <template #cell(quantity)="data">
                                            <b-form-input
                                                style="width:75px;"
                                                id="txt_quantity"
                                                v-model="data.item.quantity"
                                                size="sm"
                                                @keypress="isNumber($event)"></b-form-input>
                                        </template> -->
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
                        @click="clearForm"
                        title="Click to clear inputs">
                        <font-awesome-icon icon="times-circle" /> Clear
                    </b-button>
                    <b-button 
                        class="float-right mr-2"
                        id="btn_update" 
                        size="md" 
                        variant="danger" 
                        @click="addSimultaneous"
                        title="Click to update with simultaneous">
                        <font-awesome-icon icon="save" /> Add Values
                    </b-button> 
                </b-col>
            </b-row>
         </b-modal>
         <PartsSimultaneousApplicationModal :items="this.beforeData" @clicked="transferredBefore"/>
         <PartsSimultaneousApplicationModal :items="this.beforeData" @clicked="transferredAfter" id="parts_after"/>
         <ProcessSimultaneousApplicationModal :items="this.processData" @clicked="transferredProcess"/>
    </b-container>
</template>

<script>
import PartsSimultaneousApplicationModal from "../../components/Simultaneous/PartsSimultaneousApplicationModal";
import ProcessSimultaneousApplicationModal from "../../components/Simultaneous/ProcessSimultaneousApplicationModal";
export default {
    name: "WithSimultaneousModal",
    components: {
        PartsSimultaneousApplicationModal,
        ProcessSimultaneousApplicationModal
    },
    data(){
        return{
            form:{
                slc_target_application: {
                    value: "",
                    state: null,
                    validation: "", 
                },
                txt_eco_number: {
                    value: "",
                    state: null,
                    validation: "",
                },
                before_quantity: {
                    value: "",
                    state: null,
                    validation: "", 
                }
            },
            device_id: null,
            model_id: null,
            unit_id: null,
            deviceValue: [],
            deviceOptions: [],
            modelValue: [],
            modelOptions: [],
            unitValue: [],
            unitOptions: [],
            beforeData: [],
            processData: [],
            simultaneous: [],
            parts_before_fields:
            [
                {key: "action"},
                {key: "part_number", label: "Part No. Before"},
                {key: "part_number_new_revision", label: "Rev No."},
                {key: "quantity"},
                {key: "revision_details"}
            ],
            parts_before_list: 
            [
                // {part_number: "KD02165-Y145", part_number_revision:"05", quantity: "", details:"sample"},
                // {part_number: "KD02165-Y148", part_number_revision:"05", quantity: "", details:"sample1"},
                // {part_number: "KD02165-Y150", part_number_revision:"05", quantity: "", details:"sample2"}
            ],
            parts_after_fields:
            [
                {key: "action"},
                {key: "part_number", label: "Part No. Before"},
                {key: "part_number_new_revision", label: "Rev No."},
                {key: "quantity"},
                {key: "revision_details"}
            ],
            parts_after_list: 
            [
                // {part_number: "KD02165-Y160", part_number_revision:"01", quantity: "", details:"sample4"},
                // {part_number: "KD02166-Y175", part_number_revision:"03", quantity: "", details:"sample5"},
                // {part_number: "KD02169-Y200", part_number_revision:"05", quantity: "", details:"sample6"}
            ],
            process_fields:
            [
                {key: "action"},
                {key: "parent_drawing_number", label: "Part No. Before"},
                {key: "drawing_number_revision", label: "Rev No."},
                {key: "quantity"},
                {key: "revision_mark"}
            ],
            process_list: 
            [
                // {drawing_number: "KD02165-Y160", drawing_number_revision:"01", quantity: "150", details:"sample4"},
                // {drawing_number: "KD02166-Y175", drawing_number_revision:"03", quantity: "1000", details:"sample5"},
                // {drawing_number: "KD02169-Y200", drawing_number_revision:"05", quantity: "5", details:"sample6"}
            ],
            details: [],            
        }
    },
    mounted()
    {
        this.loadDevice();
    },
    methods:{
        removeAfter: function(value)
        {
            let id = value.id;

            for (let x = 0; x < this.parts_after_list.length; x++) 
            {
                if(id == this.parts_after_list[x].id)
                {
                    let index = x;
                    this.parts_after_list.splice(index, 1);
                }
            }
        },
        removeProcess: function(value)
        {
            let id = value.id;

            for (let x = 0; x < this.process_list.length; x++) 
            {
                if(id == this.process_list[x].id)
                {
                    let index = x;
                    this.process_list.splice(index, 1);
                }
            }
        },
        removeBefore: function(value)
        {
            let id = value.id;

            for (let x = 0; x < this.parts_before_list.length; x++) 
            {
                if(id == this.parts_before_list[x].id)
                {
                    let index = x;
                    this.parts_before_list.splice(index, 1);
                }
            }
        },
        transferredAfter: function(value)
        {
            this.$bvModal.hide("parts_after");
            this.parts_after_list = value
        },
        transferredProcess: function(value)
        {
            this.$bvModal.hide("modal_process_simultaneous");
            this.process_list = value
        },
        transferredBefore: function(value)
        {
            this.$bvModal.hide("modal_parts_simultaneous");
            this.parts_before_list = value
        },
        searchSimultaneous: function()
        {
            let filtered_data = {
                "device_id": this.device_id,
                "model_name_id": this.model_id,
                "unit_id": this.unit_id
            };

            this.$store.dispatch("loadEcoParts", filtered_data)
                .then((response) =>
                {
                    this.beforeData = response.data.data;
                    this.searchSimultaneousEcoProcess();
                })
        },
        searchSimultaneousEcoProcess: function()
        {
            let filtered_data = {
                "device_id": this.device_id,
                "model_name_id": this.model_id,
                "unit_id": this.unit_id
            };

            this.$store.dispatch("loadEcoProcess", filtered_data)
                .then((response) =>
                {
                    let status = response.data.status;
                
                    this.processData = response.data.data;
                    this.toast(status, response.data.message);
                })
        },
        addSimultaneous: function()
        {
            
            var before_eco_parts = [];

            for (const index in this.parts_before_list)
            {
                var before_parts_data =
                {
                    'parts_monitoring_id' : this.parts_before_list[index].id,
                    'quantity' : this.parts_before_list[index].quantity
                }
                before_eco_parts[index] = before_parts_data;
            }

            var after_eco_parts = [];

            for (const index in this.parts_after_list)
            {
                var after_parts_data =
                {
                    'parts_monitoring_id' : this.parts_after_list[index].id,
                    'quantity' : this.parts_after_list[index].quantity
                }
                after_eco_parts[index] = after_parts_data;
            }

            var eco_process = [];

            for (const index in this.process_list)
            {
                var process_data =
                {
                    'process_monitoring_id' : this.process_list[index].id,
                }
                eco_process[index] = process_data;
            }

            let data = {
                'details' : 
                {
                    'target_application'    : this.form.slc_target_application.value,
                    'eco_number'            : this.form.txt_eco_number.value,
                    'device_id'             : this.device_id,
                    'model_name_id'         : this.model_id,
                    'unit_id'               : this.unit_id
                },
                'before_eco_parts' : before_eco_parts,
                'after_eco_parts' : after_eco_parts,
                'eco_process'   : eco_process
            }

            this.$store.dispatch("addSimultaneous", data)
                .then((response) =>
                {
                    let status = response.data.status;

                    if(status == "Success")
                    {
                        this.toast(status, response.data.message);
                        this.clearForm();
                        this.$emit('clicked')
                    }   
                    else if(status == "Warning")
                        this.toast(status, response.data.message);
                    else
                        this.toast(status, response.data.message);
                })
                .catch((error) => {
                    console.log(error)
                });
        },
        clearForm: function()
        {
            this.form.slc_target_application.value = ""
            this.form.txt_eco_number.value = ""
            this.deviceValue = null
            this.modelValue = null
            this.unitValue = null
            this.device_id = null
            this.model_id = null
            this.unit_id = null
            this.parts_after_list = null
            this.process_list = null
            this.parts_before_list = null
        },
        isNumber: function(evt) {
            evt = (evt) ? evt : window.event;
            var charCode = (evt.which) ? evt.which : evt.keyCode;
            if ((charCode > 31 && (charCode < 48 || charCode > 57))) {
                evt.preventDefault();;
            } else {
                return true;
            }
        },
        loadDevice: function()
        {
            this.$store.dispatch("loadDevice").then((response) => {
                let data = response.data.data;
                this.deviceOptions = data;     
            });  
        },
        loadModel: function(device_id)
        {
            this.device_id = device_id;
            this.modelOptions = [];     
            this.$store.dispatch("loadModelPerDevice", device_id).then((response) => {
                let data = response.data;
                this.modelOptions = data;
                this.modelValue = null
                this.unitValue = null
            });  
        },
        loadUnit: function(model_id)
        {
            this.model_id = model_id;
            this.unitOptions = [];
            this.$store.dispatch("loadUnitPerModel", model_id).then((response) => {
                let data = response.data;
                this.unitOptions = data;
                this.unitValue = null
            });  
        },
        loadUnitId: function(unit_id)
        {
            this.unit_id = unit_id;
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
    .with_simultaneous_datepicker{
        position:unset;
        top: unset;
        max-width: unset;
        overflow: unset;
        flex-wrap: unset;
        box-shadow: unset;
    }
</style>