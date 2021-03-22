<template>
  <b-container fluid>
    <Header part_number="KDTEST" page_title="Parts Details"/>
        <b-row class="p-2">
            <b-col>
                <b-form-group label-size="sm" label-for="device" label="Device:">
                    <b-form-input
                    id="device"
                    name="device"
                    type="text"
                    required
                    />
                </b-form-group>
            </b-col>
            <b-col>
                <b-form-group label-size="sm" label-for="die_supplier" label="Die Supplier:">
                    <b-form-input
                    id="die_supplier"
                    name="die_supplier"
                    type="text"
                    required
                    />
                </b-form-group>
            </b-col>
        </b-row>
        <b-row class="p-2">
            <b-col>
                <b-form-group label-size="sm" label-for="model" label="Model:">
                    <b-form-input
                    id="model"
                    name="model"
                    type="text"
                    required
                    />
                </b-form-group>
            </b-col>
            <b-col>
                <b-form-group label-size="sm" label-for="parts_supplier" label="Parts Supplier:">
                    <b-form-input
                    id="parts_supplier"
                    name="parts_supplier"
                    type="text"
                    required
                    />
                </b-form-group>
            </b-col>
        </b-row>
        <b-row class="p-2">
            <b-col>
                <b-form-group label-size="sm" label-for="unit_number" label="Unit Number:">
                    <b-form-input
                    id="unit_number"
                    name="unit_number"
                    type="text"
                    required
                    />
                </b-form-group>
            </b-col>
            <b-col>
                <b-form-group label-size="sm" label-for="location_of_fabrication" label="Location of Fabrication:">
                    <b-form-input
                    id="location_of_fabrication"
                    name="location_of_fabrication"
                    type="text"
                    required
                    />
                </b-form-group>
            </b-col>
        </b-row>
        <b-row class="p-2">
            <b-col>
                <b-form-group label-size="sm" label-for="batch_number" label="Batch Number:">
                    <b-form-input
                    id="batch_number"
                    name="batch_number"
                    type="text"
                    required
                    />
                </b-form-group>
            </b-col>
            <b-col>
                <b-form-group label-size="sm" label-for="data_type" label="Data Type:">
                    <b-form-input
                    id="data_type"
                    name="data_type"
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
name: "AssemblyApplication",
  components: {
    Header,
  }
}
</script>

<style scoped>

</style>