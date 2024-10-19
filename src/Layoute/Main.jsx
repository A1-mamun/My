import About from "../Components/About/About";
import Container from "../Components/Container/Container";
import Footer from "../Components/Footer/Footer";
import Message from "../Components/Message/Message";
import Navbar from "../Components/Navbar/Navbar";
import Projects from "../Components/Projects/Projects";
import Skills from "../Components/Skills/Skills";

const Main = () => {
  return (
    <>
      <Container>
        <div className="grid grid-cols-5 gap-32 font-mulish">
          <div className=" col-span-2">
            <Navbar />
          </div>

          <div className=" col-span-3">
            <About />
            <Skills />
            <Projects />
            <Message />
          </div>
        </div>
      </Container>
      <Footer />
    </>
  );
};

export default Main;
