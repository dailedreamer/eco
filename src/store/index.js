import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);
//Template
import alpha from "../template/modules/alpha";

//Login
import auth from "./auth";

//Dashboard
import dashboard from "./modules/dashboard.js";

//Parts
import parts_registration_unit from "./modules/parts/registration_unit";
import parts_registration_parts from "./modules/parts/registration_parts";
import parts_monitoring_eco_parts from "./modules/parts/monitoring/eco_parts";
import parts_monitoring_parts_manufacturing from "./modules/parts/monitoring/parts_manufacturing";

//ECAS List
import ecas_list_new_ecas from "./modules/ecas_list/new_ecas";
import ecas_list_for_revision from "./modules/ecas_list/for_revision";
import ecas_list_for_checking from "./modules/ecas_list/for_checking";
import ecas_list_for_approval from "./modules/ecas_list/for_approval";
import ecas_list_for_pc from "./modules/ecas_list/for_pc";
import ecas_list_for_purchasing from "./modules/ecas_list/for_purchasing";
import ecas_list_finished_ecas from "./modules/ecas_list/finished_ecas";

//Process
import process_registration from "./modules/process/registration";
import process_monitoring from "./modules/process/monitoring";

//Simultaneous
import simultaneous_index from "./modules/simultaneous/index";
import simultaneous_applied from "./modules/simultaneous/applied";
import simultaneous_for_application from "./modules/simultaneous/for_application";
import simultaneous_cancelled from "./modules/simultaneous/cancelled";

//Unit Rev
import unit_revision_index from "./modules/unit_revision/index";
import unit_revision_applied from "./modules/unit_revision/applied";
import unit_revision_for_application from "./modules/unit_revision/for_application";

//VPS Application
import vps_application_received from "./modules/vps_application/received";
import vps_application_not_received from "./modules/vps_application/not_received";
import vps_application_applied from "./modules/vps_application/applied";
import vps_application_for_application from "./modules/vps_application/for_application";

//EC Action Item
import ec_action_item_open from "./modules/ec_action_item/open";
import ec_action_item_close from "./modules/ec_action_item/close";

//Management
import management_parts_management_device from "./modules/management/parts_management/device";
import management_parts_management_model from "./modules/management/parts_management/model";
import management_parts_management_unit from "./modules/management/parts_management/unit";
import management_email from "./modules/management/email";
import management_users from "./modules/management/users_management";




export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    //Template
    alpha,

    //Login
    auth, 

    //Dashboard
    dashboard,

    //Parts
    parts_registration_unit,
    parts_registration_parts,
    parts_monitoring_eco_parts,
    parts_monitoring_parts_manufacturing,

    //ECAS List
    ecas_list_new_ecas,
    ecas_list_for_revision,
    ecas_list_for_checking,
    ecas_list_for_approval,
    ecas_list_for_pc,
    ecas_list_for_purchasing,
    ecas_list_finished_ecas,

    //Process
    process_registration,
    process_monitoring,

    //Simultaneous
    simultaneous_index,
    simultaneous_applied,
    simultaneous_for_application,
    simultaneous_cancelled,

    //Unit Rev
    unit_revision_index,
    unit_revision_applied,
    unit_revision_for_application,

    //VPS Application
    vps_application_received,
    vps_application_not_received,
    vps_application_applied,
    vps_application_for_application,

    //EC Action Item
    ec_action_item_open,
    ec_action_item_close,

    //Management
    management_parts_management_device,
    management_parts_management_model,
    management_parts_management_unit,
    management_email,
    management_users
  }
});
