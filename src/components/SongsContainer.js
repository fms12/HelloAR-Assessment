import React from "react";
import SongList from "./SongList";
import logo from "./../assests/Dream On - Art Design Cover.png";

const songs = [
  {
    id: 1,
    thumbnail: logo,
    name: "Dream",
    source: "Computer",
    date: "28/10/23",
  },
  {
    id: 2,
    thumbnail: logo,
    name: "Dream",
    source: "Computer",
    date: "28/10/23",
  },
  {
    id: 3,
    thumbnail: logo,
    name: "Dream",
    source: "Computer",
    date: "28/10/23",
  },
  {
    id: 4,
    thumbnail: logo,
    name: "Dream",
    source: "Computer",
    date: "28/10/23",
  },
];
function SongsContainer() {
  return (
    <div className="md:w-[calc(100%-256px)] absolute top-[81px] left-[256px]">
      <div className="w-[100%] bg-white p-4 shadow-md">
        <div className="w-[65%] flex font-semibold text-base">
          <div className="flex-grow">SONG NAME</div>
          <div className="flex w-[40%] justify-between">
              <div className="font-normal">SORUCE</div>
              <div className="font-normal">ADDED ON</div>
          </div>
        </div>
      </div>
      {songs.map((song, index) => (
        <SongList song={song} key={index} />
      ))}
    </div>
  );
}

export default SongsContainer;
