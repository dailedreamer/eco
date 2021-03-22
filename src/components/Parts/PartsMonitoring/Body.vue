<template>
  <b-container class="mt-4 mb-1" fluid>
    <hr>
    <b-row >
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
      <b-col cols="9">
        <b-card class="mt-5" style="border:none">
          <b-row>
            <b-col cols="7">
              <b-form inline>
                <small class="mr-3">Filter:</small>
                  <b-form-select class="mr-2 w-25 filter_size" v-model="device_selected" :options="device_options" size="sm"></b-form-select>
                  <b-form-select class="mr-2 w-25 filter_size" v-model="model_selected" :options="model_options" size="sm"></b-form-select>
                  <b-form-select class="mr-2 select_unit filter_size" v-model="unit_selected" :options="unit_options" size="sm"></b-form-select>
              </b-form>
            </b-col>
            <b-col cols="5">
              <b-form inline>
                <small class="mr-3">Filter By:</small>
                <b-form-select class="mr-2 w-25 filter_size" v-model="filterby_selected" :options="filterby_options" size="sm"></b-form-select>
                <b-input size="sm w-50 filter_size" placeholder="Enter supplier"></b-input>
              </b-form>
            </b-col>
          </b-row>
        </b-card>
      </b-col>
    </b-row>

    <b-row>
      <b-col cols="12">
        <b-table-simple responsive bordered small >
          <b-thead class="thead-light custom_thead">
            <b-tr>
              <b-th class="th_alignment" nowrap rowspan="3">Action</b-th>
              <b-th class="th_alignment" nowrap rowspan="3">No.</b-th>
              <b-th class="th_alignment" nowrap rowspan="3">Unit Name</b-th>
              <b-th class="th_alignment" nowrap rowspan="3">Batch No.</b-th>
              <b-th class="th_alignment" nowrap rowspan="3">Part Number</b-th>
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
              <b-th class="th_alignment" nowrap rowspan="2">Q</b-th>
              <b-th class="th_alignment" nowrap rowspan="2">Die P.O.</b-th>
              <b-th class="th_alignment" nowrap colspan="2">Product Layout</b-th>
              <b-th class="th_alignment" nowrap colspan="2">Die Drawing</b-th>
              <b-th class="th_alignment" nowrap rowspan="2">DF</b-th>
              <b-th class="th_alignment" nowrap rowspan="2">SD</b-th>
              <b-th class="th_alignment" nowrap rowspan="2">TI.</b-th>
              <b-th class="th_alignment" nowrap rowspan="2">Trial No.</b-th>
              <b-th class="th_alignment" nowrap rowspan="2">Trial Status</b-th>
              <b-th class="th_alignment" nowrap rowspan="2">Plan</b-th>
              <b-th class="th_alignment" nowrap rowspan="2">Actual</b-th>
              <b-th class="th_alignment" nowrap rowspan="2">Date Target</b-th>
              <b-th class="th_alignment" nowrap rowspan="2">Days Left</b-th>
              <b-th class="th_alignment" nowrap rowspan="2">Issuance from PC-ECO</b-th>
              <b-th class="th_alignment" nowrap rowspan="2">Meeting</b-th>
              <b-th class="th_alignment" nowrap rowspan="2">Assembly Application</b-th>
              <b-th class="th_alignment" nowrap rowspan="2">CARF</b-th>
              <b-th class="th_alignment" nowrap rowspan="2">Serial No.</b-th>
            </b-tr>
            <b-tr>
              <b-th class="th_alignment" nowrap>DFM-P</b-th>
              <b-th class="th_alignment" nowrap>DFM-A</b-th>
              <b-th class="th_alignment" nowrap>DFM-P</b-th>
              <b-th class="th_alignment" nowrap>DFM-A</b-th>
            </b-tr>
          </b-thead>
          <b-tbody>
            <b-tr>
              <b-td>
                  <template>
                    <AButton
                      variant="primary"
                      v-b-modal.device-modal-update
                    
                    >
                    <b-icon icon="files" size="sm" variant="white"></b-icon>
                  
                  </AButton>
                  </template>
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
    </b-row>
    <b-row>
      <b-col cols="12">
        <AButton class="float-right" variant="primary">
          <font-awesome-icon icon="download"></font-awesome-icon> DOWNLOAD
        </AButton> 
      </b-col>
    </b-row>
    <Modal/>
  </b-container>
</template>

<script>
import Modal from "./Modal.vue";
export default {
    components: {
      Modal,
    },
    name: "Body",
     data() {
    return {
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
    }
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
</style>