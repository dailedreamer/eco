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
                <b-row>
                    <b-col cols="12">
                    
                        <b-form-group label-for="txt_device_name" label="Name:">
                            <b-form-input id="txt_device_name" v-model="device_name" placeholder="Enter Device Name"></b-form-input>
                        </b-form-group>
                    </b-col>
                </b-row>
                <b-row class="mb-5 pl-2 pr-2">
                    <b-col>
                        <b-button variant="danger" block>
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
                      <!-- :items="getDevice.data"  -->
                    <b-table 
                        responsive 
                        hover 
                        bordered 
                        head-variant="light"
                        :fields="fields"
                        :items="getDevice.data"
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
        //select
        selected: 1,
        options: [
          { value: 1, text: 'Device 1' },
          { value: 2, text: 'Device 2' },
          { value: 3, text: 'Device 3' },
          { value: 4, text: 'Device 4' },
        ],

        //device table
        isBusy: false,
        device_name: '',
        fields: [ 
            {
                key: "no",
                sortable: true,
            }, 
            {
                key: "device_name",
                sortable: true,
            }, 
            { 
                key: 'actions', 
                label: 'Actions' 
            }],
        // items: [],
      }
    },
    computed: {
    ...mapGetters(["getDevice"]),
    },
    methods: {
        removeDevice: function (id) {
            alert(id);
        },
        loadDevice: function()
        {
           this.$store.dispatch("loadDevice")
            .then((response) => {
        //   alert(response);    
            this.toast(response.status, response.message);
           });  
        },
        toast: function (status, message) {
        this.$toast(message, {
            type: status,
            toastClassName: `toastification--${status}`,
            position: "bottom-right",
      });
    
    },
    },
    mounted() {
        // this.loadDevice();
        // console.log(this.getDevice);
        // console.log(this.getDevice.data);
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