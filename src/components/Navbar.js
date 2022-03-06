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
import { ReactComponent as QBELogo } from "../svg/qbe.svg";

const Navbar = () => {
  const { navbar, toggleNavbar } = useView();

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
          <span>
            <QBELogo />
          </span>
          <p className="text-lg font-semibold">QBE</p>
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
        {/* Profile Button */}
        <div className="w-full mt-auto h-12 rounded-lg flex items-center">
          <div className="rounded-full bg-gray-400 w-8 h-8 flex-none"></div>
          <div
            className={`${
              !navbar && "hidden sm:block"
            } no-select ml-3 flex-auto truncate text-sm`}
          >
            <p className="truncate font-medium text-gray-700">John Doe</p>
            <p className="-mt-1 truncate text-gray-500">test@test.com</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
