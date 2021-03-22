<template>
  <b-container fluid>
    <Header part_number="KDTEST" page_title="Meeting"/>
        <center>
            <b-row class="p-2 mb-5 mt-5">
                <b-col>
                    <small class="mb-1"> Tokyo-Niigata Meeting:</small>
                    <h1>10:25 PM</h1>
                    <h5>December 15, 2020</h5>
                </b-col>
            <b-col>
                    <small class="mb-1"> FTEC-FDTP Meeting:</small>
                    <h1>-</h1>
                    <h5></h5>
                </b-col>
            </b-row>
            <b-row class="p-2 mb-5">
                <b-col>
                    <small class="mb-1"> National ECPO Meeting:</small>
                    <h1>10:25 PM</h1>
                    <h5>December 15, 2020</h5>
                </b-col>
            <b-col>
                    <small class="mb-1"> Meeting with Supplier:</small>
                    <h1>03:25 PM</h1>
                    <h5>December 15, 2020</h5>
                </b-col>
            </b-row>
        </center>
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