<template>
    <b-container fluid>
        <b-row class="mb-4">
            <b-col cols="12">
               <b-media>
                    <template #aside>
                        <b-img 
                            :src="require('../assets/icon_images/newspaper.svg')" 
                            width="44" 
                            height="37" 
                            alt="placeholder">
                        </b-img>
                    </template>
                        <h5 class="mb-0">ECAS List</h5>
                        <small class="text-secondary">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, illum.
                        </small>
                </b-media> 
            </b-col>
        </b-row>
        <b-row>
            <b-col cols="12">
            <b-card class="pl-2 pr-2">
              <b-card-body>
                <b-row>
                    <b-col cols="2">
                        <b-row class='mb-3'>
                             <b-col cols="12">
                                <router-link to="/new_ecas">
                                   <b-card class="custom_side_card" @click="show_label('file-alt','New ECAS','Status: For Verification')"> 
                                        <b-media>
                                        <template #aside>
                                            <b-icon b-icon icon="file-earmark-plus"  font-scale="2" variant="secondary"></b-icon>                                       
                                        </template>
                                        <strong class="mt-0 mb-0">New ECAS</strong>
                                        <br>
                                        <small class="text-muted">
                                           Status: For Verification
                                        </small>
                                        </b-media>
                                    </b-card>
                                </router-link>
                             </b-col>
                        </b-row>
                         <b-row class='mb-3'>
                             <b-col cols="12">
                                <router-link to="/for_revision">
                                    <b-card class="custom_side_card"  @click="show_label('redo','For Revision','Status: For Verification')">
                                        <b-media>
                                        <template #aside>
                                            <b-icon icon="arrow-counterclockwise"  font-scale="2" variant="secondary"></b-icon>
                                        </template>
                                        <strong class="mt-0 mb-0">For Revision</strong>
                                        <br>
                                        <small class="text-muted">
                                            Status: For Revision
                                        </small>
                                        </b-media>
                                    </b-card>
                                </router-link>
                             </b-col>
                        </b-row>
                        <b-row class='mb-3'>
                             <b-col cols="12">
                                <router-link to="/for_checking">
                                    <b-card class="custom_side_card" @click="show_label('check-double','For Checking','Status: For Verification')">
                                        <b-media>
                                        <template #aside>
                                            <b-icon icon="check-square"  font-scale="2" variant="secondary"></b-icon>
                                        </template>
                                        <strong class="mt-0 mb-0">For Checking</strong>
                                        <br>
                                        <small class="text-muted">
                                            Status: For Checking
                                        </small>
                                        </b-media>
                                    </b-card>
                                </router-link>
                             </b-col>
                        </b-row>
                        <b-row class='mb-3'>
                             <b-col cols="12">
                                <router-link to="/for_approval">
                                    <b-card class="custom_side_card" @click="show_label('thumbs-up','For Approval','Status: For Verification')">
                                        <b-media>
                                        <template #aside>
                                            <b-icon icon="hand-thumbs-up"  font-scale="2" variant="secondary"></b-icon>
                                        </template>
                                        <strong class="mt-0 mb-0">For Approval</strong>
                                        <br>
                                        <small class="text-muted">
                                            Status: For Approval
                                        </small>
                                        </b-media>
                                    </b-card>
                                </router-link>
                            </b-col>
                        </b-row>
                        <b-row class='mb-3'>
                             <b-col cols="12">
                                <router-link to="/for_pc">
                                    <b-card class="custom_side_card" @click="show_label('pallet','For PC','Status: For Verification')">
                                        <b-media>
                                        <template #aside>
                                            <b-icon icon="box-seam"  font-scale="2" variant="secondary"></b-icon>
                                        </template>
                                        <strong class="mt-0 mb-0">For PC</strong>
                                        <br>
                                        <small class="text-muted">
                                            Status: For PC
                                        </small>
                                        </b-media>
                                    </b-card>
                                </router-link>
                            </b-col>
                        </b-row>
                        <b-row class='mb-3'>
                             <b-col cols="12">
                                <router-link to="/for_purchasing">
                                    <b-card class="custom_side_card" @click="show_label('hand-holding-usd','For Purchasing','Status: For Verification')">
                                        <b-media>
                                        <template #aside>
                                            <b-icon icon="minecart"  font-scale="2" variant="secondary"></b-icon>
                                        </template>
                                        <strong class="mt-0 mb-0">For Purchasing</strong>
                                        <br>
                                        <small class="text-muted">
                                            Status: For Purchasing
                                        </small>
                                        </b-media>
                                    </b-card>
                                </router-link>
                            </b-col>
                        </b-row>
                        <b-row class='mb-2'>
                             <b-col cols="12">
                                <router-link to="/finished_ecas">
                                    <b-card class="custom_side_card" @click="show_label('flag-checkered','Finished ECAS','Status: Finished ECAS')">
                                        <b-media>
                                        <template #aside>
                                            <b-icon icon="flag"  font-scale="2" variant="secondary"></b-icon>
                                        </template>
                                        <strong class="mt-0 mb-0">Finished ECAS</strong>
                                        <br>
                                        <small class="text-muted">
                                            Status: Finished ECAS
                                        </small>
                                        </b-media>
                                    </b-card>
                                </router-link>
                            </b-col>
                        </b-row>
                    </b-col>
                    <b-col cols="10">
                        <router-view 
                            :content_icon="content_icon" 
                            :content_label="content_label"
                            :content_sub_label="content_sub_label"/>
                    </b-col>
                </b-row>
              </b-card-body>
            </b-card>
            </b-col>
        </b-row>
    </b-container>
</template>

<script>
export default {
    name:"ECASList",
    data()
    {
        return{
            content_icon:'',
            content_label:'',
            content_sub_label:'',
        }
    },
    methods:{
        show_label(icon, label, sub_label)
        {
            this.content_icon = icon;
            this.content_label = label;
            this.content_sub_label = sub_label;
        },
        set_new_ecas()
        {
            this.content_icon = "file-alt"
            this.content_label = "New ECAS";
        },
        set_for_revision()
        {
            this.content_icon = "redo";
            this.content_label = "For Revision";
        },
        set_for_checking()
        {
            this.content_icon = "check-double";
            this.content_label = "For Checking";
        },
        set_for_approval()
        {
            this.content_icon = "thumbs-up";
            this.content_label = "For Approval";
        },
        set_for_pc()
        {
            this.content_icon = "pallet";
            this.content_label = "For PC";
        },
        set_for_purchasing()
        {
            this.content_icon = "hand-holding-usd";
            this.content_label = "For Purchasing";
        },
        set_finished_ecas()
        {
            this.content_icon = "flag-checkered";
            this.content_label = "Finished ECAS";
            this.content_sub_label = "Status: Finished ECAS";
        },
    },
    created(){
        this.set_new_ecas();
    }
}
</script>

<style scoped>
    /* .circle-icons
    {
        display:inline-flex;
        padding:10px;
        border-radius:50%;
        color:white;
        background-color:#9b9999;
    } */
    .custom_size
    {
        font-size:2.5em
    }
    .custom_side_card
    {
        cursor:pointer;
        border-left:.25em solid #e84656;
        right:0px;
        /* box-shadow: 0 4px 8px 0 rgba(107, 107, 107, 0.2), 1px 20px 20px 0 rgba(255, 255, 255, 0.19); */
        box-shadow: 0 2px 4px 0 rgba(0,0,0,0.18);

        transition: all 0.25s;
    }
    .custom_side_card:hover
    {
    
        /* border-top:1px solid #bbbbbb;
        border-right:1px solid #bbbbbb;
        border-bottom:1px solid #bbbbbb; */
        right:5px;
    }

    a {
        text-decoration: none;
        color: black;
    }
</style>