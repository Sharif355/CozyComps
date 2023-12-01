import Lottie from "lottie-react";
import error from "../../public/error.json";
import { Link } from "react-router-dom";
import KeyboardReturnRoundedIcon from "@mui/icons-material/KeyboardReturnRounded";

const Error = () => {
  return (
    <div>
      <div className="flex justify-center">
        <Lottie className="  max-w-2xl" animationData={error}></Lottie>
      </div>
      <div className="flex justify-center">
        <Link to="/">
          <button
            type="button"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5  text-center  dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            <KeyboardReturnRoundedIcon></KeyboardReturnRoundedIcon>
            <span> Return Home</span>
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Error;
