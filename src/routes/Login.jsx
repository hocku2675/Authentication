import React, { useCallback, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useUserContext } from "../components/userContext";

const Login = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const navigate = useNavigate();
  const userContext = useUserContext();

  const handleSetEmail = useCallback((e) => {
    setEmail(e.target.value);
  }, []);

  const handleSetPassword = useCallback((e) => {
    setPassword(e.target.value);
  }, []);

  const handleLogin = useCallback(() => {
    fetch(`http://localhost:5000/users?email=${email}&password=${password}`)
      .then((r) => r.json())
      .then((users) => {
        if (users.length === 1) {
          userContext.setUser(users[0]);
          navigate("/");
        } else {
          alert("Invalid Name!");
        }
      });
  }, [email, password, userContext]);

  useEffect(() => {
    if (userContext.user?.email) {
      navigate("/");
    }
  }, [navigate, userContext.user]);

  return (
    <div className="justify-center itemes-center border-solid border-2 w-96 my-60 mx-auto rounded-lg  px-9 py-12 ring-1 ring-slate-900/5 shadow-xl">
      <div className="flex flex-col  border-solid border-gray-300 text-xl mt-12 items-center justify-center gap-2 ">
        <input
          className="bg-gray dark:bg-slate-900 rounded-lg px-6 py-3 ring-1 ring-slate-900/5 shadow-xl"
          placeholder="email"
          type="email"
          value={email}
          onChange={handleSetEmail}
        />
        <input
          className="bg-gray dark:bg-slate-900 rounded-lg px-6 py-3 ring-1 ring-slate-900/5 shadow-xl"
          placeholder="password"
          type="password"
          value={password}
          onChange={handleSetPassword}
        />
        <button className="w-64 bg-sky-300 text-white" onClick={handleLogin}>
          Log in
        </button>
        <Link to="/singup">Don`t have an account?</Link>
      </div>
    </div>
  );
};

export default Login;
