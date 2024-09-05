import { Navigate } from "react-router-dom";
import { Gallery } from "../components/Gallery";
import { ImageUpload } from "../components/ImageUpload";
import { Navbar } from "../components/Navbar";
import { useAuth } from "../hooks/UserAuth";

export const Home = () => {
  const { user } = useAuth();
  console.log(user);
  if (!user) {
    return <Navigate to="/Signup" />;
  } else {
    return (
      <div className="min-w-full min-h-full max-w-5xl mx-auto bg-black">
        <Navbar />
        <ImageUpload />
        <Gallery />
      </div>
    );
  }
};
