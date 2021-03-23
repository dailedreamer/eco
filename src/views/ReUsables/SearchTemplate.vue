<template>
        <b-card>
            <b-form-group
            id="filter_by"
            label-cols-sm="2"
            label="Filter:"
            label-align="left"
            horizontal>
            <b-row>
                <b-col cols="4">
                    <multiselect  
                        v-model="deviceValue"
                        :options="this.deviceOptions" 
                        :searchable="true"
                        :show-labels="false"
                        placeholder="Device" 
                        label="name" 
                        track-by="id"
                        @input="loadModel('asdasd')"></multiselect>
                </b-col>
                <b-col cols="4">
                    <multiselect  
                        v-model="this.modelValue"
                        :options="modelOptions" 
                        :searchable="true"
                        :show-labels="false"
                        placeholder="Model" 
                        label="name" 
                        track-by="id"></multiselect>
                </b-col>
                <b-col cols="4">
                    <multiselect  
                        v-model="this.unitValue" 
                        :options="unitOptions"
                        :searchable="true"
                        :show-labels="false"
                        placeholder="Unit" 
                        label="name" 
                        track-by="id" 
                        ></multiselect>
                </b-col>
            </b-row>
        </b-form-group>
        <b-form-group
            id="filter_by"
            label-cols-sm="2"
            label="Filter By:"
            label-align="left"
            horizontal>
            <b-row>
                <b-col cols="4">
                    <multiselect  
                        v-model="this.filterByValue" 
                        :options="filterByOptions"
                        :searchable="true"
                        :show-labels="false"
                        :multiple="false" 
                        :taggable="true" 
                        placeholder="Unit" 
                        label="name" 
                        track-by="id"></multiselect>
                </b-col>
                <b-col cols="4">
                        <b-input block></b-input>
                </b-col>
            </b-row>
        </b-form-group>
    </b-card>
</template>

<script>
// import {mapGetters} from "vuex";
export default {
name: "SearchTemplate",
    data(){
        return{
            deviceValue: '',
            deviceOptions: [],

            modelValue: '',
            modelOptions: [
                {id: '1', name: 'Model 1'},
                {id: '2', name: 'Model 2'},
                {id: '3', name: 'Model 3'}
            ],
            unitValue: '',
            unitOptions: [
                {id: '1', name: 'Unit 1'},
                {id: '2', name: 'Unit 2'},
                {id: '3', name: 'Unit 3'}
            ],
            filterByValue: '',
            filterByOptions: [
                {id: '1', name: 'ECO Number'},
                {id: '2', name: 'Supplier'}
            ]
        }
    },
    methods:{
        loadDevice: function () {
            this.deviceOptions=[];
            this.$store.dispatch("loadDevice")
                .then((response) => {
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
            this.deviceOptions=[];
                this.$store.dispatch("loadDevice")
                    .then((response) => {
                    let information = response.data.data;
                        Object.keys(information).forEach((key) => {
                            this.deviceOptions.push({
                                'id':information[key].id, 
                                'name':information[key].device_name
                            })
                        });
                });  
        },
        // loadUnits: function (id) {
        
        // }
    },
    mounted()
    {
        this.loadDevice()
    }
}
</script>

<style>

</style>