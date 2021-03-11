<template>
    <b-container fluid>
        <b-row class="mb-4">
           <b-col cols="12">
                <b-media>
                    <template #aside>
                        <b-img blank blank-color="#ccc" width="44" height="37" alt="placeholder"></b-img>
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

                            <!-- <b-table outlined hover fixed :items="items" :fields="fields" primary-key="id">
                                <template #cell(actions)="data">
                                    <b-button variant="primary" size="sm" 
                                        :disabled="disable" 
                                        :id="'btn_action_'+data.item.id">
                                        <font-awesome-icon icon="edit" />
                                    </b-button>
                                </template>
                                <template #cell(status)="data">
                                    <toggle-button @change="toggle(data.item.id)"
                                        :value="true" 
                                        :labels="{checked: 'On', unchecked: 'Off'}" 
                                        :color="{checked: '#118f22', unchecked: '#FF0000'}"/>
                                </template>   
                            </b-table> -->

                             <b-table outlined hover fixed :items="email_masterlists" :fields="email_fields" primary-key="id">
                                  <template #cell(actions)="data">
                                    <b-button variant="primary" size="sm" 
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
    </b-container>
</template>

<script>

export default {
    data() {
      return {
        // items: [
        //     { id: 1, subject: 'Email1', classification: 'FTEC'},
        //     { id: 2, subject: 'Email2', classification: 'ECAS'}
        // ],
        // fields: [
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
            { key: "first_name", label: "Subject", sortable: true },
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

        // toggle(data) 
        // {
        //     console.log(data);
        //     if (!this.isActive) {
        //         this.isActive = true;
        //         document.getElementById(`btn_action_${data}`).disabled = true;
        //     } else {
        //         this.isActive = false;
        //         document.getElementById(`btn_action_${data}`).disabled = false;
        //     }
        // },

        toggle(data, event) 
        {
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
        },
    }
}
</script>

<style scoped>

</style>