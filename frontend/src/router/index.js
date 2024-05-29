import { createRouter, createWebHistory } from "vue-router";

const DEFAULT_LAYOUT = () => import("@/layout/default.vue");
const REDIRECT_MAIN = {
	path: "/redirect",
	name: "redirectWrapper",
	component: DEFAULT_LAYOUT,
	meta: {
		requiresAuth: true,
		hideInMenu: true,
	},
	children: [
		{
			path: "/redirect/:path",
			name: "Redirect",
			component: () => import("@/views/redirect/index.vue"),
			meta: {
				requiresAuth: true,
				hideInMenu: true,
			},
		},
	],
};

const NOT_FOUND_ROUTE = {
	path: "/:pathMatch(.*)*",
	name: "notFound",
	component: () => import("@/views/not-found/index.vue"),
};

const router = createRouter({
	history: createWebHistory(),
	routes: [
		{
			path: "/",
			children: [
				{
					path: "",
					name: "Welcome",
					component: () => import("@/views/welcome/index.vue"),
				},
				{
					path: "usecoupons/:uniqueno",
					name: "UseCoupons",
					component: () => import("@/views/usecoupons/index.vue"),
				},
				{
					path: "shareh5/:billno",
					name: "ShareH5",
					component: () => import("@/views/shareh5/index.vue"),
				},
			],
		},
		REDIRECT_MAIN,
		NOT_FOUND_ROUTE,
	],
	scrollBehavior() {
		return { top: 0 };
	},
});

export default router;
