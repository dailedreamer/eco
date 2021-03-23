<template>
        <b-card no-body class="p-3">
            <b-card-text>
                <b-row class="mb-2">
                    <b-col>
                    <b-form-group
                    class="form_group_custom"
                    id="filter_by"
                    label-cols-sm="2"
                    label="Filter:"
                    label-align="left"
                    label-size="sm"
                    horizontal>
                    <b-row>
                        <b-col cols="4">
                            <multiselect  
                                v-model="deviceValue"
                                name="searchTemplateDevice"
                                :options="this.deviceOptions" 
                                :searchable="true"
                                :show-labels="false"
                                placeholder="Device" 
                                label="name" 
                                track-by="id"
                                @input="loadModel()"></multiselect>
                        </b-col>
                        <b-col cols="4">
                            <multiselect  
                                v-model="modelValue"
                                name="searchTemplateModel"
                                :options="modelOptions" 
                                :searchable="true"
                                :show-labels="false"
                                placeholder="Model" 
                                label="name" 
                                track-by="id"
                                @input="loadUnit()"></multiselect>
                        </b-col>
                        <b-col cols="4">
                            <multiselect  
                                v-model="unitValue" 
                                 name="searchTemplateUnit"
                                :options="unitOptions"
                                :searchable="true"
                                :show-labels="false"
                                placeholder="Unit Name/Number" 
                                label="name" 
                                track-by="id" 
                                :max-height="50"
                                ></multiselect>
                        </b-col>
                    </b-row>
                </b-form-group>
                </b-col>
            </b-row>
            <b-row>
                <b-col>
                    <b-form-group
                        class="form_group_custom"
                        id="filter_by"
                        label-cols-sm="2"
                        label="Filter By:"
                        label-align="left"
                        label-size="sm"
                        horizontal>
                        <b-row>
                            <b-col cols="4">
                                <multiselect  
                                    v-model="filterBySelectValue" 
                                    :options="filterByOptions"
                                    :searchable="true"
                                    :show-labels="false"
                                    :multiple="false" 
                                    :taggable="true" 
                                    placeholder="Select one" 
                                    label="name" 
                                    track-by="id"
                                    @input="clearFilter()"></multiselect>
                            </b-col>
                            <b-col cols="4">
                                    <b-input block v-model="filterByValue" class="filterby_input"></b-input>
                            </b-col>
                            <b-col cols="4">
                               <slot></slot>
                            </b-col>
                        </b-row>
                    </b-form-group>
                </b-col>
            </b-row>
         </b-card-text>
    </b-card>
</template>

<script>
// import {mapGetters} from "vuex";
export default {
name: "SearchTemplate",
props: {
        field_set:{
            type:String,
            default:'1'
        }
    },
    data(){
        return{
            deviceValue: [],
            deviceOptions: [],

            modelValue: [],
            modelOptions: [],

            unitValue: [],
            unitOptions: [],
            filterByValue: '',
            filterBySelectValue: [],
            filterByOptions: []
        }
    },
    methods:{
        loadDevice: function () {
            this.deviceOptions=[];
            this.clearFilterBy();
            this.$store.dispatch("loadDevice")
                .then((response) => {
                this.modelOptions=[];
                this.unitOptions=[];
                let information = response.data.data;
                    Object.keys(information).forEach((key) => {
                        this.deviceOptions.push({
                            'id':information[key].id, 
                            'name':information[key].device_name
                        })
                    });
            });  
        },

        loadModel: function () {
            this.modelOptions=[];
            this.clearFilterBy();
            this.modelValue = [];
            this.unitValue = [];
                this.$store.dispatch("loadModelPerDevice", this.deviceValue.id)
                .then((response) => {
                    let information = response.data;
                        Object.keys(information).forEach((key) => {
                            this.modelOptions.push({
                                'id':information[key].id, 
                                'name':information[key].model_code
                            })
                        });
                });  
        },

        loadUnit: function () {
            this.unitOptions=[];
            this.clearFilterBy();
            this.unitValue = [];
                this.$store.dispatch("loadUnitPerModel", this.modelValue.id)
                .then((response) => {
                    let information = response.data;
                        Object.keys(information).forEach((key) => {
                            this.unitOptions.push({
                                'id':information[key].id, 
                                'name':information[key].unit_name
                            })
                        });
                });  
        },

        setFieldSet: function () {
            console.log(this.field_set);
           if(this.field_set == "1")
           {
               this.filterByOptions.push(
                    {id: '1', name: 'ECO Number'},
                    {id: '2', name: 'Batch No'},
                    {id: '3', name: 'Supplier'}
               );
           }
           else if(this.field_set == "2")
           {
               this.filterByOptions.push(
                    {id: '1', name: 'ECO Number'},
                    {id: '3', name: 'Supplier'}
               );
           }
           else if(this.field_set == "3")
           {
               this.filterByOptions.push(
                    {id: '1', name: 'ECO Number'}
               );
           }
           else
           {
               this.filterByOptions=[];
           }
        },
        clearFilter: function () {
            this.deviceValue = [];
            this.modelValue = [];
            this.unitValue = [];

            this.modelOptions=[];
            this.unitOptions=[];
        },
        clearFilterBy: function () {
            this.filterBySelectValue = [];
        },
    },
    mounted()
    {
        this.loadDevice();
        this.setFieldSet();
        console.log(this.filterByOptions);
    }
}
</script>

<style>
    .form_group_custom{
        margin-bottom:0;
    }

    .filterby_input{
        border-color: #e3e3e3;
        height: 43px;
    }
</style>