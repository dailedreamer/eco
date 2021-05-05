<template>
    <b-container fluid>
        <b-modal id="email_modal_id" size="xl" scrollable centered :no-close-on-backdrop="true" >
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
                                        <b-form-input id="txt_subject" disabled v-model="get_data.subject"></b-form-input>
                                    </b-col>
                                </b-row>
                            </b-col>
                            <b-col cols="6">
                                <b-row class="my-1">
                                    <b-col sm="4">
                                        <label for="txt_classification">Classification: </label>
                                    </b-col>
                                    <b-col sm="8">
                                        <b-form-input id="txt_classification" type="text" disabled v-model="get_data.email_classification"></b-form-input>
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
                                            label="middle_name" 
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
                                            label="full_name" 
                                            track-by="id" 
                                            :options="to_employee_options" 
                                            :multiple="true" 
                                            :taggable="true" 
                                            @tag="addTag">
                                        </multiselect>
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
                                            label="middle_name" 
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
                                            label="full_name" 
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
                                            label="middle_name"  
                                            track-by="id" 
                                            :options="mr_section_options" 
                                            :multiple="true" 
                                            :taggable="true" 
                                            @tag="addTag"></multiselect> <!-- label="middle_name" change to label="section" -->
                                    </b-col>
                                    <b-col cols="6">
                                        <multiselect  
                                            v-model="mr_employee_value" 
                                            tag-placeholder="Add this as new tag" 
                                            placeholder="List of Employees" 
                                            label="full_name" 
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
    props: {
        get_data: Object,
    },
    data() {
        return {
            to_section_value: [],
            to_section_options: [],
            to_employee_value: [],
            to_employee_options: [],
            cc_section_value: [],
            cc_section_options: [],
            cc_employee_value: [],
            cc_employee_options: [],
            mr_section_value: [],
            mr_section_options: [],
            mr_employee_value: [],
            mr_employee_options: [],
        }
    },
    mounted(){
        this.loadToSection();
        this.loadCcSection();  
        this.loadMainSection();  
        this.loadToEmployee();
        this.loadCcEmployee();
        this.loadMainEmployee();
    },
    methods: {
        addTag(newTag) {
            console.log("newTag", newTag);
        },
        loadToSection(){
            this.$store.dispatch("loadSection")
            .then((response) => {
                 this.to_section_options = response.data;
            })
        },
        loadCcSection(){
            this.$store.dispatch("loadSection")
            .then((response) => {
                 this.cc_section_options = response.data;
            })
        },
        loadMainSection(){
            this.$store.dispatch("loadSection")
            .then((response) => {
                 this.mr_section_options = response.data;
            })
        },
        loadToEmployee(){
            this.$store.dispatch("loadEmployee")
            .then((response) => {
                let data = response.data;
                for(const [key, value] of Object.entries(data))
                {
                    console.log(key);
                    value['full_name'] = value.first_name+' '+value.last_name
                }
                 this.to_employee_options = data;
            })
        },
        loadCcEmployee(){
            this.$store.dispatch("loadEmployee")
            .then((response) => {
                let data = response.data;
                for(const [key, value] of Object.entries(data))
                {
                    console.log(key);
                    value['full_name'] = value.first_name+' '+value.last_name
                }
                 this.cc_employee_options = data;
            })
        },
        loadMainEmployee(){
            this.$store.dispatch("loadEmployee")
            .then((response) => {
                let data = response.data;
                for(const [key, value] of Object.entries(data))
                {
                    console.log(key);
                    value['full_name'] = value.first_name+' '+value.last_name
                }
                this.mr_employee_options = data;
            })
        },
    }
}
</script>

<style scoped>
   
</style>