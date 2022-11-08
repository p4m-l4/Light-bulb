// const conditionalRendering = {
// 	data() {
// 		return {
// 			switch: "off",
// 		};
// 	},
//     }
// Vue.createApp(conditionalRendering).mount("#app");

const { createApp } = Vue;

createApp({
	data() {
		return {
			switch: "off",

		};
	},

}).mount("#app");
