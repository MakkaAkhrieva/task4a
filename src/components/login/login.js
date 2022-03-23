import { useNavigate } from "react-router-dom";
import { useState } from "react";
import "./login.css";

const LogIn = (props) => {
  const textError = "Incorrect login or password";

  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [text, setText] = useState(false);

  const loginChange = (e) => {
    setLogin(e.target.value);
  };

  const passwordChange = (e) => {
    setPassword(e.target.value);
  };

  const navigate = useNavigate();

  const logIn = (e) => {
    e.preventDefault();
    if (login === "admin" && password === "1234") {
      props.setIsLoggedIn(true);
      navigate("/");
    } else {
      setText(true);
    }
  };

  return (
    <div className="wrapper">
      <form className="form-wrapper" action="#" onSubmit={logIn}>
        <input
          type="text"
          placeholder="Login"
          required
          onChange={loginChange}
        />
        <input
          type="password"
          placeholder="Password"
          required
          onChange={passwordChange}
        />
        <button className="btn-submit" type="submit">
          Log in
        </button>
        {text ? <div className="error">{textError}</div> : null}
      </form>
    </div>
  );
};

export default LogIn;
