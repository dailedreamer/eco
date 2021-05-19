<template>
    <b-container fluid>
         <b-row>
            <b-col cols="12">
                <b-card>
                    <b-media>
                        <template #aside>
                             <!-- <b-img 
                                :src="require('../../assets/icon_images/ecas/new-ecas.png')" 
                                width="40" 
                                height="40" 
                                alt="placeholder">
                            </b-img> -->
                            <!-- <font-awesome-icon
                                    :icon="content_icon"
                                    class="icon_style text-muted"
                                   /> -->
                        </template>
                        <strong class="mt-0 mb-0">{{content_label}}</strong>
                        <br>
                        <small class="text-muted">
                            Status: {{content_sub_label}}
                        </small>
                    </b-media>
                    <b-row class="mt-4">
                        <b-col cols="8">
                             <SearchTemplate field_set='1'>
                                <b-button 
                                variant="danger"
                                block
                                type="submit"
                                id="button-submit">
                                <b-icon icon="search"></b-icon>
                                    &nbsp;Go!
                                </b-button>
                            </SearchTemplate>
                        </b-col>
                    </b-row>
                    <b-row class="mt-4">
                        <!-- <b-col cols="12">
                           <b-card>
                                <b-row>
                                    <b-button 
                                        class="ml-3 mr-3"
                                        size="md" 
                                        variant="danger" 
                                        title="Click to save changes">{{button1}}
                                    </b-button> 
                                    <b-button 
                                        size="md" 
                                        variant="danger" 
                                        title="Click to save changes">{{button2}}
                                    </b-button> 
                                </b-row>
                                <b-row class="mt-4">
                                    <b-col cols="12">
                                        <b-table 
                                            class="alpha__table text-nowrap"
                                            responsive 
                                            hover 
                                            bordered
                                            head-variant="light"
                                            :items="ecas_list"
                                            :fields="ecas_fields">
                                        </b-table>
                                    </b-col>
                                </b-row>
                            </b-card>
                        </b-col> -->
                        <b-col cols="12">
                            <b-card class="custom_card">
                                <b-card-header 
                                    header-tag="nav" 
                                    class="custom_header">
                                    <b-nav 
                                        v-if="content_label == 'New ECAS'"
                                        card-header 
                                        tabs>
                                        <div 
                                            v-for = "new_ecas_tab in new_ecas_tab_values" 
                                            :key= "new_ecas_tab.index" >
                                            <b-nav-item 
                                                :to="new_ecas_tab.to" 
                                                :active="new_ecas_tab.status" 
                                                @click="setIndex(new_ecas_tab.index), setStatus(new_ecas_tab.name)">
                                                {{new_ecas_tab.name}}</b-nav-item>
                                        </div>
                                    </b-nav>
                                    <b-nav 
                                        v-else-if="content_label == 'For Revision'"
                                        card-header 
                                        tabs>
                                        <div 
                                            v-for = "for_rev_tab in for_rev_tab_values" 
                                            :key= "for_rev_tab.index" >
                                            <b-nav-item 
                                                :to="for_rev_tab.to" 
                                                :active="for_rev_tab.status" 
                                                @click="setIndex1(for_rev_tab.index), setStatus(for_rev_tab.name)">
                                                {{for_rev_tab.name}}</b-nav-item>
                                        </div>
                                    </b-nav>
                                    <b-nav 
                                        v-else-if="content_label == 'For Checking'"
                                        card-header 
                                        tabs>
                                        <div 
                                            v-for = "for_checking_tab in for_checking_tab_values" 
                                            :key= "for_checking_tab.index" >
                                            <b-nav-item 
                                                :to="for_checking_tab.to" 
                                                :active="for_checking_tab.status" 
                                                @click="setIndex2(for_checking_tab.index), setStatus(for_checking_tab.name)">
                                                {{for_checking_tab.name}}</b-nav-item>
                                        </div>
                                    </b-nav>
                                    <b-nav 
                                        v-else-if="content_label == 'For Approval'"
                                        card-header 
                                        tabs>
                                        <div 
                                            v-for = "for_approvavl_tab in for_approval_tab_values" 
                                            :key= "for_approvavl_tab.index" >
                                            <b-nav-item 
                                                :to="for_approvavl_tab.to" 
                                                :active="for_approvavl_tab.status" 
                                                @click="setIndex3(for_approvavl_tab.index), setStatus(for_approvavl_tab.name)">
                                                {{for_approvavl_tab.name}}</b-nav-item>
                                        </div>
                                    </b-nav>
                                    <b-nav 
                                        v-else-if="content_label == 'For PC'"
                                        card-header 
                                        tabs>
                                        <div 
                                            v-for = "for_pc_tab in for_pc_tab_values" 
                                            :key= "for_pc_tab.index" >
                                            <b-nav-item 
                                                :to="for_pc_tab.to" 
                                                :active="for_pc_tab.status" 
                                                @click="setIndex4(for_pc_tab.index), setStatus(for_pc_tab.name)">
                                                {{for_pc_tab.name}}</b-nav-item>
                                        </div>
                                    </b-nav>
                                    <b-nav 
                                        v-else-if="content_label == 'For Purchasing'"
                                        card-header 
                                        tabs>
                                        <div 
                                            v-for = "for_purchasing_tab in for_purchasing_tab_values" 
                                            :key= "for_purchasing_tab.index" >
                                            <b-nav-item 
                                                :to="for_purchasing_tab.to" 
                                                :active="for_purchasing_tab.status" 
                                                @click="setIndex5(for_purchasing_tab.index), setStatus(for_purchasing_tab.name)">
                                                {{for_purchasing_tab.name}}</b-nav-item>
                                        </div>
                                    </b-nav>

                                </b-card-header>
                                <b-card-body class=" custom_body">
                                    <b-row class="mt-4">
                                        <b-col cols="12">
                                            <b-table 
                                                class="alpha__table text-nowrap"
                                                responsive 
                                                hover 
                                                bordered
                                                head-variant="light"
                                                :items="getEcasDetails.data"
                                                :fields="ecas_fields">
                                                <template #cell(action)="">
                                                    <b-link 
                                                        class="link_style">
                                                        Edit
                                                    </b-link>
                                                    <label class="ml-1 mr-1 text-secondary">|</label>
                                                    <b-link 
                                                        class="link_style">
                                                        Subparts
                                                    </b-link>
                                                </template>
                                            </b-table>
                                        </b-col>
                                    </b-row>
                                </b-card-body>
                            </b-card>
                        </b-col>
                    </b-row>
                </b-card>
            </b-col>
        </b-row>
    </b-container>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
    name: "ECASListContent",
    props: {
        content_icon: String,
        content_label: String,
        content_sub_label: String,
    },
    data(){
        return{
            ecas_fields:
            [
                {key: "action", class: 'text-center'},
                {key: "device_name", label:"Device", sortable: true, class: 'text-center'},
                {key: "model_name", label:"Model", sortable: true, class: 'text-center'}, 
                {key: "unit_number", sortable: true, class: 'text-center'}, 
                {key: "unit_name", sortable: true, class: 'text-center'}, 
                {key: "part_number", sortable: true, class: 'text-center'},
                {key: "eco_number", sortable: true, class: 'text-center'},
                {key: "current_revision", label:"Old Revision", sortable: true, class: 'text-center'},
                {key: "ecas_number", sortable: true, class: 'text-center'},
                {key: "new_revision", sortable: true, class: 'text-center'},
                {key: "release_date", sortable: true, class: 'text-center'},
            ],
            // ecas_list:
            // [
            //     { device_name: "device1", model_name: "model1", unit_number: "unit1", unit_name: "name1", 
            //         parts_number: "KD0001", eco_number: "123456", current_revision: "01", ecas_number: "121212",
            //         new_revision: "02", },
            //     {device_name: "device2", model_name: "model2", unit_number: "unit2", unit_name: "name2", 
            //         parts_number: "KD0002", eco_number: "010101", current_revision: "02", ecas_number: "232323",
            //         new_revision: "03", },
            // ], 
            new_ecas_tab_values:
            [
                {
                    index:1,
                    name:"New ECAS",
                    status:true,
                    to:"/new-ecas-tab",
                },
                {
                    index:2,
                    name:"Done ECAS",
                    status:false,
                    to:"/done-ecas-tab",
                },
            ],
            for_rev_tab_values:
            [
                {
                    index:2,
                    name:"For Revision",
                    status:true,
                    to:"/for-revision-tab"
                },
                {
                    index:3,
                    name:"Done Revision",
                    status:false,
                    to:"/done-revision-tab"
                },
            ],
            for_checking_tab_values:
            [
                {
                    index:4,
                    name:"For Checking",
                    status:true,
                    to:"/for-checking-tab"
                },
                {
                    index:5,
                    name:"Done Checking",
                    status:false,
                    to:"/done-checking-tab"
                },
            ],
            for_approval_tab_values:
            [
                {
                    index:6,
                    name:"For Approval",
                    status:true,
                    to:"/for-approval-tab"
                },
                {
                    index:7,
                    name:"Done Approval",
                    status:false,
                    to:"/done-approval-tab"
                },
            ],
            for_pc_tab_values:
            [
                {
                    index:8,
                    name:"For PC",
                    status:true,
                    to:"/for-pc-tab"
                },
                {
                    index:9,
                    name:"Done PC",
                    status:false,
                    to:"/done-pc-tab"
                },
            ],
            for_purchasing_tab_values:
            [
                {
                    index:10,
                    name:"For Purchasing",
                    status:true,
                    to:"/for-purchasing-tab"
                },
                {
                    index:11,
                    name:"Done Purchasing",
                    status:false,
                    to:"/done-purchasing-tab"
                },
            ],
            statusId: '',
        }
    },
    computed: {
        ...mapGetters(["getEcasDetails"]),
    },
     mounted()
    {
        this.setStatus('New ECAS');
        // this.loadEcas();
    },
    methods:
    {
        setIndex(index)
        {
            this.statusId = index;
            this.new_ecas_tab_values.forEach(function(contents) 
            {
                contents.status=false;
                if(contents.index === index)
                    {
                    contents.status=true;
                    }
            });

            this.$store.dispatch("loadEcasDetails", this.statusId)
            .then((response) => {
                console.log(response);
            })
        },
        setIndex1(index)
        {
            this.statusId = index;
            this.for_rev_tab_values.forEach(function(contents) 
            {
                contents.status=false;
                if(contents.index === index)
                    {
                    contents.status=true;
                    }
            });

            this.$store.dispatch("loadEcasDetails", this.statusId)
            .then((response) => {
                console.log(response);
            })
        },
        setIndex2(index)
        {
            this.statusId = index;
            this.for_checking_tab_values.forEach(function(contents) 
            {
                contents.status=false;
                if(contents.index === index)
                    {
                    contents.status=true;
                    }
            });

            this.$store.dispatch("loadEcasDetails", this.statusId)
            .then((response) => {
                console.log(response);
            })
        },
        setIndex3(index)
        {
            this.statusId = index;
            this.for_approval_tab_values.forEach(function(contents) 
            {
                contents.status=false;
                if(contents.index === index)
                    {
                    contents.status=true;
                    }
            });

            this.$store.dispatch("loadEcasDetails", this.statusId)
            .then((response) => {
                console.log(response);
            })
        },
        setIndex4(index)
        {
            this.statusId = index;
            this.for_pc_tab_values.forEach(function(contents) 
            {
                contents.status=false;
                if(contents.index === index)
                    {
                    contents.status=true;
                    }
            });

            this.$store.dispatch("loadEcasDetails", this.statusId)
            .then((response) => {
                console.log(response);
            })
        },
        setIndex5(index)
        {
            this.statusId = index;
            this.for_purchasing_tab_values.forEach(function(contents) 
            {
                contents.status=false;
                if(contents.index === index)
                    {
                    contents.status=true;
                    }
            });

            this.$store.dispatch("loadEcasDetails", this.statusId)
            .then((response) => {
                console.log(response);
            })
        },
        setStatus(status)
        {
            console.log(status);
            // if(status == "New ECAS")
            // {
            //     this.status_label = "For Verification";
            // }
            // else
            // {
            //     this.status_label = "Done ECAS";
            // }
        },
        
    },
}
</script>

<style scoped>
    .link_style{
        /* color: red !important; */
        font-size:0.9em;
    }
</style>