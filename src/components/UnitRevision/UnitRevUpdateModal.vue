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
                        label-for="eco_number"
                        label-cols-sm="6"
                        label-align-sm="left">
                        <b-form-input 
                            id="eco_number"
                            v-model="update_revision_data.eco_number"
                            disabled ></b-form-input>
                    </b-form-group>
                    <b-form-group
                        label="Unit Number:"
                        label-for="unit_number"
                        label-cols-sm="6"
                        label-align-sm="left">
                        <b-form-input 
                            id="unit_number"
                            v-model="update_revision_data.unit_number"
                            disabled></b-form-input>
                    </b-form-group>
                    <b-form-group
                        label="Unit Name:"
                        label-for="unit_name"
                        label-cols-sm="6"
                        label-align-sm="left">
                        <b-form-input 
                            id="unit_name"
                            v-model="update_revision_data.unit_name"
                            disabled></b-form-input>
                    </b-form-group>
                </b-col>
                <b-col cols="6">
                    <b-form-group
                        label="Revision Up:"
                        label-for="revision_up"
                        label-cols-sm="6"
                        label-align-sm="left">
                        <b-form-input 
                            id="revision_up" 
                            v-model="update_revision_data.revision_up"
                            disabled></b-form-input>
                    </b-form-group>
                    <b-form-group
                        label="Target Application:"
                        label-for="target_application"
                        label-cols-sm="6"
                        label-align-sm="left">
                        <b-form-input 
                            id="target_application" 
                            v-model="update_revision_data.target_application"
                            disabled></b-form-input>
                    </b-form-group>
                </b-col>
            </b-row>
            <hr class="hr_style">
            <b-form
             class="pl-4 pr-4"
                id="form-update"
                @submit.prevent="updateUnitRevisionUp"
                method="post">
                <b-row class="mr-5 ml-5 pl-3 mt-4 mb-4">
                    <b-col>
                        <b-card bg-variant="light" class="ml-5 mr-5">
                            <b-form-group
                                label="Serial Number:"
                                label-for="serial_number"
                                label-cols-sm="4"
                                label-align-sm="left">
                                <b-form-input 
                                    id="serial_number" 
                                    name="serial_number"
                                    v-model="update_revision_data.serial_number"
                                    :state="form.serial_number.state"
                                    placeholder="Enter Serial Number"></b-form-input>
                            </b-form-group>
                            <b-form-group
                                label="Date Applied:"
                                label-for="date_applied"
                                label-cols-sm="4"
                                label-align-sm="left">
                                <b-form-datepicker 
                                    id="date_applied" 
                                    name="date_applied"
                                    placeholder="Choose a date" 
                                    class="revup_datepicker"
                                    hide-header
                                    reset-button
                                    close-button
                                    :date-format-options="{ year: 'numeric', month: 'numeric', day: 'numeric' }"
                                    v-model="update_revision_data.date_applied"
                                    :state="form.date_applied.state"></b-form-datepicker>
                            </b-form-group>
                            <b-form-group
                                label="CARF Number:"
                                label-for="carf_number"
                                label-cols-sm="4"
                                label-align-sm="left">
                                <b-form-input 
                                    id="carf_number" 
                                    name="carf_number"
                                    v-model="update_revision_data.carf_number"
                                    :state="form.carf_number.state"
                                    placeholder="Enter Carf Number"></b-form-input>
                            </b-form-group>
                            <b-form-group
                                label="Current NCR No.:"
                                label-for="current_ncr"
                                label-cols-sm="4"
                                label-align-sm="left">
                                <b-form-input 
                                    id="carf_number" 
                                    name="current_ncr"
                                    v-model="update_revision_data.current_ncr_number"
                                    :state="form.current_ncr_number.state"
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
            </b-form>
        </b-modal>
    </b-container>
</template>

<script>
export default {
    name: "UnitRevUpdateModal",
    props: {
        update_revision_data: Object
    },
    data(){
        return{
            form:{
                serial_number:{
                    value: "",
                    state: null,
                    validation: "", 
                },
                date_applied:{
                    value: "",
                    state: null,
                    validation: "", 
                },
                carf_number:{
                    value: "",
                    state: null,
                    validation: "", 
                },
                current_ncr_number:{
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
                serial_number:{
                    value: "",
                    state: null,
                    validation: "", 
                },
                date_applied:{
                    value: "",
                    state: null,
                    validation: "", 
                },
                carf_number:{
                    value: "",
                    state: null,
                    validation: "", 
                },
                current_ncr_number:{
                    value: "",
                    state: null,
                    validation: "", 
                }
            }; 
        },
        updateUnitRevisionUp:function()
        {
            var patchData = 
            {
                id                  : this.update_revision_data.id,
                serial_number       : this.update_revision_data.serial_number,
                date_applied        : this.update_revision_data.date_applied,
                carf_number         : this.update_revision_data.carf_number,
                current_ncr_number  : this.update_revision_data.current_ncr_number
            };
         
            this.$store
                .dispatch("UpdateUnitRevisionUp", patchData)
                .then((response) => {
                    let data = response.data;
                  
                let status = data.status;
                    if (status == "Success") {
                        this.toast(status, data.message);
                        this.clearForm();
                        this.$bvModal.hide("modal_unit_rev_update");
                        this.$emit("clicked");
                    } else if (status == "Warning") {
                        Object.keys(data.data).forEach((key) => {
                        this.form[key]["state"] = false;
                        this.form[key]["validation"] = data.data[key][0];
                        });
                        this.toast(status, "Please review your inputs.");
                    } else if (status == "Error") {
                        this.toast(status, data.message);
                    }
                })
                .catch((error) => {
                let error_data = error.data;
                        let status = error.status;
                        console.log(error_data.error);
                        for(const[key] of Object.entries(error_data.error))
                        {
                            this.toast(status,error_data.error[key][0]);
                        };
                        this.clearForm();
                    })
                .finally(() => {
                });
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

// Route::patch('unit-rev-application/update-unit-revision/{id}', [WithUnitRevisionController::class, 'updateUnitRevision']);
// Route::get('unit-rev-application/show-unit-revision/{id}', [WithUnitRevisionController::class, 'showUnitRevision']);