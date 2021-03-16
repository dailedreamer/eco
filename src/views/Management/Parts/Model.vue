<template>
    <b-row>
        <b-col cols="4" class="p-4 custom_col_model_container">
             <b-media class="mb-3">
                <template #aside>
                    <b-icon icon="book"  font-scale="2.5" variant="secondary"></b-icon>
                </template>
                <h5 class="mb-0">Model Information</h5>
                <hr class="hr_device">
            </b-media>
            <b-container fluid>
                <b-form
                    id="form-registration"
                    @submit.prevent="submitForm"
                    method="post"
                >
                <b-form-group label-for="device_id" class="mb-4" label="Device Name:">
                    <b-form-select 
                    name="device_id"
                     v-model="form.device_id.value"
                    :state="form.device_id.state"
                    :options="options_device" 
                    required>
                    </b-form-select>
                </b-form-group>
                <b-form-group label-for="name" class="mb-4" label="Model Name:">
                    <b-form-input 
                        id="name" 
                        name="name"
                        required
                        placeholder="Enter Model Name"
                        v-model="form.name.value"
                        :state="form.name.state"
                    >
                    </b-form-input>
                </b-form-group>
                <b-form-group label-for="model_code" class="mb-5" label="Model Code:">
                    <b-form-input 
                        id="model_code" 
                        name="model_code"
                        required
                        placeholder="Enter Model Code"
                         v-model="form.model_code.value"
                        :state="form.model_code.state"
                        ></b-form-input>
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
                        <b-button block>
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
                        <h5 class="mb-0">Model List</h5>
                        <small class="text-secondary">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, illum.
                        </small>
                    </b-media>
                    <b-table 
                        responsive 
                        hover 
                        bordered 
                        head-variant="light"
                        :fields="fields"
                        :items="getModel.data"
                        :busy="isBusy" 
                        :total-rows="rows"
                    >              
                        <template #table-busy>
                            <div class="text-center text-default my-2">
                            <b-spinner class="align-middle"></b-spinner>
                            </div>
                        </template>
                        <template #cell(No)="data">
                            {{data.index+1}}
                        </template>
                        <template #cell(actions)="data">
                            <AButton
                                variant="default"
                                class="mr-2"
                                v-b-modal.model-modal-update
                                @click.native="loadModelInfo(
                                    data.item.id, 
                                    data.item.device_id, 
                                    data.item.name, 
                                    data.item.mode_code)"
                            >
                                <font-awesome-icon
                                    icon="pen"
                                    class="icon"
                                />
                                Edit
                            </AButton>
                             <AButton
                                variant="defualt"
                                 @click.native="removeModel(data.item.id)"
                            >
                                <font-awesome-icon
                                    icon="trash"
                                    class="icon"
                                />
                                Delete
                            </AButton>
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
                            v-model="model.device_id.value"
                            :state="model.device_id.state"
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
                            v-model="model.name.value"
                            :state="model.name.state"
                            required
                        />
                        </b-form-group>
                    </b-col>
                </b-row>
                <b-row>
                    <b-col lg="12" class="mb-2">    
                        <b-form-group label-for="name" label="Model Code:">
                        <b-form-input
                            id="model_code"
                            name="model_code"
                            type="text"
                            v-model="model.model_code.value"
                            :state="model.model_code.state"
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
  name: "PartsManagementModel",
    data() {
      return {
        //select
        selected: 1,
      
        
        options_device: [],

        //device table

        //loading
        isBusy: true,

        //table info
        device_name: '',
        fields: [ 
            'No',
            {
                key: "device_name",sortable: true,
            }, 
            {
                key: "model_name",sortable: true,
            }, 
            {
                key: "model_code",sortable: true,
            }, 
            { 
                key: 'actions',label: 'Actions' 
            }],
        
        //pagination
        currentPage: 1,
        perPage: 10,

        //saving
        form: {
                device_id: 
                {
                    value: "",
                    state: null,
                    validation: "",
                },
                name: 
                {
                    value: "",
                    state: null,
                    validation: "",
                },
                model_code: 
                {
                    value: "",
                    state: null,
                    validation: "",
                }
        },
        //updating
        update_id:'',
        model: {
                device_id: 
                {
                    value: "",
                    state: null,
                    validation: "",
                },
                name: 
                {
                    value: "",
                    state: null,
                    validation: "",
                },
                model_code: 
                {
                    value: "",
                    state: null,
                    validation: "",
                }
        }
      }
    },
    computed: {
    ...mapGetters(["getModel"]),
    rows() {
        if (!this.getModel.data) {
        return 1;
        } else {
        return this.getModel.data.length;
        }
    },
    },
    mounted() {
        this.loadModel();
        this.loadDevice();
    },
    methods: {
        //delete
        removeModel: function (id) {
            this.$store
            .dispatch("deleteModel", id)
            .then((response) => {
                let status = response.data.status;
                if (status == "Success") {
                    this.loadDevice();  
                    this.toast(status, response.data.message);
                } else if (status == "Warning") {
                    this.toast(status, response.data.message);
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

        //update
        loadModelInfo: function (id, device_id, name, code) {
            this.update_id = id;
            this.model.device_id.value = device_id;
            this.model.name.value = name;
            this.model.model_code.value = code;

        },

        updateForm: function () {
        var formData = new FormData(document.getElementById("form-update"));
        var patchData = {
            id: this.update_id,
            formData : formData,
        };
        this.$store
            .dispatch("updateModel", patchData)
            .then((response) => {
            let status = response.data.status;
                if (status == "Success") {
                    this.toast(status, response.data.message);
                    this.clearForm();
                    this.$bvModal.hide("model-modal-update");
                     this.loadDevice();
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

        //save
        submitForm: function () {
            var formData = new FormData(document.getElementById("form-registration"));
            document.getElementById("button-submit").disabled = true;
            this.$store
            .dispatch("insertModel", formData)
            .then((response) => {
                let status = response.data.status;
                if (status == "Success") {
                this.toast(status, response.data.message);
                this.clearForm();
                this.loadModel();
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

        clearForm: function () {
            this.form = {
                device_id: {
                value: '',
                state: null,
                validation: "",
                },
                model_name: {
                value: '',
                state: null,
                validation: "",
                },
                model_code: {
                value: '',
                state: null,
                validation: "",
                },
            };
        },

        loadModel: function()
        {
           this.$store.dispatch("loadModel")
            .then((response) => {
            this.toast(response.status, response.message);
            this.isBusy=false;
           });  
        },
        toast: function (status, message){
            this.$toast(message, {
                type:status.toLowerCase().trim(),
                position: "bottom-right",
            });
        }
    },
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
.custom_col_model_container
{
    background-color: #F9F9F9;
    margin-top:-20px;
    margin-bottom:-20px;
    margin-left:-5px;
}
</style>