import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as ProIcon } from "../svg/pro.svg";

export default function GetPremium() {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center gap-4 p-4">
      <div className="w-full max-w-[320px]">
        <ProIcon />
      </div>
      <p className="text-center flex items-center text-gray-700 leading-5">
        This feature is only for QBE Pro users.
      </p>
      <Link
        to="/pricing"
        className="mt-4 border-2 px-3 py-2 font-medium border-accent rounded-lg text-accent hover:bg-accent hover:text-white transition-colors"
      >
        Purchase license
      </Link>
    </div>
  );
}
