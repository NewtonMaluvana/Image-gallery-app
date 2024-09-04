import { Items } from "./Gallery";

export const Card = ({
  Item,
}: {
  Item: {
    Name: string;
    Date: string;
  };
}) => {
  return (
    <div className="m-auto p-4 flex flex-col items-center">
      <div className="w-1/4 h-48  mx-auto">
        <img
          src=""
          width={250}
          height={400}
          alt=""
          className="w-full h-full object-contain m-auto"
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
