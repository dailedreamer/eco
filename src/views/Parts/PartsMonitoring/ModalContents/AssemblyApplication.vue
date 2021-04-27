<template>
  <b-container fluid>
    <Header 
        page_title="Assembly Application"
        :get_data="get_data"/>
        <b-row class="p-2 ml-3 mr-3">
            <b-col>
                <b-form-group 
                    label-size="sm" 
                    label-for="slc_actual_application" 
                    label="Actual Application:">
                    <b-form-datepicker 
                        id="slc_actual_application" 
                        placeholder="Choose a date" 
                        class="assembly_application_datepicker"
                        hide-header
                        :date-format-options="{ year: 'numeric', month: 'numeric', day: 'numeric' }"
                        ></b-form-datepicker>
                </b-form-group>
                <b-form-group 
                    label-size="sm" 
                    label-for="slc_die_status_before" 
                    label="Die Status Before Application:">
                    <b-form-datepicker 
                        id="slc_die_status_before" 
                        placeholder="Choose a date" 
                        class="assembly_application_datepicker"
                        hide-header
                        :date-format-options="{ year: 'numeric', month: 'numeric', day: 'numeric' }"
                        ></b-form-datepicker>
                </b-form-group>
                <b-form-group 
                    label-size="sm" 
                    label-for="txt_carf" 
                    label="CARF:">
                    <b-form-input
                        id="txt_carf"
                        name="txt_carf"
                        type="text"
                        required
                        placeholder="Enter CARF"
                        autocomplete="off"/>
                </b-form-group>
                <b-form-group 
                    label-size="sm" 
                    label-for="txt_serial_number" 
                    label="Serial Number:">
                    <b-form-input
                        id="txt_serial_number"
                        name="txt_serial_number"
                        type="text"
                        required
                        placeholder="Enter Serial Number"
                        autocomplete="off"/>
                </b-form-group>
            </b-col>
            <b-col>
                <b-form-group 
                    label-size="sm" 
                    label-for="slc_manhour_before" 
                    label="Man-hour Before:">
                    <b-row>
                        <b-col style="padding:0; padding-left:15px;">
                            <b-form-datepicker 
                            id="slc_manhour_before_date" 
                            v-model="manhour_before_date" 
                            placeholder="Choose" 
                            class="assembly_application_datepicker"
                            style="padding:0;"
                            hide-header
                            :date-format-options="{ year: 'numeric', month: 'numeric', day: 'numeric' }"
                            ></b-form-datepicker>
                        </b-col>
                        <b-col style="padding:0; padding-right:15px;">
                        <b-form-timepicker 
                            id="slc_manhour_time"
                            v-model="manhour_before_time" 
                            placeholder="Choose" 
                            hide-header
                            style="padding:0;"
                            class="assembly_application_datepicker"></b-form-timepicker>
                        </b-col>
                    </b-row>
                </b-form-group>
                <b-form-group 
                    label-size="sm"
                    label-for="slc_manhour_after" 
                    label="Man-hour After:">
                        <b-row>
                            <b-col style="padding:0; padding-left:15px;">
                                <b-form-datepicker 
                                id="slc_manhour_after_date" 
                                v-model="manhour_after_date" 
                                placeholder="Choose" 
                                class="assembly_application_datepicker"
                                style="padding:0;"
                                hide-header
                                :date-format-options="{ year: 'numeric', month: 'numeric', day: 'numeric' }"
                                ></b-form-datepicker>
                            </b-col>
                            <b-col style="padding:0; padding-right:15px;">
                            <b-form-timepicker 
                                id="manhour_after_time"
                                v-model="manhour_after_time" 
                                placeholder="Choose" 
                                hide-header
                                style="padding:0;"
                                class="assembly_application_datepicker"
                                @input="compute_difference()"></b-form-timepicker>
                            </b-col>
                        </b-row>
                </b-form-group>
                <b-form-group 
                    label-size="sm" 
                    label-for="txt_manhour_difference" 
                    label="Man-hour Difference:">
                    <b-form-input
                        id="txt_manhour_difference"
                        v-model="manhour_difference"
                        name="txt_manhour_difference"
                        type="text"
                        disabled/>
                </b-form-group>
                <b-form-group 
                    label-size="sm" 
                    label-for="txt_assembly_remarks" 
                    label="Assembly Remarks:">
                    <b-form-input
                        id="txt_assembly_remarks"
                        name="txt_assembly_remarks"
                        type="text"
                        required
                        placeholder="Enter Assembly Remarks"
                        autocomplete="off"/>
                </b-form-group>
            </b-col>
        </b-row>
        <b-row class="footer pt-2 pb-2 mr-3 p-2">
            <b-col cols="12">
                <b-button 
                    class="float-right"
                    type="submit"
                    id="button-submit"
                    size="sm" 
                    variant="outline-secondary"
                    title="Click to Clear Inputs"
                    @click="clearInputs()">
                    <font-awesome-icon 
                        icon="times-circle" 
                        class="icon"/> Clear
                </b-button>
                <b-button 
                    class="float-right mr-2"
                    type="submit"
                    id="btn_save" 
                    size="sm" 
                    variant="danger"
                    title="Click to Update Meeting Details"
                    @click="update()">
                    <font-awesome-icon 
                        icon="save" 
                        class="icon"/>Update
                </b-button> 
            </b-col>
        </b-row> 
  </b-container>
</template>

<script>
import Header from "./ModalHeaders.vue";
export default {
    name: "AssemblyApplication",
    components: {
        Header
    },
    props:{
        get_data: Object
    },
    data(){
        return{
            manhour_before_date: '',
            manhour_before_time: '',
            manhour_after_date: '',
            manhour_after_time: '',
            manhour_difference: '0',
        }
    },
    methods:{
        update: function(){
            alert("Successfully Save!")
        },
        clearInputs: function(){
            alert("Clear Inputs!")
        },
        compute_difference: function(){
            var fullbefore = this.manhour_before_date + " " + this.manhour_before_time;
            var fullafter = this.manhour_after_date + " " + this.manhour_after_time;

            let before = new Date(fullbefore);
            let after = new Date(fullafter);

            var Difference_In_Time = after.getTime() - before.getTime();
            var Difference_In_Days = Difference_In_Time / (1000 * 3600 * 24);

            this.manhour_difference = Difference_In_Days.toFixed(2);
        }  
    }
}
</script>

<style scoped>
    .assembly_application_datepicker{
        position:unset;
        top: unset;
        max-width: unset;
        overflow: unset;
        flex-wrap: unset;
        box-shadow: unset;
    }

    .bootstrap-datepicker-widget{
        color: black;
    }
</style>