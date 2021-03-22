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
                                   <b-card class="custom_side_card" @click="show_label('file-alt','New ECAS','Status: For Verification')">
                                        <b-media>
                                        <template #aside>
                                            <div class="circle-icons">
                                                <b-icon b-icon icon="file-earmark-plus"  font-scale="1.5" variant="white"></b-icon>
                                            </div>                                         
                                        </template>
                                        <strong class="mt-0 mb-0">New ECAS</strong>
                                        <br>
                                        <small class="text-muted">
                                           Status: For Verification
                                        </small>
                                        </b-media>
                                    </b-card>
                             </b-col>
                        </b-row>
                         <b-row class='mb-3'>
                             <b-col cols="12">
                                <b-card class="custom_side_card" @click="show_label('redo','For Revision','Status: For Verification')">
                                        <b-media>
                                        <template #aside>
                                            <div class="circle-icons">
                                                <b-icon icon="arrow-counterclockwise"  font-scale="1.5" variant="white"></b-icon>
                                            </div>
                                        </template>
                                        <strong class="mt-0 mb-0">For Revision</strong>
                                        <br>
                                        <small class="text-muted">
                                            Status: For Verification
                                        </small>
                                        </b-media>
                                    </b-card>
                             </b-col>
                        </b-row>
                        <b-row class='mb-3'>
                             <b-col cols="12">
                                <b-card class="custom_side_card" @click="show_label('check-double','For Checking','Status: For Verification')">
                                        <b-media>
                                        <template #aside>
                                            <div class="circle-icons">
                                                <b-icon icon="check-square"  font-scale="1.5" variant="white"></b-icon>
                                            </div>
                                        </template>
                                        <strong class="mt-0 mb-0">For Checking</strong>
                                        <br>
                                        <small class="text-muted">
                                            Status: For Verification
                                        </small>
                                        </b-media>
                                    </b-card>
                             </b-col>
                        </b-row>
                        <b-row class='mb-3'>
                             <b-col cols="12">
                                <b-card class="custom_side_card" @click="show_label('thumbs-up','For Approval','Status: For Verification')">
                                        <b-media>
                                        <template #aside>
                                            <div class="circle-icons">
                                                <b-icon icon="hand-thumbs-up"  font-scale="1.5" variant="white"></b-icon>
                                            </div>
                                        </template>
                                        <strong class="mt-0 mb-0">For Approval</strong>
                                        <br>
                                        <small class="text-muted">
                                            Status: For Verification
                                        </small>
                                        </b-media>
                                    </b-card>
                             </b-col>
                        </b-row>
                        <b-row class='mb-3'>
                             <b-col cols="12">
                                <b-card class="custom_side_card" @click="show_label('pallet','For PC','Status: For Verification')">
                                        <b-media>
                                        <template #aside>
                                            <div class="circle-icons">
                                                <b-icon icon="box-seam"  font-scale="1.5" variant="white"></b-icon>
                                            </div>
                                        </template>
                                        <strong class="mt-0 mb-0">For PC</strong>
                                        <br>
                                        <small class="text-muted">
                                            Status: For 
                                        </small>
                                        </b-media>
                                    </b-card>
                             </b-col>
                        </b-row>
                        <b-row class='mb-3'>
                             <b-col cols="12">
                                <b-card class="custom_side_card" @click="show_label('hand-holding-usd','For Purchasing','Status: For Verification')">
                                    <b-media>
                                    <template #aside>
                                        <div class="circle-icons">
                                            <b-icon icon="minecart"  font-scale="1.5" variant="white"></b-icon>
                                        </div>
                                    </template>
                                    <strong class="mt-0 mb-0">For Purchasing</strong>
                                    <br>
                                    <small class="text-muted">
                                        Status: For 
                                    </small>
                                    </b-media>
                                </b-card>
                             </b-col>
                        </b-row>
                        <b-row class='mb-2'>
                             <b-col cols="12">
                                <b-card class="custom_side_card" @click="show_label('flag-checkered','Finished ECAS','Status: For Verification')">
                                        <b-media>
                                        <template #aside>
                                            <div class="circle-icons">
                                                <b-icon icon="flag"  font-scale="1.5" variant="white"></b-icon>
                                            </div>
                                        </template>
                                        <strong class="mt-0 mb-0">Finished ECAS</strong>
                                        <br>
                                        <small class="text-muted">
                                            Status: For Verification
                                        </small>
                                        </b-media>
                                    </b-card>
                             </b-col>
                        </b-row>
                    </b-col>
                    <b-col cols="10">
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
                        </b-card>
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
            this.content_sub_label = "Status: For Verification";
        },
        set_for_revision()
        {
            this.content_icon = "redo";
            this.content_label = "For Revision";
            this.content_sub_label = "Status: For Verification";
        },
         set_for_checking()
        {
            this.content_icon = "check-double";
            this.content_label = "For Checking";
            this.content_sub_label = "Status: For Verification";
        },
        set_for_approval()
        {
            this.content_icon = "thumbs-up";
            this.content_label = "For Approval";
            this.content_sub_label = "Status: For Verification";
        },
        set_for_pc()
        {
            this.content_icon = "pallet";
            this.content_label = "For PC";
            this.content_sub_label = "Status: For Verification";
        },
        set_for_purchasing()
        {
            this.content_icon = "hand-holding-usd";
            this.content_label = "For Purchasing";
            this.content_sub_label = "Status: For Verification";
        },
        set_finished_ecas()
        {
            this.content_icon = "flag-checkered";
            this.content_label = "Finished ECAS";
            this.content_sub_label = "Status: For Verification";
        },
    },
    created(){
        this.set_new_ecas();
    }
}
</script>

<style scoped>
.circle-icons
{
    display:inline-flex;
    padding:10px;
    border-radius:50%;
    background-color:#e84656;
    color:white
}
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
</style>