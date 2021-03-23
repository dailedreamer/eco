<template>
  <b-container fluid>
    <Header part_number="KDTEST" page_title="Die Trial Details"/>
        <b-row class="pt-2">
            <b-col>
                <b-row>
                    <b-col cols="6">
                        <b-form-group label-size="sm" label-for="trial_number" label="Trial Number:">
                            <b-form-input
                            id="trial_number"
                            name="trial_number"
                            type="text"
                            required
                            />
                        </b-form-group>
                    </b-col>
                </b-row>
                <b-row>
                    <b-col>
                        <b-form-group label-size="sm" label-for="plan_date" label="Plan Date:">
                            <b-form-input
                            id="plan_date"
                            name="plan_date"
                            type="text"
                            required
                            />
                        </b-form-group>
                    </b-col>
                    <b-col>
                        <b-form-group label-size="sm" label-for="actual_date" label="Actual Date:">
                            <b-form-input
                            id="actual_date"
                            name="actual_date"
                            type="text"
                            required
                            />
                        </b-form-group>
                    </b-col>
                </b-row>
                <b-row>
                    <b-col>
                        <b-form-group label-size="sm" label-for="start_trial" label="Start Trial:">
                            <b-form-input
                            id="start_trial"
                            name="start_trial"
                            type="text"
                            required
                            />
                        </b-form-group>
                    </b-col>
                    <b-col>
                        <b-form-group label-size="sm" label-for="finish_trial" label="Finish Trial:">
                            <b-form-input
                                id="finish_trial"
                                name="finish_trial"
                                type="text"
                                required
                            />
                        </b-form-group>
                    </b-col>
                </b-row>
                <b-row>
                    <b-col>
                        <b-form-group label-size="sm" label-for="start_trial" label="QC Judgement:">
                            <b-form-select 
                                name="qc_judgement"
                                required>
                            </b-form-select>
                        </b-form-group>
                    </b-col>
                    <b-col>
                        <b-form-group label-size="sm" label-for="finish_trial" label="PE Judgement:">
                            <b-form-select 
                                name="pe_judgement"
                                required>
                            </b-form-select>
                        </b-form-group>
                    </b-col>
                </b-row>
                <b-row>
                    <b-col>
                        <b-form-group label-size="sm" label-for="remarks" label="Remarks:">
                            <b-form-textarea
                                id="remarks"
                                name="remarks"
                                type="text"
                                rows="5"
                                max-rows="7"
                                required
                            />
                        </b-form-group>
                    </b-col>
                </b-row>
                 <b-row>
                    <b-col>
                    </b-col>
                </b-row>
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
                    <b-col>
                        
                    </b-col>
                </b-rows>
            </b-col>
        </b-row>
        <b-row class="footer p-2 pt-4 pb-4">
            <b-col cols="6">
                <b-row class="pb-2">
                    <b-col cols="6">
                        <b-button 
                            variant="secondary" 
                            block
                            type="submit"
                            id="button-submit"
                            size="sm"
                            >
                            <font-awesome-icon
                            icon="trash"
                            class="icon"
                            />
                            Clear
                        </b-button>
                    </b-col>
                    <b-col cols="6">
                        <b-button 
                            variant="danger" 
                            block
                            type="submit"
                            id="button-submit"
                            size="sm"
                            >
                            <font-awesome-icon
                            icon="save"
                            class="icon"
                            />
                            Save
                        </b-button>
                    </b-col>
                </b-row>
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
</style>