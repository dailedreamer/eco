<template>
  <b-container fluid>
    <Header part_number="KDTEST" page_title="QC IGM"/>
        <b-row class="p-2 mb-5 mt-5">
            <b-col class='pt-3 pl-5 pr-5 pb-5'>
                <h4>PLAN</h4>
                <br>
                <br>
                <center>
                    <h5 class="ml-5 mt-5 mb-5">&nbsp;December 15, 2020</h5>
                </center>
                <br>
                <br>
                <br>
                <br>
            </b-col>
            <b-col class='pt-3 pl-3 pr-5 pb-5 card_white'>
                <h4>ACTUAL</h4>
                <br>
                <br>
                <center>
                    <h5 class="ml-5 mt-5 mb-5">&nbsp;December 15, 2020</h5>
                </center>
                <br>
                <br>
                <br>
                <br>
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
name: "QCIGM",
  components: {
    Header,
  }
}
</script>

<style scoped>
.card_white
{
    background-color: hsl(0, 0%, 96%);
    border-radius:10px;
}
</style>