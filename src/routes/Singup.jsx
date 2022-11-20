import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useUserContext } from "../components/userContext";

const Singup = () => {
  const navigate = useNavigate();
  const userContext = useUserContext();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [repeatPassword, setRepeatPassword] = useState("");

  function handleSingup() {
    const createdUser = {
      createdAt: new Date().toISOString(),
      email: email.toString(),
      password: password.toString(),
    };
    if (password !== repeatPassword) {
      alert("Wrong Password!");
    } else {
      fetch("http://localhost:5000/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(createdUser),
      })
        .then(() => {
          userContext.setUser(createdUser);
          navigate("/");
        })
        .catch(() => {
          alert("Something goes wrong...");
        });
    }
  }

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleRepeatPassword = (e) => {
    setRepeatPassword(e.target.value);
  };

  return (
    <div className="justify-center itemes-center border-solid border-2 w-96 my-60 mx-auto rounded-lg  px-9 py-12 ring-1 ring-slate-900/5 shadow-xl">
      <div className="flex flex-col   text-xl mt-12 items-center justify-center gap-2 ">
        <input
          className="bg-gray dark:bg-slate-900 rounded-lg px-6 py-3 ring-1 ring-slate-900/5 shadow-xl"
          type="email"
          placeholder="email"
          onChange={handleEmail}
        />
        <input
          className="bg-gray dark:bg-slate-900 rounded-lg px-6 py-3 ring-1 ring-slate-900/5 shadow-xl"
          type="password"
          placeholder="password"
          onChange={handlePassword}
        />
        <input
          className="bg-gray dark:bg-slate-900 rounded-lg px-6 py-3 ring-1 ring-slate-900/5 shadow-xl"
          type="password"
          placeholder="repeat password"
          onChange={handleRepeatPassword}
        />
        <button className="w-64 bg-sky-300 text-white" onClick={handleSingup}>
          Sing up
        </button>
      </div>
    </div>
  );
};

export default Singup;
