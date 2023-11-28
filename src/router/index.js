import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import Registration from "../views/Registration.vue";
import SearchResults from "../views/SearchResults.vue";
import ProductDetails from "../views/ProductDetails.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/registration",
      name: "registration",
      component: Registration,
    },
    {
      path: "/searchresults",
      name: "searchresults",
      component: SearchResults,
      props: true,
    },
    {
      path: "/productdetails/:hotelId/:hotelname",
      name: "productdetails",
      component: ProductDetails,
      props: (route) => ({
        hotelId: route.query.hotelId,
        otherParam: route.query.otherParam,
      }),
    },
  ],
});

export default router;
