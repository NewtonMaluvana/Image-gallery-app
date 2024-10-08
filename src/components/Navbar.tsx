import { signOut } from "firebase/auth";
import { FcGallery } from "react-icons/fc";
import { auth } from "../firebase/config";

export const Navbar = () => {
  const Logout = async () => {
    try {
      await signOut(auth);
    } catch (error) {}
  };
  return (
    <div className="w-full flex justify-between p-4">
      <button
        className="btn bg-purple-900  hover:scale-110 duration-1000 "
        onClick={Logout}
      >
        Logout
      </button>
      <div className="text-3xl uppercase font-semibold text-purple-700 flex gap-2 justify-center items-center">
        <FcGallery /> Image Gallery
      </div>
    </div>
  );
};
