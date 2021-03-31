<template>
    <b-container fluid>
        <b-modal 
            id="ec_action_items_modal_id" 
            size="lg"
            :no-close-on-backdrop="true" 
            centered>
            <template #modal-header="">
                <b-media>
                    <template  #aside>
                        <b-img
                            :src="require('../../assets/icon_images/edit_content.svg')" 
                            width="44" 
                            height="37" 
                            alt="placeholder">
                        </b-img>
                    </template>
                    <h5 class="mt-2">EC Action Items Update</h5>
                </b-media>
            </template>
            <b-row class="mr-3 ml-3">
                <b-col cols="8">
                    <b-form-group
                        label="ECO Number :"
                        label-for="txt_eco_number"
                        label-cols-sm="4"
                        label-align-sm="left">
                        <b-form-input id="txt_eco_number" disabled></b-form-input>
                    </b-form-group>
                    <b-form-group
                        label="FDTP/FTEC Meeting Date:"
                        label-for="txt_fdtp_ftec_meeting_date"
                        label-cols-sm="4"
                        label-align-sm="left">
                        <b-form-input id="txt_fdtp_ftec_meeting_date" disabled></b-form-input>
                    </b-form-group>
                </b-col>
                <b-col cols="4">
                    <b-form-group
                        label="Device:"
                        label-for="txt_device"
                        label-cols-sm="4"
                        label-align-sm="left">
                        <b-form-input id="txt_device" disabled></b-form-input>
                    </b-form-group>
                </b-col>
            </b-row>
            <hr>
            <b-row class="mr-3 ml-3 pl-2 mt-3">
                <b-col>
                    <b-form-group
                        label="FTEC Target Response Date:"
                        label-for="txt_ftec_target_response_date"
                        label-cols-sm="4"
                        label-align-sm="left">
                        <b-form-datepicker 
                            id="txt_ftec_target_response_date"
                            placeholder="Choose a date"
                            class="vps_datepicker"
                            hide-header
                            reset-button
                            close-button
                            :date-format-options="{ year: 'numeric', month: 'numeric', day: 'numeric'}">
                        </b-form-datepicker>
                    </b-form-group>
                    <b-form-group
                        label="FTEC PE's Answer:"
                        label-for="txt_ftec_pe_answer"
                        label-cols-sm="4"
                        label-align-sm="left">
                        <b-form-input id="txt_ftec_pe_answer"></b-form-input>
                    </b-form-group>
                    <b-form-group
                        label="Status:"
                        label-for="txt_status"
                        label-cols-sm="4"
                        label-align-sm="left">
                        <b-form-input id="txt_status"></b-form-input>
                    </b-form-group>
                    <b-form-group
                        label="Remarks:"
                        label-for="txt_remarks"
                        label-cols-sm="4"
                        label-align-sm="left">
                        <b-form-input id="txt_remarks"></b-form-input>
                    </b-form-group>
                </b-col>
            </b-row>
            <template #modal-footer="{ Update, hide }">
                <b-button size="md" variant="danger" @click="Update">
                    <font-awesome-icon icon="save" /> Save Values
                </b-button>
                <b-button size="md" variant="outline-secondary" @click="hide('close')">
                    <font-awesome-icon icon="times-circle" /> Close 
                </b-button>
            </template> 
        </b-modal>
    </b-container>
</template>

<script>
export default {
    name: 'ECActionItemsView',
}
</script>

<style scoped>
hr{
    display: block;
    background-color: rgb(138,134,134);
    margin-top: 0.5em;
    margin-bottom: 0.5em;
    margin-left: auto;
    margin-right: auto;
    border-width: 3px;
}

 .vps_datepicker{
        position:unset;
        top: unset;
        max-width: unset;
        overflow: unset;
        flex-wrap: unset;
        box-shadow: unset;
    }
</style>