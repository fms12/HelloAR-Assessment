import React from "react";
import PlayCircleFilledWhiteIcon from "@mui/icons-material/PlayCircleFilledWhite";
import DeleteIcon from "@mui/icons-material/Delete";

function SongList({ song }) {
  return (
    <div className="md:w-[calc(100%-256px)] h-[91px] flex justify-between items-center px-4 box-content">
      <div className="flex items-center justify-start w-[30%]">
        <img
          src={song.thumbnail}
          alt={song.name}
          className="w-[72px] h-[72px]"
        />
        <span className="text-[14px] ml-2">{song.name}</span>
      </div>
      <div className="flex w-[30%] justify-between">
        <div className="">
          <div className="font-normal">{song.source}</div>
        </div>
        <div className="">
          <div className="font-normal">{song.date}</div>
        </div>
      </div>
      <div className="w-[40px] h-[26px] flex ">
        <div className="cursor-pointer mr-[11rem]">
          <PlayCircleFilledWhiteIcon
            sx={{
              color: "#fdb927",
              width: "40px",
              height: "40px",
            }}
          />
        </div>
        <div className="cursor-pointer">
          <DeleteIcon
            sx={{
              width: "40px",
              height: "40px",
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default SongList;
