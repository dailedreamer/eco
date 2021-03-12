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
                        hover 
                        bordered 
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
                            <AButton
                                variant="default"
                                class="mr-2"
                            >
                                <font-awesome-icon
                                    icon="pen"
                                    class="icon"
                                />
                                Edit
                            </AButton>
                             <AButton
                                variant="defualt"
                                 @click.native="removeDevice(data.item.id)"
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
        isBusy: true,

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
                },
      },
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
                this.toast("error", "Something went wrong");
                console.log(error);
            })
            .finally(() => {
                document.getElementById("button-submit").disabled = false;
            });
        },

        removeDevice: function (id) {
            alert(id);
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
        console.log(this.getDevice);
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