import React from "react";
import {
  BiCategory,
  BiCog,
  BiImages,
  BiMenu,
  BiServer,
  BiWorld,
} from "react-icons/bi";
import { useView } from "../contexts/ViewContext";
import NavbarItem from "./NavbarItem";
import { ReactComponent as QBELogo } from "../svg/qbe.svg";
import { useAuth } from "../contexts/AuthContext";

const Navbar = () => {
  const { navbar, toggleNavbar } = useView();
  const { userData } = useAuth();

  return (
    <div
      className={`${
        navbar ? "w-[200px]" : "w-[56px] sm:w-[200px]"
      } absolute h-full border-r border-gray-200 bg-white sm:relative flex-none z-10`}
    >
      <div className="flex h-[56px] w-full items-center border-b border-gray-200 px-3">
        {/* Logo branding */}
        <div
          className={`${
            !navbar && "hidden sm:flex"
          } flex flex-auto items-center gap-2`}
        >
          <span className="w-8 h-8">
            <QBELogo />
          </span>
          <p className="text-lg font-semibold no-select">QBE</p>
          <span
            className={`text-xs text-white font-semibold tracking-wide px-1 py-0.5 rounded-md ${
              userData.premium ? "bg-accent" : "bg-gray-500"
            }`}
          >
            {userData.premium ? "PRO" : "FREE"}
          </span>
        </div>
        <button
          onClick={toggleNavbar}
          className={`grid h-8 w-8 place-items-center text-xl text-gray-500 sm:hidden`}
        >
          <BiMenu />
        </button>
      </div>
      <div className="flex flex-col p-3 gap-1 h-[calc(100vh-56px)]">
        <NavbarItem icon={<BiCategory />} title="Dashboard" link={"/"} />
        <NavbarItem icon={<BiWorld />} title="CubeSats" link={"/cubesats"} />
        <NavbarItem icon={<BiServer />} title="Realtime" link={"/realtime"} />
        <NavbarItem icon={<BiImages />} title="Images" link={"/images"} />
        <NavbarItem icon={<BiCog />} title="Settings" link={"/settings"} />
        {/* Profile Button */}
        <div className="w-full mt-auto rounded-lg flex items-center">
          <div className="rounded-full bg-accent w-8 h-8 flex-none grid place-items-center font-medium text-white no-select">
            {userData.displayName[0]}
          </div>
          <div
            className={`${
              !navbar && "hidden sm:block"
            } no-select ml-3 flex-auto truncate text-sm`}
          >
            <p className="truncate font-medium text-gray-700">
              {userData.displayName}
            </p>
            <p className="-mt-1 truncate text-gray-500">{userData.email}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
