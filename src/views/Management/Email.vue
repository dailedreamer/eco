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

                             <b-table outlined hover fixed :items="email_masterlists" :fields="email_fields" primary-key="id">
                                <template #cell(actions)="data">
                                    <b-button variant="primary" size="sm"  v-b-modal.email_modal_id
                                        :disabled="disable" 
                                        :id="'btn_actions_'+data.item.id">
                                        <font-awesome-icon icon="edit" />
                                    </b-button>
                                </template>
                                <template #cell(status)="data">
                                    <toggle-button @change="toggle(data.item.id, $event)"
                                        :value="true" 
                                        :labels="{checked: 'On', unchecked: 'Off'}" 
                                        :color="{checked: '#118f22', unchecked: '#FF0000'}"/>
                                </template>   
                             </b-table>    
                        </b-card>
                    </b-card-body>   
                </b-card>
            </b-col>  
        </b-row>
        <EmailUpdateModal />
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
        // email_masterlists: [
        //     { id: 1, subject: 'Email1', classification: 'FTEC'},
        //     { id: 2, subject: 'Email2', classification: 'ECAS'}
        // ],
        // email_fields: [
        //     { key: "id", label: "NO", sortable: true },
        //     { key: "actions"},
        //     { key: "subject", sortable: true },
        //     { key: "classification", sortable: true},
        //     { key: "status"}
        // ],
        email_masterlists: [],
        email_fields: [
            { key: "id", label: "No", sortable: true },
            { key: "actions"},
            { key: "id_number", label: "Subject", sortable: true },
            { key: "last_name", label: "Classification", sortable: true },
            { key: "status"},
        ],
        disable: false,
      }
    },
    mounted(){
        this.loadEmailMasterlist();
    },
    methods: {
        loadEmailMasterlist() {
            this.$store.dispatch("loadEmailMasterlist")
            .then((response) => {
                // console.log(response);
                 this.email_masterlists = response.data;
            })
        },

        toggle(data, event) {
            console.log(data);
            let event_status = event.value;
            console.log(event_status);
             if (event_status != true) {
                this.event_status = true;
                document.getElementById(`btn_actions_${data}`).disabled = true;
            } else {
                this.event_status = false;
                document.getElementById(`btn_actions_${data}`).disabled = false;
            }
        }
    }
}
</script>

<style scoped>

</style>