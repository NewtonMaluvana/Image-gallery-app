import { Items } from "./Gallery";

export const Card = ({
  Item,
}: {
  Item: {
    Name: string;
    Date: string;
    imgae: string;
  };
}) => {
  return (
    <div className=" rounded-lg col-span-2 m-auto bg-slate-900 p-4 flex flex-col items-center">
      <div className="w-1/2 h-60  mx-auto">
        <img
          src={Item.imgae}
          width={250}
          alt=""
          className=" h-full object-contain m-auto"
        />
      </div>
      <div className=" p-2 text-sEtart text-xl text-purple-700">
        Uploaded by: <span className="text-white text-sm">{Item.Name}</span>
      </div>
      <div className=" flex items-center justify-center"></div>
      <div className="text-start p-1 text-orange-500">
        date uploaded: <span>{Item.Date}</span>
      </div>
    </div>
  );
};
