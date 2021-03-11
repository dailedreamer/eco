<template>
  <b-container fluid>
    <b-row class="mb-3">
      <b-col cols="4">
        <b-form inline>
          <p class="mr-4 legends_box_position">Legend:</p>
          <div class="whitebox ml-5"></div>
          <p class="legends_box_position whitebox_text_position">Not yet started</p>
          <div class="yellowbox"></div>
          <p class="legends_box_position yellowbox_text_position">Started</p>
          <div class="graybox"></div>
          <p class="legends_box_position graybox_text_position">Finished</p>
          <div class="pinkbox"></div>
          <p class="legends_box_position pinkbox_text_position">Delay</p>
        </b-form>
      </b-col>
      <b-col cols="8">
        <b-card class="card_custom float-right">
          <b-form class="mb-3" inline>
            <span class="mr-5">Filter:</span>
            <b-form-select class="mr-2 w-25" v-model="device_selected" :options="device_options" size="sm"></b-form-select>
            <b-form-select class="mr-2 w-25" v-model="model_selected" :options="model_options" size="sm"></b-form-select>
            <b-form-select class="mr-2 select_unit" v-model="unit_selected" :options="unit_options" size="sm"></b-form-select>
          </b-form>
          <b-form inline>
            <span class="mr-4">Filter By:</span>
            <b-form-select class="mr-2 w-25" v-model="filterby_selected" :options="filterby_options" size="sm"></b-form-select>
            <b-input size="sm w-25" placeholder="Enter supplier"></b-input>
          </b-form>
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
                    <b-img
                      class="img_action" 
                      :src="require('../../../assets/icon_images/copy.svg')" 
                      width="25" 
                      height="35" 
                      alt="placeholder">
                    </b-img>
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
  </b-container>
</template>

<script>
export default {
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
  .legends_box_position {
    position: absolute;
    bottom: -20%;
  }
  .whitebox_text_position {
    left: 26%;
  }
  .whitebox {
    position: absolute;
    bottom: -4%;
    left: 14%;
    height: 13px;
    width: 13px;
    background-color: #fff;
    border: 1px solid #000;
  }
  .yellowbox_text_position {
    left: 47.4%;
  }
  .yellowbox {
    position: absolute;
    bottom: -4%;
    left: 44%;
    height: 13px;
    width: 13px;
    background-color: #f8ff01;
  }
  .graybox_text_position {
    left: 60%;
  }
  .graybox {
    position: absolute;
    bottom: -4%;
    left: 56.8%;
    height: 13px;
    width: 13px;
    background-color: #7a7a7a;
  }
  .pinkbox_text_position {
    left: 74%;
  }
  .pinkbox {
    position: absolute;
    bottom: -4%;
    left: 70.4%;
    height: 13px;
    width: 13px;
    background-color:#eb41a6;
  }
  .th_alignment {
    vertical-align:middle
  }
  .img_action {
    cursor: pointer;
  }
  .custom_thead {
    font-size: 10px;;
  }
  .card_custom {
    width: 67vh;
  }
  .select_unit {
    width: 178px;
  }
</style>