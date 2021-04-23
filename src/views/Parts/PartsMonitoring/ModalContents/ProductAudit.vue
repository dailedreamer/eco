<template>
  <b-container fluid>
    <Header part_number="KDTEST" page_title="Product Audit"/>
        <b-row class="p-2 mt-3 mb-2">
            <b-col cols="6">
                <b-form-group 
                    label-size="sm" 
                    label-for="product_audit_necessary" 
                    label="Necessary:"
                    label-cols-sm="4"
                    label-align-sm="left">
                    <b-form-radio-group
                        class="mt-1"
                        v-model="product_audit_selected"
                        :options="necessary_options"
                        value-field="item"
                        text-field="name">
                    </b-form-radio-group>
                </b-form-group>
            </b-col>
        </b-row>
        <b-row class="p-2 mb-3">
            <b-col cols="4">
                <b-form-group 
                    label-size="sm" 
                    label-for="txt_quality_required" 
                    label="Quality Required:">
                    <b-form-input
                        id="txt_quality_required"
                        name="txt_quality_required"
                        type="text"
                        required
                        placeholder="Enter Quality Required"
                        autocomplete="off"/>
                </b-form-group>
            </b-col>
            <b-col cols="4">
                <b-form-group 
                    label-size="sm" 
                    label-for="txt_result" 
                    label="Result:">
                    <b-form-input
                        id="txt_result"
                        name="txt_result"
                        type="text"
                        required
                        placeholder="Enter Result"
                        autocomplete="off"/>
                </b-form-group>
            </b-col>
            <b-col cols="4">
                <b-form-group 
                    label-size="sm" 
                    label-for="txt_remarks" 
                    label="Remarks:">
                    <b-form-input
                        id="txt_remarks"
                        name="txt_remarks"
                        type="text"
                        required
                        placeholder="Enter Remarks"
                        autocomplete="off"/>
                </b-form-group>
            </b-col>
        </b-row>
        <b-row class="footer pt-2 pb-4">
            <b-col cols="12">
                <b-button 
                    class="float-right"
                    size="sm" 
                    variant="outline-secondary"
                    title="Click to Clear Inputs"
                    @click="clearInputs()">
                    <font-awesome-icon 
                        icon="times-circle" 
                        class="icon"/> 
                        Clear
                </b-button>
                <b-button 
                    class="float-right mr-2"
                    id="btn_update" 
                    size="sm" 
                    variant="danger" 
                    type="submit"
                    title="Click to Update Product Audit"
                    @click="update()">
                    <font-awesome-icon 
                        icon="save" 
                        class="icon"/> 
                        Update
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
    data(){
        return{
            die_drawing_selected: '',
            necessary_options: [
                { item: 'Yes', name: 'Yes'},
                { item: 'No', name: 'No'},
            ],
        }
    },
    methods:{
        update: function(){
            alert('Succesfully Updates');
        },
        clearInputs: function(){
            alert('Clear Inputs');
        }
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