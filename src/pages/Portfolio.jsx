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
          <a href="#">
            <div className="bg-gray-300 w-[340px] sm:w-[400px] aspect-[16/9] rounded-[10px]"></div>
          </a>
          <a href="#">
            <div className="bg-gray-300 w-[340px] sm:w-[400px] aspect-[16/9] rounded-[10px]"></div>
          </a>
          <a href="#">
            <div className="bg-gray-300 w-[340px] sm:w-[400px] aspect-[16/9] rounded-[10px]"></div>
          </a>
          <a href="#">
            <div className="bg-gray-300 w-[340px] sm:w-[400px] aspect-[16/9] rounded-[10px]"></div>
          </a>
          <a href="#">
            <div className="bg-gray-300 w-[340px] sm:w-[400px] aspect-[16/9] rounded-[10px]"></div>
          </a>
          <a href="#">
            <div className="bg-gray-300 w-[340px] sm:w-[400px] aspect-[16/9] rounded-[10px]"></div>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
