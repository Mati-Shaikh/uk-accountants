import Navbar from '../components/Navbar';
import About from '../components/about';
import Contact from '../components/contact';
import Content from '../components/content'
import Course from '../components/courses';
import Footer from '../components/footer';
import LogoComponent from '../components/logo';
import GetIn from '../components/getIn';
import Testimonials from '../components/testimonials';




export default function Home() {
  return (
    <div>
      <Navbar />
      <div className='pt-24'>
      <Content />
      <About />
      <LogoComponent/>
      <Contact/>
      <Course/>
      <GetIn/>
      <Testimonials/>
      
      </div>

      <main className="max-w-7xl mx-auto px-8">
        <div className="mt-12">
          <h1 className="text-2xl font-semibold text-zinc-600">Main page</h1>
          <p className="text-zinc-600 font-light mt-2">
            A modern responsive navbar made with next and tailwind by
            .
          </p>
        </div>
        
      </main>
      <Footer/>
    </div>
  );
}
