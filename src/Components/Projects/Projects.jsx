import tailwind from "../../assets/icon/tailwind.png";
import react from "../../assets/icon/react.png";
import node from "../../assets/icon/node.png";
import express from "../../assets/icon/express.png";
import mongoDb from "../../assets/icon/mongo.png";
import firebase from "../../assets/icon/firebase.png";
import project1 from "../../assets/image/echojournal.png";
import project2 from "../../assets/image/foodvilla.png";
import project3 from "../../assets/image/potteryverse.png";
import ProjectsCard from "./ProjectsCard";
import { FaExternalLinkAlt } from "react-icons/fa";

const Projects = () => {
  return (
    <section id="projects" className=" pt-20 lg:pt-24 px-3 md:px-0">
      <h2 className="text-2xl md:text-3xl lg:text-4xl text-center font-bold text-white">
        Some of My Projects
      </h2>
      <div className="space-y-10 mt-16">
        <div className="flex gap-5">
          <div>
            <img className="w-72 h-40" src={project1} alt="" />
          </div>
          <div className="flex-1 space-y-2">
            <a
              href="https://echojournal-53c24.web.app"
              target="_blank"
              className="group"
            >
              <h3 className="text-2xl font-bold border-b flex items-center gap-4 text-white group-hover:text-green-400 ">
                EchoJournal
                <FaExternalLinkAlt
                  size={20}
                  className="group-hover:scale-125"
                />
              </h3>
            </a>
            <h3 className="text-xl font-semibold">
              A Dynamic Platform for Reading and Sharing Articles
            </h3>
            <p className="text-slate-400">
              EchoJournal is a platform for reading and sharing articles,
              offering both free and premium content. Normal users can post one
              article and read free content, while premium subscribers can
              access premium articles and post unlimited articles. The admin
              panel allows administrators to manage content and user privileges,
              ensuring a secure and efficient experience. EchoJournal fosters
              knowledge sharing, creativity, and community interaction,
              providing a robust space for both readers and writers.
            </p>
            <div className="flex flex-wrap justify-start  gap-5">
              <img
                className="w-12 h-12 hover:scale-125 duration-300"
                src={tailwind}
                alt="TailwindCSS"
              />
              <img
                className="w-12 h-12 hover:scale-125 duration-300"
                src={react}
                alt="ReactJS"
              />
              <img
                className="w-12 h-12 hover:scale-125 duration-300"
                src={node}
                alt="NodeJS"
              />
              <img
                className="w-12 h-12 hover:scale-125 duration-300"
                src={express}
                alt="ExpressJS"
              />
              <img
                className="w-12 h-12 hover:scale-125 duration-300"
                src={mongoDb}
                alt="MongoDb"
              />
              <img
                className="w-12 h-12 hover:scale-125 duration-300"
                src={firebase}
                alt="Firebase"
              />
            </div>
            <div className="flex justify-start gap-3">
              <a
                className="btn btn-sm  bg-white hover:bg-slate-300 text-[#000]"
                href="https://github.com/A1-mamun/Echo-Journal-Client"
                target="_blank"
              >
                Client Side Code
              </a>
              <a
                className="btn btn-sm   bg-white hover:bg-slate-300 text-[#000]"
                href="https://github.com/A1-mamun/Echo-Journal-Server"
                target="_blank"
              >
                Server Side Code
              </a>
            </div>
          </div>
        </div>
        <div className="flex gap-5">
          <div>
            <img className="w-72 h-40" src={project2} alt="" />
          </div>
          <div className="flex-1 space-y-2">
            <a
              href="https://food-villa-5b01d.web.app"
              target="_blank"
              className="group"
            >
              <h3 className="text-2xl font-bold border-b flex items-center gap-4 text-white group-hover:text-green-400 ">
                FoodVilla
                <FaExternalLinkAlt
                  size={20}
                  className="group-hover:scale-125"
                />
              </h3>
            </a>
            <h3 className="text-xl font-semibold">
              A One-Stop Hub for Purchasing and Sharing Delicious Foods
            </h3>
            <p className="text-slate-400">
              FoodVilla is a platform where users can purchase food and add food
              items. Users can view their purchase history and the items they
              have added, making it easy to keep track of their transactions and
              contributions. FoodVilla aims to provide a convenient and
              efficient experience for food enthusiasts, combining purchasing
              and sharing in one seamless interface.
            </p>
            <div className="flex flex-wrap justify-start  gap-5">
              <img
                className="w-12 h-12 hover:scale-125 duration-300"
                src={tailwind}
                alt="TailwindCSS"
              />
              <img
                className="w-12 h-12 hover:scale-125 duration-300"
                src={react}
                alt="ReactJS"
              />
              <img
                className="w-12 h-12 hover:scale-125 duration-300"
                src={node}
                alt="NodeJS"
              />
              <img
                className="w-12 h-12 hover:scale-125 duration-300"
                src={express}
                alt="ExpressJS"
              />
              <img
                className="w-12 h-12 hover:scale-125 duration-300"
                src={mongoDb}
                alt="MongoDb"
              />
              <img
                className="w-12 h-12 hover:scale-125 duration-300"
                src={firebase}
                alt="Firebase"
              />
            </div>
            <div className="flex justify-start gap-3">
              <a
                className="btn btn-sm  bg-white hover:bg-slate-300 text-[#000]"
                href="https://github.com/A1-mamun/Food-Villa-Client"
                target="_blank"
              >
                Client Side Code
              </a>
              <a
                className="btn btn-sm   bg-white hover:bg-slate-300 text-[#000]"
                href="https://github.com/A1-mamun/Food-Villa-Server"
                target="_blank"
              >
                Server Side Code
              </a>
            </div>
          </div>
        </div>
        <div className="flex gap-5">
          <div>
            <img className="w-72 h-40" src={project3} alt="" />
          </div>
          <div className="flex-1 space-y-2">
            <a
              href="https://pottery-verse.web.app"
              target="_blank"
              className="group"
            >
              <h3 className="text-2xl font-bold border-b flex items-center gap-4 text-white group-hover:text-green-400 ">
                PotteryVerse
                <FaExternalLinkAlt
                  size={20}
                  className="group-hover:scale-125"
                />
              </h3>
            </a>
            <h3 className="text-xl font-semibold">
              Your Marketplace for Unique Art and Craft Creations
            </h3>
            <p className="text-slate-400">
              PotteryVerse is a platform for art and craft enthusiasts to
              explore, purchase, and add unique items. Users can browse a wide
              range of handcrafted goods, add their own creations to the
              marketplace, and view their purchase and added history.
              PotteryVerse fosters a community for artisans and shoppers alike,
              promoting creativity and supporting the sharing of beautiful,
              handcrafted items.
            </p>
            <div className="flex flex-wrap justify-start  gap-5">
              <img
                className="w-12 h-12 hover:scale-125 duration-300"
                src={tailwind}
                alt="TailwindCSS"
              />
              <img
                className="w-12 h-12 hover:scale-125 duration-300"
                src={react}
                alt="ReactJS"
              />
              <img
                className="w-12 h-12 hover:scale-125 duration-300"
                src={node}
                alt="NodeJS"
              />
              <img
                className="w-12 h-12 hover:scale-125 duration-300"
                src={express}
                alt="ExpressJS"
              />
              <img
                className="w-12 h-12 hover:scale-125 duration-300"
                src={mongoDb}
                alt="MongoDb"
              />
              <img
                className="w-12 h-12 hover:scale-125 duration-300"
                src={firebase}
                alt="Firebase"
              />
            </div>
            <div className="flex justify-start gap-3">
              <a
                className="btn btn-sm  bg-white hover:bg-slate-300 text-[#000]"
                href="https://github.com/A1-mamun/Pottery-Verse-Client"
                target="_blank"
              >
                Client Side Code
              </a>
              <a
                className="btn btn-sm   bg-white hover:bg-slate-300 text-[#000]"
                href="https://github.com/A1-mamun/Pottery-Verse-Server"
                target="_blank"
              >
                Server Side Code
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
