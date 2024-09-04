import { BiArrowToTop } from "react-icons/bi";

export const ImageUpload = () => {
  return (
    <div className="mt-20 flex justify-start items-center px-4">
      <form action="" className="flex  gap-6">
        <input
          type="file"
          className="file-input file-input-bordered file-input-primary w-full max-w-xs"
        />

        <button className="btn btn-accent w-28 rounded-md">
          Upload <BiArrowToTop />
        </button>
      </form>
    </div>
  );
};
