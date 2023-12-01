import { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Auth/AuthProvider";
import Swal from "sweetalert2";
import { Divider } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import { updateProfile } from "firebase/auth";
import axios from "axios";

const Register = () => {
  const { signInUser, googleSignIn, user, gitLogIn } = useContext(AuthContext);
  console.log(user);
  const location = useLocation();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const photo = form.photo.value;
    const email = form.email.value;
    const password = form.password.value;
    const terms = form.terms.checked;
    const newUser = {
      name,
      photo,
      email,
      password,
      terms,
    };
    console.log(newUser);
    const data = {
      name: name,
      email: email,
    };
    if (!/^.{6,}$/.test(password)) {
      Swal.fire({
        icon: "error",
        title: "Sorry!",
        text: "Password at least have 6 character",
        confirmButtonText: "ok",
      });
    } else if (
      !/^(?=.*[A-Z])(?=.*[!@#$%^&*()_+{}\[\]:;<>,.?~\\/-])/.test(password)
    ) {
      Swal.fire({
        icon: "error",
        title: "Sorry!",
        text: "Password should have at least 1 special character and 1 capital letter",
        confirmButtonText: "ok",
      });
    } else {
      signInUser(email, password)
        .then((res) => {
          Swal.fire({
            icon: "success",
            title: "Hurrah!",
            text: "Registration Completed!",
            confirmButtonText: "ok",
          });
          updateProfile(res.user, {
            displayName: name,
            photoURL: photo,
          });

          axios
            .post(
              " https://sever-side-lit6jv4i9-sharif355.vercel.app/userInfos",
              data
            )
            .then((res) => {
              console.log(res.data);
            });

          form.reset();
          navigate(location.pathname ? location.pathname : "/");
        })
        .catch((err) => {
          console.log(err.message);
        });
    }
  };

  const handleGoogle = () => {
    googleSignIn().then((res) => {
      const userInfo = {
        email: res.user?.email,
        name: res.user?.displayName,
        photo: res.user?.photoURL,
      };
      axios
        .post(
          " https://sever-side-lit6jv4i9-sharif355.vercel.app/userInfos",
          userInfo
        )
        .then((res) => {
          console.log(res.data);
        });

      Swal.fire({
        icon: "success",
        title: "Hurrah!",
        text: "User Created Successfully",
        confirmButtonText: "ok",
      });
      navigate("/");
    });
  };

  const handleGitLogin = () => {
    gitLogIn().then((res) => {
      console.log(res.user);
    });
  };

  return (
    <div className="  max-w-4xl  mx-auto my-16 flex justify-center p-3">
      <div
        className="w-full max-w-sm p-4 border rounded-lg  sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700"
        style={{
          backgroundImage: "url(https://i.ibb.co/HTQ1bSp/patter3.jpg)",
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <form className="space-y-4" onSubmit={handleSubmit}>
          <h5 className="text-xl font-medium text-gray-900 dark:text-white">
            Register in to our platform
          </h5>
          <div>
            <label
              htmlFor="text"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Your name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white required:"
              placeholder="Your Name"
              required
            />
          </div>
          <div>
            <label
              htmlFor="text"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              PhotoURL
            </label>
            <input
              type="text"
              name="photo"
              id="photo"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white required:"
              placeholder="https://photoorg.com"
              required
            />
          </div>
          <div>
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Your email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white required:"
              placeholder="name@company.com"
              required
            />
          </div>
          <div>
            <label
              htmlFor="password"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Your password
            </label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="••••••••"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white required:"
              required
            />
          </div>
          <div className="flex items-start">
            <div className="flex items-start">
              <div className="flex items-center h-5">
                <input
                  id="remember"
                  type="checkbox"
                  name="terms"
                  value=""
                  className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"
                  required
                />
              </div>
              <label
                htmlFor="remember"
                className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Accept our <a href="#">Terms</a> & <a href="#">Conditions.</a>
              </label>
            </div>
          </div>
          <button
            type="submit"
            className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Register your account
          </button>
          <div className="text-sm font-medium text-gray-500 dark:text-gray-300">
            Already registered ?
            <Link
              to="/login"
              className="text-blue-700 hover:underline dark:text-blue-500 ml-1"
            >
              Login Now
            </Link>
          </div>
        </form>
        <Divider className="pt-5 "></Divider>
        <p className="text-sm py-2 font-medium text-center">
          ---or Continue with Social Link---
        </p>
        <Divider></Divider>
        <div className="flex flex-col justify-center items-center">
          <button
            onClick={handleGoogle}
            className="flex select-none items-center gap-3 my-3 rounded-lg border border-blue-gray-500 py-3 px-5 text-center align-middle font-sans text-sm font-bold  text-blue-gray-500 transition-all hover:opacity-75 focus:ring focus:ring-blue-gray-200 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
            type="button"
            data-ripple-dark="true"
          >
            <img
              src="https://docs.material-tailwind.com/icons/google.svg"
              alt="metamask"
              className="h-6 w-6"
            />
            Continue with Google
          </button>
          <button
            onClick={handleGitLogin}
            className="flex select-none items-center gap-3  rounded-lg border border-blue-gray-500 py-3 px-5 text-center align-middle font-sans text-sm font-bold  text-blue-gray-500 transition-all hover:opacity-75 focus:ring focus:ring-blue-gray-200 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none normal-case"
            type="button"
            data-ripple-dark="true"
          >
            <GitHubIcon></GitHubIcon>
            Continue with GitHub
          </button>
        </div>
      </div>
    </div>
  );
};

export default Register;
