<template>
    <b-container fluid>
        <b-row class="mb-4">
            <b-col cols="12">
                <b-media>
                    <template #aside>
                        <b-img
                            :src="require('../../assets/icon_images/cubes.svg')"
                            width="44"
                            height="37"
                            alt="placeholder">
                        </b-img>
                    </template>
                    <h5>Users Management</h5>
                    <small 
                        class="text-secondary">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, illum.
                    </small>
                </b-media>
            </b-col>
        </b-row>
        <b-row>
            <b-col cols="12">
                <vessel>
                    <vessel-body>
                        <b-col cols="12">
                            <b-row>
                                <b-col cols="4">
                                    <b-card class="mt-3">
                                        <b-media class="mb-3">
                                            <template #aside>
                                                <b-icon 
                                                    icon="person-fill"  
                                                    font-scale="2.5" 
                                                    variant="secondary">
                                                </b-icon>
                                            </template>
                                            <h5 class="mb-0">Add User</h5>
                                            <hr class="hr_device">
                                        </b-media>
                                        <b-container fluid>
                                            <b-row>
                                                <b-col cols="12">
                                                    <b-form
                                                        id="form_user"
                                                        @submit.prevent="submitForm"
                                                        method="post"
                                                        >
                                                        <b-form-group
                                                            label-for="slc_employee_name"
                                                            label="Employee Name:"
                                                            label-cols-sm="4"
                                                            label-align-sm="left">
                                                            <multiselect  
                                                                id="slc_employee_name"
                                                                name="emp_id"
                                                                v-model="form.employee.value"
                                                                :options="employeeOptions" 
                                                                :searchable="true"
                                                                :show-labels="false"
                                                                placeholder="Select Employee" 
                                                                label="full_name" 
                                                                track-by="employee_number"
                                                            ></multiselect>
                                                        </b-form-group>

                                                        <b-form-group
                                                            label-for="slc_roles"
                                                            label="Roles:"
                                                            label-cols-sm="4"
                                                            label-align-sm="left">
                                                            <multiselect
                                                                id="slc_roles"  
                                                                name="role_id"          
                                                                v-model="form.roles.value"
                                                                :options="rolesOptions" 
                                                                :searchable="true"
                                                                :show-labels="false"
                                                                placeholder="Select Roles" 
                                                                label="role" 
                                                                track-by="id"                                               
                                                            ></multiselect>
                                                        </b-form-group>
                                                        <b-row class="float-right">
                                                            <b-button 
                                                                size="sm" 
                                                                variant="danger"
                                                                type="submit"
                                                                id="btn_add_employee">
                                                                <font-awesome-icon
                                                                    icon="save"
                                                                    class="icon"/>
                                                                    Save Values
                                                            </b-button>
                                                            <b-button 
                                                                class="ml-2"
                                                                @click="clearForm();"
                                                                size="sm" 
                                                                variant="outline-secondary">
                                                                <font-awesome-icon
                                                                    icon="trash"
                                                                    class="icon"/>
                                                                    Clear
                                                            </b-button>
                                                        </b-row>
                                                    </b-form>
                                                   
                                                </b-col>
                                            </b-row> 
                                        </b-container>
                                    </b-card>
                                </b-col>
                            </b-row>
                            <b-row class="mt-4">
                                <b-col cols="12">
                                    <b-card>
                                        <b-media>
                                            <h5 class="mb-0">Users Masterlist</h5>
                                            <small class="text-secondary">
                                                This is a description.
                                            </small>
                                        </b-media>
                                        <b-row class="mt-3">
                                            <b-col cols="6">
                                                <b-card>
                                                    <b-table 
                                                        outlined
                                                        hover
                                                        responsive
                                                        head-variant="light"
                                                        :items="user_masterlist"
                                                        :fields="user_fields"
                                                        :per-page="perPage"
                                                        :current-page="currentPage">
                                                        <template #cell(control)="">
                                                             <b-form-checkbox></b-form-checkbox>
                                                        </template>
                                                         <template #cell(no)="data">
                                                            {{data.index+1}}
                                                        </template>
                                                        <template #cell(action)="">
                                                            <!-- <b-button
                                                                class="ml-2"
                                                                size="sm" 
                                                                variant="danger"
                                                                v-b-modal.edit_module_modal_id>
                                                                <font-awesome-icon
                                                                    icon="save"
                                                                    class="icon"/>
                                                                    Edit
                                                            </b-button> -->
                                                            <b-link
                                                                v-b-modal.edit_module_modal_id>
                                                                EDIT
                                                            </b-link>
                                                        </template>
                                                    </b-table>
                                                    <b-pagination
                                                        v-model="currentPage"
                                                        :total-rows="rows"
                                                        :per-page="perPage"
                                                        align="right"
                                                        pills></b-pagination>
                                                </b-card>
                                            </b-col> 
                                            <b-col cols="6">
                                                <b-card>
                                                    <b-col cols="12">
                                                        <b-form>
                                                            <b-media>
                                                                <template #aside>
                                                                    <b-icon icon="book"  font-scale="2.5" variant="secondary"></b-icon>
                                                                </template>
                                                                <h5 class="mb-0">Modules</h5>
                                                                <hr class="hr_device">
                                                            </b-media>
                                                            <b-row class="mt-4">
                                                                <b-col cols="6">
                                                                    <b-table-simple borderless>
                                                                        <b-tbody>
                                                                            <b-tr>
                                                                                <b-th>
                                                                                    <b-form-checkbox 
                                                                                        id="chk_dashboard_id"> 
                                                                                    </b-form-checkbox>
                                                                                </b-th>
                                                                                <b-td>
                                                                                    <label 
                                                                                        for="chk_dashboard_id">
                                                                                        Dashboard
                                                                                    </label>
                                                                                </b-td>
                                                                            </b-tr>
                                                                            <b-tr>
                                                                                <b-th>
                                                                                    <b-form-checkbox 
                                                                                        id="chk_parts_management_id"> 
                                                                                    </b-form-checkbox>
                                                                                </b-th>
                                                                                <b-td>
                                                                                    <label 
                                                                                        for="chk_parts_management_id">
                                                                                        Parts Management
                                                                                    </label>
                                                                                </b-td>
                                                                            </b-tr>
                                                                            <b-tr>
                                                                                <b-th> 
                                                                                    <b-form-checkbox 
                                                                                        id="chk_user_management_id"> 
                                                                                    </b-form-checkbox>
                                                                                </b-th>
                                                                                <b-td>
                                                                                    <label 
                                                                                        for="chk_user_management_id">
                                                                                        User Management 
                                                                                    </label>
                                                                                </b-td>
                                                                            </b-tr>
                                                                            <b-tr>
                                                                                <b-th> 
                                                                                    <b-form-checkbox 
                                                                                        id="chk_email_management_id"> 
                                                                                    </b-form-checkbox>
                                                                                </b-th>
                                                                                <b-td>
                                                                                    <label 
                                                                                        for="chk_email_management_id">
                                                                                        Email Management
                                                                                    </label> 
                                                                                </b-td>
                                                                            </b-tr>
                                                                            <b-tr>
                                                                                <b-th> 
                                                                                    <b-form-checkbox 
                                                                                        id="chk_parts_registration_unit_id"> 
                                                                                    </b-form-checkbox>
                                                                                </b-th>
                                                                                <b-td>
                                                                                    <label for="chk_parts_registration_unit_id">
                                                                                        <b>PARTS:</b> Registration Unit PE 
                                                                                    </label> 
                                                                                </b-td>
                                                                            </b-tr>
                                                                            <b-tr>
                                                                                <b-th> 
                                                                                    <b-form-checkbox 
                                                                                        id="chk_parts_registration_parts_id"> 
                                                                                    </b-form-checkbox>
                                                                                </b-th>
                                                                                <b-td> 
                                                                                    <label for="chk_parts_registration_parts_id">
                                                                                        <b>PARTS:</b> Registration Parts PE 
                                                                                    </label>
                                                                                </b-td>
                                                                            </b-tr>
                                                                            <b-tr>
                                                                                <b-th> 
                                                                                    <b-form-checkbox 
                                                                                        id="chk_registered_eco_id"> 
                                                                                    </b-form-checkbox>
                                                                                </b-th>
                                                                                <b-td> 
                                                                                    <label for="chk_registered_eco_id">
                                                                                        <b>PARTS:</b> Registered ECO Parts 
                                                                                    </label>
                                                                                </b-td>
                                                                            </b-tr>
                                                                            <b-tr>
                                                                                <b-th> 
                                                                                    <b-form-checkbox 
                                                                                        id="chk_parts_monitoring_id"> 
                                                                                    </b-form-checkbox>
                                                                                </b-th>
                                                                                <b-td>
                                                                                    <label for="chk_parts_monitoring_id">
                                                                                        <b>PARTS:</b> Parts Monitoring 
                                                                                    </label>
                                                                                </b-td>
                                                                            </b-tr>
                                                                            <b-tr>
                                                                                <b-th> 
                                                                                    <b-form-checkbox 
                                                                                        id="chk_ecas_list_id"> 
                                                                                    </b-form-checkbox>
                                                                                </b-th>
                                                                                <b-td>
                                                                                    <label for="chk_ecas_list_id">
                                                                                        ECAS List
                                                                                    </label> 
                                                                                </b-td>
                                                                            </b-tr>
                                                                        </b-tbody>
                                                                    </b-table-simple>
                                                                </b-col>
                                                                <b-col cols="6">
                                                                    <b-table-simple borderless>
                                                                        <b-tbody>
                                                                            <b-tr>
                                                                                <b-th> 
                                                                                    <b-form-checkbox 
                                                                                        id="chk_ecas_approver_id"> 
                                                                                    </b-form-checkbox>
                                                                                </b-th>
                                                                                <b-td>
                                                                                    <label for="chk_ecas_approver_id">
                                                                                        ECAS Approver
                                                                                    </label> 
                                                                                </b-td>
                                                                            </b-tr>
                                                                             <b-tr>
                                                                                <b-th> 
                                                                                    <b-form-checkbox 
                                                                                        id="chk_ecas_checker_id"> 
                                                                                    </b-form-checkbox>
                                                                                </b-th>
                                                                                <b-td>
                                                                                    <label for="chk_ecas_checker_id">
                                                                                        ECAS Checker
                                                                                    </label> 
                                                                                </b-td>
                                                                            </b-tr>
                                                                            <b-tr>
                                                                                <b-th> 
                                                                                    <b-form-checkbox 
                                                                                        id="chk_process_registration_unit_id"> 
                                                                                    </b-form-checkbox>
                                                                                </b-th>
                                                                                <b-td>
                                                                                    <label for="chk_process_registration_unit_id">
                                                                                        <b>PROCESS:</b> Registration Unit PE 
                                                                                    </label>
                                                                                </b-td>
                                                                            </b-tr>
                                                                            <b-tr>
                                                                                <b-th> 
                                                                                    <b-form-checkbox 
                                                                                        id="chk_process_monitoring_id"> 
                                                                                    </b-form-checkbox>
                                                                                </b-th>
                                                                                <b-td>
                                                                                    <label for="chk_process_monitoring_id">
                                                                                        <b>PROCESS:</b> Process Monitoring
                                                                                    </label>   
                                                                                </b-td>
                                                                            </b-tr>
                                                                            <b-tr>
                                                                                <b-th> 
                                                                                    <b-form-checkbox 
                                                                                        id="chk_simultaneous_id"> 
                                                                                    </b-form-checkbox>
                                                                                </b-th>
                                                                                <b-td> 
                                                                                    <label for="chk_simultaneous_id">
                                                                                        Simultaneous
                                                                                    </label> 
                                                                                </b-td>
                                                                            </b-tr>
                                                                            <b-tr>
                                                                                <b-th> <b-form-checkbox 
                                                                                    id="chk_unit_rev_id"> 
                                                                                </b-form-checkbox>
                                                                            </b-th>
                                                                                <b-td>
                                                                                    <label for="chk_unit_rev_id">
                                                                                        Unit Rev 
                                                                                    </label>
                                                                                </b-td>
                                                                            </b-tr>
                                                                            <b-tr>
                                                                                <b-th> 
                                                                                    <b-form-checkbox 
                                                                                        id="chk_vps_application_id"> 
                                                                                    </b-form-checkbox>
                                                                                </b-th>
                                                                                <b-td> 
                                                                                    <label for="chk_vps_application_id">
                                                                                        VPS Application  
                                                                                    </label>
                                                                                </b-td>
                                                                            </b-tr>
                                                                            <b-tr>
                                                                                <b-th> 
                                                                                    <b-form-checkbox
                                                                                        id="chk_ec_action_id"> 
                                                                                    </b-form-checkbox>
                                                                                </b-th>
                                                                                <b-td> 
                                                                                    <label for="chk_ec_action_id">
                                                                                        EC Action 
                                                                                    </label>
                                                                                </b-td>
                                                                            </b-tr>
                                                                            <b-tr>
                                                                                <b-th> 
                                                                                    <b-form-checkbox
                                                                                        id="chk_reports_id"> 
                                                                                    </b-form-checkbox>
                                                                                </b-th>
                                                                                <b-td> 
                                                                                    <label for="chk_reports_id">
                                                                                        Reports 
                                                                                    </label>
                                                                                </b-td>
                                                                            </b-tr>
                                                                        </b-tbody>
                                                                    </b-table-simple>
                                                                </b-col>
                                                            </b-row>  
                                                        </b-form>
                                                  </b-col> 
                                                  <b-button  
                                                    class="float-right"
                                                    size="sm" 
                                                    variant="danger"
                                                    type="submit"
                                                    id="btn_add">
                                                    <font-awesome-icon
                                                        icon="save"
                                                        class="icon"/>
                                                        Save Values
                                                    </b-button>
                                                </b-card>
                                            </b-col> 
                                        </b-row>
                                    </b-card>
                                </b-col>
                            </b-row>
                        </b-col>
                    </vessel-body>
                </vessel>
            </b-col>
        </b-row>
        <UserEditModuleModal />
    </b-container>
</template>

<script>
import UserEditModuleModal from "../../components/Management/User/UserEditModuleModal";
import { mapGetters } from "vuex";
export default {
  components: { 
      UserEditModuleModal
   },
    name: "Users",
    data(){
        return{
            perPage: 10,
            currentPage: 1,
            employeeValue: [],
            employeeOptions: [],
            rolesValue: [],
            rolesOptions: [],
            user_masterlist: [
                // { no: "1", id_number: "161822", name: "Edralyn Afelo", section: "MIS", },
                // { no: "2", id_number: "111111", name: "Erika Reformado", section: "MIS", },
                // { no: "3", id_number: "222222", name: "Mary Rose Magango", section: "MIS", }
            ],
            user_fields: [
                { key: "no", class:"text-center"},
                { key: "employee_number", class:"text-center"},
                { key: "full_name", class:"text-center"},
                { key: "section", class:"text-center"},
                { key: "control", class:"text-center"},
                { key: "action", class:"text-center"}
            ],
           form: 
           {
                employee: 
                {
                    value: "",
                    state: null,
                    validation: "",
                },
                roles:
                {
                    value: "",
                    state: null,
                    validation: "",
                },
            },
        }
    },
    computed: {
        ...mapGetters(["getEmployees"]),
        ...mapGetters(["getUsers"]),
        rows() {
            return this.user_masterlist.length
        }
    },
    mounted() {
        this.loadEmployees();
        this.loadRoles();
        this.loadSystemUsers();

    },
    methods: {
        loadEmployees: function()
        {
            this.$store.dispatch("loadEmployees").then((response) => {
                let data = response.data;
                this.employeeOptions = data;        
                console.log(data);
           });  

        },
       
        loadRoles: function()
        {
            this.$store.dispatch("loadRoles").then((response) => {             
                 let data = response.data;
                 this.rolesOptions = data; 
                 console.log(data);       

           });  
        },
      
        submitForm: function()
        {
            var formData = new FormData(document.getElementById("form_user"));
            formData.append("emp_id", this.form.employee.value.employee_number);
            formData.append("role_id",this.form.roles.value.id);

            document.getElementById("btn_add_employee").disabled = true;

            this.$store
                .dispatch("insertUser", formData)
                .then((response) => {
                let status = response.data.status;
                    if (status == "Success") {
                        this.toast(status, response.data.message);
                        this.clearForm();
                        this.loadSystemUsers();
                        document.getElementById("btn_add_employee").disabled = false;
                    } else if (status == "Warning") {
                        Object.keys(response.data.data).forEach((key) => {
                        this.form[key]["state"] = false;
                        this.form[key]["validation"] = response.data.data[key][0];
                        });
                        this.toast(status, "Please review your inputs.");
                    } else if (status == "Error") {
                        this.toast(status, response.data.message);
                    }
            })
            .catch((error) => {
            let error_data = error.data;
                    let status = error.data.status;
                    console.log(error_data.error);
                    for(const[key] of Object.entries(error_data.error))
                    {
                        this.toast(status,error_data.error[key][0]);
                    };
                    this.clearForm();
                })
            .finally(() => {
            });
            // .then((response) => {
            //     console.log(response);
            //     document.getElementById("btn_add_employee").disabled = false;
            //     this.clearForm();
            // })
        },

        clearForm: function()
        {
            this.form = {
                employee: {
                    value: '',
                    state: null,
                    validation: "",
                },
                roles: {
                    value: '',
                    state: null,
                    validation: "",
                },
            }
        },

        loadSystemUsers: function()
        {
             this.$store.dispatch("loadSystemUsers").then((response) => {             
                 let data = response.data;
                 this.user_masterlist = data; 
                 console.log(response);       

           });  
        },
         toast: function (status, message){
            this.$toast(message, {
                type:status.toLowerCase().trim(),
                position: "bottom-right",
            });
        }

    },
}
</script>

<style scoped>

</style>