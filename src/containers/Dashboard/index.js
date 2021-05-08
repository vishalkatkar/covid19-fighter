import React from "react";
import Header from "../Header";
import DonarList from "./donar-list";

const Dashboard = ({ type }) => {
  return (
    <div style={{
      backgroundImage: `url(https://picsum.photos/200/300/?blur)`, 
      backgroundRepeat: 'no-repeat', 
      backgroundSize: 'cover',
      minHeight: window.innerHeight + 'px'
    }} className="pb-5">
      <Header />
      <DonarList type={type} />
    </div>
  );
};

export default Dashboard;
