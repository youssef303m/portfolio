// Import CV
import MyCV from "../downloads/Youssef-Mohamed-Resume.pdf";

// Import Icons
import { MdFileDownload } from "react-icons/md";
import { FaLongArrowAltRight } from "react-icons/fa";

// Import CSS
import "../components/About.css";

// Import Link
import { Link } from "react-router-dom";

const About = () => {
  return (
    <section className="min-h-screen w-screen flex items-center justify-center">
      <div className="container px-[10px] sm:px-[64px] flex items-center">
        {/* Left Section */}
        <div className="flex-1 lg-max:text-center">
          {/* About me text */}
          <h2 className="text-[32px] sm:text-[48px] font-[600]">
            More about me
          </h2>
          <p
            className="sm-max:text-[14px] mt-2 text-paragraph max-w-[520px] leading-[145%]
          lg-max:mx-auto"
          >
            Welcome to my portfolio! I'm Youssef Mohamed, a Frontend Developer.
            I thrive on challenges, stay updated with industry trends, and love
            collaborating to deliver high-quality solutions. I'm actively
            seeking job opportunities to grow my skills and contribute to
            meaningful projects. If you're in need of a motivated team player
            with a passion for frontend development, let's connect.
          </p>
          {/* Stats */}
          <div
            className="flex items-center mt-8 gap-4 sm:gap-8
          lg-max:justify-center"
          >
            {/* Years of Experience */}
            <div className="text-center">
              <span className="text-secondary text-[40px] font-[600]">2+</span>
              <p className="text-paragraph mt-2 font-[300]">
                YEARS OF
                <br />
                EXPERIENCE
              </p>
            </div>
            {/* Separator */}
            <div className="h-[20px] w-[2px] bg-[#FFFFFF5F]" />
            {/* Satisfied Clients */}
            <div className="text-center">
              <span className="text-secondary text-[40px] font-[600]">13+</span>
              <p className="text-paragraph mt-2 font-[300]">
                SATISFIED
                <br />
                CLIENTS
              </p>
            </div>
            {/* Separator */}
            <div className="h-[20px] w-[2px] bg-[#FFFFFF5F]" />
            {/* Finished Projects */}
            <div className="text-center">
              <span className="text-secondary text-[40px] font-[600]">42+</span>
              <p className="text-paragraph mt-2 font-[300]">
                FINISHED
                <br />
                PROJECTS
              </p>
            </div>
          </div>
          {/* Buttons */}
          <div
            className="mt-8 flex gap-8 items-center
          lg-max:justify-center sm-max:flex-col"
          >
            {/* Download Resume */}
            <a
              href={MyCV}
              download
              className="bg-[#323232] py-2 px-4 relative rounded-[15px] border-solid flex items-center w-fit
              group download-cv duration-main"
            >
              <span className="text-[24px] pr-[48px] group-hover:opacity-0 duration-main">
                Resume
              </span>
              <span
                className="absolute right-0 bg-[#222222] h-full rounded-tr-[15px] rounded-br-[15px] w-[50px]
              flex items-center justify-center duration-main
              group-hover:w-full group-hover:rounded-tl-[15px] group-hover:rounded-bl-[15px]"
              >
                <MdFileDownload size={24} />
              </span>
            </a>
            {/* Contact Me */}
            <Link
              to="/contact"
              className="text-[24px] flex items-center relative group z-[2] contact-btn px-4 py-2"
            >
              Contact me{" "}
              <FaLongArrowAltRight className="group-hover:translate-x-[20%] text-[26px] duration-main ml-2" />
            </Link>
          </div>
        </div>
        {/* Right Section */}
        <div className="flex-1 flex justify-center lg-max:hidden">
          <div className="w-fit">
            <h3 className="text-[36px] font-[500] mb-4 w-fit">Skills</h3>
            <div className="about__skills">
              {/* Languages */}
              <div>
                <h4 className="text-primary">Languages</h4>
                <p>HTML - CSS - JAVASCRIPT - TYPESCRIPT</p>
              </div>
              {/* CSS Related */}
              <div>
                <h4 className="text-primary">CSS Related</h4>
                <p>SASS - BOOTSTRAP - TAILWINDCSS</p>
              </div>
              {/* Javascript Related */}
              <div>
                <h4 className="text-primary">Javascript Related</h4>
                <p>REACT - NEXTJS - REDUX</p>
              </div>
              {/* Additional skills */}
              <div>
                <h4 className="text-primary">Additional Skills</h4>
                <p>GIT - FIGMA - ADOBE PHOTOSHOP</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
