import { Outlet, useNavigate } from "react-router-dom";
import { useEffect } from "react";

function App() {
      const navigate = useNavigate();
      useEffect(() => {
        const auth = sessionStorage.getItem("authenticated");
        if (!auth) {
          navigate("/login");
        }
      },[]);
  return (
    <>
     <Outlet/>
    </>
  );
}

export default App;
