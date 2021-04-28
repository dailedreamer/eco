<template>
  <b-container fluid>
    <Header 
        page_title="Drawing Issuance"
        :get_data="get_data"/>
        <b-row class="p-2 ml-3">
            <b-col cols="6">
                <b-form-group 
                    label-size="sm" 
                    label-for="txt_drawing_issuance" 
                    label="Drawing Issuance:">
                    <b-form-input
                        id="txt_drawing_issuance"
                        name="txt_drawing_issuance"
                        type="text"
                        placeholder="Enter Drawing Issuance"
                        required
                        autocomplete="off"/>
                </b-form-group>
            </b-col>
        </b-row>
        <b-row class="footer pt-2 pb-2">
            <b-col cols="12">
                <b-button 
                    class="float-right"
                    type="submit"
                    id="button-submit"
                    size="sm" 
                    variant="outline-secondary"
                    title="Click to Clear Inputs"
                    @click="clearInputs()">
                    <font-awesome-icon 
                        icon="times-circle" 
                        class="icon"/> Clear
                </b-button>
                <b-button 
                    class="float-right mr-2"
                    type="submit"
                    id="btn_save" 
                    size="sm" 
                    variant="danger"
                    title="Click to Update Drawing Issuance"
                    @click="update()">
                    <font-awesome-icon 
                        icon="save" 
                        class="icon"/>Update
                </b-button> 
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
    },
    props:{
        get_data: Object
    },
    methods:{
        update: function(){
            alert("Successfully Save!")
        },
        clearInputs: function(){
            alert("Clear Inputs!")
        }
    }
}
</script>

<style scoped>

</style>