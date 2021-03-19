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
                        class="custom_card_filter"  
                        @click="noSupplierCard">
                          <b-row class="mt-0">
                              <b-col cols="8">
                                    <b-row>
                                        <h5 class="mb-1">No Supplier</h5>
                                        <small class="text-secondary mt-1">Status: Incomplete</small>
                                    </b-row>
                                    <b-row class="mt-lg-3">
                                        <h6 class="text-secondary mt-1">Total Count: 105</h6>
                                    </b-row>
                              </b-col>
                              <b-col cols="4">
                                <h4 class="text-muted">13%</h4> 
                              </b-col>
                          </b-row>
                      </b-card>
                    </b-row>
                    <b-row class="mt-2">
                      <b-card 
                        class="custom_card_filter" 
                        @click="noEcasNoCard">
                          <b-row class="mt-0">
                              <b-col cols="8">
                                    <b-row>
                                        <h5 class="mb-1">No ECAS No.</h5>
                                        <small class="text-secondary mt-1">Status: Incomplete</small>
                                    </b-row>
                                    <b-row class="mt-lg-4">
                                        <h6 class="text-secondary mt-1">Total Count: 105</h6>
                                    </b-row>
                              </b-col>
                              <b-col cols="4">
                                <h4 class="text-muted">50%</h4> 
                              </b-col>
                          </b-row>
                      </b-card>
                    </b-row>
                    <b-row class="mt-2">
                      <b-card 
                        class="custom_card_filter" 
                        @click="registeredEcasCard">
                          <b-row class="mt-0">
                              <b-col cols="8">
                                    <b-row>
                                        <h5 class="mb-1">Registered ECAS</h5>
                                        <small class="text-secondary mt-1">Status: For Verification</small>
                                    </b-row>
                                    <b-row class="mt-lg-4">
                                        <h6 class="text-secondary mt-1">Total Count: 105</h6>
                                    </b-row>
                              </b-col>
                              <b-col cols="4">
                                <h4 class="text-muted">98%</h4> 
                              </b-col>
                          </b-row>
                      </b-card>
                    </b-row>
                    <b-row class="mt-2">
                      <b-card 
                        class="custom_card_filter" 
                        @click="unnecessaryEcasCard">
                          <b-row class="mt-0">
                              <b-col cols="8">
                                    <b-row>
                                        <h5 class="mb-1">Unnecessary ECAS</h5>
                                        <small class="text-secondary mt-1">Status: For Verification</small>
                                    </b-row>
                                    <b-row class="mt-lg-4">
                                        <h6 class="text-secondary mt-1">Total Count: 105</h6>
                                    </b-row>
                              </b-col>
                              <b-col cols="4">
                                <h4 class="text-muted">41%</h4> 
                              </b-col>
                          </b-row>
                      </b-card>
                    </b-row>
                  </b-col>
                  <b-col cols="10">
                      <RegisteredContent :title="title" :status="status" :percentage="percentage" :fields="this.fields" :items="this.items"/> 
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
            { key: "device", sortable: true },
            { key: "model", sortable: true },
            { key: "unit_number", sortable: true },
            { key: "unit_name", sortable: true },
            { key: "part_number", sortable: true },
            { key: "revision_no", sortable: true },
            { key: "eco_no", sortable: true },
            { key: "class", sortable: true },
        );  
    },
    field_action()
    {
        this.fields=[];
        this.fields.push(
            { key: "actions"},
            { key: "device", sortable: true },
            { key: "model", sortable: true },
            { key: "unit_number", sortable: true },
            { key: "unit_name", sortable: true },
            { key: "part_number", sortable: true },
            { key: "revision_no", sortable: true },
            { key: "eco_no", sortable: true },
            { key: "class", sortable: true },
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
    .custom_card_filter{
      width: 100%;
    }
</style>