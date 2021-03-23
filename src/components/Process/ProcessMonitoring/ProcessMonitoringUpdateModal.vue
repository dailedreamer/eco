<template>
    <b-modal 
        id="process_modal_id" 
        size="xl" 
        :no-close-on-backdrop="true"
        scrollable
        centered>
        <template #modal-header="" >
            <b-media>
                <template #aside>
                    <b-img 
                        :src="require('../../../assets/icon_images/edit_content.svg')" 
                        width="44" 
                        height="37" 
                        alt="placeholder">
                    </b-img>
                </template>
                <h5 class="mt-1">Process Monitoring</h5>
            </b-media>
        </template>
        <b-form>
            <b-row class="ml-3 mr-3 mt-2">
                <b-form-group 
                    label="EC Process Details"
                    label-size="lg">
                </b-form-group>
            </b-row>
            <b-row class="ml-5 mr-5">
                <b-col cols="3">
                    <b-form-group
                        label="Drawing Number:"
                        label-for="txt_drawing_number">
                        <b-form-input id="txt_drawing_number"></b-form-input>
                    </b-form-group>
                </b-col>
                <b-col cols="3">
                    <b-form-group 
                        label="Revision Number:"
                        label-for="txt_revision_number">
                        <b-form-input id="txt_drawing_number"></b-form-input>
                    </b-form-group>
                </b-col> 
            </b-row>
            <b-row class="ml-5 mr-5">
                <b-col cols="3">
                    <b-form-group
                        label="Device:"
                        label-for="slc_device">
                        <multiselect 
                            id="slc_device" 
                            v-model="deviceValue"
                            :options="deviceOptions" 
                            :searchable="true"
                            :show-labels="false"
                            label="device_name" 
                            track-by="id"></multiselect>
                    </b-form-group>
                </b-col>
                <b-col cols="3">
                    <b-form-group 
                        label="Model:"
                        label-for="slc_model">
                        <multiselect  
                            id="slc_model"
                            v-model="modelValue"
                            :options="modelOptions"  
                            :searchable="true"
                            :show-labels="false"
                            label="model_name" 
                            track-by="id"></multiselect>
                    </b-form-group>
                </b-col>
                <b-col cols="3">
                    <b-form-group 
                        label="Unit Name:"
                        label-for="slc_unit_name">
                        <multiselect  
                            id="slc_unit_name"
                            v-model="unitNameValue"
                            :options="unitNameOptions"  
                            :searchable="true"
                            :show-labels="false"
                            label="unit_name" 
                            track-by="id"></multiselect>
                    </b-form-group>
                </b-col>
                <b-col cols="3">
                    <b-form-group 
                        label="Unit No.:"
                        label-for="slc_unit_number">
                        <multiselect  
                            id="slc_unit_number"
                            v-model="unitNumberValue"
                            :options="unitNumberOptions"  
                            :searchable="true"
                            :show-labels="false"
                            label="unit_number" 
                            track-by="id"></multiselect>
                    </b-form-group>
                </b-col>
            </b-row>
            <b-row class="ml-3 mr-3 mt-4">
                <b-form-group 
                    label="Details of Change"
                    label-size="lg">
                    </b-form-group>
            </b-row>
            <b-row class="ml-5 mr-5">
                <b-col cols="12">
                    <b-table 
                        outlined 
                        hover 
                        responsive 
                        :items="details_of_change_list"
                        :fields="details_of_change_fields">
                    </b-table>
                </b-col>
            </b-row>
            <b-row class="ml-5 mr-5 mt-2">
                <b-col cols="3">
                    <b-form-group
                        label="Target Application:"
                        label-for="slc_target_application">
                        <b-form-datepicker
                            id="slc_target_application"
                            placeholder="Choose a date" 
                            class="date_picker"
                            hide-header
                            reset-button
                            close-button
                            :date-format-options="{ year: 'numeric', month: 'numeric', day: 'numeric' }"></b-form-datepicker>
                    </b-form-group>
                </b-col>
                <b-col cols="3">
                    <b-form-group 
                        label="Actual Application:"
                        label-for="slc_actual_application">
                        <b-form-datepicker 
                            id="slc_actual_application" 
                            placeholder="Choose a date" 
                            class="date_picker"
                            hide-header
                            reset-button
                            close-button
                            :date-format-options="{ year: 'numeric', month: 'numeric', day: 'numeric' }"></b-form-datepicker>
                    </b-form-group>
                </b-col> 
                <b-col cols="3">
                    <b-form-group 
                        label="CARF:"
                        label-for="txt_carf">
                        <b-form-input id="txt_carf"></b-form-input>
                    </b-form-group>
                </b-col> 
                <b-col cols="3">
                    <b-form-group 
                        label="Serial No.:"
                        label-for="txt_serial_number">
                        <b-form-input id="txt_serial_number"></b-form-input>
                    </b-form-group>
                </b-col> 
            </b-row>
            <b-row class="ml-5 mr-5">
                <b-col cols="3">
                    <b-form-group
                        label="Man-hour (Before):"
                        label-for="slc_before">
                        <input 
                            class="manhour_input"
                            id="slc_before" 
                            v-mask="' ###:##'" 
                            v-model="value_before" 
                            placeholder="---:--"
                            autocomplete="off"/>
                    </b-form-group>
                </b-col>
                <b-col cols="3">
                    <b-form-group 
                        label="Man-hour (After):"
                        label-for="slc_after">
                        <input 
                            class="manhour_input"
                            id="slc_after" 
                            v-mask="' ###:##'" 
                            v-model="value_after" 
                            placeholder="---:--"
                            autocomplete="off"/>
                    </b-form-group>
                </b-col> 
                <b-col cols="3">
                    <b-form-group 
                        label="Man-hour (Difference):"
                        label-for="slc_difference">
                        <b-form-input id="slc_difference"></b-form-input>
                    </b-form-group>
                </b-col> 
            </b-row>
            <b-row class="ml-5 mr-5">
                <b-col cols="12">
                    <b-form-group 
                        label="Remarks:"
                        label-for="txt_remarks">
                        <b-form-textarea id="txt_remarks"></b-form-textarea>
                    </b-form-group>
                </b-col>
            </b-row>
        </b-form>
        <template #modal-footer="{ Update, hide }">
            <b-button size="sm" variant="danger" @click="Update">
                <font-awesome-icon icon="save" /> Update Values
            </b-button>
            <b-button size="sm" variant="outline-dark" @click="hide('close')">
                <font-awesome-icon icon="times-circle" /> Close 
            </b-button>
        </template> 
    </b-modal>
</template>

<script>
import Multiselect from 'vue-multiselect'
export default {
    name: 'ProcessMonitoringUpdateModal',
    components: {
        Multiselect, 
    },
    data() {
        return{
            value_after: '',
            value_before: '',
            details_of_change_fields:
            [
                {key: "part_number", sortable: true},
                {key: "part_number_revision", sortable: true},
                {key: "revision_mark", sortable: true},
                {key: "quantity", sortable: true},
                {key: "remarks", sortable: true}
            ],
            details_of_change_list: 
            [
                {part_number: "KD02165-Y144", part_number_revision:"01", revision_mark: "1", quantity: "20", remarks:"sample"},
                {part_number: "KD02165-Y144", part_number_revision:"01", revision_mark: "1", quantity: "20", remarks:"sample"},
                {part_number: "KD02165-Y144", part_number_revision:"01", revision_mark: "1", quantity: "20", remarks:"sample"}
            ],
            deviceValue: [],
            deviceOptions: [
                {id: '1', device_name: 'Device 1'},
                {id: '2', device_name: 'Device 2'},
                {id: '3', device_name: 'Device 3'},
            ],
            modelValue: [],
            modelOptions: [
                {id: '1', model_name: 'Model 1'},
                {id: '2', model_name: 'Model 2'},
                {id: '3', model_name: 'Model 3'},
            ],
            unitNameValue: [],
            unitNameOptions: [
                {id: '1', unit_name: 'Unit Number 1'},
                {id: '2', unit_name: 'Unit Number 2'},
                {id: '3', unit_name: 'Unit Number 3'},
            ],
            unitNumberValue: [],
            unitNumberOptions: [
                {id: '1', unit_number: 'Unit Name 1'},
                {id: '2', unit_number: 'Unit Name 2'},
                {id: '3', unit_number: 'Unit Name 3'},
            ],
        }
    }
}
</script>

<style scoped>
    .date_picker{
        position:unset;
        top: unset;
        max-width: unset;
        overflow: unset;
        flex-wrap: unset;
        box-shadow: unset;
    }

    .time_picker{
        position:unset;
        top: unset;
        max-width: unset;
        overflow: unset;
        flex-wrap: unset;
        box-shadow: unset;
    }

    .manhour_input{
        border-radius: 6px;
        width: 220px;
        height: 39px;
        border: 1px solid rgb(211, 215, 216);
        padding:0 9px;
    }
</style>