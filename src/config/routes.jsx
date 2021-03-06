import HomePage from '../pages/HomePage/HomePage'
import AboutUsPage from '../pages/AboutUsPage/AboutUsPage'

const routes = [
    {
      path: "/",
      component: HomePage,
      exact: true,
    },
    {
      path: "/about-us",
      component: AboutUsPage,
      exact: false,
    },
  ];
  
  export default routes;