import HomePage from '../pages/HomePage/HomePage'
import LoginPage from '../pages/LoginPage/LoginPage'

const routes = [
    {
      path: "/",
      component: HomePage,
      exact: true,
    },
    {
      path: "/login",
      component: LoginPage,
      exact: false,
    },
  ];
  
  export default routes;