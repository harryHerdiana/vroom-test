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

  const handleSubmit = async (event: { preventDefault: () => void }) => {
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
  const testing = () => {
    userContext.setLoading();
    console.log(userContext.isLoading, " before timeout");
    const randomTime = Math.random() * 2000;
    setTimeout(() => {
      userContext.setNotLoading();
      console.log(userContext.isLoading, " after timeout");
    }, randomTime);
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
      <button onClick={testing}>Test</button>
      {userContext.isLoading && <div>Loading</div>}
    </>
  );
};

export default Login;
