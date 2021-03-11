import Vue from "vue";
import VueRouter from "vue-router";
// import auth from './middleware/auth';
// Main Layout Component
const TheContainer = () =>
	import(/*webpackChunkName: "layout"*/ "@/template/layout/TheContainer");

// Splash Screen/ Others
const LoadLocalStorage = () =>import("@/views/SplashScreen/LoadLocalStorage");
const LoggedOut = () =>import("@/views/SplashScreen/LoggedOut");
// Pages
const Dashboard = () =>import("@/views/Dashboard");
const Parts = () =>import("@/views/Parts");

const PartsRegistrationUnit = () =>import("@/views/Parts/PartsRegistrationUnit");
const PartsRegistrationParts = () =>import("@/views/Parts/PartsRegistrationParts");
const RegisteredECOParts = () =>import("@/views/Parts/RegisteredECOParts");
const PartsMonitoring = () =>import("@/views/Parts/PartsMonitoring");

const ECASList = () =>import("@/views/ECASList");

const Process = () =>import("@/views/Process");
const ProcessRegistration = () =>import("@/views/Process/Registration");
const ProcessMonitoring = () =>import("@/views/Process/Monitoring");

const Simultaneous = () =>import("@/views/Simultaneous");
const UnitRev = () =>import("@/views/UnitRev");
const VPSApplication = () =>import("@/views/VPSApplication");
const ECOActionItems = () =>import("@/views/ECOActionItems");

const ManagementParts = () =>import("@/views/Management/Parts");
const ManagementPartsDevice = () =>import("@/views/Management/Parts/Device");
const ManagementPartsModel = () =>import("@/views/Management/Parts/Model");
const ManagementPartsUnit= () =>import("@/views/Management/Parts/Unit");

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
				path: "/management_users",
				name: "ManagementUsers ",
				component: ManagementUsers ,
			},
			{
				path: "/management_email",
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
