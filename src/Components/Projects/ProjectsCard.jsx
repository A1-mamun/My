import { FaLocationArrow } from "react-icons/fa6";
import project1 from "../../assets/image/echojournal.png";
import tailwind from "../../assets/icon/tailwind.png";
import react from "../../assets/icon/react.png";
import node from "../../assets/icon/node.png";
import express from "../../assets/icon/express.png";
import mongoDb from "../../assets/icon/mongo.png";
import firebase from "../../assets/icon/firebase.png";
import { FaExternalLinkAlt } from "react-icons/fa";

const ProjectsCard = () => {
  return (
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
            <FaExternalLinkAlt size={20} className="group-hover:scale-125" />
          </h3>
        </a>
        <h3 className="text-xl font-semibold">
          A Dynamic Platform for Reading and Sharing Articles
        </h3>
        <p className="text-slate-400">
          EchoJournal is a platform for reading and sharing articles, offering
          both free and premium content. Normal users can post one article and
          read free content, while premium subscribers can access premium
          articles and post unlimited articles. The admin panel allows
          administrators to manage content and user privileges, ensuring a
          secure and efficient experience. EchoJournal fosters knowledge
          sharing, creativity, and community interaction, providing a robust
          space for both readers and writers.
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
  );
};

export default ProjectsCard;
