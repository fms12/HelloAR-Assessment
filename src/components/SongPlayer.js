import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import SkipPreviousIcon from "@mui/icons-material/SkipPrevious";
import SkipNextIcon from "@mui/icons-material/SkipNext";
import { useSelector } from 'react-redux';

function SongPlayer() {
  const song  = useSelector((store)=> store.player.currentPlayer)
  
  return (
    <div className="md:w-[calc(100%-256px)] h-[100px] flex px-4 mb-2 mt-2   fixed bottom-5 border border-black rounded-md">
      <div className="flex items-center   overflow-hidden w-[15%] ">
        <img
          src={song?.image}
          alt="loading ... "
          className="w-[72px] h-[72px]"
        />
        <span className="text-[14px] ml-2">{song?.name}</span>
      </div>
      <div className="w-[100%]">
        <input
          style={{ width: "100%" }}
          type="range"
          // value={sliderValue}
          // onChange={handleSliderChange}
          className="text-yellow-400"
          max={100}
        />
      </div>
      <div className="w-[40px] h-[26px] flex  absolute top-10 right-20">
        <div className="cursor-pointer">
          <SkipPreviousIcon
            // onClick={handlePlayClick}
            sx={{
              width: "30px",
              height: "40px",
            }}
          />
        </div>
        <div className="cursor-pointer">
          <PlayArrowIcon
            sx={{
              width: "30px",
              height: "40px",
            }}
          />
        </div>
        <div className="cursor-pointer">
          <SkipNextIcon
            sx={{
              width: "30px",
              height: "40px",
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default SongPlayer
