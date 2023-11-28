import { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Auth/AuthProvider";
import Swal from "sweetalert2";
import { Divider } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";

const Login = () => {
  const { signInUser, googleSignIn, user, gitLogIn } = useContext(AuthContext);
  console.log(user);
  const location = useLocation();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    const newUser = {
      email,
      password,
    };
    console.log(newUser);
    signInUser(email, password)
      .then((res) => {
        Swal.fire({
          icon: "success",
          title: "Hurrah!",
          text: "Registration Completed!",
          confirmButtonText: "ok",
        });

        form.reset();
        navigate(location.pathname ? location.pathname : "/");
      })
      .catch((err) => {
        Swal.fire({
          icon: "error",
          title: "Oops!",
          text: err.message,
          confirmButtonText: "ok",
        });
      });
  };

  const handleGoogle = () => {
    googleSignIn().then((res) => {
      Swal.fire({
        icon: "success",
        title: "Hurrah!",
        text: "User Created Successfully",
        confirmButtonText: "ok",
      });
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
        <form className="space-y-6" onSubmit={handleSubmit}>
          <h5 className="text-xl font-medium text-gray-900 dark:text-white">
            Sign in to our platform
          </h5>
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
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
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
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
              required
            />
          </div>
          <div className="flex items-start">
            <div className="flex items-start">
              <div className="flex items-center h-5">
                <input
                  id="remember"
                  type="checkbox"
                  value=""
                  className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"
                  required
                />
              </div>
              <label
                htmlFor="remember"
                className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Remember me
              </label>
            </div>
            <a
              href="#"
              className="ms-auto text-sm text-blue-700 hover:underline dark:text-blue-500"
            >
              Lost Password?
            </a>
          </div>
          <button
            type="submit"
            className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Login to your account
          </button>
          <div className="text-sm font-medium text-gray-500 dark:text-gray-300">
            Not registered?{" "}
            <Link
              to="/register"
              className="text-blue-700 hover:underline dark:text-blue-500"
            >
              Create account
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

export default Login;
