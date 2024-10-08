import { useState } from "react";
import { BiArrowToTop } from "react-icons/bi";
import { Usestorage } from "../firebase/storage";

import "react-toastify/dist/ReactToastify.css";

export const ImageUpload = () => {
  const [file, setFile] = useState<File | null>(null);
  const [Error, setError] = useState(false);
  const [isVaild, setIsValid] = useState(false);
  const { Upload, Progress } = Usestorage();

  const handleFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    setError(false);
    setIsValid(false);
    if (
      e.target.files &&
      (e.target.files[0].name.endsWith(".jpg") ||
        e.target.files[0].name.endsWith(".jpeg") ||
        e.target.files[0].name.endsWith(".png") ||
        e.target.files[0].name.endsWith("webp"))
    ) {
      setIsValid(true);
      setFile(e.target.files[0]);
    } else {
      setError(true);
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (file && isVaild) {
      console.log(file);
      Upload(file);
      setFile(null);
    }
    setFile(null);
  };
  return (
    <div className="mt-20 flex items-start flex-col w-full px-4">
      <form
        onSubmit={handleSubmit}
        action=""
        className="flex flex-col md:flex-row-reverse  gap-6"
      >
        <div className="flex flex-col gap-2">
          <input
            onChange={handleFile}
            type="file"
            className="file-input file-input-bordered file-input-primary w-full max-w-xs"
          />
          {Error && (
            <div className="text-red-700 px=4">
              Invalid file format make sure its a <br />
              jpg, jpeg, png,webp"
            </div>
          )}
        </div>
        <button
          disabled={!isVaild}
          type="submit"
          className={`btn ${
            Boolean(Progress) && "loading loading-ring"
          } btn-accent w-28 rounded-md text-black`}
        >
          Upload <BiArrowToTop />
        </button>
      </form>
      {
        <div className="w-full px-10">
          <progress
            className="progress w-full mt-4 h-4 progress-secondary"
            value={Progress}
            max="100"
          ></progress>
        </div>
      }
      {Progress == 100 && (
        <div className="toast">
          <div className="alert alert-success">
            <span>Image Uploaded</span>
          </div>
        </div>
      )}
    </div>
  );
};
