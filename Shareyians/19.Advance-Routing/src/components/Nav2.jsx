import React from "react";
import { useNavigate } from "react-router-dom";

const Nav2 = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-cyan-800 py-2 px-5">
      <button
        onClick={() => {
          navigate("/");
        }}
        className=" font-medium bg-amber-500 px-5 py-2 rounded m-2 cursor-pointer"
      >
        Return to Home Page
      </button>

      <button
        onClick={() => {
          navigate(-1);
        }}
        className=" font-medium bg-amber-500 px-5 py-2 rounded m-2 cursor-pointer"
      >
        Back
      </button>

      <button
        onClick={() => {
          navigate(+1);
        }}
        className=" font-medium bg-amber-500 px-5 py-2 rounded m-2 cursor-pointer"
      >
        Next
      </button>
    </div>
  );
};

export default Nav2;
