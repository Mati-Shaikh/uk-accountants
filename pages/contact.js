import React from 'react';
import About from '../components/about';
import Navbar from '../components/Navbar';
import Footer from '../components/footer';
import Services from '../components/services';
import Logo from '../components/logo';
import Talk from '../components/talk';
import GetIn from '../components/getIn';
const Contact = () => {
    return (
        <div>
      <Navbar />
      
        <div >
            <div className="absolute inset-0 bg-gray-900 opacity-40"></div>
           
            {/* <Logo/>
<Services/>
<GetIn/> */}
<Talk/>
<Footer/>
        </div>
       
        </div>
    );
};

export default Contact;
