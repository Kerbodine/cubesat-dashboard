import { useView } from "../contexts/ViewContext";

export default function Sidebar() {
  const { sidebar } = useView();

  return (
    <div
      className={`${
        sidebar ? "w-[240px]" : "hidden w-0 lg:block lg:w-[240px] flex-none"
      } absolute right-0 h-full border-l border-gray-200 bg-white lg:relative`}
    >
      <div className="h-[56px] w-full items-center border-b border-gray-200 p-3">
        Images:
      </div>
      <div className="space-y-3 p-3 overflow-y-auto h-[calc(100vh-56px)]">
        <div className="w-full aspect-video bg-gray-100 rounded-lg"></div>
        <div className="w-full aspect-video bg-gray-100 rounded-lg"></div>
        <div className="w-full aspect-video bg-gray-100 rounded-lg"></div>
        <div className="w-full aspect-video bg-gray-100 rounded-lg"></div>
        <div className="w-full aspect-video bg-gray-100 rounded-lg"></div>
        <div className="w-full aspect-video bg-gray-100 rounded-lg"></div>
        <div className="w-full aspect-video bg-gray-100 rounded-lg"></div>
      </div>
    </div>
  );
}
