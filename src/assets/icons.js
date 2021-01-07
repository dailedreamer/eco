import Vue from "vue";

import { library } from "@fortawesome/fontawesome-svg-core";
import {
faList,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

library.add(
	faList,
);

Vue.component("font-awesome-icon", FontAwesomeIcon);
