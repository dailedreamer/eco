import axios from 'axios'

export default axios.create({
	baseURL: 'http://10.164.58.52/FDTP-Portal/public/api/'
});
// import axios from "axios";

// // axios.defaults.baseURL  = 'http://10.164.58.92/eco-cms-v2/server/public/api/';

// const mainAxios = axios.create({
// 	baseURL: 'http://10.164.58.92/eco-cms-v2/server/public/api/'
// });

// const portalAxios = axios.create({
// 
// });
// export {
//   mainAxios,
//   portalAxios
// };