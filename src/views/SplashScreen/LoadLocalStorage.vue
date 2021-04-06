<template>
<b-container>
  <b-row class="vh-100 text-center" align-v="center">
    <b-col>
      <b-spinner
          variant="danger"
          type="grow"
          style="width: 5rem; height: 5rem;"
        >
        </b-spinner>
    </b-col>
  </b-row>
</b-container>
</template>

<script>
import { mapGetters } from "vuex";
export default {
    name: "Blank",
    data(){
        return{
            // token:'',
        }
    },
    methods:{
        loadUserInfo: function (token) {
            this.$store.dispatch("loadUserInfo",token);
        },
    },
    computed:{
    ...mapGetters(["getUserInfo"]),
    },
    mounted(){
      this.loadUserInfo(this.$route.params.token);
    },

};

</script>

<style>
</style>