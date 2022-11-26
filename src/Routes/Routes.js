import { createBrowserRouter } from "react-router-dom";
import Login from "../pages/Login/Login";
import Main from "../pages/Outlet/Main";

import DisplyError from './../Shared/DisplyError';
import Singup from './../pages/Singup/Singup';
import Home from "../pages/Home/Home";
import Cart from "../pages/Home/Cart/Cart";
import Dashborad from "../pages/Outlet/Dashborad";
import MyOders from "../Dashboard/MyOders/MyOders";
import Alluser from "../Dashboard/Alluser/Alluser";




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
                path:'/products/:id',
                loader:({params})=>fetch(`http://localhost:5000/products/${params.id}`),
                element:<Cart></Cart>
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
                element:<Alluser></Alluser>
            }  

        ]
        
    },
    
    
    
])
export default router