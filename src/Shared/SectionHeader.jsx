import PetsIcon from "@mui/icons-material/Pets";
const SectionHeader = ({ heading, subHeading }) => {
  return (
    <div className="flex flex-col items-center space-y-2">
      <h4 className="text-gray-400 uppercase">---{subHeading}---</h4>
      <h1 className="text-5xl uppercase">{heading}</h1>
      <PetsIcon className="text-[#063970]"></PetsIcon>
    </div>
  );
};

export default SectionHeader;
