import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import { Autoplay, Pagination } from "swiper/modules";
import SectionHeader from "../../../Shared/SectionHeader";

const Categories = () => {
  const [loadedData, setLoadedData] = useState([]);
  useEffect(() => {
    fetch(" https://sever-side-lit6jv4i9-sharif355.vercel.app/categories")
      .then((response) => response.json())
      .then((data) => setLoadedData(data));
  }, []);

  return (
    <div className="my-10 max-w-[1490px] mx-auto ">
      <SectionHeader
        heading={"Categories"}
        subHeading={"FIND YOUR FRIEND"}
      ></SectionHeader>
      <Swiper
        breakpoints={{
          320: {
            slidesPerView: 1,
            spaceBetween: 15,
          },
          700: {
            slidesPerView: 3,
            spaceBetween: 15,
          },
        }}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        modules={[Autoplay, Pagination]}
        className="max-w-[90%] lg:max-w-full my-10"
      >
        {loadedData?.map((data) => (
          <SwiperSlide key={data._id}>
            <div className=" max-w-md bg-white dark:bg-gray-800 dark:border-gray-700">
              <Link>
                <img
                  className="rounded-lg w-full h-60 object-cover"
                  src={data.imageUrl}
                  alt={data.category}
                />

                <div className="">
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-[#063970] dark:text-white">
                    {data.category}
                  </h5>

                  <p className="mb-3 font-normal text-gray-400 dark:text-gray-400 text-justify">
                    {data.details}.
                  </p>
                  <button
                    href="#"
                    className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-[#063970] rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-[#063970] dark:focus:ring-blue-800"
                  >
                    See more
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
              </Link>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Categories;
