<template>
    <b-container fluid>
        <b-modal
            id="modal_process_simultaneous"
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
            <b-form-group
                class="form_group_custom"
                id="filter_by"
                label-cols-sm="2"
                label="Filter By:"
                label-align="left"
                label-size="sm"
                horizontal>
                <b-row>
                    <b-col cols="8">
                        <b-input block 
                        v-model="filterByValue" 
                        class="filterby_input" 
                        ></b-input>
                    </b-col>
                </b-row>
            </b-form-group> 
            <b-row class="mt-3 ml-3 mr-3">
                <b-container fluid>
                    <b-table 
                        :filter="this.filterByValue"
                        head-variant="light"
                        outlined 
                        hover 
                        responsive 
                        :items="items"
                        :fields="eco_process_fields"
                        :per-page="perPage"
                        :current-page="currentPage">
                        <template #cell(action)="data">
                            <b-form-checkbox
                                :value="data.item"
                                v-model="selected"></b-form-checkbox>
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
                        @click="transferCheck"
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
    name: 'ProcessSimultaneousApplicationModal',
    props:{
        items: Array,
    },
    data(){
        return{
            filterByValue: '',
            selected: [],
            selectAll: [],
            perPage: 10,
            currentPage: 1,
            eco_process_fields:
            [
                {key: "action"},
                {key: "parent_drawing_number", label: "Drawing No."},
                {key: "drawing_number_revision", label: "Rev No."},
                {key: "quantity", label: "Qty"},
                {key: "revision_mark"}
            ],
            eco_process_list: 
            [
                // {drawing_number: "KD02165-Y145", drawing_number_revision:"05", quantity: "100", details:"sample"},
                // {drawing_number: "KD02165-Y148", drawing_number_revision:"05", quantity: "50", details:"sample1"},
                // {drawing_number: "KD02165-Y150", drawing_number_revision:"05", quantity: "250", details:"sample2"},
                // {drawing_number: "KD02165-Y150", drawing_number_revision:"05", quantity: "15", details:"sample2"},
                // {drawing_number: "KD02165-Y150", drawing_number_revision:"05", quantity: "15", details:"sample2"},
                // {drawing_number: "KD02165-Y150", drawing_number_revision:"05", quantity: "15", details:"sample2"},
                // {drawing_number: "KD02165-Y150", drawing_number_revision:"05", quantity: "15", details:"sample2"},
                // {drawing_number: "KD02165-Y150", drawing_number_revision:"05", quantity: "15", details:"sample2"},
                // {drawing_number: "KD02165-Y150", drawing_number_revision:"05", quantity: "15", details:"sample2"},
                // {drawing_number: "KD02165-Y150", drawing_number_revision:"05", quantity: "15", details:"sample2"},
                // {drawing_number: "KD02165-Y150", drawing_number_revision:"05", quantity: "15", details:"sample2"},
                // {drawing_number: "KD02165-Y150", drawing_number_revision:"05", quantity: "15", details:"sample2"},
            ],
        }
    },
    computed:{
        totalRows(){
            return this.eco_process_list.length
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
            this.selectAll = this.selected;

            this.$emit('clicked', this.selectAll)
        }
    }
}
</script>

<style scoped>
    .filterby_input{
        border-color: #e3e3e3;
        height: 43px;
    }
</style>