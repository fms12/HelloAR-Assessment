import React, { useState } from "react";
import SongList from "./SongList";
import { useSelector } from "react-redux";
import { Pagination, Stack } from "@mui/material";
import SongPlayer from "./SongPlayer";

function SongsContainer() {
  const songs = useSelector((state)=> {
    return state.addSongs
  });
    const itemsPerPage = 4; // Set the number of songs to display per page
    const [currentPage, setCurrentPage] = useState(1);

    const indexOfLastSong = currentPage * itemsPerPage;
    const indexOfFirstSong = indexOfLastSong - itemsPerPage;
    const currentSongs = songs.slice(indexOfFirstSong, indexOfLastSong);

    const totalPages = Math.ceil(songs.length / itemsPerPage);

    const handlePageChange = (newPage) => {
      setCurrentPage(newPage);
    };

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

      {currentSongs.map((song) => (
        <SongList song={song}  key = {song.id}/>
      ))}
      {/*  with buttons and  */}
      {/* <div className="pagination flex justify-center items-center mt-4">
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className="px-4 py-2 bg-blue-500 text-white rounded-md mr-2"
        >
          Previous
        </button>
        <span className="text-gray-700">{`Page ${currentPage} of ${totalPages}`}</span>
        <button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className="px-4 py-2 bg-blue-500 text-white rounded-md ml-2"
        >
          Next
        </button>
      </div> */}

      {/* Using the MUI component */}
      <Stack spacing={2} direction="row" justifyContent="center" mt={4}>
        <Pagination
          count={totalPages}
          page={currentPage}
          onChange={handlePageChange}
          color="primary"
        />
      </Stack>
      <SongPlayer />
    </div>
  );
}

export default SongsContainer;
