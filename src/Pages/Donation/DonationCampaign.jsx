import axios from "axios";
import { useEffect, useState } from "react";
import SectionHeader from "../../Shared/SectionHeader";
import { Link } from "react-router-dom";

const DonationCampaign = () => {
  const [donationData, setDonationData] = useState([]);
  useEffect(() => {
    axios
      .get(" https://sever-side-lit6jv4i9-sharif355.vercel.app/donations")
      .then((res) => {
        setDonationData(res.data);
      });
  }, []);

  return (
    <div className="max-w-[1490px] mx-auto my-10 ">
      <div>
        <SectionHeader
          heading={"ability to save animals"}
          subHeading={"fundraising campaigns"}
        ></SectionHeader>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-10">
        {donationData?.map((data) => (
          <div className="max-w-sm space-y-2 font-roboto-slab" key={data._id}>
            <img
              className="w-80 md:w-96 h-80 object-cover rounded-xl"
              src={data.petImage}
              alt={data.petName}
            />
            <h1 className="font-semibold"> {data.petName} </h1>
            <p className="text-justify text-gray-600">
              {data.shortDescription}
            </p>
            <div className="flex justify-between">
              <p className="flex flex-col">
                <span>$ {data.maxDonationAmount} </span>
                <span className="text-gray-500">Max Donation</span>
              </p>
              <p className="flex flex-col">
                <span>$ {data.donatedAmount} </span>
                <span className="text-gray-500">Raised so far</span>
              </p>
            </div>
            <Link to={`/campaign/${data._id}`}>
              <button
                className="flex select-none items-center gap-2 rounded-lg py-3 pr-6 text-left align-middle font-sans text-xs font-bold  text-pink-500 transition-all hover:bg-pink-500/10 active:bg-pink-500/30 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                type="button"
                data-ripple-dark="true"
              >
                View Details
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="currentColor"
                  aria-hidden="true"
                  className="h-5 w-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                  ></path>
                </svg>
              </button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DonationCampaign;
