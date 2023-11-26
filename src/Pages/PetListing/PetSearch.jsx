const PetSearch = ({ onSearchChange }) => {
  const handleSearch = (e) => {
    const query = e.target.value;
    onSearchChange(query);
    console.log(query);
  };

  return (
    <div>
      <div className="w-80 mb-5">
        <input
          className="bg-[#063970] px-2 py-1 text-white"
          type="search"
          name="search"
          id=" "
          placeholder="search"
          onChange={handleSearch}
        />
      </div>
    </div>
  );
};

export default PetSearch;
