<template>
  <b-modal :id="id" hide-footer hide-header centered header-class="my-header">
      <div class="float-left title">
        <font-awesome-icon icon="info-circle"/>
          Information
         <hr>
      </div>
    <div class="text-center" style="margin-bottom: 20px">
      Are you sure you want to Proceed?
    </div>
    <div class="text-center">
      <b-button size="md" variant="danger" @click="functionToCall" class="mr-2">Yes</b-button>
      <b-button size="md" @click="hideModal">Cancel</b-button>
    </div>
  </b-modal>
</template>

<script>
export default {
  name: "DeleteModal",
  props: {
    functionToCall: {
      type: Function,
    },
    visibility: String,
    id: {
      type: String,
      default: "modal-delete-id"
    }
  },

  methods: {
    hideModal() {
      this.$bvModal.hide(this.id)
    },
  },
};
</script>

<style lang="scss" scoped>
  b-modal{
    z-index: 2;
  }
   .my-header{
    margin-left: 10;
    // text-align: left
    padding: 0px
  }
  #modal-delete-id___BV_modal_content_{
    background-color: blue !important;
  }
  .title {
    // border-top: 7px solid rgb(192, 23, 23);
    width: 100%;
    font-size: 20px;
    // margin-top: -16px;
  }


</style>