import About from "../Components/About/About";
import Container from "../Components/Container/Container";
import Contact from "../Components/Conttactt/Contact";
import Footer from "../Components/Footer/Footer";
import Message from "../Components/Message/Message";
import MobileNavbar from "../Components/Navbar/MobileNavbar";
import Navbar from "../Components/Navbar/Navbar";
import Projects from "../Components/Projects/Projects";
import Skills from "../Components/Skills/Skills";

const Main = () => {
  return (
    <>
      <div className=" lg:hidden ">
        <MobileNavbar />
      </div>
      <Container>
        <div className="grid lg:grid-cols-5 lg:gap-32 font-mulish">
          <div className="hidden lg:block lg:col-span-2">
            <Navbar />
          </div>

          <div className="lg:col-span-3">
            <About />
            <Skills />
            <Projects />
            <Message />
          </div>
        </div>
      </Container>
      <Contact />
      <Footer />
    </>
  );
};

export default Main;
