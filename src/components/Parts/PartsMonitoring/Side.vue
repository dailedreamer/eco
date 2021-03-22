<template>
    <b-container fluid>
        <div class="rectangle rectangle_eco_position" @click="setEcoPartsVisibility">
            <div class="rectangle_line"></div>
            <span class="rectangle_text">Eco Parts</span>
        </div>
        <div class="rectangle rectangle_pm_position" @click="setPartsManufacturingVisibility">
            <div class="rectangle_line"></div>
            <span class="rectangle_second_text">Parts Manufacturing</span>
        </div>
    </b-container>
</template>

<script>
import { mapActions } from "vuex";
export default {
    name: "Side",
    methods: {
        ...mapActions(["setEcoPartsVisibility","setPartsManufacturingVisibility"])
    },
}
</script>

<style scoped>
    .rectangle {
        width: 150px;
        height: 47px;
        position: absolute;
        background: #a10e14;
        margin-left: -35px;
        cursor: pointer;
        right:0;
        transition: all 0.15s;
    }
    .rectangle:before {
        content: "";
        position: absolute;
        right: -20px;
        bottom: 0;
        width: 0;
        height: 0;
        border-left: 20px solid #a10e14;
        border-top: 23px solid transparent;
        border-bottom: 24px solid transparent;
    }
    .rectangle:hover {
        /* background: linear-gradient(
        90deg
        , rgb(163 11 26), rgb(179 6 28), rgb(194 11 29), rgb(163 11 26)); */
        box-shadow: 2px 2px 18px rgb(161 14 20);
        right:4px;
    }
    .rectangle_eco_position {
        top: 13%;
    }
    .rectangle_pm_position {
        top: 24%;
    }
    .rectangle_line {
        width: 3px;
        height: 47px;
        background: #fff;
        margin-left: 7px;
        position: relative;
    }
    .rectangle_text {
        bottom: 32%;
        right: 50%;
        position: absolute;
        color: #fff;
        font-size: 12px;

    }
    .rectangle_second_text {
        bottom: 32%;
        right: 12%;
        position: absolute;
        color: #fff;
        font-size: 11px;

    }
</style>