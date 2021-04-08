<template>
    <b-container fluid>
        <b-row>
            <b-col cols="3"> 
                <b-form-group
                    label="Part Number:"
                    label-for="txt_part_number"
                    label-size="sm">
                    <b-form-input 
                        id="txt_part_number"
                        disabled></b-form-input>
                </b-form-group>
                <b-form-group
                    label="Part Suppliers:"
                    label-for="txt_part_supplier"
                    label-size="sm">
                    <b-form-input 
                        id="txt_part_supplier"
                        placeholder="Enter Parts Suppliers"></b-form-input>
                </b-form-group>
                <b-form-group
                    label="Application Mark:"
                    label-for="txt_application_mark"
                    label-size="sm">
                    <b-form-input 
                        id="txt_application_mark"
                        placeholder="Enter Application Mark"></b-form-input>
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
                                disabled></b-form-input>
                        </b-form-group>
                    </b-col>
                </b-row>
                <b-form-group
                    label="Parts Delivery Target:"
                    label-for="slc_parts_delivery_target"
                    label-size="sm">
                     <b-form-datepicker 
                        id="slc_parts_delivery_target" 
                        placeholder="Choose a date" 
                        class="ecas_datepicker"
                        hide-header
                        reset-button
                        close-button
                        :date-format-options="{ year: 'numeric', month: 'numeric', day: 'numeric' }"></b-form-datepicker>
                </b-form-group>
                 <b-form-group
                    label="Die Sample Level:"
                    label-for="txt_die_sample_level"
                    label-size="sm">
                    <b-form-input 
                        id="txt_die_sample_level"
                        placeholder="Enter Die Sample Level"></b-form-input>
                </b-form-group>
            </b-col>
            <b-col cols="3">
                <b-form-group
                    label="ECAS Number:"
                    label-for="txt_ecas_number"
                    label-size="sm">
                    <b-form-input 
                        id="txt_ecas_number"
                        disabled></b-form-input>
                </b-form-group>
                <b-form-group
                    label="Die Supplier:"
                    label-for="txt_die_supplier"
                    label-size="sm">
                    <b-form-input 
                        id="txt_die_supplier"
                        placeholder="Enter Die Supplier"></b-form-input>
                </b-form-group>
                <b-form-group
                    label="Die Quantity:"
                    label-for="txt_die_qty"
                    label-size="sm">
                    <b-form-input 
                        id="txt_die_qty"
                        placeholder="Enter Die Qunatity"></b-form-input>
                </b-form-group>
            </b-col>
            <b-col cols="3">
                <b-form-group
                    label="ECO Number:"
                    label-for="txt_eco_number"
                    label-size="sm">
                    <b-form-input 
                        id="txt_eco_number"
                        disabled></b-form-input>
                </b-form-group>
                <b-form-group
                    label="Die Target:"
                    label-for="slc_die_target"
                    label-size="sm">
                    <b-form-datepicker 
                        id="slc_die_target" 
                        placeholder="Choose a date" 
                        class="ecas_datepicker"
                        hide-header
                        reset-button
                        close-button
                        :date-format-options="{ year: 'numeric', month: 'numeric', day: 'numeric' }"></b-form-datepicker>
                </b-form-group>
                <b-form-group
                    label="Die Sample Target Date:"
                    label-for="slc_die_sample_target_date"
                    label-size="sm">
                    <b-form-datepicker 
                        id="slc_die_sample_target_date" 
                        placeholder="Choose a date" 
                        class="ecas_datepicker"
                        hide-header
                        reset-button
                        close-button
                        :date-format-options="{ year: 'numeric', month: 'numeric', day: 'numeric' }"></b-form-datepicker>
                </b-form-group>
            </b-col>
        </b-row>
        <b-row>
            <b-col cols="12">
            <b-form-group
                label="Remarks:"
                label-for="txt_remarks"
                label-size="sm">
                <b-form-textarea 
                    id="txt_remarks"
                    name="txt_remarks"
                    placeholder="Enter Remarks"
                    required></b-form-textarea>
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
                                            <b-form-checkbox id="chk_die_modification"></b-form-checkbox>
                                        </b-th>
                                        <b-td>
                                            <label for="chk_die_modification">Die Modification</label>
                                        </b-td>
                                    </b-tr>
                                    <b-tr>
                                        <b-th>
                                            <b-form-checkbox id="chk_new_tooling"></b-form-checkbox>
                                        </b-th>
                                        <b-td>
                                            <label for="chk_new_tooling">New Tooling (MYLAR)</label>
                                        </b-td>
                                    </b-tr>
                                    <b-tr>
                                        <b-th>
                                            <b-form-checkbox id="chk_additional_process"></b-form-checkbox>
                                        </b-th>
                                        <b-td>
                                            <label for="chk_additional_process">Additional Process</label>
                                        </b-td>
                                    </b-tr>
                                    <b-tr>
                                        <b-th>
                                            <b-form-checkbox id="chk_material_changed"></b-form-checkbox>
                                        </b-th>
                                        <b-td>
                                            <label for="chk_material_changed">Material Changed</label>
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
                                            <b-form-checkbox id="chk_new_die_fabrication"></b-form-checkbox>
                                        </b-th>
                                        <b-td>
                                            <label for="chk_new_die_fabrication">New Die Fabrication</label>
                                        </b-td>
                                    </b-tr>
                                    <b-tr>
                                        <b-th>
                                            <b-form-checkbox id="chk_cable_modification"></b-form-checkbox>
                                        </b-th>
                                        <b-td>
                                            <label for="chk_cable_modification">Cable Modification</label>
                                        </b-td>
                                    </b-tr>
                                    <b-tr>
                                        <b-th>
                                            <b-form-checkbox id="chk_part_quality_changed"></b-form-checkbox>
                                        </b-th>
                                        <b-td>
                                            <label for="chk_part_quality_changed">Part Quality Changed</label>
                                        </b-td>
                                    </b-tr>
                                    <b-tr>
                                        <b-th>
                                            <b-form-checkbox id="chk_hinsei"></b-form-checkbox>
                                        </b-th>
                                        <b-td>
                                            <label for="chk_hinsei">HINSEI<br>
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
                                            <b-form-checkbox id="chk_shaft_modification"></b-form-checkbox>
                                        </b-th>
                                        <b-td>
                                            <label for="chk_shaft_modification">Shaft Modification</label>
                                        </b-td>
                                    </b-tr>
                                    <b-tr>
                                        <b-th>
                                            <b-form-checkbox id="chk_new_addition_part"></b-form-checkbox>
                                        </b-th>
                                        <b-td>
                                            <label for="chk_new_addition_part">New Addition Part</label>
                                        </b-td>
                                    </b-tr>
                                    <b-tr>
                                        <b-th>
                                            <b-form-checkbox id="chk_mold_die_modification"></b-form-checkbox>
                                        </b-th>
                                        <b-td>
                                            <label for="chk_mold_die_modification">Mold Die Modification</label>
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
                                            <b-form-checkbox id="chk_mnfg_work_change"></b-form-checkbox>
                                        </b-th>
                                        <b-td>
                                            <label for="chk_mnfg_work_change">MNFG/Work Change</label>
                                        </b-td>
                                    </b-tr>
                                    <b-tr>
                                        <b-th>
                                            <b-form-checkbox id="chk_end_of_life"></b-form-checkbox>
                                        </b-th>
                                        <b-td>
                                            <label for="chk_end_of_life">End of life/Deletion</label>
                                        </b-td>
                                    </b-tr>
                                    <b-tr>
                                        <b-th>
                                            <b-form-checkbox id="chk_new_mold_fabrication"></b-form-checkbox>
                                        </b-th>
                                        <b-td>
                                            <label for="chk_new_mold_fabrication">New Mold Fabrication</label>
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
            <b-col cols="8">
                <b-button
                    class="mr-2"
                    size="md" 
                    variant="danger"
                    title="Click to download excel file">
                    <font-awesome-icon icon="download" /> Download Excel
                </b-button>
                <b-button
                    class="mr-2"
                    size="md" 
                    variant="danger"
                    title="Click to add remarks">
                    <font-awesome-icon icon="edit" /> Remarks
                </b-button>
                <b-button 
                    id="btn_update" 
                    size="md" 
                    variant="danger" 
                    type="submit"
                    title="Click to save changes">
                    <font-awesome-icon icon="save" /> Save Changes
                </b-button> 
            </b-col>
            <b-col cols="4">
                <b-button 
                    class="float-right"
                    size="md" 
                    variant="outline-secondary"
                    title="Click to clear inputs">
                    <font-awesome-icon icon="times-circle" /> Clear
                </b-button>
            </b-col>
        </b-row>

    </b-container>
</template>

<script>
export default {
    name: 'ProductionEngineering',
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