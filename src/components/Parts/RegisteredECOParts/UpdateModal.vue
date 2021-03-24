<template>
    <b-container fluid>
        <b-modal id="update_modal_id" size="lg" scrollable 
            :no-close-on-backdrop="true" centered
            >
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
                    <h5 class="mt-2">Supplier</h5>
                </b-media>
            </template>
            <b-row class="mr-3 ml-3">
                <b-col cols="6">
                    <b-form-group
                        label="Device:"
                        label-for="txt_device"
                        label-cols-sm="4"
                        label-align-sm="left">
                        <b-form-input id="txt_device" disabled></b-form-input>
                    </b-form-group>
                    <b-form-group
                        label="Model:"
                        label-for="txt_model"
                        label-cols-sm="4"
                        label-align-sm="left">
                        <b-form-input id="txt_model" disabled></b-form-input>
                    </b-form-group>
                    <b-form-group
                        label="Unit Number:"
                        label-for="txt_unit_number"
                        label-cols-sm="4"
                        label-align-sm="left">
                        <b-form-input id="txt_unit_number" disabled></b-form-input>
                    </b-form-group>
                    <b-form-group
                        label="Unit Name:"
                        label-for="txt_unit_name"
                        label-cols-sm="4"
                        label-align-sm="left">
                        <b-form-input id="txt_unit_name" disabled></b-form-input>
                    </b-form-group>
                </b-col>
                <b-col cols="6">
                    <b-form-group
                        label="Part Number:"
                        label-for="txt_part_number"
                        label-cols-sm="4"
                        label-align-sm="left">
                        <b-form-input id="txt_part_number" disabled></b-form-input>
                    </b-form-group>
                    <b-form-group
                        label="Revision No.:"
                        label-for="txt_revision_no"
                        label-cols-sm="4"
                        label-align-sm="left">
                        <b-form-input id="txt_revision_no" disabled></b-form-input>
                    </b-form-group>
                    <b-form-group
                        label="ECO Number:"
                        label-for="txt_eco_number"
                        label-cols-sm="4"
                        label-align-sm="left">
                        <b-form-input id="txt_eco_number" disabled></b-form-input>
                    </b-form-group>
                </b-col>
            </b-row>
            <hr>
            <b-row class="mr-3 ml-3 pl-2 mt-3">
                <b-col>
                    <b-card bg-variant="light">
                        <b-form-group
                            label-cols-lg="4"
                            label="PURCHASING"
                            label-size="lg"
                            label-class="font-weight-bold pt-0"
                            class="mb-0">
                            <b-form-group
                                label="Parts Supplier:"
                                label-for="txt_parts_supplier"
                                label-cols-sm="5"
                                label-align-sm="left">
                                <b-form-input id="txt_parts_supplier"></b-form-input>
                            </b-form-group>
                        </b-form-group>
                    </b-card>
                </b-col>
            </b-row> 
            <b-row class="mr-3 ml-3 pl-2 mt-3">
                <b-col>
                    <b-card bg-variant="light">
                        <b-form-group
                            label-cols-lg="4"
                            label="PC"
                            label-size="lg"
                            label-class="font-weight-bold pt-0"
                            class="mb-0">
                            <b-form-group
                                label="Die Target:"
                                label-for="txt_die_target"
                                label-cols-sm="5"
                                label-align-sm="left">
                                <b-form-input id="txt_die_target"></b-form-input>
                            </b-form-group>
                            <b-form-group 
                                label="Parts Del. Target:"
                                label-for="txt_parts_del_target"
                                label-cols-sm="5"
                                label-align-sm="left">
                                <b-form-input id="txt_parts_del_target"></b-form-input>
                            </b-form-group>
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
    name: 'UpdateModal',
}
</script>

<style scoped>
    hr{
        display: block;
        margin-top: 0.5em;
        margin-bottom: 0.5em;
        margin-left: auto;
        margin-right: auto;
        border-width: 7px;
        /* color: black; */
        /* border-bottom: black; */
    }
</style>