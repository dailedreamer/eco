<template>
    <b-container fluid>
        <b-modal 
            id="vps_modal_id"
            size="lg" 
            :no-close-on-backdrop="true"
            scrollable
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
                    <h5 class="mt-2">Update VPS Application</h5>
                </b-media>
            </template>
            
            <b-row class = "mr-3 ml-3">
                <b-col cols="6">
                    <b-form-group
                        label="ECO Number:"
                        label-for="txt_eco_number"
                        label-cols-sm="4"
                        label-align-sm="left">
                        <b-form-input 
                            id = "txt_eco_number" 
                            readonly
                            v-model="this.get_data.eco_number"
                        ></b-form-input>
                    </b-form-group>
                    <b-form-group
                        label="Part Number:"
                        label-for="txt_part_number"
                        label-cols-sm="4"
                        label-align-sm="left">
                        <b-form-input 
                            id = "txt_part_number"
                            name="txt_part_number" 
                            type="text"
                            readonly
                            v-model="this.get_data.part_number"
                            ></b-form-input>
                    </b-form-group>
                     <b-form-group
                        label="Revision No.:"
                        label-for="txt_revision_number"
                        label-cols-sm="4"
                        label-align-sm="left">
                        <b-form-input 
                            id = "txt_revision_number" 
                            readonly
                            v-model="this.get_data.revision"
                        ></b-form-input>
                    </b-form-group>
                </b-col>
                <b-col cols="6">
                    <b-form-group
                        label="Device:"
                        label-for="txt_device"
                        label-cols-sm="4"
                        label-align-sm="left">
                        <b-form-input 
                            id="txt_device" 
                            readonly
                            v-model="this.get_data.device"
                        ></b-form-input>                                  
                    </b-form-group>
                    <b-form-group
                        label="Model:"
                        label-for="txt_model"
                        label-cols-sm="4"
                        label-align-sm="left">
                        <b-form-input 
                            id="txt_model" 
                            readonly
                            v-model="this.get_data.device"
                        ></b-form-input>                                  
                    </b-form-group>
                    <b-form-group
                        label="Unit Name:"
                        label-for="txt_unit_name"
                        label-cols-sm="4"
                        label-align-sm="left">
                        <b-form-input 
                            id="txt_unit_name" 
                            readonly
                            v-model="this.get_data.unit_name"
                        ></b-form-input>                                  
                    </b-form-group>
                    <b-form-group
                        label="Unit number:"
                        label-for="txt_unit_number"
                        label-cols-sm="4"
                        label-align-sm="left">
                        <b-form-input 
                            id="txt_unit_number" 
                            readonly
                            v-model="this.get_data.unit_number"
                        ></b-form-input>                                  
                    </b-form-group>
                </b-col>
            </b-row>
            <hr>
            <b-row class = "mr-3 ml-3 pl-2 mt-3">
                <b-col>
                    <b-card bg-variant="light">
                        <b-form-group
                            label="Target Sending Date:"
                            label-for="txt_target_sending_date"
                            label-cols-sm="4"
                            label-align-sm="left">
                            <b-form-datepicker 
                                id="txt_target_sending_date"
                                placeholder="Choose a date"
                                class="vps_datepicker"
                                hide-header
                                reset-button
                                close-button
                                :date-format-options="{ year: 'numeric', month: 'numeric', day: 'numeric'}">
                            </b-form-datepicker>
                        </b-form-group>
                        <b-form-group
                            label="Date Received:"
                            label-for="txt_received_date"
                            label-cols-sm="4"
                            label-align-sm="left">
                            <b-form-datepicker 
                                id="txt_received_date"
                                placeholder="Choose a date"
                                class="vps_datepicker"
                                hide-header
                                reset-button
                                close-button
                                :date-format-options="{ year: 'numeric', month: 'numeric', day: 'numeric'}">
                            </b-form-datepicker>
                        </b-form-group>
                        <b-form-group
                            label="Target Application:"
                            label-for="txt_target_application"
                            label-cols-sm="4"
                            label-align-sm="left">
                            <b-form-datepicker 
                                id="txt_target_application"
                                placeholder="Choose a date"
                                class="vps_datepicker"
                                hide-header
                                reset-button
                                close-button
                                :date-format-options="{ year: 'numeric', month: 'numeric', day: 'numeric'}">
                            </b-form-datepicker>
                        </b-form-group>
                        <b-form-group
                            label="Date Applied:"
                            label-for="txt_date_applied"
                            label-cols-sm="4"
                            label-align-sm="left">
                            <b-form-datepicker 
                                id="txt_date_applied"
                                placeholder="Choose a date"
                                class="vps_datepicker"
                                hide-header
                                reset-button
                                close-button
                                :date-format-options="{ year: 'numeric', month: 'numeric', day: 'numeric'}">
                            </b-form-datepicker>
                        </b-form-group>
                    </b-card>
                </b-col>
            </b-row>
             <template #modal-footer="{ Update, hide }">
                <b-button size="sm" variant="danger" @click="Update">
                    <font-awesome-icon icon="save" /> Update
                </b-button>
                <b-button size="sm" variant="outline-secondary" @click="hide('close')">
                    <font-awesome-icon icon="times-circle" /> Close 
                </b-button>
            </template> 
        </b-modal>
       
    </b-container>
</template>

<script>
export default {
    name: 'VpsUpdateModal',
    props: {
        get_data:Object
    },
    data(){
       return {
        part_number: this.get_data.part_number,
       } 
    },

    mounted(){
      
        // console.log(this.get_data);
    }
   
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
