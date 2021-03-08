<template>
  <b-container fluid>
    <b-row>
      <b-col cols="12">
        <vessel>
          <vessel-header>
            <center>
              <h2 class="mb-1" >{{$route.params.token}}</h2>
            </center>
          </vessel-header>
          <vessel-body>
          </vessel-body>
        </vessel>
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
        // console.log(localStorage.getItem('user_info'));

        this.loadUserInfo(this.$route.params.token);
        console.log(this.getUserInfo);
    },

};

</script>

<style>
</style>