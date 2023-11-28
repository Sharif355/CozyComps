import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home/Home";
import Layout from "../Layout/Layout";
import AllPets from "../Pages/PetListing/AllPets";
import PetsDetails from "../Pages/PetListing/PetsDetails";
import Login from "../Pages/Home/Login";
import Register from "../Pages/Home/Register";

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
        loader: ({ params }) =>
          fetch(`http://localhost:5000/allPets/${params.id}`),
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
      },
    ],
  },
]);

export default routers;
