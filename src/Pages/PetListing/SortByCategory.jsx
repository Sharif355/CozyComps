import { useState } from "react";

const SortByCategory = ({ onCategoryChange }) => {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const handleChange = (e) => {
    const categories = e.target.value;
    console.log(categories);
    setSelectedCategory(categories);
    onCategoryChange(categories);
  };

  return (
    <div className="w-80 mb-5">
      <p className="font-roboto-slab">Sort By Category</p>
      <select
        className="border-2 p-2"
        value={selectedCategory}
        onChange={handleChange}
      >
        <option value="all">All</option>
        <option value="cat">Cat</option>
        <option value="dog">Dog</option>
        <option value="rabbit">Rabbit</option>
        <option value="fish">Fish</option>
        <option value="bird">Bird</option>
        <option value="hamster">Hamster</option>
      </select>
    </div>
  );
};

export default SortByCategory;
