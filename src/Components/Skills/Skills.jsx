import tailwind from "../../assets/icon/tailwind.png";
import js from "../../assets/icon/JavaScript.png";
import react from "../../assets/icon/react.png";
import node from "../../assets/icon/node.png";
import express from "../../assets/icon/express.png";
import mongoDb from "../../assets/icon/mongo.png";
import firebase from "../../assets/icon/firebase.png";
import c from "../../assets/icon/c.png";
import cpp from "../../assets/icon/cpp.png";
const Skills = () => {
  return (
    <section id="skills" className="my-12 lg:my-14 pt-16">
      <h2 className="text-center text-2xl md:text-3xl lg:text-4xl font-bold text-white">
        Tools and Technologies I Use
      </h2>
      <div className="flex flex-wrap justify-center  gap-5 md:gap-7 lg:gap-10 mt-16 md:mt-24 lg:mt-20 animate-pulse">
        <img
          className="w-12 h-12 md:w-16 md:h-16 lg:w-20 lg:h-20 hover:scale-125 duration-300"
          src={c}
          alt="c"
        />
        <img
          className="w-12 h-12 md:w-16 md:h-16 lg:w-20 lg:h-20 hover:scale-125 duration-300"
          src={cpp}
          alt="cpp"
        />
        <img
          className="w-12 h-12 md:w-16 md:h-16 lg:w-20 lg:h-20 hover:scale-125 duration-300"
          src={tailwind}
          alt="TailwindCSS"
        />
        <img
          className="w-12 h-12 md:w-16 md:h-16 lg:w-20 lg:h-20 hover:scale-125 duration-300"
          src={js}
          alt="JavaScript"
        />
        <img
          className="w-12 h-12 md:w-16 md:h-16 lg:w-20 lg:h-20 hover:scale-125 duration-300"
          src={react}
          alt="ReactJS"
        />
        <img
          className="w-12 h-12 md:w-16 md:h-16 lg:w-20 lg:h-20 hover:scale-125 duration-300"
          src={node}
          alt="NodeJS"
        />
        <img
          className="w-12 h-12 md:w-16 md:h-16 lg:w-20 lg:h-20 hover:scale-125 duration-300"
          src={express}
          alt="ExpressJS"
        />
        <img
          className="w-12 h-12 md:w-16 md:h-16 lg:w-20 lg:h-20 hover:scale-125 duration-300"
          src={mongoDb}
          alt="MongoDb"
        />
        <img
          className="w-12 h-12 md:w-16 md:h-16 lg:w-20 lg:h-20 hover:scale-125 duration-300"
          src={firebase}
          alt="Firebase"
        />
      </div>
    </section>
  );
};

export default Skills;
