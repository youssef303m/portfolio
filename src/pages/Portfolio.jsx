import PortfolioProject from "../components/PortfolioProject";

import LabixeProject from "../imgs/Projects/labixe.png";
import CryptopiaProject from "../imgs/Projects/cryptopia.png";
import PixelizeProject from "../imgs/Projects/pixelize.png";
import AlinaLeeProject from "../imgs/Projects/alinalee.png";

const Portfolio = () => {
  return (
    <section className="min-h-screen flex items-center justify-center py-[140px]">
      <div className="container flex flex-col items-center">
        <h2 className="text-[48px] sm:text-[65px] font-[600]">
          My <span className="text-primary">Works</span>
        </h2>
        <p className="mt-2 text-[18px] sm:text-[24px] text-paragraph">
          Take a look at some of my projects
        </p>
        <div className="mt-16 grid xl:grid-cols-2 2xl:grid-cols-3 gap-8">
          <PortfolioProject
            title={"Labixe Host"}
            description={"The hosting world awaits you!"}
            img={LabixeProject}
            techStack={["HTML", "CSS", "TailwindCSS", "ReactJS"]}
            githubURL={""}
            liveURL={"https://labixe.host/"}
          />
          <PortfolioProject
            title={"Cryptopia"}
            description={"Explore the world of cryptocurrencies."}
            img={CryptopiaProject}
            techStack={["HTML", "CSS", "TailwindCSS", "NextJS"]}
            githubURL={"https://github.com/youssef303m/cryptopia"}
            liveURL={"https://cryptopia-pixelize.vercel.app/"}
          />
          <PortfolioProject
            title={"Pixelize Agency"}
            description={"Pixelating Imagination!"}
            img={PixelizeProject}
            techStack={["HTML", "CSS", "TailwindCSS", "ReactJS"]}
            githubURL={""}
            liveURL={"https://pixelize.agency/"}
          />
          <PortfolioProject
            title={"Photography Portfolio"}
            description={"Alina Lee photography portfolio."}
            img={AlinaLeeProject}
            techStack={["HTML", "CSS", "TailwindCSS", "ReactJS"]}
            githubURL={"https://github.com/youssef303m/photography-portfolio"}
            liveURL={"https://photography-pixelize.vercel.app/"}
          />
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
