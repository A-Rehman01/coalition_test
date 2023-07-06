import CarouselPage from "../pages/CarouselPage";
import Home from "../pages/Home";
import TabsPage from "../pages/TabsPage";

export const routes = [
  {
    key: "Home Page",
    route: "/",
    component: <Home />,
  },
  {
    key: "Carousel Page",
    route: "/carousel",
    component: <CarouselPage />,
  },
  {
    key: "Tabs Page",
    route: "/tabs",
    component: <TabsPage />,
  },
];
