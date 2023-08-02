import React from 'react';
import Banner from '../Banner/Banner';
import ClientCompany from '../ClientCompany/ClientCompany';
import Footer from '../Footer/Footer';

const Header = () => {
    return (
        <div>
            <Banner></Banner>
            <ClientCompany></ClientCompany>
            <Footer></Footer>
        </div>
    );
};

export default Header;