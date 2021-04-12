<template>
  <b-container fluid>
     <b-row class="mb-4">
      <b-col cols="12">
        <b-media>
          <template #aside>
            <b-img 
                :src="require('../assets/icon_images/cubes.svg')" 
                width="44" 
                height="37" 
                alt="placeholder">
            </b-img>
          </template>
            <h5 class="mb-0">Parts</h5>
            <small class="text-secondary">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, illum.
            </small>
        </b-media>
     </b-col>
    </b-row>
    <b-row>
      <b-col cols="12">
            <b-card class="custom_card">
              <b-card-header header-tag="nav" class="custom_header">
                <b-nav card-header tabs>
                  <div v-for = "tab in tab_values" :key= "tab.index" >
                    <b-nav-item :to="tab.to" @click="currentRouteName" :active="tab.status">{{tab.name}}</b-nav-item>
                  </div>
                </b-nav>
              </b-card-header>
              <b-card-body class="text-center custom_body">
                <router-view/>
              </b-card-body>
            </b-card>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
export default {
  name: "Parts",
    data() {
    return {
      tab_values:
            [
              {
                index:1,
                name:"Parts Registration (Unit)",
                status:false,
                to:"/parts-registration-unit",  
                routes:
                      [
                        "/parts-registration-unit"
                      ]              
              },
              {
                index:2,
                name:"Parts Registration (Parts)",
                status:false,
                to:"/parts-registration-parts",  
                routes:
                      [
                        "/parts-registration-parts"
                      ]          
                        
                
              },
              {
                index:3,
                name:"Registered ECO Parts",
                status:false,
                to:"/registered-eco-parts",  
                routes:
                      [
                        "/registered-eco-parts"
                      ]          
              },
              {
                index:4,
                name:"Parts Monitoring",
                status:false,
                to:"/parts-monitoring",  
                routes:
                      [
                        "/parts-monitoring",
                        "/parts-details",
                        "/meeting",
                        "/eco_details",
                        "/die_sample",
                        "/drawing_issuance",
                        "/die_quotation_details",
                        "/die_dfm",
                        "/qc_igm",
                        "/die_trial_details",
                        "/lot_po_issuance",
                        "/lot_delivery",
                        "/product_audit",
                        "/parts_allocation",
                        "/assembly_application",
                      ]      
              },
            ]
    }
    },
    computed: {
    currentRouteName() {
      var route_details = this.$route.fullPath;
        this.tab_values.forEach(function(contents) {
        contents.status=false;
         (contents.routes).forEach(function(route) {
            if(route_details == route)
              {
                contents.status=true;
              }
          });
        });
        return route_details;
        }
    },
};
</script>

<style scoped>

</style>