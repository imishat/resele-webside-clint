import { createBrowserRouter } from "react-router-dom";
import Login from "../pages/Login/Login";
import Main from "../pages/Outlet/Main";

import DisplyError from './../Shared/DisplyError';
import Singup from './../pages/Singup/Singup';
import Home from "../pages/Home/Home";
import Cart from "../pages/Home/Cart/Cart";
import Dashborad from "../pages/Outlet/Dashborad";
import MyOders from "../Dashboard/MyOders/MyOders";

import Addproducts from "../Dashboard/AddProducts/Addproducts";
import MyProducts from "../Dashboard/MyProducts/MyProducts";
import AdminRoute from "./AdminRoute";
import BuyresRoute from "./BuyresRoute";
import SellerRout from "./SellerRout";
import Payment from "../Dashboard/Payment/Payment";
import AllUsers from "../Dashboard/Alluser/AllUsers";
import Blogs from "../pages/Home/Blogs/Blogs";
import PrivetRouts from './PrivetRouts';
import AllReport from "../Dashboard/Allreport/AllReport";





const router=createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        errorElement:<DisplyError></DisplyError>,
        children:[
            {
                path:'/',
                element:<Home></Home>

            },
            {
                path:'/login',
                element:<Login></Login>
            },
            {
                path:'/singup',
                element:<Singup></Singup>
            },
            {
                path:'/products/:category_id',
                loader:({params})=>fetch(`https://server-to-side.vercel.app/products/${params.category_id}`),
                element:<PrivetRouts><Cart></Cart></PrivetRouts>
            },
            {
                path:'/blogs',
                element:<Blogs></Blogs>
            }
        ]
        
    },
    {
        path:'/dashboard',
        element:<Dashborad></Dashborad>,
        children:[
            {
                path:'/dashboard',
                element:<MyOders></MyOders>
                
            },
            {
                path:'/dashboard/allusers',
                
                element:<AdminRoute><AllUsers></AllUsers></AdminRoute>
            }  ,
            {
                path:'/dashboard/products',
                element:<SellerRout><Addproducts></Addproducts></SellerRout>
            } , 
            {
                path:'/dashboard/myProduct',
                element:<SellerRout><MyProducts></MyProducts></SellerRout>
            },
            {
                path:'/dashboard/payment/:id',
                element:<Payment></Payment>,
                loader:({params})=>fetch(`https://server-to-side.vercel.app/oders/${params.id}`)

            } ,
            {
                path:'/dashboard/report',
                element:<AllReport></AllReport>
            }

        ]
        
    },
    
    
    
])
export default router