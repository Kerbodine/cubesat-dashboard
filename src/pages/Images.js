import React from "react";

const Images = () => {
  return (
    <div className="w-full h-full p-4 sm:p-8 lg:p-12">
      <h1 className="text-2xl font-semibold mb-4">Images</h1>
      <div className="w-full grid sm:grid-cols-2 xl:grid-cols-3 gap-3">
        <div className="w-full aspect-video rounded-lg bg-gray-100"></div>
        <div className="w-full aspect-video rounded-lg bg-gray-100"></div>
        <div className="w-full aspect-video rounded-lg bg-gray-100"></div>
        <div className="w-full aspect-video rounded-lg bg-gray-100"></div>
        <div className="w-full aspect-video rounded-lg bg-gray-100"></div>
        <div className="w-full aspect-video rounded-lg bg-gray-100"></div>
      </div>
    </div>
  );
};

export default Images;
