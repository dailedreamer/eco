<template>
    <b-container fluid>
        <b-modal 
            id="edit_module_modal_id"
            centered
            size="lg"
            :no-close-on-backdrop="true"
            hide-footer>
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
                    <h5 class="mt-2">Edit Modules</h5>
                </b-media>
            </template>
                <b-row class="mr-3 ml-3">
                    <b-col cols="12">
                        <b-form>
                            <b-row class="mt-4">
                                <b-col cols="6">
                                    <b-table-simple borderless>
                                        <b-tbody>
                                            <b-tr>
                                                <b-th>
                                                    <b-form-checkbox 
                                                        id="chk_mod_dashboard_id"> 
                                                    </b-form-checkbox>
                                                </b-th>
                                                <b-td>
                                                    <label 
                                                        for="chk_mod_dashboard_id">
                                                        Dashboard
                                                    </label>
                                                </b-td>
                                            </b-tr>
                                            <b-tr>
                                                <b-th>
                                                    <b-form-checkbox 
                                                        id="chk_mod_parts_management_id"> 
                                                    </b-form-checkbox>
                                                </b-th>
                                                <b-td>
                                                    <label 
                                                        for="chk_mod_parts_management_id">
                                                        Parts Management
                                                    </label>
                                                </b-td>
                                            </b-tr>
                                            <b-tr>
                                                <b-th> 
                                                    <b-form-checkbox 
                                                        id="chk_mod_user_management_id"> 
                                                    </b-form-checkbox>
                                                </b-th>
                                                <b-td>
                                                    <label 
                                                        for="chk_mod_user_management_id">
                                                        User Management 
                                                    </label>
                                                </b-td>
                                            </b-tr>
                                            <b-tr>
                                                <b-th> 
                                                    <b-form-checkbox 
                                                        id="chk_mod_email_management_id"> 
                                                    </b-form-checkbox>
                                                </b-th>
                                                <b-td>
                                                    <label 
                                                        for="chk_mod_email_management_id">
                                                        Email Management
                                                    </label> 
                                                </b-td>
                                            </b-tr>
                                            <b-tr>
                                                <b-th> 
                                                    <b-form-checkbox 
                                                        id="chk_mod_parts_registration_unit_id"> 
                                                    </b-form-checkbox>
                                                </b-th>
                                                <b-td>
                                                    <label for="chk_mod_parts_registration_unit_id">
                                                        <b>PARTS:</b> Registration Unit PE 
                                                    </label> 
                                                </b-td>
                                            </b-tr>
                                            <b-tr>
                                                <b-th> 
                                                    <b-form-checkbox 
                                                        id="chk_mod_parts_registration_parts_id"> 
                                                    </b-form-checkbox>
                                                </b-th>
                                                <b-td> 
                                                    <label for="chk_mod_parts_registration_parts_id">
                                                        <b>PARTS:</b> Registration Parts PE 
                                                    </label>
                                                </b-td>
                                            </b-tr>
                                            <b-tr>
                                                <b-th> 
                                                    <b-form-checkbox 
                                                        id="chk_mod_registered_eco_id"> 
                                                    </b-form-checkbox>
                                                </b-th>
                                                <b-td> 
                                                    <label for="chk_mod_registered_eco_id">
                                                        <b>PARTS:</b> Registered ECO Parts 
                                                    </label>
                                                </b-td>
                                            </b-tr>
                                            <b-tr>
                                                <b-th> 
                                                    <b-form-checkbox 
                                                        id="chk_mod_parts_monitoring_id"> 
                                                    </b-form-checkbox>
                                                </b-th>
                                                <b-td>
                                                    <label for="chk_mod_parts_monitoring_id">
                                                        <b>PARTS:</b> Parts Monitoring 
                                                    </label>
                                                </b-td>
                                            </b-tr>
                                            <b-tr>
                                                <b-th> 
                                                    <b-form-checkbox 
                                                        id="chk_mod_ecas_list_id"> 
                                                    </b-form-checkbox>
                                                </b-th>
                                                <b-td>
                                                    <label for="chk_mod_ecas_list_id">
                                                        ECAS List
                                                    </label> 
                                                </b-td>
                                            </b-tr>
                                        </b-tbody>
                                    </b-table-simple>
                                </b-col>
                                <b-col cols="6">
                                    <b-table-simple borderless>
                                        <b-tbody>
                                            <b-tr>
                                                <b-th> 
                                                    <b-form-checkbox 
                                                        id="chk_mod_ecas_approver_id"> 
                                                    </b-form-checkbox>
                                                </b-th>
                                                <b-td>
                                                    <label for="chk_mod_ecas_approver_id">
                                                        ECAS Approver
                                                    </label> 
                                                </b-td>
                                            </b-tr>
                                                <b-tr>
                                                <b-th> 
                                                    <b-form-checkbox 
                                                        id="chk_mod_ecas_checker_id"> 
                                                    </b-form-checkbox>
                                                </b-th>
                                                <b-td>
                                                    <label for="chk_mod_ecas_checker_id">
                                                        ECAS Checker
                                                    </label> 
                                                </b-td>
                                            </b-tr>
                                            <b-tr>
                                                <b-th> 
                                                    <b-form-checkbox 
                                                        id="chk_mod_process_registration_unit_id"> 
                                                    </b-form-checkbox>
                                                </b-th>
                                                <b-td>
                                                    <label for="chk_mod_process_registration_unit_id">
                                                        <b>PROCESS:</b> Registration Unit PE 
                                                    </label>
                                                </b-td>
                                            </b-tr>
                                            <b-tr>
                                                <b-th> 
                                                    <b-form-checkbox 
                                                        id="chk_mod_process_monitoring_id"> 
                                                    </b-form-checkbox>
                                                </b-th>
                                                <b-td>
                                                    <label for="chk_mod_process_monitoring_id">
                                                        <b>PROCESS:</b> Process Monitoring
                                                    </label>   
                                                </b-td>
                                            </b-tr>
                                            <b-tr>
                                                <b-th> 
                                                    <b-form-checkbox 
                                                        id="chk_mod_simultaneous_id"> 
                                                    </b-form-checkbox>
                                                </b-th>
                                                <b-td> 
                                                    <label for="chk_mod_simultaneous_id">
                                                        Simultaneous
                                                    </label> 
                                                </b-td>
                                            </b-tr>
                                            <b-tr>
                                                <b-th> <b-form-checkbox 
                                                    id="chk_mod_unit_rev_id"> 
                                                </b-form-checkbox>
                                            </b-th>
                                                <b-td>
                                                    <label for="chk_mod_unit_rev_id">
                                                        Unit Rev 
                                                    </label>
                                                </b-td>
                                            </b-tr>
                                            <b-tr>
                                                <b-th> 
                                                    <b-form-checkbox 
                                                        id="chk_mod_vps_application_id"> 
                                                    </b-form-checkbox>
                                                </b-th>
                                                <b-td> 
                                                    <label for="chk_mod_vps_application_id">
                                                        VPS Application  
                                                    </label>
                                                </b-td>
                                            </b-tr>
                                            <b-tr>
                                                <b-th> 
                                                    <b-form-checkbox
                                                        id="chk_mod_ec_action_id"> 
                                                    </b-form-checkbox>
                                                </b-th>
                                                <b-td> 
                                                    <label for="chk_mod_ec_action_id">
                                                        EC Action 
                                                    </label>
                                                </b-td>
                                            </b-tr>
                                            <b-tr>
                                                <b-th> 
                                                    <b-form-checkbox
                                                        id="chk_mod_reports_id"> 
                                                    </b-form-checkbox>
                                                </b-th>
                                                <b-td> 
                                                    <label for="chk_mod_reports_id">
                                                        Reports 
                                                    </label>
                                                </b-td>
                                            </b-tr>
                                        </b-tbody>
                                    </b-table-simple>
                                </b-col>
                            </b-row> 
                            <hr> 
                            <b-row>
                                <b-col cols="12">
                                    <b-button 
                                        class="float-right mr-2"
                                        size="md" 
                                        variant="outline-secondary"
                                        title="Click to clear inputs">
                                        <font-awesome-icon icon="times-circle" /> Clear
                                    </b-button>
                                    <b-button 
                                        class="float-right mr-2"
                                        id="btn_update" 
                                        size="md" 
                                        variant="danger" 
                                        type="submit"
                                        title="Click to update users modules">
                                        <font-awesome-icon icon="save" /> Update
                                    </b-button> 
                                </b-col>
                            </b-row>
                        </b-form>
                    </b-col> 
                </b-row>
                <!-- <template #modal-footer="{ Update, hide }">
                    <b-button size="sm" variant="danger" @click="Update">
                        <font-awesome-icon icon="save" /> Update
                    </b-button>
                    <b-button size="sm" variant="outline-secondary" @click="hide('close')">
                        <font-awesome-icon icon="times-circle" /> Close 
                    </b-button>
                </template>  -->
        </b-modal>
    </b-container>
</template>

<script>
export default {
    name: 'UserEditModuleModal',
}
</script>

<style scoped>
    
</style>