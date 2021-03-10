import Vue from "vue";

import { library } from "@fortawesome/fontawesome-svg-core";
import {
faList,
faTachometerAlt,
faCubes,
faNewspaper,
faProjectDiagram,
faSyncAlt,
faArrowCircleUp,
faToolbox,
faInfo,
faTools,
faUsers,
faEnvelope,
faFileAlt,
faRedo,
faCheckDouble,
faThumbsUp,
faHandHoldingUsd,
faPallet,
faFlagCheckered,
<<<<<<< HEAD
faEdit
=======
faFileExcel,
faSave,
faUpload

>>>>>>> part_registration_unit
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

library.add(
	faList,
	faTachometerAlt,
	faCubes,
	faNewspaper,
	faProjectDiagram,
	faSyncAlt,
	faArrowCircleUp,
	faToolbox,
	faInfo,
	faTools,
	faUsers,
	faEnvelope,
	faFileAlt,
	faRedo,
	faCheckDouble,
	faThumbsUp,
	faPallet,
	faHandHoldingUsd,
	faFlagCheckered,
<<<<<<< HEAD
	faEdit

=======
	faFileExcel,
	faSave,
	faUpload
	
>>>>>>> part_registration_unit
);

Vue.component("font-awesome-icon", FontAwesomeIcon);
