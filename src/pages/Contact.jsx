const contact = () => {
  return (
    <section className="min-h-screen w-screen flex items-center justify-center">
      <div className="container px-[10px] flex flex-col items-center justify-center mt-[100px]">
        <h2 className="text-[42px] sm:text-[48px] lg:text-[52px] 2xl:text-[65px] font-[600]">
          <span className="text-primary">Contact</span> Me
        </h2>
        <p className="mt-2 text-[14px] sm:text-[18px] lg:text-[22px] 2xl:text-[24px] text-paragraph text-center">
          Say Hi! Let's chat and make some cool things happen.
        </p>
        {/* Contact Data */}
        <div
          className="bg-body p-2 mt-12 flex w-full
        xl:max-w-[1000px] md-max:flex-col"
        >
          {/* Left Section */}
          <div
            className="p-4 sm:p-8 flex-1
          border-solid border-[#303030] border-t-transparent border-l-transparent border-b-transparent
          md-max:border-r-transparent"
          >
            {/* Title */}
            <h3 className="text-primary text-[36px] font-[500]">
              Contact Form
            </h3>
            {/* Description */}
            <p className="text-paragraph text-[18px] mt-1 mb-6">
              Ready to get in touch?
            </p>
            {/* Form */}
            <form>
              <input
                type="text"
                placeholder="Name"
                required
                className="w-full py-3 px-5 bg-transparent border-solid rounded-[10px] border-[2px]"
              />
              <input
                type="email"
                placeholder="Email Address"
                required
                className="w-full mt-4 py-3 px-5 bg-transparent border-solid rounded-[10px] border-[2px]"
              />
              <textarea
                rows="10"
                placeholder="Go ahead, I'm listening..."
                required
                className="w-full mt-4 py-3 px-5 bg-transparent border-solid rounded-[10px] border-[2px]"
              />
              <button
                type="submit"
                className="bg-primary w-full mt-4 py-4 rounded-[10px] font-[600] text-[24px] text-body
                hover:bg-[#00C193] duration-main"
              >
                Submit
              </button>
            </form>
          </div>
          {/* Right Section */}
          <div className="p-8 flex-1 md-max:hidden">
            <h3 className="text-primary text-[36px] font-[500]">
              Social Media
            </h3>
            <p className="text-paragraph text-[18px] mt-1">
              Find me on Social Media!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default contact;
