<template>
  <b-container fluid>
    <Header 
        part_number="KDTEST" 
        page_title="ECO Details"/>
        <b-row class="p-2 ml-3 mr-3">
            <b-col>
                <b-form-group 
                    label-size="sm" 
                    label-for="txt_eco_number" 
                    label="ECO Number:">
                    <b-form-input
                        id="txt_eco_number"
                        name="txt_eco_number"
                        type="text"
                        required
                        placeholder="Enter ECO Number"
                        autocomplete="off"/>
                </b-form-group>
            </b-col>
            <b-col>
                <b-form-group 
                    label-size="sm" 
                    label-for="txt_class" 
                    label="Class:">
                    <b-form-input
                        id="txt_class"
                        name="txt_class"
                        type="text"
                        required
                        placeholder="Enter Class"
                        autocomplete="off"/>
                </b-form-group>
            </b-col>
        </b-row>
        <b-row class="p-2 ml-3 mr-3">
            <b-col>
                <b-form-group 
                    label-size="sm" 
                    label-for="txt_ecas_no" 
                    label="ECAS Number:">
                    <b-form-input
                        id="txt_ecas_no"
                        name="txt_ecas_no"
                        type="text"
                        required
                        placeholder="Enter ECAS Number"
                        autocomplete="off"/>
                </b-form-group>
            </b-col>
            <b-col>
                <b-form-group 
                    label-size="sm" 
                    label-for="slc_t1_supplier_target" 
                    label="T1 Supplier Target:">
                    <b-form-datepicker 
                        id="slc_t1_supplier_target" 
                        placeholder="Choose a date" 
                        class="parts_monitoring_datepicker"
                        hide-header
                        :date-format-options="{ year: 'numeric', month: 'numeric', day: 'numeric' }"
                        ></b-form-datepicker>
                </b-form-group>
            </b-col>
        </b-row>
        <b-row class="p-2 ml-3 mr-3">
            <b-col>
                <b-form-group 
                    label-size="sm" 
                    label-for="slc_ftec_die_target" 
                    label="FTEC Die Target:">
                    <b-form-datepicker 
                        id="slc_ftec_die_target" 
                        placeholder="Choose a date" 
                        class="parts_monitoring_datepicker"
                        hide-header
                        :date-format-options="{ year: 'numeric', month: 'numeric', day: 'numeric' }"
                        ></b-form-datepicker>
                </b-form-group>
            </b-col>
            <b-col>
                <b-form-group 
                    label-size="sm" 
                    label-for="txt_revision_details" 
                    label="Revision Details:">
                    <b-form-input
                        id="txt_revision_details"
                        name="txt_revision_details"
                        type="text"
                        required
                        placeholder="Enter Revision Details"
                        autocomplete="off"/>
                </b-form-group>
            </b-col>
        </b-row>
        <b-row class="p-2 ml-3 mr-3">
            <b-col>
                <b-form-group 
                    label-size="sm" 
                    label-for="slc_parts_target" 
                    label="Parts Target:">
                    <b-form-datepicker 
                        id="slc_parts_target" 
                        placeholder="Choose a date" 
                        class="parts_monitoring_datepicker"
                        hide-header
                        :date-format-options="{ year: 'numeric', month: 'numeric', day: 'numeric' }"
                        ></b-form-datepicker>
                </b-form-group>
            </b-col>
            <b-col cols="6">
                <b-form-group 
                    label-size="sm" 
                    label-for="txt_application_mark" 
                    label="Application Mark:">
                    <b-form-input
                        id="txt_application_mark"
                        name="txt_application_mark"
                        type="text"
                        required
                        placeholder="Enter Application Mark"
                        autocomplete="off"/>
                </b-form-group>
            </b-col>
        </b-row>
        <b-row class="p-2 ml-3 mr-3">
            <b-col>
                <b-form-group 
                    label-size="sm" 
                    label-for="slc_target_assembly_application" 
                    label="Target Assembly Application:">
                    <b-form-datepicker 
                        id="slc_target_assembly_application" 
                        placeholder="Choose a date" 
                        class="parts_monitoring_datepicker"
                        hide-header
                        :date-format-options="{ year: 'numeric', month: 'numeric', day: 'numeric' }"
                        ></b-form-datepicker>
                </b-form-group>
            </b-col>
            <b-col cols="6">
            </b-col>
        </b-row>
        <b-row class="footer pt-2 pb-2 mr-3 p-2">
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
                    title="Click to Update ECO Details"
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
    .parts_monitoring_datepicker{
        position:unset;
        top: unset;
        max-width: unset;
        overflow: unset;
        flex-wrap: unset;
        box-shadow: unset;
    }
</style>