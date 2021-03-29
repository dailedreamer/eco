<template>
    <b-row>
        <b-col cols="4" class="p-4 custom_col_device_container">
            <b-media class="mb-3">
                <template #aside>
                    <b-icon icon="book"  font-scale="2.5" variant="secondary"></b-icon>
                </template>
                <h5 class="mb-0">Device Information</h5>
                <hr class="hr_device">
            </b-media>
            <b-container  class="p-3" fluid>
                <b-form
                    id="form-registration"
                    @submit.prevent="submitForm"
                    method="post"
                >
                    <b-row>
                        <b-col cols="12">
                            <b-form-group label-for="device_name" label="Name:">
                                <b-form-input 
                                    id="device_name" 
                                    name="device_name"
                                    placeholder="Enter Device Name"
                                    v-model="form.device_name.value"
                                    :state="form.device_name.state"
                                    required
                                ></b-form-input>
                            </b-form-group>
                        </b-col>
                        <b-form-invalid-feedback id="input-area-feedback" :state="form.device_name.state">
                            {{ form.device_name.validation }}
                        </b-form-invalid-feedback>
                    </b-row>
                    <b-row class="mb-5 pl-2 pr-2">
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
                            Save Values
                            </b-button>
                        </b-col>
                        <b-col>
                            <b-button 
                                @click="clearForm();"
                                block>
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
        <b-col cols="8" class="custom_col_model_container">
            <b-row class="ml-3">
                <b-col cols="12">
                    <b-media class="mb-4">
                        <template #aside>
                            <b-icon icon="card-list"  font-scale="2.5" variant="secondary"></b-icon>
                        </template>
                        <h5 class="mb-0">Device List</h5>
                        <small class="text-secondary">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, illum.
                        </small>
                    </b-media>
                    <b-table 
                        responsive 
                        outlined
                        hover 
                        class="alpha__table text-nowrap"
                        head-variant="light"
                        :fields="fields"
                        :items="getDevice.data"
                        :busy="isBusy" 
                        :per-page="perPage"
                        :current-page="currentPage"
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
                             <a href="#"
                                v-b-modal.device-modal-update
                                @click="loadDeviceInfo(data.item.id, data.item.device_name)">
                                Edit
                            </a>
                            <label class="ml-2 mr-2 text-secondary">|</label>
                            <a href="#"
                                @click="removeDevice(data.item.id)"
                            >
                                Delete
                            </a>          
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
            id="device-modal-update"
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
                            <b-form-group label-for="device_name" label="Name:">
                            <b-form-input
                                id="device_name"
                                name="device_name"
                                type="text"
                                v-model="device.device_name.value"
                                :state="device.device_name.state"
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
    name: "PartsManagementDevice",
    data() {
      return {
        //device table

        //loading
        isBusy: false,

        //table info
        
        fields: [ 
           'No',
           
            {
                key: "device_name",
                sortable: true,
            }, 
            { 
                key: 'actions', 
                label: 'Actions' 
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
                }
        },
        //updating
        update_id:'',
        device: {
                device_name: 
                {
                    value: "",
                    state: null,
                    validation: "",
                }
        }
        }
    },
    computed: {
    ...mapGetters(["getDevice"]),
    rows() {
      if (!this.getDevice.data) {
        return 1;
      } else {
        return this.getDevice.data.length;
      }
    },
    },
    methods: {
        //delete
        removeDevice: function (id) {
            this.$store
            .dispatch("deleteDevice", id)
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

        //update
        loadDeviceInfo: function (id, device_name) {
            this.update_id = id;
            this.device.device_name.value = device_name;
        },

        updateForm: function () {
        var formData = new FormData(document.getElementById("form-update"));
        var patchData = {
            id: this.update_id,
            formData : formData,
        };
        this.$store
            .dispatch("updateDevice", patchData)
            .then((response) => {
            let status = response.data.status;
                if (status == "Success") {
                    this.toast(status, response.data.message);
                    this.clearForm();
                    this.$bvModal.hide("device-modal-update");
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
            .dispatch("insertDevice", formData)
            .then((response) => {
                let status = response.data.status;
                if (status == "Success") {
                this.toast(status, response.data.message);
                this.clearForm();
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
                document.getElementById("button-submit").disabled = false;
            });
        },

        loadDevice: function()
        {
           this.$store.dispatch("loadDevice").then((response) => {
                this.toast(response.status,response.message);
                this.isBusy=false;
           });  
        },

        clearForm: function () {
            this.form = {
                device_name: {
                value: '',
                state: null,
                validation: "",
                },
            };
            this.device = {
                device_name: {
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
    },
    mounted() {
        this.loadDevice();
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
.custom_col_device_container
{
    background-color: #F9F9F9;
    margin-top:-20px;
    margin-bottom:-20px;
    margin-left:-5px;
}
</style>