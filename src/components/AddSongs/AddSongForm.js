import { styled } from "@mui/material/styles";
import FileUploadIcon from "@mui/icons-material/FileUpload";
import { Button } from "@mui/material";

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
  return (
    <div className="w-[100%] h-[75%] flex flex-col justify-between p-[10px]">
      <div className="songname">
        <label className=" text-gray-700 font-normal leading-6">
          Song Name
        </label>
        <input
          className="w-full h-[60%]  flex flex-col justify-between p-1"
          type="text"
          placeholder="Enter Song Name"
          // value={songName}
          // onChange={(e) => setSongName(e.target.value)}
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
          // value={songName}
          // onChange={(e) => setSongName(e.target.value)}
        />
      </div>

      <div className="soongSource">
        <label className=" text-gray-700 font-normal leading-6">
          Song Source
        </label>
        <input
          type="text"
          className="w-full h-[60%]  flex flex-col justify-between p-1"
          // onChange={(e) => {
          //   setSource(e.target.value);
          // }}
          placeholder="Source Song "
        />
      </div>

      <div className="thumbnail">
        {/* <label>
                  <img src="" alt="" />
                  Click to upload profile thumbnail
                </label> */}
        <Button
          component="label"
          // variant=""
          sx={{
            border: 1,
            borderColor: "black",
            text: "black",
          }}
          startIcon={<FileUploadIcon />}
        >
          Click to Upload Profile Thumbnail
          <VisuallyHiddenInput type="file" />
        </Button>
      </div>
      <p className="text-sm font-normal text-gray-500">
        *Image has to be of aspect ratio 1:1 with a size of 3000 pixels x 3000
        pixels
      </p>
    </div>
  );
}

export default AddSongForm;
