<template>
  <b-container fluid>
    <Header part_number="KDTEST" page_title="Lot Delivery"/>
        <b-row class="mt-2 mb-4">
            <b-col>
                <b-button 
                    class="float-right"
                    variant="danger" 
                    type="submit"
                    id="button-submit"
                    size="sm"
                    title="Click to Add"
                    @click="add()">
                    <font-awesome-icon
                        icon="plus"
                        class="icon"/>
                        Add
                </b-button>
                <b-button 
                    class="float-right mr-2"
                    variant="danger"
                    type="submit"
                    id="button-submit"
                    size="sm"
                    title="Click to View"
                    @click="view()">
                    <font-awesome-icon
                        icon="eye"
                        class="icon"/>
                        View
                </b-button>
            </b-col>
        </b-row>
        <b-row class="p-2">
            <b-col cols="6">
                <b-media class="mt-3 mb-3">
                    <center>
                        <h6 class="mb-0"><strong> Delivery SChedule </strong></h6>
                    </center>
                </b-media>
                <b-row class="mr-3 ml-3">
                    <b-col>
                        <b-form-group 
                            label-size="sm" 
                            label-for="slc_plan_date" 
                            label="Plan Date:">
                            <b-form-datepicker
                                id="slc_plan_date" 
                                placeholder="Choose date" 
                                class="lot_delivery_datepicker"
                                hide-header
                                :date-format-options="{ year: 'numeric', month: 'numeric', day: 'numeric' }"
                                ></b-form-datepicker>
                        </b-form-group>
                        <b-form-group 
                            label-size="sm" 
                            label-for="slc_actual_date" 
                            label="Actual Date:">
                            <b-form-datepicker
                                id="slc_actual_date" 
                                placeholder="Choose date" 
                                class="lot_delivery_datepicker"
                                hide-header
                                :date-format-options="{ year: 'numeric', month: 'numeric', day: 'numeric' }"
                                ></b-form-datepicker>
                        </b-form-group>
                        <b-form-group 
                            label-size="sm" 
                            label-for="txt_delivery_sched_quantity" 
                            label="Quantity:">
                            <b-form-input
                                id="txt_delivery_sched_quantity"
                                name="txt_delivery_sched_quantity"
                                type="text"
                                required
                                placeholder="Enter Quantity"
                                @keypress="isNumber($event)"
                                autocomplete="off"/>
                        </b-form-group>
                    </b-col>
                </b-row> 
            </b-col>
            <b-col cols="6" class="card_white">
                <b-media class="mt-3 mb-3">
                    <center>
                        <h6 class="mb-0"><strong> Inspection Result </strong></h6>
                    </center>
                </b-media>
                <b-row class="mr-3 ml-3">
                    <b-col>
                        <b-form-group 
                            label-size="sm" 
                            label-for="slc_received_date" 
                            label="Received Date:">
                            <b-form-datepicker
                                id="slc_received_date" 
                                placeholder="Choose date" 
                                class="lot_delivery_datepicker"
                                hide-header
                                :date-format-options="{ year: 'numeric', month: 'numeric', day: 'numeric' }"
                                ></b-form-datepicker>
                        </b-form-group>
                        <b-form-group 
                            label-size="sm" 
                            label-for="txt_inspection_result_quantity" 
                            label="Quantity:">
                            <b-form-input
                                id="txt_inspection_result_quantity"
                                name="txt_inspection_result_quantity"
                                type="text"
                                required
                                placeholder="Enter Quantity"
                                @keypress="isNumber($event)"
                                autocomplete="off"/>
                        </b-form-group>
                        <b-form-group 
                            label-size="sm" 
                            label-for="slc_qc_judgement" 
                            label="QC Judgement:">
                            <b-form-select 
                                id="slc_qc_judgement"
                                v-model="qc_selected_judgement" 
                                :options="qc_judgement_options">
                                <template #first>
                                    <b-form-select-option :value="null" disabled>Select Judgement</b-form-select-option>
                                </template>
                            </b-form-select>
                        </b-form-group>
                    </b-col>
                </b-row> 
            </b-col>
        </b-row>
        <b-row class="p-2 mt-2">
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
                    title="Click to Update Lot Delivery"
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
            qc_selected_judgement: null,
            qc_judgement_options: [
                {value: 'PASSED', text: 'PASSED'},
                {value: 'LSA OK', text: 'LSA OK'},
                {value: 'LSA NG', text: 'LSA NG'},
                {value: 'DIRECT SHIPMENT TO FTEC', text: 'DIRECT SHIPMENT TO FTEC'},
            ],
        }
    },
    methods:{
        isNumber: function(evt) {
            evt = (evt) ? evt : window.event;
            var charCode = (evt.which) ? evt.which : evt.keyCode;
            if ((charCode > 31 && (charCode < 48 || charCode > 57))) {
                evt.preventDefault();;
            } else {
                return true;
            }
        },
        update: function(){
            alert("Successfully Save!")
        },
        clearInputs: function(){
            alert("Clear Inputs!")
        },
        add(){
            alert("Open Add Modal")
        },
        view(){
            alert('Open View Modal')
        }
    }
}
</script>

<style scoped>
    .lot_delivery_datepicker
    {
        position:unset;
        top: unset;
        max-width: unset;
        overflow: unset;
        flex-wrap: unset;
        box-shadow: unset;
    }

    .card_white
    {
        background-color: hsl(0, 0%, 96%);
        border-radius:10px;
    }
</style>