<template>
  <b-container fluid>
    <Header part_number="KDTEST" page_title="Lot PO Issuance"/>
        <b-row>
            <b-col cols="4">
                <b-media class="mt-3 mb-5">
                    <center>
                        <h6 class="mb-0"><strong> FTEC Request Issuance </strong></h6>
                    </center>
                </b-media>
                <b-row>
                    <b-col>
                        <b-form-group 
                            label-size="sm" 
                            label-for="slc_lot_po_issuance" 
                            label="Lot PO Issuance:">
                            <b-form-datepicker
                                id="slc_lot_po_issuance" 
                                placeholder="Choose date" 
                                class="lot_po_datepicker"
                                hide-header
                                :date-format-options="{ year: 'numeric', month: 'numeric', day: 'numeric' }"
                                ></b-form-datepicker>
                        </b-form-group>
                        <b-form-group 
                            label-size="sm" 
                            label-for="txt_lot_po_quantity" 
                            label="Quantity:">
                            <b-form-input
                                id="txt_lot_po_quantity"
                                name="txt_lot_po_quantity"
                                type="text"
                                required
                                placeholder="Enter Quantity"
                                @keypress="isNumber($event)"
                                autocomplete="off"/>
                        </b-form-group>
                    </b-col>
                </b-row> 
            </b-col>
            <b-col cols="4" class="card_white">
                <b-media class="mt-3 mb-4">
                    <center>
                        <h6 class="mb-0"><strong> FTEC Request Issuance </strong></h6>
                        <small class="text-muted">(To Purchasing)</small>
                    </center>
                </b-media>
                <b-row>
                    <b-col>
                        <b-form-group 
                            label-size="sm" 
                            label-for="slc_to_purchasing_plan_date" 
                            label="Plan Date:">
                            <b-form-datepicker
                                id="slc_to_purchasing_plan_date" 
                                placeholder="Choose date" 
                                class="lot_po_datepicker"
                                hide-header
                                :date-format-options="{ year: 'numeric', month: 'numeric', day: 'numeric' }"
                                ></b-form-datepicker>
                        </b-form-group>
                        <b-form-group 
                            label-size="sm" 
                            label-for="txt_to_purchasing_quantity" 
                            label="Quantity:">
                            <b-form-input
                                id="txt_to_purchasing_quantity"
                                name="txt_to_purchasing_quantity"
                                type="text"
                                required
                                placeholder="Enter Quantity"
                                @keypress="isNumber($event)"
                                autocomplete="off"/>
                        </b-form-group>
                    </b-col>
                </b-row> 
            </b-col>
            <b-col cols="4">
                <b-media class="mt-3 mb-4">
                    <center>
                        <h6 class="mb-0"><strong> Lot P.O Issuance </strong></h6>
                        <small class="text-muted">(To Supplier)</small>
                    </center>
                </b-media>
                <b-row>
                    <b-col>
                        <b-form-group 
                            label-size="sm" 
                            label-for="slc_to_supplier_plan_date" 
                            label="Plan Date:">
                            <b-form-datepicker
                                id="slc_to_supplier_plan_date" 
                                placeholder="Choose date" 
                                class="lot_po_datepicker"
                                hide-header
                                :date-format-options="{ year: 'numeric', month: 'numeric', day: 'numeric' }"
                                ></b-form-datepicker>
                        </b-form-group>
                        <b-form-group 
                            label-size="sm" 
                            label-for="slc_to_supplier_actual_date" 
                            label="Actual Date:">
                            <b-form-datepicker
                                id="slc_to_supplier_actual_date" 
                                placeholder="Choose date" 
                                class="lot_po_datepicker"
                                hide-header
                                :date-format-options="{ year: 'numeric', month: 'numeric', day: 'numeric' }"
                                ></b-form-datepicker>
                        </b-form-group>
                        <b-form-group 
                            label-size="sm" 
                            label-for="txt_to_supplier_quantity" 
                            label="Quantity:">
                            <b-form-input
                                id="txt_to_supplier_quantity"
                                name="txt_to_supplier_quantity"
                                type="text"
                                required
                                placeholder="Enter Quantity"
                                @keypress="isNumber($event)"
                                autocomplete="off"/>
                        </b-form-group>
                    </b-col>
                </b-row> 
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
                    title="Click to Update Lot PO Issuance"
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
        }
  }
}
</script>

<style scoped>
    .lot_po_datepicker
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