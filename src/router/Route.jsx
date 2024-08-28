import { createBrowserRouter } from "react-router-dom";
import Home from "../home/Home";
import Forgotpassword from "../auth/ForgotPassword";
import ErrorPage from "./ErrorPage";
import VerifyOtp from "../auth/VerifyOtp";
import UpdatePassword from "../auth/UpdatePassword";
import Main from "../main/Main";
import DashboardHome from "../dashboard/DashboardHome";
import Users from "../dashboard/menu/Users";
import Maneger from "../dashboard/menu/Maneger";
import Notification from "../dashboard/menu/Notification";
import AddManeger from "../dashboard/menu/AddManeger";
import Provider from "../dashboard/menu/Provider";
import Request from "../dashboard/menu/Request";
import Servece from "../dashboard/menu/Servece";
 
import Payment from "../dashboard/menu/Payment";
import Settings from "../dashboard/menu/settings/Settings";
import PrivacyPolicy from "../dashboard/menu/privacy/PrivacyPolicy";
import EditPrivacy from "../dashboard/menu/privacy/EditPrivacy";
import TermCondition from "../dashboard/menu/termcondition/TermCondition";
import PersonlaInfo from "../dashboard/menu/personalInformation/PersonalInfo";
import EditPersonalinfo from "../dashboard/menu/personalInformation/Editpersonalinfo";
import EditTermCondition from "../dashboard/menu/termcondition/EditTermCondition";
import About from "../dashboard/menu/about/About";
import EditAbout from "../dashboard/menu/about/EditAbout";
 

 


  export const router = createBrowserRouter([
    {
        path: "/",
        element: <Home></Home>,
        errorElement:<ErrorPage></ErrorPage>
    },
    {
        path: "/forgotpassword",
        element: <Forgotpassword></Forgotpassword>
    },
    {
        path: "/verifyotp",
        element: <VerifyOtp></VerifyOtp>
    },
    {
        path:"/updatepassword",
        element: <UpdatePassword />
    },
    
    {
        path:"dashboard",
        element:<Main></Main>,
        children:[
            {
                path:"home",
                element: <DashboardHome></DashboardHome>
            },
            {
                path:"users",
                element:<Users></Users>
            },
            {
                path:"maneger",
                element: <Maneger/>
            },
            {
                path:'notification',
                element:<Notification></Notification>
            },
            {
                path:'maneger/addmaneger',
                element:<AddManeger></AddManeger>
            },
            {
                path:'provider',
                element:<Provider></Provider>
            },
            {
                path:'request',
                element: <Request></Request>
            },
            {
                path:'service',
                element:<Servece></Servece>
            },
            {
                path:'payment',
                element: <Payment />
            },
            {
                path: 'settings',
                element: <Settings></Settings>
            },
            {
                path:'settings/privacypolicy',
                element:<PrivacyPolicy></PrivacyPolicy>
            },
            {
                path:'settings/editprivacypolicy',
                element: <EditPrivacy />
            },
            {
                path:"settings/termcondition",
                element:<TermCondition></TermCondition>
            },
            {
                path: "settings/edittermcondition",
                element: <EditTermCondition />
            },
            {
                path:"personalinfo",
                element:<PersonlaInfo />
            },
            {
                path:'editpersonalinfo',
                element:<EditPersonalinfo/>
            },
            {
                path:'settings/about',
                element: <About />
            },
            {
                path:'settings/editabout',
                element:<EditAbout />
            }

        ]
    }


 ])