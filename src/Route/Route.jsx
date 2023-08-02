import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Location from "../Pages/Location/Location";
import PartnerHome from "../Pages/Partner/PartnerHome/PartnerHome";
import SopportHome from "../Support/SupportHome/SopportHome";
  

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children:[
        {
            path: "/",
            element:<Home></Home>,
            
        },
      
        {
            path: "/Location",
            element:<Location></Location>,
            
        },
          {
          path: "/support",
          element:<SopportHome></SopportHome>,
          
      }
      
      ]
    },
    {
      path: "/PartnerHome",
      element:<PartnerHome></PartnerHome>,
      
  },

  ]


  
  );


  export default router;
    
  