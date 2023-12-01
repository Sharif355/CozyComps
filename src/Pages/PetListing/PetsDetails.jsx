import { Divider } from "@mui/material";
import { Link, useLoaderData } from "react-router-dom";
import VaccinesIcon from "@mui/icons-material/Vaccines";
import ChildFriendlyIcon from "@mui/icons-material/ChildFriendly";
import axios from "axios";
import { useContext, useState } from "react";
import AdoptModal from "./AdoptModalForm";
import { AuthContext } from "../../Auth/AuthProvider";
import Modal from "./Modal/Modal";

const PetsDetails = () => {
  const { user } = useContext(AuthContext);
  const loadedData = useLoaderData();
  const [isModalOpen, setModalOpen] = useState(false);

  const handleAdoptClick = () => {
    setModalOpen(true);
  };

  const handleAdopt = (formData) => {
    axios
      .post(
        " https://sever-side-lit6jv4i9-sharif355.vercel.app/adopts",
        formData
      )
      .then((res) => alert("post added"))
      .catch((err) => {
        console.log(err.message);
      });
  };

  const handleModalClose = () => {
    setModalOpen(false);
  };
  return (
    <div className="max-w-[490px] mx-auto my-10">
      <div
        key={loadedData._id}
        style={{
          backgroundImage: "url(https://i.ibb.co/gt7tDbq/pattern2.png)",
        }}
        className="shadow-lg p-5 flex flex-col justify-center items-center"
      >
        <div className="flex flex-col md:flex-row gap-5">
          <div className="relative ">
            <img
              className="w-52 h-52 rounded-md object-cover "
              src={loadedData.image}
              alt={loadedData.name}
            />
            <div className="absolute bottom-0 hover:bg-gray-600 opacity-50  h-full w-full"></div>
            <hr className="border-4 absolute bottom-0  md:bottom-0 w-full border-blue-500" />
          </div>
          <div className="space-y-3">
            <h1 className="text-xl font-bold  py-3 font-roboto-slab">
              {loadedData.name}
            </h1>

            <p className="space-y-1">
              <span className="font-medium font-roboto-slab">Age: </span>
              <span className=" text-gray-500"> {loadedData.age}</span>
              <Divider />
            </p>
            <p className="space-y-1">
              <span className="font-medium font-roboto-slab">Breed: </span>
              <span className=" text-gray-500">{loadedData.breed}</span>
              <Divider />
            </p>
            <p className="space-y-1">
              <span className="font-medium font-roboto-slab">Location: </span>
              <span className=" text-gray-500">{loadedData.location}</span>
              <Divider />
            </p>

            <p className="space-y-1">
              <span className="font-medium font-roboto-slab">
                Date of Birth:{" "}
              </span>{" "}
              <span className=" text-gray-500"> {loadedData.date}</span>
              <Divider />
            </p>
          </div>
        </div>
        <div className="bg-white flex gap-5 justify-center m-5 shadow-sm p-2 font-roboto-slab text-sm">
          <h4 className="flex flex-col  items-center">
            <VaccinesIcon className="text-blue-400"></VaccinesIcon> Vaccinated
          </h4>
          <h4 className="flex flex-col items-center font-roboto-slab">
            <ChildFriendlyIcon className="text-blue-400"></ChildFriendlyIcon>{" "}
            {loadedData.nature}{" "}
          </h4>
        </div>

        <button
          onClick={handleAdoptClick}
          className=" btn mt-5 text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-md uppercase px-10 py-2 text-center me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          ADOPT
        </button>
        <Modal isOpen={isModalOpen}>
          <AdoptModal
            user={user}
            onSubmit={handleAdopt}
            onClose={handleModalClose}
          ></AdoptModal>
        </Modal>
      </div>
    </div>
  );
};

export default PetsDetails;
