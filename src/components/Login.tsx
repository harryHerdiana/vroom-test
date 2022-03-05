import Cookies from "js-cookie";
import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../Context/UserContext";

const Login = () => {
  const userContext = React.useContext(UserContext);
  const [input, setInput] = useState({
    email: "",
    password: "",
  });
  let navigate = useNavigate();

  const handleSubmit = (event: { preventDefault: () => void }) => {
    event.preventDefault();
    const checkUser = userContext?.userData.find(
      (x) => x.email === input.email && x.password === input.password
    );
    if (checkUser) {
      userContext.setLogin();
      Cookies.set("email", checkUser.email, { expires: 1 });
      Cookies.set("password", checkUser.password, { expires: 1 });
      navigate("/");
    } else {
      navigate("/login");
    }
  };
  const handleChange = (event: { target: { value: any; name: any } }) => {
    let typeOfInput = event.target.value;
    let name = event.target.name;
    setInput({ ...input, [name]: typeOfInput });
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>Username: </label>
        <input
          type="email"
          name="email"
          onChange={handleChange}
          value={input.email}
        />
        <br />
        <label>Password: </label>
        <input
          type="password"
          name="password"
          onChange={handleChange}
          value={input.password}
        />
        <br />
        <button>Login</button>
      </form>
    </>
  );
};

export default Login;
