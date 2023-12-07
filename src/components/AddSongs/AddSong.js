import { useDispatch, useSelector } from "react-redux";
import { closeMenu } from "../../utils/states/handlePopupSlice";
import { Box, Modal } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

import AddSongForm from "./AddSongForm";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 798,
  height: 584,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

function AddSong() {
  const isMenuOpen = useSelector((store) => store.popup.isMenuOpen);
  const dispatch = useDispatch();

  const handleClose = () => {
    dispatch(closeMenu());
  };

 
  return (
    <>
      <Modal
        open={isMenuOpen}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div className="h-[100%] w-[100%] flex flex-col justify-between items-center">
            <div className="w-[100%] h-[10%] flex justify-between items-center p-[10px]">
              <h1 className="text-xl font-bold">Add Song</h1>
              <CloseIcon
                onClick={handleClose}
                sx={{
                  cursor: "pointer",
                  fontSize: 16,
                  fontWeight: 500,
                }}
              />
            </div>

            <div className="w-[100%] h-[1px] bg-[#F0F0F0] m-auto p-0"></div>
            <AddSongForm />
           
          </div>
        </Box>
      </Modal>
    </>
  );
}

export default AddSong;
