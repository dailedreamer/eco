<template>
  <b-container fluid>
    <Header part_number="KDTEST" page_title="LotPO Issuance"/>
        <b-row class="p-2">
            <b-col cols="3">
                <strong>FTEC Request Issuance</strong>
            </b-col>
            <b-col cols="9">
                <b-row>
                    <b-col cols="6">
                        <b-form-group label-size="sm" label-for="target_delivery_date" label="Target Delivery Date:">
                            <b-form-input
                            id="target_delivery_date"
                            name="target_delivery_date"
                            type="text"
                            required
                            />
                        </b-form-group>
                    </b-col>
                     <b-col cols="6">
                        <b-form-group label-size="sm" label-for="plan_quantity" label="Quantity:">
                            <b-form-input
                            id="plan_quantity"
                            name="plan_quantity"
                            type="text"
                            required
                            />
                        </b-form-group>
                    </b-col>
                </b-row>
            </b-col>
        </b-row>
        <hr>
        <b-row class="p-2 pt-4">
            <b-col cols="3">
                  <strong>FTEC Request Issuance (to purchasing)</strong>
            </b-col>
            <b-col cols="9">
                <b-row>
                    <b-col cols="6">
                        <b-form-group label-size="sm" label-for="ftec_plan_date" label="Plan Date:">
                            <b-form-input
                            id="ftec_plan_date"
                            name="ftec_plan_date"
                            type="text"
                            required
                            />
                        </b-form-group>
                    </b-col>
                     <b-col cols="6">
                        <b-form-group label-size="sm" label-for="ftec_quantity" label="Quantity:">
                            <b-form-input
                            id="ftec_quantity"
                            name="ftec_quantity"
                            type="text"
                            required
                            />
                        </b-form-group>
                    </b-col>
                </b-row>
            </b-col>
        </b-row>
        <hr>
        <b-row class="p-2 pt-4">
            <b-col cols="3">
                <strong>1st Lot P.O Issuance (to supplier)</strong>
            </b-col>
            <b-col cols="9">
                <b-row>
                    <b-col cols="4">
                        <b-form-group label-size="sm" label-for="lot_po_plan_date" label="Plan Date:">
                            <b-form-input
                            id="lot_po_plan_date"
                            name="lot_po_plan_date"
                            type="text"
                            required
                            />
                        </b-form-group>
                    </b-col>
                     <b-col cols="4">
                        <b-form-group label-size="sm" label-for="lot_po_actual_date" label="Actual Date:">
                            <b-form-input
                            id="lot_po_actual_date"
                            name="lot_po_actual_date"
                            type="text"
                            required
                            />
                        </b-form-group>
                    </b-col>
                     <b-col cols="4">
                        <b-form-group label-size="sm" label-for="lot_po_quantity" label="Quantity:">
                            <b-form-input
                            id="lot_po_quantity"
                            name="lot_po_quantity"
                            type="text"
                            required
                            />
                        </b-form-group>
                    </b-col>
                </b-row>
            </b-col>
        </b-row>
        <hr>
        <b-row class="p-2 pt-4">
            <b-col cols="12">
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
        <hr>
        <b-row class="footer p-2 pt-4 pb-4">
            <b-col cols="3"></b-col>
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
name: "AssemblyApplication",
  components: {
    Header,
  }
}
</script>

<style scoped>

</style>