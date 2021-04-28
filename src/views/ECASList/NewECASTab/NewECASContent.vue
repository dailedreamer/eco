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
                    :items="new_ecas_list"
                    :fields="new_ecas_fields"
                    :per-page="perPage"
                    :current-page="currentPage">
                    <template #cell(action)="data">
                        <b-link 
                            v-b-modal.modal_edit_contents
                            class="link_style"
                            @click="updateNewECAS(data.index)">
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
    name: 'NewECASContent',
    components: {
        EditContents,
        SubpartsModal
    },
    data(){
        return{
            perPage: 10,
            currentPage: 1,
            new_ecas_list:
            [
                { device_name: "device1", model_name: "model1", unit_number: "unit1", unit_name: "name1", 
                    parts_number: "KD0001", eco_number: "123456", current_revision: "01", ecas_number: "121212",
                    new_revision: "02", },
                {device_name: "device2", model_name: "model2", unit_number: "unit2", unit_name: "name2", 
                    parts_number: "KD0002", eco_number: "010101", current_revision: "02", ecas_number: "232323",
                    new_revision: "03", },
            ],
            new_ecas_fields:
            [
                // {key: "no",  sortable: true, class: 'text-center'},
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
        rows: function(){
            return this.new_ecas_list.length
        }
    },
    methods:{
       updateNewECAS: function(id){
            this.status_name = "For Verification";
            this.status_id = "1";
            this.id = {};
            this.id = this.new_ecas_list[id];
       },
    //    newEcasSubparts: function(id){
    //        alert(id)
    //    }
    }
}
</script>

<style scoped>
    .link_style{
        /* color: red !important; */
        font-size:0.9em;
    }
</style>