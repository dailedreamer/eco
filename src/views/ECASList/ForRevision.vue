<template>
    <b-container fluid>
        <b-row>
            <b-col cols="12">
                <b-card>
                    <b-media>
                        <template #aside>
                            <!-- <font-awesome-icon
                                    :icon="content_icon"
                                    class="icon_style text-muted"
                                /> -->
                            <b-img 
                                :src="require('../../assets/icon_images/ecas/revisions.png')" 
                                width="40" 
                                height="40" 
                                alt="placeholder">
                            </b-img>
                        </template>
                        <strong class="mt-0 mb-0">{{content_label}}</strong>
                        <br>
                        <small class="text-muted">
                            Status: {{status_label}}
                        </small>
                    </b-media>
                    <b-row class="mt-4">
                        <b-col cols="8" float-left>
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
                                                :to="tab.to" 
                                                :active="tab.status" 
                                                @click="setIndex(tab.index), setStatus(tab.name)">
                                                {{tab.name}}</b-nav-item>
                                        </div>
                                    </b-nav>
                                </b-card-header>
                                <b-card-body class=" custom_body">
                                    <router-view/>
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
export default {
    name: 'ForRevision',
    props: {
        content_icon: String,
        content_label: String,
        // content_sub_label: String,
    },
    data(){
        return{
            tab_values:
            [
                {
                    index:1,
                    name:"For Revision",
                    status:true,
                    to:"/for-revision-tab"
                },
                {
                    index:2,
                    name:"Done Revision",
                    status:false,
                    to:"/done-revision-tab"
                },
            ] ,
            status_label:'',
        }
    },
    mounted()
    {
        this.setStatus('For Revision');
    },
    methods:
    {
        setIndex(index)
        {
            this.tab_values.forEach(function(contents) 
            {
                contents.status=false;
                if(contents.index === index)
                    {
                    contents.status=true;
                    }
            });
        },
        setStatus(status)
        {
            if(status == "For Revision")
            {
                this.status_label = "For Revision";
            }
            else
            {
                this.status_label = "Done Revision";
            }
        }
        
    }
}
</script>

<style scoped>
    .icon_style{
        width: 30px;
        height: 30px;
        margin-top: 8px;
        margin-left: 4px;
    }
</style>