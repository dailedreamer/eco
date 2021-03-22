<template>
    <b-container fluid>
        <b-modal id="edit_content_modal_id" size="xl" scrollable :no-close-on-backdrop="true">
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
                    <h5 class="mt-2">Edit Content</h5>
                </b-media>
            </template>
            <b-form id="form_edit_content">
                <b-row class="mr-3 ml-3">
                    <b-col cols="4">
                        <label id="lbl_parent_drawing_number" for="txt_parent_drawing_number">Parent Drawing Number:</label>
                        <b-form-input id="txt_parent_drawing_number" type="text" placeholder="Enter Parent Drawing Number" required></b-form-input>
                        <label id="lbl_parent_current_rev" for="txt_parent_current_rev">Current Revision:</label>
                        <b-form-input id="txt_parent_current_rev" type="text" placeholder="Enter Current Revision"></b-form-input>
                        <label id="lbl_parent_new_rev" for="txt_parent_new_rev">New Revision:</label>
                        <b-form-input id="txt_parent_new_rev" type="text" placeholder="Enter New Revision"></b-form-input>
                        <label id="lbl_part_number" for="txt_part_number">Part Number:</label>
                        <b-form-input id="txt_part_number" type="text" placeholder="Enter Part Number"></b-form-input>
                        <label id="lbl_part_number_current_rev" for="txt_part_number_current_rev">Current Revision:</label>
                        <b-form-input id="txt_part_number_current_rev" type="text" placeholder="Enter Current Revision"></b-form-input>
                        <label id="lbl_part_number_new_rev" for="txt_part_number_new_rev">New Revision:</label>
                        <b-form-input id="txt_part_number_new_rev" type="text" placeholder="Enter New Revision"></b-form-input>
                    </b-col>
                    <b-col cols="4">
                        <label id="lbl_eco_number" for="txt_eco_number">ECO Number:</label>
                        <b-form-input id="txt_eco_number" type="text" placeholder="Enter ECO Number"></b-form-input>
                        <label id="lbl_share" for="txt_share">Share:</label>
                        <b-form-input id="txt_share" type="text" placeholder="Enter Share"></b-form-input>
                        <label id="lbl_part_supplier" for="txt_part_supplier">Part Supplier:</label>
                        <b-form-input id="txt_part_supplier" type="text" placeholder="Enter Part Supplier"></b-form-input>
                        <label id="lbl_die_supplier" for="txt_die_supplier">Die Supplier:</label>
                        <b-form-input id="txt_die_supplier" type="text" placeholder="Enter Die Supplier"></b-form-input>
                        <label id="lbl_die_target" for="txt_die_target">Die Target:</label>
                        <b-form-datepicker id="txt_die_target" placeholder="Choose a date" class="drp_datepicker"></b-form-datepicker>
                        <label id="lbl_parts_delivery_target" for="txt_parts_delivery_target">Parts Delivery Target:</label>
                        <b-form-datepicker id="txt_parts_delivery_target" placeholder="Choose a date" class="drp_datepicker"></b-form-datepicker>
                    </b-col>
                    <b-col cols="4">    
                        <label id="lbl_ecas_remarks" for="txt_ecas_remarks">ECAS Remarks:</label>
                        <b-form-input id="txt_ecas_remarks" type="text" placeholder="Enter ECAS Remarks"></b-form-input>
                        <label id="lbl_revision_details" for="txt_revision_details">Revision Details:</label>
                        <b-form-input id="txt_revision_details" type="text" placeholder="Enter Revision Details"></b-form-input>
                        <label id="lbl_class" for="txt_class">Class:</label>
                        <b-form-input id="txt_class" type="text" placeholder="Enter Class"></b-form-input>
                        <label id="lbl_application_mark" for="txt_application_mark">Application Mark:</label>
                        <b-form-input id="txt_application_mark" type="text" placeholder="Enter Application Mark"></b-form-input>
                        <label id="lbl_die_sample_level" for="txt_die_sample_level">Die Sample Level:</label>
                        <b-form-input id="txt_die_sample_level" type="text" placeholder="Enter Die Sample Level"></b-form-input>
                        <label id="lbl_die_sample_qty" for="txt_die_sample_qty">Die Sample Qty:</label>
                        <b-form-input id="txt_die_sample_qty" type="text" placeholder="Enter Die Sample Qty"></b-form-input>
                        <label id="lbl_die_sample_target_date" for="txt_die_sample_target_date">Die Sample Target Date:</label>
                        <b-form-datepicker id="txt_die_sample_target_date" placeholder="Choose a date" class="drp_datepicker"></b-form-datepicker>
                    </b-col>
                </b-row>
                <hr>
                <b-row class="mr-3 ml-3">
                    <b-col cols="4">
                        <b-row class="pb-3">
                            <b-col cols="7">
                                <label id="lbl_under_development" for="">Under Development?:</label>
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
                                <label id="lbl_with_unit_rev" for="">With Unit Rev. Up?:</label>
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
                                <label id="lbl_with_simultaneous" for="">With Simultaneous?:</label>
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
                            <label class="mr-4" id="lbl_vps_data" for="">Is VPS Data Necessary?:</label>
                            <toggle-button  
                                        :value="true" 
                                        :labels="{checked: 'On', unchecked: 'Off'}" 
                                        :color="{checked: '#118f22', unchecked: '#FF0000'}"/>
                        </b-row>
                        <b-row class="ml-4 mr-2">
                                <label id="lbl_target_sending_date" for="txt_target_sending_date">Target Sending Date:</label>
                                <b-form-datepicker id="txt_target_sending_date" placeholder="Choose a date" class="drp_datepicker"></b-form-datepicker>
                        </b-row>
                    </b-col>
                    <b-col cols="4">
                        <b-row class="pb-2">
                            <label class="mr-4" id="lbl_with_action_item" for="">With Action Item?:</label>
                            <toggle-button 
                                        :value="true" 
                                        :labels="{checked: 'On', unchecked: 'Off'}" 
                                        :color="{checked: '#118f22', unchecked: '#FF0000'}"/>
                        </b-row>
                        <b-row class="ml-4 mr-2">
                            <label id="lbl_action_item" for="txt_action_item">Action Item Details:</label>
                            <b-form-input id="txt_action_item" type="text" placeholder="Enter Action Item Details"></b-form-input>
                            <label id="lbl_ec_minutes" for="txt_ec_minutes">EC Minutes Item No.:</label>
                            <b-form-input id="txt_ec_minutes" type="text" placeholder="Enter EC Minutes Item No"></b-form-input>
                            <label id="lbl_remarks" for="txt_remarks">Remarks:</label>
                            <b-form-input id="txt_remarks" type="text" placeholder="Enter Remarks"></b-form-input>
                        </b-row>
                    </b-col>
                </b-row>
            </b-form>
            <template #modal-footer="{ Update, hide }">
                <b-button size="sm" variant="danger" @click="Update">
                    <font-awesome-icon icon="save" /> Update
                </b-button>
                <b-button size="sm" variant="primary" @click="hide('close')">
                    <font-awesome-icon icon="times-circle" /> Close 
                </b-button>
            </template> 
        </b-modal>
    </b-container>
</template>

<script>
import ToggleButton from "vue-js-toggle-button";
export default {
    name: 'EditContentModal',
    component:{
        ToggleButton, 
    }
}
</script>

<style scoped>
    hr{
        display: block;
        margin-top: 1.5em;
        margin-bottom: 1.5em;
        margin-left: auto;
        margin-right: auto;
        border-width: 7px;
        color: black;
        border-bottom: black;
    }

    .drp_datepicker
    {
        position:unset;
        top: unset;
        max-width: unset;
        overflow: unset;
        flex-wrap: unset;
        box-shadow: unset;
    }
</style>