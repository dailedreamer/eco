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
		path: "/loader/:token",
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
				// meta: { requiresAuth: true }
			},
			{
				path: "/parts",
				name: "Parts",
				redirect: '/parts-registration-unit',
				component: Parts ,
				// meta: { requiresAuth: true },
				children: [
					{
						path: "/parts-registration-unit",
						name: "PartsRegistrationUnit",
						component: PartsRegistrationUnit ,
						// meta: { requiresAuth: true },
					},
					{
						path: "/parts-registration-parts",
						name: "PartsRegistrationParts",
						component: PartsRegistrationParts ,
						// meta: { requiresAuth: true },
					},
					{
						path: "/registered-eco-parts",
						name: "RegisteredECOParts",
						component: RegisteredECOParts ,
						// meta: { requiresAuth: true },
					},
					{
						path: "/parts-monitoring",
						name: "PartsMonitoring",
						component: PartsMonitoring ,
						// meta: { requiresAuth: true },
						children: [
							{
								path: "/parts-details",
								name: "PartsDetails",
								component: PartsDetails ,
								// meta: { requiresAuth: true },
							},
							{
								path: "/meeting",
								name: "Meeting",
								component: Meeting ,
								// meta: { requiresAuth: true },
							},
							{
								path: "/eco_details",
								name: "ECODetails",
								component: ECODetails ,
								// meta: { requiresAuth: true },
							},
							{
								path: "/die_sample",
								name: "DieSample",
								component: DieSample ,
								// meta: { requiresAuth: true },
							},
							{
								path: "/drawing_issuance",
								name: "DrawingIssuance",
								component: DrawingIssuance ,
								// meta: { requiresAuth: true },
							},
							{
								path: "/die_quotation_details",
								name: "DieQutationDetails",
								component: DieQuotationDetails ,
								// meta: { requiresAuth: true },
							},
							{
								path: "/die_dfm",
								name: "DieDFM",
								component: DieDFM ,
								// meta: { requiresAuth: true },
							},
							{
								path: "/qc_igm",
								name: "QCIGM",
								component: QCIGM ,
								// meta: { requiresAuth: true },
							},
							{
								path: "/die_trial_details",
								name: "DieTrialDetails",
								component: DieTrialDetails ,
								// meta: { requiresAuth: true },
							},
							{
								path: "/lot_po_issuance",
								name: "LotPOIssuance",
								component: LotPOIssuance ,
								// meta: { requiresAuth: true },
							},
							{
								path: "/lot_delivery",
								name: "LotDelivery",
								component: LotDelivery ,
								// meta: { requiresAuth: true },
							},
							{
								path: "/product_audit",
								name: "ProductAudit",
								component: ProductAudit ,
								// meta: { requiresAuth: true },
							},
							{
								path: "/parts_allocation",
								name: "PartsAllocation",
								component: PartsAllocation ,
								// meta: { requiresAuth: true },
							},
							{
								path: "/assembly_application",
								name: "AssemblyApplication",
								component: AssemblyApplication ,
								// meta: { requiresAuth: true },
							}

						]

					},
				]
			},
			{
				path: "/ecas_list",
				name: "ECASList ",
				component: ECASList ,
				// meta: { requiresAuth: true },
			},
			{
				path: "/process",
				name: "Process ",
				redirect: '/process-registration',
				component: Process ,
				// meta: { requiresAuth: true },
				children: [
					{
						path: "/process-registration",
						name: "ProcessRegistration",
						component: ProcessRegistration ,
						// meta: { requiresAuth: true },
					},
					{
						path: "/process-monitoring",
						name: "ProcessMonitoring",
						component: ProcessMonitoring ,
						// meta: { requiresAuth: true },
					},
				]
				
			},
			{
				path: "/simultaneous",
				name: "Simultaneous ",
				component: Simultaneous ,
				// meta: { requiresAuth: true },
			},
			{
				path: "/unit_rev",
				name: "UnitRev ",
				component: UnitRev ,
				// meta: { requiresAuth: true },
			},
			{
				path: "/vps_application",
				name: "VPSApplication ",
				component: VPSApplication ,
				// meta: { requiresAuth: true },
			},
			{
				path: "/eco_action_items",
				name: "ECOActionItems ",
				component: ECOActionItems ,
				// meta: { requiresAuth: true },
			},
			{
				path: "/management_parts",
				name: "ManagementParts ",
				component: ManagementParts ,
				redirect: '/management-parts-device',
				// meta: { requiresAuth: true },
				children:
				[
					{
						path: "/management-parts-device",
						name: "ManagementPartsDevice ",
						component: ManagementPartsDevice ,
						// meta: { requiresAuth: true },
					},
					{
						path: "/management-parts-model",
						name: "ManagementPartsModel ",
						component: ManagementPartsModel ,
						// meta: { requiresAuth: true },
					},
					{
						path: "/management-parts-unit",
						name: "ManagementPartsUnit ",
						component: ManagementPartsUnit ,
						// meta: { requiresAuth: true },
					},
				]
			},
			{
				path: "/management_users",
				name: "ManagementUsers ",
				component: ManagementUsers ,
				// meta: { requiresAuth: true },
			},
			{
				path: "/management_email",
				name: "ManagementEmail ",
				component: ManagementEmail ,
				// meta: { requiresAuth: true },
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
			console.log('Destroyed Local Storage');
			localStorage.removeItem("auth_token");
			localStorage.removeItem("user_info");
			setTimeout(function() {
			  location.href = "http://10.164.58.49/fdtp-portal/public/";
			}, 500);  
		}
		else
		{
			next();
		}
	}
	else
	{
		next()
	}
  })

export default router;
