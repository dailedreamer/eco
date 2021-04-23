<template>
  <b-container fluid>
    <Header 
        part_number="KDTEST" 
        page_title="Meeting"/>
        <center>
            <b-row class="p-2 mb-5 mt-5 ml-3">
                <b-col>
                    <p class="mb-2">Tokyo-Niigata Meeting:</p>
                    <b-row class="mt-2 ml-3 mr-3">
                        <b-form-timepicker 
                            v-model="tokyo_niigata_time_value" 
                            hide-header
                            no-close-button="true" 
                            class="meeting_datepicker"></b-form-timepicker>
                    </b-row>
                    <b-row class="mt-2 ml-3 mr-3">
                        <b-form-datepicker 
                            id="slc_tokyo_niigata_meeting_date" 
                            placeholder="Choose a date" 
                            class="meeting_datepicker"
                            v-model="tokyo_niigata_date_value"
                            hide-header
                            :date-format-options="{ year: 'numeric', month: 'long', day: 'numeric' }"
                            ></b-form-datepicker>
                    </b-row>
                </b-col>
                <b-col>
                    <p class="mb-2">FTEC-FDTP Meeting:</p>
                    <b-row class="mt-2 ml-3 mr-3">
                        <b-form-timepicker 
                            v-model="ftec_fdtp_time_value" 
                            hide-header
                            no-close-button="true"
                            class="meeting_datepicker"></b-form-timepicker>  
                    </b-row>
                    <b-row class="mt-2 ml-3 mr-3">
                        <b-form-datepicker 
                        id="slc_ftec_fdtp_meeting_date" 
                        placeholder="Choose a date" 
                        class="meeting_datepicker"
                        v-model="ftec_fdtp_date_value"
                        hide-header
                        :date-format-options="{ year: 'numeric', month: 'long', day: 'numeric' }"
                        ></b-form-datepicker>
                    </b-row>
                </b-col>
            </b-row>
            <b-row class="p-2 mb-5 mt-5 ml-3">
                <b-col>
                    <p class="mb-2">National ECO Meeting:</p>
                    <b-row class="mt-2 ml-3 mr-3">
                        <b-form-timepicker 
                            v-model="national_eco_time_value" 
                            hide-header
                            no-close-button="true"
                            class="meeting_datepicker"></b-form-timepicker>
                    </b-row>
                    <b-row class="mt-2 ml-3 mr-3">
                        <b-form-datepicker 
                            id="slc_national_eco_meeting_date" 
                            placeholder="Choose a date" 
                            class="meeting_datepicker"
                            v-model="national_eco_date_value"
                            hide-header
                            :date-format-options="{ year: 'numeric', month: 'long', day: 'numeric' }"
                            ></b-form-datepicker>
                    </b-row>
                </b-col>
                <b-col>
                    <p class="mb-2">Meeting with Supplier:</p>
                    <b-row class="mt-2 ml-3 mr-3">
                        <b-form-timepicker 
                            v-model="meeting_with_supplier_time_value" 
                            hide-header
                            no-close-button="true"
                            class="meeting_datepicker">
                        </b-form-timepicker>  
                    </b-row>
                    <b-row class="mt-2 ml-3 mr-3">
                        <b-form-datepicker 
                            id="slc_meeting_with_supplier_date" 
                            placeholder="Choose a date" 
                            class="meeting_datepicker"
                            v-model="meeting_with_supplier_date_value"
                            hide-header
                            :date-format-options="{ year: 'numeric', month: 'long', day: 'numeric' }"
                            ></b-form-datepicker>
                    </b-row>
                </b-col>
            </b-row>
        </center>
        <b-row class="footer pt-2 pb-2 mr-1 p-2">
            <b-col cols="12">
                <b-button 
                    class="float-right"
                    type="submit"
                    id="button-submit"
                    size="sm" 
                    variant="outline-secondary"
                    title="Click to Clear Inputs"
                    @click="clearInputs()">
                    <font-awesome-icon 
                        icon="times-circle" 
                        class="icon"/> Clear
                </b-button>
                <b-button 
                    class="float-right mr-2"
                    type="submit"
                    id="btn_save" 
                    size="sm" 
                    variant="danger"
                    title="Click to Update Meeting Details"
                    @click="update()">
                    <font-awesome-icon 
                        icon="save" 
                        class="icon"/>Update
                </b-button> 
            </b-col>
        </b-row> 
    </b-container>
</template>

<script>
import Header from "./ModalHeaders.vue";
export default {
    name: "AssemblyApplication",
    components: {
        Header,
    },
    data(){
        return{
            tokyo_niigata_time_value: '',
            tokyo_niigata_date_value:'',
            ftec_fdtp_time_value: '',
            ftec_fdtp_date_value: '',
            national_eco_time_value: '',
            national_eco_date_value: '',
            meeting_with_supplier_time_value: '',
            meeting_with_supplier_date_value: '',
            date_today: '',
            current_time: '',
      }
    },
    mounted(){
        this.getDateToday();
    },
    methods:{
        getDateToday: function(){
            const toTwoDigits = num => num < 10 ? '0' + num : num;
            let today  = new Date();
            let year = today.getFullYear();
            let month = toTwoDigits(today.getMonth() + 1);
            let day = toTwoDigits(today.getDate());
            let hours = today.getHours();
            let minutes = today.getMinutes();
            this.date_today = `${year}-${month}-${day}`;
            this.current_time = `${hours}:${minutes}`;

            this.tokyo_niigata_date_value = this.date_today;
            this.ftec_fdtp_date_value = this.date_today;
            this.national_eco_date_value = this.date_today;
            this.meeting_with_supplier_date_value = this.date_today;

            this.tokyo_niigata_time_value = this.current_time;
            this.ftec_fdtp_time_value = this.current_time;
            this.national_eco_time_value = this.current_time;
            this.meeting_with_supplier_time_value = this.current_time;
        },
        update: function(){
            alert("Successfully Save!")
        },
        clearInputs: function(){
            alert("Clear Inputs!")
        },
    }
}
</script>

<style scoped>
    .meeting_datepicker{
        position:unset;
        top: unset;
        max-width: unset;
        overflow: unset;
        flex-wrap: unset;
        box-shadow: unset;
    }
</style>