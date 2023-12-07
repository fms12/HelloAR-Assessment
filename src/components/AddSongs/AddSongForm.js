import { styled } from "@mui/material/styles";
import FileUploadIcon from "@mui/icons-material/FileUpload";
import { Button } from "@mui/material";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { closeMenu } from "../../utils/states/handlePopupSlice";
import { addSong } from "../../utils/states/addSongSlice";
import Delete from "@mui/icons-material/Delete";

const VisuallyHiddenInput = styled("input")({
  clip: "rect(0 0 0 0)",
  clipPath: "inset(50%)",
  height: 1,
  overflow: "hidden",
  position: "absolute",
  bottom: 0,
  left: 0,
  whiteSpace: "nowrap",
  width: 1,
});

function AddSongForm() {
  const [songName, setSongName] = useState("");
  const [songLink, setSongLink] = useState("");
  const [songSource, setSongSource] = useState("");
  const [songThumbnail, setSongThumbnail] = useState(null);
  const dispatch = useDispatch();

  const handleClose = () => {
    dispatch(closeMenu());
  };

  const handleAddSong = (e) => {
    dispatch(
      addSong({
        name: songName,
        link: songLink,
        source: songSource,
        image: songThumbnail,
      })
    );

    dispatch(closeMenu());
  };

  return (
    <div className="w-[100%] h-[89%] flex flex-col justify-between p-[5px]">
      <div className="songname">
        <label className=" text-gray-700 font-normal leading-6">
          Song Name
        </label>
        <input
          className="w-full h-[60%]  flex flex-col justify-between p-1"
          type="text"
          placeholder="Enter Song Name"
          value={songName}
          onChange={(e) => setSongName(e.target.value)}
        />
      </div>
      <div className="songname">
        <label className=" text-gray-700 font-normal leading-7">
          Song Link
        </label>
        <input
          className="w-full h-[60%] flex flex-col justify-between p-1"
          type="text"
          placeholder="Enter Song Link"
          value={songLink}
          onChange={(e) => setSongLink(e.target.value)}
        />
      </div>

      <div className="soongSource">
        <label className=" text-gray-700 font-normal leading-6">
          Song Source
        </label>
        <input
          type="text"
          className="w-full h-[60%]  flex flex-col justify-between p-1"
          onChange={(e) => {
            setSongSource(e.target.value);
          }}
          value={songSource}
          placeholder="Source Song "
        />
      </div>

      <div className="thumbnail">
        <Button
          component="label"
          sx={{
            border: 1,
            borderColor: "black",
            text: "black",
          }}
          startIcon={<FileUploadIcon />}
          onChange={(e) => {
            const file = e.target.files[0];
            const reader = new FileReader();
            reader.onloadend = () => {
              setSongThumbnail(reader.result);
            };
            if (file) {
              reader.readAsDataURL(file);
            }
          }}
        >
          Click to Upload Profile Thumbnail
          <VisuallyHiddenInput type="file" />
        </Button>
        <div className={`flex justify-between ${songThumbnail && `border border-black`} mt-2 items-center mb-2`}>
        <label>
          <img src={songThumbnail} alt="" />
          
        </label>
        { songThumbnail&& <Delete  onClick={()=> setSongThumbnail(null)} sx={{
          cursor:"pointer"
        }}/>}
        </div>
      </div>
      <p className="text-sm font-normal text-gray-500">
        *Image has to be of aspect ratio 1:1 with a size of 3000 pixels x 3000
        pixels
      </p>
      <div className="w-full h-px bg-gray-300"></div>
      <div className="w-full h-1/6 flex justify-end items-center p-2">
        <button
          onClick={handleClose}
          className="w-20 h-8 border border-gray-300 bg-white text-sm font-medium"
        >
          Cancel
        </button>
        <button
          className="w-32 h-8 bg-blue-500 border border-blue-500 text-white text-sm font-medium ml-2"
          onClick={handleAddSong}
        >
          Add Song
        </button>
      </div>
    </div>
  );
}

export default AddSongForm;
