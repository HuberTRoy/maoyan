export default [
  {
    path: "",
    component: import("../pages/index/index.vue"),
    meta: {
      tabbar: "home",
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
  {
    path: "/myCenter",
    component: import("../pages/myCenter/index.vue"),
    meta: {
      tabbar: "myCenter",
    },
  },
];
