import React from 'react';
import { Outlet } from 'react-router-dom';
import Navber from '../Components/Shared/NavBer/Navber';
import Fotter from '../Components/Shared/Fotter/Fotter';

const Main = () => {
    return (
        <div>
          <Navber></Navber>
            <Outlet></Outlet>
          <Fotter></Fotter>
        </div>
    );
};

export default Main;