<template>
    <b-container fluid>
        <b-form
            id="form_edit_ecas"
            @submit.prevent="submitForm"
            method="post">
            <b-row>
                <b-col cols="3"> 
                    <b-form-group
                        label="Part Number:"
                        label-for="txt_part_number"
                        label-size="sm">
                        <b-form-input 
                            id="txt_part_number"
                            v-model="get_data.parts_number"
                            disabled></b-form-input>
                    </b-form-group>
                    <b-form-group
                        label="Part Suppliers:"
                        label-for="txt_part_supplier"
                        label-size="sm"
                        :state="form.txt_part_supplier.state">
                        <b-form-input 
                            id="txt_part_supplier"
                            placeholder="Enter Parts Suppliers"
                            v-model="form.txt_part_supplier.value"
                            :state="form.txt_part_supplier.state"></b-form-input>
                    </b-form-group>
                    <b-form-group
                        label="Application Mark:"
                        label-for="txt_application_mark"
                        label-size="sm"
                        :state="form.txt_application_mark.state">
                        <b-form-input 
                            id="txt_application_mark"
                            placeholder="Enter Application Mark"
                            v-model="form.txt_application_mark.value"
                            :state="form.txt_application_mark.state"></b-form-input>
                    </b-form-group>
                </b-col>
                <b-col cols="3">
                    <b-row>
                        <b-col cols="6">
                            <b-form-group
                                label="Current Rev:"
                                label-for="txt_current_revision"
                                label-size="sm">
                                <b-form-input 
                                    id="txt_current_revision"
                                    v-model="this.get_data.current_revision"
                                    disabled></b-form-input>
                            </b-form-group>
                        </b-col>
                        <b-col cols="6">
                            <b-form-group
                                label="New Rev:"
                                label-for="txt_new_revision"
                                label-size="sm">
                                <b-form-input 
                                    id="txt_new_revision"
                                    v-model="this.get_data.new_revision"
                                    disabled></b-form-input>
                            </b-form-group>
                        </b-col>
                    </b-row>
                    <b-form-group
                        label="Parts Delivery Target:"
                        label-for="slc_parts_delivery_target"
                        label-size="sm"
                        :state="form.slc_parts_delivery_target.state">
                        <b-form-datepicker 
                            id="slc_parts_delivery_target" 
                            placeholder="Choose a date" 
                            class="ecas_datepicker"
                            hide-header
                            reset-button
                            close-button
                            :date-format-options="{ year: 'numeric', month: 'numeric', day: 'numeric' }"
                            v-model="form.slc_parts_delivery_target.value"
                            :state="form.slc_parts_delivery_target.state"></b-form-datepicker>
                    </b-form-group>
                    <b-form-group
                        label="Die Sample Level:"
                        label-for="txt_die_sample_level"
                        label-size="sm"
                        :state="form.txt_die_sample_level.state">
                        <b-form-input 
                            id="txt_die_sample_level"
                            placeholder="Enter Die Sample Level"
                            v-model="form.txt_die_sample_level.value"
                            :state="form.txt_die_sample_level.state"></b-form-input>
                    </b-form-group>
                </b-col>
                <b-col cols="3">
                    <b-form-group
                        label="ECAS Number:"
                        label-for="txt_ecas_number"
                        label-size="sm">
                        <b-form-input 
                            id="txt_ecas_number"
                            v-model="this.get_data.ecas_number"
                            disabled></b-form-input>
                    </b-form-group>
                    <b-form-group
                        label="Die Supplier:"
                        label-for="txt_die_supplier"
                        label-size="sm"
                        :state="form.txt_die_supplier.state">
                        <b-form-input 
                            id="txt_die_supplier"
                            placeholder="Enter Die Supplier"
                            v-model="form.txt_die_supplier.value"
                            :state="form.txt_die_supplier.state"></b-form-input>
                    </b-form-group>
                    <b-form-group
                        label="Die Quantity:"
                        label-for="txt_die_qty"
                        label-size="sm"
                        :state="form.txt_die_qty.state">
                        <b-form-input 
                            id="txt_die_qty"
                            placeholder="Enter Die Quantity"
                            v-model="form.txt_die_qty.value"
                            :state="form.txt_die_qty.state"
                            @keypress="isNumber($event)"></b-form-input>
                    </b-form-group>
                </b-col>
                <b-col cols="3">
                    <b-form-group
                        label="ECO Number:"
                        label-for="txt_eco_number"
                        label-size="sm">
                        <b-form-input 
                            id="txt_eco_number"
                            v-model="this.get_data.eco_number"
                            disabled></b-form-input>
                    </b-form-group>
                    <b-form-group
                        label="Die Target:"
                        label-for="slc_die_target"
                        label-size="sm"
                        :state="form.slc_die_target.state">
                        <b-form-datepicker 
                            id="slc_die_target" 
                            placeholder="Choose a date" 
                            class="ecas_datepicker"
                            hide-header
                            reset-button
                            close-button
                            :date-format-options="{ year: 'numeric', month: 'numeric', day: 'numeric' }"
                            v-model="form.slc_die_target.value"
                            :state="form.slc_die_target.state"></b-form-datepicker>
                    </b-form-group>
                    <b-form-group
                        label="Die Sample Target Date:"
                        label-for="slc_die_sample_target_date"
                        label-size="sm"
                        :state="form.slc_die_sample_target_date.state">
                        <b-form-datepicker 
                            id="slc_die_sample_target_date" 
                            placeholder="Choose a date" 
                            class="ecas_datepicker"
                            hide-header
                            reset-button
                            close-button
                            :date-format-options="{ year: 'numeric', month: 'numeric', day: 'numeric' }"
                            v-model="form.slc_die_sample_target_date.value"
                            :state="form.slc_die_sample_target_date.state"></b-form-datepicker>
                    </b-form-group>
                </b-col>
            </b-row>
            <b-row>
                <b-col cols="12">
                <b-form-group
                    label="Remarks:"
                    label-for="txt_remarks"
                    label-size="sm"
                    :state="form.txt_remarks.state">
                    <b-form-textarea 
                        id="txt_remarks"
                        name="txt_remarks"
                        placeholder="Enter Remarks"
                        v-model="form.txt_remarks.value"
                        :state="form.txt_remarks.state"></b-form-textarea>
                </b-form-group>
                </b-col>
            </b-row>
            <b-row class="mt-4">
                <b-col cols="12">
                    <b-media class="mb-4">
                        <template #aside>
                            <b-icon icon="card-list"  font-scale="2.5" variant="secondary"></b-icon>
                        </template>
                        <h5 class="mb-0">Engineering Change Order</h5>
                        <small class="text-secondary">
                            Detail of Revision
                        </small>
                    </b-media>
                    <b-card>
                        <b-row>
                            <b-col cols="3">
                                <b-table-simple borderless>
                                    <b-tbody>
                                        <b-tr>
                                            <b-th>
                                                <b-form-checkbox 
                                                    id="chk_die_modification"
                                                    v-model="form.chk_die_modification.value"
                                                    :state="form.chk_die_modification.state"></b-form-checkbox>
                                            </b-th>
                                            <b-td>
                                                <label 
                                                    for="chk_die_modification" 
                                                    :state="form.chk_die_modification.state">
                                                    Die Modification</label>
                                            </b-td>
                                        </b-tr>
                                        <b-tr>
                                            <b-th>
                                                <b-form-checkbox 
                                                    id="chk_new_tooling"
                                                    v-model="form.chk_new_tooling.value"
                                                    :state="form.chk_new_tooling.state"></b-form-checkbox>
                                            </b-th>
                                            <b-td>
                                                <label 
                                                    for="chk_new_tooling"
                                                    :state="form.chk_new_tooling.state">
                                                    New Tooling (MYLAR)</label>
                                            </b-td>
                                        </b-tr>
                                        <b-tr>
                                            <b-th>
                                                <b-form-checkbox 
                                                    id="chk_additional_process"
                                                    v-model="form.chk_additional_process.value"
                                                    :state="form.chk_additional_process.state"></b-form-checkbox>
                                            </b-th>
                                            <b-td>
                                                <label 
                                                    for="chk_additional_process"
                                                    :state="form.chk_additional_process.state">
                                                    Additional Process</label>
                                            </b-td>
                                        </b-tr>
                                        <b-tr>
                                            <b-th>
                                                <b-form-checkbox 
                                                    id="chk_material_changed"
                                                    v-model="form.chk_material_changed.value"
                                                    :state="form.chk_material_changed.state"></b-form-checkbox>
                                            </b-th>
                                            <b-td>
                                                <label 
                                                    for="chk_material_changed"
                                                    :state="form.chk_material_changed.state">
                                                    Material Changed</label>
                                            </b-td>
                                        </b-tr>
                                    </b-tbody>
                                </b-table-simple>
                            </b-col>
                            <b-col cols="3">
                                <b-table-simple borderless>
                                    <b-tbody>
                                        <b-tr>
                                            <b-th>
                                                <b-form-checkbox 
                                                    id="chk_new_die_fabrication"
                                                    v-model="form.chk_new_die_fabrication.value"
                                                    :state="form.chk_new_die_fabrication.state"></b-form-checkbox>
                                            </b-th>
                                            <b-td>
                                                <label 
                                                    for="chk_new_die_fabrication"
                                                    :state="form.chk_new_die_fabrication.state">
                                                    New Die Fabrication</label>
                                            </b-td>
                                        </b-tr>
                                        <b-tr>
                                            <b-th>
                                                <b-form-checkbox 
                                                    id="chk_cable_modification"
                                                    v-model="form.chk_cable_modification.value"
                                                    :state="form.chk_cable_modification.state"></b-form-checkbox>
                                            </b-th>
                                            <b-td>
                                                <label 
                                                    for="chk_cable_modification"
                                                    :state="form.chk_cable_modification.state">
                                                    Cable Modification</label>
                                            </b-td>
                                        </b-tr>
                                        <b-tr>
                                            <b-th>
                                                <b-form-checkbox 
                                                    id="chk_part_quality_changed"
                                                    v-model="form.chk_part_quality_changed.value"
                                                    :state="form.chk_part_quality_changed.state"></b-form-checkbox>
                                            </b-th>
                                            <b-td>
                                                <label 
                                                    for="chk_part_quality_changed"
                                                    :state="form.chk_part_quality_changed.state">
                                                    Part Quality Changed</label>
                                            </b-td>
                                        </b-tr>
                                        <b-tr>
                                            <b-th>
                                                <b-form-checkbox 
                                                    id="chk_hinsei"
                                                    v-model="form.chk_hinsei.value"
                                                    :state="form.chk_hinsei.state"></b-form-checkbox>
                                            </b-th>
                                            <b-td>
                                                <label 
                                                    for="chk_hinsei"
                                                    :state="form.chk_hinsei.state">
                                                    HINSEI<br>
                                                    <small class="text-secondary">
                                                        Drawing is adjusted to match the actual part
                                                    </small>
                                                </label>
                                            </b-td>
                                        </b-tr>
                                    </b-tbody>
                                </b-table-simple>
                            </b-col>
                            <b-col cols="3">
                                <b-table-simple borderless>
                                    <b-tbody>
                                        <b-tr>
                                            <b-th>
                                                <b-form-checkbox 
                                                    id="chk_shaft_modification"
                                                    v-model="form.chk_shaft_modification.value"
                                                    :state="form.chk_shaft_modification.state"></b-form-checkbox>
                                            </b-th>
                                            <b-td>
                                                <label 
                                                    for="chk_shaft_modification"
                                                    :state="form.chk_shaft_modification.state">
                                                    Shaft Modification</label>
                                            </b-td>
                                        </b-tr>
                                        <b-tr>
                                            <b-th>
                                                <b-form-checkbox 
                                                    id="chk_new_addition_part"
                                                    v-model="form.chk_new_addition_part.value"
                                                    :state="form.chk_new_addition_part.state"></b-form-checkbox>
                                            </b-th>
                                            <b-td>
                                                <label 
                                                    for="chk_new_addition_part"
                                                    :state="form.chk_new_addition_part.state">
                                                    New Addition Part</label>
                                            </b-td>
                                        </b-tr>
                                        <b-tr>
                                            <b-th>
                                                <b-form-checkbox 
                                                    id="chk_mold_die_modification"
                                                    v-model="form.chk_mold_die_modification.value"
                                                    :state="form.chk_mold_die_modification.state"></b-form-checkbox>
                                            </b-th>
                                            <b-td>
                                                <label 
                                                    for="chk_mold_die_modification"
                                                    :state="form.chk_mold_die_modification.state">
                                                    Mold Die Modification</label>
                                            </b-td>
                                        </b-tr>
                                    </b-tbody>
                                </b-table-simple>
                            </b-col>
                            <b-col cols="3">
                                <b-table-simple borderless>
                                    <b-tbody>
                                        <b-tr>
                                            <b-th>
                                                <b-form-checkbox 
                                                    id="chk_mnfg_work_change"
                                                    v-model="form.chk_mnfg_work_change.value"
                                                    :state="form.chk_mnfg_work_change.state"></b-form-checkbox>
                                            </b-th>
                                            <b-td>
                                                <label 
                                                    for="chk_mnfg_work_change"
                                                    :state="form.chk_mnfg_work_change.state">
                                                    MNFG/Work Change</label>
                                            </b-td>
                                        </b-tr>
                                        <b-tr>
                                            <b-th>
                                                <b-form-checkbox 
                                                    id="chk_end_of_life"
                                                    v-model="form.chk_end_of_life.value"
                                                    :state="form.chk_end_of_life.state"></b-form-checkbox>
                                            </b-th>
                                            <b-td>
                                                <label 
                                                    for="chk_end_of_life"
                                                    :state="form.chk_end_of_life.state">
                                                    End of life/Deletion</label>
                                            </b-td>
                                        </b-tr>
                                        <b-tr>
                                            <b-th>
                                                <b-form-checkbox 
                                                    id="chk_new_mold_fabrication"
                                                    v-model="form.chk_new_mold_fabrication.value"
                                                    :state="form.chk_new_mold_fabrication.state"></b-form-checkbox>
                                            </b-th>
                                            <b-td>
                                                <label 
                                                    for="chk_new_mold_fabrication"
                                                    :state="form.chk_new_mold_fabrication.state">
                                                    New Mold Fabrication</label>
                                            </b-td>
                                        </b-tr>
                                    </b-tbody>
                                </b-table-simple>
                            </b-col>
                        </b-row>
                    </b-card>
                </b-col>
            </b-row>
            <b-row class="mt-4">
                <b-col cols="4">
                    <b-form-group
                        label="Prepared By:"
                        label-for="txt_prepared_by"
                        label-size="sm">
                        <b-form-input 
                            id="txt_prepared_by"
                            disabled></b-form-input>
                    </b-form-group>
                </b-col>
                <b-col cols="4">
                    <b-form-group
                        label="Checked By:"
                        label-for="txt_checked_by"
                        label-size="sm">
                        <b-form-input 
                            id="txt_checked_by"
                            disabled></b-form-input>
                    </b-form-group>
                </b-col>
                <b-col cols="4">
                    <b-form-group
                        label="Approved By:"
                        label-for="txt_approved_by"
                        label-size="sm">
                        <b-form-input 
                            id="txt_approved_by"
                            disabled></b-form-input>
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
    </b-container>
</template>

<script>
export default {
    name: 'ProductionEngineering',  
    props: {
        status_name: String,
        get_data: Object
    },
    data(){
        return{
            form:{
                txt_part_supplier: {
                    value: "",
                    state: null,
                    validation: "", 
                },
                txt_application_mark: {
                    value: "",
                    state: null,
                    validation: "", 
                },
                slc_parts_delivery_target: {
                    value: "",
                    state: null,
                    validation: "", 
                },
                txt_die_sample_level: {
                    value: "",
                    state: null,
                    validation: "", 
                },
                txt_die_supplier: {
                    value: "",
                    state: null,
                    validation: "", 
                },
                txt_die_qty: {
                    value: "",
                    state: null,
                    validation: "", 
                },
                slc_die_target: {
                    value: "",
                    state: null,
                    validation: "", 
                },
                slc_die_sample_target_date: {
                    value: "",
                    state: null,
                    validation: "", 
                },
                txt_remarks: {
                    value: "",
                    state: null,
                    validation: "", 
                },
                chk_die_modification: {
                    value: "",
                    state: null,
                    validation: "", 
                },
                chk_new_tooling: {
                    value: "",
                    state: null,
                    validation: "", 
                },
                chk_additional_process: {
                    value: "",
                    state: null,
                    validation: "", 
                },
                chk_material_changed: {
                    value: "",
                    state: null,
                    validation: "", 
                },
                chk_new_die_fabrication: {
                    value: "",
                    state: null,
                    validation: "", 
                },
                chk_cable_modification: {
                    value: "",
                    state: null,
                    validation: "", 
                },
                chk_part_quality_changed: {
                    value: "",
                    state: null,
                    validation: "", 
                },
                chk_hinsei: {
                    value: "",
                    state: null,
                    validation: "", 
                },
                chk_shaft_modification: {
                    value: "",
                    state: null,
                    validation: "", 
                },
                chk_new_addition_part: {
                    value: "",
                    state: null,
                    validation: "", 
                },
                chk_mold_die_modification: {
                    value: "",
                    state: null,
                    validation: "", 
                },
                chk_mnfg_work_change: {
                    value: "",
                    state: null,
                    validation: "", 
                },
                chk_end_of_life: {
                    value: "",
                    state: null,
                    validation: "", 
                },
                chk_new_mold_fabrication: {
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
            document.getElementById("txt_part_supplier").disabled = true;
            document.getElementById("slc_parts_delivery_target").disabled = true;
            document.getElementById("txt_die_supplier").disabled = true;
            document.getElementById("slc_die_target").disabled = true;
            document.getElementById("txt_application_mark").disabled = true;
            document.getElementById("txt_die_sample_level").disabled = true;
            document.getElementById("txt_die_qty").disabled = true;
            document.getElementById("slc_die_sample_target_date").disabled = true;
            document.getElementById("txt_remarks").disabled = true;
            document.getElementById("chk_die_modification").disabled = true;
            document.getElementById("chk_new_tooling").disabled = true;
            document.getElementById("chk_additional_process").disabled = true;
            document.getElementById("chk_material_changed").disabled = true;
            document.getElementById("chk_new_die_fabrication").disabled = true;
            document.getElementById("chk_cable_modification").disabled = true;
            document.getElementById("chk_part_quality_changed").disabled = true;
            document.getElementById("chk_hinsei").disabled = true;
            document.getElementById("chk_shaft_modification").disabled = true;
            document.getElementById("chk_new_addition_part").disabled = true;
            document.getElementById("chk_mold_die_modification").disabled = true;
            document.getElementById("chk_mnfg_work_change").disabled = true;
            document.getElementById("chk_end_of_life").disabled = true;
            document.getElementById("chk_new_mold_fabrication").disabled = true;
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
                txt_part_supplier: {value: "", state: null, validation: "",},
                txt_application_mark: {value: "", state: null, validation: "",},
                slc_parts_delivery_target: {value: "", state: null, validation: "",},
                txt_die_sample_level: {value: "", state: null, validation: "",},
                txt_die_supplier: {value: "", state: null, validation: "",},
                txt_die_qty: {value: "", state: null, validation: "",},
                slc_die_target: {value: "", state: null, validation: "",},
                slc_die_sample_target_date: {value: "", state: null, validation: "",},
                txt_remarks: {value: "", state: null, validation: "",},
                chk_die_modification: {value: "", state: null, validation: "",},
                chk_new_tooling: {value: "", state: null, validation: "",},
                chk_additional_process: {value: "", state: null, validation: "",},
                chk_material_changed: {value: "", state: null, validation: "",},
                chk_new_die_fabrication: {value: "", state: null, validation: "",},
                chk_cable_modification: {value: "", state: null, validation: "",},
                chk_part_quality_changed: {value: "", state: null, validation: "",},
                chk_hinsei: {value: "", state: null, validation: "",},
                chk_shaft_modification: {value: "", state: null, validation: "",},
                chk_new_addition_part: {value: "", state: null, validation: "",},
                chk_mold_die_modification: {value: "", state: null, validation: "",},
                chk_mnfg_work_change: {value: "", state: null, validation: "",},
                chk_end_of_life: {value: "", state: null, validation: "",},
                chk_new_mold_fabrication: {value: "", state: null, validation: "",},
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