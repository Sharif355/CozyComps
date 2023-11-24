import { useEffect, useState } from "react";
import SectionHeader from "../../Shared/SectionHeader";

const CallToAction = () => {
  const [loadedData, setLoadedData] = useState([]);
  useEffect(() => {
    fetch("action.json")
      .then((response) => response.json())
      .then((data) => setLoadedData(data));
  }, []);

  return (
    <div className="my-16 max-w-[1490px] mx-auto">
      <SectionHeader
        heading={"Help Pets Find Loving Homes"}
        subHeading={"Join Us in Making a Difference"}
      ></SectionHeader>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
        {loadedData?.map((data) => (
          <div
            key={data.id}
            className="max-w-sm mt-10 bg-white  dark:bg-gray-800 dark:border-gray-700 "
          >
            <img
              className="rounded-lg w-96 h-64 "
              src={data.image}
              alt={data.title}
            />

            <div className="pt-2">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-[#063970] dark:text-white">
                {data.title}
              </h5>

              <p className="mb-3 font-normal text-gray-400 dark:text-gray-400 text-justify">
                {data.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CallToAction;
