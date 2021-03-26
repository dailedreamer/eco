<template>
    <b-container fluid>
        <b-row>
            <b-col cols="6">
                <!-- <SearchTemplate field_set='3'>
                <b-button 
                    class="pb-1 mt-sm-1"
                    variant="danger"
                    block
                    type="submit"
                    id="button-submit">
                    <b-icon 
                    icon="search"></b-icon>
                    &nbsp;Go!
                </b-button>
                </SearchTemplate> -->
                <b-card no-body class="p-3">
            <b-card-text>
                <b-row class="mb-2">
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
                            <b-col cols="4">
                                <multiselect  
                                    v-model="deviceValue"
                                    name="searchTemplateDevice"
                                    :options="this.deviceOptions" 
                                    :searchable="true"
                                    :show-labels="false"
                                    placeholder="Device" 
                                    label="name" 
                                    track-by="id"
                                    @input="loadModel()"></multiselect>
                            </b-col>
                            <b-col cols="4">
                                <multiselect  
                                    v-model="modelValue"
                                    name="searchTemplateModel"
                                    :options="modelOptions" 
                                    :searchable="true"
                                    :show-labels="false"
                                    placeholder="Model" 
                                    label="name" 
                                    track-by="id"
                                    @input="loadUnit()"></multiselect>
                            </b-col>
                            <b-col cols="4">
                                <multiselect  
                                    v-model="unitValue" 
                                    name="searchTemplateUnit"
                                    :options="unitOptions"
                                    :searchable="true"
                                    :show-labels="false"
                                    placeholder="Unit Name/Number" 
                                    label="name" 
                                    track-by="id" 
                                    :max-height="50"
                                    ></multiselect>
                            </b-col>
                        </b-row>
                    </b-form-group>
                </b-col>
            </b-row>
            </b-card-text>
                </b-card>
            </b-col>
            <b-col cols="6">
                <b-button
                    variant="danger" 
                    class="float-right pb2">
                        <font-awesome-icon icon="edit" /> With Simultaneous
                </b-button>
            </b-col>
        </b-row>
        <!-- <b-row class="mt-3">
            <b-col cols="12">
                 <b-table-simple responsive bordered small>
                    <b-thead class="thead-light custom_thead">
                        <b-tr>
                            <b-th class="th_align" nowrap rowspan="3">No</b-th>
                            <b-th class="th_align" nowrap rowspan="3">Action</b-th>
                            <b-th class="th_align" nowrap rowspan="3">Device</b-th>
                            <b-th class="th_align" nowrap rowspan="3">Model</b-th>
                            <b-th class="th_align" nowrap rowspan="3">Unit</b-th>
                            <b-th class="th_align" nowrap rowspan="3">ECO Number</b-th>
                            <b-th class="th_align" nowrap rowspan="3">Target Application</b-th>
                            <b-th class="th_align" nowrap colspan="8">ECO Parts</b-th>
                            <b-th class="th_align" nowrap colspan="4">ECO Process</b-th>
                            <b-th class="th_align" nowrap rowspan="3">Actual Application</b-th>
                            <b-th class="th_align" nowrap rowspan="3">CARF</b-th>
                            <b-th class="th_align" nowrap rowspan="3">Serial Number</b-th>
                        </b-tr>
                        <b-tr>
                            <b-th class="th_align" nowrap colspan="4">Before</b-th>
                            <b-th class="th_align" nowrap colspan="4">After</b-th>
                            <b-th class="th_align" nowrap rowspan="2">Drawing No.</b-th>
                            <b-th class="th_align" nowrap rowspan="2">Rev No.</b-th>
                            <b-th class="th_align" nowrap rowspan="2">Qty</b-th>
                            <b-th class="th_align" nowrap rowspan="2">Details</b-th>
                        </b-tr>
                        <b-tr>
                            <b-th class="th_align" nowrap>Part No.</b-th>
                            <b-th class="th_align" nowrap>Rev No.</b-th>
                            <b-th class="th_align" nowrap>Qty</b-th>
                            <b-th class="th_align" nowrap>Details</b-th>
                            <b-th class="th_align" nowrap>Part No.</b-th>
                            <b-th class="th_align" nowrap>Rev No.</b-th>
                            <b-th class="th_align" nowrap>Qty</b-th>
                            <b-th class="th_align" nowrap>Details</b-th>
                        </b-tr>
                    </b-thead>
                    <b-tbody>
                        <b-td>aa</b-td>
                        <b-td></b-td>
                        <b-td></b-td>
                        <b-td></b-td>
                        <b-td></b-td>
                        <b-td></b-td>
                        <b-td></b-td>
                        <b-td></b-td>
                        <b-td></b-td>
                        <b-td></b-td>
                        <b-td></b-td>
                        <b-td></b-td>
                        <b-td></b-td>
                        <b-td></b-td>
                        <b-td></b-td>
                        <b-td></b-td>
                        <b-td></b-td>
                        <b-td></b-td>
                        <b-td></b-td>
                        <b-td></b-td>
                        <b-td></b-td>
                        <b-td></b-td>
                    </b-tbody>
                </b-table-simple>
            </b-col>
        </b-row> -->
        <b-row class="mt-3">
            <b-col cols="12">
                 <b-table
                    :items="items"
                    :fields="fields"
                    responsive bordered small
                    >
                    <template #thead-top="">
                        <b-tr>
                            <!-- <b-th class="th_align" nowrap rowspan="3">No</b-th> -->
                            <!-- <b-th class="th_align" nowrap rowspan="3"></b-th>
                            <b-th class="th_align" nowrap rowspan="3"></b-th>
                            <b-th class="th_align" nowrap rowspan="3"></b-th>
                            <b-th class="th_align" nowrap rowspan="3"></b-th>
                            <b-th class="th_align" nowrap rowspan="3"></b-th>
                            <b-th class="th_align" nowrap rowspan="3"></b-th> -->
                            <b-th colspan="7"></b-th>
                            <b-th class="th_align" nowrap colspan="8">ECO Parts</b-th>
                            <b-th class="th_align" nowrap colspan="4">ECO Process</b-th>
                            <b-th colspan="3"></b-th>
                            <!-- <b-th class="th_align" nowrap rowspan="3">Actual Application</b-th>
                            <b-th class="th_align" nowrap rowspan="3">CARF</b-th>
                            <b-th class="th_align" nowrap rowspan="3">Serial Number</b-th> -->
                        </b-tr>
                         <b-tr>
                            <b-th colspan="7"></b-th>
                            <b-th class="th_align" nowrap colspan="4">Before</b-th>
                            <b-th class="th_align" nowrap colspan="4">After</b-th>
                            <b-th colspan="4"></b-th>
                            <b-th colspan="3"></b-th>
                            <!-- <b-th class="th_align" nowrap rowspan="2">Drawing No.</b-th>
                            <b-th class="th_align" nowrap rowspan="2">Rev No.</b-th>
                            <b-th class="th_align" nowrap rowspan="2">Qty</b-th>
                            <b-th class="th_align" nowrap rowspan="2">Details</b-th> -->
                        </b-tr>
                    </template>
                    <template #cell(action)="">
                        <b-button 
                            variant="danger"
                            size="sm"
                            class="ml-2"
                            v-b-modal.simultaneous_update_modal_id>
                                <!-- <font-awesome-icon icon="edit" /> -->
                                Edit
                        </b-button>
                        <b-button 
                            variant="danger"
                            size="sm"
                            class="ml-2">
                                Delete
                        </b-button>
                        <b-button 
                            variant="danger"
                            size="sm"
                            class="ml-2">
                                Cancel
                        </b-button>
                    </template>
                 </b-table>
            </b-col>
        </b-row>
        <SimultaneousUpdateModal />
    </b-container>
</template>

<script>
import SimultaneousUpdateModal from '../../components/Simultaneous/SimultaneousUpdateModal';
export default {
    name: 'SimultaneousContent',
    components: {
        SimultaneousUpdateModal
    },
    data(){
        return {
            deviceValue: [],
            deviceOptions: [],
            modelValue: [],
            modelOptions: [],
            unitValue: [],
            unitOptions: [],
            items: [
                { no: 1, action: 'edit', device_name:"device1", model_name: "model1", unit_name: "unit_name",
                eco_number: "eco1", target_application: "2021-03-25", before_part_no:"KD0123", before_rev_no:"01",
                before_qty: "45", before_details:"sample",  after_part_no:"", after_rev_no:"", after_qty: "", after_details:"",
                drawing_number: "", drawing_number_rev: "", drawing_number_qty: "", drawing_number_details: "",
                actual_application: "", carf: "", serial_number: ""},
            ],
            fields: [
                { key: 'no', isRowHeader: true,},
                { key: 'action'},
                { key: 'device_name', label: 'Device'},
                { key: 'model_name', label: 'Model' },
                { key: 'unit_name', label: 'Unit' },
                { key: 'eco_number' },
                { key: 'target_application' },
                { key: 'before_part_no', label: 'Part No.' },
                { key: 'before_rev_no', label: 'Rev No.' },
                { key: 'before_qty', label: 'Qty.' },
                { key: 'before_details', label: 'Details' },
                { key: 'after_part_no', label: 'Part No.' },
                { key: 'after_rev_no', label: 'Rev No.' },
                { key: 'after_qty', label: 'Qty.' },
                { key: 'after_details', label: 'Details' },
                { key: 'drawing_number', label: 'Drawing Number'},
                { key: 'drawing_number_rev', label: 'Rev.' },
                { key: 'drawing_number_qty', label: 'Qty.' },
                { key: 'drawing_number_details', label: 'Details' },
                { key: 'actual_application', label: 'Actual Application'},
                { key: 'carf', label: 'Carf'},
                { key: 'serial_number', label: 'Serial Number'},
            ],
        }
    }
}
</script>

<style scoped>
    .th_align{
        vertical-align:middle;
        text-align:center!important;
        padding-left:10px;
        padding-right:10px;
    }
</style>