<template>
  <b-container fluid>
    <b-row>
      <b-col cols="12">
        <vessel>
          <vessel-header>
            <div class="m-3 div_upload_data">
               <div class="media">
                 <div class="media-aside align-self-start">
                    <img src="/img/cubes.5abf071a.svg" alt="placeholder" width="44" height="37" class="">
                  </div>
                  <div>
                    <h5 class="mb-0">Upload Data</h5>
                    <small class="text-secondary">Upload Data Description</small>
                  </div>
                </div>
                <b-col lg="12">
                  <b-col lg="4" class="md-2">
                     <b-form-file @click.native="previewFiles" id="file_input"></b-form-file>
                  </b-col>
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
                     <!-- <b-pagination
                      align="right"
                      class="alpha__table__pagination"
                      pills
                      v-model="currentPage"
                      :total-rows="rows"
                      :per-page="perPage"
                    ></b-pagination> -->
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
export default {
  name: "partsRegistrationUnits",
  data(){
    return{
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
      this.loadTable();
  },
   methods: 
   {
      loadTable: function () 
      {
        //  this.$store.dispatch("loadparts").then((result) => {
        //  this.toast(result.status, result.message);
        // });
      },

      previewFiles: function () 
       {
          // console.log(event.target.files);
          let test = {};
          console.log('testing');
          let file_inputs = document.getElementById('file_input').files[0];
          test = this.$papa.parse(file_inputs,
          {
              encoding: 'Shift-JIS',
              complete: function (results)
              {
                  return doneCallback(results);

              }
          });
          console.log(test);
       },
      
       GetCSV: (doneCallback) 
       {
          let fileInput = document.getElementById('file_input'); 
          this.$papa.parse(fileInput.files[0], {
              header: true,
              skipEmptyLines: true,

              complete: function(results) {
                  console.log('Done.');
                  doneCallback(results);
                }
            });
       },
       
       GetCSV(csvData) 
       {
    // use the data here
          drawTable(csvData.data, "objTable");
       }
    }
    //end of method
};
</script>

<style>
.div_upload_data {
 border: 1px solid black;
 border-radius: 10px;
 box-shadow: 0px 0px 5px 0px #5f4646;
 padding: 10px 10px 20px 10px;
 height: 700px;
}
</style>