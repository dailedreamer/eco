<template>
    <b-container fluid>
        <b-row class="mt-4">
            <b-col cols="12">
                <b-table 
                    class="text-nowrap"
                    head-variant="light"
                    outlined 
                    hover 
                    responsive 
                    small
                    :items="for_revision_list"
                    :fields="for_revision_fields"
                    :per-page="perPage"
                    :current-page="currentPage">
                    <template #cell(action)="data">
                        <b-link
                            v-b-modal.modal_edit_contents
                            class="link_style"
                            @click="updateForRevision(data.index)">
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
        <EditContents 
            :status_name="status_name" 
            :status_id="status_id" 
            :get_data="this.id"/>
        <SubpartsModal />
    </b-container>
</template>

<script>
import EditContents from "../Modal/EditContents";
import SubpartsModal from "../Modal/SubpartsModal";
export default {
    name: 'ForRevisionContent',
    components: {
        EditContents,
        SubpartsModal
    },
    data(){
        return{
            perPage: 10,
            currentPage: 1,
            for_revision_list:
            [
                {device_name: "device01", model_name: "model01", unit_number: "unit01", unit_name: "name01", 
                    parts_number: "KD1245", eco_number: "874321", current_revision: "", ecas_number: "874214",
                    new_revision: "01", },
                {device_name: "device02", model_name: "model02", unit_number: "unit02", unit_name: "name02", 
                    parts_number: "KD7842", eco_number: "845742", current_revision: "05", ecas_number: "041541",
                    new_revision: "06", },
            ],
            for_revision_fields:
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
            return this.for_revision_list.length
        }
    },
    methods:{
        updateForRevision: function(id){
            this.status_name = "For Revision";
            this.status_id = "2";
            this.id = {};
            this.id = this.for_revision_list[id];
        },
        // forRevisionSubparts: function(){
        //     alert("Open For Revision Subparts Modal");
        // }
    }
}
</script>

<style scoped>
    .link_style{
        /* color: red !important; */
        font-size:0.9em;
    }
</style>