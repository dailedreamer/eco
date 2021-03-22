<template>
  <b-container fluid>
    <Header part_number="KDTEST" page_title="LotPO Issuance"/>
        <b-row class="p-2">
            <b-col cols="3">
                <strong>Delivery Schedule</strong>
            </b-col>
            <b-col cols="9">
                <b-row>
                    <b-col cols="4">
                        <b-form-group label-size="sm" label-for="delivery_schedule_plan_date" label="Plan Date:">
                            <b-form-input
                            id="delivery_schedule_plan_date"
                            name="delivery_schedule_plan_date"
                            type="text"
                            required
                            />
                        </b-form-group>
                    </b-col>
                     <b-col cols="4">
                        <b-form-group label-size="sm" label-for="delivery_schedule_actual_date" label="Actual Date:">
                            <b-form-input
                            id="delivery_schedule_actual_date"
                            name="delivery_schedule_actual_date"
                            type="text"
                            required
                            />
                        </b-form-group>
                    </b-col>
                    <b-col cols="4">
                        <b-form-group label-size="sm" label-for="delivery_schedule_quantity" label="Quantity:">
                            <b-form-input
                            id="delivery_schedule_quantity"
                            name="delivery_schedule_quantity"
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
                  <strong>Inspection Result</strong>
            </b-col>
            <b-col cols="9">
                <b-row>
                    <b-col cols="4">
                        <b-form-group label-size="sm" label-for="inspection_result_received_date" label="Received Date:">
                            <b-form-input
                            id="inspection_result_received_date"
                            name="inspection_result_received_date"
                            type="text"
                            required
                            />
                        </b-form-group>
                    </b-col>
                     <b-col cols="4">
                        <b-form-group label-size="sm" label-for="inspection_result_quantity" label="Quantity:">
                            <b-form-input
                            id="inspection_result_quantity"
                            name="inspection_result_quantity"
                            type="text"
                            required
                            />
                        </b-form-group>
                    </b-col>
                     <b-col cols="4">
                        <b-form-group label-size="sm" label-for="inspection_result_qc_judgement" label="QC Judgement:">
                            <b-form-select 
                                name="inspection_result_qc_judgement"
                                required>
                            </b-form-select>
                        </b-form-group>
                    </b-col>
                </b-row>
            </b-col>
        </b-row>
        <hr>
        <b-row class="p-2 pt-3">
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