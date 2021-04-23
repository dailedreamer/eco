<template>
  <b-container fluid>
    <Header 
        part_number="KDTEST" 
        page_title="Die DFM"/>
        <b-row class='pl-2'>
            <b-col cols="9">
                <strong>
                    Product Layout
                </strong>
            </b-col>
            <b-col cols="3">
                <b-button 
                    class="mr-1"
                    variant="danger"
                    type="submit"
                    id="button-submit"
                    size="sm"
                    title="Click to View"
                    @click="view_product_layout()">
                    <font-awesome-icon
                        icon="eye"
                        class="icon"/>
                        View
                </b-button>
                <b-button 
                    variant="danger" 
                    type="submit"
                    id="button-submit"
                    size="sm"
                    title="Click to Add"
                    @click="add_product_layout()">
                    <font-awesome-icon
                        icon="plus"
                        class="icon"/>
                        Add
                </b-button>
            </b-col>  
        </b-row>
        <b-row class="pl-4 mt-3">
            <b-col cols="6">
                <b-form-group 
                    label-size="sm" 
                    label-for="radio_pl_necessary" 
                    label="Necessary:"
                    label-cols-sm="4"
                    label-align-sm="left">
                    <b-form-radio-group
                        class="mt-1"
                        v-model="product_layout_selected"
                        :options="necessary_options"
                        value-field="item"
                        text-field="name">
                    </b-form-radio-group>
                </b-form-group>
            </b-col>
        </b-row>
        <b-row class="pl-4">
            <b-col cols="4">
                <b-form-group 
                    label-size="sm" 
                    label-for="txt_pl_revision_number" 
                    label="Revision Number:">
                    <b-form-input
                        id="txt_pl_revision_number"
                        name="txt_pl_revision_number"
                        type="text"
                        required
                        placeholder="Enter Revision Number"
                        autocomplete="off"/>
                </b-form-group>
                <b-form-group 
                    label-size="sm" 
                    label-for="slc_pl_pe_judgement" 
                    label="PE Judgement:">
                    <b-form-select 
                        id="slc_pl_pe_judgement"
                        v-model="pe_pl_selected_judgement" 
                        :options="judgement_options">
                        <template #first>
                            <b-form-select-option :value="null" disabled>Select PE Judgment</b-form-select-option>
                        </template>
                    </b-form-select>
                </b-form-group>
                <b-form-group 
                    label-size="sm" 
                    label-for="slc_pl_ftec_judgement" 
                    label="FTEC Judgement:">
                    <b-form-select 
                        id="slc_pl_ftec_judgement"
                        v-model="ftec_pl_selected_judgement" 
                        :options="judgement_options">
                        <template #first>
                            <b-form-select-option :value="null" disabled>Select FTEC Judgment</b-form-select-option>
                        </template>
                    </b-form-select>
                </b-form-group>
            </b-col>
            <b-col cols="4">
                <b-form-group 
                    label-size="sm" 
                    label-for="slc_pl_target_date" 
                    label="Target Date Submission:">
                    <b-form-datepicker 
                        id="slc_pl_target_date" 
                        placeholder="Choose a date" 
                        class="die_dfm_datepicker"
                        hide-header
                        :date-format-options="{ year: 'numeric', month: 'numeric', day: 'numeric' }"
                        ></b-form-datepicker>
                </b-form-group>
                <b-form-group 
                    label-size="sm" 
                    label-for="slc_pl_pe_date_reviewed" 
                    label="PE Date Reviewed:">
                    <b-form-datepicker 
                        id="slc_pl_pe_date_reviewed" 
                        placeholder="Choose a date" 
                        class="die_dfm_datepicker"
                        hide-header
                        :date-format-options="{ year: 'numeric', month: 'numeric', day: 'numeric' }"
                        ></b-form-datepicker>
                </b-form-group>
                <b-form-group 
                    label-size="sm" 
                    label-for="slc_pl_date_approval" 
                    label="Date Approval:">
                    <b-form-datepicker 
                        id="slc_pl_date_approval" 
                        placeholder="Choose a date" 
                        class="die_dfm_datepicker"
                        hide-header
                        :date-format-options="{ year: 'numeric', month: 'numeric', day: 'numeric' }"
                        ></b-form-datepicker>
                </b-form-group>
            </b-col>
            <b-col cols="4">
                <b-form-group 
                    label-size="sm" 
                    label-for="slc_pl_date_received" 
                    label="Date Received from Supplier:">
                    <b-form-datepicker 
                        id="slc_pl_date_received" 
                        placeholder="Choose a date" 
                        class="die_dfm_datepicker"
                        hide-header
                        :date-format-options="{ year: 'numeric', month: 'numeric', day: 'numeric' }"
                        ></b-form-datepicker>
                </b-form-group>
                <b-form-group 
                    label-size="sm" 
                    label-for="slc_pl_date_sent_to_ftec" 
                    label="Date Sent to FTEC:">
                    <b-form-datepicker 
                        id="slc_pl_date_sent_to_ftec" 
                        placeholder="Choose a date" 
                        class="die_dfm_datepicker"
                        hide-header
                        :date-format-options="{ year: 'numeric', month: 'numeric', day: 'numeric' }"
                        ></b-form-datepicker>
                </b-form-group>
                <b-form-group 
                    label-size="sm" 
                    label-for="slc_pl_date_sent_to_supplier" 
                    label="Date Sent to Supplier:">
                    <b-form-datepicker 
                        id="slc_pl_date_sent_to_supplier" 
                        placeholder="Choose a date" 
                        class="die_dfm_datepicker"
                        hide-header
                        :date-format-options="{ year: 'numeric', month: 'numeric', day: 'numeric' }"
                        ></b-form-datepicker>
                </b-form-group>
            </b-col>
        </b-row>
        <b-row class="footer pt-2 pb-2">
            <b-col cols="12">
                <b-button 
                    class="float-right"
                    size="sm" 
                    variant="outline-secondary"
                    title="Click to Clear Inputs"
                    @click="clearProductLayoutInputs()">
                    <font-awesome-icon 
                        icon="times-circle" 
                        class="icon"/> Clear
                </b-button>
                <b-button 
                    class="float-right mr-2"
                    id="btn_save" 
                    size="sm" 
                    variant="danger" 
                    type="submit"
                    title="Click to Save Product Layout"
                    @click="saveProductLayout()">
                    <font-awesome-icon 
                        icon="save" 
                        class="icon"/> Save
                </b-button> 
            </b-col>
        </b-row>
        <hr>
        <b-row class='pl-2'>
            <b-col cols="9">
                <strong>
                    Die Drawing
                </strong>
            </b-col>
            <b-col cols="3">
                <b-button 
                    class="mr-1"
                    variant="danger"
                    type="submit"
                    id="button-submit"
                    size="sm"
                    title="Click to View"
                    @click="view_die_drawing()">
                    <font-awesome-icon
                        icon="eye"
                        class="icon"/>
                        View
                </b-button>
                <b-button 
                    variant="danger" 
                    type="submit"
                    id="button-submit"
                    size="sm"
                    title="Click to Add"
                    @click="add_die_drawing()">
                    <font-awesome-icon
                        icon="plus"
                        class="icon"/>
                        Add
                </b-button>
            </b-col>  
        </b-row>
        <b-row class="pl-4 mt-3">
            <b-col cols="6">
                <b-form-group 
                    label-size="sm" 
                    label-for="radio_die_necessary" 
                    label="Necessary:"
                    label-cols-sm="4"
                    label-align-sm="left">
                    <b-form-radio-group
                        class="mt-1"
                        v-model="die_drawing_selected"
                        :options="necessary_options"
                        value-field="item"
                        text-field="name">
                    </b-form-radio-group>
                </b-form-group>
            </b-col>
        </b-row>
        <b-row class="pl-4">
            <b-col cols="4">
                <b-form-group 
                    label-size="sm" 
                    label-for="txt_die_revision_number" 
                    label="Revision Number:">
                    <b-form-input
                        id="txt_die_revision_number"
                        name="txt_die_revision_number"
                        type="text"
                        required
                        placeholder="Enter Revision Number"
                        autocomplete="off"/>
                </b-form-group>
                <b-form-group 
                    label-size="sm" 
                    label-for="slc_die_pe_judgement" 
                    label="PE Judgement:">
                    <b-form-select 
                        id="slc_die_pe_judgement"
                        v-model="pe_die_selected_judgement" 
                        :options="judgement_options">
                        <template #first>
                            <b-form-select-option :value="null" disabled>Select PE Judgment</b-form-select-option>
                        </template>
                    </b-form-select>
                </b-form-group>
                <b-form-group 
                    label-size="sm" 
                    label-for="slc_die_ftec_judgement" 
                    label="FTEC Judgement:">
                    <b-form-select 
                        id="slc_die_ftec_judgement"
                        v-model="ftec_die_selected_judgement" 
                        :options="judgement_options">
                        <template #first>
                            <b-form-select-option :value="null" disabled>Select FTEC Judgment</b-form-select-option>
                        </template>
                    </b-form-select>
                </b-form-group>
            </b-col>
            <b-col cols="4">
                <b-form-group 
                    label-size="sm" 
                    label-for="slc_die_target_date" 
                    label="Target Date Submission:">
                    <b-form-datepicker 
                        id="slc_die_target_date" 
                        placeholder="Choose a date" 
                        class="die_dfm_datepicker"
                        hide-header
                        :date-format-options="{ year: 'numeric', month: 'numeric', day: 'numeric' }"
                        ></b-form-datepicker>
                </b-form-group>
                <b-form-group 
                    label-size="sm" 
                    label-for="slc_die_pe_date_reviewed" 
                    label="PE Date Reviewed:">
                    <b-form-datepicker 
                        id="slc_die_pe_date_reviewed" 
                        placeholder="Choose a date" 
                        class="die_dfm_datepicker"
                        hide-header
                        :date-format-options="{ year: 'numeric', month: 'numeric', day: 'numeric' }"
                        ></b-form-datepicker>
                </b-form-group>
                <b-form-group 
                    label-size="sm" 
                    label-for="slc_die_date_approval" 
                    label="Date Approval:">
                    <b-form-datepicker 
                        id="slc_die_date_approval" 
                        placeholder="Choose a date" 
                        class="die_dfm_datepicker"
                        hide-header
                        :date-format-options="{ year: 'numeric', month: 'numeric', day: 'numeric' }"
                        ></b-form-datepicker>
                </b-form-group>
            </b-col>
            <b-col cols="4">
                <b-form-group 
                    label-size="sm" 
                    label-for="slc_die_date_received" 
                    label="Date Received from Supplier:">
                    <b-form-datepicker 
                        id="slc_die_date_received" 
                        placeholder="Choose a date" 
                        class="die_dfm_datepicker"
                        hide-header
                        :date-format-options="{ year: 'numeric', month: 'numeric', day: 'numeric' }"
                        ></b-form-datepicker>
                </b-form-group>
                <b-form-group 
                    label-size="sm" 
                    label-for="slc_die_date_sent_to_ftec" 
                    label="Date Sent to FTEC:">
                    <b-form-datepicker
                        id="slc_die_date_sent_to_ftec" 
                        placeholder="Choose a date" 
                        class="die_dfm_datepicker"
                        hide-header
                        :date-format-options="{ year: 'numeric', month: 'numeric', day: 'numeric' }"
                        ></b-form-datepicker>
                </b-form-group>
                <b-form-group 
                    label-size="sm" 
                    label-for="slc_die_date_sent_to_supplier" 
                    label="Date Sent to Supplier:">
                    <b-form-datepicker 
                        id="slc_die_date_sent_to_supplier" 
                        placeholder="Choose a date" 
                        class="die_dfm_datepicker"
                        hide-header
                        :date-format-options="{ year: 'numeric', month: 'numeric', day: 'numeric' }"
                        ></b-form-datepicker>
                </b-form-group>
            </b-col>
        </b-row>
        <b-row class="pl-4">
            <b-col>
            <b-form-group
                label="Remarks:"
                label-for="txt_remarks"
                label-size="sm">
                <b-form-textarea 
                    id="txt_remarks"
                    name="txt_remarks"
                    rows="2"
                    max-rows="3"
                    placeholder="Enter Remarks"
                    autocomplete="off"></b-form-textarea>
            </b-form-group>
            </b-col>
        </b-row>
        <b-row class="footer pt-2 pb-4">
            <b-col cols="12">
                <b-button 
                    class="float-right"
                    size="sm" 
                    variant="outline-secondary"
                    title="Click to Clear Inputs"
                    @click="clearDieDrawingInputs()">
                    <font-awesome-icon 
                        icon="times-circle" 
                        class="icon"/> 
                        Clear
                </b-button>
                <b-button 
                    class="float-right mr-2"
                    id="btn_update" 
                    size="sm" 
                    variant="danger" 
                    type="submit"
                    title="Click to Update Die Drawing"
                    @click="updateDieDrawing()">
                    <font-awesome-icon 
                        icon="save" 
                        class="icon"/> 
                        Update
                </b-button> 
            </b-col>
        </b-row>
  </b-container>
</template>

<script>
import Header from "./ModalHeaders.vue";
export default {
    name: "DieDFM",
    components: {
        Header,
    },
    data(){
        return{
            pe_pl_selected_judgement: null,
            ftec_pl_selected_judgement: null,
            pe_die_selected_judgement: null,
            ftec_die_selected_judgement: null,
            judgement_options: [
                {value: 'Good', text: 'Good'},
                {value: 'No Good', text: 'No Good'}
            ],
            product_layout_selected: '',
            die_drawing_selected: '',
            necessary_options: [
                { item: 'Yes', name: 'Yes'},
                { item: 'No', name: 'No'},
            ],
        }
    },
    methods:{
        view_product_layout: function() {
            alert('Open Product Layout View Modal');
        },
        add_product_layout: function() {
            alert('Open Product Layout Add Modal');
        },
        clearProductLayoutInputs: function() {
            alert('Clear Product Layout Inputs');
        },
        saveProductLayout: function() {
            alert('Successfully Save Product Layout');
        },
        view_die_drawing: function() {
            alert('Open Die drawing View Modal');
        },
        add_die_drawing: function() {
            alert('Open Die Drawing Add Modal');
        },
        clearDieDrawingInputs: function() {
            alert('Clear Die Drawing Inputs');
        },
        updateDieDrawing: function() {
            alert('Successfully Updates Die Drawing');
        },
    }
}
</script>

<style scoped>
    .die_dfm_datepicker{
        position:unset;
        top: unset;
        max-width: unset;
        overflow: unset;
        flex-wrap: unset;
        box-shadow: unset;
    }
</style>