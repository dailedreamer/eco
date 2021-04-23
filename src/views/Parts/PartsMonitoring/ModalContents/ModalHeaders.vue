<template>
    <div>
        <b-row class="pl-1 pt-4 pr-2 mb-4">
            <b-col cols="5">
                <b-media>
                    <template #aside>
                        <div class="circle-icons">
                            <b-icon icon="flag"  font-scale="1.5" variant="white"></b-icon>
                        </div>
                    </template>
                    <h5 class="head--title mb-0">{{page_title}}</h5>
                    <small class="text-muted">Lorem ipsum dolor sit amet.</small>
                </b-media>
            </b-col>
            <b-col cols="7">
                <b-row class="mt-1 ml-1"> 
                    <b-col cols="6">
                        <strong> Part Number</strong><br>
                        <label class="head--small"> {{part_number}} (Supplier)</label>
                    </b-col>
                        <b-col cols="3">
                        <strong> Old Rev</strong><br>
                        <label class="head--small"> 05</label>
                    </b-col>
                        <b-col cols="3">
                        <strong> New Rev</strong><br>
                        <label class="head--small"> 04</label>
                    </b-col>
                </b-row>          
            </b-col>
        </b-row>
        <center>
            <hr class="mb-3">
        </center>
</div> 
</template>

<script>
export default {
    props: {
        page_title: String,
        part_number:String,
    }
}
</script>

<style scoped>
.head--small
{
    color:hsl(0,0%,42%);
}
.head--title
{
    text-transform: uppercase;
    color:#e84656;
    font-weight: bold;
}
.sub
{
    /* background-color:#d9d9d93d; */
    color:hsl(0,0%,27%);
}
.secondary--color
{
    color:hsl(0,0%,42%);
}
</style>