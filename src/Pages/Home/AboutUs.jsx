import SectionHeader from "../../Shared/SectionHeader";

const AboutUs = () => {
  return (
    <div className="my-16 max-w-[1200px] mx-auto">
      <SectionHeader
        heading={"About Us"}
        subHeading={"Know About Our Work"}
      ></SectionHeader>
      <div className="flex flex-col-reverse md:flex-row gap-5 my-10">
        <div className="w-full">
          <h1 className="text-[#063970] text-5xl uppercase font-bold">
            Our Main Goals toProtect Pets{" "}
          </h1>
          <p className="text-justify py-10 text-lg text-gray-400">
            In a world where pets often face adversity, CozyComps stands as a
            beacon of hope. With a mission deeply rooted in compassion, we
            tirelessly work to promote pet adoption, ensuring that each animal
            finds a loving family. Our holistic approach involves not only
            facilitating rehoming but also providing essential medical care,
            creating safe spaces, and educating communities on responsible pet
            ownership.
          </p>
          <button
            type="button"
            className="text-white bg-[#063970]  hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Know More About Us
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
        </div>
        <div className="w-full">
          <img
            className="w-80 md:w-[590px] h-80 md:h-[390px] object-cover"
            src="https://i.ibb.co/RHTV9R8/about.jpg"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
