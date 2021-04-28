<template>
    <b-container fluid>
         <b-modal
            id="modal_simultaneous_application"
            hide-footer
            size="lg"
            :no-close-on-backdrop="true" 
            centered>
            <template #modal-title="">
                <b-media>
                    <template #aside>
                        <b-img 
                            :src="require('../../assets/icon_images/edit_content.svg')" 
                            width="44" 
                            height="37" 
                            alt="placeholder">
                        </b-img>
                    </template>
                    <h5 class="mt-2">Unit Revision</h5>
                </b-media>
            </template>
            <b-row class="mt-3 ml-3 mr-3">
                <b-container fluid>
                    <b-table 
                        head-variant="light"
                        outlined 
                        hover 
                        responsive 
                        :items="simultaneous_list"
                        :fields="simultaneous_fields"
                        :per-page="perPage"
                        :current-page="currentPage">
                        <template #cell(action)="">
                            <b-form-checkbox></b-form-checkbox>
                        </template>
                    </b-table>
                    <b-pagination class="alpha__table__pagination"
                        v-model="currentPage"
                        :total-rows="totalRows"
                        :per-page="perPage"
                        align="right"
                        pills></b-pagination>
                </b-container>
            </b-row>
            <hr>
            <b-row class="mt-3">
                <b-col cols="12">
                    <b-button 
                        class="float-right mr-2"
                        size="md" 
                        variant="outline-secondary"
                        title="Click to clear inputs">
                        <font-awesome-icon icon="times-circle" /> Clear
                    </b-button>
                    <b-button 
                        class="float-right mr-2"
                        id="btn_update" 
                        size="md" 
                        variant="danger" 
                        type="submit"
                        title="Click to save unit revision">
                        <font-awesome-icon icon="save" /> Save Values
                    </b-button> 
                </b-col>
            </b-row>
         </b-modal>
    </b-container>
</template>
    
<script>
export default {
    name: 'SimultaneousApplicationModal',
    data(){
        return{
            perPage: 10,
            currentPage: 1,
            simultaneous_fields:[
                {key: "action", class: 'text-center'},
                {key: "eco_number", class: 'text-center'},
                {key: "drawing_number", class: 'text-center'},
                {key: "drawing_number_revision", label: "Revision", class: 'text-center'},
                {key: "part_number", class: 'text-center'},
                {key: "part_number_revision", label: "Revision", class: 'text-center'},
            ],
            simultaneous_list:
            [
                {eco_number: "eco001", drawing_number: "KD02165-Y150", drawing_number_revision:"05", part_number: "KD02165-Y150", part_number_revision:"05"},
                {eco_number: "eco002", drawing_number: "KD02165-Y150", drawing_number_revision:"05", part_number: "KD02165-Y150", part_number_revision:"05"},
                {eco_number: "eco003", drawing_number: "KD02165-Y150", drawing_number_revision:"05", part_number: "KD02165-Y150", part_number_revision:"05"},
            ],
        }
    },
    computed:{
        totalRows(){
            return this.simultaneous_list.length
        }
    }
}
</script>

<style scoped>

</style>