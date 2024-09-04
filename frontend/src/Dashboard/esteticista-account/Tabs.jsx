/* eslint-disable react/prop-types */
import {useContext} from "react";
import { BiMenu } from "react-icons/bi";
import { authContext } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";



const Tabs = ({ tab, setTab }) => {

    const {dispatch} = useContext(authContext);
    const navigate = useNavigate();

    const handleLogout = () => {
      dispatch({ type: "LOGOUT" });
      navigate("/");
    };
  return (
    <div>
      <span className="lg:hidden">
        <BiMenu className="w-6 h-6 cursor-pointer" />
      </span>
      <div className="hidden lg:flex flex-col p-[30px] bg-white shadow-panelShadow items-center h-max rounded-md">
        <button
          onClick={() => setTab("descripcion")}
          className={`${
            tab === "descripcion"
              ? "bg-indigo-100 text-primaryColor"
              : "bg-transparent text-headingColor"
          } w-full btn mt-0 rounded-md`}
        >
          Descripción
        </button>
        <button
          onClick={() => setTab("turnos")}
          className={`${
            tab === "turnos"
              ? "bg-indigo-100 text-primaryColor"
              : "bg-transparent text-headingColor"
          } w-full btn mt-0 rounded-md`}
        >
          Turnos
        </button>
        <button
          onClick={() => setTab("ajustes")}
          className={`${
            tab === "ajustes"
              ? "bg-indigo-100 text-primaryColor"
              : "bg-transparent text-headingColor"
          } w-full btn mt-0 rounded-md`}
        >
          Perfil
        </button>

        <div className="mt-[100px] w-full">
                <button
                  onClick={handleLogout}
                  className="w-full bg-[#181A1E] p-3 text-[16px] leading-7 rounded-md text-white"
                >
                  Logout
                </button>
                <button className="w-full bg-red-600 mt-4 p-3 text-[16px] leading-7 rounded-md text-white">
                  Borrar cuenta
                </button>
              </div>
      </div>
    </div>
  );
};

export default Tabs;
