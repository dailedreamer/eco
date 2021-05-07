<template>
  <b-container fluid>
    <b-row>
      <b-col cols="12">
        <vessel class="ml-4">
          <vessel-body>
              <b-col cols="12">
                <b-row>
                  <b-col cols="2">
                    <b-row>
                      <b-card 
                        class="custom_card_filter no_supplier pl-2"  
                        @click="noSupplierCard">
                          <b-row class="mt-0">
                              <b-col cols="7">
                                    <b-row>
                                        <h6 class="custom_card_title mb-0"><strong>No Supplier</strong></h6>
                                        <small class="text-dark mt-0">Incomplete</small>
                                    </b-row>
                                    <b-row class="mt-5">
                                        <small class="text-dark mt-1">Total Count:&nbsp;&nbsp;105</small>
                                    </b-row>
                              </b-col>
                              <b-col cols="5">
                                 <b-img 
                                    :src="require('../../assets/icon_images/supplier.svg')" 
                                    class="card_image pr-1"
                                    width="105" 
                                    height="120" 
                                    alt="placeholder">
                                </b-img>
                                 <div  class="custom_percentage"><strong>58%</strong></div>
                              </b-col>
                          </b-row>
                      </b-card>
                    </b-row>
                    <b-row class="mt-3">
                      <b-card 
                        class="custom_card_filter pl-2" 
                        @click="noEcasNoCard">
                          <b-row class="mt-0">
                              <b-col cols="7">
                                    <b-row>
                                        <h6 class="custom_card_title mb-0"><strong>No ECAS No.</strong></h6>
                                        <small class="text-dark mt-0">Incomplete</small>
                                    </b-row>
                                    <b-row class="mt-5">
                                        <small class="text-dark mt-1">Total Count:&nbsp;&nbsp;105</small>
                                    </b-row>
                              </b-col>
                            <b-col cols="5">
                                 <b-img 
                                    :src="require('../../assets/icon_images/no_ecas.svg')" 
                                    class="card_image pr-1"
                                    width="105" 
                                    height="120" 
                                    alt="placeholder">
                                </b-img>
                                 <div  class="custom_percentage"><strong>4%</strong></div>
                              </b-col>
                          </b-row>
                      </b-card>
                    </b-row>
                    <b-row class="mt-3">
                      <b-card 
                        class="custom_card_filter pl-2" 
                        @click="registeredEcasCard">
                          <b-row class="mt-0">
                             <b-col cols="7">
                                    <b-row>
                                        <h6 class="mb-0"><strong>Registered ECAS</strong></h6>
                                        <small class="text-dark mt-0">For Verification</small>
                                    </b-row>
                                    <b-row class="mt-5">
                                        <small class="text-dark mt-1">Total Count:&nbsp;&nbsp;105</small>
                                    </b-row>
                              </b-col>
                              <b-col cols="5">
                                 <b-img 
                                    :src="require('../../assets/icon_images/registered_ecas.svg')" 
                                    class="card_image pr-1"
                                    width="105" 
                                    height="120" 
                                    alt="placeholder">
                                </b-img>
                                 <div  class="custom_percentage"><strong>4%</strong></div>
                              </b-col>
                          </b-row>
                      </b-card>
                    </b-row>
                    <b-row class="mt-3">
                      <b-card 
                        class="custom_card_filter" 
                        @click="unnecessaryEcasCard">
                          <b-row class="mt-0">
                              <b-col cols="7">
                                  <b-row>
                                      <h6 class="mb-0"><strong>Unnecessary ECAS</strong></h6>
                                      <small class="text-dark mt-0">For Verification</small>
                                  </b-row>
                                  <b-row class="mt-lg-4">
                                      <small class="text-dark mt-1">Total Count: 105</small>
                                  </b-row>
                              </b-col>
                               <b-col cols="5">
                                 <b-img 
                                    :src="require('../../assets/icon_images/unnecessary_ecas.svg')" 
                                    class="card_image pr-1"
                                    width="105" 
                                    height="120" 
                                    alt="placeholder">
                                </b-img>
                                 <div  class="custom_percentage"><strong>98%</strong></div>
                              </b-col>
                          </b-row>
                      </b-card>
                    </b-row>
                  </b-col>
                  <b-col cols="10">
                      <RegisteredContent 
                        :title="title" 
                        :status="status" 
                        :percentage="percentage" 
                        :fields="this.fields"/> 
                  </b-col>
                </b-row>
              </b-col> 
          </vessel-body>
        </vessel>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import RegisteredContent from '../../components/Parts/RegisteredECOParts/RegisteredContent';
export default {
  name: "Blank",
  components: {
    RegisteredContent
  },
  data(){
      return{
        title: "",
        status: "",
        percentage : "",
        fields:[],
        field_set_1:[],
        field_set_2:[],
      }
  },
  mounted(){
    this.registeredEcasCard();
  },
  methods: {
    field_no_action()
    {
        this.fields=[];
        this.fields.push(
            { key: "device_name", sortable: true, class: 'text-center'},
            { key: "model_name", sortable: true, class: 'text-center' },
            { key: "unit_number", sortable: true, class: 'text-center' },
            { key: "unit_name", sortable: true, class: 'text-center' },
            { key: "part_number", sortable: true, class: 'text-center' },
            { key: "new_revision", sortable: true, class: 'text-center' },
            { key: "eco_number", sortable: true, class: 'text-center' },
            { key: "class", sortable: true, class: 'text-center' },
        );  
    },
    field_action()
    {
        this.fields=[];
        this.fields.push(
            { key: "actions", class: 'text-center'},
            { key: "device_name", sortable: true, class: 'text-center'},
            { key: "model_name", sortable: true, class: 'text-center'},
            { key: "unit_number", sortable: true, class: 'text-center'},
            { key: "unit_name", sortable: true, class: 'text-center'},
            { key: "part_number", sortable: true, class: 'text-center' },
            { key: "new_revision", sortable: true, class: 'text-center' },
            { key: "eco_number", sortable: true, class: 'text-center' },
            { key: "class", sortable: true, class: 'text-center' },
        );   
    },
    noSupplierCard() {
        this.title      = "No Supplier";
        this.status     = "Incomplete";
        this.percentage = "13%";
        this.field_action();
    },
    noEcasNoCard() {
        this.title      = "No ECAS No.";
        this.status     = "Incomplete";
        this.percentage = "50%";
        this.field_action();
    },
    registeredEcasCard() {
        this.title      = "Registered ECAS";
        this.status     = "For Verification";
        this.percentage = "98%";
        this.field_no_action();
    },
    unnecessaryEcasCard() {
        this.title      = "Unnecessary ECAS";
        this.status     = "For Verification";
        this.percentage = "41%";
        this.field_no_action();
    }
  }
};
</script>

<style scoped>
    .custom_card_filter
    {
      width: 100%;
      border:0;
      border-radius: 15px;
      color: #b9081d;
      box-shadow: 0px 0px 7px 0px rgb(193 193 193);
      float:left;

    }

    .custom_percentage
    {
      position: absolute;
      top: 9%;
      left: 71%;
      transform: translate(-50%, -50%);
      font-weight: bolder;
      font-size:29px;
      color: black;
    }

    .card_image
    {
     opacity: 0.4;
    }


    .custom_card_title
    {
      letter-spacing: 1px;
    }
</style>