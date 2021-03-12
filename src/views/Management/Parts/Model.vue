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
            <b-form-group label-for="txt_device_name" class="mb-4" label="Device Name:">
                <b-form-select v-model="selected" :options="options_device"></b-form-select>
            </b-form-group>
            <b-form-group label-for="txt_model_name" class="mb-4" label="Model Name:">
                <b-form-input id="txt_model_name" v-model="device_name" placeholder="Enter Model Name"></b-form-input>
            </b-form-group>
            <b-form-group label-for="txt_model_code" class="mb-5" label="Model Code:">
                <b-form-input id="txt_model_code" v-model="device_name" placeholder="Enter Model Code"></b-form-input>
            </b-form-group>
                <b-row class="pl-2 pr-2">
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
        removeModel: function (id) {
            alert(id);
        },

        loadDevice: function()
        {
           this.$store.dispatch("loadDevice")
            .then((response) => {
            let information = response.data;
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