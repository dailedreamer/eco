<template>
    <b-container fluid>
        <b-modal 
            id="modal_unit_rev_update"
            size="lg"
            hide-footer
            :no-close-on-backdrop="true" 
            centered>
            <template #modal-title="">
                <b-media>
                    <template #aside>
                        <b-img 
                            :src="require('../../assets/icon_images/edit_content.svg')" 
                            width="44" 
                            height="37" 
                            alt="placeholder">
                        </b-img>
                    </template>
                    <h5 class="mt-2">Update Unit Revision Up</h5>
                </b-media>
            </template>
            <b-row class="mr-2 ml-2">
                <b-col cols="6">
                    <b-form-group
                        label="ECO NO.:"
                        label-for="txt_eco_number"
                        label-cols-sm="6"
                        label-align-sm="left">
                        <b-form-input 
                            id="txt_eco_number"
                            v-model="this.get_data.eco_number"
                            disabled ></b-form-input>
                    </b-form-group>
                    <b-form-group
                        label="Unit Number:"
                        label-for="txt_unit_number"
                        label-cols-sm="6"
                        label-align-sm="left">
                        <b-form-input 
                            id="txt_unit_number"
                            disabled></b-form-input>
                    </b-form-group>
                    <b-form-group
                        label="Unit Name:"
                        label-for="txt_unit_name"
                        label-cols-sm="6"
                        label-align-sm="left">
                        <b-form-input 
                            id="txt_unit_name"
                            disabled></b-form-input>
                    </b-form-group>
                </b-col>
                <b-col cols="6">
                    <b-form-group
                        label="Revision Up:"
                        label-for="txt_revision_up"
                        label-cols-sm="6"
                        label-align-sm="left">
                        <b-form-input 
                            id="txt_revision_up" 
                            disabled></b-form-input>
                    </b-form-group>
                    <b-form-group
                        label="Revision Details:"
                        label-for="txt_revision_details"
                        label-cols-sm="6"
                        label-align-sm="left">
                        <b-form-input 
                            id="txt_revision_details" 
                            disabled></b-form-input>
                    </b-form-group>
                    <b-form-group
                        label="Target Application:"
                        label-for="txt_target_application"
                        label-cols-sm="6"
                        label-align-sm="left">
                        <b-form-input 
                            id="txt_target_application" 
                            v-model="this.get_data.target_application"
                            disabled></b-form-input>
                    </b-form-group>
                </b-col>
            </b-row>
            <hr class="hr_style">
            <b-row class="mr-5 ml-5 pl-3 mt-4 mb-4">
                <b-col>
                    <b-card bg-variant="light" class="ml-5 mr-5">
                        <b-form-group
                            label="Serial Number:"
                            label-for="txt_serial_number"
                            label-cols-sm="4"
                            label-align-sm="left">
                            <b-form-input 
                                id="txt_serial_number" 
                                name="txt_serial_number"
                                v-model="form.txt_serial_number.value"
                                :state="form.txt_serial_number.state"
                                placeholder="Enter Serial Number"></b-form-input>
                        </b-form-group>
                        <b-form-group
                            label="Date Applied:"
                            label-for="slc_date_applied"
                            label-cols-sm="4"
                            label-align-sm="left">
                            <b-form-datepicker 
                                id="slc_date_applied" 
                                name="slc_date_applied"
                                placeholder="Choose a date" 
                                class="revup_datepicker"
                                hide-header
                                reset-button
                                close-button
                                :date-format-options="{ year: 'numeric', month: 'numeric', day: 'numeric' }"
                                v-model="form.slc_date_applied.value"
                                :state="form.slc_date_applied.state"></b-form-datepicker>
                        </b-form-group>
                        <b-form-group
                            label="CARF Number:"
                            label-for="txt_carf_number"
                            label-cols-sm="4"
                            label-align-sm="left">
                            <b-form-input 
                                id="txt_carf_number" 
                                name="txt_carf_number"
                                v-model="form.txt_carf_number.value"
                                :state="form.txt_carf_number.state"
                                placeholder="Enter Carf Number"></b-form-input>
                        </b-form-group>
                        <b-form-group
                            label="Current NCR No.:"
                            label-for="txt_current_ncr"
                            label-cols-sm="4"
                            label-align-sm="left">
                            <b-form-input 
                                id="txt_carf_number" 
                                name="txt_current_ncr"
                                v-model="form.txt_current_ncr.value"
                                :state="form.txt_current_ncr.state"
                                placeholder="Enter Current NCR Number"></b-form-input>
                        </b-form-group>
                    </b-card>
                </b-col>
            </b-row>
            <hr>
            <b-row>
                <b-col cols="12">
                        <b-button 
                        class="float-right mr-2"
                        size="md" 
                        variant="outline-secondary"
                        @click="clearForm();"
                        title="Click to clear inputs">
                        <font-awesome-icon icon="times-circle" /> Clear
                    </b-button>
                    <b-button 
                        class="float-right mr-2"
                        id="btn_update" 
                        size="md" 
                        variant="danger" 
                        type="submit"
                        title="Click to update unit rev up">
                        <font-awesome-icon icon="save" /> Update
                    </b-button> 
                </b-col>
            </b-row>
        </b-modal>
    </b-container>
</template>

<script>
export default {
    name: "UnitRevUpdateModal",
    props: {
        get_data: Object
    },
    data(){
        return{
            form:{
                txt_serial_number:{
                    value: "",
                    state: null,
                    validation: "", 
                },
                slc_date_applied:{
                    value: "",
                    state: null,
                    validation: "", 
                },
                txt_carf_number:{
                    value: "",
                    state: null,
                    validation: "", 
                },
                txt_current_ncr:{
                    value: "",
                    state: null,
                    validation: "", 
                }
            }
        }
    },
    methods:{
        clearForm: function(){
            this.form = {
                 txt_serial_number:{
                    value: "",
                    state: null,
                    validation: "", 
                },
                slc_date_applied:{
                    value: "",
                    state: null,
                    validation: "", 
                },
                txt_carf_number:{
                    value: "",
                    state: null,
                    validation: "", 
                },
                txt_current_ncr:{
                    value: "",
                    state: null,
                    validation: "", 
                }
            }; 
        }
    }
}
</script>

<style scoped>
    .revup_datepicker{
        position:unset;
        top: unset;
        max-width: unset;
        overflow: unset;
        flex-wrap: unset;
        box-shadow: unset;
    }

    .hr_style{
        display: block;
        margin-top: 0.5em;
        margin-bottom: 0.5em;
        margin-left: auto;
        margin-right: auto;
        border-width: 7px;
    }
</style>