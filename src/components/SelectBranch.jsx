import React from "react";
import { ClassTiming } from "../ClassTiming";


// import "/home/harshit/Desktop/React/attendence-management/src/style/SelectBranch.css";
import "../style/SelectBranch.css";


import { Link } from "react-router-dom";
export function SelectBranch() {
  return (
    <>
      <div className="container">
        <div className="mainHeading">
          <p>Select Class Number</p>
        </div>
        {/* page where you have to select class timing*/}
        <div className="buttonContainer">
          {ClassTiming.map((item,i) => {
            return (
              <Link key={i} to={`/class${i+1}`}><button key={i}>{item.text}</button></Link>
            );
          })}
        </div>
      </div>
    </>
  );
}
