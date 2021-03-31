<template>
    <b-row class="mt-3">
        <b-col cols="12">
            <b-card class="pl-2 pr-2">
                <b-card-body>
                    <b-col cols="12">
                        <b-table-simple responsive bordered small >
                        <b-thead class="thead-light custom_thead">
                            <b-tr>
                            <b-th class="th_alignment" nowrap rowspan="3">Action</b-th>
                            <b-th class="th_alignment" nowrap rowspan="3">ECO Number</b-th>
                            <b-th class="th_alignment" nowrap rowspan="3">FTEC-FDTP Meeting Date</b-th>
                            <b-th class="th_alignment" nowrap rowspan="3">Device</b-th>
                            <b-th class="th_alignment" nowrap rowspan="3">Date Updated / Send to Ftec</b-th>
                            <b-th class="th_alignment" nowrap rowspan="3">FDTP PE In-Charge</b-th>
                            <b-th class="th_alignment" nowrap rowspan="2">EC minutes Item No.</b-th>
                            <b-th class="th_alignment" nowrap rowspan="4">ECO Action Item</b-th>
                            <b-th class="th_alignment" nowrap rowspan="2">FTEC Target Response Date</b-th>
                            <b-th class="th_alignment" nowrap rowspan="3">FTEC PE's Answer</b-th>
                            <b-th class="th_alignment" nowrap rowspan="2">FTEC PE In-Charge</b-th>
                            <b-th class="th_alignment" nowrap rowspan="2">Response Date</b-th>
                            <b-th class="th_alignment" nowrap rowspan="3">Status</b-th>
                            <b-th class="th_alignment" nowrap rowspan="2">Remarks</b-th>
                            </b-tr>
                        </b-thead>
                        <b-tbody>
                            <b-tr>
                            <b-td>
                                <b-row>
                                    <b-col cols="6">
                                        <template>
                                            <AButton
                                            variant="primary"
                                            v-b-modal.ec_action_items_modal_id
                                            >
                                            <b-icon icon="files" size="sm" variant="white"></b-icon>
                                        
                                            </AButton>
                                        </template>
                                    </b-col>
                                    <b-col cols="6">
                                        <template>
                                            <AButton
                                            variant="primary"
                                            v-b-modal.device-modal-update

                                            >
                                            <b-icon icon="trash" size="sm" variant="white"></b-icon>
                                        
                                            </AButton>
                                        </template>
                                    </b-col>
                                </b-row>
                            </b-td>
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
                            </b-tr>
                        </b-tbody>
                        </b-table-simple>
                    </b-col>
                </b-card-body>
            </b-card>
        </b-col>
        <ECActionViewModal />
    </b-row>
</template>

<script>
import ECActionViewModal from '../../components/ECActionItems/ECActionItemsViewModal';
export default {
   name: "ECActionItemsContent",
   components: {
        ECActionViewModal
    },
   
}
</script>

<style scoped>

</style>