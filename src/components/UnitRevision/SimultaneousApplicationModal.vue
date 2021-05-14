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
                    <h5 class="mt-2">Simultaneous Application</h5>
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
                                        label="Filter By:"
                                        label-align="left"
                                        label-size="sm"
                                        horizontal>
                                        <b-row>
                                            <b-col cols="9">
                                                    <b-input block 
                                                    v-model="filterByValue" 
                                                    size="sm"
                                                    class="filterby_input" 
                                                    placeholder="ECO Number"
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
                        responsive 
                        :items="simultaneous_application_list"
                        :fields="simultaneous_fields"
                        :filter="filterByValue"
                        :per-page="perPage_App"
                        :current-page="currentPage_App">
                        <template #cell(select)="data">
                            <b-form-checkbox
                            :value="data.item"
                            v-model="selected">
                            </b-form-checkbox>
                        </template>
                        
                        <template #cell(action)="{ detailsShowing, item}">
                            <b-button variant="danger" size="sm" @click="details(item, item.eco_number, detailsShowing)">
                                 {{detailsShowing ? 'Hide' : 'Show'}} Details
                            </b-button>
                        </template>
                        <template v-slot:row-details="{ }">
                            <b-card>
                                <b-table
                                head-variant="light"
                                outlined 
                                responsive
                                :items="sample"
                                :fields="eco_details_fields">
                                </b-table>
                            </b-card>
                        </template>
                    </b-table>
                    <b-pagination class="alpha__table__pagination"
                        v-model="currentPage_App"
                        :total-rows="totalRows_App"
                        :per-page="perPage_App"
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
                        title="Click to save unit revision"
                        @click="transferCheck">
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
    props:{
        simultaneous_application_list:Array,
    },
    data(){
        return{
            perPage_App: 5,
            currentPage_App: 1,
            selected: [],
            filterByValue: '',
            select_simultaneous: [],
            simultaneous_fields:[
                {key: "select", class: 'text-center'},
                {key: "eco_number", class: 'text-center'},
                {key: "action", class: 'text-center'},
            ],
            simultaneous_list:[],
            simultaneous_info_fields:[
                {key: "column1", class: 'text-center'},
                {key: "column2", class: 'text-center'},
                {key: "column3", class: 'text-center'},
            ],
            simultaneous_parts_list:[],
            sample:[],
            eco_details_fields: [
                {key: "parent_drawing_number", class: 'text-center'},
                {key: "drawing_number_revision", class: 'text-center'},
                {key: "part_number", class: 'text-center'},
                {key: "part_number_new_revision", class: 'text-center'},
            ],
            
        }
    },
    computed:{
        totalRows_App(){
            return this.simultaneous_application_list.length
        }
    },
    methods:{
        details(row, eco_number, a) {
            console.log(row, eco_number, a);

            this.$set(this.simultaneous_application_list, '_showDetails', false);

                if(row._showDetails)
                {
                    this.$set(row, '_showDetails', false);
                }
                else
                {
                    this.simultaneous_application_list.forEach(item => {
                        this.$set(item, '_showDetails', false);
                    })

                this.$nextTick(() => {
                    this.$set(row, '_showDetails', true);
                })
            }

            this.$store.dispatch("loadSimultaneousDetails", eco_number)
            .then((response) => {
                let data = response.data;
                this.sample = data.data;
            });          
        },
        transferCheck()
        {
            this.select_simultaneous = this.selected;
            this.$emit('clicked', this.select_simultaneous)
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