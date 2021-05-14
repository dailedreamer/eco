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
                                :items="getEmail.data" 
                                :fields="email_fields"
                                :per-page="perPage"
                                :current-page="currentPage">
                                <!-- :items="email_masterlists"  -->
                                <template #cell(no)="data" v-if="currentPage == 1">
                                    {{data.index+1}}
                                </template>
                                <template #cell(no)="data" v-else>
                                    {{(data.index+1) + (currentPage*perPage) - 10}}
                                </template>
                                <template #cell(actions)="data">
                                    <b-link
                                        v-b-modal.email_modal_id 
                                        :disabled="disable" 
                                        :id="'btn_actions_'+data.item.id"
                                        @click="editEmailRecipient(
                                            data.item.id, 
                                            data.item.subject,
                                            data.item.email_classification,
                                            data.item.cc_recipient, 
                                            data.item.to_recipient, 
                                            data.item.main_recipient)">
                                        Edit
                                    </b-link>
                                     <!-- <b-link
                                        v-b-modal.email_modal_id 
                                        :disabled="disable" 
                                        :id="'btn_actions_'+data.item.id"
                                        @click="editEmailRecipient(
                                            data.item.id)">
                                        Edit
                                    </b-link> -->
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
                        {{getEmail.data}}
                    </b-card-body>   
                </b-card>
            </b-col>  
        </b-row>
        <EmailUpdateModal
            :get_data="this.id"/>
    </b-container>
</template>

<script>
import { mapGetters } from "vuex";
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
            // { key: "id", label:"No", sortable: true, class: "text-center"},
            { key: "no", sortable: true, class: "text-center"},
            { key: "actions", class: "text-center"},
            { key: "subject", sortable: true, },
            { key: "email_classification", label: "Classification", sortable: true, class: "text-center"}, 
            { key: "status", class: "text-center"},
        ],
        disable: false,
        id: {},
        // update_id: ''
      }
    },
    mounted(){
        this.loadEmailMasterlist();
    },
    computed:{
        ...mapGetters(["getEmail"]),
        totalRows: function(){
            return this.email_masterlists.length
        }, 
    },
    methods: {
        loadEmailMasterlist() {
            this.$store.dispatch("loadEmailMasterlist")
            .then((response) => {
                this.toast(response.status,response.message);
                this.email_masterlists = response.data;
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
        editEmailRecipient: function(id, subject, email_classification, to_recipient , cc_recipient, main_recipient){
            console.log(id);
            // console.log(subject);
            // console.log(classification);
            // console.log(to);
            // console.log(cc);
            // console.log(main);
            let to_recipient_value = 
                {
                    'id':to_recipient, 
                    'name':to_recipient, 
                }
                

            let email_modal_content = {
                'subject' : subject,
                'email_classification' : email_classification,
                'to_recipient' : to_recipient_value,
                'cc_recipient' : cc_recipient,
                'main_recipient' : main_recipient
            }

            this.id = email_modal_content;
            console.log(this.id);
            // this.id = {};
            // this.id = this.getEmail.data[id-1];

        },
        toast: function (status, message){
            this.$toast(message, {
                type:status.toLowerCase().trim(),
                position: "bottom-right",
            });
        }
    }
}
</script>

<style scoped>

</style>