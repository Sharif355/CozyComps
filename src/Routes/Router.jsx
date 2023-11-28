import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home/Home";
import Layout from "../Layout/Layout";
import AllPets from "../Pages/PetListing/AllPets";
import PetsDetails from "../Pages/PetListing/PetsDetails";
import Login from "../Pages/Home/Login";
import Register from "../Pages/Home/Register";
import DonationCampaign from "../Pages/Donation/DonationCampaign";
import CampaignDetails from "../Pages/Donation/CampaignDetails";
import Dashboard from "../Pages/Dashboard/Dashboard";

const routers = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "allPets",
        element: <AllPets></AllPets>,
      },
      {
        path: "campaign",
        element: <DonationCampaign></DonationCampaign>,
      },
      {
        path: "campaign/:id",
        element: <CampaignDetails></CampaignDetails>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/donations/${params.id}`),
      },
      {
        path: "allPets/:id",
        element: <PetsDetails></PetsDetails>,
        loader: ({ params }) =>
          fetch(
            ` https://sever-side-mh7zut2tk-sharif355.vercel.app/allPets/${params.id}`
          ),
      },
      {
        path: "login",
        element: <Login></Login>,
      },
      {
        path: "register",
        element: <Register></Register>,
      },
      {
        path: "dashboard",
        element: <Dashboard></Dashboard>,
      },
    ],
  },
]);

export default routers;
