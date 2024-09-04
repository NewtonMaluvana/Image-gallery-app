import { signOut } from "firebase/auth";
import { FcGallery } from "react-icons/fc";

export const Navbar = () => {
  const Logout = () => {
    // signOut()
  };
  return (
    <div className="w-full flex justify-between p-4">
      <button className="btn " onClick={Logout}>
        Logout
      </button>
      <div className="text-3xl font-semibold text-purple-700 flex gap-2 justify-center items-center">
        Image Gallery <FcGallery />
      </div>
    </div>
  );
};
