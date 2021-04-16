<template>
    <b-container fluid>
        <b-row class="mt-4 ml-2 mr-2 mb-3">
            <b-col cols="12">
                <b-row>
                    <b-col cols="2">
                        <b-form-group
                            label="PURCHASING"
                            label-size="lg"
                            label-class="font-weight-bold pt-0">
                        </b-form-group>
                    </b-col>
                    <b-col cols="5">
                        <b-form-group
                            label="Received Date:"
                            label-for="txt_pur_received_date"
                            label-cols-sm="5"
                            label-align-sm="left">
                            <b-form-input 
                                id="txt_pur_received_date"
                                disabled></b-form-input>
                        </b-form-group>
                    </b-col>
                    <b-col cols="5">  
                        <b-form-group
                            label="Received By:"
                            label-for="txt_pur_received_by"
                            label-cols-sm="5"
                            label-align-sm="left">
                            <b-form-input 
                                id="txt_pur_received_by"
                                disabled></b-form-input>
                        </b-form-group>
                    </b-col>
                </b-row>  
                <b-row>
                    <b-col cols="2">
                        <b-form-group
                            label="SUPPLIER"
                            label-size="lg"
                            label-class="font-weight-bold pt-0">
                        </b-form-group>
                    </b-col>
                    <b-col cols="5">
                        <b-form-group
                            label="Received Date:"
                            label-for="txt_supplier_received_date"
                            label-cols-sm="5"
                            label-align-sm="left">
                            <b-form-input 
                                id="txt_supplier_received_date"
                                disabled></b-form-input>
                        </b-form-group>
                    </b-col>
                    <b-col cols="5">  
                        <b-form-group
                            label="Received By:"
                            label-for="txt_supplier_received_by"
                            label-cols-sm="5"
                            label-align-sm="left">
                            <b-form-input 
                                id="txt_supplier_received_by"
                                disabled></b-form-input>
                        </b-form-group>
                    </b-col>
                </b-row>    
            </b-col>
        </b-row>
        <hr>
        <b-row class="mr-5 ml-5">
            <b-col cols="12">
                <b-card style="border:none">
                    <b-form
                         id="form_edit_ecas"
                        @submit.prevent="submitForm"
                        method="post">
                        <b-row class="mr-4 ml-4">
                            <b-col cols="6">
                                <b-form-group
                                    label="Finished Good Stock:"
                                    label-for="txt_finsihed_good_stock"
                                    label-size="sm"
                                    :state="form.txt_finsihed_good_stock.state">
                                    <b-form-input 
                                        id="txt_finsihed_good_stock"
                                        placeholder="Enter Finished Good Stock"
                                        @keypress="isNumber($event)"
                                        v-model="form.txt_finsihed_good_stock.value"
                                        :state="form.txt_finsihed_good_stock.state"></b-form-input>
                                </b-form-group>
                                <b-form-group
                                    label="Work in Process:"
                                    label-for="txt_work_in_process"
                                    label-size="sm"
                                    :state="form.txt_work_in_process.state">
                                    <b-form-input 
                                        id="txt_work_in_process"
                                        placeholder="Enter Work in Process"
                                        @keypress="isNumber($event)"
                                        v-model="form.txt_work_in_process.value"
                                        :state="form.txt_work_in_process.state"></b-form-input>
                                </b-form-group>
                                <b-form-group
                                    label="Additional Buffer:"
                                    label-for="txt_additional_buffer"
                                    label-size="sm"
                                    :state="form.txt_additional_buffer.state">
                                    <b-form-input 
                                        id="txt_additional_buffer"
                                        placeholder="Enter Additional Buffer"
                                        @keypress="isNumber($event)"
                                        v-model="form.txt_additional_buffer.value"
                                        :state="form.txt_additional_buffer.state"></b-form-input>
                                </b-form-group>
                                <b-form-group
                                    label="Material Qty (only if there's material changed):"
                                    label-for="txt_material_qty"
                                    label-size="sm"
                                    :state="form.txt_material_qty.state">
                                    <b-form-input 
                                        id="txt_material_qty"
                                        placeholder="Enter Material Quantity"
                                        @keypress="isNumber($event)"
                                        v-model="form.txt_material_qty.value"
                                        :state="form.txt_material_qty.state"></b-form-input>
                                </b-form-group>
                            </b-col>
                            <b-col cols="6">
                                <b-form-group
                                    label="Start Delivery Date of Old Rev:"
                                    label-for="slc_start_del_date_old_rev"
                                    label-size="sm"
                                    :state="form.slc_start_del_date_old_rev.state">
                                    <b-form-datepicker 
                                        id="slc_start_del_date_old_rev" 
                                        placeholder="Choose a date" 
                                        class="ecas_datepicker"
                                        hide-header
                                        reset-button
                                        close-button
                                        :date-format-options="{ year: 'numeric', month: 'numeric', day: 'numeric' }"
                                        v-model="form.slc_start_del_date_old_rev.value"
                                        :state="form.slc_start_del_date_old_rev.state"></b-form-datepicker>
                                </b-form-group>
                                <b-form-group
                                    label="End Delivery Date of Old Rev:"
                                    label-for="slc_end_del_date_old_rev"
                                    label-size="sm"
                                    :state="form.slc_end_del_date_old_rev.state">
                                    <b-form-datepicker 
                                        id="slc_end_del_date_old_rev" 
                                        placeholder="Choose a date" 
                                        class="ecas_datepicker"
                                        hide-header
                                        reset-button
                                        close-button
                                        :date-format-options="{ year: 'numeric', month: 'numeric', day: 'numeric' }"
                                        v-model="form.slc_end_del_date_old_rev.value"
                                        :state="form.slc_end_del_date_old_rev.state"></b-form-datepicker>
                                </b-form-group>
                                <b-form-group
                                    label="Start Delivery Date of New Rev:"
                                    label-for="slc_start_del_date_new_rev"
                                    label-size="sm"
                                    :state="form.slc_start_del_date_new_rev.state">
                                    <b-form-datepicker 
                                        id="slc_start_del_date_new_rev" 
                                        placeholder="Choose a date" 
                                        class="ecas_datepicker"
                                        hide-header
                                        reset-button
                                        close-button
                                        :date-format-options="{ year: 'numeric', month: 'numeric', day: 'numeric' }"
                                        v-model="form.slc_start_del_date_new_rev.value"
                                        :state="form.slc_start_del_date_new_rev.state"></b-form-datepicker>
                                </b-form-group>
                                <b-form-group
                                    label="Remarks:"
                                    label-for="txt_remarks"
                                    label-size="sm"
                                    :state="form.txt_remarks.state">
                                    <b-form-input 
                                        id="txt_remarks"
                                        placeholder="Enter Remarks"
                                        v-model="form.txt_remarks.value"
                                        :state="form.txt_remarks.state"></b-form-input>
                                </b-form-group>
                            </b-col>
                        </b-row>
                    </b-form>  
                </b-card>
            </b-col>
        </b-row>
        <hr>
        <b-row>
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
    </b-container>
</template>

<script>
export default {
    name: 'PurchasingContent',
    props: {
        status_name: String,
    },
    data(){
        return{
            form:{
                txt_finsihed_good_stock: {
                    value: "",
                    state: null,
                    validation: "", 
                },
                txt_work_in_process: {
                    value: "",
                    state: null,
                    validation: "", 
                },
                txt_additional_buffer: {
                    value: "",
                    state: null,
                    validation: "", 
                },
                txt_material_qty: {
                    value: "",
                    state: null,
                    validation: "", 
                },
                slc_start_del_date_old_rev: {
                    value: "",
                    state: null,
                    validation: "", 
                },
                slc_end_del_date_old_rev: {
                    value: "",
                    state: null,
                    validation: "", 
                },
                slc_start_del_date_new_rev: {
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
            document.getElementById("txt_finsihed_good_stock").disabled = true;
            document.getElementById("txt_work_in_process").disabled = true;
            document.getElementById("txt_additional_buffer").disabled = true;
            document.getElementById("txt_material_qty").disabled = true;
            document.getElementById("slc_start_del_date_old_rev").disabled = true;
            document.getElementById("slc_end_del_date_old_rev").disabled = true;
            document.getElementById("slc_start_del_date_new_rev").disabled = true;
            document.getElementById("txt_remarks").disabled = true;
            document.getElementById("btn_clear").hidden = true;
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
                txt_finsihed_good_stock: {value: "", state: null, validation: "",},
                txt_work_in_process: {value: "", state: null, validation: "",},
                txt_additional_buffer: {value: "", state: null, validation: "",},
                txt_material_qty: {value: "", state: null, validation: "",},
                slc_start_del_date_old_rev: {value: "", state: null, validation: "",},
                slc_end_del_date_old_rev: {value: "", state: null, validation: "",},
                slc_start_del_date_new_rev: {value: "", state: null, validation: "",},
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