<template>
  <b-container fluid>
    <b-row>
      <b-col cols="12">
        <vessel>
          <vessel-header>
            <div class="m-3 div_upload_data">
               <div class="media">
                 <div class="media-aside align-self-start">
                    <b-img 
                        :src="require('../../assets/icon_images/excel.svg')" 
                        width="44" 
                        height="37" 
                        alt="placeholder">
                    </b-img>
                  </div>
                  <div>
                    <h5 class="mb-0">Upload Data</h5>
                    <small class="text-secondary">Upload Data Description</small>
                  </div>
                </div><br>
                <b-col lg="12">
                     <b-row>
                        <b-col lg="3" class="md-2">
                            <b-form-file id="file" accept=".csv" v-on:change="FileUpload()"></b-form-file>
                        </b-col>
                        <b-col lg="2" class="md-2">
                          <AButton
                          id="button-submit"
                          type="submit"
                          title="Click to add budget"
                          variant="primary"
                        >
                          <font-awesome-icon icon="upload" size="sm" class="icon" /> Upload
                        </AButton>
                        </b-col>
                     </b-row>
                </b-col>
                 <br>
                 <b-col cols="12"
                v-if="countread > 0"
                 >
                    <b-table class="alpha__table text-nowrap"
                        hover
                        bordered
                        responsive
                        :fields="fields">
                    </b-table>
                     <b-pagination
                      align="right"
                      class="alpha__table__pagination"
                      pills
                      v-model="currentPage"
                      :total-rows="rows"
                      :per-page="perPage"
                    ></b-pagination>
                 </b-col>
            </div>
          </vessel-header>
          <vessel-body>
          </vessel-body>
        </vessel>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import axios from "axios";
export default {
  name: "partsRegistrationUnits",
  data(){
    return{
      file: '',
       currentPage: 1,
        perPage: 10,
        fields: [
        {
          key: "no",
          sortable: true,
        },
        {
          key: "batch_number",
          sortable: true,
        },
        {
          key: "parent_drawing_number",
          sortable: true,
        },
        {
          key: "drawing_number_current_revision",
          sortable: true,
        },
        {
          key: "part_number",
          sortable: true,
        },
          {
          key: "part_number_current_revision",
          sortable: true,
        },
        {
          key: "class",
          sortable: true,
        },
         {
          key: "die_details",
          sortable: true,
        },
      ],
      countread : 1
    }
  },
  mounted()
  {
      // this.loadTable();
  },
   methods: 
   {
      loadTable: function () 
      {
        //  this.$store.dispatch("loadparts").then((result) => {
        //  this.toast(result.status, result.message);
        // });
      },
      submitFile()
      {
        let formData = new FormData();
        formData.append('file', this.file);

        axios.post('/parts-registration-units',
          formData,
          {
            headers: {
              'Content-Type': 'multipart/form-data'
            }
          }
        ).then(function(){
          console.log('success');
        })
        .catch(function() {
          console.log('fail');
        });
      },
      FileUpload(){
        this.file = this.$refs.file.files[0];
      }
   }
};
</script>


<style>
.b-col
{
  text-align: left;
}
.div_upload_data {
 border: 1px solid black;
 border-radius: 10px;
 box-shadow: 0px 0px 5px 0px #5f4646;
 padding: 10px 10px 20px 10px;
 height: 700px;
}
.page-item.active .page-link
{
  background-color: #A30B1A;
  border-color: #A30B1A;
}

hr 
{
  border-bottom: 3px solid #e84656;
  margin-top: 0;
  margin-bottom: 2rem;
  width: 60%;
}

h5
{
  text-align: left;
}

</style>