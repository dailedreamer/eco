<template>
  <b-container fluid>
    <Header part_number="KDTEST" page_title="Assembly Application"/>
        <b-row class="p-2">
            <b-col cols="3">
                <small>Application</small>
            </b-col>
            <b-col cols="9">
                <b-row>
                    <b-col cols="6">
                        <b-form-group label-size="sm" label-for="application_actual" label="Actual Application:">
                            <b-form-input
                            id="application_actual"
                            name="application_actual"
                            type="text"
                            required
                            />
                        </b-form-group>
                    </b-col>
                     <b-col cols="6">
                        <b-form-group label-size="sm" label-for="application_die_status" label="Die Status Before Application:">
                            <b-form-input
                            id="application_actual"
                            name="application_actual"
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
                <small>Manhour</small>
            </b-col>
            <b-col cols="9">
                <b-row>
                    <b-col cols="4">
                        <b-form-group label-size="sm" label-for="application_actual" label="Manhour Before:">
                            <b-form-input
                            id="application_actual"
                            name="application_actual"
                            type="text"
                            required
                            />
                        </b-form-group>
                    </b-col>
                     <b-col cols="4">
                        <b-form-group label-size="sm" label-for="application_die_status" label="Manhour After:">
                            <b-form-input
                            id="application_actual"
                            name="application_actual"
                            type="text"
                            required
                            />
                        </b-form-group>
                    </b-col>
                     <b-col cols="4">
                        <b-form-group label-size="sm" label-for="application_die_status" label="Manhour Difference:">
                            <b-form-input
                            id="application_actual"
                            name="application_actual"
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
                <small>Others</small>
            </b-col>
            <b-col cols="9">
                <b-row>
                    <b-col cols="4">
                        <b-form-group label-size="sm" label-for="carf" label="CARF:">
                            <b-form-input
                            id="carf"
                            name="carf"
                            type="text"
                            required
                            />
                        </b-form-group>
                    </b-col>
                     <b-col cols="4">
                        <b-form-group label-size="sm" label-for="serial_number" label="Serial Number:">
                            <b-form-input
                            id="serial_number"
                            name="serial_number"
                            type="text"
                            required
                            />
                        </b-form-group>
                    </b-col>
                     <b-col cols="4">
                        <b-form-group label-size="sm" label-for="assembly_remarks" label="Assembly Remarks">
                            <b-form-input
                            id="assembly_remarks"
                            name="assembly_remarks"
                            type="text"
                            required
                            />
                        </b-form-group>
                    </b-col>
                </b-row>
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