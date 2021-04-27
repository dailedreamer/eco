<template>
  <b-container fluid>
    <Header 
        page_title="Parts Details"
        :get_data="get_data"/>
        <b-row class="p-2 ml-3 mr-3">
            <b-col>
                <b-form-group 
                    label-size="sm" 
                    label-for="device" 
                    label="Device:">
                    <multiselect  
                        v-model="deviceValue"
                        name="deviceName"
                        :options="deviceOptions" 
                        :searchable="true"
                        :show-labels="false"
                        placeholder="Select Device" 
                        label="name" 
                        track-by="id"></multiselect>
                </b-form-group>
            </b-col>
            <b-col>
                <b-form-group 
                    label-size="sm" 
                    label-for="txt_die_supplier" 
                    label="Die Supplier:">
                    <b-form-input
                        id="txt_die_supplier"
                        name="txt_die_supplier"
                        type="text"
                        required
                        placeholder="Enter Die Supplier"
                        autocomplete="off"/>
                </b-form-group>
            </b-col>
        </b-row>
        <b-row class="p-2 ml-3 mr-3">
            <b-col>
                <b-form-group 
                    label-size="sm" 
                    label-for="model" 
                    label="Model:">
                    <multiselect  
                        v-model="modelValue"
                        name="modelName"
                        :options="modelOptions" 
                        :searchable="true"
                        :show-labels="false"
                        placeholder="Select Model" 
                        label="name" 
                        track-by="id"></multiselect>
                </b-form-group>
            </b-col>
            <b-col>
                <b-form-group 
                    label-size="sm" 
                    label-for="txt_parts_supplier" 
                    label="Parts Supplier:">
                    <b-form-input
                        id="txt_parts_supplier"
                        name="txt_parts_supplier"
                        type="text"
                        required
                        placeholder="Enter Part Supplier"
                        autocomplete="off"/>
                </b-form-group>
            </b-col>
        </b-row>
        <b-row class="p-2 ml-3 mr-3">
            <b-col>
                <b-form-group 
                    label-size="sm" 
                    label-for="unit_name" 
                    label="Unit Name:">
                    <multiselect  
                        v-model="unitValue"
                        name="unitName"
                        :options="unitOptions" 
                        :searchable="true"
                        :show-labels="false"
                        placeholder="Select Unit Name" 
                        label="name" 
                        track-by="id"></multiselect>
                </b-form-group>
            </b-col>
            <b-col>
                 <b-form-group
                    label-size="sm"
                    label-for="txt_die_details"
                    label="Die Details:">
                    <b-form-input 
                        id="txt_die_details"
                        name="txt_die_details"
                        type="text"
                        required
                        placeholder="Enter Die Details"
                        autocomplete="off"/>
                </b-form-group>
            </b-col>
        </b-row>
        <b-row class="p-2 ml-3 mr-3">
            <b-col>
                <b-form-group 
                    label-size="sm" 
                    label-for="txt_unit_number" 
                    label="Unit Number:">
                    <b-form-input
                        id="txt_unit_number"
                        name="txt_unit_number"
                        type="text"
                        required
                        placeholder="Enter Unit Number"
                        disabled/>
                </b-form-group>
            </b-col>
            <b-col>
                <b-form-group 
                    label-size="sm" 
                    label-for="txt_location_of_fabrication" 
                    label="Location of Fabrication:">
                    <b-form-input
                        id="txt_location_of_fabrication"
                        name="txt_location_of_fabrication"
                        type="text"
                        required
                        placeholder="Enter Location of Fabrication"
                        autocomplete="off"/>
                </b-form-group>
            </b-col>
        </b-row>
        <b-row class="p-2 ml-3 mr-3">
            <b-col>
                <b-form-group 
                    label-size="sm" 
                    label-for="txt_batch_number" 
                    label="Batch Number:">
                    <b-form-input
                        id="txt_batch_number"
                        name="txt_batch_number"
                        type="text"
                        required
                        placeholder="Enter Batch Number"
                        autocomplete="off"/>
                </b-form-group>
            </b-col>
            <b-col>
                <b-form-group 
                    label-size="sm" 
                    label-for="txt_data_type" 
                    label="Data Type:">
                    <b-form-input
                        id="txt_data_type"
                        name="txt_data_type"
                        type="text"
                        required
                        placeholder="Enter Data Type"
                        autocomplete="off"/>
                </b-form-group>
            </b-col>
        </b-row>
        <b-row class="footer pt-2 pb-2 p-2 mr-3">
            <b-col cols="12">
                <b-button 
                    class="float-right"
                    type="submit"
                    id="button-submit"
                    size="sm" 
                    variant="outline-secondary"
                    title="Click to Clear Inputs"
                    @click="clearInputs()">
                    <font-awesome-icon 
                        icon="times-circle" 
                        class="icon"/> Clear
                </b-button>
                <b-button 
                    class="float-right mr-2"
                    type="submit"
                    id="btn_save" 
                    size="sm" 
                    variant="danger"
                    title="Click to Update Parts Details"
                    @click="update()">
                    <font-awesome-icon 
                        icon="save" 
                        class="icon"/> Update
                </b-button> 
            </b-col>
        </b-row> 
    </b-container>
</template>

<script>
import Header from "./ModalHeaders.vue";
export default {
name: "AssemblyApplication",
    components: {
        Header,
    },
    props:{
        get_data: Object
    },
    data(){
        return {
            deviceValue: [],
            deviceOptions: [],

            modelValue: [],
            modelOptions: [],

            unitValue: [],
            unitOptions: [],
        }
    },
    methods:{
        update: function(){
            alert("Successfully Save!")
        },
        clearInputs: function(){
            alert("Clear Inputs!")
        }
    }
}
</script>

<style scoped>

</style>