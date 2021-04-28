<template>
    <div>
        <b-modal 
            id="modal_edit_contents" 
            ref="modal_edit_contents"
            size="xl"
            hide-footer
            :no-close-on-backdrop="true" 
            centered
            scrollable>
            <template #modal-title="">
                <b-media>
                    <template #aside>
                        <b-img 
                            :src="require('../../../assets/icon_images/edit_content.svg')" 
                            width="44" 
                            height="37" 
                            alt="placeholder">
                        </b-img>
                    </template>
                    <h5 class="mt-2">Edit Contents</h5>
                </b-media>
            </template>
            <b-row class="mt-3 mr-3 ml-3 mb-3">
                <b-col cols="12">
                    <b-card class="custom_card">
                        <b-card-header 
                            header-tag="nav" 
                            class="custom_header">
                            <b-nav 
                                card-header 
                                tabs>
                                <div 
                                    v-for = "tab in tab_values" 
                                    :key= "tab.index" >
                                    <b-nav-item 
                                        :to="tab.to+'/'+status_id"
                                        :active="tab.status"
                                        @click="setIndex(tab.index)">
                                        {{tab.name}}</b-nav-item>
                                </div>
                            </b-nav>
                        </b-card-header>
                        <b-card-body class=" custom_body">
                            <router-view 
                                :status_name="status_name" 
                                :get_data="get_data"/>
                        </b-card-body>
                    </b-card>
                </b-col>
            </b-row>
        </b-modal>
    </div>
</template>

<script>
export default {
    name: 'EditContents',
    props: {
        status_name: String,
        status_id: String,
        get_data: Object,
    },
    data(){
        return{
            tab_values:
            [
                {
                    index:1,
                    name:"Production Engineering",
                    status:true,
                    to:"/production-engineering"
                },
                {
                    index:2,
                    name:"Production Control",
                    status:false,
                    to:"/production-control"
                },
                {
                    index:3,
                    name:"Purchasing",
                    status:false,
                    to:"/purchasing"
                }
            ],
            
        }
    },
    methods:
    {
        setIndex: function(index){
            this.tab_values.forEach(function(contents) {
                contents.status=false;
                if(contents.index === index)
                {
                contents.status=true;
                }
            });
        }
    },
}
</script>

<style>

</style>