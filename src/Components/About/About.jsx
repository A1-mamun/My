import { FaFileDownload } from "react-icons/fa";
import image from "../../assets/image/banner_img.jpg";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import { FaArrowTurnDown } from "react-icons/fa6";

const About = () => {
  const [text] = useTypewriter({
    words: ["DEVELOPER"],
    loop: true,
  });
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <section id="about" className=" my-20 ">
      <div className="text-[#fff] space-y-20">
        <div className=" flex flex-col justify-between gap-10 items-center">
          <div className="">
            <img src={image} className="w-80 h-80 rounded-full shadow-2xl" />
          </div>
          <div className="text-slate-400 flex-1">
            <p className="py-6 text-lg text-justify">
              I am a <strong className="uppercase">front-end</strong> web
              developer currently studying at Rajshahi University of Engineering
              and Technology ( RUET ) in Rajshahi, Bangladesh. I am in my{" "}
              <strong>3rd year</strong> in the Department of{" "}
              <strong>Computer Science and Engineering</strong> . I work with
              the <strong>MERN</strong> stack environment and primarily use the{" "}
              <strong>ReactJS</strong> framework to build{" "}
              <strong>Dynamic</strong> and <strong>Responsive</strong> web
              applications. Additionally, I am a <strong>Competitive</strong>{" "}
              programmer with some knowledge of C and C++ programming languages.
              My passion for coding drives me to continuously improve my skills
              and stay updated with the latest technologies in web development.
            </p>
            <div className="flex gap-5">
              <a
                href="https://drive.google.com/file/d/12uWGdJhBwjnlcMPHf0vt_qA0OvGQb4FJ/view"
                target="_"
              >
                <button className="px-3 py-2 lg:px-5 lg:py-2 rounded-lg mt-8  border-none font-bold flex items-center gap-3 uppercase  bg-white hover:bg-slate-300 duration-200 text-[#000] text-sm md:text-base lg:text-lg ">
                  Resume <FaFileDownload className="text-xl animate-bounce" />
                </button>
              </a>
              <button
                onClick={() => scrollToSection("message")}
                className="px-3 py-2 lg:px-5 lg:py-2 rounded-lg mt-8   border-none font-bold flex items-center gap-3 uppercase  bg-white hover:bg-slate-300 duration-200 text-[#000] text-sm md:text-base lg:text-lg "
              >
                Hire me <FaArrowTurnDown className="text-xl animate-bounce" />
              </button>
            </div>
          </div>
        </div>
        <div className="space-y-2 font-extrabold text-lg text-slate-400">
          <h2 className="">
            <span className=" uppercase text-white mr-1">Name: </span> Md.
            Abdullah al mamun
          </h2>
          <h2 className="">
            <span className=" uppercase text-white mr-1">NATIONALITY: </span>{" "}
            Bangladeshi
          </h2>
          <h2 className="">
            <span className=" uppercase text-white mr-1">ADDRESS: </span>{" "}
            Rajshahi, bangladesh
          </h2>
          <h2 className="">
            <span className=" uppercase text-white mr-1">PHONE: </span> +880
            1745093497
          </h2>
          <h2 className="">
            <span className=" uppercase text-white mr-1">E-MAIL: </span>{" "}
            1154almamun@gmail.com
          </h2>
          <h2 className="">
            <span className=" uppercase text-white mr-1">Languages: </span>{" "}
            English,Bangla,Hindi
          </h2>
          <h2 className="">
            <span className=" uppercase text-white mr-1">Education: </span>{" "}
            Computer Science & Engineering ( <strong>3rd year</strong> )
          </h2>
          <h2 className="">
            <span className=" uppercase text-white mr-1">University: </span>{" "}
            Rajshahi University of Engineering and Technology (RUET) Rajshahi,
            Bangladesh
          </h2>
        </div>
      </div>
    </section>
  );
};

export default About;
