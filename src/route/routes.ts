export default [
  {
    path: "",
    component: import("../pages/index/index.vue"),
    meta: {
      tabbar: true,
    },
  },
  {
    path: "/cinema",
    component: import("../pages/cinema/index.vue"),
  },
  {
    path: "/movie/:id",
    component: import("../pages/movie/index.vue"),
  },
];
