import Vue from "vue";
import VueRouter from "vue-router";
// import auth from './middleware/auth';
// Main Layout Component
const TheContainer = () =>
	import(/*webpackChunkName: "layout"*/ "@/template/layout/TheContainer");

// Splash Screen/ Others
const LoadLocalStorage = () =>import("@/views/SplashScreen/LoadLocalStorage");
const LoggedOut        = () =>import("@/views/SplashScreen/LoggedOut");
// Pages
const Dashboard = () =>import("@/views/Dashboard");
const Parts     = () =>import("@/views/Parts");

const PartsRegistrationUnit  = () =>import("@/views/Parts/PartsRegistrationUnit");
const PartsRegistrationParts = () =>import("@/views/Parts/PartsRegistrationParts");
const RegisteredECOParts     = () =>import("@/views/Parts/RegisteredECOParts");
const PartsMonitoring        = () =>import("@/views/Parts/PartsMonitoring");

//Parts Monitoring Modal Contents
const AssemblyApplication = () =>import("@/views/Parts/PartsMonitoring/ModalContents/AssemblyApplication");
const DieDFM              = () =>import("@/views/Parts/PartsMonitoring/ModalContents/DieDFM");
const DieQuotationDetails = () =>import("@/views/Parts/PartsMonitoring/ModalContents/DieQuotationDetails");
const DieSample           = () =>import("@/views/Parts/PartsMonitoring/ModalContents/DieSample");
const DieTrialDetails     = () =>import("@/views/Parts/PartsMonitoring/ModalContents/DieTrialDetails");
const DrawingIssuance     = () =>import("@/views/Parts/PartsMonitoring/ModalContents/DrawingIssuance");
const ECODetails          = () =>import("@/views/Parts/PartsMonitoring/ModalContents/ECODetails");
const LotDelivery         = () =>import("@/views/Parts/PartsMonitoring/ModalContents/LotDelivery");
const LotPOIssuance       = () =>import("@/views/Parts/PartsMonitoring/ModalContents/LotPOIssuance");
const Meeting             = () =>import("@/views/Parts/PartsMonitoring/ModalContents/Meeting");
const PartsAllocation     = () =>import("@/views/Parts/PartsMonitoring/ModalContents/PartsAllocation");
const PartsDetails        = () =>import("@/views/Parts/PartsMonitoring/ModalContents/PartsDetails");
const ProductAudit        = () =>import("@/views/Parts/PartsMonitoring/ModalContents/ProductAudit");
const QCIGM               = () =>import("@/views/Parts/PartsMonitoring/ModalContents/QCIGM");



const ECASList = () =>import("@/views/ECASList");

const Process             = () =>import("@/views/Process");
const ProcessRegistration = () =>import("@/views/Process/Registration");
const ProcessMonitoring   = () =>import("@/views/Process/Monitoring");

const Simultaneous   = () =>import("@/views/Simultaneous");
const UnitRev        = () =>import("@/views/UnitRev");
const VPSApplication = () =>import("@/views/VPSApplication");
const ECOActionItems = () =>import("@/views/ECOActionItems");

const ManagementParts       = () =>import("@/views/Management/Parts");
const ManagementPartsDevice = () =>import("@/views/Management/Parts/Device");
const ManagementPartsModel  = () =>import("@/views/Management/Parts/Model");
const ManagementPartsUnit   = () =>import("@/views/Management/Parts/Unit");

const ManagementUsers = () =>import("@/views/Management/Users");
const ManagementEmail = () =>import("@/views/Management/Email");

Vue.use(VueRouter);

const routes = [
	{
		path: "/load-localstorage/:token",
		name: "LoadLocalStorage",
		component: LoadLocalStorage ,
	},
	{
		path: "/logged-out",
		name: "LoggedOut",
		component: LoggedOut ,
	},
	{
		path: "/",
		name: "TheContainer",
		component: TheContainer,
		children: [
			{
				path: "/dashboard",
				name: "Dashboard",
				component: Dashboard ,
				meta: { requiresAuth: true }
			},
			{
				path: "/parts",
				name: "Parts",
				redirect: '/parts-registration-unit',
				component: Parts ,
				children: [
					{
						path: "/parts-registration-unit",
						name: "PartsRegistrationUnit",
						component: PartsRegistrationUnit ,
					},
					{
						path: "/parts-registration-parts",
						name: "PartsRegistrationParts",
						component: PartsRegistrationParts ,
					},
					{
						path: "/registered-eco-parts",
						name: "RegisteredECOParts",
						component: RegisteredECOParts ,
					},
					{
						path: "/parts-monitoring",
						name: "PartsMonitoring",
						component: PartsMonitoring ,
						children: [
							{
								path: "/parts-details",
								name: "PartsDetails",
								component: PartsDetails ,
							},
							{
								path: "/meeting",
								name: "Meeting",
								component: Meeting ,
							},
							{
								path: "/eco_details",
								name: "ECODetails",
								component: ECODetails ,
							},
							{
								path: "/die_sample",
								name: "DieSample",
								component: DieSample ,
							},
							{
								path: "/drawing_issuance",
								name: "DrawingIssuance",
								component: DrawingIssuance ,
							},
							{
								path: "/die_quotation_details",
								name: "DieQutationDetails",
								component: DieQuotationDetails ,
							},
							{
								path: "/die_dfm",
								name: "DieDFM",
								component: DieDFM ,
							},
							{
								path: "/qc_igm",
								name: "QCIGM",
								component: QCIGM ,
							},
							{
								path: "/die_trial_details",
								name: "DieTrialDetails",
								component: DieTrialDetails ,
							},
							{
								path: "/lot_po_issuance",
								name: "LotPOIssuance",
								component: LotPOIssuance ,
							},
							{
								path: "/lot_delivery",
								name: "LotDelivery",
								component: LotDelivery ,
							},
							{
								path: "/product_audit",
								name: "ProductAudit",
								component: ProductAudit ,
							},
							{
								path: "/parts_allocation",
								name: "PartsAllocation",
								component: PartsAllocation ,
							},
							{
								path: "/assembly_application",
								name: "AssemblyApplication",
								component: AssemblyApplication ,
							}

						]

					},
				]
			},
			{
				path: "/ecas_list",
				name: "ECASList ",
				component: ECASList ,
			},
			{
				path: "/process",
				name: "Process ",
				redirect: '/process-registration',
				component: Process ,
				children: [
					{
						path: "/process-registration",
						name: "ProcessRegistration",
						component: ProcessRegistration ,
					},
					{
						path: "/process-monitoring",
						name: "ProcessMonitoring",
						component: ProcessMonitoring ,
					},
				]
				
			},
			{
				path: "/simultaneous",
				name: "Simultaneous ",
				component: Simultaneous ,
			},
			{
				path: "/unit_rev",
				name: "UnitRev ",
				component: UnitRev ,
			},
			{
				path: "/vps_application",
				name: "VPSApplication ",
				component: VPSApplication ,
			},
			{
				path: "/eco_action_items",
				name: "ECOActionItems ",
				component: ECOActionItems ,
			},
			{
				path: "/management-parts",
				name: "ManagementParts ",
				component: ManagementParts ,
				redirect: '/management-parts-device',
				children:
				[
					{
						path: "/management-parts-device",
						name: "ManagementPartsDevice ",
						component: ManagementPartsDevice ,
					},
					{
						path: "/management-parts-model",
						name: "ManagementPartsModel ",
						component: ManagementPartsModel ,
					},
					{
						path: "/management-parts-unit",
						name: "ManagementPartsUnit ",
						component: ManagementPartsUnit ,
					},
				]
			},
			{
				path: "/management-users",
				name: "ManagementUsers ",
				component: ManagementUsers ,
			},
			{
				path: "/management-email",
				name: "ManagementEmail ",
				component: ManagementEmail ,
			},
		],
	},
];

const router = new VueRouter({
	mode: "history",
	base: process.env.BASE_URL,
	routes,
});
router.beforeEach((to, from, next) => {
	if (to.matched.some(record => record.meta.requiresAuth)) {
		if(localStorage.getItem('auth_token') === null)
		{
			next({name:'LoggedOut'});
		}
		else
		{
			next();
			console.log('Logged In');
		}
	}
	else
	{
		next()
	}
  })

export default router;
