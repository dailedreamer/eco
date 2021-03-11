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
faFile,
faDownload,
faEdit,
faFileExcel,
faUpload,
faTrash,
faPen,
faClipboardList,
faBook,
faSave
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
	faFile,
	faDownload,
	faEdit,
	faTrash,
	faPen,
	faClipboardList,
	faBook,
	faFileExcel,
	faUpload,
	faSave
);

Vue.component("font-awesome-icon", FontAwesomeIcon);
