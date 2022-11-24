import Login from "../pages/Login/Login";
import Singup from "../pages/Singup/Singup";

const { createBrowserRouter } = require("react-router-dom");

const router=createBrowserRouter([
    {
        path:'/',
        element:<Singup></Singup>
        
    },
    {
        path:'/login',
        element:<Login></Login>
    }
    
])
export default router