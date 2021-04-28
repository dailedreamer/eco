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
                                :src="require('../../assets/icon_images/ecas/finished.png')" 
                                width="40" 
                                height="40" 
                                alt="placeholder">
                            </b-img>
                        </template>
                        <strong class="mt-0 mb-0">{{content_label}}</strong>
                        <br>
                        <small class="text-muted">
                            {{content_sub_label}}
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
                            <b-table 
                                class="text-nowrap"
                                head-variant="light"
                                outlined 
                                hover 
                                responsive 
                                small
                                :items="finished_ecas_list"
                                :fields="finished_ecas_fields"
                                :per-page="perPage"
                                :current-page="currentPage">
                                <template #cell(action)="data">
                                   <b-link 
                                        v-b-modal.modal_edit_contents
                                        class="link_style"
                                        @click="updateFinishedECAS(data.index)">
                                        Edit
                                    </b-link>
                                    <label class="ml-1 mr-1 text-secondary">|</label>
                                    <b-link 
                                        v-b-modal.modal_subparts
                                        class="link_style">
                                        Subparts
                                    </b-link>
                                </template>
                            </b-table>
                            <b-pagination
                                v-model="currentPage"
                                :total-rows="rows"
                                :per-page="perPage"
                                align="right"
                                pills></b-pagination>
                        </b-col>
                    </b-row>
                </b-card>
            </b-col>
        </b-row>
        <EditContents 
            :status_name="status_name" 
            :status_id="status_id"
            :get_data="this.id"/>
        <SubpartsModal />
    </b-container>
</template>

<script>
import EditContents from "../ECASList/Modal/EditContents";
import SubpartsModal from "../ECASList/Modal/SubpartsModal";
export default {
    name: 'FinishedECAS',
    components:{
        EditContents,
        SubpartsModal
    },
    props: {
        content_icon: String,
        content_label: String,
        content_sub_label: String,
    },
    data(){
        return{
            perPage: 10,
            currentPage: 1,
            finished_ecas_list:
            [
                {device_name: "device1", model_name: "model1", unit_number: "unit1", unit_name: "name1", 
                    parts_number: "KD0123", eco_number: "123456", current_revision: "01", ecas_number: "24212",
                    new_revision: "02", },
                {device_name: "device2", model_name: "model2", unit_number: "unit2", unit_name: "name2", 
                    parts_number: "KD0456", eco_number: "010101", current_revision: "01", ecas_number: "2121",
                    new_revision: "02", },
            ],
            finished_ecas_fields:
            [
                {key: "action", class: 'text-center'},
                {key: "device_name", label:"Device", sortable: true, class: 'text-center'},
                {key: "model_name", label:"Model", sortable: true, class: 'text-center'}, 
                {key: "unit_number", sortable: true, class: 'text-center'}, 
                {key: "unit_name", sortable: true, class: 'text-center'}, 
                {key: "parts_number", sortable: true, class: 'text-center'},
                {key: "eco_number", sortable: true, class: 'text-center'},
                {key: "current_revision", label:"Old Revision", sortable: true, class: 'text-center'},
                {key: "ecas_number", sortable: true, class: 'text-center'},
                {key: "new_revision", sortable: true, class: 'text-center'},
                {key: "release_date", sortable: true, class: 'text-center'},
            ],
            status_name: '',
            status_id: '',
            id: {},
        }
    },
    computed:{
        rows() {
            return this.finished_ecas_list.length
        }
    },
    methods:{
        updateFinishedECAS: function(id){
            this.status_name = "Finished ECAS";
            this.status_id = "7";
            this.id = {};
            this.id = this.finished_ecas_list[id];
        },
        finishedEcasSubparts: function(){
            alert("Open Finished ECAS Subparts Modal");
        }
    }
}
</script>

<style scoped>
    .link_style{
        /* color: red !important; */
        font-size:0.9em;
    }

    .icon_style{
        width: 30px;
        height: 30px;
        margin-top: 8px;
        margin-left: 4px;
    }
</style>