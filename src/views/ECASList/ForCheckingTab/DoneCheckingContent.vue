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
                    :items="done_checking_list"
                    :fields="done_checking_fields"
                    :per-page="perPage"
                    :current-page="currentPage">
                    <template #cell(action)="">
                         <b-form-checkbox></b-form-checkbox>
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
        <b-row class="mt-4">
            <b-col cols="12">
                <b-button 
                    class="float-right"
                    id="btn_update" 
                    size="md" 
                    variant="danger" 
                    type="submit"
                    title="Click to save changes">
                    <font-awesome-icon icon="thumbs-up" /> Done Checking
                </b-button> 
            </b-col>
        </b-row>
    </b-container>
</template>

<script>
export default {
    name: 'DoneCheckingContent',
    data(){
        return{
            perPage: 10,
            currentPage: 1,
            done_checking_list:
            [
                {device_name: "device1", model_name: "model1", unit_number: "unit1", unit_name: "name1", 
                    parts_number: "KD0123", eco_number: "123456", current_revision: "01", ecas_number: "24212",
                    new_revision: "02", },
                {device_name: "device2", model_name: "model2", unit_number: "unit2", unit_name: "name2", 
                    parts_number: "KD0456", eco_number: "010101", current_revision: "01", ecas_number: "2121",
                    new_revision: "02", },
            ],
            done_checking_fields:
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
            ]
        }
    },
    computed:{
        rows() {
            return this.done_checking_list.length
        }
    },
}
</script>

<style scoped>
    .link_style{
        /* color: red !important; */
        font-size:0.9em;
    }
</style>