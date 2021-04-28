<template>
    <b-container fluid>
         <b-modal
            id="modal_eco_process"
            hide-footer
            size="md"
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
                    <h5 class="mt-2">Unit Revision</h5>
                </b-media>
            </template>
            <b-row class="mt-3 mr-2 ml-2 mb-4">
                <b-col cols="12">
                    <b-card bg-variant="light" class="add_eco_process">
                        <b-form-group
                            label="Drawing Number:"
                            label-for="txt_drawing_number"
                            label-cols-sm="5"
                            label-align-sm="left"
                            label-size="sm">
                            <b-form-input 
                                id="txt_drawing_number" 
                                name="txt_drawing_number"
                                v-model="form.txt_drawing_number.value"
                                :state="form.txt_drawing_number.state"
                                placeholder="Enter Drawing Number"></b-form-input>
                        </b-form-group>
                        <b-form-group
                            label="Revision Number:"
                            label-for="txt_revision_number"
                            label-cols-sm="5"
                            label-align-sm="left"
                            label-size="sm">
                            <b-form-input 
                                id="txt_revision_number" 
                                name="txt_revision_number"
                                v-model="form.txt_revision_number.value"
                                :state="form.txt_revision_number.state"
                                placeholder="Enter Revision Number"></b-form-input>
                        </b-form-group>
                        <b-form-group
                            label="Quantity:"
                            label-for="txt_quantity"
                            label-cols-sm="5"
                            label-align-sm="left"
                            label-size="sm">
                            <b-form-input 
                                id="txt_quantity" 
                                name="txt_quantity"
                                v-model="form.txt_quantity.value"
                                :state="form.txt_quantity.state"
                                placeholder="Enter Quantity"
                                @keypress="isNumber($event)"></b-form-input>
                        </b-form-group>
                        <b-form-group
                            label="Details:"
                            label-for="txt_details"
                            label-cols-sm="5"
                            label-align-sm="left"
                            label-size="sm">
                            <b-form-input 
                                id="txt_details" 
                                name="txt_details"
                                v-model="form.txt_details.value"
                                :state="form.txt_details.state"
                                placeholder="Enter Details"></b-form-input>
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
                        title="Click to save eco process">
                        <font-awesome-icon icon="save" /> Save Values
                    </b-button> 
                </b-col>
            </b-row>
         </b-modal>
    </b-container>
</template>

<script>
export default {
    name: 'EcoProcessModal',
    data(){
        return{
            form: {
                txt_drawing_number:{
                    value: "",
                    state: null,
                    validation: "", 
                },
                txt_revision_number:{
                    value: "",
                    state: null,
                    validation: "", 
                },
                txt_quantity:{
                    value: "",
                    state: null,
                    validation: "", 
                },
                txt_details:{
                    value: "",
                    state: null,
                    validation: "", 
                },
            }
        }
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
        clearForm: function(){
            this.form = {
                txt_drawing_number:{
                    value: "",
                    state: null,
                    validation: "", 
                },
                txt_revision_number:{
                    value: "",
                    state: null,
                    validation: "", 
                },
                txt_quantity:{
                    value: "",
                    state: null,
                    validation: "", 
                },
                txt_details:{
                    value: "",
                    state: null,
                    validation: "", 
                },
            }; 
        }
    }
}
</script>

<style scoped>

</style>