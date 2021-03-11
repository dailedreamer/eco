<template>
  <b-row>
    <b-col class="sidetab" cols="1">
      <Side/>
    </b-col>
    <b-col cols="11">
      <EcoApplication v-if="getShowEcoPartsStatus"/>
      <!-- DITO ILAGAY YUNG PARTS MANUFACTURING VIEW -->
      <Body/>
    </b-col>
  </b-row>
</template>

<script>
import { mapGetters } from "vuex";
import Side from "../../components/Parts/PartsMonitoring/Side.vue";
import Body from "../../components/Parts/PartsMonitoring/Body.vue";
import EcoApplication from "./PartsMonitoring/EcoApplication.vue";

export default {
  name: "PartsMonitoring",
  components: {
    EcoApplication,
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