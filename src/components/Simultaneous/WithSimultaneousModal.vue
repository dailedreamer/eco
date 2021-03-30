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
                    <h5 class="mt-2">Simultaneous Application</h5>
                </b-media>
            </template>
            <b-row class="mt-3 ml-3 mr-3">
                <b-col cols="12">
                    <b-card bg-variant="light">
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
                                        label="name" 
                                        track-by="id"
                                        @input="loadModel()"></multiselect>
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
                                        @input="loadUnit()"></multiselect>
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
                                    id="slc_target_application" 
                                    name="slc_target_application"
                                    placeholder="Choose a date" 
                                    class="with_simultaneous_datepicker"
                                    hide-header
                                    reset-button
                                    close-button
                                    :date-format-options="{ year: 'numeric', month: 'numeric', day: 'numeric' }"></b-form-datepicker>
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
                                    id="txt_eco_number" 
                                    name="txt_eco_number"
                                    placeholder="Enter ECO Number"></b-form-input>
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
                                    <template #cell(action)="">
                                        <b-link>
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
                                    :items="parts_after_list"
                                    :fields="parts_after_fields">
                                    <template #cell(action)="">
                                        <b-link>
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
                        <b-col cols="12">
                            <b-card>
                                <b-row>
                                    <b-col cols="12">
                                        <b-button
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
                                        <template #cell(action)="">
                                            <b-link>
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
                        title="Click to update with simultaneous">
                        <font-awesome-icon icon="save" /> Update Values
                    </b-button> 
                </b-col>
            </b-row>
         </b-modal>
         <PartsSimultaneousApplicationModal />
         <ProcessSimultaneousApplicationModal />
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
            deviceValue: [],
            deviceOptions: [],
            modelValue: [],
            modelOptions: [],
            unitValue: [],
            unitOptions: [],
            parts_before_fields:
            [
                {key: "action"},
                {key: "part_number", label: "Part No. Before"},
                {key: "part_number_revision", label: "Rev No."},
                {key: "quantity"},
                {key: "details"}
            ],
            parts_before_list: 
            [
                {part_number: "KD02165-Y145", part_number_revision:"05", quantity: "", details:"sample"},
                {part_number: "KD02165-Y148", part_number_revision:"05", quantity: "", details:"sample1"},
                {part_number: "KD02165-Y150", part_number_revision:"05", quantity: "", details:"sample2"}
            ],
            parts_after_fields:
            [
                {key: "action"},
                {key: "part_number", label: "Part No. Before"},
                {key: "part_number_revision", label: "Rev No."},
                {key: "quantity"},
                {key: "details"}
            ],
            parts_after_list: 
            [
                {part_number: "KD02165-Y160", part_number_revision:"01", quantity: "", details:"sample4"},
                {part_number: "KD02166-Y175", part_number_revision:"03", quantity: "", details:"sample5"},
                {part_number: "KD02169-Y200", part_number_revision:"05", quantity: "", details:"sample6"}
            ],
            process_fields:
            [
                {key: "action"},
                {key: "drawing_number", label: "Part No. Before"},
                {key: "drawing_number_revision", label: "Rev No."},
                {key: "quantity"},
                {key: "details"}
            ],
            process_list: 
            [
                {drawing_number: "KD02165-Y160", drawing_number_revision:"01", quantity: "150", details:"sample4"},
                {drawing_number: "KD02166-Y175", drawing_number_revision:"03", quantity: "1000", details:"sample5"},
                {drawing_number: "KD02169-Y200", drawing_number_revision:"05", quantity: "5", details:"sample6"}
            ],
        }
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