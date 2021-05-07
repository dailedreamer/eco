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
                    label-size="lg"
                    label-class="font-weight-bold pt-0">
                </b-form-group>
            </b-row>
            <b-row class="ml-5 mr-5">
                <b-col cols="3">
                    <b-form-group
                        label="Drawing Number:"
                        label-for="txt_drawing_number">
                        <b-form-input 
                            id="txt_drawing_number"
                            v-model="this.details.parent_drawing_number"
                            disabled
                            placeholder="Enter Drawing Number"
                            required></b-form-input>
                    </b-form-group>
                </b-col>
                <b-col cols="3">
                    <b-form-group 
                        label="Revision Number:"
                        label-for="txt_revision_number">
                        <b-form-input 
                            id="txt_drawing_number"
                            v-model="this.details.drawing_number_revision"
                            disabled
                            placeholder="Enter Revision Number"
                            required></b-form-input>
                    </b-form-group>
                </b-col> 
            </b-row>
            <b-row class="ml-5 mr-5">
                <b-col cols="3">
                   <!-- {{deviceValue}}  -->
                    <b-form-group
                        label="Device:"
                        label-for="slc_device">
                        <multiselect 
                            id="slc_device" 
                            v-model="device"
                            name="slc_device"
                            :options="this.deviceOptions" 
                            :searchable="true"
                            :show-labels="false"
                            placeholder='Select Device'
                            label="name" 
                            track-by="id"
                            @input="loadModel()"></multiselect>
                    </b-form-group>
                </b-col>
                <b-col cols="3">
                    <b-form-group 
                        label="Model:"
                        label-for="slc_model">
                        <multiselect  
                            id="slc_model"
                            v-model="model"
                            name="slc_model"
                            :options="modelOptions"  
                            :searchable="true"
                            :show-labels="false"
                            placeholder='Select Model'
                            label="name" 
                            track-by="id"
                            @input="loadUnitName()"></multiselect>
                    </b-form-group>
                </b-col>
                <b-col cols="3">
                    <b-form-group 
                        label="Unit Name:"
                        label-for="slc_unit_name">
                        <multiselect  
                            id="slc_unit_name"
                            v-model="unitName"
                            :options="unitNameOptions"  
                            :searchable="true"
                            :show-labels="false"
                            placeholder='Select Unit Name'
                            label="name" 
                            track-by="id"
                           @input="loadUnitNo(unitNameValue.unit_number)"
                        ></multiselect>
                    </b-form-group>
                </b-col>
                <b-col cols="3">
                    <b-form-group 
                        label="Unit No.:"
                        label-for="txt_unit_number">
                            <b-form-input 
                            id="txt_unit_number"
                            name="txt_unit_number"
                            type="text"
                            v-model="this.details.unit_number"
                            disabled></b-form-input>
                    </b-form-group>
                </b-col>
            </b-row>
            <b-row class="ml-3 mr-3 mt-4">
                <b-form-group 
                    label="Details of Change"
                    label-size="lg"
                    label-class="font-weight-bold pt-0">
                    </b-form-group>
            </b-row>
            <b-row class="ml-5 mr-5">
                <b-col cols="12">
                    <b-table 
                        class="alpha__table text-nowrap"
                        responsive 
                        hover 
                        bordered
                        head-variant="light"
                        :items="details_change"
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
                            v-model="this.details.target_application"
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
                            v-model="this.details.actual_application"
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
                        <b-form-input 
                            v-model="this.details.carf_number"
                            id="txt_carf"
                            placeholder="Enter Carf"
                            required></b-form-input>
                    </b-form-group>
                </b-col> 
                <b-col cols="3">
                    <b-form-group 
                        label="Serial No.:"
                        label-for="txt_serial_number">
                        <b-form-input 
                            v-model="this.details.serial_number"
                            id="txt_serial_number"
                            placeholder="Enter Serial No"
                            required></b-form-input>
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
                            v-model="details.manhour_before"
                            v-mask="'###:##'" 
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
                            v-model="details.manhour_after"
                            v-mask="' ###:##'" 
                            placeholder="---:--"
                            autocomplete="off"/>
                    </b-form-group>
                </b-col> 
                <b-col cols="3">
                    <b-form-group 
                        label="Man-hour (Difference):"
                        label-for="slc_difference">
                        <b-form-input 
                            id="slc_difference"
                            v-model="details.manhour_difference"
                            placeholder="Enter Difference"
                            required></b-form-input>
                    </b-form-group>
                </b-col> 
            </b-row>
            <b-row class="ml-5 mr-5">
                <b-col cols="12">
                    <b-form-group 
                        label="Remarks:"
                        label-for="txt_remarks">
                        <b-form-textarea 
                            v-model="this.details.remarks"
                            id="txt_remarks"
                            name="txt_remarks"
                            type="text"
                            rows="5"
                            max-rows="7"
                            placeholder="Enter Remarks"
                            required></b-form-textarea>
                    </b-form-group>
                </b-col>
            </b-row>
        </b-form>
        <template #modal-footer="{ Update, hide }">
            <b-button size="sm" variant="danger" @click="Update">
                <font-awesome-icon icon="save" /> Update Values
            </b-button>
            <b-button size="sm" variant="outline-secondary" @click="hide('close')">
                <font-awesome-icon icon="times-circle" /> Close 
            </b-button>
        </template> 
  
    </b-modal>
</template>

<script>

export default {
    
    name: 'ProcessMonitoringUpdateModal',
    components: {
    },
    props: {
        details:Object,
        details_change:Array,
        device:Array,
        model:Array,
        unitName:Array
    },
    data() {
        return{
            value_after: '',
            value_before: '',
            details_of_change_fields:
            [
                {key: "part_number", sortable: true, class: "text-center"},
                {key: "part_number_revision", sortable: true, class: "text-center"},
                {key: "revision_mark", sortable: true, class: "text-center"},
                {key: "quantity", sortable: true, class: "text-center"},
                {key: "remarks", sortable: true, class: "text-center"}
            ],
            // details_of_change_list: 
            // [
            //     {part_number: "KD02165-Y144", part_number_revision:"01", revision_mark: "1", quantity: "20", remarks:"sample"},
            //     {part_number: "KD02165-Y144", part_number_revision:"01", revision_mark: "1", quantity: "20", remarks:"sample"},
            //     {part_number: "KD02165-Y144", part_number_revision:"01", revision_mark: "1", quantity: "20", remarks:"sample"}
            // ],
            // this.device
            deviceOptions: [],
            modelOptions: [],
            unitNameOptions: [],
            unitNumberValue: '',
        }
    },
    methods:{
        loadDevice: function () {

            this.deviceOptions=[];
            this.clearFields();
            this.$store.dispatch("loadDevice")
                .then((response) => {
                    let information = response.data.data;
                    Object.keys(information).forEach((key) => {
                        this.deviceOptions.push({
                            'id':information[key].id, 
                            'name':information[key].device_name
                        })
                    });
                })
           
        },
        loadModel: function () {
            this.modelOptions=[];
            this.modelValue=[];
            this.unitNameOptions=[];
            this.unitNameValue=[];
            this.unitNumberValue= '',

            this.$store.dispatch("loadModelPerDevice", this.deviceValue.id)
                .then((response) => {
                    let information = response.data;
                    Object.keys(information).forEach((key) => {
                        this.modelOptions.push({
                            'id':information[key].id, 
                            'name':information[key].model_code
                        })
                    });
                })
        },
        loadUnitName: function () {
            this.unitNameOptions= [];
            this.unitNameValue = [];
            this.unitNumberValue= '',

            this.$store.dispatch("loadUnitPerModel", this.modelValue.id)
                .then((response) => {
                    let information = response.data;
                    // console.log(information);

                    Object.keys(information).forEach((key) => {
                        this.unitNameOptions.push({
                            'id':information[key].id, 
                            'name':information[key].unit_name,
                            'unit_number':information[key].unit_number,
                        })
                    });

                })
        },
        loadUnitNo: function (unit_no)
        {
            
            this.unitNumberValue = unit_no;
        },
        clearFields: function ()
        {
            this.modelValue = [];
            this.unitNameValue = [];
            this.unitNumberValue = '';

            this.modelOptions=[];
            this.unitNameOptions=[];
        },
    },
    mounted(){
        this.loadDevice();
        
    },
    computed: 
    {

        //  this.deviceValue = this.device;
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