import { useState } from "react";
import { useLoaderData } from "react-router-dom";

const CampaignDetails = () => {
  const loadedData = useLoaderData();
  const {
    _id,
    petName,
    petImage,
    maxDonationAmount,
    donatedAmount,
    stillNeed,
    title,
    shortDescription,
  } = loadedData;

  return (
    <div className="max-w-[600px] mx-auto  my-10">
      <div className="max-w-sm space-y-2 font-roboto-slab" key={_id}>
        <img
          className="w-80 md:w-96 h-80 object-cover rounded-xl"
          src={petImage}
          alt={petName}
        />
        <h1 className="font-bold text-lg"> {petName} </h1>
        <p className="text-justify  font-semibold">{title}</p>
        <p className="text-justify text-gray-600">{shortDescription}</p>
        <div className="flex justify-between">
          <p className="flex flex-col">
            <span>$ {maxDonationAmount} </span>
            <span className="text-gray-500">Max Donation</span>
          </p>
          <p className="flex flex-col">
            <span>$ {donatedAmount} </span>
            <span className="text-gray-500">Raised so far</span>
          </p>
          <p className="flex flex-col">
            <span>$ {stillNeed} </span>
            <span className="text-gray-500">Still Need</span>
          </p>
        </div>

        <div className="flex justify-center">
          <button
            className="flex border  select-none items-center gap-2 rounded-lg py-3 mt-2 px-6 text-center align-middle font-sans text-xs font-bold  text-pink-500 transition-all hover:bg-pink-500/10 active:bg-pink-500/30 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
            type="button"
            data-ripple-dark="true"
          >
            Donate Now
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
        </div>
      </div>
    </div>
  );
};

export default CampaignDetails;
