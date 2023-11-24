import { Parallax } from "react-parallax";

const Banner = () => {
  return (
    <div className="">
      <Parallax
        bgImage="https://i.ibb.co/drLF5fj/bannerbg.jpg"
        bgImageAlt="the banner"
        strength={-200}
        className=""
      >
        <div className="  bg-[#0000008c] text-white bg-opacity-80">
          <div className="flex items-center justify-center  ">
            <div className="text-center mt-20">
              <h1 className="mb-5 text-5xl font-bold">
                WELCOME TO <span className="font-semibold">CozyComps</span>
              </h1>
              <p className="mb-5">
                We offer the best services for your pets, contact us today and
                book a service
              </p>
              <button
                type="button"
                className="text-white bg-[#063970]  hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Contact Us
                <svg
                  className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 10"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M1 5h12m0 0L9 1m4 4L9 9"
                  />
                </svg>
              </button>
              <figure className="flex justify-center items-center pt-2">
                <img
                  className="w-[300px] md:w-[500px] lg:w-[1000px]"
                  src="https://i.ibb.co/5TgbrJp/bannercover.png"
                  alt=""
                />
              </figure>
            </div>
          </div>
        </div>
      </Parallax>
    </div>
  );
};

export default Banner;
