import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home/Home";
import Layout from "../Layout/Layout";
import AllPets from "../Pages/PetListing/AllPets";
import PetsDetails from "../Pages/PetListing/PetsDetails";

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
        path: "allPets/:id",
        element: <PetsDetails></PetsDetails>,
      },
    ],
  },
]);

export default routers;
