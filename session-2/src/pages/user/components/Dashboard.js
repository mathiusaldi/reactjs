import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../action";

const Dashboard = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.user);
  const handleLogout = () => {
    dispatch(logout());
  };
  return (
    <><div className="dashboard container">
      <h3>My Account Page</h3>
      <p>Wellcome,</p>
      <h1>{`${data.user.fullname}`}</h1>
      <button onClick={handleLogout}>log out</button>
      </div>
    </>
  );
};

export default Dashboard;
