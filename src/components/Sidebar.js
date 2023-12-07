import { Widgets } from "@mui/icons-material";
import LogoutIcon from "@mui/icons-material/Logout";
import { Link, useNavigate } from "react-router-dom";

function Sidebar() {
  const navigate = useNavigate();
  const logoutHandler = () => {
    sessionStorage.clear();
    navigate("/login");
  };
  return (
    <div className="bg-black fixed top-0 w-64 h-full p-6 flex flex-col justify-between md:left-0 transition-all duration-300 z-50">
      <div className="md:hidden absolute right-4 top-4 ">
        {/* <button
          className="text-2xl p-2 box-content"
          onClick={() => setShowSidebar(false)}
        >
          <RiCloseLine />
        </button> */}
      </div>
      <div>
        <div className="mb-8">
          <img
            src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_RGB_White.png"
            width={130}
            height={130}
            alt="Spotify"
          />
        </div>
        <nav>
          <ul className="flex flex-col gap-y-4">
            <li>
              <Link
                href="#"
                className="flex items-center gap-4 hover:text-gray-100 transition-colors"
              >
                <Widgets
                  sx={{
                    color: "white",
                  }}
                />
                <h1 className="text-white">Songs</h1>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
      <div>
        <nav>
          <ul className="flex flex-col gap-y-2">
            <li>
              <Link
                href="/login"
                onClick={logoutHandler}
                className="text-xs hover:underline text-white flex "
              > 
                <LogoutIcon />
                <h1 className="text-lg flex justify-center items-center ">Logout</h1>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default Sidebar;
