<template>
    <b-container fluid>
        <b-row>
            <b-col cols="12">
                <b-card>
                    <b-media>
                        <template #aside>
                            <font-awesome-icon
                                    :icon="content_icon"
                                    class="icon_style text-muted"
                                />
                        </template>
                        <strong class="mt-0 mb-0">{{content_label}}</strong>
                        <br>
                        <small class="text-muted">
                           Status: {{status_label}}
                        </small>
                    </b-media>
                    <b-row class="mt-4">
                        <!-- <b-col cols="8" float-left>
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
                        </b-col> -->
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
    name: 'ForChecking',
    props: {
        content_icon: String,
        content_label: String,
        content_sub_label: String,
    },
    data(){
        return{
            tab_values:
            [
                {
                    index:1,
                    name:"For Checking",
                    status:true,
                    to:"/for-checking-tab"
                },
                {
                    index:2,
                    name:"Done Checking",
                    status:false,
                    to:"/done-checking-tab"
                },
            ],
            status_label: '',
        }
    },
    mounted(){
        this.setStatus("For Checking");
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
            if(status == "For Checking")
            {
                this.status_label = "For Checking";
            }
            else
            {
                this.status_label = "Done Checking";
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