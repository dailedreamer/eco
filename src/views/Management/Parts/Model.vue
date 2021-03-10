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
                <b-form-select v-model="selected" :options="options"></b-form-select>
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
                    >
                    <template #table-busy>
                        <div class="text-center text-default my-2">
                        <b-spinner class="align-middle"></b-spinner>
                        </div>
                    </template>
                        <template #cell(actions)="data">
                            <AButton
                                variant="primary"
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
  name: "Parts Management (Model)",
    data() {
      return {
        //select
        selected: 1,
        options: [
          { value: 1, text: 'Model 1' },
          { value: 2, text: 'Model 2' },
          { value: 3, text: 'Model 3' },
          { value: 4, text: 'Model 4' },
        ],

        //device table
        isBusy: false,
        device_name: '',
        fields: [ 
            {
                key: "no", sortable: true,
            }, 
            {
                key: "device",sortable: true,
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
        items: [
        { no: '1', device: 'Macdonald', model_name: 'Model Name', model_code: 'Model Code', id:1},
        { no: '2', device: 'Shaw', model_name: 'Model Name', model_code: 'Model Code', id:2},
        { no: '3', device: 'Wilson', model_name: 'Model Name', model_code: 'Model Code', id:3},
        { no: '4', device: 'Carney', model_name: 'Model Name', model_code: 'Model Code', id:4},
        ],
      }
    },
    computed: {
    ...mapGetters(["getModel"]),
    },
    methods: {
        removeDevice: function (id) {
            alert(id);
        },
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