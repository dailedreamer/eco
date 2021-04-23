<template>
<b-container fluid>
    <b-modal
        id="device-modal-update"
        size="xl"
        hide-footer
        scrollable>
        <template #modal-title="">
            <b-media>
                <template #aside>
                    <b-img 
                        :src="require('../../../assets/icon_images/edit_content.svg')" 
                        width="44" 
                        height="37" 
                        alt="placeholder">
                    </b-img>
                </template>
                <h5 class="mt-2">Edit Contents</h5>
            </b-media>
        </template>
        <b-row class='pl-4 pl-4 pt-3 pb-2 neutral_modal'>
            <b-col cols="3">
                <b-row class="mb-1">
                    <b-col>
                        <b-button 
                            block 
                            squared 
                            size="sm" 
                            router-link to="/parts-details" 
                            class="pt-4 pb-4 pr-5 custom_button custom_active" 
                            variant="outline-secondary">
                            <b-media>
                                <template #aside>
                                    <b-img 
                                        class="ml-2"
                                        :src="require('../../../assets/icon_images/parts/documents.png')" 
                                        width="30" 
                                        height="30" 
                                        alt="placeholder">
                                    </b-img>
                                </template>
                                <h6 class="mt-2">Parts Details</h6>
                            </b-media>
                        </b-button>
                    </b-col>
                </b-row>
                <b-row class="mb-2">
                    <b-col>
                        <b-button 
                            block 
                            squared 
                            size="sm" 
                            router-link to="/meeting" 
                            class="pt-4 pb-4 pr-5 custom_button custom_inactive" 
                            variant="outline-secondary">
                            <b-media>
                                <template #aside>
                                    <b-img 
                                        class="ml-2"
                                        :src="require('../../../assets/icon_images/parts/overtime.png')" 
                                        width="30" 
                                        height="30" 
                                        alt="placeholder">
                                    </b-img>
                                </template>
                                <h6 class="mt-2">Meeting</h6>
                            </b-media>
                        </b-button>
                    </b-col>
                </b-row>
                <b-row class="mb-2">
                    <b-col>
                        <b-button 
                        block 
                        squared 
                        size="sm" 
                        router-link to="/eco_details" 
                        class="pt-4 pb-4 pr-5 custom_button custom_inactive" 
                        variant="outline-secondary">
                            <b-media>
                                <template #aside>
                                    <b-img 
                                        class="ml-2"
                                        :src="require('../../../assets/icon_images/parts/document.png')" 
                                        width="30" 
                                        height="30" 
                                        alt="placeholder">
                                    </b-img>
                                </template>
                                <h6 class="mt-2">ECO Details</h6>
                            </b-media>
                        </b-button>
                    </b-col>
                </b-row>
                <b-row class="mb-2">
                    <b-col>
                        <b-button 
                            block 
                            squared size="sm" 
                            router-link to="/die_sample" 
                            class="pt-4 pb-4 pr-5 custom_button custom_inactive" 
                            variant="outline-secondary">
                            <b-media>
                                <template #aside>
                                    <b-img 
                                        class="ml-2"
                                        :src="require('../../../assets/icon_images/parts/planner.png')" 
                                        width="30" 
                                        height="30" 
                                        alt="placeholder">
                                    </b-img>
                                </template>
                                <h6 class="mt-2">Die Sample</h6>
                            </b-media>
                        </b-button>
                    </b-col>
                </b-row>
               <b-row class="mb-2">
                    <b-col>
                        <b-button 
                            block 
                            squared 
                            size="sm" 
                            router-link to="/drawing_issuance" 
                            class="pt-3 pb-3 pr-5 custom_button custom_inactive" 
                            variant="outline-secondary">
                            <b-media>
                                <template #aside>
                                    <b-img 
                                        class="ml-2 mt-2"
                                        :src="require('../../../assets/icon_images/parts/magazine.png')" 
                                        width="30" 
                                        height="30" 
                                        alt="placeholder">
                                    </b-img>
                                </template>
                                <h6 class="mt-2">Drawing Issuance</h6>
                            </b-media>
                        </b-button>
                    </b-col>
                </b-row>
                 <b-row class="mb-2">
                    <b-col>
                        <b-button 
                            block 
                            squared 
                            size="sm" 
                            router-link to="/die_quotation_details" 
                            class="pt-3 pb-3 pr-5 custom_button custom_inactive" 
                            variant="outline-secondary">
                            <b-media>
                                <template #aside>
                                    <b-img 
                                        class="ml-2 mt-2"
                                        :src="require('../../../assets/icon_images/parts/blockchain.png')" 
                                        width="30" 
                                        height="30" 
                                        alt="placeholder">
                                    </b-img>
                                </template>
                                <h6 class="mt-2">Die Quotation Details</h6>
                            </b-media>
                        </b-button>
                    </b-col>
                </b-row>
                 <b-row class="mb-2">
                    <b-col>
                        <b-button 
                            block 
                            squared 
                            size="sm" 
                            router-link to="/die_dfm" 
                            class="pt-4 pb-4 pr-5 custom_button custom_inactive" 
                            variant="outline-secondary">
                            <b-media>
                                <template #aside>
                                    <b-img 
                                        class="ml-2"
                                        :src="require('../../../assets/icon_images/parts/change-theme.png')" 
                                        width="30" 
                                        height="30" 
                                        alt="placeholder">
                                    </b-img>
                                </template>
                                <h6 class="mt-2">Die DFM  Details</h6>
                            </b-media>
                        </b-button>
                    </b-col>
                </b-row>
                 <b-row class="mb-2">
                    <b-col>
                        <b-button 
                            block 
                            squared 
                            size="sm" 
                            router-link to="/qc_igm" 
                            class="pt-4 pb-4 pr-5 custom_button custom_inactive" 
                            variant="outline-secondary">
                            <b-media>
                                <template #aside>
                                    <b-img 
                                        class="ml-2"
                                        :src="require('../../../assets/icon_images/parts/details.png')" 
                                        width="30" 
                                        height="30" 
                                        alt="placeholder">
                                    </b-img>
                                </template>
                                <h6 class="mt-2">QC IGM</h6>
                            </b-media>
                        </b-button>
                    </b-col>
                </b-row>
                 <b-row class="mb-2">
                    <b-col>
                        <b-button 
                            block 
                            squared 
                            size="sm" 
                            router-link to="/die_trial_details" 
                            class="pt-4 pb-4 pr-5 custom_button custom_inactive" 
                            variant="outline-secondary">
                            <b-media>
                                <template #aside>
                                    <b-img 
                                        class="ml-2"
                                        :src="require('../../../assets/icon_images/parts/list-2.png')" 
                                        width="30" 
                                        height="30" 
                                        alt="placeholder">
                                    </b-img>
                                </template>
                                <h6 class="mt-2">Die trial  Details</h6>
                            </b-media>
                        </b-button>
                    </b-col>
                </b-row>
                 <b-row class="mb-2">
                    <b-col>
                        <b-button 
                            block squared 
                            size="sm" 
                            router-link to="/lot_po_issuance" 
                            class="pt-4 pb-4 pr-5 custom_button custom_inactive" 
                            variant="outline-secondary">
                            <b-media>
                                <template #aside>
                                    <b-img 
                                        class="ml-2"
                                        :src="require('../../../assets/icon_images/parts/files.png')" 
                                        width="30" 
                                        height="30" 
                                        alt="placeholder">
                                    </b-img>
                                </template>
                                <h6 class="mt-2">Lot PO Issuance</h6>
                            </b-media>
                        </b-button>
                    </b-col>
                </b-row>
                 <b-row class="mb-2">
                    <b-col>
                        <b-button 
                            block 
                            squared 
                            size="sm" 
                            router-link to="/lot_delivery" 
                            class="pt-4 pb-4 pr-5 custom_button custom_inactive" 
                            variant="outline-secondary">
                            <b-media>
                                <template #aside>
                                    <b-img 
                                        class="ml-2"
                                        :src="require('../../../assets/icon_images/parts/cart.png')" 
                                        width="30" 
                                        height="30" 
                                        alt="placeholder">
                                    </b-img>
                                </template>
                                <h6 class="mt-2">Lot Delivery</h6>
                            </b-media>
                        </b-button>
                    </b-col>
                </b-row>
                <b-row class="mb-2">
                    <b-col>
                        <b-button 
                            block 
                            squared 
                            size="sm" 
                            router-link to="/product_audit" 
                            class="pt-4 pb-4 pr-5 custom_button custom_inactive" 
                            variant="outline-secondary">
                            <b-media>
                                <template #aside>
                                    <b-img 
                                        class="ml-2"
                                        :src="require('../../../assets/icon_images/parts/data.png')" 
                                        width="30" 
                                        height="30" 
                                        alt="placeholder">
                                    </b-img>
                                </template>
                                <h6 class="mt-2">Product Audit</h6>
                            </b-media>
                        </b-button>
                    </b-col>
                </b-row>
                <b-row class="mb-2">
                    <b-col>
                        <b-button 
                            block 
                            squared 
                            size="sm" 
                            router-link to="/parts_allocation" 
                            class="pt-4 pb-4 pr-5 custom_button custom_inactive" 
                            variant="outline-secondary">
                            <b-media>
                                <template #aside>
                                    <b-img 
                                        class="ml-2"
                                        :src="require('../../../assets/icon_images/parts/cabinet.png')" 
                                        width="30" 
                                        height="30" 
                                        alt="placeholder">
                                    </b-img>
                                </template>
                                <h6 class="mt-2">Parts Allocation</h6>
                            </b-media>
                        </b-button>
                    </b-col>
                </b-row>
                <b-row class="mb-2">
                    <b-col>
                        <b-button 
                            squared 
                            size="sm" 
                            router-link to="/assembly_application" 
                            class="pt-3 pb-3 pr-5 custom_button custom_inactive" 
                            variant="outline-secondary">
                            <b-media>
                                <template #aside>
                                    <b-img 
                                        class="ml-2 mt-2"
                                        :src="require('../../../assets/icon_images/parts/work.png')" 
                                        width="30" 
                                        height="30" 
                                        alt="placeholder">
                                    </b-img>
                                </template>
                                <h6 class="mt-2">Assembly Application</h6>
                            </b-media>
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

/* .modal-content{
    max-width: 1500px;
} */

/* .modal-xl {
    max-width: 1223px;
} */

</style>