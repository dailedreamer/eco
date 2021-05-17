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
                    <h5 class="mt-2">Unit Revision Up</h5>
                </b-media>
            </template>
            <b-row class="mt-3 ml-3 mr-3">
                <b-container fluid>
                    <b-card>
                        <b-card-text>
                            <b-row>
                                <b-col>
                                    <b-form-group
                                        class="form_group_custom"
                                        id="filter_by"
                                        label-cols-sm="2"
                                        label="Filter:"
                                        label-align="left"
                                        label-size="sm"
                                        horizontal>
                                        <b-row>
                                            <b-col cols="9">
                                                    <b-input block 
                                                    v-model="filterByValue" 
                                                    size="sm"
                                                    class="filterby_input" 
                                                    placeholder=""
                                                    ></b-input>
                                            </b-col>
                                            <b-col cols="3">
                                                <b-button 
                                                    class="float-right mr-2"
                                                    size="md" 
                                                    variant="outline-secondary"
                                                    title="Click to clear inputs">
                                                    <font-awesome-icon icon="times-circle" /> Clear
                                                </b-button>
                                            </b-col>
                                        </b-row>
                                    </b-form-group>
                                </b-col>
                            </b-row>
                        </b-card-text>
                    </b-card>
                    <br>
                    <b-table
                        head-variant="light"
                        outlined 
                        hover 
                        responsive 
                        :items="eco_parts_list"
                        :fields="eco_parts_fields"
                        :filter="filterByValue"
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
                        :total-rows="rows"
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
                        v-if="id == 'modal_eco_parts'"
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
    name: 'EcoPartsModal',
    props:{
        eco_parts_list:Array,
        id: {
            type: String,
            default: "modal_eco_parts"
        }
    },
    data(){
        return{
            perPage: 10,
            currentPage: 1,
            selected: [],
            selectBefore: [],
            selectAfter: [],
            filterByValue:'',
            eco_parts_fields:
            [
               {key: "action"},
               {key: "part_number", sortable: true},
               {key: "part_number_new_revision", sortable: true},
               {key: "revision_details", sortable: true}, 
            ],
        }
    },
    computed:{
        rows(){
            return this.eco_parts_list.length
        }
    },
    methods:{
        transferCheck()
        {
            this.selectBefore = this.selected;
            this.$emit('clicked', this.selectBefore)
            this.toast("Success", "Successfully Added");
        },
        transferCheckAfter()
        {
            this.selectAfter = this.selected;
            this.$emit('clicked', this.selectAfter)
            this.toast("Success", "Successfully Added");
        },
        toast: function (status, message){
        this.$toast(message, {
              type:status.toLowerCase().trim(),
              position: "bottom-right",
        });
      }
    }
}
</script>

<style scoped>

</style>