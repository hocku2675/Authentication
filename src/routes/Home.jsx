import React from "react";
import { useUserContext } from "../components/userContext";
import { handleDate } from "../handleDate";

const Home = () => {
  const { user } = useUserContext();
  const [userDate, userTime] = handleDate(user.createdAt);
  return (
    <div className="text-center text-2xl py-20">
      <h1 className=" py-14 text-center text-5xl font-bold">About me</h1>
      <div>
        Email: <span className="text-gray-400">{user.email}</span>
      </div>
      <div className="text-center text-2xl ">
        Date sign up:{" "}
        <span className="text-gray-400">
          {userDate}, {userTime}
        </span>
      </div>
    </div>
  );
};

export default Home;
