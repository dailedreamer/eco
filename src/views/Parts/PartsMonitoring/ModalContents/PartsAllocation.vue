<template>
  <b-container fluid>
    <Header part_number="KDTEST" page_title="Parts Allocation"/>
        <b-row class="p-2 mb-3">
            <b-col cols="4">
                <b-form-group 
                    label-size="sm" 
                    label-for="txt_eco_pan" 
                    label="ECO PAN Control Number:">
                    <b-form-input
                        id="txt_eco_pan"
                        name="txt_eco_pan"
                        type="text"
                        required
                        placeholder="Enter ECO PAN"
                        autocomplete="off"/>
                </b-form-group>
            </b-col>
            <b-col cols="4">
                <b-form-group 
                    label-size="sm" 
                    label-for="slc_pick_date" 
                    label="Pick Date:">
                    <b-form-datepicker
                        id="slc_pick_date" 
                        placeholder="Choose date" 
                        class="parts_allocation_datepicker"
                        hide-header
                        :date-format-options="{ year: 'numeric', month: 'numeric', day: 'numeric' }"
                        ></b-form-datepicker>
                </b-form-group>
            </b-col>
            <b-col cols="4">
                <b-form-group 
                    label-size="sm" 
                    label-for="slc_eco_pan_meeting" 
                    label="ECO PAN Meeting:">
                    <b-form-datepicker
                        id="slc_eco_pan_meeting" 
                        placeholder="Choose date" 
                        class="parts_allocation_datepicker"
                        hide-header
                        :date-format-options="{ year: 'numeric', month: 'numeric', day: 'numeric' }"
                        ></b-form-datepicker>
                </b-form-group>
            </b-col>
        </b-row>
        <b-row class="footer pt-2 pb-2">
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
                    title="Click to Update Parts Allocation"
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
        },
    }
}
</script>

<style scoped>
    .parts_allocation_datepicker
    {
        position:unset;
        top: unset;
        max-width: unset;
        overflow: unset;
        flex-wrap: unset;
        box-shadow: unset;
    }
</style>