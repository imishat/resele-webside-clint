import Singup from "../pages/Singup/Singup";

const { createBrowserRouter } = require("react-router-dom");

const router=createBrowserRouter([
    {
        path:'/',
        element:<Singup></Singup>
        
    }
    
])
export default router