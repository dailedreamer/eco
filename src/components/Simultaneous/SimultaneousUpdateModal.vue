<template>
    <b-container fluid>
        <b-modal 
            id="simultaneous_update_modal_id" 
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
                    <h5 class="mt-2">Update</h5>
                </b-media>
            </template>
            <b-row class="mr-3 ml-3">
                <b-col cols="6">
                    <b-form-group
                        label="ECO NO.:"
                        label-for="txt_eco_number"
                        label-cols-sm="4"
                        label-align-sm="left">
                        <b-form-input 
                            id="txt_eco_number" 
                            v-model="this.items.eco_number"
                            disabled ></b-form-input>
                    </b-form-group>
                    <b-form-group
                        label="Device:"
                        label-for="txt_device"
                        label-cols-sm="4"
                        label-align-sm="left">
                        <b-form-input 
                            id="txt_device" 
                            v-model="this.items.device_name"
                            disabled></b-form-input>
                    </b-form-group>
                    <b-form-group
                        label="Model:"
                        label-for="txt_model"
                        label-cols-sm="4"
                        label-align-sm="left">
                        <b-form-input 
                            id="txt_model" 
                            v-model="this.items.model_name"
                            disabled></b-form-input>
                    </b-form-group>
                </b-col>
                <b-col cols="6">
                    <b-form-group
                        label="Unit Number:"
                        label-for="txt_unit_number"
                        label-cols-sm="4"
                        label-align-sm="left">
                        <b-form-input 
                            id="txt_unit_number" 
                            v-model="this.items.unit_number"
                            disabled></b-form-input>
                    </b-form-group>
                    <b-form-group
                        label="Unit Name:"
                        label-for="txt_unit_name"
                        label-cols-sm="4"
                        label-align-sm="left">
                        <b-form-input 
                            id="txt_unit_name" 
                             v-model="this.items.unit_name"
                            disabled></b-form-input>
                    </b-form-group>
                </b-col>
            </b-row>
            <hr class="hr_style">
            <b-form
                id="form_update_simultaneous"
                @submit.prevent="submitForm"
                method="post">
                    <b-row class="mr-5 ml-5 pl-3 mt-4 mb-4">
                        <b-col>
                            <b-card bg-variant="light" class="ml-5 mr-5">
                                <b-form-group
                                    label="Actual Application:"
                                    label-for="slc_actual_application"
                                    label-cols-sm="4"
                                    label-align-sm="left"
                                    invalid-feedback="Name is required"
                                    :state="form.slc_actual_application.state">
                                    <b-form-datepicker 
                                        id="slc_actual_application" 
                                        name="slc_actual_application"
                                        placeholder="Choose a date" 
                                        class="simultaneous_datepicker"
                                        hide-header
                                        reset-button
                                        close-button
                                        :date-format-options="{ year: 'numeric', month: 'numeric', day: 'numeric' }"
                                        v-model="form.slc_actual_application.value"
                                        :state="form.slc_actual_application.state"></b-form-datepicker>
                                </b-form-group>
                                <b-form-group
                                    label="CARF Number:"
                                    label-for="txt_carf_number"
                                    label-cols-sm="4"
                                    label-align-sm="left"
                                    :state="form.txt_carf_number.state">
                                    <b-form-input 
                                        id="txt_carf_number" 
                                        name="txt_carf_number"
                                        v-model="form.txt_carf_number.value"
                                        :state="form.txt_carf_number.state"
                                        placeholder="Enter Carf Number"></b-form-input>
                                </b-form-group>
                                <b-form-group
                                    label="Serial Number:"
                                    label-for="txt_serial_number"
                                    label-cols-sm="4"
                                    label-align-sm="left"
                                    :state="form.txt_serial_number.state">
                                    <b-form-input 
                                        id="txt_serial_number" 
                                        name="txt_serial_number"
                                        v-model="form.txt_serial_number.value"
                                        :state="form.txt_serial_number.state"
                                        placeholder="Enter Serial Number"></b-form-input>
                                </b-form-group>
                            </b-card>
                        </b-col>
                    </b-row>
                    <!-- <hr> -->
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
                                title="Click to update simultaneous">
                                <font-awesome-icon icon="save" /> Update
                            </b-button> 
                        </b-col>
                    </b-row>
            </b-form>
        </b-modal>
    </b-container>
</template>

<script>
export default {
    name: 'SimultaneousUpdate',
    props: {
        items: Object
    },
    data(){
        return{
            form:{
                slc_actual_application: {
                    value: "",
                    state: null,
                    validation: "", 
                },
                txt_carf_number: {
                    value: "",
                    state: null,
                    validation: "",
                },
                txt_serial_number: {
                    value: "",
                    state: null,
                    validation: "",
                },   
            }
        }
    },
    methods:{
        submitForm: function(){
            let id = this.items.id
            
            var data = {
                'actual_application' : this.form.slc_actual_application.value,
                'carf_number' : this.form.txt_carf_number.value,
                'serial_number' : this.form.txt_serial_number.value
            };

            this.$store
                .dispatch("updateSimultaneousApplication", [data, id])
                .then((response) => 
                {
                    let result = response.data.status;
                    if(result == "Success")
                    {
                        // this.toast(status, response.data.message);
                        this.$emit('clicked')
                        this.clearForm();
                    }
                    else if(status == "Warning")
                        this.toast(status, response.data.message);
                    else
                        this.toast(status, response.data.message);
                })
                .catch((error) => {
                    console.log(error);
                })
        },
        clearForm: function(){
            this.form = {
                slc_actual_application: {
                    value: "",
                    state: null,
                    validation: "", 
                },
                txt_carf_number: {
                    value: "",
                    state: null,
                    validation: "",
                },
                txt_serial_number: {
                    value: "",
                    state: null,
                    validation: "",
                },
            }; 
        },
        toast: function (status, message){
            this.$toast(message, {
                type:status.toLowerCase().trim(),
                position: "bottom-right",
            });
        }
    }
}
</script>

<style scoped>
    .simultaneous_datepicker{
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