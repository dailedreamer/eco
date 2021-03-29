<template>
<b-container>
    <b-modal
        id="device-modal-update"
        size="xl"
        hide-footer
        title="Edit Contents"
        title-class="alpha__modal__title"
    >
        <b-row class='pl-4 pl-4 pt-3 pb-2 neutral_modal'>
            <b-col cols="3">
                <b-row class="mb-1">
                    <b-col>
                     <b-button block squared size="sm" router-link to="/parts-details" class="pt-3 pb-3 pr-5 custom_button custom_active" variant="outline-secondary">
                        <b-icon icon="info-square" class='float-left ml-2 mr-4' aria-hidden="true"></b-icon> 
                        <small>Parts Details</small>
                    </b-button>
                    </b-col>
                </b-row>
                <b-row class="mb-2">
                    <b-col>
                     <b-button block squared size="sm" router-link to="/meeting" class="pt-3 pb-3 pr-5 custom_button custom_active" variant="outline-secondary">
                        <b-icon icon="people" class='float-left ml-2 mr-4' aria-hidden="true"></b-icon> 
                        <small>Meeting</small>
                    </b-button>
                    </b-col>
                </b-row>
                <b-row class="mb-2">
                    <b-col>
                     <b-button block squared size="sm" router-link to="/eco_details" class="pt-3 pb-3 pr-5 custom_button custom_inactive" variant="outline-secondary">
                        <b-icon icon="pen" class='float-left ml-2 mr-4' aria-hidden="true"></b-icon> 
                        <small>ECO Details</small>
                    </b-button>
                    </b-col>
                </b-row>
                <b-row class="mb-2">
                    <b-col>
                     <b-button block squared size="sm" router-link to="/die_sample" class="pt-3 pb-3 pr-5 custom_button custom_inactive" variant="outline-secondary">
                        <b-icon icon="files" class='float-left ml-2 mr-4' aria-hidden="true"></b-icon> 
                        <small>Die Sample</small>
                    </b-button>
                    </b-col>
                </b-row>
               <b-row class="mb-2">
                    <b-col>
                     <b-button block squared size="sm" router-link to="/drawing_issuance" class="pt-3 pb-3 pr-5 custom_button custom_active" variant="outline-secondary">
                        <b-icon icon="filter-square" class='float-left ml-2 mr-4' aria-hidden="true"></b-icon> 
                        <small>Drawing Issuance</small>
                    </b-button>
                    </b-col>
                </b-row>
                 <b-row class="mb-2">
                    <b-col>
                     <b-button block squared size="sm" router-link to="/die_quotation_details" class="pt-3 pb-3 pr-5 custom_button custom_inactive" variant="outline-secondary">
                        <b-icon icon="pen" class='float-left ml-2 mr-4' aria-hidden="true"></b-icon> 
                        <small>Die Quotation Details</small>
                    </b-button>
                    </b-col>
                </b-row>
                 <b-row class="mb-2">
                    <b-col>
                     <b-button block squared size="sm" router-link to="/die_dfm" class="pt-3 pb-3 pr-5 custom_button custom_inactive" variant="outline-secondary">
                        <b-icon icon="pen" class='float-left ml-2 mr-4' aria-hidden="true"></b-icon> 
                        <small>Die DFM  Details</small>
                    </b-button>
                    </b-col>
                </b-row>
                 <b-row class="mb-2">
                    <b-col>
                     <b-button block squared size="sm" router-link to="/qc_igm" class="pt-3 pb-3 pr-5 custom_button custom_inactive" variant="outline-secondary">
                        <b-icon icon="layout-split" class='float-left ml-2 mr-4' aria-hidden="true"></b-icon> 
                        <small>QC IGM</small>
                    </b-button>
                    </b-col>
                </b-row>
                 <b-row class="mb-2">
                    <b-col>
                     <b-button block squared size="sm" router-link to="/die_trial_details" class="pt-3 pb-3 pr-5 custom_button custom_inactive" variant="outline-secondary">
                        <b-icon icon="pen" class='float-left ml-2 mr-4' aria-hidden="true"></b-icon> 
                        <small>Die Trial Details</small>
                    </b-button>
                    </b-col>
                </b-row>
                 <b-row class="mb-2">
                    <b-col>
                     <b-button block squared size="sm" router-link to="/lot_po_issuance" class="pt-3 pb-3 pr-5 custom_button custom_inactive" variant="outline-secondary">
                        <b-icon icon="newspaper" class='float-left ml-2 mr-4' aria-hidden="true"></b-icon> 
                        <small>Lot PO Issuance</small>
                    </b-button>
                    </b-col>
                </b-row>
                 <b-row class="mb-2">
                    <b-col>
                     <b-button block squared size="sm" router-link to="/lot_delivery" class="pt-3 pb-3 pr-5 custom_button custom_inactive" variant="outline-secondary">
                        <b-icon icon="minecart-loaded" class='float-left ml-2 mr-4' aria-hidden="true"></b-icon> 
                        <small>Lot Delivery</small>
                    </b-button>
                    </b-col>
                </b-row>
                <b-row class="mb-2">
                    <b-col>
                     <b-button block squared size="sm" router-link to="/product_audit" class="pt-3 pb-3 pr-5 custom_button custom_inactive" variant="outline-secondary">
                        <b-icon icon="search" class='float-left ml-2 mr-4' aria-hidden="true"></b-icon> 
                        <small>Product Audit</small>
                    </b-button>
                    </b-col>
                </b-row>
                <b-row class="mb-2">
                    <b-col>
                     <b-button width="200px" squared size="sm" router-link to="/parts_allocation" class="pt-3 pb-3 pr-5 custom_button custom_inactive" variant="outline-secondary">
                        <b-icon icon="reply-all" class='float-left ml-2 mr-4' aria-hidden="true"></b-icon> 
                      <small>Parts Allocation</small>
                    </b-button>
                    </b-col>
                </b-row>
                <b-row class="mb-2">
                    <b-col>
                     <b-button squared size="sm" router-link to="/assembly_application" class="pt-3 pb-3 pr-5 custom_button custom_inactive" variant="outline-secondary">
                        <b-icon icon="wrench" class='float-left ml-2 mr-4' aria-hidden="true"></b-icon> 
                       <small>Assembly Application</small>
                    </b-button>
                    </b-col>
                </b-row>
            </b-col>
            <b-col cols="9">
                <b-container fluid class="mr-2 head">
                    <router-view />
                </b-container>
            </b-col>
        </b-row>
    </b-modal>
</b-container>
</template>

<script>
export default {

}
</script>

<style scoped>
.head
{
    /* background-color: hsl(0, 0%, 96%); */
    color:hsl(0,0%,27%);
    border-radius: 10px;
    margin-left:-13px;
    /* box-shadow: 0 2px 4px 0 rgba(0,0,0,0.18); */
}
/* .custom_button:before
{
    position:absolute
    left:3px;
} */
.custom_button
{
    /* background-color:hsl(0,0%,96%); */
    border-color:hsl(0,0%,85%)
}
.custom_active
{
   border-left: 4px solid #e84656;
   width:240px;
}
.custom_inactive
{
    border-left: 4px solid hsl(0,0%, 60%);
    width:240px;
}
.btn-outline-secondary {
    color: #5e5e5e;
    box-shadow: 0 4px 8px 0 rgba(107, 107, 107, 0.2), 1px 20px 20px 0 rgba(255, 255, 255, 0.19);
}
.btn-outline-secondary:hover, .btn-outline-secondary:active  {
    color: #585858 !important;
    background-color:#e8e8e8 !important;
    box-shadow: 0 2px 4px 0 rgba(0,0,0,0.18) !important;
   
    /* border-color: #6c757d;
    border-left: 5px solid red; */
}
.neutral_modal
{
    /* background-color: hsl(0, 0%, 93%)!important; */
    margin-top:-17px;
    margin-bottom:-17px;
}
</style>