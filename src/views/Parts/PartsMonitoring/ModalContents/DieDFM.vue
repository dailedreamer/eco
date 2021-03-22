<template>
  <b-container fluid>
    <Header part_number="KDTEST" page_title="Die DFM"/>
    <b-row class='pl-4'>
        <strong>
            Product Layout
        </strong>
    </b-row>
        <b-row class="p-3">    
            <b-col cols="12">
                <b-row>
                    <b-col cols="4">
                        <b-form-group label-size="sm" label-for="application_actual" label="Necessary:">
                            <b-form-input
                            id="application_actual"
                            name="application_actual"
                            type="text"
                            required
                            />
                        </b-form-group>
                    </b-col>
                     <b-col cols="4">
                        <b-form-group label-size="sm" label-for="application_die_status" label="FTEC Judgement:">
                            <b-form-input
                            id="application_actual"
                            name="application_actual"
                            type="text"
                            required
                            />
                        </b-form-group>
                    </b-col>
                    <b-col cols="4">
                        <b-form-group label-size="sm" label-for="application_die_status" label="Date Approval (FTEC/ FDTP):">
                            <b-form-input
                            id="application_actual"
                            name="application_actual"
                            type="text"
                            required
                            />
                        </b-form-group>
                    </b-col>
                </b-row>
                <b-row>
                    <b-col cols="4">
                        <b-form-group label-size="sm" label-for="application_actual" label="Target Date Submission:">
                            <b-form-input
                            id="application_actual"
                            name="application_actual"
                            type="text"
                            required
                            />
                        </b-form-group>
                    </b-col>
                     <b-col cols="4">
                        <b-form-group label-size="sm" label-for="application_die_status" label="Date Received from Supplier:">
                            <b-form-input
                            id="application_actual"
                            name="application_actual"
                            type="text"
                            required
                            />
                        </b-form-group>
                    </b-col>
                    <b-col cols="4">
                        <b-form-group label-size="sm" label-for="application_die_status" label="Date Sent to FTEC:">
                            <b-form-input
                            id="application_actual"
                            name="application_actual"
                            type="text"
                            required
                            />
                        </b-form-group>
                    </b-col>
                </b-row>
                <b-row>
                    <b-col cols="4">
                        <b-form-group label-size="sm" label-for="application_actual" label="Date Reviewed:">
                            <b-form-input
                            id="application_actual"
                            name="application_actual"
                            type="text"
                            required
                            />
                        </b-form-group>
                    </b-col>
                     <b-col cols="4">
                        <b-form-group label-size="sm" label-for="application_die_status" label="PE Judgement:">
                            <b-form-input
                            id="application_actual"
                            name="application_actual"
                            type="text"
                            required
                            />
                        </b-form-group>
                    </b-col>
                    <b-col cols="4">
                        <b-form-group label-size="sm" label-for="application_die_status" label="Date Sent to Supplier">
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
         <b-row class='pl-4'>
            <strong>
                Die Drawing
            </strong>
        </b-row>
        <b-row class="p-2 pt-4">
            <b-col cols="12">
                <b-row>
                    <b-col cols="4">
                        <b-form-group label-size="sm" label-for="application_actual" label="Revision Number:">
                            <b-form-input
                            id="application_actual"
                            name="application_actual"
                            type="text"
                            required
                            />
                        </b-form-group>
                    </b-col>
                     <b-col cols="4">
                        <b-form-group label-size="sm" label-for="application_die_status" label="Target Date Submission:">
                            <b-form-input
                            id="application_actual"
                            name="application_actual"
                            type="text"
                            required
                            />
                        </b-form-group>
                    </b-col>
                     <b-col cols="4">
                        <b-form-group label-size="sm" label-for="application_die_status" label="Date Received from Supplier:">
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
name: "DieDFM",
  components: {
    Header,
  }
}
</script>

<style scoped>

</style>