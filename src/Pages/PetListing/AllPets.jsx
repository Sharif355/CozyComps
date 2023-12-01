import { Divider } from "@mui/material";
import { useEffect, useState } from "react";

import PetSearch from "./PetSearch";
import SortByCategory from "./SortByCategory";
import SortByDate from "./SortByDate";
import { Link } from "react-router-dom";

const AllPets = () => {
  const [loadedPets, setLoadedPets] = useState([]);
  const [filteredPets, setFilteredPets] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [sortByDate, setSortByDate] = useState("des");

  useEffect(() => {
    fetch(" https://sever-side-lit6jv4i9-sharif355.vercel.app/allPets")
      .then((response) => response.json())
      .then((data) => {
        setLoadedPets(data);
        setFilteredPets(data);
      });
  }, []);

  // search by keyword
  const handleSearchChange = (query) => {
    setSearchQuery(query);
    filterPets(query, selectedCategory);
  };

  // search by category
  const handleCategoryChange = (categories) => {
    setSelectedCategory(categories);
    filterPets(searchQuery, categories);
  };

  // sort by date
  const handleDateChange = (dates) => {
    setSortByDate(dates);
    sortPets(dates);
  };

  // sort by date
  const sortPets = (dates) => {
    const sorted = [...filteredPets].sort((a, b) => {
      const dateA = new Date(a.date);
      const dateB = new Date(b.date);

      if (dates === "des") {
        return dateB - dateA;
      } else {
        return dateA - dateB;
      }
    });
    setFilteredPets(sorted);
  };

  // filter the pets according the search
  const filterPets = (query, categories) => {
    const lowerCaseQuery = query.toLowerCase();
    const filtered = loadedPets.filter((pet) => {
      return (
        (categories === "all" || pet.category.toLowerCase() === categories) &&
        pet.category.toLowerCase().includes(lowerCaseQuery)
      );
    });

    setFilteredPets(filtered);
  };

  return (
    <div className="max-w-[1490px] mx-auto my-10 font-roboto-slab">
      <div className="flex flex-col md:flex-row gap-5 justify-between">
        <PetSearch onSearchChange={handleSearchChange}></PetSearch>
        <SortByCategory
          onCategoryChange={handleCategoryChange}
        ></SortByCategory>
        <SortByDate onSortChange={handleDateChange}></SortByDate>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 ">
        {filteredPets?.map((pet) => (
          <div
            key={pet._id}
            style={{
              backgroundImage: "url(https://i.ibb.co/gt7tDbq/pattern2.png)",
            }}
            className="shadow-lg p-5 flex flex-col justify-center items-center"
          >
            <div className="flex flex-col md:flex-row gap-5">
              <div className="relative ">
                <img
                  className="w-52 h-52 rounded-md object-cover "
                  src={pet.image}
                  alt={pet.name}
                />
                <div className="absolute bottom-0 hover:bg-gray-600 opacity-50  h-full w-full"></div>
                <hr className="border-4 absolute bottom-0  md:bottom-0 w-full border-blue-500" />
              </div>
              <div className="space-y-3">
                <h1 className="text-xl font-bold  py-3 font-roboto-slab">
                  {pet.name}
                </h1>

                <p className="space-y-1">
                  <span className="font-medium font-roboto-slab">Age: </span>
                  <span className=" text-gray-500"> {pet.age}</span>
                  <Divider />
                </p>
                <p className="space-y-1">
                  <span className="font-medium font-roboto-slab">Breed: </span>
                  <span className=" text-gray-500">{pet.breed}</span>
                  <Divider />
                </p>

                <p className="space-y-1">
                  <span className="font-medium font-roboto-slab">
                    Date of Birth:{" "}
                  </span>{" "}
                  <span className=" text-gray-500"> {pet.date}</span>
                  <Divider />
                </p>
              </div>
            </div>

            <Link to={`/allPets/${pet._id}`}>
              <button className=" btn mt-5 text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-md uppercase px-10 py-2 text-center me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                More Info
              </button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllPets;
