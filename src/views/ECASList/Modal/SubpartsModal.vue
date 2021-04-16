<template>
    <b-container fluid>
        <b-modal
            id="modal_subparts"
            size="lg"
            hide-footer
            :no-close-on-backdrop="true"
            centered>
            <template #modal-title="">
                <b-media>
                    <template #aside>
                        <b-img 
                            :src="require('../../../assets/icon_images/edit_content.svg')" 
                            width="44" 
                            height="37" 
                            alt="placeholder">
                        </b-img>
                    </template>
                    <h5 class="mt-2">Subparts</h5>
                </b-media>
            </template>
            <b-row class="mt-3 ml-3 mr-3 mb-3">
                <b-container fluid>
                    <b-table
                        head-variant="light"
                        outlined
                        hover
                        responsive
                        :items="subparts_list"
                        :fields="subparts_fields"
                        :per-page="perPage"
                        :current-page="currentPage">
                        <!-- <template #cell(action)="">
                            <b-form-checkbox></b-form-checkbox>
                        </template> -->
                    </b-table>
                    <b-pagination class="alpha__table__pagination"
                        v-model="currentPage"
                        :total-rows="totalRows"
                        :per-page="perPage"
                        align="right"
                        pills></b-pagination>
                </b-container>
            </b-row>
        </b-modal>
    </b-container>
</template>

<script>
export default {
    name: 'SubpartsModal',
    data(){
        return{
            perPage: 10,
            currentPage: 1,
            subparts_fields:
            [
                {key:"no", class:"text-center"},
                {key:"part_number", class:"text-center"},
                {key:"eco_number", class:"text-center"},
                {key:"new_revision", class:"text-center"},
                {key:"action", class:"text-center"},
            ],
            subparts_list:
            [
                {no: 1, part_number: "KD02165-Y145", eco_number: "eco001", new_revision: "02"},
                {no: 2, part_number: "KD02165-Y166", eco_number: "eco002", new_revision: "05"}
            ]
        }
    },
    computed:{
        totalRows(){
            return this.subparts_list.length
        }
    }
}
</script>

<style scoped>

</style>