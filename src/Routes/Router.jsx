import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home/Home";
import Layout from "../Layout/Layout";
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
import PrivateRoute from "./PrivateRoute";
import AllUsers from "../Pages/Dashboard/AllUsers";
import AllDonations from "../Pages/Dashboard/AllDonations";
import AllPets from "../Pages/PetListing/AllPets";
import Pets from "../Pages/Dashboard/Pets";

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
            `https://sever-side-lit6jv4i9-sharif355.vercel.app/donations/${params.id}`
          ),
      },
      {
        path: "allPets/:id",
        element: <PetsDetails></PetsDetails>,
        loader: ({ params }) =>
          fetch(
            ` https://sever-side-lit6jv4i9-sharif355.vercel.app/allPets/${params.id}`
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
        element: (
          <PrivateRoute>
            <AddPet></AddPet>
          </PrivateRoute>
        ),
      },
      {
        path: "users",
        element: (
          <PrivateRoute>
            <AllUsers></AllUsers>
          </PrivateRoute>
        ),
      },
      {
        path: "allPet",
        element: (
          <PrivateRoute>
            <Pets></Pets>
          </PrivateRoute>
        ),
      },
      {
        path: "allDonation",
        element: (
          <PrivateRoute>
            <AllDonations></AllDonations>
          </PrivateRoute>
        ),
      },
      {
        path: "addedPet",
        element: (
          <PrivateRoute>
            <AddedPet></AddedPet>
          </PrivateRoute>
        ),
      },
      {
        path: "request",
        element: (
          <PrivateRoute>
            <AdoptionRequest></AdoptionRequest>
          </PrivateRoute>
        ),
      },
      {
        path: "createCampaign",
        element: (
          <PrivateRoute>
            {" "}
            <CreateCampaign></CreateCampaign>
          </PrivateRoute>
        ),
      },
      {
        path: "myCampaigns",
        element: (
          <PrivateRoute>
            <MyCampaings></MyCampaings>
          </PrivateRoute>
        ),
      },
      {
        path: "myDonation",
        element: (
          <PrivateRoute>
            <MyDonations></MyDonations>
          </PrivateRoute>
        ),
      },
    ],
  },
]);

export default routers;
