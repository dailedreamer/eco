<template>
  <b-container fluid>
    <Header part_number="KDTEST" page_title="Parts Allocation"/>
        <b-row class="p-2">
            <b-col cols="2">
            </b-col>
            <b-col cols="4">
                <b-form-group label-size="sm" label-for="eco_control_number" label="ECO PAN Control Number:">
                    <b-form-input
                    id="eco_control_number"
                    name="eco_control_number"
                    type="text"
                    required
                    />
                </b-form-group>
            </b-col>
              <b-col cols="4">
                <b-form-group label-size="sm" label-for="lot_application" label="Lot Application:">
                    <b-form-input
                    id="lot_application"
                    name="lot_application"
                    type="text"
                    required
                    />
                </b-form-group>
            </b-col>
            <b-col cols="2">
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
.audit_result
{
    border-radius:50%;
    border:2px solid gray;
    height:50px;
    width:50px;
}
.block
{
    background-color: lightgray;
}
.un--block
{
    background-color: white;
}
</style>