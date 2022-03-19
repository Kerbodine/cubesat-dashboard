import { Dialog, Transition } from "@headlessui/react";
import React, { useState, Fragment } from "react";
import { BiX } from "react-icons/bi";
import { useData } from "../contexts/DataContext";

const Images = () => {
  const [activeImage, setActiveImage] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const { allImages } = useData();

  const handleImageClick = (image) => {
    setActiveImage(image);
    setIsOpen(true);
  };

  return (
    <>
      <div className="w-full h-full p-4 sm:p-8 lg:p-12 overflow-y-auto">
        <h1 className="text-2xl font-semibold mb-4">Images</h1>
        <div className="w-full grid sm:grid-cols-2 xl:grid-cols-3 gap-3 mb-12">
          {allImages.map((image) => {
            return (
              <div
                key={image.timeStamp}
                onClick={() => handleImageClick(image)}
                className="w-full aspect-[4/3] rounded-lg bg-gray-100 overflow-hidden"
              >
                <img src={image.url} alt={image.timeStamp} />
              </div>
            );
          })}
        </div>
      </div>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog
          as="div"
          className="fixed inset-0 z-10 overflow-y-auto"
          onClose={() => setIsOpen(false)}
        >
          <div className="min-h-screen px-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="fixed inset-0 bg-black/25" />
            </Transition.Child>
            {/* This element is to trick the browser into centering the modal contents. */}
            <span
              className="inline-block h-screen align-middle"
              aria-hidden="true"
            >
              &#8203;
            </span>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <div className="relative inline-block w-full max-w-xl p-4 text-left align-middle transform bg-white shadow-lg rounded-2xl">
                <div className="relative w-full aspect-[4/3] bg-gray-100 rounded-lg overflow-hidden">
                  {activeImage && (
                    <img src={activeImage.url} alt={activeImage.timeStamp} />
                  )}
                </div>
                {activeImage && (
                  <p className="text-gray-600 mt-2">
                    Taken at: {activeImage.formattedTime.slice(0, -7)}
                  </p>
                )}
                <button
                  className="absolute right-6 top-6 bg-black/50 hover:bg-black/75 rounded-full text-xl p-1 text-white outline-none transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  <BiX />
                </button>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};

export default Images;
