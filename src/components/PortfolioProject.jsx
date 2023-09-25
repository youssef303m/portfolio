// Import icons
import { FaGithub } from "react-icons/fa";
import { RiGlobalFill } from "react-icons/ri";

const PortfolioProject = ({
  title,
  description,
  img,
  techStack,
  githubURL,
  liveURL,
}) => {
  return (
    <div>
      <div
        className="bg-black w-[340px] sm:w-[400px] aspect-[16/9] rounded-[10px] md-max:rounded-b-none text-black overflow-hidden relative group
      border-solid border-black
      before:absolute before:content-[''] before:w-full before:h-full before:bg-gradient-to-t before:from-black before:to-transparent before:opacity-0
      hover:before:opacity-75 before:duration-main md-max:before:hidden"
      >
        <img src={img} alt={title} className="object-cover" />
        {/* Data */}
        <div
          className="absolute -bottom-1/2 left-0 text-white p-4 opacity-0 duration-main
      group-hover:opacity-100 group-hover:bottom-0
      md-max:hidden"
        >
          <h4 className="font-[500] text-[20px]">{title}</h4>
          <p className="text-paragraph mt-2">{description}</p>
          {techStack[0].length > 0 && (
            <div className="flex gap-[6px] mt-2">
              {techStack.map((technology, index) => (
                <span
                  key={index}
                  className="bg-body px-2 py-1 rounded-[10px] font-[400]"
                >
                  {technology}
                </span>
              ))}
            </div>
          )}
        </div>
        {/* Buttons */}
        {(githubURL || liveURL) && (
          <div
            className="absolute -top-1/2 right-0 text-primary p-4 opacity duration-main flex gap-2
          group-hover:opacity-100 group-hover:top-0
          md-max:opacity-100 md-max:top-0"
          >
            {githubURL && (
              <a
                href={githubURL}
                target="_blank"
                rel="noreferrer"
                className="bg-body rounded-full p-2"
              >
                <FaGithub className="text-[24px]" />
              </a>
            )}
            {liveURL && (
              <a
                href={liveURL}
                target="_blank"
                rel="noreferrer"
                className="bg-body rounded-full p-2"
              >
                <RiGlobalFill className="text-[24px]" />
              </a>
            )}
          </div>
        )}
      </div>
      {/* Data on Mobile */}
      <div className="md:hidden p-2 bg-black rounded-br-[10px] rounded-bl-[10px]">
        <h4 className="font-[500] text-[20px] flex gap-2 justify-between">
          {title}{" "}
          {(githubURL || liveURL) && (
            <span className="flex gap-2">
              {githubURL && (
                <a
                  href={githubURL}
                  target="_blank"
                  rel="noreferrer"
                  className="text-paragraph"
                >
                  <FaGithub className="text-[20px]" />
                </a>
              )}
              {liveURL && (
                <a
                  href={liveURL}
                  target="_blank"
                  rel="noreferrer"
                  className="text-paragraph"
                >
                  <RiGlobalFill className="text-[20px]" />
                </a>
              )}
            </span>
          )}
        </h4>
        <p className="text-paragraph mt-2">{description}</p>
      </div>
    </div>
  );
};

export default PortfolioProject;
