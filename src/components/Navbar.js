import React from "react";
import {
  BiCategory,
  BiImages,
  BiMenu,
  BiServer,
  BiWorld,
} from "react-icons/bi";
import { useView } from "../contexts/ViewContext";
import NavbarItem from "./NavbarItem";

const Navbar = () => {
  const { navbar, toggleNavbar } = useView();

  return (
    <div
      className={`${
        navbar ? "w-[240px]" : "w-[56px] sm:w-[240px]"
      } absolute h-full border-r border-gray-200 bg-white sm:relative`}
    >
      <div className="flex h-[56px] w-full items-center border-b border-gray-200 px-3">
        {/* Account info and seettings */}
        {/* <div
          className={`${!navbar && "hidden sm:grid"} ${
            !userData.photoURL && "bg-accent font-semibold text-white"
          } grid h-8 w-8 flex-none cursor-pointer place-items-center overflow-hidden rounded-lg ring-accent ring-offset-2 hover:ring-2`}
        >
          {userData.photoURL ? (
            <img
              className="h-full w-full"
              src={userData.photoURL}
              alt="pfp"
            ></img>
          ) : (
            userData.displayName[0]
          )}
        </div> */}
        <div
          className={`${
            !navbar && "hidden sm:block"
          } no-select ml-3 flex-auto truncate text-sm`}
        >
          {/* <p className="truncate font-medium text-gray-700">{`${userData.displayName}`}</p> */}
          {/* <p className="-mt-1 truncate text-gray-500">{userData.email}</p> */}
        </div>

        <button
          onClick={toggleNavbar}
          className={`grid h-8 w-8 place-items-center text-xl text-gray-500 sm:hidden`}
        >
          <BiMenu />
        </button>
      </div>
      <div className="p-3 space-y-1">
        <NavbarItem icon={<BiCategory />} title="Dashboard" link={"/"} />
        <NavbarItem icon={<BiWorld />} title="CubeSats" link={"/cubesats"} />
        <NavbarItem icon={<BiServer />} title="Realtime" link={"/realtime"} />
        <NavbarItem icon={<BiImages />} title="Images" link={"/images"} />
        {/* Horizontal divider */}
      </div>
    </div>
  );
};

export default Navbar;
