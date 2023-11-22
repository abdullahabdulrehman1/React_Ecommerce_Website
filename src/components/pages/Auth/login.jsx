import Layout from "../../layout/layout";
import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { useAuth, AuthProvider } from "../../../context/authRoute.jsx";
import { Spinner } from "flowbite-react";
import Spinners from "../../spinners";
const Login = () => {
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const location = useLocation();
  const [auth, setauth] = useAuth();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    // <Spinners />
    // window.history.pushState({}, "", "/loggedin");

    const { email, password } = formData;
    // const trimmedEmail = email.trim();
    // Check if name, email, and password are not empty
    if (!email || !password) {
      toast.error("Please fill in all fields.");
      setError("Please fill in all fields.");
      return;
    }

    // Create a data obj    ect to send to the server
    const data = {
      //   name,
      email,
      password,
    };
    try {
      const res = await axios.post("http://localhost:8080/login", formData);
      // <Spinners />
      if (res && res.data) {
        setError(`${res.data.message}`);
        setauth({
          ...auth,
          user: res.data.user,
          token: res.data.token,
          auth: res.data.auth,
          //   password: res.data.password,
        });
        localStorage.setItem("auth", JSON.stringify(res.data));
        if (location.state && location.state.from === "/dashboard") {
          navigate("/dashboard");
        } else {
          navigate("/");
        }
      } else {
        setError(`${res.data.message}`);
      }
    } catch (error) {
      setError(`${error.response.data.message}`);
    }
  };

  return (
    <Layout title={"Login | Ecommerce"}>
      <div className="dark:bg-gray-900  light:bg-white-500">
        <div className="flex flex-col items-center justify-center px-6 py-0 mx-auto md:h-5/6 md:my-20 lg:py-0">
          <a
            href="#"
            className="flex items-center mb-6  text-2xl font-semibold text-gray-900 dark:text-white"
          >
            <img
              className="w-8 h-8 mr-2 rounded-3xl"
              src="/public/aboutus.jpg"
              alt="logo"
            />
            Ecommerce
          </a>

          <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                Login
              </h1>
              <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
                <div>
                  <label
                    htmlFor="email"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Your email
                  </label>
                  <input
                    type="email"
                    typeof="email"
                    name="email"
                    id="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="block w-full p-3 rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0"
                    required
                  />
                </div>

                <div>
                  <label
                    htmlFor="name"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Password
                  </label>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    value={formData.password}
                    onChange={handleChange}
                    className="block w-full p-3 rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0"
                    required
                  />
                </div>

                {/* {error && timeout(error)} */}
                {error && (
                  <div className="text-red-500 text-lg font-bold ">{error}</div>
                )}

                <button>
                  {" "}
                  <h1
                    className="ml-1 text-sm font-bold font-serif w-full  "
                    onClick={() => {
                      navigate("/forgotpassword");
                    }}
                  >
                    Forgot Password{" "}
                  </h1>
                </button>
                <div>
                  <button
                    type="submit"
                    // value={submit}

                    // onClick={handleSubmit}
                    className="w-full py-3 text-white bg-gray-900 rounded-md hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:ring-opacity-50"
                  >
                    LogIn
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};
export default Login;
