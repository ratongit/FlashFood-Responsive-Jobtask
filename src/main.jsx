import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import router from './Route/Route.jsx';
import {Helmet} from "react-helmet";

import {
  RouterProvider,
} from "react-router-dom";


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <div className='max-w-full'>

    <RouterProvider router={router} />
    </div>
  </React.StrictMode>
);