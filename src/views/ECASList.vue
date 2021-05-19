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
        <!-- <b-row>
            <b-col cols="12">
            <b-card class="pl-2 pr-2">
              <b-card-body>
                <b-row>
                    <b-col cols="2">
                        <b-row class='mb-3'>
                             <b-col cols="12">
                                <router-link to="/new_ecas">
                                   <b-card 
                                        class="custom_side_card" 
                                        @click="show_label('file-alt','New ECAS','Status: For Verification'), setActive('new_ecas')"
                                        :class="{ active: isActive('new_ecas')}"> 
                                        <b-media>
                                        <template #aside>
                                            <b-icon b-icon icon="file-earmark-plus"  font-scale="2" variant="secondary"></b-icon>                                       
                                            <b-img 
                                                class="ml-1 mt-1"
                                                :src="require('../assets/icon_images/ecas/new-ecas.png')" 
                                                width="30" 
                                                height="30" 
                                                alt="placeholder">
                                            </b-img>
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
                                    <b-card 
                                        class="custom_side_card"  
                                        @click="show_label('redo','For Revision','Status: For Verification'), setActive('for_revision')"
                                        :class="{ active: isActive('for_revision')}">
                                        <b-media>
                                        <template #aside>
                                            <b-icon icon="arrow-counterclockwise"  font-scale="2" variant="info"></b-icon>
                                             <b-img 
                                                class="ml-1 mt-1"
                                                :src="require('../assets/icon_images/ecas/revisions.png')" 
                                                width="30" 
                                                height="30" 
                                                alt="placeholder">
                                            </b-img>
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
                                            <b-img 
                                                class="ml-1 mt-1"
                                                :src="require('../assets/icon_images/ecas/checking.png')" 
                                                width="30" 
                                                height="30" 
                                                alt="placeholder">
                                            </b-img>
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
                                            <b-img 
                                                class="ml-1 mt-1"
                                                :src="require('../assets/icon_images/ecas/approval.png')" 
                                                width="30" 
                                                height="30" 
                                                alt="placeholder">
                                            </b-img>
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
                                            <b-img 
                                                class="ml-1 mt-1"
                                                :src="require('../assets/icon_images/ecas/pc.png')" 
                                                width="30" 
                                                height="30" 
                                                alt="placeholder">
                                            </b-img>
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
                                            <b-img 
                                                class="ml-1 mt-1"
                                                :src="require('../assets/icon_images/ecas/purchasing.png')" 
                                                width="30" 
                                                height="30" 
                                                alt="placeholder">
                                            </b-img>
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
                                            <b-img 
                                                class="ml-1 mt-1"
                                                :src="require('../assets/icon_images/ecas/finished.png')" 
                                                width="30" 
                                                height="30" 
                                                alt="placeholder">
                                            </b-img>
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
        </b-row> -->
          <b-row>
            <b-col cols="12">
            <b-card class="pl-2 pr-2">
              <b-card-body>
                <b-row>
                    <b-col cols="2">
                        <b-row class='mb-3'>
                             <b-col cols="12">
                                <b-button 
                                    block 
                                    squared 
                                    size="sm" 
                                    router-link to="/new_ecas" 
                                    class="pt-4 pb-4 pr-5 custom_button custom_inactive custom_size" 
                                    variant="outline-secondary"
                                    @click="show_label('file-alt','New ECAS','For Verification'), setActive('new_ecas'), buttonLabel('New ECAS', 'Done ECAS')"
                                    :class="{ active: isActive('new_ecas')}">
                                    <b-media>
                                        <template #aside>
                                            <b-img 
                                                class="ml-2 mt-1"
                                                :src="require('../assets/icon_images/ecas/new-ecas.png')" 
                                                width="33" 
                                                height="33" 
                                                alt="placeholder">
                                            </b-img>
                                        </template>
                                        <strong class="mt-0 mb-0">New ECAS</strong>
                                        <br>
                                        <small class="text-muted">
                                           Status: For Verification
                                        </small>
                                    </b-media>
                                </b-button>
                             </b-col>
                        </b-row>
                         <b-row class='mb-3'>
                             <b-col cols="12">
                                <b-button 
                                    block 
                                    squared 
                                    size="sm" 
                                    router-link to="/for_revision" 
                                    class="pt-4 pb-4 pr-5 custom_button custom_inactive custom_size" 
                                    variant="outline-secondary"
                                     @click="show_label('redo','For Revision','For Revision'), setActive('for_revision'), buttonLabel('For Revision', 'Done Revision')"
                                        :class="{ active: isActive('for_revision')}">
                                    <b-media>
                                        <template #aside>
                                            <b-img 
                                                class="ml-2 mt-1"
                                                :src="require('../assets/icon_images/ecas/revisions.png')" 
                                                width="33" 
                                                height="33" 
                                                alt="placeholder">
                                            </b-img>
                                        </template>
                                        <strong class="mt-0 mb-0">For Revision</strong>
                                        <br>
                                        <small class="text-muted">
                                            Status: For Revision
                                        </small>
                                    </b-media>
                                </b-button>
                             </b-col>
                        </b-row>
                        <b-row class='mb-3'>
                             <b-col cols="12">
                                <b-button 
                                    block 
                                    squared 
                                    size="sm" 
                                    router-link to="/for_checking" 
                                    class="pt-4 pb-4 pr-5 custom_button custom_inactive custom_size" 
                                    variant="outline-secondary"
                                    @click="show_label('check-double','For Checking','For Checking'), setActive('for_checking'), buttonLabel('For Checking', 'Done Checking')"
                                    :class="{ active: isActive('for_checking')}">
                                    <b-media>
                                        <template #aside>
                                            <b-img 
                                                class="ml-2 mt-1"
                                                :src="require('../assets/icon_images/ecas/checking.png')"
                                                width="33" 
                                                height="33" 
                                                alt="placeholder">
                                            </b-img>
                                        </template>
                                        <strong class="mt-0 mb-0">For Checking</strong>
                                        <br>
                                        <small class="text-muted">
                                            Status: For Checking
                                        </small>
                                    </b-media>
                                </b-button>
                             </b-col>
                        </b-row>
                        <b-row class='mb-3'>
                             <b-col cols="12">
                                <b-button 
                                    block 
                                    squared 
                                    size="sm" 
                                    router-link to="/for_approval" 
                                    class="pt-4 pb-4 pr-5 custom_button custom_inactive custom_size" 
                                    variant="outline-secondary"
                                    @click="show_label('thumbs-up','For Approval','For Approval'), setActive('for_approval'), buttonLabel('For Approval', 'Done Approval')"
                                    :class="{ active: isActive('for_approval')}">
                                    <b-media>
                                        <template #aside>
                                            <b-img 
                                                class="ml-2 mt-1"
                                                :src="require('../assets/icon_images/ecas/approval.png')" 
                                                width="33" 
                                                height="33" 
                                                alt="placeholder">
                                            </b-img>
                                        </template>
                                        <strong class="mt-0 mb-0">For Approval</strong>
                                        <br>
                                        <small class="text-muted">
                                            Status: For Approval
                                        </small>
                                    </b-media>
                                </b-button>
                            </b-col>
                        </b-row>
                        <b-row class='mb-3'>
                             <b-col cols="12">
                                <b-button 
                                    block 
                                    squared 
                                    size="sm" 
                                    router-link to="/for_pc" 
                                    class="pt-4 pb-4 pr-5 custom_button custom_inactive custom_size" 
                                    variant="outline-secondary"
                                    @click="show_label('pallet','For PC','For PC'), setActive('for_pc'), buttonLabel('For PC', 'Done PC')"
                                    :class="{ active: isActive('for_pc')}">
                                    <b-media>
                                        <template #aside>
                                            <b-img 
                                                class="ml-2 mt-1"
                                                :src="require('../assets/icon_images/ecas/pc.png')" 
                                                width="33" 
                                                height="33" 
                                                alt="placeholder">
                                            </b-img>
                                        </template>
                                        <strong class="mt-0 mb-0">For PC</strong>
                                        <br>
                                        <small class="text-muted">
                                            Status: For PC
                                        </small>
                                    </b-media>
                                </b-button>
                            </b-col>
                        </b-row>
                        <b-row class='mb-3'>
                             <b-col cols="12">
                                <b-button 
                                    block 
                                    squared 
                                    size="sm" 
                                    router-link to="/for_purchasing" 
                                    class="pt-4 pb-4 pr-5 custom_button custom_inactive custom_size" 
                                    variant="outline-secondary"
                                    @click="show_label('hand-holding-usd','For Purchasing','For Purchasing'), setActive('for_purchasing'), buttonLabel('For Purchasing', 'Done Purchasing')"
                                    :class="{ active: isActive('for_purchasing')}">
                                    <b-media>
                                        <template #aside>
                                            <b-img 
                                                class="ml-2 mt-1"
                                                :src="require('../assets/icon_images/ecas/purchasing.png')" 
                                                width="33" 
                                                height="33" 
                                                alt="placeholder">
                                            </b-img>
                                        </template>
                                        <strong class="mt-0 mb-0">For Purchasing</strong>
                                        <br>
                                        <small class="text-muted">
                                            Status: For Purchasing
                                        </small>
                                    </b-media>
                                </b-button>
                            </b-col>
                        </b-row>
                        <b-row class='mb-2'>
                             <b-col cols="12">
                                <b-button 
                                    block 
                                    squared 
                                    size="sm" 
                                    router-link to="/finished_ecas" 
                                    class="pt-4 pb-4 pr-5 custom_button custom_inactive custom_size" 
                                    variant="outline-secondary"
                                    @click="show_label('flag-checkered','Finished ECAS','Finished ECAS'), setActive('finished_ecas')"
                                    :class="{ active: isActive('finished_ecas')}">
                                    <b-media>
                                        <template #aside>
                                            <b-img 
                                                class="ml-2 mt-1"
                                                :src="require('../assets/icon_images/ecas/finished.png')" 
                                                width="33" 
                                                height="33" 
                                                alt="placeholder">
                                            </b-img>
                                        </template>
                                        <strong class="mt-0 mb-0">Finished ECAS</strong>
                                        <br>
                                        <small class="text-muted">
                                            Status: Finished ECAS
                                        </small>
                                    </b-media>
                                </b-button>
                            </b-col>
                        </b-row>
                    </b-col>
                    <b-col cols="10">
                        <!-- <router-view 
                            :content_icon="content_icon" 
                            :content_label="content_label"
                            :content_sub_label="content_sub_label"/> -->
                            <ECASContent 
                            :content_icon="content_icon" 
                            :content_label="content_label"
                            :content_sub_label="content_sub_label"
                            :button1="button1"
                            :button2="button2"/>
                    </b-col>
                </b-row>
              </b-card-body>
            </b-card>
            </b-col>
        </b-row>
    </b-container>
</template>

<script>
import ECASContent from '../views/ECASList/ECASListContent';
export default {
    name:"ECASList",
    components:{
        ECASContent
    },
    data()
    {
        return{
            content_icon:'',
            content_label:'',
            content_sub_label:'',
            activeItem: 'new_ecas',
            button1: '',
            button2: '',
        }
    },
    created(){
        this.set_new_ecas();
        // this.buttonLabel();
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
            this.content_label = "New ECAS"
            this.content_sub_label = "For Verification";
            this.button1 = "New ECAS";
            this.button2 = "Done ECAS";
        },
        buttonLabel(button1, button2){
            this.button1 = button1;
            this.button2 = button2;
        },
        // set_for_revision()
        // {
        //     this.content_icon = "redo";
        //     this.content_label = "For Revision";
        // },
        // set_for_checking()
        // {
        //     this.content_icon = "check-double";
        //     this.content_label = "For Checking";
        // },
        // set_for_approval()
        // {
        //     this.content_icon = "thumbs-up";
        //     this.content_label = "For Approval";
        // },
        // set_for_pc()
        // {
        //     this.content_icon = "pallet";
        //     this.content_label = "For PC";
        // },
        // set_for_purchasing()
        // {
        //     this.content_icon = "hand-holding-usd";
        //     this.content_label = "For Purchasing";
        // },
        // set_finished_ecas()
        // {
        //     this.content_icon = "flag-checkered";
        //     this.content_label = "Finished ECAS";
        //     this.content_sub_label = "Status: Finished ECAS";
        // },
        isActive: function (menuItem) {
            return this.activeItem === menuItem
        },
        setActive: function (menuItem) {
            this.activeItem = menuItem 
        },
    },
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
        /* font-size:2.5em */
        font-size:1em
    }
    /* .custom_side_card
    {
        cursor:pointer;
        border-left:.25em solid #e84656;
        right:0px;
        box-shadow: 0 2px 4px 0 rgba(0,0,0,0.18);
        transition: all 0.25s;
    }
    .custom_side_card:hover
    {
        right:5px;
    }

    a {
        text-decoration: none;
        color: black;
    } */

  .custom_button
{
    /* background-color:hsl(0,0%,96%); */
    border-color:hsl(0,0%,85%)
}
/* .custom_active
{
   border-left: 4px solid #e84656;
} */
.custom_inactive
{
    border-left: 4px solid hsl(0,0%, 60%);
}

.btn-outline-secondary {
    color: #5e5e5e;
    box-shadow: 0 4px 8px 0 rgba(107, 107, 107, 0.2), 1px 20px 20px 0 rgba(255, 255, 255, 0.19);
}
.btn-outline-secondary:hover, .btn-outline-secondary:active  {
    color: #585858 !important;
    background-color:#e8e8e8 !important;
    box-shadow: 0 2px 4px 0 rgba(0,0,0,0.18) !important;
    /* border-color: #6c757d;
    border-left: 5px solid red; */
}
.btn-outline-secondary:not(:disabled):not(.disabled):active, 
.btn-outline-secondary:not(:disabled):not(.disabled).active, .show > 
.btn-outline-secondary.dropdown-toggle 
{
    border-left: 4px solid #e84656;
    background: white;
    color: rgb(59, 59, 59);
    border-right:  transparent;
    border-top: transparent;
    border-bottom: transparent;
}
.btn-outline-secondary[data-v-bc6e35b0]:hover, 
.btn-outline-secondary[data-v-bc6e35b0]:active 
{
    /* box-shadow: 0 2px 4px 0 rgba(0,0,0,0.18) !important; */
    /* background: unset; */
    box-shadow: 0 2px 4px 0 #f70a0a2e !important;
    background-color: #e8e8e8 !important; 
    
    }
</style>

