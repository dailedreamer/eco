<template>
  <b-container fluid>
    <Header part_number="KDTEST" page_title="Die Quotation Details"/>
        <b-row class="p-2">
            <b-col cols="4">
                <b-form-group label-size="sm" label-for="plan_date" label="Plan Date:">
                    <b-form-input
                    id="plan_date"
                    name="plan_date"
                    type="text"
                    required
                    />
                </b-form-group>
            </b-col>
            <b-col cols="4">
                <b-form-group label-size="sm" label-for="actual_date" label="Actual Date:">
                    <b-form-input
                    id="actual_date"
                    name="actual_date"
                    type="text"
                    required
                    />
                </b-form-group>
            </b-col>
            <b-col cols="4">
            </b-col>
        </b-row>
        <b-row class="p-2">
            <b-col cols="4">
                <b-form-group label-size="sm" label-for="die_quotation_request" label="Die Quotation Request:">
                    <b-form-input
                    id="die_quotation_request"
                    name="die_quotation_request"
                    type="text"
                    required
                    />
                </b-form-group>
            </b-col>
           <b-col cols="4">
                <b-form-group label-size="sm" label-for="die_quotation_submit" label="Die Quotation Submit:">
                    <b-form-input
                    id="die_quotation_submit"
                    name="die_quotation_submit"
                    type="text"
                    required
                    />
                </b-form-group>
            </b-col>
           <b-col cols="4">
                <b-form-group label-size="sm" label-for="supplier_die_quotation_approval" label="Supplier Die Quotation Approval:">
                    <b-form-input
                    id="supplier_die_quotation_approval"
                    name="supplier_die_quotation_approval"
                    type="text"
                    required
                    />
                </b-form-group>
            </b-col>
        </b-row>
        <b-row class="p-2">
            <b-col cols="4">
                <b-form-group label-size="sm" label-for="supplier_die_quotation_send" label="Supplier's Die Quotation Send:">
                    <b-form-input
                    id="supplier_die_quotation_send"
                    name="supplier_die_quotation_send"
                    type="text"
                    required
                    />
                </b-form-group>
            </b-col>
           <b-col cols="4">
                <b-form-group label-size="sm" label-for="fdtp_die_quotation_forward" label="FDTP Die Quotation Forward:">
                    <b-form-input
                    id="fdtp_die_quotation_forward"
                    name="fdtp_die_quotation_forward"
                    type="text"
                    required
                    />
                </b-form-group>
            </b-col>
           <b-col cols="4">
                <b-form-group label-size="sm" label-for="fdtp_die_quotation_send" label="FDTP Die Quotation Send:">
                    <b-form-input
                    id="fdtp_die_quotation_send"
                    name="fdtp_die_quotation_send"
                    type="text"
                    required
                    />
                </b-form-group>
            </b-col>
        </b-row>
        <b-row class="p-2">
            <b-col cols="4">
                <b-form-group label-size="sm" label-for="die_order_issue" label="Die Order Issue:">
                    <b-form-input
                    id="die_order_issue"
                    name="die_order_issue"
                    type="text"
                    required
                    />
                </b-form-group>
            </b-col>
           <b-col cols="4">
                <b-form-group label-size="sm" label-for="die_po_issue" label="Die PO Issue:">
                    <b-form-input
                    id="die_po_issue"
                    name="die_po_issue"
                    type="text"
                    required
                    />
                </b-form-group>
            </b-col>
           <b-col cols="4">
                <b-form-group label-size="sm" label-for="po_number" label="PO Number:">
                    <b-form-input
                    id="po_number"
                    name="po_number"
                    type="text"
                    required
                    />
                </b-form-group>
            </b-col>
        </b-row>
         <b-row class="p-2">
            <b-col cols="4">
                <b-form-group label-size="sm" label-for="total_no_days" label="Total Number of Days:">
                <b-form-input
                    id="total_no_days"
                    name="total_no_days"
                    type="text"
                    required
                />
                </b-form-group>
            </b-col>
        </b-row>
        <b-row class="footer p-2 pt-4 pb-4">
            <b-col cols="3">
            </b-col>
            <b-col cols="9">
                <b-row class="pb-2">
                    <b-col cols="3"></b-col>
                    <b-col cols="3"></b-col>
                    <b-col cols="3">
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
                    <b-col cols="3">
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
name: "DieQuatationDetails",
  components: {
    Header,
  }
}
</script>

<style scoped>

</style>