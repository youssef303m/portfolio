// Import Link
import { Link } from "react-router-dom";

const Home = () => {
  const a = [1, 2];
  a[0] = 10;
  a[1] = 20;
  a[2] = 30;
  console.log(a);
  return (
    <main className="min-h-screen w-screen flex justify-center items-center">
      <div className="text-center px-4">
        <h1 className="text-[22px] sm:text-[40px] lg:text-[48px] xl:text-[64px] font-bold">
          Hello, I'm YOUSSEF MOHAMED
        </h1>
        <p
          className="sm:text-[18px] lg:text-[24px]
        text-paragraph mt-4 font-thin"
        >
          As a Frontend Developer, I am passionate about learning more,
          <br className="hidden sm:block" /> and collaborating with teams to
          bring innovative designs to life.
        </p>
        <div
          className="p-1 bg-gradient-to-r from-secondary to-primary w-fit mx-auto mt-8
          glow duration-main"
        >
          <div className="bg-body hover:bg-gradient-to-r from-secondary to-primary">
            <Link
              to="/portfolio"
              className="inline-block py-4 px-8 hover:px-[28px]
              lg:text-[30px] font-[500] lg:font-[500]
              bg-gradient-to-r from-secondary to-primary bg-clip-text text-transparent hover:text-body hover:font-[600]"
            >
              VIEW MY WORKS
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Home;
