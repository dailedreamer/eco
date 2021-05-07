<template>
    <b-container fluid>
        <b-modal 
            id="edit_content_modal_id" 
            size="xl" 
            scrollable 
            hide-footer
            :no-close-on-backdrop="true"
            centered>
           <template #modal-title="" >
                <b-media>
                    <template #aside>
                        <b-img 
                            :src="require('../../../assets/icon_images/edit_content.svg')" 
                            width="44" 
                            height="37" 
                            alt="placeholder">
                        </b-img>
                    </template>
                    <h5 class="mt-2">Edit Content</h5>
                </b-media>
            </template>
            <b-form id="form_edit_content">
                <b-row class="mr-3 ml-3">
                    <b-col cols="4">
                        <b-form-group 
                            label-size="sm" 
                            label-for="txt_parent_drawing_number" 
                            label="Parent Drawing Number:"
                            class="pb-0">
                            <b-form-input
                                id="txt_parent_drawing_number"
                                name="txt_parent_drawing_number"
                                type="text"
                                required
                                placeholder="Enter Parent Drawing Number"
                                autocomplete="off"/>
                        </b-form-group>
                        <b-form-group 
                            label-size="sm" 
                            label-for="txt_parent_current_rev" 
                            label="Current Revision:">
                            <b-form-input
                                id="txt_parent_current_rev"
                                name="txt_parent_current_rev"
                                type="text"
                                required
                                placeholder="Enter Current Revision"
                                autocomplete="off"/>
                        </b-form-group>
                        <b-form-group 
                            label-size="sm" 
                            label-for="txt_parent_new_rev" 
                            label="New Revision:">
                            <b-form-input
                                id="txt_parent_new_rev"
                                name="txt_parent_new_rev"
                                type="text"
                                required
                                placeholder="Enter New Revision"
                                autocomplete="off"/>
                        </b-form-group>
                        <b-form-group 
                            label-size="sm" 
                            label-for="txt_part_number" 
                            label="Part Number:">
                            <b-form-input
                                id="txt_part_number"
                                name="txt_part_number"
                                type="text"
                                required
                                placeholder="Enter Part Number"
                                autocomplete="off"/>
                        </b-form-group>
                        <b-form-group 
                            label-size="sm" 
                            label-for="txt_part_number_current_rev" 
                            label="Current Revision:">
                            <b-form-input
                                id="txt_part_number_current_rev"
                                name="txt_part_number_current_rev"
                                type="text"
                                required
                                placeholder="Enter Current Revision"
                                autocomplete="off"/>
                        </b-form-group>
                        <b-form-group 
                            label-size="sm" 
                            label-for="txt_part_number_new_rev" 
                            label="New Revision:">
                            <b-form-input
                                id="txt_part_number_new_rev"
                                name="txt_part_number_new_rev"
                                type="text"
                                required
                                placeholder="Enter New Revision"
                                autocomplete="off"/>
                        </b-form-group>
                    </b-col>
                    <b-col cols="4">
                        <b-form-group 
                            label-size="sm" 
                            label-for="txt_eco_number" 
                            label="ECO Number:">
                            <b-form-input
                                id="txt_eco_number"
                                name="txt_eco_number"
                                type="text"
                                required
                                placeholder="Enter ECO Number"
                                autocomplete="off"/>
                        </b-form-group>
                        <b-form-group 
                            label-size="sm" 
                            label-for="txt_share" 
                            label="Share:">
                            <b-form-input
                                id="txt_share"
                                name="txt_share"
                                type="text"
                                required
                                placeholder="Enter Share"
                                autocomplete="off"/>
                        </b-form-group>
                        <b-form-group 
                            label-size="sm" 
                            label-for="txt_part_supplier" 
                            label="Part Supplier:">
                            <b-form-input
                                id="txt_part_supplier"
                                name="txt_part_supplier"
                                type="text"
                                required
                                placeholder="Enter Part Supplier"
                                autocomplete="off"/>
                        </b-form-group>
                        <b-form-group 
                            label-size="sm" 
                            label-for="txt_die_supplier" 
                            label="Die Supplier:">
                            <b-form-input
                                id="txt_die_supplier"
                                name="txt_die_supplier"
                                type="text"
                                required
                                placeholder="Enter Die Supplier"
                                autocomplete="off"/>
                        </b-form-group>
                        <b-form-group 
                            label-size="sm" 
                            label-for="slc_die_target"
                            label="Die Target:">
                            <b-form-datepicker 
                                id="slc_die_target" 
                                placeholder="Choose a date" 
                                class="drp_datepicker"
                                hide-header
                                :date-format-options="{ year: 'numeric', month: 'numeric', day: 'numeric' }"></b-form-datepicker>
                        </b-form-group>
                        <b-form-group 
                            label-size="sm" 
                            label-for="slc_parts_delivery_target"
                            label="Parts Delivery Target:">
                            <b-form-datepicker 
                                id="slc_parts_delivery_target" 
                                placeholder="Choose a date" 
                                class="drp_datepicker"
                                hide-header
                                :date-format-options="{ year: 'numeric', month: 'numeric', day: 'numeric' }"></b-form-datepicker>
                        </b-form-group>
                    </b-col>
                    <b-col cols="4">  
                        <b-form-group 
                            label-size="sm" 
                            label-for="txt_ecas_remarks" 
                            label="ECAS Remarks:">
                            <b-form-input
                                id="txt_ecas_remarks"
                                name="txt_ecas_remarks"
                                type="text"
                                required
                                placeholder="Enter ECAS Remarks"
                                autocomplete="off"/>
                        </b-form-group>  
                        <b-form-group 
                            label-size="sm" 
                            label-for="txt_revision_details" 
                            label="Revision Details:">
                            <b-form-input
                                id="txt_revision_details"
                                name="txt_revision_details"
                                type="text"
                                required
                                placeholder="Enter Revision Details"
                                autocomplete="off"/>
                        </b-form-group> 
                        <b-form-group 
                            label-size="sm" 
                            label-for="txt_class" 
                            label="Class:">
                            <b-form-input
                                id="txt_class"
                                name="txt_class"
                                type="text"
                                required
                                placeholder="Enter Class"
                                autocomplete="off"/>
                        </b-form-group>
                        <b-form-group 
                            label-size="sm" 
                            label-for="txt_application_mark" 
                            label="Application Mark:">
                            <b-form-input
                                id="txt_application_mark"
                                name="txt_application_mark"
                                type="text"
                                required
                                placeholder="Enter Application Mark"
                                autocomplete="off"/>
                        </b-form-group>
                        <b-form-group 
                            label-size="sm" 
                            label-for="txt_die_sample_level" 
                            label="Die Sample Level:">
                            <b-form-input
                                id="txt_die_sample_level"
                                name="txt_die_sample_level"
                                type="text"
                                required
                                placeholder="Enter Die Sample Level"
                                autocomplete="off"/>
                        </b-form-group>
                        <b-form-group 
                            label-size="sm" 
                            label-for="txt_die_sample_qty" 
                            label="Die Sample Qty:">
                            <b-form-input
                                id="txt_die_sample_qty"
                                name="txt_die_sample_qty"
                                type="text"
                                required
                                placeholder="Enter Die Sample Qty"
                                autocomplete="off"
                                @keypress="isNumber($event)"/>
                        </b-form-group>
                        <b-form-group 
                            label-size="sm" 
                            label-for="slc_die_sample_target_date"
                            label="Die Sample Target Date:">
                            <b-form-datepicker 
                                id="slc_die_sample_target_date" 
                                placeholder="Choose a date" 
                                class="drp_datepicker"
                                hide-header
                                :date-format-options="{ year: 'numeric', month: 'numeric', day: 'numeric' }"></b-form-datepicker>
                        </b-form-group>
                    </b-col>
                </b-row>
                <hr>
                <b-row class="mr-3 ml-3 mt-3">
                    <b-col cols="4">
                        <b-row class="pb-3">
                            <b-col cols="7">
                                <label 
                                    id="lbl_under_development" 
                                    for="">Under Development?:
                                </label>
                            </b-col>
                            <b-col cols="5">
                                <toggle-button 
                                    :value="true"
                                    :labels="{checked: 'On', unchecked: 'Off'}" 
                                    :color="{checked: '#118f22', unchecked: '#FF0000'}"/>
                            </b-col>
                        </b-row>
                        <b-row class="pb-3">
                            <b-col cols="7">
                                <label 
                                    id="lbl_with_unit_rev" 
                                    for="">
                                    With Unit Rev. Up?:
                                </label>
                            </b-col>
                            <b-col cols="5">
                                <toggle-button  
                                    :value="true" 
                                    :labels="{checked: 'On', unchecked: 'Off'}" 
                                    :color="{checked: '#118f22', unchecked: '#FF0000'}"/>
                            </b-col>
                        </b-row>
                        <b-row>
                            <b-col cols="7">
                                <label 
                                    id="lbl_with_simultaneous" 
                                    for="">
                                    With Simultaneous?:
                                </label>
                            </b-col>
                            <b-col cols="5">
                                <toggle-button  
                                    :value="true" 
                                    :labels="{checked: 'On', unchecked: 'Off'}" 
                                    :color="{checked: '#118f22', unchecked: '#FF0000'}"/>
                            </b-col>
                        </b-row>
                    </b-col>
                    <b-col cols="4">
                        <b-row class="pb-2">
                            <label 
                                class="mr-4" 
                                id="lbl_vps_data" for="">
                                Is VPS Data Necessary?:
                            </label>
                            <toggle-button  
                                :value="true" 
                                :labels="{checked: 'On', unchecked: 'Off'}" 
                                :color="{checked: '#118f22', unchecked: '#FF0000'}"/>
                        </b-row>
                        <b-row class="ml-4 mr-2">
                            <b-col>
                                <b-form-group 
                                    label-size="sm" 
                                    label-for="slc_target_sending_date"
                                    label="Target Sending Date:">
                                    <b-form-datepicker 
                                        id="slc_target_sending_date" 
                                        placeholder="Choose a date" 
                                        class="drp_datepicker"
                                        hide-header
                                        :date-format-options="{ year: 'numeric', month: 'numeric', day: 'numeric' }"></b-form-datepicker>
                                </b-form-group>
                            </b-col>
                        </b-row>
                    </b-col>
                    <b-col cols="4">
                        <b-row class="pb-2">
                            <label 
                                class="mr-4" 
                                id="lbl_with_action_item" 
                                for="">
                                With Action Item?:
                            </label>
                            <toggle-button 
                                :value="true" 
                                :labels="{checked: 'On', unchecked: 'Off'}" 
                                :color="{checked: '#118f22', unchecked: '#FF0000'}"/>
                        </b-row>
                        <b-row class="ml-4 mr-2">
                            <b-col>
                                <b-form-group 
                                    label-size="sm" 
                                    label-for="txt_action_item" 
                                    label="Action Item Details:">
                                    <b-form-input
                                        id="txt_action_item"
                                        name="txt_action_item"
                                        type="text"
                                        required
                                        placeholder="Enter Action Item Details"
                                        autocomplete="off"/>
                                </b-form-group>
                                <b-form-group 
                                    label-size="sm" 
                                    label-for="txt_ec_minutes" 
                                    label="Action EC Minutes Item No:">
                                    <b-form-input
                                        id="txt_ec_minutes"
                                        name="txt_ec_minutes"
                                        type="text"
                                        required
                                        placeholder="Enter EC Minutes Item No"
                                        autocomplete="off"/>
                                </b-form-group>
                                <b-form-group 
                                    label-size="sm" 
                                    label-for="txt_remarks" 
                                    label="Action Remarks">
                                    <b-form-input
                                        id="txt_remarks"
                                        name="txt_remarks"
                                        type="text"
                                        required
                                        placeholder="Enter Remarks"
                                        autocomplete="off"/>
                                </b-form-group>
                            </b-col>
                        </b-row>
                    </b-col>
                </b-row>
                <hr>
                <b-row class="mt-3 mb-3">
                    <b-col cols="12">
                            <b-button 
                            class="float-right mr-2"
                            size="sm" 
                            variant="outline-secondary"
                            @click="clearForm();"
                            title="Click to Clear Inputs">
                            <font-awesome-icon 
                                icon="times-circle" /> Clear
                        </b-button>
                        <b-button 
                            class="float-right mr-2"
                            id="btn_update" 
                            size="sm" 
                            variant="danger" 
                            type="submit"
                            title="Click to Update Content">
                            <font-awesome-icon 
                                icon="save" /> Update
                        </b-button> 
                    </b-col>
                </b-row>
            </b-form>
        </b-modal>
    </b-container>
</template>

<script>
import ToggleButton from "vue-js-toggle-button";
export default {
    name: 'EditContentModal',
    component:{
        ToggleButton, 
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
    }
}
</script>

<style scoped>
    .drp_datepicker{
        position:unset;
        top: unset;
        max-width: unset;
        overflow: unset;
        flex-wrap: unset;
        box-shadow: unset;
    }
</style>