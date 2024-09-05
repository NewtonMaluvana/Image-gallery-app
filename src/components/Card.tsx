import { MdDelete } from "react-icons/md";

import { deleteData } from "../hooks/deleteData";
import { useState } from "react";

export const Card = ({
  Item,
}: {
  Item: {
    Name: string;
    Date: string;
    imgae: string;
  };
}) => {
  const [del, setDel] = useState(false);
  return (
    <div className="  hover:scale-110 duration-1000 shadow-xl rounded-lg  mx-auto bg-slate-900 p-4 flex flex-col items-center">
      <div className="w-1/2 h-60  mx-auto">
        <img
          src={Item.imgae}
          width={250}
          alt=""
          className=" h-full object-contain m-auto"
        />
      </div>
      <div className="">
        <div className=" p-1 uppercase text-start text-sm text-blue-700">
          Uploaded By: <span className="text-white text-sm">{Item.Name}</span>
        </div>

        <div className="text-start text-sm uppercase p-1 text-orange-500">
          Date Uploaded: <span className="text-white">{Item.Date}</span>
        </div>
      </div>
      <div className="w-full">
        {" "}
        <button
          onClick={() => {
            deleteData(Item.imgae);
            setDel(true);
            setTimeout(() => {
              setDel(false);
            }, 600);
          }}
          className="btn w-full btn-primary"
        >
          Remove <MdDelete />
        </button>
        {del && (
          <div className="toast">
            <div className="alert alert-error">
              <span>Image deleted.</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
