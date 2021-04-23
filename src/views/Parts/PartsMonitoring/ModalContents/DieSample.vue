<template>
  <b-container fluid>
    <Header 
        part_number="KDTEST" 
        page_title="Die Sample"/>
        <b-row class="p-2 ml-3 mr-3">
            <b-col>
                <b-form-group 
                    label-size="sm" 
                    label-for="txt_level" 
                    label="Level:">
                    <b-form-input
                        id="txt_level"
                        name="txt_level"
                        type="text"
                        required
                        placeholder="Enter Level"
                        autocomplete="off"/>
                </b-form-group>
            </b-col>
            <b-col>
                <b-form-group 
                    label-size="sm" 
                    label-for="txt_qty" 
                    label="Quantity:">
                    <b-form-input
                        id="txt_qty"
                        name="txt_qty"
                        type="text"
                        required
                        placeholder="Enter Quantity"
                        autocomplete="off"/>
                </b-form-group>
            </b-col>
        </b-row>
        <b-row class="p-2 ml-3 mr-3">
            <b-col>
                <b-form-group 
                    label-size="sm" 
                    label-for="slc_target_del_date" 
                    label="Target Delivery Date:">
                    <b-form-datepicker 
                        id="slc_target_del_date" 
                        placeholder="Choose a date" 
                        class="die_sample_datepicker"
                        hide-header
                        :date-format-options="{ year: 'numeric', month: 'numeric', day: 'numeric' }"
                        ></b-form-datepicker>
                </b-form-group>
            </b-col>
            <b-col>
                <b-form-group 
                    label-size="sm" 
                    label-for="slc_actual_del_date" 
                    label="Actual Delivery Date:">
                    <b-form-datepicker 
                        id="slc_actual_del_date" 
                        placeholder="Choose a date" 
                        class="die_sample_datepicker"
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
                    label-for="slc_nep_in_date" 
                    label="NEP-In Date:">
                    <b-form-datepicker 
                        id="slc_nep_in_date" 
                        placeholder="Choose a date" 
                        class="die_sample_datepicker"
                        hide-header
                        :date-format-options="{ year: 'numeric', month: 'numeric', day: 'numeric' }"
                        ></b-form-datepicker>
                </b-form-group>
            </b-col>
            <b-col>
                <b-form-group 
                    label-size="sm" 
                    label-for="slc_pe_judgement" 
                    label="PE Judgement:">
                    <b-form-select 
                        id="slc_pe_judgement"
                        v-model="selected_judgement" 
                        :options="options">
                        <template #first>
                            <b-form-select-option :value="null" disabled>Select PE Judgment</b-form-select-option>
                        </template>
                    </b-form-select>
                </b-form-group>
            </b-col>
        </b-row>
        <hr>
        <b-row class="p-2 ml-3 mr-3">
             <b-col>
                <b-form-group 
                    label-size="sm" 
                    label-for="slc_qc_passed_date" 
                    label="QC Passed Target Date:">
                    <b-form-datepicker 
                        id="slc_qc_passed_date" 
                        placeholder="Choose a date" 
                        class="die_sample_datepicker"
                        hide-header
                        :date-format-options="{ year: 'numeric', month: 'numeric', day: 'numeric' }"
                        ></b-form-datepicker>
                </b-form-group>
            </b-col>
            <b-col>
                <b-form-group 
                    label-size="sm" 
                    label-for="slc_parts_gathering" 
                    label="Parts Gathering:">
                    <b-form-datepicker 
                        id="slc_parts_gathering" 
                        placeholder="Choose a date" 
                        class="die_sample_datepicker"
                        hide-header
                        :date-format-options="{ year: 'numeric', month: 'numeric', day: 'numeric' }"
                        ></b-form-datepicker>
                </b-form-group>
            </b-col>
        </b-row>
        <b-row class="p-2 ml-3 mr-3">
            <b-col cols="6">
                <b-form-group 
                    label-size="sm" 
                    label-for="slc_dfm_target_date" 
                    label="DFM Target Date:">
                    <b-form-datepicker 
                        id="slc_dfm_target_date" 
                        placeholder="Choose a date" 
                        class="die_sample_datepicker"
                        hide-header
                        :date-format-options="{ year: 'numeric', month: 'numeric', day: 'numeric' }"
                        ></b-form-datepicker>
                </b-form-group>
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
                    title="Click to Update Die Sample"
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
    data(){
        return{
            selected_judgement: null,
            options: [
                {value: 'Good', text: 'Good'},
                {value: 'No Good', text: 'No Good'}
            ]
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
    .die_sample_datepicker{
        position:unset;
        top: unset;
        max-width: unset;
        overflow: unset;
        flex-wrap: unset;
        box-shadow: unset;
    }
</style>