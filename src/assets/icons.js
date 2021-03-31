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
faTimesCircle,
faFile,
faDownload,
faEdit,
faFileExcel,
faUpload,
faTrash,
faPen,
faClipboardList,
faBook,
faSave,
faCopy,
faPlus
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
	faTimesCircle,
	faFile,
	faDownload,
	faEdit,
	faTrash,
	faPen,
	faClipboardList,
	faBook,
	faFileExcel,
	faUpload,
	faSave,
	faCopy,
	faPlus
);

Vue.component("font-awesome-icon", FontAwesomeIcon);
