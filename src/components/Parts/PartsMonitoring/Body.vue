<template>
  <b-container class="mt-4 mb-1" fluid>
    <hr>
    <b-row>
      <b-col cols="3">
        <b-container fluid>
        <b-row>
          <b-col cols="12">
            <p class="float-left">Legend:</p>
          </b-col>
        </b-row>
         <b-row>
          <b-col cols="6">
            <b-row>
              <b-col cols="9">
                <p class="text-right">Not yet started</p>
              </b-col>
              <b-col cols="3">
                <div class="float-left whitebox"></div>
              </b-col>
            </b-row>
          </b-col>
          <b-col cols="6">
            <b-row>
              <b-col cols="9">
                <p class="text-right">Started</p>
              </b-col>
              <b-col cols="3">
                <div class="float-left yellowbox"></div>
              </b-col>
            </b-row>
          </b-col>
        </b-row>
              <b-row>
          <b-col cols="6">
            <b-row>
              <b-col cols="9">
                 <p class="text-right">Finished</p>
              </b-col>
              <b-col cols="3">
                <div class="float-left graybox"></div>
              </b-col>
            </b-row>
          </b-col>
          <b-col cols="6">
            <b-row>
              <b-col cols="9">
                <p class="text-right">Delay</p>
              </b-col>
              <b-col cols="3">
                <div class="float-left pinkbox"></div>
              </b-col>
            </b-row>
          </b-col>
        </b-row>
        </b-container>
      </b-col>
      <b-col cols="3">
      </b-col>
      <b-col cols="6">
          <SearchTemplate field_set='2'>
            <b-button 
              variant="danger"
              block
              type="submit"
              id="button-submit">
           <b-icon icon="search"></b-icon>
            &nbsp;Go!
            </b-button>
          </SearchTemplate>
      </b-col>
    </b-row>
    <b-row class='mt-3'>
      <b-col cols="12">
        <b-table-simple 
          responsive 
          bordered 
          small
          :per-page="perPage"
          :current-page="currentPage">
          <b-thead 
            class="thead-light custom_thead">
            <b-tr>
              <b-th class="th_alignment" nowrap rowspan="3">Action</b-th>
              <b-th class="th_alignment" nowrap rowspan="3">No.</b-th>
              <b-th class="th_alignment" nowrap rowspan="3">Unit Name</b-th>
              <b-th class="th_alignment" nowrap rowspan="3">Batch No.</b-th>
              <b-th class="th_alignment" nowrap rowspan="3">Part Number</b-th>
              <b-th class="th_alignment" nowrap rowspan="3">Parts Supplier</b-th>
              <b-th class="th_alignment" nowrap rowspan="3">New Revision</b-th>
              <b-th class="th_alignment" nowrap colspan="2">Die Quotation</b-th>
              <b-th class="th_alignment" nowrap colspan="4">DFM Status</b-th>
              <b-th class="th_alignment" nowrap colspan="2">Die Fabrication</b-th>
              <b-th class="th_alignment" nowrap colspan="3">Die Trial Inspection</b-th>
              <b-th class="th_alignment" nowrap colspan="2">Sample Schedule</b-th>
              <b-th class="th_alignment" nowrap colspan="2">Target QC Passed</b-th>
              <b-th class="th_alignment" nowrap rowspan="3">Parts Completion Time</b-th>
              <b-th class="th_alignment" nowrap colspan="2">ECO PAN</b-th>
              <b-th class="th_alignment" nowrap colspan="3">Assembly Application</b-th>
            </b-tr>
            <b-tr>
              <b-th class="th_alignment" nowrap rowspan="2" style="width:65px;">Q</b-th>
              <b-th class="th_alignment" nowrap rowspan="2" style="width:65px;">Die P.O.</b-th>
              <b-th class="th_alignment" nowrap colspan="2">Product Layout</b-th>
              <b-th class="th_alignment" nowrap colspan="2">Die Drawing</b-th>
              <b-th class="th_alignment" nowrap rowspan="2" style="width:65px;">DF</b-th>
              <b-th class="th_alignment" nowrap rowspan="2" style="width:65px;">SD</b-th>
              <b-th class="th_alignment" nowrap rowspan="2" style="width:65x;">TI.</b-th>
              <b-th class="th_alignment" nowrap rowspan="2">Trial No.</b-th>
              <b-th class="th_alignment" nowrap rowspan="2">Trial Status</b-th>
              <b-th class="th_alignment" nowrap rowspan="2" style="width:100px;">Plan</b-th>
              <b-th class="th_alignment" nowrap rowspan="2" style="width:100px;">Actual</b-th>
              <b-th class="th_alignment" nowrap rowspan="2">Date Target</b-th>
              <b-th class="th_alignment" nowrap rowspan="2">Days Left</b-th>
              <b-th class="th_alignment" nowrap rowspan="2">Issuance from PC-ECO</b-th>
              <b-th class="th_alignment" nowrap rowspan="2" style="width:100px;">Meeting</b-th>
              <b-th class="th_alignment" nowrap rowspan="2">Assembly Application</b-th>
              <b-th class="th_alignment" nowrap rowspan="2">CARF</b-th>
              <b-th class="th_alignment" nowrap rowspan="2">Serial No.</b-th>
            </b-tr>
            <b-tr>
              <b-th class="th_alignment" nowrap style="width:65px;">DFM-P</b-th>
              <b-th class="th_alignment" nowrap style="width:65px;">DFM-A</b-th>
              <b-th class="th_alignment" nowrap style="width:65px;">DFM-P</b-th>
              <b-th class="th_alignment" nowrap style="width:65px;">DFM-A</b-th>
            </b-tr>
          </b-thead>
            <b-tbody v-if="show_title == this.title">
              <b-tr
                  v-for="eco_parts in eco_parts_list.slice((this.currentPage-1) * this.perPage, (this.currentPage) * this.perPage)"
                  :key="eco_parts.id">
                  <b-td class="td_align">
                      <b-link
                        v-b-modal.device-modal-update
                        @click="editContents(eco_parts.no)">
                        Edit
                      </b-link>
                  </b-td>
                  <b-td class="td_align">{{eco_parts.no}}</b-td>
                  <b-td class="td_align">{{eco_parts.unit_name}}</b-td>
                  <b-td class="td_align">{{eco_parts.batch_number}}</b-td>
                  <b-td class="td_align">{{eco_parts.part_number}}</b-td>
                  <b-td class="td_align">{{eco_parts.parts_supplier}}</b-td>
                  <b-td class="td_align">{{eco_parts.part_number_new_revision}}</b-td>
                  <b-td class="td_align"></b-td>
                  <b-td class="td_align"></b-td>
                  <b-td class="td_align"></b-td>
                  <b-td class="td_align"></b-td>
                  <b-td class="td_align"></b-td>
                  <b-td class="td_align"></b-td>
                  <b-td class="td_align"></b-td>
                  <b-td class="td_align"></b-td>
                  <b-td class="td_align"></b-td>
                  <b-td class="td_align"></b-td>
                  <b-td class="td_align"></b-td>
                  <b-td class="td_align">{{eco_parts.trial_plan_date}}</b-td>
                  <b-td class="td_align">{{eco_parts.trial_actual_date}}</b-td>
                  <b-td class="td_align">{{eco_parts.qc_passed_target_date}}</b-td>
                  <b-td class="td_align"></b-td>
                  <b-td class="td_align"></b-td>
                  <b-td class="td_align">{{eco_parts.parts_allocation_lot_pick_date}}</b-td>
                  <b-td class="td_align">{{eco_parts.parts_allocation_eco_pan_meeting}}</b-td>
                  <b-td class="td_align">{{eco_parts.assembly_application_actual_application}}</b-td>
                  <b-td class="td_align">{{eco_parts.assembly_application_carf}}</b-td>
                  <b-td class="td_align">{{eco_parts.assembly_application_serial_number}}</b-td>
              </b-tr>
            </b-tbody>
            <b-tbody v-else>
              <b-tr
                  v-for="parts_manufacturing in parts_manufacturing_list.slice((this.currentPage-1) * this.perPage, (this.currentPage) * this.perPage)"
                  :key="parts_manufacturing.id">
                  <b-td class="td_align">
                      <b-link
                        v-b-modal.device-modal-update
                        @click="editContents(parts_manufacturing.no)">
                        Edit
                      </b-link>
                  </b-td>
                  <b-td class="td_align">{{parts_manufacturing.no}}</b-td>
                  <b-td class="td_align">{{parts_manufacturing.unit_name}}</b-td>
                  <b-td class="td_align">{{parts_manufacturing.batch_number}}</b-td>
                  <b-td class="td_align">{{parts_manufacturing.part_number}}</b-td>
                  <b-td class="td_align">{{parts_manufacturing.parts_supplier}}</b-td>
                  <b-td class="td_align">{{parts_manufacturing.part_number_new_revision}}</b-td>
                  <b-td class="td_align"></b-td>
                  <b-td class="td_align"></b-td>
                  <b-td class="td_align"></b-td>
                  <b-td class="td_align"></b-td>
                  <b-td class="td_align"></b-td>
                  <b-td class="td_align"></b-td>
                  <b-td class="td_align"></b-td>
                  <b-td class="td_align"></b-td>
                  <b-td class="td_align"></b-td>
                  <b-td class="td_align"></b-td>
                  <b-td class="td_align"></b-td>
                  <b-td class="td_align">{{parts_manufacturing.trial_plan_date}}</b-td>
                  <b-td class="td_align">{{parts_manufacturing.trial_actual_date}}</b-td>
                  <b-td class="td_align">{{parts_manufacturing.qc_passed_target_date}}</b-td>
                  <b-td class="td_align"></b-td>
                  <b-td class="td_align"></b-td>
                  <b-td class="td_align">{{parts_manufacturing.parts_allocation_lot_pick_date}}</b-td>
                  <b-td class="td_align">{{parts_manufacturing.parts_allocation_eco_pan_meeting}}</b-td>
                  <b-td class="td_align">{{parts_manufacturing.assembly_application_actual_application}}</b-td>
                  <b-td class="td_align">{{parts_manufacturing.assembly_application_carf}}</b-td>
                  <b-td class="td_align">{{parts_manufacturing.assembly_application_serial_number}}</b-td>
              </b-tr>
            </b-tbody>
        </b-table-simple>
        <b-pagination 
          class="alpha__table__pagination"
          :total-rows="totalRows" 
          v-model="currentPage"
          :per-page="perPage"
          align="right"
          pills></b-pagination>
      </b-col>
    </b-row>
    <b-row>
      <b-col cols="12">
        <AButton 
          class="float-right"
          variant="primary">
          <font-awesome-icon 
            icon="download"/> DOWNLOAD
        </AButton> 
      </b-col>
    </b-row>
    <Modal :get_data="this.id"/>
  </b-container>
</template>

<script>
import Modal from "./Modal.vue";

export default {
  components: {
    Modal,
  },
  name: "Body",
  props:{
    title: String,
  },
  data() {
    return {
      show_title: 'ECOPARTS',
      perPage: 10,
      currentPage: 1,
      device_selected : null,
      device_options  : [
        { value: null, text: 'Device', disabled: true },
        { value: 'a', text: 'This is First option' },
      ],
      model_selected : null,
      model_options  : [
        { value: null, text: 'Model', disabled: true },
        { value: 'a', text: 'This is First option' },
      ],
      unit_selected : null,
      unit_options  : [
        { value: null, text: 'Unit Name/ Unit No.', disabled: true },
        { value: 'a', text: 'This is First option' },
      ],
      filterby_selected : null,
      filterby_options  : [
        { value: null, text: 'Eco No.', disabled: true },
        { value: 'a', text: 'This is First option' },
      ],
      eco_parts_list: [
        {no: 1, unit_name: "unit_name1", batch_number: '123456', part_number: 'KD0123456', parts_supplier: 'YUMEX', part_number_new_revision: '02', trial_plan_date: '2021-04-01', trial_actual_date: '2021-04-06', qc_passed_target_date: '2021-04-05',
            parts_allocation_lot_pick_date: '2021-04-08', parts_allocation_eco_pan_meeting: '2021-04-07', assembly_application_actual_application: '2021-04-10', assembly_application_carf: 'sample101', assembly_application_serial_number: '112233'
        },
        {no: 2, unit_name: "unit_name2", batch_number: '102030', part_number: 'KD0654321', parts_supplier: 'SPPI', part_number_new_revision: '06', trial_plan_date: '2021-04-20', trial_actual_date: '2021-04-25', qc_passed_target_date: '2021-04-30',
            parts_allocation_lot_pick_date: '2021-04-28', parts_allocation_eco_pan_meeting: '2021-04-24', assembly_application_actual_application: '2021-04-24', assembly_application_carf: 'sample123', assembly_application_serial_number: '123456'
        },
      ],
      parts_manufacturing_list: [
        {no: 1, unit_name: "unit_name3", batch_number: '010203', part_number: 'KD0010203', parts_supplier: 'CHORAKAWA', part_number_new_revision: '01', trial_plan_date: '2021-05-05', trial_actual_date: '', qc_passed_target_date: '2021-05-05',
            parts_allocation_lot_pick_date: '', parts_allocation_eco_pan_meeting: '', assembly_application_actual_application: '', assembly_application_carf: 'sample102', assembly_application_serial_number: '445566'
        },
        {no: 2, unit_name: "unit_name4", batch_number: '040506', part_number: 'KD040506', parts_supplier: 'HST', part_number_new_revision: '03', trial_plan_date: '2021-04-30', trial_actual_date: '2021-04-27', qc_passed_target_date: '2021-05-01',
            parts_allocation_lot_pick_date: '2021-04-27', parts_allocation_eco_pan_meeting: '2021-04-27', assembly_application_actual_application: '2021-04-27', assembly_application_carf: 'sample456', assembly_application_serial_number: '050607'
        },
      ],
      id: {},
    }
  },
  computed:{
    totalRows(){
        if(this.title == 'ECOPARTS'){
            return this.eco_parts_list.length
        }
        else{
            return this.parts_manufacturing_list.length
        }
    },   
  },
  methods:{
    editContents: function(id){
      // alert(id);
      this.id = {};
      this.id = this.eco_parts_list[id-1];
    },
  }
}
</script>

<style scoped>
  p {
      font-size: 12px;
  }
  .custom_p_percentage {
    font-size: 1.8rem;
  }
  .custom_p_count {
    font-size: 3rem;
  }
  .whitebox {
    height: 13px;
    width: 13px;
    background-color: #fff;
    border: 1px solid #000;
  }
  .yellowbox {
    height: 13px;
    width: 13px;
    background-color: #f8ff01;
  }
  .graybox {
    height: 13px;
    width: 13px;
    background-color: #7a7a7a;
  }
  .pinkbox {
    height: 13px;
    width: 13px;
    background-color:#eb41a6;
  }
  .filter_size
  {
    font-size:12px;
  }
  .th_alignment {
    vertical-align:middle;
    text-align:center!important;
    padding-left:10px;
    padding-right:10px;
  }
  .img_action {
    cursor: pointer;
  }
  .custom_thead {
    font-size: 10px;
   
  }
  .card_custom {
    width: 67vh;
  }
  .select_unit {
    width: 178px;
  }

  .td_align{
        text-align:center!important;
        vertical-align:middle;
    }
</style>