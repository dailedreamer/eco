<template>
    <b-container fluid>
        <b-modal id="email_modal_id" size="lg" scrollable centered :no-close-on-backdrop="true">
            <template #modal-header="" >
                <b-media>
                    <template #aside>
                        <b-img 
                            :src="require('../../../assets/icon_images/edit_email.svg')" 
                            width="44" 
                            height="37" 
                            alt="placeholder">
                        </b-img>
                    </template>
                    <h5 class="mt-2">Update Email Recipient</h5>
                </b-media>
            </template>

            <b-row>
                <b-col cols="12">
                    <b-card class="card border-0">
                        <b-row>
                            <b-col cols="6">
                                <b-row class="my-1">
                                    <b-col sm="4">
                                        <label for="txt_subject">Subject: </label>
                                    </b-col>
                                    <b-col sm="8">
                                        <b-form-input id="txt_subject" type="text" disabled></b-form-input>
                                    </b-col>
                                </b-row>
                            </b-col>
                            <b-col cols="6">
                                <b-row class="my-1">
                                    <b-col sm="4">
                                        <label for="txt_classification">Classification: </label>
                                    </b-col>
                                    <b-col sm="8">
                                        <b-form-input id="txt_classification" type="text" disabled></b-form-input>
                                    </b-col>
                                </b-row>
                            </b-col>
                        </b-row>
                    </b-card>
                </b-col>
            </b-row>

            <b-row>
                <b-col cols="12">
                    <div>
                        <b-card>
                            <b-form-group label-cols-lg="2" label="To:">
                                <b-row>
                                    <b-col cols="6">
                                        <multiselect  
                                            v-model="to_section_value" 
                                            tag-placeholder="Add this as new tag" 
                                            placeholder="List of Sections" 
                                            label="section" 
                                            track-by="id" 
                                            :options="to_section_options" 
                                            :multiple="true" 
                                            :taggable="true" 
                                            @tag="addTag"></multiselect>
                                    </b-col>
                                    <b-col cols="6">
                                        <multiselect 
                                            v-model="to_employee_value" 
                                            tag-placeholder="Add this as new tag" 
                                            placeholder="List of Employees" 
                                            label="name" 
                                            track-by="id" 
                                            :options="to_employee_options" 
                                            :multiple="true" 
                                            :taggable="true" 
                                            @tag="addTag"></multiselect>
                                    </b-col>
                                </b-row>
                            </b-form-group>
                        </b-card>
                    </div>
                </b-col>  
            </b-row>
            <b-row>
                    <b-col cols="12">
                    <div>
                        <b-card>
                            <b-form-group label-cols-lg="2" label="CC:">
                                <b-row>
                                    <b-col>
                                        <multiselect 
                                            v-model="cc_section_value" 
                                            tag-placeholder="Add this as new tag" 
                                            placeholder="List of Sections" 
                                            label="section" 
                                            track-by="id" 
                                            :options="cc_section_options" 
                                            :multiple="true" 
                                            :taggable="true" 
                                            @tag="addTag"></multiselect>
                                    </b-col>
                                    <b-col cols="6">
                                        <multiselect  
                                            v-model="cc_employee_value" 
                                            tag-placeholder="Add this as new tag" 
                                            placeholder="List of Employees" 
                                            label="name" 
                                            track-by="id" 
                                            :options="cc_employee_options" 
                                            :multiple="true" 
                                            :taggable="true" 
                                            @tag="addTag"></multiselect>
                                    </b-col>
                                </b-row>
                            </b-form-group>
                        </b-card>
                    </div>
                </b-col>  
            </b-row>
            <b-row>
                <b-col cols="12">
                    <div>
                        <b-card>
                            <b-form-group label-cols-lg="2" label="MAIN RECIPIENT:">
                                <b-row>
                                    <b-col cols="6">
                                        <multiselect 
                                            v-model="mr_section_value" 
                                            tag-placeholder="Add this as new tag" 
                                            placeholder="List of Sections" 
                                            label="section" 
                                            track-by="id" 
                                            :options="mr_section_options" 
                                            :multiple="true" 
                                            :taggable="true" 
                                            @tag="addTag"></multiselect>
                                    </b-col>
                                    <b-col cols="6">
                                        <multiselect  
                                            v-model="mr_employee_value" 
                                            tag-placeholder="Add this as new tag" 
                                            placeholder="List of Employees" 
                                            label="name" 
                                            track-by="id" 
                                            :options="mr_employee_options" 
                                            :multiple="true" 
                                            :taggable="true" 
                                            @tag="addTag"></multiselect>
                                    </b-col>
                                </b-row>
                            </b-form-group>
                        </b-card>
                    </div>
                </b-col>  
            </b-row>

            <template #modal-footer="{ saveUpdate, hide }">
                <b-button size="sm" variant="danger" @click="saveUpdate">
                    <font-awesome-icon icon="save" /> Save Values
                </b-button>
                <b-button size="sm" variant="primary" @click="hide('close')">
                    <font-awesome-icon icon="times-circle" /> Close 
                </b-button>
            </template>      
        </b-modal>   
    </b-container>
</template>

<script>
import Multiselect from 'vue-multiselect'
export default {
    name: 'EmailUpdateModal',
    components:{
         Multiselect
    },
    data() {
      return {
        //TO RECIPIENT
        to_section_value: [],
        to_section_options: [
            { section: 'MIS', id: '1' },
            { section: 'Units PE', id: '2' },
            { section: 'Parts PE', id: '3' },
            { section: 'PC', id: '4'},
            { section: 'Purchasing', id: '5'}
        ],
        to_employee_value: [],
        to_employee_options: [
            { name: 'MIS', id: '1' },
            { name: 'Units PE', id: '2' },
            { name: 'Parts PE', id: '3' },
            { name: 'PC', id: '4'},
            { name: 'Purchasing', id: '5'}
        ],
        //CC RECIPIENT
        cc_section_value: [],
        cc_section_options: [
            { section: 'MIS', id: '1' },
            { section: 'Units PE', id: '2' },
            { section: 'Parts PE', id: '3' },
            { section: 'PC', id: '4'},
            { section: 'Purchasing', id: '5'}
        ],
        cc_employee_value: [],
        cc_employee_options: [
            { name: 'MIS', id: '1' },
            { name: 'Units PE', id: '2' },
            { name: 'Parts PE', id: '3' },
            { name: 'PC', id: '4'},
            { name: 'Purchasing', id: '5'}
        ],
        //MAIN RECIPIENT
        mr_section_value: [],
        mr_section_options: [
            { section: 'MIS', id: '1' },
            { section: 'Units PE', id: '2' },
            { section: 'Parts PE', id: '3' },
            { section: 'PC', id: '4'},
            { section: 'Purchasing', id: '5'}
        ],
        mr_employee_value: [],
        mr_employee_options: [
            { name: 'MIS', id: '1' },
            { name: 'Units PE', id: '2' },
            { name: 'Parts PE', id: '3' },
            { name: 'PC', id: '4'},
            { name: 'Purchasing', id: '5'}
        ],
      }
    },
    computed:{
       
    },
    methods: {
        addTag(newTag) {
        console.log("newTag", newTag);
        },
        
    }
}
</script>

<style scoped>
   
</style>