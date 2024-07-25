import Navbar from '../components/Navbar';
import About from '../components/about';
import Contact from '../components/contact';
import Content from '../components/content'
import Course from '../components/courses';
import Footer from '../components/footer';
import LogoComponent from '../components/logo';
import GetIn from '../components/getIn';
import Testimonials from '../components/testimonials';
import Talk from '../components/talk';
import Services from '../components/services'



export default function Home() {
  return (
    <div>
      <Navbar />
      <div className='pt-24'>
      <Content />
      <About />
      <LogoComponent/>
      {/* <Contact/> */}
      <Course/>
      <GetIn/>
      <Services/>
      <Testimonials/>
      <Talk/>
      
      </div>

      <Footer/>
    </div>
  );
}
