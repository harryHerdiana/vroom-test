import Cookies from "js-cookie";
import React, { useContext, useState } from "react";
import { useHistory } from "react-router";
import { UserContext } from "../Context/UserContext";

const Login = () => {
  const userContext = React.useContext(UserContext);
  const [input, setInput] = useState({
    email: "",
    password: "",
  });
  let history = useHistory();

  const handleSubmit = (event: { preventDefault: () => void }) => {
    const randomTime = Math.random() * 2000;
    event.preventDefault();
    const checkUser = userContext?.userData.find(
      (x) => x.email === input.email && x.password === input.password
    );
    if (checkUser) {
      userContext.setLoading();
      setTimeout(() => {
        userContext.setNotLoading();
        history.push("/");
      }, randomTime);
      userContext.setLogin();
      Cookies.set("email", checkUser.email, { expires: 1 });
      Cookies.set("password", checkUser.password, { expires: 1 });
    } else {
      history.push("/login");
    }
  };
  const handleChange = (event: { target: { value: any; name: any } }) => {
    let typeOfInput = event.target.value;
    let name = event.target.name;
    setInput({ ...input, [name]: typeOfInput });
  };

  return (
    <div className="absolute flex flex-col w-screen h-screen top-0 left-0 ">
      <div className="m-auto flex flex-col items-center px-4">
        <img src="images/Logo.png" alt="logo" className="w-max md:w-1/3" />
        <form onSubmit={handleSubmit} className="w-full md:w-80">
          <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
            Your email
          </label>
          <input
            type="text"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            name="email"
            value={input.email}
            onChange={handleChange}
          />

          <div className="mb-6">
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
              Your password
            </label>
            <input
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              type="password"
              name="password"
              value={input.password}
              onChange={handleChange}
            />
          </div>

          <button
            type="submit"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
