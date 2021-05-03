import React from "react";
import Header from "../Header";
import DonarList from "./donar-list";

const Dashboard = () => {
  return (
    <div style={{
      backgroundImage: `url(https://picsum.photos/200/300/?blur)`, 
      backgroundRepeat: 'no-repeat', 
      backgroundSize: 'cover',
      minHeight: window.innerHeight + 'px'
    }}>
      <Header />
      <DonarList />
    </div>
  );
};

export default Dashboard;
