<template>
    <b-container fluid>
        <b-modal 
            id="email_modal_id" 
            size="xl" 
            scrollable 
            hide-footer
            :no-close-on-backdrop="true" 
            centered>
            <template #modal-title="" >
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
            <b-row class="ml-3 mr-3 mt-3 mb-3" >
                <b-col cols="12">
                    <b-form-group
                        label="Subject:"
                        label-for="txt_subject"
                        label-cols-sm="3"
                        label-align-sm="left">
                        <b-form-input 
                            id="txt_subject" 
                            v-model="get_data.subject"
                            disabled></b-form-input>
                    </b-form-group>
                    <b-form-group
                        label="Classification:"
                        label-for="txt_classification"
                        label-cols-sm="3"
                        label-align-sm="left">
                        <b-form-input  
                            id="txt_classification" 
                            v-model="get_data.email_classification"
                            disabled></b-form-input>
                    </b-form-group>  
                </b-col>
            </b-row>
            <b-form 
                id="form-save-email"
                @submit.prevent="updateForm"
                method="post">
                <b-row class="mr-3 ml-3">
                    <b-col cols="12">
                        <div>
                            <b-card>
                                <b-form-group label-cols-lg="2" label="To:">
                                    <b-row>
                                        <b-col cols="6">
                                            <multiselect  
                                                v-model="form.to_section.to_section_value" 
                                                tag-placeholder="Add this as new tag" 
                                                placeholder="List of Sections" 
                                                label="section" 
                                                track-by="id" 
                                                :options="to_section_options" 
                                                :multiple="true" 
                                                :show-labels="false"
                                                @tag="addTag"></multiselect>
                                        </b-col>
                                        <b-col cols="6">
                                            <multiselect 
                                                v-model="form.to_employee.to_employee_value" 
                                                tag-placeholder="Add this as new tag" 
                                                placeholder="List of Employees" 
                                                label="full_name" 
                                                track-by="employee_number" 
                                                :options="to_employee_options" 
                                                :multiple="true" 
                                                :show-labels="false" 
                                                @tag="addTag">
                                            </multiselect>
                                        </b-col>
                                    </b-row>
                                </b-form-group>
                            </b-card>
                        </div>
                    </b-col>  
                </b-row>
                <b-row class="mr-3 ml-3 mt-3">
                    <b-col cols="12">
                        <div>
                            <b-card>
                                <b-form-group label-cols-lg="2" label="CC:">
                                    <b-row>
                                        <b-col>
                                            <multiselect 
                                                v-model="form.cc_section.cc_section_value" 
                                                tag-placeholder="Add this as new tag" 
                                                placeholder="List of Sections" 
                                                label="section" 
                                                track-by="id" 
                                                :options="cc_section_options" 
                                                :multiple="true" 
                                                :show-labels="false"
                                                @tag="addTag"></multiselect>
                                        </b-col>
                                        <b-col cols="6">
                                            <multiselect  
                                                v-model="form.cc_employee.cc_employee_value" 
                                                tag-placeholder="Add this as new tag" 
                                                placeholder="List of Employees" 
                                                label="full_name" 
                                                track-by="employee_number" 
                                                :options="cc_employee_options" 
                                                :multiple="true" 
                                                :show-labels="false"
                                                @tag="addTag"></multiselect>
                                        </b-col>
                                    </b-row>
                                </b-form-group>
                            </b-card>
                        </div>
                    </b-col>  
                </b-row>
                <b-row class="mr-3 ml-3 mt-3 mb-4">
                    <b-col cols="12">
                        <div>
                            <b-card>
                                <b-form-group 
                                    label-cols-lg="2" 
                                    label="MAIN RECIPIENT:">
                                    <b-row>
                                        <b-col cols="6">
                                            <multiselect 
                                                v-model="form.mr_section.mr_section_value" 
                                                tag-placeholder="Add this as new tag" 
                                                placeholder="List of Sections" 
                                                label="section"  
                                                track-by="id" 
                                                :options="mr_section_options" 
                                                :multiple="true"  
                                                :show-labels="false"
                                                @tag="addTag"></multiselect> 
                                        </b-col>
                                        <b-col cols="6">
                                            <multiselect  
                                                v-model="form.mr_employee.mr_employee_value" 
                                                tag-placeholder="Add this as new tag" 
                                                placeholder="List of Employees" 
                                                label="full_name" 
                                                track-by="employee_number" 
                                                :options="mr_employee_options" 
                                                :multiple="true"  
                                                :show-labels="false"
                                                @tag="addTag"
                                                :searchable="true"></multiselect> 
                                        </b-col>
                                    </b-row>
                                </b-form-group>
                            </b-card>
                        </div>
                    </b-col>  
                </b-row>
                <hr>
                <b-row class="mt-3 mb-3">
                    <b-col cols="12">
                        <b-button 
                            class="float-right mr-2"
                            size="sm" 
                            variant="outline-secondary"
                            title="Click to Clear Inputs">
                            <font-awesome-icon 
                                icon="times-circle" /> Clear
                        </b-button>
                        <b-button 
                            class="float-right mr-2"
                            id="btn_update" 
                            size="sm" 
                            variant="danger" 
                            type="submit"
                            title="Click to Save Email Recipient">
                            <font-awesome-icon 
                                icon="save" /> Save Values
                        </b-button> 
                    </b-col>
                </b-row>
            </b-form>
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
            // to_section_value: [],
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
            form: {
                to_section:{
                    to_section_value: [],
                    state: null,
                    validation: "",
                },
                cc_section:{
                    cc_section_value: [],
                    state: null,
                    validation: "",
                },
                mr_section:{
                    mr_section_value: [],
                    state: null,
                    validation: "",
                },
                to_employee:{
                    to_employee_value: [],
                    state: null,
                    validation: "",
                },
                cc_employee:{
                    cc_employee_value: [],
                    state: null,
                    validation: "",
                },
                mr_employee:{
                    mr_employee_value: [],
                    state: null,
                    validation: "",
                },
            }
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
        addTag: function(newTag) {
            console.log("newTag", newTag);
        },
        loadToSection: function(){
            this.$store.dispatch("loadSection")
            .then((response) => {
                let data = response.data;
                Object.keys(data).forEach((key) => {
                    this.to_section_options.push({
                        'id':data[key], 
                        'section':data[key], 
                    })
                });
            })
        },
        loadCcSection: function(){
            this.$store.dispatch("loadSection")
            .then((response) => {
                let data = response.data;
                Object.keys(data).forEach((key) => {
                    this.cc_section_options.push({
                        'id':data[key], 
                        'section':data[key], 
                    })
                });
            })
        },
        loadMainSection: function(){
            this.$store.dispatch("loadSection")
            .then((response) => {
                 let data = response.data;
                Object.keys(data).forEach((key) => {
                    this.mr_section_options.push({
                        'id':data[key], 
                        'section':data[key], 
                    })
                });
            })
        },
        loadToEmployee: function(){
            this.$store.dispatch("loadEmployee")
            .then((response) => {
                // console.log(response)
                let data = response.data;
                Object.keys(data).forEach((key) => {
                    this.to_employee_options.push({
                        'employee_number':data[key].employee_number, 
                        'full_name':data[key].first_name + '' + data[key].last_name
                    })
                });
            })
        },
        loadCcEmployee: function(){
            this.$store.dispatch("loadEmployee")
            .then((response) => {
                let data = response.data;
                Object.keys(data).forEach((key) => {
                    this.cc_employee_options.push({
                        'employee_number':data[key].employee_number, 
                        'full_name':data[key].first_name + '' + data[key].last_name
                    })
                });
            })
        },
        loadMainEmployee: function(){
            this.$store.dispatch("loadEmployee")
            .then((response) => {
                let data = response.data;
                Object.keys(data).forEach((key) => {
                    this.mr_employee_options.push({
                        'employee_number':data[key].employee_number, 
                        'full_name':data[key].first_name + '' + data[key].last_name
                    })
                });
            })
        },
        updateForm: function(){
            var formData = new FormData(document.getElementById("form-save-email"));
            var patchData = {
                id: this.get_data.id,
                formData: formData,
            };
            document.getElementById("btn_update").disabled = true;
            this.$store
            .dispatch("updateEmail", patchData)
            .then((response) => {
                console.log(response)
                // let status = response.status;
                // if(status == "Success"){
                //     this.toast(status, response.data.message);
                // }else if(status == "Warning"){
                //     Object.keys(response.data.data).forEach((key) => {
                //         this.form[key]["state"] = false;
                //         this.form[key]["validation"] = response.data.data[key][0];
                //     });
                //     this.toast(status, "Please review your inputs.");
                // }else if(status == "Error"){
                //     this.toast(status, response.data.message);
                //
            })
            // .catch((error) => {
            //     let error_data = error.data;
            //     let status = error.data.status;
            //     console.log(error_data.error);
            //     for(const[key] of Object.entries(error_data.error))
            //     {
            //         this.toast(status,error_data.error[key][0]);
            //     };
            //     this.clearForm();
            // })
            // .finally(() => {
            // });
        },
        // toast: function (status, message){
        //     this.$toast(message, {
        //         type:status.toLowerCase().trim(),
        //         position: "bottom-right",
        //     });
        // }
    }
}
</script>

<style scoped>
   
</style>