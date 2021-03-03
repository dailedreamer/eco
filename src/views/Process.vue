<template>
  <b-container fluid>
     <b-row class="mb-4">
      <b-col cols="12">
        <b-media>
          <template #aside>
            <b-img 
                :src="require('../assets/icon_images/project.svg')" 
                width="44" 
                height="37" 
                alt="placeholder">
            </b-img>
          </template>
            <h5 class="mb-0">Process Module</h5>
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
                    <b-nav-item :to="tab.to" :active="tab.status" @click="setIndex(tab.index)">{{tab.name}}</b-nav-item>
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
  name: "Process",
    data() {
    return {
      tab_values:
            [
              {
                index:1,
                name:"Process Registration",
                status:true,
                to:"/process-registration"    
              },
              {
                index:2,
                name:"Process Monitoring",
                status:false,
                to:"/process-monitoring"        
                
              },
            ]
    }
    },
    methods:
    {
      setIndex(index)
      {
        this.tab_values.forEach(function(contents) {
         contents.status=false;
         if(contents.index === index)
         {
           contents.status=true;
         }
        });
      }
    }
};
</script>

<style scoped>

</style>