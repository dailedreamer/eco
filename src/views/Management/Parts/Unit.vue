<template>
    <b-row>
        <b-col cols="4" class="p-4 custom_col_unit_container">
             <b-media class="mb-3">
                <template #aside>
                    <b-icon icon="book"  font-scale="2.5" variant="secondary"></b-icon>
                </template>
                <h5 class="mb-0">Unit Information</h5>
                <hr class="hr_device">
            </b-media>
            <b-container fluid>
                <b-form
                    id="form-save-unit"
                    @submit.prevent="submitForm"
                    method="post">
                    <b-form-group label-for="device_name" class="mb-4" label="Device Name:">
                        <multiselect 
                            name="device_name"
                            v-model="form.device_name.value" 
                            :state="form.device_name.state"
                            :options="options_device" 
                            :searchable="true"
                            :show-labels="false"
                            label="name" 
                            track-by="id"
                            @input="loadModel()"></multiselect>
                    </b-form-group>
                    <b-form-group label-for="model_name_id" class="mb-4" label="Model Name:">
                        <multiselect 
                            id="model_name_id"
                            name="model_name_id"
                            v-model="form.model_name_id.value" 
                            :state="form.model_name_id.state"
                            :options="options_model" 
                            :searchable="true"
                            :show-labels="false"
                            label="name" 
                            track-by="id"></multiselect>
                    </b-form-group>
                    <b-form-group 
                        label-for="unit_number" 
                        class="mb-4" 
                        label="Unit Number:">
                        <b-form-input 
                            id="unit_number" 
                            name="unit_number"
                            v-model="form.unit_number.value" 
                            placeholder="Enter Unit Number"
                            required
                            autocomplete="off">
                        </b-form-input>
                    </b-form-group>
                    <b-form-group label-for="unit_name" class="mb-5" label="Unit Name:">
                        <b-form-input 
                            id="unit_name" 
                            name="unit_name"
                            v-model="form.unit_name.value" 
                            placeholder="Enter Unit Name"
                            required
                            autocomplete="off"></b-form-input>
                    </b-form-group>
                    <b-row class="float-right">
                        <b-button 
                            variant="danger"
                            type="submit"
                            id="button-submit"
                            title="Click to Save Units">
                            <font-awesome-icon
                                icon="save"
                                class="icon"/>
                                Save Values
                        </b-button>
                        <b-button 
                            class="ml-2"
                            @click="clearForm();" 
                            variant="outline-secondary"
                             title="Click to Clear Inputs">
                            <font-awesome-icon
                                icon="times-circle"
                                class="icon"/>
                                Clear
                        </b-button>
                    </b-row>
                </b-form>
        </b-container> 
        </b-col>
           <b-col cols="8">
            <b-row class="ml-3">
                <b-col cols="12">
                    <b-media class="mb-4">
                        <template #aside>
                            <b-icon 
                                icon="card-list"  
                                font-scale="2.5" 
                                variant="secondary"></b-icon>
                        </template>
                        <h5 class="mb-0">Unit List</h5>
                        <small class="text-secondary">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, illum.
                        </small>
                    </b-media>
                    <b-table 
                        class="alpha__table text-nowrap"
                        responsive 
                        hover 
                        bordered
                        head-variant="light"
                        :fields="fields"
                        :items="getUnit.data" 
                        :busy="isBusy"
                        :per-page="perPage"
                        :current-page="currentPage">
                        <template #table-busy>
                            <div class="text-center text-default my-2">
                            <b-spinner class="align-middle"></b-spinner>
                            </div>
                        </template>
                        <template #cell(no)="data" v-if="currentPage == 1">
                            {{data.index+1}}
                        </template>
                        <template #cell(no)="data" v-else>
                            {{(data.index+1) + (currentPage*perPage) - 10}}
                        </template>
                        <template #cell(actions)="data">
                            <b-link
                                v-if="currentPage == 1"
                                v-b-modal.unit-modal-update
                                @click="editUnit(data.index)">
                                Edit</b-link>
                            <b-link
                                v-else
                                v-b-modal.unit-modal-update
                                @click="editUnit(data.index + (currentPage*perPage) - 10)">
                                Edit</b-link>
                            <label class="ml-2 mr-2 text-secondary">|</label>
                            <b-link
                                 @click="removeUnit(data.item.id)"
                            >Delete</b-link>                         
                        </template>
                    </b-table>
                    <b-pagination
                        align="right"
                        class="alpha__table__pagination"
                        pills
                        v-model="currentPage"
                        :total-rows="rows"
                        :per-page="perPage"
                    ></b-pagination>
                </b-col>
            </b-row>
        </b-col>
        <b-modal
            id="unit-modal-update"
            size="md"
            hide-footer
            title-class="alpha__modal__title"
            :no-close-on-backdrop="true" 
            centered>
            <template #modal-title="">
                <b-media>
                    <template #aside>
                        <b-img 
                            :src="require('../../../assets/icon_images/edit_content.svg')" 
                            width="44" 
                            height="37" 
                            alt="placeholder">
                        </b-img>
                    </template>
                    <h5 class="mt-2">Update Device</h5>
                </b-media>
            </template>
            <b-form
                class="pl-4 pr-4"
                id="form-update"
                @submit.prevent="updateForm"
                method="post">
                <b-row class="mt-3 mr-3 ml-3 mb-3">
                    <b-col>
                        <b-form-group 
                            label-size="sm" 
                            label-for="device_id" 
                            label="Device Name:">
                                <multiselect 
                                    id="device_id"
                                    name="device_id" 
                                    v-model="unit.device_name.value" 
                                    :state="unit.device_name.state"
                                    :options="options_device" 
                                    :searchable="true"
                                    :show-labels="false"
                                    label="name" 
                                    track-by="id"
                                    @input="loadModel()"></multiselect>
                                    
                        </b-form-group>
                        <b-form-group 
                            label-size="sm" 
                            label-for="name" 
                            label="Model Name:">
                            <multiselect 
                                id="name"
                                name="name"
                                v-model="unit.model_name_id.value"
                                :state="unit.model_name_id.state"
                                :options="options_model" 
                                :searchable="true"
                                :show-labels="false"
                                label="name" 
                                track-by="id"></multiselect>
                        </b-form-group>
                        <b-form-group 
                            label-size="sm" 
                            label-for="name" 
                            label="Unit Name:">
                            <b-form-input
                                id="model_code"
                                name="model_code"
                                type="text"
                                v-model="unit.unit_name.value"
                                :state="unit.unit_name.state"
                                required/>
                        </b-form-group>
                        <b-form-group 
                            label-size="sm" 
                            label-for="name" 
                            label="Unit Number:">
                            <b-form-input
                                id="model_code"
                                name="model_code"
                                type="text"
                                v-model="unit.unit_number.value"
                                :state="unit.unit_number.state"
                                required/>
                        </b-form-group>
                    </b-col>
                </b-row>
                 <hr>
                <b-row class="mt-4 mb-3">
                    <b-col cols="12">
                        <b-button 
                            class="float-right"
                            id="button-submit" 
                            variant="danger" 
                            type="submit"
                            title="Click to Update Units">
                            <font-awesome-icon icon="save" /> Update
                        </b-button> 
                    </b-col>
                </b-row>
            </b-form>
        </b-modal>
    </b-row>
</template>
<script>
import { mapGetters } from "vuex";
export default {
  name: "PartsManagementUnit",
    data() {
      return {
        //select
        selected_device: '',
        selected_model: '',

        options_device: [],

        options_model: [],

        //device table
        isBusy: false,
        device_name: '',
        fields: [ 
            
            {key: "No",sortable: true, class: "text-center"}, 
            {key: "device_name",sortable: true, class: "text-center"}, 
            {key: "model_name",sortable: true, class: "text-center"}, 
            {key: "unit_number",sortable: true, class: "text-center"}, 
            {key: "unit_name",sortable: true, class: "text-center"},
            {key: 'actions', class: "text-center"}],

        //pagination
        currentPage: 1,
        perPage: 10,
       
        //saving
        form: {
                device_name: 
                {
                    value: "",
                    state: null,
                    validation: "",
                },
                model_name_id: 
                {
                    value: "",
                    state: null,
                    validation: "",
                },
                unit_name: 
                {
                    value: "",
                    state: null,
                    validation: "",
                },
                unit_number: 
                {
                    value: "",
                    state: null,
                    validation: "",
                }
        },

        //updating
        update_id:'',
        unit: {
                device_name: 
                {
                    value: "",
                    state: null,
                    validation: "",
                },
                model_name_id: 
                {
                    value: "",
                    state: null,
                    validation: "",
                },
                unit_name: 
                {
                    value: "",
                    state: null,
                    validation: "",
                },
                unit_number: 
                {
                    value: "",
                    state: null,
                    validation: "",
                }
        },
        unit_details: {},
      }
    },
    computed: {
        ...mapGetters(["getUnit"]),
        rows: function() {
            if (!this.getUnit.data) {
                return 1;
            } else {
                return this.getUnit.data.length;
            }
        },
        
    },
    mounted() {
        this.loadDevice();
        this.loadUnit();      
    },
    
    methods: {
        removeUnit: function (id) {
            alert(id);
        },

        loadUnit: function()
        {
           this.$store.dispatch("loadUnit")
            .then((response) => {
            this.toast(response.status, response.message);
            this.isBusy=false;
           });  
        },

        loadDevice: function()
        {   
           this.$store.dispatch("loadDevice")
            .then((response) => {
                this.options_model=[];
            let information = response.data.data;
                Object.keys(information).forEach((key) => {
                    this.options_device.push({
                        'id':information[key].id, 
                        'name':information[key].device_name
                    })
                });
           });  
        },

        loadModel: function()
        {
            this.options_model = [];
            this.form.model_name_id.value = [];
            this.$store.dispatch("loadModelPerDevice", this.form.device_name.value.id)
            .then((response) => {
                let information = response.data;
                    Object.keys(information).forEach((key) => {
                        this.options_model.push({
                            'id':information[key].id, 
                            'name':information[key].model_code
                        })
                    });
            }); 
        },

        loadModelforModal: function()
        {
            this.options_model = [];
            this.form.model_name_id.value = [];
            this.$store.dispatch("loadModelPerDevice", this.unit.device_name.value.id)
            .then((response) => {
                let information = response.data;
                    Object.keys(information).forEach((key) => {
                        this.options_model.push({
                            'id':information[key].id, 
                            'name':information[key].model_code
                        })
                    });
            }); 
        },

        //save
        submitForm: function () {
            var unit_name = document.getElementById("unit_name").value;
            var unit_number = document.getElementById("unit_number").value;
            var formData = {
                "model_name_id"     : this.form.model_name_id.value.id,
                "unit_name"         : unit_name,
                "unit_number"       : unit_number
            };
            document.getElementById("button-submit").disabled = true;
            this.$store
            .dispatch("insertUnit", formData)
            .then((response) => {
                let status = response.data.status;
                if (status == "Success") {
                this.toast(status, response.data.message);
                this.loadUnit();
                 this.clearForm();
                this.getUnit;
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
                document.getElementById("button-submit").disabled = false;
            });
        },

        updateForm: function () {
            var formData = new FormData(document.getElementById("form-update"));
            var patchData = {
                id: this.unit_details.id,
                formData : formData,
            };

            this.$store
            .dispatch("updateUnit", patchData)
            .then((response) => {
            let status = response.data.status;
                if (status == "Success") {
                    this.toast(status, response.data.message);
                    this.clearForm();
                    this.$bvModal.hide("unit-modal-update");
                     this.loadUnit();
                } else if (status == "Warning") {
                    Object.keys(response.data.data).forEach((key) => {
                    this.form[key]["state"] = false;
                    this.form[key]["validation"] = response.data .data[key][0];
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
        
        },

        clearForm: function () {
            this.form = {
                device_name: {
                    value: '',
                    state: null,
                    validation: "",
                },
                model_name_id: {
                    value: '',
                    state: null,
                    validation: "",
                },
                unit_name: {
                    value: '',
                    state: null,
                    validation: "",
                },
                unit_number: {
                    value: '',
                    state: null,
                    validation: "",
                },
            };
        },

        toast: function (status, message){
            this.$toast(message, {
                type:status.toLowerCase().trim(),
                position: "bottom-right",
            });
        },
        editUnit: function(id){
            this.unit_details = {};
            this.unit_details = this.getUnit.data[id];
            this.unit.unit_number.value = this.unit_details.unit_number;
            this.unit.unit_name.value = this.unit_details.unit_name;

            let obj_device = {};
            this.unit.device_name.value=[];
            obj_device["id"] = this.unit_details.device_id;
            obj_device["name"] = this.unit_details.device_name;
            this.unit.device_name.value.push(obj_device);

            let obj_model = {};
            this.unit.model_name_id.value=[];
            obj_model["id"] = this.unit_details.model_id;
            obj_model["name"] = this.unit_details.model_name;
            this.unit.model_name_id.value.push(obj_model);
        }
    }
};
</script>

<style scoped>
.hr_device
{
    border:2px solid #C3C3C3; 
    margin-top: 7.5px;
    width:35%;
}
.custom_size
{
    font-size:2.5em
}
.hr_model
{
    width:26%
}
.custom_col_unit_container
{
    background-color: #F9F9F9;
    margin-top:-20px;
    margin-bottom:-20px;
    margin-left:-5px;
}
</style>