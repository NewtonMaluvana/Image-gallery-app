import { FcGallery } from "react-icons/fc";

export const Navbar = () => {
  return (
    <div className="w-full flex justify-between p-4">
      <div className="">Logout</div>
      <div className="text-3xl font-semibold text-purple-700 flex gap-2 justify-center items-center">
        Image Gallery <FcGallery />
      </div>
    </div>
  );
};
