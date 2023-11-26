const SortByDate = ({ onSortChange }) => {
  const handleChange = (e) => {
    const sortedDate = e.target.value;
    onSortChange(sortedDate);
  };

  return (
    <div className="w-80 mb-5">
      <p className="font-roboto-slab">Sort By Date</p>
      <select className="border-2 p-2" onChange={handleChange}>
        <option value="asc">Ascending</option>
        <option value="des">Descending</option>
      </select>
    </div>
  );
};

export default SortByDate;
