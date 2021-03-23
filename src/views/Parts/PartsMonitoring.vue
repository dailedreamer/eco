<template>
  <b-row>
    <b-col class="sidetab" cols="1">
      <Side/>
    </b-col>
    <b-col cols="11">
      <EcoApplication v-if="getShowEcoPartsStatus"/>
      <!-- DITO ILAGAY YUNG PARTS MANUFACTURING VIEW -->
      <PartsManufacturing v-if="getShowPartsManufacturingStatus"/>
          
      <Body/>
      <SearchTemplate/>
    </b-col>
  </b-row>
</template>

<script>
import { mapGetters } from "vuex";
import Side from "../../components/Parts/PartsMonitoring/Side.vue";
import Body from "../../components/Parts/PartsMonitoring/Body.vue";
import EcoApplication from "./PartsMonitoring/EcoApplication.vue";
import SearchTemplate from "../ReUsables/SearchTemplate.vue";
import PartsManufacturing from "./PartsMonitoring/PartsManufacturing.vue";


export default {
  name: "PartsMonitoring",
  components: {
    EcoApplication,
    PartsManufacturing,
    SearchTemplate,
    Side,
    Body
  },
  computed: {
    ...mapGetters(["getShowEcoPartsStatus","getShowPartsManufacturingStatus"])
  }
};
</script>

<style scoped>
  .sidetab {
    height: 460px;
  }
</style>