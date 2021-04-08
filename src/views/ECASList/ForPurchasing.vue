<template>
    <b-container fluid>
        <b-row>
            <b-col cols="12">
                <b-card>
                    <b-media>
                        <template #aside>
                            <font-awesome-icon
                                    :icon="content_icon"
                                    class="icon text-muted custom_size"
                                />
                        </template>
                        <strong class="mt-0 mb-0">{{content_label}}</strong>
                        <br>
                        <small class="text-muted">
                            {{content_sub_label}}
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
                                                @click="setIndex(tab.index)">
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
    name: 'ForPurchasing',
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
                    name:"For Purchasing",
                    status:true,
                    to:"/for-purchasing-tab"
                },
                {
                    index:2,
                    name:"Done Purchasing",
                    status:false,
                    to:"/done-purchasing-tab"
                },
            ] 
        }
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
        }
    }
}
</script>

<style scoped>

</style>