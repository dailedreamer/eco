<template>
  <b-container fluid>
    <Header  
        page_title="Die Quotation Details"
        :get_data="get_data"/>
        <b-row class="p-2">
            <b-col cols="4">
                <b-form-group 
                    label-size="sm" 
                    label-for="slc_plan_date" 
                    label="RFQ Send (Plan Date):">
                    <b-form-datepicker 
                        id="slc_plan_date" 
                        placeholder="Choose a date" 
                        class="die_qoutation_datepicker"
                        hide-header
                        :date-format-options="{ year: 'numeric', month: 'numeric', day: 'numeric' }"
                        ></b-form-datepicker>
                </b-form-group>
            </b-col>
            <b-col cols="4">
                <b-form-group 
                    label-size="sm" 
                    label-for="slc_actual_date" 
                    label="RFQ Send (Actual Date):">
                    <b-form-datepicker 
                        id="slc_actual_date" 
                        placeholder="Choose a date" 
                        class="die_qoutation_datepicker"
                        hide-header
                        :date-format-options="{ year: 'numeric', month: 'numeric', day: 'numeric' }"
                        ></b-form-datepicker>
                </b-form-group>
            </b-col>
            <b-col cols="4">
            </b-col>
        </b-row>
        <b-row class="p-2">
            <b-col cols="4">
                <b-form-group 
                    label-size="sm" 
                    label-for="slc_die_request" 
                    label="Die Quotation Request:">
                    <b-form-datepicker 
                        id="slc_die_request" 
                        placeholder="Choose a date" 
                        class="die_qoutation_datepicker"
                        hide-header
                        :date-format-options="{ year: 'numeric', month: 'numeric', day: 'numeric' }"
                        ></b-form-datepicker>
                </b-form-group>
            </b-col>
           <b-col cols="4">
                <b-form-group 
                    label-size="sm" 
                    label-for="slc_die_submit" 
                    label="Die Quotation Submit:">
                    <b-form-datepicker 
                        id="slc_die_submit" 
                        placeholder="Choose a date" 
                        class="die_qoutation_datepicker"
                        hide-header
                        :date-format-options="{ year: 'numeric', month: 'numeric', day: 'numeric' }"
                        ></b-form-datepicker>
                </b-form-group>
            </b-col>
           <b-col cols="4">
                <b-form-group 
                    label-size="sm" 
                    label-for="slc_suppliers_die_send" 
                    label="Supplier's Die Quotation Send:">
                    <b-form-datepicker 
                        id="slc_suppliers_die_send" 
                        placeholder="Choose a date" 
                        class="die_qoutation_datepicker"
                        hide-header
                        :date-format-options="{ year: 'numeric', month: 'numeric', day: 'numeric' }"
                        ></b-form-datepicker>
                </b-form-group>
            </b-col>
        </b-row>
        <b-row class="p-2">
            <b-col cols="4">
                <b-form-group 
                    label-size="sm" 
                    label-for="slc_suppliers_die_approval" 
                    label="Supplier's Die Quotation Approval:">
                    <b-form-datepicker 
                        id="slc_suppliers_die_approval" 
                        placeholder="Choose a date" 
                        class="die_qoutation_datepicker"
                        hide-header
                        :date-format-options="{ year: 'numeric', month: 'numeric', day: 'numeric' }"
                        ></b-form-datepicker>
                </b-form-group>
            </b-col>
           <b-col cols="4" class="mt-3">
                <b-row class="mt-1"></b-row>
                <b-form-group 
                    label-size="sm" 
                    label-for="slc_fdtp_die_forward" 
                    label="FDTP Die Quotation Forward:">
                    <b-form-datepicker 
                        id="slc_fdtp_die_forward" 
                        placeholder="Choose a date" 
                        class="die_qoutation_datepicker"
                        hide-header
                        :date-format-options="{ year: 'numeric', month: 'numeric', day: 'numeric' }"
                        ></b-form-datepicker>
                </b-form-group>
            </b-col>
           <b-col cols="4" class="mt-3">
                <b-row class="mt-1"></b-row>
                <b-form-group 
                    label-size="sm" 
                    label-for="slc_fdtp_die_send" 
                    label="FDTP Die Quotation Send:">
                    <b-form-datepicker 
                        id="slc_fdtp_die_send" 
                        placeholder="Choose a date" 
                        class="die_qoutation_datepicker"
                        hide-header
                        :date-format-options="{ year: 'numeric', month: 'numeric', day: 'numeric' }"
                        ></b-form-datepicker>
                </b-form-group>
            </b-col>
        </b-row>
        <b-row class="p-2">
            <b-col cols="4">
                <b-form-group 
                    label-size="sm" 
                    label-for="slc_die_order_issue" 
                    label="Die Order Issue:">
                    <b-form-datepicker 
                        id="slc_die_order_issue" 
                        placeholder="Choose a date" 
                        class="die_qoutation_datepicker"
                        hide-header
                        :date-format-options="{ year: 'numeric', month: 'numeric', day: 'numeric' }"
                        ></b-form-datepicker>
                </b-form-group>
            </b-col>
           <b-col cols="4">
                <b-form-group 
                    label-size="sm" 
                    label-for="slc_die_po_issue_plan" 
                    label="Die PO Issue(Plan):">
                    <b-form-datepicker 
                        id="slc_die_po_issue_plan" 
                        placeholder="Choose a date" 
                        class="die_qoutation_datepicker"
                        hide-header
                        :date-format-options="{ year: 'numeric', month: 'numeric', day: 'numeric' }"
                        ></b-form-datepicker>
                </b-form-group>
            </b-col>
           <b-col cols="4">
                <b-form-group 
                    label-size="sm" 
                    label-for="slc_die_po_issue_actual" 
                    label="Die PO Issue(Actual):">
                    <b-form-datepicker 
                        id="slc_die_po_issue_actual" 
                        placeholder="Choose a date" 
                        class="die_qoutation_datepicker"
                        hide-header
                        close-button
                        :date-format-options="{ year: 'numeric', month: 'numeric', day: 'numeric' }"
                        ></b-form-datepicker>
                </b-form-group>
            </b-col>
        </b-row>
        <b-row class="p-2">
            <b-col cols="4">
                <b-form-group 
                    label-size="sm" 
                    label-for="txt_po_number" 
                    label="PO Number:">
                    <b-form-input
                        id="txt_po_number"
                        name="txt_po_number"
                        type="text"
                        required
                        placeholder="Enter PO Number"
                        autocomplete="off"/>
                </b-form-group>
            </b-col>
            <b-col cols="4">
                <b-form-group 
                    label-size="sm" 
                    label-for="txt_total_no_days" 
                    label="Total Number of Days:">
                    <b-form-input
                        id="txt_total_no_days"
                        name="txt_total_no_days"
                        type="text"
                        required
                        placeholder="Enter Total No. of Days"
                        @keypress="isNumber($event)"
                        autocomplete="off"/>
                </b-form-group>
            </b-col>
        </b-row>
        <b-row class="footer pt-2 pb-2">
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
                    title="Click to Update Die Quotation Details"
                    @click="update()">
                    <font-awesome-icon 
                        icon="save" 
                        class="icon"/> Update
                </b-button> 
            </b-col>
        </b-row> 
  </b-container>
</template>

<script>
import Header from "./ModalHeaders.vue";
export default {
    name: "DieQuatationDetails",
    components: {
        Header,
    },
    props:{
        get_data: Object
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
        update: function(){
            alert("Successfully Save!")
        },
        clearInputs: function(){
            alert("Clear Inputs!")
        }
    }
}
</script>

<style scoped>
    .die_qoutation_datepicker{
        position:unset;
        top: unset;
        max-width: unset;
        overflow: unset;
        flex-wrap: unset;
        box-shadow: unset;
    }

    /* .form-group .col-form-label-sm {
    font-size: 0.800rem;
    } */

    /* .text_style{
        font-size: 0.800rem;
    } */

    /* label{
        font-size: 0.800rem !important;
    } */
</style>