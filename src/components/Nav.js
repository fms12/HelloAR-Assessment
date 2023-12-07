import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../utils/states/handlePopupSlice";
import AddSong from "./AddSongs/AddSong";
import { Breadcrumbs } from "@mui/material";

function Nav() {
  const isMenuOpen = useSelector((store) => store.popup.isMenuOpen);
  const dispatch = useDispatch();

  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };

  return (
    <>
      <header className="fixed left-0 top-0 md:ml-64 w-full md:w-[calc(100%-256px)] bg-[#0A0A0A]/90 flex items-center p-3 z-40 ">
        <div className="w-full fixed top-2 ">
          <Breadcrumbs
            aria-label="breadcrumb"
            sx={{
              fontWeight: 100,
              color: "white",
            }}
          >
            <span className="text-[#a0a09e] text-sm">First-level Menu</span>
            <span className="text-[#a0a09e] text-sm">Second-level Menu </span>
            <span className="text-white text-sm">Current Page</span>
          </Breadcrumbs>
        </div>

        <div className="flex items-center justify-between w-full mt-4">
          <div>
            <h3 className="text-white text-lg font-bold ">Songs</h3>
            <div className="hidden md:flex items-center gap-2 text-2xl"></div>
          </div>
          {isMenuOpen && <AddSong />}
          <div className="flex items-center gap-6">
            <button
              href="/"
              className="py-2 md:py-3 px-4 text-side-bub rounded-full bg-white font-medium hover:scale-105 transition-transform"
              onClick={toggleMenuHandler}
            >
              Add Songs
            </button>
          </div>
        </div>
      </header>
    </>
  );
}

export default Nav;
