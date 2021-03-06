import Vue from "vue";
import VueRouter from "vue-router";
// import auth from './middleware/auth';
// Main Layout Component
const TheContainer = () =>import(/*webpackChunkName: "layout"*/ "@/template/layout/TheContainer");

// Splash Screen/ Others
const LoadLocalStorage = () =>import(/*webpackChunkName: "layout"*/  "@/views/SplashScreen/LoadLocalStorage");
const LoggedOut        = () =>import(/*webpackChunkName: "layout"*/  "@/views/SplashScreen/LoggedOut");
// Pages
const Dashboard = () =>import(/*webpackChunkName: "layout"*/  "@/views/Dashboard");
const Parts     = () =>import(/*webpackChunkName: "layout"*/  "@/views/Parts");

const PartsRegistrationUnit  = () =>import( /*webpackChunkName: "layout"*/ "@/views/Parts/PartsRegistrationUnit");
const PartsRegistrationParts = () =>import( /*webpackChunkName: "layout"*/ "@/views/Parts/PartsRegistrationParts");
const RegisteredECOParts     = () =>import(/*webpackChunkName: "layout"*/  "@/views/Parts/RegisteredECOParts");
const PartsMonitoring        = () =>import(/*webpackChunkName: "layout"*/  "@/views/Parts/PartsMonitoring");

//Parts Monitoring Modal Contents
const AssemblyApplication = () =>import(/*webpackChunkName: "layout"*/  "@/views/Parts/PartsMonitoring/ModalContents/AssemblyApplication");
const DieDFM              = () =>import(/*webpackChunkName: "layout"*/  "@/views/Parts/PartsMonitoring/ModalContents/DieDFM");
const DieQuotationDetails = () =>import(/*webpackChunkName: "layout"*/  "@/views/Parts/PartsMonitoring/ModalContents/DieQuotationDetails");
const DieSample           = () =>import(/*webpackChunkName: "layout"*/  "@/views/Parts/PartsMonitoring/ModalContents/DieSample");
const DieTrialDetails     = () =>import(/*webpackChunkName: "layout"*/ "@/views/Parts/PartsMonitoring/ModalContents/DieTrialDetails");
const DrawingIssuance     = () =>import(/*webpackChunkName: "layout"*/ "@/views/Parts/PartsMonitoring/ModalContents/DrawingIssuance");
const ECODetails          = () =>import(/*webpackChunkName: "layout"*/ "@/views/Parts/PartsMonitoring/ModalContents/ECODetails");
const LotDelivery         = () =>import(/*webpackChunkName: "layout"*/ "@/views/Parts/PartsMonitoring/ModalContents/LotDelivery");
const LotPOIssuance       = () =>import(/*webpackChunkName: "layout"*/ "@/views/Parts/PartsMonitoring/ModalContents/LotPOIssuance");
const Meeting             = () =>import(/*webpackChunkName: "layout"*/ "@/views/Parts/PartsMonitoring/ModalContents/Meeting");
const PartsAllocation     = () =>import(/*webpackChunkName: "layout"*/ "@/views/Parts/PartsMonitoring/ModalContents/PartsAllocation");
const PartsDetails        = () =>import(/*webpackChunkName: "layout"*/ "@/views/Parts/PartsMonitoring/ModalContents/PartsDetails");
const ProductAudit        = () =>import(/*webpackChunkName: "layout"*/ "@/views/Parts/PartsMonitoring/ModalContents/ProductAudit");
const QCIGM               = () =>import(/*webpackChunkName: "layout"*/ "@/views/Parts/PartsMonitoring/ModalContents/QCIGM");


const ECASList = () =>import(/*webpackChunkName: "layout"*/ "@/views/ECASList");
const NewECAS = () =>import(/*webpackChunkName: "layout"*/ "@/views/ECASList/NewEcas");
const NewECASContent = () =>import(/*webpackChunkName: "layout"*/ "@/views/ECASList/NewECASTab/NewECASContent");
const DoneECASContent = () =>import(/*webpackChunkName: "layout"*/ "../views/ECASList/NewECASTab/DoneECASContent");
const ForRevision = () =>import(/*webpackChunkName: "layout"*/ "@/views/ECASList/ForRevision");
const ForRevisionContent = () =>import(/*webpackChunkName: "layout"*/ "@/views/ECASList/ForRevisionTab/ForRevisionContent");
const DoneRevisionContent = () =>import(/*webpackChunkName: "layout"*/ "../views/ECASList/ForRevisionTab/DoneRevisionContent");
const ForChecking = () =>import(/*webpackChunkName: "layout"*/ "@/views/ECASList/ForChecking");
const ForCheckingContent = () =>import(/*webpackChunkName: "layout"*/ "@/views/ECASList/ForCheckingTab/ForCheckingContent");
const DoneCheckingContent = () =>import(/*webpackChunkName: "layout"*/ "../views/ECASList/ForCheckingTab/DoneCheckingContent");
const ForApproval = () =>import(/*webpackChunkName: "layout"*/ "@/views/ECASList/ForApproval");
const ForApprovalContent = () =>import(/*webpackChunkName: "layout"*/ "@/views/ECASList/ForApprovalTab/ForApprovalContent");
const DoneApprovalContent = () =>import(/*webpackChunkName: "layout"*/ "../views/ECASList/ForApprovalTab/DoneApprovalContent");
const ForPC = () =>import(/*webpackChunkName: "layout"*/ "@/views/ECASList/ForPC");
const ForPCContent = () =>import(/*webpackChunkName: "layout"*/ "@/views/ECASList/ForPCTab/ForPCContent");
const DonePCContent = () =>import(/*webpackChunkName: "layout"*/ "../views/ECASList/ForPCTab/DonePCContent");
const ForPurchasing = () =>import(/*webpackChunkName: "layout"*/ "@/views/ECASList/ForPurchasing");
const ForPurchasingContent = () =>import(/*webpackChunkName: "layout"*/ "@/views/ECASList/ForPurchasingTab/ForPurchasingContent");
const DonePurchasingContent = () =>import(/*webpackChunkName: "layout"*/ "../views/ECASList/ForPurchasingTab/DonePurchasingContent");
const FinishedECAS = () =>import(/*webpackChunkName: "layout"*/ "@/views/ECASList/FinishedECAS");
const ProductionEngineering = () =>import(/*webpackChunkName: "layout"*/ "@/views/ECASList/Modal/ProductionEngineeringContent");
const ProductionControl = () =>import(/*webpackChunkName: "layout"*/ "@/views/ECASList/Modal/ProductionControlContent");
const Purchasing = () =>import(/*webpackChunkName: "layout"*/ "@/views/ECASList/Modal/PurchasingContent");


const Process             = () =>import(/*webpackChunkName: "layout"*/ "@/views/Process");
const ProcessRegistration = () =>import(/*webpackChunkName: "layout"*/ "@/views/Process/Registration");
const ProcessMonitoring   = () =>import(/*webpackChunkName: "layout"*/ "@/views/Process/Monitoring");

const Simultaneous   = () =>import(/*webpackChunkName: "layout"*/ "@/views/Simultaneous");
const UnitRev        = () =>import(/*webpackChunkName: "layout"*/ "@/views/UnitRev");
const VPSApplication = () =>import(/*webpackChunkName: "layout"*/ "@/views/VPSApplication");
const ECOActionItems = () =>import(/*webpackChunkName: "layout"*/ "@/views/ECOActionItems");

const ManagementParts       = () =>import(/*webpackChunkName: "layout"*/ "@/views/Management/Parts");
const ManagementPartsDevice = () =>import(/*webpackChunkName: "layout"*/ "@/views/Management/Parts/Device");
const ManagementPartsModel  = () =>import(/*webpackChunkName: "layout"*/ "@/views/Management/Parts/Model");
const ManagementPartsUnit   = () =>import(/*webpackChunkName: "layout"*/ "@/views/Management/Parts/Unit");

const ManagementUsers = () =>import(/*webpackChunkName: "layout"*/ "@/views/Management/Users");
const ManagementEmail = () =>import(/*webpackChunkName: "layout"*/ "@/views/Management/Email");

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
						redirect: "/parts-details",
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
										name: "ProductionEngineering1",
										component: ProductionEngineering,
									},
									{
										path: "/production-control/1",
										name: "ProductionControl1",
										component: ProductionControl,
									},
									{
										path: "/purchasing/1",
										name: "Purchasing1",
										component: Purchasing,
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
										name: "ProductionEngineering2",
										component: ProductionEngineering,
									},
									{
										path: "/production-control/2",
										name: "ProductionControl2",
										component: ProductionControl,
									},
									{
										path: "/purchasing/2",
										name: "Purchasing2",
										component: Purchasing,
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
										name: "ProductionEngineering3",
										component: ProductionEngineering,
									},
									{
										path: "/production-control/3",
										name: "ProductionControl3",
										component: ProductionControl,
									},
									{
										path: "/purchasing/3",
										name: "Purchasing3",
										component: Purchasing,
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
										name: "ProductionEngineering4",
										component: ProductionEngineering,
									},
									{
										path: "/production-control/4",
										name: "ProductionControl4",
										component: ProductionControl,
									},
									{
										path: "/purchasing/4",
										name: "Purchasing4",
										component: Purchasing,
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
										name: "ProductionEngineering5",
										component: ProductionEngineering,
									},
									{
										path: "/production-control/5",
										name: "ProductionControl5",
										component: ProductionControl,
									},
									{
										path: "/purchasing/5",
										name: "Purchasing5",
										component: Purchasing,
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
										name: "ProductionEngineering6",
										component: ProductionEngineering,
									},
									{
										path: "/production-control/6",
										name: "ProductionControl6",
										component: ProductionControl,
									},
									{
										path: "/purchasing/6",
										name: "Purchasing6",
										component: Purchasing,
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
								name: "ProductionEngineering7",
								component: ProductionEngineering,
							},
							{
								path: "/production-control/7",
								name: "ProductionControl7",
								component: ProductionControl,
							},
							{
								path: "/purchasing/7",
								name: "Purchasing7",
								component: Purchasing,
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
