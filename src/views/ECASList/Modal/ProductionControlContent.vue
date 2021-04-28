<template>
    <b-container fluid>
        <b-row class="mt-4 ml-5 mr-5 mb-3">
            <b-col cols="2">
                 <b-form-group
                    label="PC"
                    label-size="lg"
                    label-class="font-weight-bold pt-0">
                 </b-form-group>
            </b-col>
            <b-col cols="5">
                <b-form-group
                    label="Received Date:"
                    label-for="txt_received_date"
                    label-cols-sm="5"
                    label-align-sm="left">
                    <b-form-input 
                        id="txt_received_date"
                        disabled></b-form-input>
                </b-form-group>
            </b-col>
            <b-col cols="5">
                <b-form-group
                    label="Received By:"
                    label-for="txt_received_by"
                    label-cols-sm="5"
                    label-align-sm="left">
                    <b-form-input 
                        id="txt_received_by"
                        disabled></b-form-input>
                </b-form-group>
            </b-col>
        </b-row>
        <hr>
        <b-row>
            <b-form
                id="form_edit_pc"
                @submit.prevent="submitForm"
                method="post">
                <b-row class="mt-3 ml-3 mr-3">
                    <b-col cols="3">
                        <b-form-group
                            label="Buffer Stock Needed:"
                            label-for="txt_buffer_stock"
                            label-size="sm"
                            :state="form.txt_buffer_stock.state">
                            <b-form-input 
                                id="txt_buffer_stock"
                                placeholder="Enter Buffer Stock"
                                @keypress="isNumber($event)"
                                v-model="form.txt_buffer_stock.value"
                                :state="form.txt_buffer_stock.state"></b-form-input>
                        </b-form-group>
                    </b-col>
                    <b-col cols="3">
                        <b-form-group
                            label="FDTP Stock:"
                            label-for="txt_fdtp_stock"
                            label-size="sm"
                            :state="form.txt_fdtp_stock.state">
                            <b-form-input 
                                id="txt_fdtp_stock"
                                placeholder="Enter FDTP Stock"
                                @keypress="isNumber($event)"
                                v-model="form.txt_fdtp_stock.value"
                                :state="form.txt_fdtp_stock.state"></b-form-input>
                        </b-form-group>
                    </b-col>
                    <b-col cols="3">
                        <b-form-group
                            label="Issued PO:"
                            label-for="txt_issued_po"
                            label-size="sm"
                            :state="form.txt_issued_po.state">
                            <b-form-input 
                                id="txt_issued_po"
                                placeholder="Enter Issued PO"
                                @keypress="isNumber($event)"
                                v-model="form.txt_issued_po.value"
                                :state="form.txt_issued_po.state"></b-form-input>
                        </b-form-group>
                    </b-col>
                    <b-col cols="3">
                        <b-form-group
                            label="For PO Rev Up:"
                            label-for="txt_for_po_rev_up"
                            label-size="sm"
                            :state="form.txt_for_po_rev_up.state">
                            <b-form-input 
                                id="txt_for_po_rev_up"
                                placeholder="Enter For PO Rev. Up"
                                @keypress="isNumber($event)"
                                v-model="form.txt_for_po_rev_up.value"
                                :state="form.txt_for_po_rev_up.state"></b-form-input>
                        </b-form-group>
                    </b-col>
                </b-row>
                <b-row class="mt-3 ml-3 mr-3">
                    <b-col cols="3">
                        <b-form-group
                            label="For PO Cancel:"
                            label-for="txt_for_po_cancel"
                            label-size="sm"
                            :state="form.txt_for_po_cancel.state">
                            <b-form-input 
                                id="txt_for_po_cancel"
                                placeholder="Enter For PO Cancel"
                                @keypress="isNumber($event)"
                                v-model="form.txt_for_po_cancel.value"
                                :state="form.txt_for_po_cancel.state"></b-form-input>
                        </b-form-group>
                    </b-col>
                    <b-col cols="3">
                        <b-form-group
                            label="For PO Issuance:"
                            label-for="txt_for_po_issuance"
                            label-size="sm"
                            :state="form.txt_for_po_issuance.state">
                            <b-form-input 
                                id="txt_for_po_issuance"
                                placeholder="Enter For PO Issuance"
                                @keypress="isNumber($event)"
                                v-model="form.txt_for_po_issuance.value"
                                :state="form.txt_for_po_issuance.state"></b-form-input>
                        </b-form-group>
                    </b-col>
                    <b-col cols="3">
                        <b-form-group
                            label="Range of Buffer:"
                            label-for="txt_range_of_buffer"
                            label-size="sm"
                            :state="form.txt_range_of_buffer.state">
                            <b-form-input 
                                id="txt_range_of_buffer"
                                placeholder="Enter Range of Buffer"
                                @keypress="isNumber($event)"
                                v-model="form.txt_range_of_buffer.value"
                                :state="form.txt_range_of_buffer.state"></b-form-input>
                        </b-form-group>
                    </b-col>
                    <b-col cols="3">
                        <b-form-group
                            label="Start Date of Buffer:"
                            label-for="slc_start_date_of_buffer"
                            label-size="sm"
                            :state="form.slc_start_date_of_buffer.state">
                            <b-form-datepicker 
                                id="slc_start_date_of_buffer" 
                                placeholder="Choose a date" 
                                class="ecas_datepicker"
                                hide-header
                                reset-button
                                close-button
                                :date-format-options="{ year: 'numeric', month: 'numeric', day: 'numeric' }"
                                v-model="form.slc_start_date_of_buffer.value"
                                :state="form.slc_start_date_of_buffer.state"></b-form-datepicker>
                        </b-form-group>
                    </b-col>
                </b-row>
                <b-row class="mt-3 ml-3 mr-3">
                    <b-col cols="3">
                        <b-form-group
                            label="Delivery Date of Old Rev:"
                            label-for="slc_del_date_of_old_rev"
                            label-size="sm"
                            :state="form.slc_del_date_of_old_rev.state">
                            <b-form-datepicker 
                                id="slc_del_date_of_old_rev" 
                                placeholder="Choose a date" 
                                class="ecas_datepicker"
                                hide-header
                                reset-button
                                close-button
                                :date-format-options="{ year: 'numeric', month: 'numeric', day: 'numeric' }"
                                v-model="form.slc_del_date_of_old_rev.value"
                                :state="form.slc_del_date_of_old_rev.state"></b-form-datepicker>
                        </b-form-group>
                    </b-col>
                    <b-col cols="3">
                        <b-form-group
                            label="Delivery Date of New Rev:"
                            label-for="slc_del_date_of_new_rev"
                            label-size="sm"
                            :state="form.slc_del_date_of_new_rev.state">
                            <b-form-datepicker 
                                id="slc_del_date_of_new_rev" 
                                placeholder="Choose a date" 
                                class="ecas_datepicker"
                                hide-header
                                reset-button
                                close-button
                                :date-format-options="{ year: 'numeric', month: 'numeric', day: 'numeric' }"
                                v-model="form.slc_del_date_of_new_rev.value"
                                :state="form.slc_del_date_of_new_rev.state"></b-form-datepicker>
                        </b-form-group>
                    </b-col>
                    <b-col cols="6">
                        <b-form-group
                            label="Remarks:"
                            label-for="txt_remarks"
                            label-size="sm"
                            :state="form.txt_remarks.state">
                            <b-form-textarea 
                                id="txt_remarks"
                                name="txt_remarks"
                                rows="5"
                                max-rows="6"
                                placeholder="Enter Remarks"
                                v-model="form.txt_remarks.value"
                                :state="form.txt_remarks.state"></b-form-textarea>
                        </b-form-group>
                    </b-col>
                </b-row>
                <hr>
                <b-row class="mt-4">
                    <b-col cols="10">
                        <b-button
                            v-if="this.status_name == 'For PC' || this.status_name == 'For Purchasing' || this.status_name == 'Finished ECAS'"
                            id="btn_download" 
                            class="mr-2"
                            size="md" 
                            variant="danger"
                            title="Click to download excel file"
                            @click="downloadExcel()">
                            <font-awesome-icon icon="download" /> Download Excel
                        </b-button>
                        <b-button 
                            v-if="this.status_name == 'For Verification' || this.status_name == 'For Revision' || this.status_name == 'For PC' 
                            || this.status_name == 'For Purchasing' || this.status_name == 'Finished ECAS'"
                            id="btn_save" 
                            class="mr-2"
                            size="md" 
                            variant="danger" 
                            type="submit"
                            title="Click to save changes"
                            @click="saveChanges()">
                            <font-awesome-icon icon="save" /> Save Changes
                        </b-button>
                        <b-button
                            v-if="this.status_name == 'For Checking' || this.status_name == 'For Approval'"
                            id="btn_good"
                            class="mr-2"
                            size="md" 
                            variant="danger"
                            title="Click to Good"
                            @click="good()">
                            <font-awesome-icon icon="thumbs-up" /> Good
                        </b-button> 
                        <b-button
                            v-if="this.status_name == 'For Checking' || this.status_name == 'For Approval'"
                            id="btn_ng"
                            class="mr-2"
                            size="md" 
                            variant="danger"
                            title="Click No Good"
                            @click="noGood()">
                            <font-awesome-icon icon="thumbs-down" /> No Good
                        </b-button> 
                    </b-col>
                    <b-col cols="2">
                        <b-button 
                            id="btn_clear"
                            class="float-right"
                            size="md" 
                            variant="outline-secondary"
                            title="Click to clear inputs"
                            @click="clearInputs()">
                            <font-awesome-icon icon="times-circle" /> Clear
                        </b-button>
                    </b-col>
                </b-row>
            </b-form>
        </b-row>
    </b-container>
</template>

<script>
export default {
    name: 'ProductionControlContent',
    props: {
        status_name: String,
    },
    data(){
        return{
            form:{
                txt_buffer_stock: {
                    value: "",
                    state: null,
                    validation: "", 
                },
                txt_fdtp_stock: {
                    value: "",
                    state: null,
                    validation: "", 
                },
                txt_issued_po: {
                    value: "",
                    state: null,
                    validation: "", 
                },
                txt_for_po_rev_up: {
                    value: "",
                    state: null,
                    validation: "", 
                },
                txt_for_po_cancel: {
                    value: "",
                    state: null,
                    validation: "", 
                },
                txt_for_po_issuance: {
                    value: "",
                    state: null,
                    validation: "", 
                },
                txt_range_of_buffer: {
                    value: "",
                    state: null,
                    validation: "", 
                },
                slc_start_date_of_buffer: {
                    value: "",
                    state: null,
                    validation: "", 
                },
                slc_del_date_of_old_rev: {
                    value: "",
                    state: null,
                    validation: "", 
                },
                slc_del_date_of_new_rev: {
                    value: "",
                    state: null,
                    validation: "", 
                },
                txt_remarks: {
                    value: "",
                    state: null,
                    validation: "", 
                },
            }
        }
    },
    mounted(){
        if(this.status_name == 'For Checking' || this.status_name == 'For Approval' || this.status_name == 'For PC' || this.status_name == 'For Purchasing' || this.status_name == 'Finished ECAS')
        {
            document.getElementById("txt_buffer_stock").disabled = true;
            document.getElementById("txt_fdtp_stock").disabled = true;
            document.getElementById("txt_issued_po").disabled = true;
            document.getElementById("txt_for_po_rev_up").disabled = true;
            document.getElementById("txt_for_po_cancel").disabled = true;
            document.getElementById("txt_for_po_issuance").disabled = true;
            document.getElementById("txt_range_of_buffer").disabled = true;
            document.getElementById("slc_start_date_of_buffer").disabled = true;
            document.getElementById("slc_del_date_of_old_rev").disabled = true;
            document.getElementById("slc_del_date_of_new_rev").disabled = true;
            document.getElementById("txt_remarks").disabled = true;
            document.getElementById("btn_clear").hidden = true;
        }
    },
    methods: {
        isNumber: function(evt) {
            evt = (evt) ? evt : window.event;
            var charCode = (evt.which) ? evt.which : evt.keyCode;
            if ((charCode > 31 && (charCode < 48 || charCode > 57))) {
                evt.preventDefault();;
            } else {
                return true;
            }
        },
        submitForm: function(){
            alert(1);
        },
        saveChanges: function(){
            alert('Successfully Saved!');
        },
        downloadExcel: function(){
            alert('Successfully Downloaded Excel File!');
        },
        good: function(){
            alert('Approved');
        },
        noGood: function(){
            alert('Disapproved');
        },
        clearInputs: function(){
            this.form = {
                txt_buffer_stock: {value: "", state: null, validation: "",},
                txt_fdtp_stock: {value: "", state: null, validation: "",},
                txt_issued_po: {value: "", state: null, validation: "",},
                txt_for_po_rev_up: {value: "", state: null, validation: "",},
                txt_for_po_cancel: {value: "", state: null, validation: "",},
                txt_for_po_issuance: {value: "", state: null, validation: "",},
                txt_range_of_buffer: {value: "", state: null, validation: "",},
                slc_start_date_of_buffer: {value: "", state: null, validation: "",},
                slc_del_date_of_old_rev: {value: "", state: null, validation: "",},
                slc_del_date_of_new_rev: {value: "", state: null, validation: "",},
                txt_remarks: {value: "", state: null, validation: "",},
            }    
        }
    }
}
</script>

<style scoped>
    .ecas_datepicker{
        position:unset;
        top: unset;
        max-width: unset;
        overflow: unset;
        flex-wrap: unset;
        box-shadow: unset;
    }
</style>