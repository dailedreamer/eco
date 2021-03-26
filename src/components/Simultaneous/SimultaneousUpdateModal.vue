<template>
    <b-container fluid>
        <b-modal 
            id="simultaneous_update_modal_id" 
            size="lg"
            :no-close-on-backdrop="true" 
            centered>
            <template #modal-header="">
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
                        <b-form-input id="txt_eco_number" disabled></b-form-input>
                    </b-form-group>
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
                </b-col>
                <b-col cols="6">
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
            </b-row>
            <hr>
            <b-row class="mr-3 ml-3 pl-2 mt-3">
                aaaaa
            </b-row>
        </b-modal>
    </b-container>
</template>

<script>
export default {
    name: 'SimultaneousUpdate',
}
</script>

<style scoped>

</style>