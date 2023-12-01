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
import AddPet from "../Pages/Dashboard/AddPet";
import AddedPet from "../Pages/Dashboard/AddedPet";
import AdoptionRequest from "../Pages/Dashboard/AdoptionRequest";
import CreateCampaign from "../Pages/Dashboard/CreateCampaign";
import MyCampaings from "../Pages/Dashboard/MyCampaings";
import MyDonations from "../Pages/Dashboard/MyDonations";
import Error from "../Error/Error";

const routers = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    errorElement: <Error></Error>,
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
          fetch(
            `https://sever-side-6d8lipgds-sharif355.vercel.app/donations/${params.id}`
          ),
      },
      {
        path: "allPets/:id",
        element: <PetsDetails></PetsDetails>,
        loader: ({ params }) =>
          fetch(
            ` https://sever-side-6d8lipgds-sharif355.vercel.app/allPets/${params.id}`
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
    ],
  },
  {
    path: "dashboard",
    element: <Dashboard></Dashboard>,
    errorElement: <Error></Error>,
    children: [
      {
        path: "addPet",
        element: <AddPet></AddPet>,
      },
      {
        path: "addedPet",
        element: <AddedPet></AddedPet>,
      },
      {
        path: "request",
        element: <AdoptionRequest></AdoptionRequest>,
      },
      {
        path: "createCampaign",
        element: <CreateCampaign></CreateCampaign>,
      },
      {
        path: "myCampaigns",
        element: <MyCampaings></MyCampaings>,
      },
      {
        path: "myDonation",
        element: <MyDonations></MyDonations>,
      },
    ],
  },
]);

export default routers;
