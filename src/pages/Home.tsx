import { Gallery } from "../components/Gallery";
import { ImageUpload } from "../components/ImageUpload";
import { Navbar } from "../components/Navbar";

export const Home = () => {
  return (
    <div className="max-w-5xl mx-auto bg-slate-800">
      <Navbar />
      <ImageUpload />
      <Gallery />
    </div>
  );
};
