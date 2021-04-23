<template>
  <b-container fluid>
    <Header part_number="KDTEST" page_title="Die Trial Details"/>
        <b-row class="pt-2">
            <b-col>
                <b-row>
                    <b-col cols="6">
                        <b-form-group 
                            label-size="sm" 
                            label-for="txt_trial_number" 
                            label="Trial Number:">
                            <b-form-input
                                id="txt_trial_number"
                                name="txt_trial_number"
                                type="text"
                                required
                                placeholder="Enter Trial No"
                                autocomplete="off"/>
                        </b-form-group>
                    </b-col>
                </b-row>
                <b-row>
                    <b-col>
                        <b-form-group 
                            label-size="sm" 
                            label-for="slc_plan_date" 
                            label="Plan Date:">
                            <b-form-datepicker 
                                id="slc_plan_date" 
                                placeholder="Choose date" 
                                class="die_trial_datepicker"
                                hide-header
                                :date-format-options="{ year: 'numeric', month: 'numeric', day: 'numeric' }"
                                ></b-form-datepicker>
                        </b-form-group>
                    </b-col>
                    <b-col>
                        <b-form-group 
                            label-size="sm" 
                            label-for="slc_actual_date" 
                            label="Actual Date:">
                            <b-form-datepicker 
                                id="slc_actual_date" 
                                placeholder="Choose date" 
                                class="die_trial_datepicker"
                                hide-header
                                :date-format-options="{ year: 'numeric', month: 'numeric', day: 'numeric' }"
                                ></b-form-datepicker>
                        </b-form-group>
                    </b-col>
                </b-row>
                <b-row>
                    <b-col>
                        <b-form-group 
                            label-size="sm" 
                            label-for="slc_start_trial" 
                            label="Start Trial:">
                            <b-form-datepicker 
                                id="slc_start_trial" 
                                placeholder="Choose date" 
                                class="die_trial_datepicker"
                                hide-header
                                :date-format-options="{ year: 'numeric', month: 'numeric', day: 'numeric' }"
                                ></b-form-datepicker>
                        </b-form-group>
                    </b-col>
                    <b-col>
                        <b-form-group 
                            label-size="sm" 
                            label-for="slc_finish_trial" 
                            label="Finish Trial:">
                            <b-form-datepicker 
                                id="slc_finish_trial" 
                                placeholder="Choose date" 
                                class="die_trial_datepicker"
                                hide-header
                                :date-format-options="{ year: 'numeric', month: 'numeric', day: 'numeric' }"
                                ></b-form-datepicker>
                        </b-form-group>
                    </b-col>
                </b-row>
                <b-row>
                    <b-col>
                        <b-form-group 
                            label-size="sm" 
                            label-for="slc_qc_judgement" 
                            label="QC Judgement:">
                            <b-form-select 
                                id="slc_qc_judgement"
                                v-model="qc_selected_judgement" 
                                :options="qc_judgement_options">
                                <template #first>
                                    <b-form-select-option :value="null" disabled>Select</b-form-select-option>
                                </template>
                            </b-form-select>
                        </b-form-group>
                    </b-col>
                    <b-col>
                        <b-form-group 
                            label-size="sm" 
                            label-for="slc_pe_judgement" 
                            label="PE Judgement:">
                            <b-form-select 
                                id="slc_pe_judgement"
                                v-model="pe_selected_judgement" 
                                :options="pe_judgement_options">
                                <template #first>
                                    <b-form-select-option :value="null" disabled>Select</b-form-select-option>
                                </template>
                            </b-form-select>
                        </b-form-group>
                    </b-col>
                </b-row>
                <b-row>
                    <b-col>
                        <b-form-group 
                            label-size="sm" 
                            label-for="txt_remarks" 
                            label="Remarks:">
                            <b-form-textarea
                                id="txt_remarks"
                                name="txt_remarks"
                                type="text"
                                rows="3"
                                max-rows="5"
                                required
                                placeholder="Enter Remarks"
                                autocomplete="off"/>
                        </b-form-group>
                    </b-col>
                </b-row>
                <b-row class="footer pt-2 pb-4">
                    <b-col>
                        <b-button 
                            class="float-right"
                            size="sm" 
                            variant="outline-secondary"
                            title="Click to Clear Inputs"
                            @click="clearInputs()">
                            <font-awesome-icon 
                                icon="times-circle" 
                                class="icon"/> 
                                Clear
                        </b-button>
                        <b-button 
                            class="float-right mr-2"
                            id="btn_update" 
                            size="sm" 
                            variant="danger" 
                            type="submit"
                            title="Click to Update Die Trial Details"
                            @click="update()">
                            <font-awesome-icon 
                                icon="save" 
                                class="icon"/> 
                                Update
                        </b-button> 
                    </b-col>
                </b-row>
                 <!-- <b-row>
                    <b-col>
                    </b-col>
                </b-row> -->
            </b-col>
            <b-col class="p-0 pt-5 card_lists">
                <b-rows>
                    <b-col>
                        <b-row no-gutters>
                            <b-col no-gutters class="card_padding">
                                <b-card no-body class='rounded  pt-1 pl-2 pr-1 pb-2 good_card'>
                                    <b-card-text>
                                        <small class='p-2'><strong>TRIAL 4</strong></small>
                                        <hr class="m-0">
                                        <b-row no-gutters>
                                            <b-col cols="6">
                                                <small class="card_label">PLAN:</small>
                                            </b-col>
                                             <b-col cols="6" class="text-left">
                                            <small class="card_label">12-2-2020</small>
                                            </b-col>
                                        </b-row>
                                        <hr class="m-0">
                                        <b-row no-gutters>
                                            <b-col cols="6">
                                                <small class="card_label">ACTUAL:</small>
                                            </b-col>
                                            <b-col cols="6" class="text-left">
                                            <small class="card_label">12-5-2020</small>
                                            </b-col>
                                        </b-row>
                                        <hr class="m-0">
                                        <b-row no-gutters>
                                            <b-col cols="6">
                                                <small class="card_label">START:</small>
                                            </b-col>
                                            <b-col cols="6" class="text-left">
                                            <small class="card_label">12-5-2020</small>
                                            </b-col>
                                        </b-row>
                                        <hr class="m-0">
                                        <b-row no-gutters>
                                            <b-col cols="6">
                                                <small class="card_label">FINISH:</small>
                                            </b-col>
                                            <b-col cols="6" class="text-left">
                                            <small class="card_label">12-5-2020</small>
                                            </b-col>
                                        </b-row>
                                       <br>
                                        <b-row no-gutters>
                                            <b-col cols="6">
                                                <small class="card_label">JUDGEMENT</small>
                                            </b-col>
                                            <b-col cols="6" class="text-left">
                                            <small class="card_label">PE JUDGEMENT</small>
                                            </b-col>
                                        </b-row>
                                         <b-row no-gutters>
                                            <b-col cols="6">
                                                <center>
                                                    <small><strong>GOOD</strong></small>
                                                </center>
                                            </b-col>
                                            <b-col cols="6" class="text-left">
                                                <center>
                                                    <small><strong>GOOD</strong></small>
                                                </center>
                                            </b-col>
                                        </b-row>
                                    </b-card-text>
                                </b-card>
                            </b-col>
                            <b-col>
                              <b-card no-body class='rounded  pt-1 pl-2 pr-1 pb-2 no_good_card'>
                                    <b-card-text>
                                        <small class='p-2'><strong>TRIAL 3</strong></small>
                                        <hr class="m-0">
                                        <b-row no-gutters>
                                            <b-col cols="6">
                                                <small class="card_label">PLAN:</small>
                                            </b-col>
                                             <b-col cols="6" class="text-left">
                                            <small class="card_label">12-2-2020</small>
                                            </b-col>
                                        </b-row>
                                        <hr class="m-0">
                                        <b-row no-gutters>
                                            <b-col cols="6">
                                                <small class="card_label">ACTUAL:</small>
                                            </b-col>
                                            <b-col cols="6" class="text-left">
                                            <small class="card_label">12-5-2020</small>
                                            </b-col>
                                        </b-row>
                                        <hr class="m-0">
                                        <b-row no-gutters>
                                            <b-col cols="6">
                                                <small class="card_label">START:</small>
                                            </b-col>
                                            <b-col cols="6" class="text-left">
                                            <small class="card_label">12-5-2020</small>
                                            </b-col>
                                        </b-row>
                                        <hr class="m-0">
                                        <b-row no-gutters>
                                            <b-col cols="6">
                                                <small class="card_label">FINISH:</small>
                                            </b-col>
                                            <b-col cols="6" class="text-left">
                                            <small class="card_label">12-5-2020</small>
                                            </b-col>
                                        </b-row>
                                       <br>
                                        <b-row no-gutters>
                                            <b-col cols="6">
                                                <small class="card_label">JUDGEMENT</small>
                                            </b-col>
                                            <b-col cols="6" class="text-left">
                                            <small class="card_label">PE JUDGEMENT</small>
                                            </b-col>
                                        </b-row>
                                         <b-row no-gutters>
                                            <b-col cols="6">
                                                <center>
                                                    <small><strong>NO GOOD</strong></small>
                                                </center>
                                            </b-col>
                                            <b-col cols="6" class="text-left">
                                                <center>
                                                    <small><strong>NO GOOD</strong></small>
                                                </center>
                                            </b-col>
                                        </b-row>
                                    </b-card-text>
                                </b-card>
                            </b-col>
                        </b-row>
                        <b-row no-gutters class='mt-2'>
                            <b-col no-gutters class="card_padding">
                                <b-card no-body class='rounded  pt-1 pl-2 pr-1 pb-2 no_good_card'>
                                    <b-card-text>
                                        <small class='p-2'><strong>TRIAL 2</strong></small>
                                        <hr class="m-0">
                                        <b-row no-gutters>
                                            <b-col cols="6">
                                                <small class="card_label">PLAN:</small>
                                            </b-col>
                                             <b-col cols="6" class="text-left">
                                            <small class="card_label">12-2-2020</small>
                                            </b-col>
                                        </b-row>
                                        <hr class="m-0">
                                        <b-row no-gutters>
                                            <b-col cols="6">
                                                <small class="card_label">ACTUAL:</small>
                                            </b-col>
                                            <b-col cols="6" class="text-left">
                                            <small class="card_label">12-5-2020</small>
                                            </b-col>
                                        </b-row>
                                        <hr class="m-0">
                                        <b-row no-gutters>
                                            <b-col cols="6">
                                                <small class="card_label">START:</small>
                                            </b-col>
                                            <b-col cols="6" class="text-left">
                                            <small class="card_label">12-5-2020</small>
                                            </b-col>
                                        </b-row>
                                        <hr class="m-0">
                                        <b-row no-gutters>
                                            <b-col cols="6">
                                                <small class="card_label">FINISH:</small>
                                            </b-col>
                                            <b-col cols="6" class="text-left">
                                            <small class="card_label">12-5-2020</small>
                                            </b-col>
                                        </b-row>
                                       <br>
                                        <b-row no-gutters>
                                            <b-col cols="6">
                                                <small class="card_label">JUDGEMENT</small>
                                            </b-col>
                                            <b-col cols="6" class="text-left">
                                            <small class="card_label">PE JUDGEMENT</small>
                                            </b-col>
                                        </b-row>
                                         <b-row no-gutters>
                                            <b-col cols="6">
                                                <center>
                                                    <small><strong>GOOD</strong></small>
                                                </center>
                                            </b-col>
                                            <b-col cols="6" class="text-left">
                                                <center>
                                                    <small><strong>GOOD</strong></small>
                                                </center>
                                            </b-col>
                                        </b-row>
                                    </b-card-text>
                                </b-card>
                            </b-col>
                            <b-col>
                                <b-card no-body class='rounded  pt-1 pl-2 pr-1 pb-2 no_good_card'>
                                    <b-card-text>
                                        <small class='p-2'><strong>TRIAL 1</strong></small>
                                        <hr class="m-0">
                                        <b-row no-gutters>
                                            <b-col cols="6">
                                                <small class="card_label">PLAN:</small>
                                            </b-col>
                                             <b-col cols="6" class="text-left">
                                            <small class="card_label">12-2-2020</small>
                                            </b-col>
                                        </b-row>
                                        <hr class="m-0">
                                        <b-row no-gutters>
                                            <b-col cols="6">
                                                <small class="card_label">ACTUAL:</small>
                                            </b-col>
                                            <b-col cols="6" class="text-left">
                                            <small class="card_label">12-5-2020</small>
                                            </b-col>
                                        </b-row>
                                        <hr class="m-0">
                                        <b-row no-gutters>
                                            <b-col cols="6">
                                                <small class="card_label">START:</small>
                                            </b-col>
                                            <b-col cols="6" class="text-left">
                                            <small class="card_label">12-5-2020</small>
                                            </b-col>
                                        </b-row>
                                        <hr class="m-0">
                                        <b-row no-gutters>
                                            <b-col cols="6">
                                                <small class="card_label">FINISH:</small>
                                            </b-col>
                                            <b-col cols="6" class="text-left">
                                            <small class="card_label">12-5-2020</small>
                                            </b-col>
                                        </b-row>
                                       <br>
                                        <b-row no-gutters>
                                            <b-col cols="6">
                                                <small class="card_label">JUDGEMENT</small>
                                            </b-col>
                                            <b-col cols="6" class="text-left">
                                            <small class="card_label">PE JUDGEMENT</small>
                                            </b-col>
                                        </b-row>
                                         <b-row no-gutters>
                                            <b-col cols="6">
                                                <center>
                                                    <small><strong>NO GOOD</strong></small>
                                                </center>
                                            </b-col>
                                            <b-col cols="6" class="text-left">
                                                <center>
                                                    <small><strong>NO GOOD</strong></small>
                                                </center>
                                            </b-col>
                                        </b-row>
                                    </b-card-text>
                                </b-card>
                            </b-col>
                        </b-row>
                    </b-col>
                    <!-- <b-col></b-col> -->
                </b-rows>
            </b-col>
        </b-row>
    </b-container>
</template>

<script>
import Header from "./ModalHeaders.vue";
export default {
    name: "DieTrialDetails",
    components: {
        Header,
    },
    data(){
        return{
            qc_selected_judgement: null,
            pe_selected_judgement: null,
            qc_judgement_options: [
                {value: 'Good', text: 'Good'},
                {value: 'No Good', text: 'No Good'},
                {value: 'Cancelled', text: 'Cancelled'},
                {value: 'Waiting/Ongoing', text: 'Waiting/Ongoing'},
            ],
            pe_judgement_options: [
                {value: 'For Hinsei', text: 'For Hinsei'},
                {value: 'For Repair', text: 'For Repair'},
                {value: 'For LSA', text: 'For LSA'},
                {value: 'For PE Evaluation', text: 'For PE Evaluation'},
            ],
        } 
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
    .card_lists
    {
        background-color:#F5F5F5; 
        border-radius:0 0 30px 30px;
        margin-top:-25px;
    }
    .card_padding
    {
        padding-right:5px;
    }
    .card_label
    {
        font-size:10px;
    }
    .good_card
    {
        border-radius:15px!important;
        border:1px solid lightgray; 
        box-shadow: 0 2px 4px 0 rgba(0,0,0,0.18);
    }
    .no_good_card
    {
        background-color: lightgray;
        border-radius:15px!important;
        border:1px solid #8080808c; 
        box-shadow: 0 2px 4px 0 rgba(0,0,0,0.18);
    }

    .die_trial_datepicker
    {
        position:unset;
        top: unset;
        max-width: unset;
        overflow: unset;
        flex-wrap: unset;
        box-shadow: unset;
    }
</style>