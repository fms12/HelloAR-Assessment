import React from "react";
import Nav from "../components/Nav";
import Sidebar from "../components/Sidebar";
import SongsContainer from "../components/SongsContainer";
function HomeScreen() {
  return (
    <>
      <div className="flex h-screen w-screen">
        <Sidebar />
        <Nav />
        <SongsContainer />
      </div>
    </>
  );
}

export default HomeScreen;
