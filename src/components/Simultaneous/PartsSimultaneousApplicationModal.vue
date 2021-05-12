<template>
    <b-container fluid>
        <b-modal
            :id="id"
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
                    <h5 class="mt-2">Simultaneous Application</h5>
                </b-media>
            </template>
            <b-row class="mt-3 ml-3 mr-3">
                <b-container fluid>
                    <b-table 
                        head-variant="light"
                        outlined 
                        hover 
                        responsive 
                        :items="items"
                        :fields="eco_parts_fields"
                        :per-page="perPage"
                        :current-page="currentPage">
                        <template #cell(action)="data">
                            <b-form-checkbox
                                :value="data.item"
                                v-model="selected"
                                ></b-form-checkbox>
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
            {{id}}
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
                        v-if="id == 'modal_parts_simultaneous'"
                        class="float-right mr-2"
                        id="btn_update" 
                        size="md" 
                        variant="danger" 
                        @click="transferCheck"
                        title="Click to update with simultaneous">
                        <font-awesome-icon icon="save" /> Update Values
                    </b-button>
                    <b-button 
                        v-else
                        class="float-right mr-2"
                        id="btn_update" 
                        size="md" 
                        variant="danger" 
                        @click="transferCheckAfter"
                        title="Click to update with simultaneous">
                        <font-awesome-icon icon="save" /> Update Values
                    </b-button> 
                </b-col>
            </b-row>
        </b-modal>
    </b-container>
</template>

<script>
export default {
    name: 'PartsSimultaneousApplicationModal',
    props:{
        items: Array,
        id: {
            type: String,
            default: "modal_parts_simultaneous"
    }
    },
    data(){
        return{
            selected: [],
            selectBefore: [],
            selectAfter: [],
            perPage: 10,
            currentPage: 1,
            eco_parts_fields:
            [
                {key: "action"},
                {key: "part_number", label: "Part No."},
                {key: "part_number_new_revision", label: "Rev No."},
                {key: "revision_details"}
            ],
            eco_parts_list: 
            [
                // {part_number: "KD02165-Y145", part_number_revision:"05", details:"sample"},
                // {part_number: "KD02165-Y148", part_number_revision:"05", details:"sample1"},
                // {part_number: "KD02165-Y150", part_number_revision:"05", details:"sample2"},
                // {part_number: "KD02165-Y150", part_number_revision:"05", details:"sample2"},
                // {part_number: "KD02165-Y150", part_number_revision:"05", details:"sample2"},
                // {part_number: "KD02165-Y150", part_number_revision:"05", details:"sample2"},
                // {part_number: "KD02165-Y150", part_number_revision:"05", details:"sample2"},
                // {part_number: "KD02165-Y150", part_number_revision:"05", details:"sample2"},
                // {part_number: "KD02165-Y150", part_number_revision:"05", details:"sample2"},
                // {part_number: "KD02165-Y150", part_number_revision:"05", details:"sample2"},
                // {part_number: "KD02165-Y150", part_number_revision:"05", details:"sample2"},
                // {part_number: "KD02165-Y150", part_number_revision:"05", details:"sample2"},
            ],
        }
    },
    computed:{
        totalRows(){
            return this.eco_parts_list.length
        }
    },
    methods:{
        checkData()
        {
            this.selected = [];

            for (let i in this.items) 
            {
                this.selected.push(this.items[i].id);
            }
            
        },
        transferCheck()
        {
            this.selectBefore = this.selected;
            this.$emit('clicked', this.selectBefore)
        },
        transferCheckAfter()
        {
            this.selectAfter = this.selected;
            this.$emit('clicked', this.selectAfter)
        }
    }
}
</script>

<style scoped>

</style>