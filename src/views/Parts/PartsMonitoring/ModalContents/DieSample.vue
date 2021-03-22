<template>
  <b-container fluid>
    <Header part_number="KDTEST" page_title="Die Sample"/>
        <b-row class="p-2">
            <b-col>
                <b-form-group label-size="sm" label-for="level" label="Level:">
                    <b-form-input
                    id="level"
                    name="level"
                    type="text"
                    required
                    />
                </b-form-group>
            </b-col>
            <b-col>
                <b-form-group label-size="sm" label-for="qty" label="Qty:">
                    <b-form-input
                    id="qty"
                    name="qty"
                    type="text"
                    required
                    />
                </b-form-group>
            </b-col>
        </b-row>
        <b-row class="p-2">
            <b-col>
                <b-form-group label-size="sm" label-for="target_del_date" label="Target Del Date:">
                    <b-form-input
                    id="target_del_date"
                    name="target_del_date"
                    type="text"
                    required
                    />
                </b-form-group>
            </b-col>
            <b-col>
                <b-form-group label-size="sm" label-for="actual_del_date" label="Actual Del Date:">
                    <b-form-input
                    id="actual_del_date"
                    name="actual_del_date"
                    type="text"
                    required
                    />
                </b-form-group>
            </b-col>
        </b-row>
        <b-row class="p-2">
            <b-col cols="6">
                <b-form-group label-size="sm" label-for="nep_in_date" label="NEP-In Date:">
                    <b-form-input
                    id="nep_in_date"
                    name="nep_in_date"
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