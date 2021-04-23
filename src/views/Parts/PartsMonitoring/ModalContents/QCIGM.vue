<template>
  <b-container fluid>
    <Header part_number="KDTEST" page_title="QC IGM"/>
        <b-row class="p-2 mb-5 mt-5">
            <b-col class='pt-3 pl-5 pr-5 pb-5'>
            <b-form-group 
                    label-size="lg" 
                    label-for="slc_plan_date" 
                    label="PLAN">
                    <b-form-datepicker 
                        id="slc_plan_date" 
                        placeholder="Choose a date" 
                        class="igm_datepicker"
                        hide-header
                        :date-format-options="{ year: 'numeric', month: 'numeric', day: 'numeric' }"
                        ></b-form-datepicker>
                </b-form-group>
            </b-col>
            <b-col class='pt-3 pl-3 pr-4 pb-5 card_white'>
                <b-form-group 
                    label-size="lg" 
                    label-for="slc_actual_date" 
                    label="ACTUAL">
                    <b-form-datepicker 
                        id="slc_actual_date" 
                        placeholder="Choose a date" 
                        class="igm_datepicker"
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
                    title="Click to Update QC IGM"
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
    name: "QCIGM",
    components: {
        Header,
    },
    methods:{
        update: function(){
            alert('Successfully Saved!');
        },
        clearInputs: function(){
            alert('Clear Inputs')
        }
    }
}
</script>

<style scoped>
.card_white
{
    background-color: hsl(0, 0%, 96%);
    border-radius:10px;
}

.igm_datepicker{
    position:unset;
    top: unset;
    max-width: unset;
    overflow: unset;
    flex-wrap: unset;
    box-shadow: unset;
}
</style>