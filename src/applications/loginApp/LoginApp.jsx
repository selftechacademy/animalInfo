import React, { useState } from "react";

import "./loginApp.style.css";
import Message from "../../components/message/Message";
import CartApp from "../cartApp/CartApp";

const credentials = {
  password: "12345",
  username: "geek",
};

const LoginApp = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [tryCount, setTryCount] = useState(3);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const onSubmitHandler = (e) => {
    e.preventDefault();
    //we compare our username and password
    if (
      username === credentials.username &&
      password === credentials.password
    ) {
      setIsSubmitted(true);
      setIsSuccess(true);
    } else {
      //when password is wrong
      setIsSubmitted(true);
      setIsSuccess(false);
      setPassword("");
      setUsername("");
      setTryCount(tryCount - 1);
    }
  };

  const onUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const onPasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const showErrorMessage = () => {
    if (tryCount > 0) {
      return (
        <Message type="error">Try again! {tryCount} attempts left</Message>
      );
    } else {
      return <Message type="error">Your account is locked</Message>;
    }
  };

  return (
    <div className="container">
      {isSubmitted && isSuccess ? (
        <CartApp />
      ) : (
        <form onSubmit={onSubmitHandler}>
          <div className="form-item">
            <label>Username</label>
            <input
              name="username"
              value={username}
              onChange={onUsernameChange}
            />
          </div>
          <div className="form-item">
            <label>Password</label>
            <input
              name="password"
              type="password"
              value={password}
              onChange={onPasswordChange}
            />
          </div>
          <button disabled={tryCount === 0} type="submit">
            Login
          </button>
          {isSubmitted && !isSuccess ? showErrorMessage() : null}
        </form>
      )}
    </div>
  );
};

export default LoginApp;
