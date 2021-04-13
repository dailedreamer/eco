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
const NewECAS = () =>import("@/views/ECASList/NewEcas");
const NewECASContent = () =>import("@/views/ECASList/NewECASTab/NewECASContent");
const DoneECASContent = () =>import("../views/ECASList/NewECASTab/DoneECASContent");
const ForRevision = () =>import("@/views/ECASList/ForRevision");
const ForRevisionContent = () =>import("@/views/ECASList/ForRevisionTab/ForRevisionContent");
const DoneRevisionContent = () =>import("../views/ECASList/ForRevisionTab/DoneRevisionContent");
const ForChecking = () =>import("@/views/ECASList/ForChecking");
const ForCheckingContent = () =>import("@/views/ECASList/ForCheckingTab/ForCheckingContent");
const DoneCheckingContent = () =>import("../views/ECASList/ForCheckingTab/DoneCheckingContent");
const ForApproval = () =>import("@/views/ECASList/ForApproval");
const ForApprovalContent = () =>import("@/views/ECASList/ForApprovalTab/ForApprovalContent");
const DoneApprovalContent = () =>import("../views/ECASList/ForApprovalTab/DoneApprovalContent");
const ForPC = () =>import("@/views/ECASList/ForPC");
const ForPCContent = () =>import("@/views/ECASList/ForPCTab/ForPCContent");
const DonePCContent = () =>import("../views/ECASList/ForPCTab/DonePCContent");
const ForPurchasing = () =>import("@/views/ECASList/ForPurchasing");
const ForPurchasingContent = () =>import("@/views/ECASList/ForPurchasingTab/ForPurchasingContent");
const DonePurchasingContent = () =>import("../views/ECASList/ForPurchasingTab/DonePurchasingContent");
const FinishedECAS = () =>import("@/views/ECASList/FinishedECAS");
const ProductionEngineering = () =>import("@/views/ECASList/Modal/ProductionEngineeringContent");


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
				redirect: '/new_ecas',
				component: ECASList ,
				// meta: { requiresAuth: true },
				children: [
					{
						path: "/new_ecas",
						name: "NewECAS",
						component: NewECAS ,
						redirect: '/new-ecas-tab',
						children: [
							{
								path: "/new-ecas-tab",
								name: "NewECASContent",
								component: NewECASContent,
								redirect: '/production-engineering/1',
								children: [
									{
										path: "/production-engineering/1",
										name: "ProductionEngineering",
										component: ProductionEngineering,
									}
								]
							},
							{
								path: "/done-ecas-tab",
								name: "DoneECASContent",
								component: DoneECASContent
							},
						]
					},
					{
						path: "/for_revision",
						name: "ForRevision",
						component: ForRevision,
						redirect: '/for-revision-tab',
						children: [
							{
								path: "/for-revision-tab",
								name: "ForRevisionContent",
								component: ForRevisionContent,
								redirect: '/production-engineering/2',
								children: [
									{
										path: "/production-engineering/2",
										name: "ProductionEngineering",
										component: ProductionEngineering,
									}
								]
							},
							{
								path: "/done-revision-tab",
								name: "DoneRevisionContent",
								component: DoneRevisionContent
							},
						]
					},
					{
						path: "/for_checking",
						name: "ForChecking",
						component: ForChecking,
						redirect: "/for-checking-tab",
						children: [
							{
								path: "/for-checking-tab",
								name: "ForCheckingContent",
								component: ForCheckingContent,
								redirect: '/production-engineering/3',
								children: [
									{
										path: "/production-engineering/3",
										name: "ProductionEngineering",
										component: ProductionEngineering,
									}
								]
							},
							{
								path: "/done-checking-tab",
								name: "DoneCheckingContent",
								component: DoneCheckingContent
							},
						]
					},
					{
						path: "/for_approval",
						name: "ForApproval",
						component: ForApproval,
						redirect: "/for-approval-tab",
						children: [
							{
								path: "/for-approval-tab",
								name: "ForApprovalContent",
								component: ForApprovalContent,
								redirect: '/production-engineering/4',
								children: [
									{
										path: "/production-engineering/4",
										name: "ProductionEngineering",
										component: ProductionEngineering,
									}
								]
							},
							{
								path: "/done-approval-tab",
								name: "DoneApprovalContent",
								component: DoneApprovalContent
							},
						]
					},
					{
						path: "/for_pc",
						name: "ForPC",
						component: ForPC,
						redirect: "/for-pc-tab",
						children: [
							{
								path: "/for-pc-tab",
								name: "ForPCContent",
								component: ForPCContent,
								redirect: '/production-engineering/5',
								children: [
									{
										path: "/production-engineering/5",
										name: "ProductionEngineering",
										component: ProductionEngineering,
									}
								]
							},
							{
								path: "/done-pc-tab",
								name: "DonePCContent",
								component: DonePCContent
							},
						]
					},
					{
						path: "/for_purchasing",
						name: "ForPurchasing",
						component: ForPurchasing,
						redirect: "/for-purchasing-tab",
						children: [
							{
								path: "/for-purchasing-tab",
								name: "ForPurchasingContent",
								component: ForPurchasingContent,
								redirect: '/production-engineering/6',
								children: [
									{
										path: "/production-engineering/6",
										name: "ProductionEngineering",
										component: ProductionEngineering,
									}
								]
							},
							{
								path: "/done-purchasing-tab",
								name: "DonePurchasingContent",
								component: DonePurchasingContent
							},
						]
					},
					{
						path: "/finished_ecas",
						name: "FinishedECAS",
						component: FinishedECAS,
						redirect: '/production-engineering/7',
						children: [
							{
								path: "/production-engineering/7",
								name: "ProductionEngineering",
								component: ProductionEngineering,
							}
						]
					},
				]
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
