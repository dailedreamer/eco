<template>
  <b-container fluid>
    <Header part_number="KDTEST" page_title="ECO Details"/>
        <b-row class="p-2">
            <b-col>
                <b-form-group label-size="sm" label-for="eco_number" label="ECO Number:">
                    <b-form-input
                    id="eco_number"
                    name="eco_number"
                    type="text"
                    required
                    />
                </b-form-group>
            </b-col>
            <b-col>
                <b-form-group label-size="sm" label-for="t1_supplier_target" label="T1 Supplier Target:">
                    <b-form-input
                    id="t1_supplier_target"
                    name="t1_supplier_target"
                    type="text"
                    required
                    />
                </b-form-group>
            </b-col>
        </b-row>
        <b-row class="p-2">
            <b-col>
                <b-form-group label-size="sm" label-for="ecas_no" label="ECAS No.:">
                    <b-form-input
                    id="ecas_no"
                    name="ecas_no"
                    type="text"
                    required
                    />
                </b-form-group>
            </b-col>
            <b-col>
                <b-form-group label-size="sm" label-for="rev_details" label="Rev. Details:">
                    <b-form-input
                    id="rev_details"
                    name="rev_details"
                    type="text"
                    required
                    />
                </b-form-group>
            </b-col>
        </b-row>
        <b-row class="p-2">
            <b-col>
                <b-form-group label-size="sm" label-for="ftec_die_target" label="FTEC Die Target:">
                    <b-form-input
                    id="ftec_die_target"
                    name="ftec_die_target"
                    type="text"
                    required
                    />
                </b-form-group>
            </b-col>
            <b-col>
                <b-form-group label-size="sm" label-for="application_mark" label="Application Mark:">
                    <b-form-input
                    id="application_mark"
                    name="application_mark"
                    type="text"
                    required
                    />
                </b-form-group>
            </b-col>
        </b-row>
        <b-row class="p-2">
            <b-col>
                <b-form-group label-size="sm" label-for="target_assembly_application" label="Target Assembly Application:">
                    <b-form-input
                    id="target_assembly_application"
                    name="target_assembly_application"
                    type="text"
                    required
                    />
                </b-form-group>
            </b-col>
            <b-col cols="6">
            </b-col>
        </b-row>
          <b-row class="p-2">
            <b-col>
                <b-form-group label-size="sm" label-for="others" label="Others:">
                    <b-form-input
                    id="others"
                    name="others"
                    type="text"
                    required
                    />
                </b-form-group>
            </b-col>
            <b-col cols="6">
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
name: "AssemblyApplication",
  components: {
    Header,
  }
}
</script>

<style scoped>

</style>