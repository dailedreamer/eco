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
                    id="form-registration"
                    @submit.prevent="submitForm"
                    method="post"
                >
                    <b-form-group label-for="device_name" class="mb-4" label="Device Name:">
                        <b-form-select 
                        name="device_name"
                        v-model="form.device_name.value" 
                        :state="form.device_name.state"
                        :options="options_device"
                        @change="loadModel()"
                        ></b-form-select>
                    </b-form-group>
                    <b-form-group label-for="model_name_id" class="mb-4" label="Model Name:">
                        <b-form-select 
                            name="model_name_id"
                            v-model="form.model_name_id.value" 
                            :state="form.model_name_id.state"
                            :options="options_model"
                            >
                            <div class="text-center">
                                <b-spinner label="Spinning"></b-spinner>
                            </div>
                        </b-form-select>
                    </b-form-group>
                    <b-form-group label-for="unit_number" class="mb-4" label="Unit Number:">
                        <b-form-input 
                            id="unit_number" 
                            name="unit_number"
                            v-model="form.unit_number.value" 
                            placeholder="Enter Unit Number">
                        </b-form-input>
                    </b-form-group>
                    <b-form-group label-for="unit_name" class="mb-5" label="Unit Name:">
                        <b-form-input 
                            id="unit_name" 
                            name="unit_name"
                            v-model="form.unit_name.value" 
                            placeholder="Enter Unit Name"></b-form-input>
                    </b-form-group>
                        <b-row class="pl-2 pr-2">
                        <b-col>
                            <b-button 
                                variant="danger" 
                                block
                                type="submit"
                                id="button-submit">
                                <font-awesome-icon
                                    icon="save"
                                    class="icon"
                                />
                                Save Values
                            </b-button>
                        </b-col>
                        <b-col>
                            <b-button block
                                @click="clearForm()">
                                <font-awesome-icon
                                    icon="trash"
                                    class="icon"
                                   
                                />
                                Clear
                            </b-button>
                        </b-col>
                    </b-row>
                </b-form>
        </b-container> 
        </b-col>
           <b-col cols="8">
            <b-row class="ml-3">
                <b-col cols="12">
                    <b-media class="mb-4">
                        <template #aside>
                            <b-icon icon="card-list"  font-scale="2.5" variant="secondary"></b-icon>
                        </template>
                        <h5 class="mb-0">Unit List</h5>
                        <small class="text-secondary">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, illum.
                        </small>
                    </b-media>
                    <b-table 
                        responsive 
                        outlined
                        hover 
                        head-variant="light"
                        :fields="fields"
                        :items="getUnit.data" 
                        :busy="isBusy"
                    >
                        <template #table-busy>
                            <div class="text-center text-default my-2">
                            <b-spinner class="align-middle"></b-spinner>
                            </div>
                        </template>
                        <template #cell(No)="data">
                            {{data.index+1}}
                        </template>
                        <template #cell(actions)>
                            
                            <a href="#"
                             v-b-modal.model-modal-update
                                @click="loadUnitInfo(
                                    data.item.id, 
                                    data.item.device_name, 
                                    data.item.model_name_id, 
                                    data.item.unit_number,
                                    data.item.unit_name,    
                                    )">
                            >Edit</a>
                            <label class="ml-2 mr-2 text-secondary">|</label>
                            <a href="#"
                                 @click="removeUnit(data.item.id)"
                            >Delete</a>                         
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
            id="model-modal-update"
            size="md"
            hide-footer
            title="Update Device"
            title-class="alpha__modal__title"
        >
            <b-form
                class="pl-4 pr-4"
                id="form-update"
                @submit.prevent="updateForm"
                method="post"
            >
                <b-row>
                    <b-col lg="12" class="mb-2">    
                        <b-form-group label-for="device_id" label="Device Name:">
                        <b-form-input
                            id="device_id"
                            name="device_id"
                            type="text"
                            v-model="unit.device_name.value"
                            :state="unit.device_name.state"
                            required
                        />
                        </b-form-group>
                    </b-col>
                </b-row>
                <b-row>
                    <b-col lg="12" class="mb-2">    
                        <b-form-group label-for="name" label="Model Name:">
                        <b-form-input
                            id="name"
                            name="name"
                            type="text"
                            v-model="unit.model_name_id.value"
                            :state="unit.model_name_id.state"
                            required
                        />
                        </b-form-group>
                    </b-col>
                </b-row>
                <b-row>
                    <b-col lg="12" class="mb-2">    
                        <b-form-group label-for="name" label="Unit Name:">
                        <b-form-input
                            id="model_code"
                            name="model_code"
                            type="text"
                            v-model="unit.unit_name.value"
                            :state="unit.unit_name.state"
                            required
                        />
                        </b-form-group>
                    </b-col>
                </b-row>
                 <b-row>
                    <b-col lg="12" class="mb-2">    
                        <b-form-group label-for="name" label="Unit Number:">
                        <b-form-input
                            id="model_code"
                            name="model_code"
                            type="text"
                            v-model="unit.unit_number.value"
                            :state="unit.unit_number.state"
                            required
                        />
                        </b-form-group>
                    </b-col>
                </b-row>
                <b-row class="mb-1 pl-2 pr-2">
                    <b-col>
                        <b-button 
                            variant="danger" 
                            block
                            type="submit"
                            id="button-submit"
                            >
                            <font-awesome-icon
                                icon="save"
                                class="icon"
                            />
                        Update Values
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
            {
                key: "No",sortable: true,
            }, 
            {
                key: "device_name",sortable: true,
            }, 
            {
                key: "model_name",sortable: true,
            }, 
            {
                key: "unit_number",sortable: true,
            }, 
            {
                key: "unit_name",sortable: true,
            },
            { 
                key: 'actions',label: 'Actions' 
            }],

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
      }
    },
    computed: {
    ...mapGetters(["getUnit","getModel"]),
    rows() {
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
            let information = response.data.data;
                Object.keys(information).forEach((key) => {
                    this.options_device.push({
                        'value':information[key].id, 
                        'text':information[key].device_name
                    })
                });
           });  
        },

        loadModel: function()
        {
            this.options_model = [];
            this.$store.dispatch("loadModelPerDevice", this.form.device_name.value)
            .then((response) => {
                let information = response.data;
                    Object.keys(information).forEach((key) => {
                        this.options_model.push({
                            'value':information[key].id, 
                            'text':information[key].model_code
                        })
                    });
            }); 
        },

        //save
        submitForm: function () {
            var formData = new FormData(document.getElementById("form-registration"));
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

        //update
        loadUnitInfo: function (id, device_name, model_name, unit_number, unit_name) {
            this.update_id = id;
            this.unit.device_name.value = device_name;
            this.unit.model_name.value = model_name;
            this.unit.unit_number.value = unit_number;
            this.unit.unit_name.value = unit_name;
        },

        updateForm: function () {
        var formData = new FormData(document.getElementById("form-update"));
        var patchData = {
            id: this.update_id,
            formData : formData,
        };
        this.$store
            .dispatch("updateUnit", patchData)
            .then((response) => {
            let status = response.data.status;
                if (status == "Success") {
                    this.toast(status, response.data.message);
                    this.clearForm();
                    this.$bvModal.hide("model-modal-update");
                     this.loadUnit();
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
        }
    }
};
</script>

<style scoped>
hr
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