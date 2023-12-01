import { Link, Outlet } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import PetsRoundedIcon from "@mui/icons-material/PetsRounded";
import CampaignRoundedIcon from "@mui/icons-material/CampaignRounded";
import VolunteerActivismRoundedIcon from "@mui/icons-material/VolunteerActivismRounded";
import { FaCodePullRequest } from "react-icons/fa6";
import { Divider } from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";

const Dashboard = () => {
  return (
    <div className="max-w-[1490px] mx-auto my-10">
      <aside
        id="logo-sidebar"
        className="fixed bg-[#063970] text-white top-0 left-0 z-40 w-20 md:w-64 h-screen pt-20 transition-transform -translate-x-full  border-r border-gray-200 sm:translate-x-0 dark:bg-gray-800 dark:border-gray-700"
        aria-label="Sidebar"
      >
        <li className="px-3 font-medium ">
          <Link
            to="/"
            className="flex items-center p-2  rounded-lg hover:text-black hover:bg-gray-100 dark:hover:bg-gray-700 group"
          >
            <HomeIcon></HomeIcon>
            <span className="ms-3">Home</span>
          </Link>
        </li>
        <div className="h-full px-3 pb-4 overflow-y-auto  dark:bg-gray-800">
          <ul className="space-y-2 font-medium">
            <li>
              <Link
                to="/dashboard/users"
                className="flex items-center p-2  rounded-lg hover:text-black hover:bg-gray-100 dark:hover:bg-gray-700 group"
              >
                <PersonIcon></PersonIcon>
                <span className="ms-3">Users</span>
              </Link>
            </li>
            <li>
              <Link
                to="/dashboard/allPet"
                className="flex items-center p-2  rounded-lg hover:text-black hover:bg-gray-100 dark:hover:bg-gray-700 group"
              >
                <PetsRoundedIcon></PetsRoundedIcon>
                <span className="ms-3">All Pets</span>
              </Link>
            </li>
            <li>
              <Link
                to="/dashboard/allDonation"
                className="flex items-center p-2  rounded-lg hover:text-black hover:bg-gray-100 dark:hover:bg-gray-700 group"
              >
                <VolunteerActivismRoundedIcon></VolunteerActivismRoundedIcon>
                <span className="ms-3">All Donations</span>
              </Link>
            </li>
            <Divider className="bg-white" />
            <li>
              <Link
                to="/dashboard/addPet"
                className="flex items-center p-2  rounded-lg hover:text-black hover:bg-gray-100 dark:hover:bg-gray-700 group"
              >
                <AddCircleOutlineIcon></AddCircleOutlineIcon>
                <span className="ms-3">Add a pet</span>
              </Link>
            </li>
            <li>
              <Link
                to="/dashboard/addedPet"
                className="flex items-center p-2  rounded-lg hover:text-black hover:bg-gray-100 dark:hover:bg-gray-700 group"
              >
                <PetsRoundedIcon></PetsRoundedIcon>
                <span className="flex-1 ms-3 whitespace-nowrap">
                  My added pets
                </span>
              </Link>
            </li>
            <li>
              <Link
                to="/dashboard/request"
                className="flex items-center p-2  rounded-lg hover:text-black hover:bg-gray-100 dark:hover:bg-gray-700 group"
              >
                <FaCodePullRequest></FaCodePullRequest>

                <span className="flex-1 ms-3 whitespace-nowrap">
                  Adoption Request
                </span>
                <span className="inline-flex items-center justify-center w-3 h-3 p-3 ms-3 text-sm font-medium text-blue-800 bg-blue-100 rounded-full dark:bg-blue-900 dark:text-blue-300">
                  3
                </span>
              </Link>
            </li>
            <li>
              <Link
                to="/dashboard/createCampaign"
                className="flex items-center p-2  rounded-lg hover:text-black hover:bg-gray-100 dark:hover:bg-gray-700 group"
              >
                <AddCircleOutlineIcon></AddCircleOutlineIcon>
                <span className="flex-1 ms-3 whitespace-nowrap">
                  Create Donation Campaign
                </span>
              </Link>
            </li>
            <li>
              <Link
                to="/dashboard/myCampaigns"
                className="flex items-center p-2  rounded-lg hover:text-black hover:bg-gray-100 dark:hover:bg-gray-700 group"
              >
                <CampaignRoundedIcon></CampaignRoundedIcon>
                <span className="flex-1 ms-3 whitespace-nowrap">
                  My Donation Campaigns
                </span>
              </Link>
            </li>
            <li>
              <Link
                to="/dashboard/myDonation"
                className="flex items-center p-2  rounded-lg hover:text-black hover:bg-gray-100 dark:hover:bg-gray-700 group"
              >
                <VolunteerActivismRoundedIcon></VolunteerActivismRoundedIcon>
                <span className="flex-1 ms-3 whitespace-nowrap">
                  My Donations
                </span>
              </Link>
            </li>
          </ul>
        </div>
      </aside>

      <div className="p-4 sm:ml-64">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Dashboard;
