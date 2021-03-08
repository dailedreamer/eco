<template>
  <b-container fluid>
    <b-row>
      <b-col cols="12">
        <vessel>
          <vessel-header>
            <center>
              <h2 class="mb-1">Logged Out</h2>
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
export default {
  name: "Blank",
  mounted(){
      	// localStorage.setItem('user_info','adasd');
  }
};
</script>

<style>
</style>