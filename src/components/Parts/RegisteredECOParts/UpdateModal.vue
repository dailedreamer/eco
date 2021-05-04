<template>
    <b-container fluid>
        <b-modal 
            id="update_modal_id" 
            size="lg" 
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
                    <h5 class="mt-2">Supplier</h5>
                </b-media>
            </template>
            <b-row class="mr-3 ml-3 mt-2">
                <b-col cols="6">
                    <b-form-group
                        label-size="sm" 
                        label="Device:"
                        label-for="txt_device"
                        label-cols-sm="4"
                        label-align-sm="left">
                        <b-form-input 
                            size="sm"  
                            id="txt_device" 
                            v-model="get_data.device_name"
                            disabled></b-form-input>
                    </b-form-group>
                    <b-form-group
                        label-size="sm" 
                        label="Model:"
                        label-for="txt_model"
                        label-cols-sm="4"
                        label-align-sm="left">
                        <b-form-input 
                            size="sm" 
                            id="txt_model"
                            v-model="get_data.model_name" 
                            disabled></b-form-input>
                    </b-form-group>
                    <b-form-group
                        label-size="sm" 
                        label="Unit Number:"
                        label-for="txt_unit_number"
                        label-cols-sm="4"
                        label-align-sm="left">
                        <b-form-input  
                            size="sm" 
                            id="txt_unit_number" 
                            v-model="get_data.unit_number"
                            disabled></b-form-input>
                    </b-form-group>
                    <b-form-group
                        label-size="sm" 
                        label="Unit Name:"
                        label-for="txt_unit_name"
                        label-cols-sm="4"
                        label-align-sm="left">
                        <b-form-input 
                            size="sm" 
                            id="txt_unit_name" 
                            v-model="get_data.unit_name"
                            disabled></b-form-input>
                    </b-form-group>
                </b-col>
                <b-col cols="6">
                    <b-form-group
                        label-size="sm" 
                        label="Part Number:"
                        label-for="txt_part_number"
                        label-cols-sm="4"
                        label-align-sm="left">
                        <b-form-input 
                            size="sm" 
                            id="txt_part_number"
                            v-model="get_data.part_number" 
                            disabled></b-form-input>
                    </b-form-group>
                    <b-form-group
                        label-size="sm" 
                        label="Revision No.:"
                        label-for="txt_revision_no"
                        label-cols-sm="4"
                        label-align-sm="left">
                        <b-form-input 
                            size="sm" 
                            id="txt_revision_no"
                            v-model="get_data.new_revision" 
                            disabled></b-form-input>
                    </b-form-group>
                    <b-form-group
                        label-size="sm" 
                        label="ECO Number:"
                        label-for="txt_eco_number"
                        label-cols-sm="4"
                        label-align-sm="left">
                        <b-form-input 
                            size="sm" 
                            id="txt_eco_number" 
                            v-model="get_data.eco_number"
                            disabled></b-form-input>
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
                                <b-form-input 
                                    id="txt_parts_supplier" 
                                    placeholder="Enter Parts Supplier"
                                    required
                                    autocomplete="off"></b-form-input>
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
                                <b-form-datepicker 
                                    id="txt_die_target" 
                                    placeholder="Choose a date" 
                                    class="pc_datepicker"
                                    hide-header
                                    :date-format-options="{ year: 'numeric', month: 'numeric', day: 'numeric' }"></b-form-datepicker>
                            </b-form-group>
                            <b-form-group 
                                label="Parts Del. Target:"
                                label-for="txt_parts_del_target"
                                label-cols-sm="5"
                                label-align-sm="left">
                                <b-form-datepicker 
                                    id="txt_parts_del_target" 
                                    placeholder="Choose a date" 
                                    class="pc_datepicker"
                                    hide-header
                                    :date-format-options="{ year: 'numeric', month: 'numeric', day: 'numeric' }"></b-form-datepicker>
                            </b-form-group>
                        </b-form-group>
                    </b-card>
                </b-col>
            </b-row>
            <hr>
            <b-row class="mt-3 mb-3">
                <b-col cols="12">
                    <b-button 
                        class="float-right mr-2"
                        size="sm" 
                        variant="outline-secondary"
                        title="Click to Clear Inputs">
                        <font-awesome-icon icon="times-circle" /> Clear
                    </b-button>
                    <b-button 
                        class="float-right mr-2"
                        id="btn_update" 
                        size="sm" 
                        variant="danger" 
                        type="submit"
                        title="Click to Update Supplier">
                        <font-awesome-icon icon="save" /> Update
                    </b-button> 
                </b-col>
            </b-row>
        </b-modal>
    </b-container>
</template>

<script>
export default {
    name: 'UpdateModal',
    props: {
        get_data: Object,
    }
}
</script>

<style scoped>
    .pc_datepicker{
        position:unset;
        top: unset;
        max-width: unset;
        overflow: unset;
        flex-wrap: unset;
        box-shadow: unset;
    }
</style>