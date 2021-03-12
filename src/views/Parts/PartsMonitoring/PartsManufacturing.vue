<template>
    <b-container fluid>
        <b-media>
            <template #aside>
             <font-awesome-icon
                            icon="copy"
                            class="icon text-muted custom_size"
                        />
            </template>
            <h5 class="mb-0 text-left">Part Manufacturing</h5>
            <p class="mb-3 text-left text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum, dicta!</p>
        </b-media>
        <b-row class="mb-3">
            <b-col cols="3">
                <b-card class="custom_card_filter">
                    <b-row>
                        <b-col cols="7">
                            <h5 class="mb-2 text-muted text-left">New Die</h5>
                            <p class="mb-0  text-left custom_p_percentage text-muted"><strong>36%</strong></p>
                        </b-col>
                        <b-col cols="5">
                            <p class="mb-0  text-right custom_p_count text-muted">75</p>
                        </b-col>
                    </b-row>
                    <b-row class="mt-0">
                        <b-col cols="12">
                            <b-progress class='mt-3' variant="danger" :value="36" :max="100"></b-progress>
                        </b-col>
                    </b-row>
                </b-card>
            </b-col>
            <b-col cols="3">
                <b-card class="custom_card_filter">
                    <b-row>
                        <b-col cols="7">
                            <h5 class="mb-2 text-muted text-left">Old Die</h5>
                            <p class="mb-0  text-left custom_p_percentage text-muted"><strong>94%</strong></p>
                        </b-col>
                        <b-col cols="5">
                            <p class="mb-0  text-right custom_p_count text-muted">150</p>
                        </b-col>
                    </b-row>
                    <b-row class="mt-0">
                        <b-col cols="12">
                            <b-progress class='mt-3' variant="danger" :value="64" :max="100"></b-progress>
                        </b-col>
                    </b-row>
                </b-card>
            </b-col>
            <b-col cols="3">
                <b-card class="custom_card_filter">
                    <b-row>
                        <b-col cols="7">
                            <h5 class="mb-2 text-muted text-left">Second Die</h5>
                            <p class="mb-0  text-left custom_p_percentage text-muted"><strong>64%</strong></p>
                        </b-col>
                        <b-col cols="5">
                            <p class="mb-0  text-right custom_p_count text-muted">150</p>
                        </b-col>
                    </b-row>
                    <b-row class="mt-0">
                        <b-col cols="12">
                            <b-progress class='mt-3' variant="danger" :value="64" :max="100"></b-progress>
                        </b-col>
                    </b-row>
                </b-card>
            </b-col>
            <b-col cols="3">
            
            </b-col>
        </b-row>
      </b-container>
</template>
<script>
export default {
    name: "PartsManufacturing",
    
}
</script>

<style scoped>
    p {
      font-size: 12px;
    }
    .custom_p_percentage {
        font-size: 1.8rem;
    }
    .custom_p_count {
        font-size: 3rem;
    }
    .custom_size{
        font-size: 2.5rem;
    }
</style>