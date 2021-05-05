<template>
    <b-container fluid>
        <b-row class="mb-4">
           <b-col cols="12">
                <b-media>
                    <template #aside>
                         <b-img 
                            :src="require('../../assets/icon_images/email.svg')" 
                            width="44" 
                            height="37" 
                            alt="placeholder">
                        </b-img>
                    </template>
                    <h5 class="mb-0">EMAIL MANAGEMENT</h5>
                    <small class="text-secondary">
                        This is the description.
                    </small>
                </b-media>
           </b-col>
        </b-row>
        <b-row>
            <b-col cols="12">
                <b-card>
                    <b-card-body>
                        <b-card>
                            <b-media>
                                <h5 class="mb-0">Email Masterlist</h5>
                                <small class="text-secondary">
                                    This is a description.
                                </small>
                            </b-media>
                             <b-table 
                                class="alpha__table text-nowrap"
                                responsive 
                                hover 
                                bordered
                                head-variant="light" 
                                :items="email_masterlists" 
                                :fields="email_fields"
                                :per-page="perPage"
                                :current-page="currentPage">
                                <template #cell(actions)="data">
                                    <b-link
                                        v-b-modal.email_modal_id 
                                        :disabled="disable" 
                                        :id="'btn_actions_'+data.item.id"
                                        @click="updateEmailRecipient(data.index)">
                                        Edit
                                    </b-link>
                                </template>
                                <template #cell(status)="data">
                                    <toggle-button 
                                        @change="toggle(data.item.id, $event)"
                                        :value="true" 
                                        :labels="{checked: 'On', unchecked: 'Off'}" 
                                        :color="{checked: '#118f22', unchecked: '#FF0000'}"/>
                                </template>   
                             </b-table>  
                            <b-pagination 
                            class="alpha__table__pagination"
                            :total-rows="totalRows" 
                            v-model="currentPage"
                            :per-page="perPage"
                            align="right"
                            pills></b-pagination>  
                        </b-card>
                    </b-card-body>   
                </b-card>
            </b-col>  
        </b-row>
        <EmailUpdateModal
            :get_data="this.id"/>
    </b-container>
</template>

<script>
import EmailUpdateModal from '../../components/Management/Email/EmailUpdateModal.vue';
export default {
    components:{
        EmailUpdateModal
    },
    data() {
      return {
        currentPage: 1,
        perPage: 10,
        email_masterlists: [],
        email_fields: [
            { key: "id", label:"No", sortable: true, class: "text-center"},
            { key: "actions", class: "text-center"},
            { key: "subject", sortable: true, },
            { key: "email_classification", label: "Classification", sortable: true, class: "text-center"}, 
            { key: "status", class: "text-center"},
        ],
        disable: false,
        id: {},
      }
    },
    mounted(){
        this.loadEmailMasterlist();
    },
    computed:{
      totalRows: function(){
        return this.email_masterlists.length
      }, 
    },
    methods: {
        
        loadEmailMasterlist() {
            this.$store.dispatch("loadEmailMasterlist")
            .then((response) => {
                 this.email_masterlists = response.data;
                //  console.log(this.email_masterlists);
            })
        },
        toggle(data, event) {
            // console.log(data);
            let event_status = event.value;
            // console.log(event_status);
             if (event_status != true) {
                this.event_status = true;
                document.getElementById(`btn_actions_${data}`).disabled = true;
            } else {
                this.event_status = false;
                document.getElementById(`btn_actions_${data}`).disabled = false;
            }
        },
        updateEmailRecipient: function(id){
            // console.log(id);
            this.id = {};
            this.id = this.email_masterlists[id];
        }
    }
}
</script>

<style scoped>

</style>